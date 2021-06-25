import Meetuplist from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head';


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
