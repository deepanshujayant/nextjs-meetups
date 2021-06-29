import { useRouter } from "next/router";
import { urlShots, urlUser, access_token } from "../api/dribble";
import Head from "next/head";
import ShotHeader from "../../components/layout/ShotHeader";
import classes from "../../components/layout/ShotHeader.module.css";
const shot = ({ shot, userData }) => {
	// const router = useRouter();
	// const { shotId } = router.query;
	return (
		<>
			<Head>
				<title>{shot.title}</title>
				<link rel="icon" href={userData.avatar_url} />
			</Head>
			<ShotHeader />
			<div className="container">
				<div className={`mt-5 ${classes.paddingCustom}`}>
					<div className="d-flex">
						<img
							src={userData.avatar_url}
							alt="avatar"
							className="rounded-circle"
							width="48px"
							height="48px"
						/>
						<div className="mx-2">
							<h6 className="">{shot.title}</h6>
							<p>{userData.name}</p>
						</div>
					</div>
					<img
						src={shot.images.hidpi}
						className="mt-4 img-fluid rounded"
						alt=""
					/>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async (ctx) => {
	const userRes = await fetch(urlUser);
	const userData = await userRes.json();
	const shotRes = await fetch(
		`https://api.dribbble.com/v2/shots/${ctx.params.id}` +
			`?access_token=${access_token}`
	);
	//console.log(res);
	const shot = await shotRes.json();

	return {
		props: {
			shot,
			userData,
		},
	};
};
export default shot;
