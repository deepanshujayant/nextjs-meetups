// import { useEffect, useState } from "react";
import { useState } from "react";
import Navbar from "../components/layout/navbar";
import LoopingCards from "../components/meetups/LoopingCards";
import { url } from "./api/dribble";
const dribbble = ({ data }) => {
	const dribbleHandler = () => {
		console.log(data);
	};
	return (
		<>
			<Navbar />
			<div className="container justify-content-center">
                <br />
				<LoopingCards
					key={data.id}
					shots={data}
					/* title={shot.title}
				image={shot.image}
				desc={shot.descpription}
				url={shot.htmlUrl} */
				/>
				<button className="btn btn-primary" onClick={dribbleHandler}>
					Test Button
				</button>
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
