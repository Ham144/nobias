import Image from "next/image";
import Button from "../components/Button";

export default function Banner() {
	return (
		<div className="container   py-[100px]  sm:gap-2 bg-gradient-to-br from-slate-500 to-red-100 ">
			<h1 className="title1">Super Forecasting provider</h1>
			<p className="description text-center mx-2">
				Superforecasting web #1 in da world and grasp future faster
			</p>
			<Image
				className="rounded-lg mt-3"
				src={"/assets/banner-img.jpg"}
				width={300}
				height={300}
				alt="banner for voting"
			/>
			<div className="flex flex-col sm:flex-row sm:space-x-8 mt-14 gap-2">
				<Button target="vote/create" text="Create New Vote" size="big-black" />
				<Button target="/forecaster" text="Participate" size="big-white" />
			</div>
		</div>
	);
}
