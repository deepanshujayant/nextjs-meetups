import classes from "./header.module.css";

const Header = () => {
	return (
		<header>
			<div className="d-flex justify-content-between">
				<div class="dropdown border rounded">
					<a
						className="btn dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Following
					</a>
					
					<div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item text-danger" href="#">
							Following
						</a>
						<a className="dropdown-item" href="#">
							Popular
						</a>
						<a className="dropdown-item" href="#">
							New & Noteworthy
						</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">
							Goods for sale
						</a>
					</div>
				</div>
				<nav className="navbar navbar-expand-sm p-0 d-none d-lg-block navbar-light bg-white">
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<a className="nav-link btn-light btn" href="#">
								All<span class="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Animation
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Branding
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Illustration
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Mobile
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Print
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Product Design
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Typography
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Web Design
							</a>
						</li>
					</ul>
				</nav>
				{/* <div className={`${classes.list}`}>
					<ul>
						<li>
							<button className="btn btn-light">
								<small>All</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Animation</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Branding</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Illustration</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Mobile</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Print</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Product Design</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Typography</small>
							</button>
						</li>
						<li>
							<button className="btn">
								<small>Web Design</small>
							</button>
						</li>
					</ul>
				</div> */}
				<buttton className="btn border rounded">Filters</buttton>
			</div>
		</header>
	);
};

export default Header;
