import { useEffect, useState } from "react";
//import ReactDOM from "react-dom";

const Modal = ({ show, onClose }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const closeHandler = (e) => {
		e.preventDefault();
		onClose();
	};

	const modal = show ? (
		<div
			className="modal fade"
			id="modelId"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							onClick={closeHandler}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">Body</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return modal;
	} else {
		return null;
	}
};

export default Modal;
