import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
	return (
		<div>
			<NewMeetupForm onAddMeetup={func} />
		</div>
	);
};

export default NewMeetup;
