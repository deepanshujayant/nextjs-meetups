const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-4">
				<a className="navbar-brand" href="#">
					dribble
				</a>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto text-muted mt-2 mt-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Inspiration <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Find Work <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Learn Design <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Go Pro <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Hire Designers <span className="sr-only">(current)</span>
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
                        <a href="" className="m-2">
                            Apply Now
                        </a>
						<input
							className="form-control mx-2 rounded-pill bg-light border-light w-25 mr-sm-2"
							type="text"
							placeholder="Search"
						/>
						<img
                            className="mx-2"
							src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
							width="32px"
							height="32px"
						/>
						<button className="btn btn-danger m-2 my-sm-0" type="submit">
							Upload
						</button>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
