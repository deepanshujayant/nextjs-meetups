import Link from "next/link";
import Navbar from "../components/layout/navbar";
import Head from "next/head";
import Header from "../components/layout/header";
import LoopingCards from "../components/meetups/LoopingCards";
import { urlShots, urlUser, dribbleIcon } from "./api/dribble";
const dribbble = ({ shotData, userData }) => {
	const dribbleHandler = () => {
		console.log("Shots: ", shotData);
		console.log("User: ", userData);
	};
	return (
		<>
			<Head>
				<title>Dribbble</title>
			</Head>
			<Navbar users={userData} />

			<div className="container align-items-center">
				<br />
				<Header />
				<br />
				<br />
				<h6 className="text-center font-weight-bolder mb-5">
					Check out some of today's popular shots
				</h6>
				<LoopingCards
					shots={shotData}
					users={userData}
					/* title={shot.title}
				image={shot.image}
				desc={shot.descpription}
				url={shot.htmlUrl} */
				/>
				<div className="text-center pb-3">
					<Link href={`/dribbble`}>
						<button className="btn btn-light" onClick={dribbleHandler}>
							Load More Shots
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const userRes = await fetch(urlUser);
	const userData = await userRes.json();
	const shotResponse = await fetch(urlShots);
	const shotData = await shotResponse.json();
	return {
		props: {
			shotData: shotData.map((shots) => ({
				id: shots.id,
				title: shots.title,
				image: shots.images.normal,
				descpription: shots.description,
				htmlUrl: shots.html_url,
			})),
			userData: userData,
		},
	};
};

export default dribbble;
