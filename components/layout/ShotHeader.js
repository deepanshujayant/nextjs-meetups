import classes from "./ShotHeader.module.css";
import Link from "next/link";
const ShotHeader = () => {
	return (
		<>
			<div className={classes.shotDetail}>
				<header>
					<Link href="/dribbble">
						<button type="button" className="close mr-2">
							<span className={classes.closeSize}>&times;</span>
						</button>
					</Link>
				</header>
			</div>
		</>
	);
};

export default ShotHeader;
