// import { useEffect, useState } from "react";
import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Header from "../components/layout/header";
import LoopingCards from "../components/meetups/LoopingCards";
import { url } from "./api/dribble";
const dribbble = ({ data }) => {
	const dribbleHandler = () => {
		console.log(data);
	};
	return (
		<>
			<Navbar />

			<div className="px-5 align-items-center">
				<br />
				<Header />
				<br />
				<br />
				<h6 className="text-center font-weight-bolder mb-5">
					Check out some of today's popular shots
				</h6>
				<LoopingCards
					key={data.id}
					shots={data}
					/* title={shot.title}
				image={shot.image}
				desc={shot.descpription}
				url={shot.htmlUrl} */
				/>
				<div className="text-center">
					<button className="btn btn-outline-danger" onClick={dribbleHandler}>
						Fetch Data
					</button>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const response = await fetch(url);
	const data = await response.json();
	return {
		props: {
			data: data.map((shots) => ({
				id: shots.id,
				title: shots.title,
				image: shots.images.normal,
				descpription: shots.description,
				htmlUrl: shots.html_url,
			})),
		},
	};
};

export default dribbble;
