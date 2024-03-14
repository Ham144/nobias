import { useState } from "react";
import Button from "../.././nobias/components/Button";
import { createRoot } from "react-dom/client";
// import Button from "./Button";

// import { text } from "stream/consumers";

interface Props {
	isOpen?: boolean;
	title?: string;
	message?: string;

	positiveButtonText: string;
	negativeButtonText: string;

	onPositiveClick: () => void;
	onNegativeClick: () => void;
}

function Alert(props: Props) {
	const [isOpen, setIsopen] = useState(props.isOpen);

	return (
		<div
			className={`relative z-10 ${!isOpen && "hidden"}`}
			role="dialog"
			aria-modal
		>
			<div className="fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity"></div>
			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-center justify-center text-center">
					<div className="relative transform overflow-hidden bg-white text-left shadow-xl  transition-all p4  rounded-md">
						<p className="text2xl font-bold ">
							{props.title || "Title is here"}
						</p>
						<p className="text-lg  ">{props.message || "message is here"} </p>

						<div className=" space-x-5 mt-5">
							<button
								className="text-center bg-zinc-100 px-2 py-1 "
								onClick={() => {
									props.onNegativeClick;
									setIsopen(false);
								}}
							>
								{props.negativeButtonText || "Kembali"}
							</button>
							<Button
								className={`${!props.onPositiveClick && "hidden"}`}
								onclick={() => {
									props.onPositiveClick && props.onPositiveClick();
									setIsopen(false);
								}}
								text={props.positiveButtonText || "Yes"}
								size="small"
							/>
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
			isOpen={true}
			title={props.title}
			message={props.message}
			positiveButtonText="Yes"
			negativeButtonText="No"
			onPositiveClick={props.onPositiveClick}
			onNegativeClick={props.onNegativeClick}
		/>
	);
}
