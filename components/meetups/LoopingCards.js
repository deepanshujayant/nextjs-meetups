import classes from "./LoopingCards.module.css";
import Link from "next/link";
const LoopingCards = (props) => {
	return (
		<>
			{props.shots.map((shot) => (
				<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
					<div className="col mb-4">
						<div className={`h-100 ${classes.cursor}`}>
							<div className="position-relative">
								<Link href="#">
									<>
										<img
											className="img-fluid rounded mb-1"
											src={shot.image}
											alt={shot.title}
										/>
										<div
											className={`d-flex justify-content-between align-items-center position-absolute rounded-bottom px-3 w-100 ${classes.hoverElement}`}
										>
											<h6 className="mt-2 text-white">{shot.title}</h6>
											<div>
												<button className="btn btn-sm btn-light m-1">1</button>
												<button className="btn btn-sm btn-light m-1">2</button>
											</div>
										</div>
									</>
								</Link>
							</div>
							<div className="d-flex justify-content-between">
								<div className="font-weight-bold">
									<img
										className="rounded-circle mr-2"
										width="24px"
										height="24px"
										src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
										alt=""
									/>
									<span>User Name</span>
								</div>
								<div className="font-weight-bolder text-muted">
									<span className="mx-1">
										<small>24</small>
									</span>
									<span className="mx-1">
										<small>20</small>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col mb-4">
						<div className={`h-100 ${classes.cursor}`}>
							<div className="position-relative">
								<Link href="#">
									<>
										<img
											className="img-fluid rounded mb-1"
											src={shot.image}
											alt={shot.title}
										/>
										<div
											className={`d-flex justify-content-between align-items-center position-absolute rounded-bottom px-3 w-100 ${classes.hoverElement}`}
										>
											<h6 className="mt-2 text-white">{shot.title}</h6>
											<div>
												<button className="btn btn-sm btn-light m-1">1</button>
												<button className="btn btn-sm btn-light m-1">2</button>
											</div>
										</div>
									</>
								</Link>
							</div>
							<div className="d-flex justify-content-between">
								<div className="font-weight-bold">
									<img
										className="rounded-circle mr-2"
										width="24px"
										height="24px"
										src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
										alt=""
									/>
									<span>User Name</span>
								</div>
								<div className="font-weight-bolder text-muted">
									<span className="mx-1">
										<small>24</small>
									</span>
									<span className="mx-1">
										<small>20</small>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col mb-4">
						<div className={`h-100 ${classes.cursor}`}>
							<div className="position-relative">
								<Link href="#">
									<>
										<img
											className="img-fluid rounded mb-1"
											src={shot.image}
											alt={shot.title}
										/>
										<div
											className={`d-flex justify-content-between align-items-center position-absolute rounded-bottom px-3 w-100 ${classes.hoverElement}`}
										>
											<h6 className="mt-2 text-white">{shot.title}</h6>
											<div>
												<button className="btn btn-sm btn-light m-1">1</button>
												<button className="btn btn-sm btn-light m-1">2</button>
											</div>
										</div>
									</>
								</Link>
							</div>
							<div className="d-flex justify-content-between">
								<div className="font-weight-bold">
									<img
										className="rounded-circle mr-2"
										width="24px"
										height="24px"
										src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
										alt=""
									/>
									<span>User Name</span>
								</div>
								<div className="font-weight-bolder text-muted">
									<span className="mx-1">
										<small>24</small>
									</span>
									<span className="mx-1">
										<small>20</small>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col mb-4">
						<div className={`h-100 ${classes.cursor}`}>
							<div className="position-relative">
								<Link href="#">
									<>
										<img
											className="img-fluid rounded mb-1"
											src={shot.image}
											alt={shot.title}
										/>
										<div
											className={`d-flex justify-content-between align-items-center position-absolute rounded-bottom px-3 w-100 ${classes.hoverElement}`}
										>
											<h6 className="mt-2 text-white">{shot.title}</h6>
											<div>
												<button className="btn btn-sm btn-light m-1">1</button>
												<button className="btn btn-sm btn-light m-1">2</button>
											</div>
										</div>
									</>
								</Link>
							</div>
							<div className="d-flex justify-content-between">
								<div className="font-weight-bold">
									<img
										className="rounded-circle mr-2"
										width="24px"
										height="24px"
										src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
										alt=""
									/>
									<span>User Name</span>
								</div>
								<div className="font-weight-bolder text-muted">
									<span className="mx-1">
										<small>24</small>
									</span>
									<span className="mx-1">
										<small>20</small>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default LoopingCards;
{
	/* 
	
	
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
					<br /> */
}
