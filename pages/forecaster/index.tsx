import Image from "next/image";
import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

const Index = () => {
	const [useName, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hideOrNot, setHideornot] = useState(true);

	const handleHide = () => {
		return setHideornot(!hideOrNot);
	};

	const getName = () => {
		const emailArray = email.split("");
		const found = emailArray.findIndex((alphabet) => {
			return alphabet === "@";
		});
		if (found === -1) {
			setUsername("");
			return;
		}
		const name2 = emailArray.splice(0, found).join("");

		console.log(name2);
		setUsername(name2);
	};

	useEffect(() => {
		getName();
	}, [email]);

	return (
		<div className="container overflow-hidden  gap-y-6 flex-wrap text-wrap sm:w-[100vh] w-[96%] ">
			<Image
				className=""
				src={"/assets/forecasters.webp"}
				width={200}
				height={200}
				alt="participate becoming forecasters"
			/>
			<h2 className="sm:title1 title2 mx-3">
				Participate and become super Forecasters
			</h2>
			<div className=" description sm:w-[80%] w-[50vh] text-center">
				Here you can practice your critical thinking and read the future
			</div>

			<div className="flex flex-col self-center  justify-items-center flex-1 sm:w-[79vh] w-full gap-y-5">
				<div className="flex flex-1 sm:w-[100%] w-screen space-x-4 justify-between  items-start">
					<p className="description">Email : </p>
					<Form
						className="w-[50%]"
						onChange={(e) => {
							setEmail(e);
						}}
						value={email}
						placeHolder="Input Your Email"
						type="email"
					/>
				</div>

				<div className="flex flex-1 sm:w-[100%] w-screen space-x-4 justify-between items-start">
					<p className="description">Password : </p>
					<Form
						className="w-[50%]"
						onChange={(e) => {
							setPassword(e);
						}}
						value={password}
						placeHolder="Input Your Password"
						type={hideOrNot ? "password" : "text"}
					/>
					<button
						onClick={handleHide}
						className={`absolute  sm:translate-x-[550px] sm:translate-y-[10px] drop-shadow-lg ${
							password ? "" : "hidden"
						}`}
					>
						<EyeSlashIcon width={20} height={20} />
					</button>
				</div>
			</div>
			<div className="flex gap-5 mt-14 h-auto ">
				<Button text="Back" size="big-transparent" target="/" />
				{!useName || !(password.length > 5) ? ( // Only show alert if both are empty
					<div className="border border-l-8 p-2 rounded">
						<ol>
							<li className=" underline decoration-wavy decoration-red-500">
								email should include @
							</li>
							<li className=" underline decoration-wavy decoration-red-500">
								password length should be more then 5
							</li>
						</ol>
					</div> // Use <alert> tag if this is JSX
				) : (
					<Button
						text="Next"
						size="big-black"
						target={`forecaster/${useName}`}
					/>
				)}
			</div>
		</div>
	);
};

export default Index;
