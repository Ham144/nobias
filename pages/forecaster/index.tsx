import Image from "next/image";
import React from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";

const index = () => {
	return (
		<div className="container sm:w-[50%]   gap-y-6 flex-wrap text-wrap sm:w-[100vh] w-[96%] ">
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
						onChange={() => {}}
						value=""
						placeHolder="Input Your Name"
					/>
				</div>

				<div className="flex flex-1 sm:w-[100%] w-screen space-x-4 justify-between items-start">
					<p className="description">Password : </p>
					<Form
						className="w-[50%]"
						onChange={() => {}}
						value=""
						placeHolder="Input Your Password"
					/>
				</div>
			</div>
			<div className="flex gap-5 mt-14">
				<Button text="Back" size="big-transparent" target="/" />
				<Button text="Next" size="big-black" target="" />
			</div>
		</div>
	);
};

export default index;
