import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Restricted() {
	return (
		<div className="container h-screen">
			<Image
				src={"/assets/restricted.png"}
				alt="restricted logo"
				width={100}
				height={100}
			/>
			<p className="title1">Restricted Page..</p>
			<div className="flex px-5 py-2 border">
				<a href="/login" onClick={() => signIn()}>
					Login/Sign-Up first here
				</a>
			</div>
		</div>
	);
}
