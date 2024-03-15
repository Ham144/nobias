import Image from "next/image";

export default function Restricted() {
	return (
		<div className="container">
			<Image
				src={"/assets/restricted.png"}
				alt="restricted logo"
				width={300}
				height={300}
			/>
			<p className="title1">Restricted Page..</p>
			<div className="flex px-5 py-2 border">
				<a href="/login">Login/Sign-Up first here</a>
			</div>
		</div>
	);
}
