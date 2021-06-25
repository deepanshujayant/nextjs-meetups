import Meetuplist from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head';

const DUMMY = [
	{
		id: "m1",
		image:
			"https://cdn.shrm.org/image/upload/c_crop,h_745,w_1325,x_0,y_34/c_fit,f_auto,q_auto,w_767/v1/Global%20HR/Madrid1m_ko7ivu?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjM0LCJ4MiI6MTMyNSwieTIiOjc3OSwidyI6MTMyNSwiaCI6NzQ1fX0%3D",
		title: "Meetup 1",
		address: "Sample address",
	},
	{
		id: "m2",
		image:
			"https://cdn.shrm.org/image/upload/c_crop,h_745,w_1325,x_0,y_34/c_fit,f_auto,q_auto,w_767/v1/Global%20HR/Madrid1m_ko7ivu?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjM0LCJ4MiI6MTMyNSwieTIiOjc3OSwidyI6MTMyNSwiaCI6NzQ1fX0%3D",
		title: "Meetup 2",
		address: "Sample address 2",
	},
];
const homepage = (props) => {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="test descp"/>
			</Head>
			<Meetuplist meetups={props.meetups} />
		</>
	);
};

/* export const getServerSideProps = async (ctx) => {
	
	const req = ctx.req;
	const res = ctx.res;
	
	return {
		props: { meetups: DUMMY },
	};
}; */

export const getStaticProps = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://deepanshu97:1997deepu@cluster0.8lglf.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
};
export default homepage;
