import Image from "next/image";
import Button from "../components/Button";

export default function Banner() {
	return (
		<div className="container   py-[90px]  sm:gap-2 bg-gradient-to-br from-slate-500 to-red-100 ">
			<h1 className="title1">ayo mulai voting</h1>
			<p className="description">Superforecasting web #1 in da world</p>
			<Image
				className="rounded-lg mt-3"
				src={"/assets/banner-img.jpg"}
				width={300}
				height={300}
				alt="banner for voting"
			/>
			<div className="flex flex-col sm:flex-row sm:space-x-8 mt-14 space-y-2">
				<Button text="buat vote baru" size="big-black" />
				<Button text="ikutan vote" size="big-white" />
			</div>
		</div>
	);
}
