import { useState } from "react";
// import Button from "../../nobias/components/Button";
import { createRoot } from "react-dom/client";
import ButtonAlert from "../components/ButtonAlert";

interface Props {
	isOpen?: boolean;
	title?: string;
	message?: string;

	positiveBtnText?: string;
	negativeBtnText?: string;

	onPositiveClick?: () => void;
	onNegativeClick?: () => void;
}

function Alert(props: Props) {
	const [isOpen, setIsopn] = useState(true);
	return (
		<div
			className={`relative z-20 ${!isOpen && "hidden"} `}
			role="dialog"
			aria-modal="true"
		>
			<div className="fixed inset-0 bg-zinc-500  bg-opacity-40 overflow transition-opacity"></div>
			<div className="fixed inset-0 z-10 overflow-y-auto ">
				<div className="flex min-h-full  justify-center text-center items-center">
					<div className="relative transform overflow-hidden bg-white  shadow-lg transition-all p-4 rounded-sm">
						<div className="full p-5 text-center">
							<p className="text2xl font-normal">
								{props.title || "title undefined"}
							</p>
							<p className="textlg">{props.message || "message undefined"}</p>
							<div className="space-x-3 mt-5">
								<button
									className="text-sm bg-zinc-100 px-2 py-1 hover:bg-zinc-200"
									onClick={() => {
										props.onNegativeClick && props.onNegativeClick();
										setIsopn(false);
									}}
								>
									{props.negativeBtnText || "cancel"}
								</button>

								<ButtonAlert
									className={`${!props.onPositiveClick && "hidden"}`}
									onClick={() => {
										props.onPositiveClick && props.onPositiveClick();
										setIsopn(false);
									}}
									text={props.positiveBtnText || "Ok"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function showAlert(props: Props) {
	const alert = document.createElement("div");
	alert.id = "alert";
	document.body.appendChild(alert);
	const root = createRoot(alert);
	root.render(
		<Alert
			isOpen={props.isOpen}
			title={props.title}
			message={props.message}
			negativeBtnText={props.negativeBtnText}
			positiveBtnText={props.positiveBtnText}
			onNegativeClick={props.onNegativeClick}
			onPositiveClick={props.onPositiveClick}
		/>
	);
}
