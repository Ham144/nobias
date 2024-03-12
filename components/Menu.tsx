import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Menu() {
	const route = useRouter();

	return (
		<nav className="flex fixed w-full items-center my-auto z-30">
			<div className="w-full absolute  z-0  backdrop-blur-sm  h-[150%]"></div>
			<div className=" flex justify-between p-3 items-center sm:px-20 mx-auto sm:pt-5 h-full  w-full z-20">
				<Image
					className="cursor-pointer"
					src={"/assets/nobias-logo.png"}
					width={100}
					height={200}
					alt="image of logo"
					onClick={() => route.push("/")}
				/>
				<Button target="#" text="test" size="medium" />
			</div>
		</nav>
	);
}
