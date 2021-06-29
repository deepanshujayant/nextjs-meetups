import { useState } from "react";
// import Shot from "../../pages/shot/[shotId]";
import classes from "./LoopingCards.module.css";
import Link from "next/link";
import Modal from "../ui/Modal";

const LoopingCards = (props) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
				{props.shots.map((shot) => (
					<div className="col mb-4">
						<div className={`h-100 ${classes.cursor}`}>

							<div className="position-relative">
								<Link
									href={`/shot/[shotId]`}
									as={`/shot/${shot.id}`}
								>
									<a>
										<img
											className="img-fluid rounded mb-1"
											src={shot.image}
											alt={shot.title}
										/>
										<div
											className={`d-flex justify-content-between position-absolute rounded-bottom px-3 w-100 ${classes.hoverElement}`}
										>
											<h6 className="mt-2 text-white">{shot.title}</h6>
											<div>
												<button className="btn btn-sm btn-light m-1">1</button>
												<button className="btn btn-sm btn-light m-1">2</button>
											</div>
										</div>
									</a>
								</Link>

								<Modal
									show={showModal}
									onClose={() => setShowModal(false)}
									image={shot.image}
									title={shot.title}
									username={props.users.name}
									avatar={props.users.avatar_url}
								/>
							</div>
							<div className="d-flex justify-content-between">
								<div className="font-weight-bold">
									<img
										className="rounded-circle mr-2"
										width="24px"
										height="24px"
										src={props.users.avatar_url}
										alt=""
									/>
									<span>{props.users.name}</span>
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
				))}
			</div>
		</>
	);
};

export default LoopingCards;
