import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Menu() {
	const route = useRouter();
	const { data: session } = useSession();
	const [profil, setProfil] = useState(false);
	const hideLogout = () => {
		signOut();
		setProfil(!profil);
	};

	return (
		<nav className="flex fixed w-full items-center my-auto z-30">
			<div className="w-full absolute  z-0  backdrop-blur-sm  h-[150%]"></div>
			<div className=" flex justify-between p-3 items-center sm:px-20 mx-auto sm:pt-5 h-full  w-full z-20">
				{/* {JSON.stringify(session)} */}
				<Image
					className="cursor-pointer"
					src={"/assets/nobias-logo.png"}
					width={100}
					height={200}
					alt="image of logo"
					onClick={() => route.push("/")}
				/>
				{session ? (
					<div>
						<Image
							className={` border rounded-full w-[50px] h-[50px]cursor-pointer hover:border-pink-800 transition-opacity`}
							src={session?.user?.image as string}
							width={120}
							height={120}
							alt={"profil"}
							onClick={() => setProfil(!profil)}
						/>
						<Button
							className={`${
								profil ? "" : "hidden"
							} absolute sm:right-7 right-2 top-19 flex justify-center items-center border px-3 sm:px-12 py-2 bg-white  rounded-xl hover:bg-pink-100`}
							text="Keluar"
							size="40"
							onclick={hideLogout}
						/>
					</div>
				) : (
					<Button onclick={signIn} target="/login" text="Login" size="medium" />
				)}
			</div>
		</nav>
	);
}
