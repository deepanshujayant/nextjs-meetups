import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({ meetupData }) => {
	return (
		<>
			<Head>
				<title>{meetupData.title}</title>

				<meta name="description" content={meetupData.description} />
			</Head>
			<MeetupDetail
				image={meetupData.image}
				title={meetupData.title}
				address={meetupData.address}
				description={meetupData.description}
			/>
		</>
	);
};

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://deepanshu97:1997deepu@cluster0.8lglf.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();
	return {
		fallback: true,
		paths: meetups.map((meetup) => ({
			params: {
				meetupId: meetup._id.toString(),
			},
		})),
	};
};

export const getStaticProps = async (ctx) => {
	const meetupId = ctx.params.meetupId;
	const client = await MongoClient.connect(
		"mongodb+srv://deepanshu97:1997deepu@cluster0.8lglf.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");

	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});
	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
};
export default MeetupDetails;
