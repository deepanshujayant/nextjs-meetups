import Card from "../ui/Card";
import Link from "next/link";
import classes from "./MeetupItem.module.css";

const LoopingCards = (props) => {
	return (
		<div>
			{props.shots.map((shot) => (
				<>
					<Card>
						<div className={classes.image}>
							<img src={shot.image} alt={shot.title} />
						</div>
						<div className={classes.content}>
							<h3>{shot.title}</h3>
							<button>
								<a href={shot.htmlUrl}>Visit Me!</a>
							</button>
						</div>
					</Card>
					<br />
				</>
			))}
		</div>
	);
};

export default LoopingCards;
