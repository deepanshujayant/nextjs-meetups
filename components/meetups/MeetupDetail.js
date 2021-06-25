import classes from "./MeetupDetail.module.css";
// import Image from "next/image"

const MeetupDetail = (props) => {
	return (
		<div className={classes.details}>
			<img src={props.image} />
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</div>
	);
};

export default MeetupDetail;
 