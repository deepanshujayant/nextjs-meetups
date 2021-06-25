import Meetuplist from "../components/meetups/MeetupList";
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
const homepage = () => {
	return (
		<>
			<Meetuplist meetups={DUMMY} />
		</>
	);
};

export default homepage;
