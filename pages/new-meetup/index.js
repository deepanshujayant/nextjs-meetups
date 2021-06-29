import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
//import Layout from "../components/layout/Layout";

const NewMeetup = () => {
	const router = useRouter();
	const addMeetupHandler = async (enteredData) => {
		const response = await fetch("./api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredData),
			headers: {
				"Content-type": "application/json",
			},
		});

		const data = await response.json();
		console.log(data);

		router.push("/");
	};
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="test descp" />
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />

		</>
	);
};

export default NewMeetup;
