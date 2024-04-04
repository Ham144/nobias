import { useRouter } from "next/router";
import React, { useState } from "react";
import Menu from "../../components/Menu";
import Head from "next/head";
import CandidateForm from "../../components/CandidateForm";
import CountDown from "../../components/CountDown";
import ButtonAlert from "../../components/ButtonAlert";
import { showAlert } from "../../components/Alert";

const Code = () => {
	const router = useRouter();
	const { code } = router.query;

	const [percent, setPercent] = useState(10);

	return (
		<div className=" overflow-x-hidden  flex justify-center  ">
			<Head>
				<title>Voting...</title>
			</Head>
			<Menu />
			<div className="flex flex-col  gap-y-3 pt-[100px] w-[800px]   items-center mx-auto ">
				<div className=" title1   border border-b-8 sm:pl-5 ">
					Make it real,{code}
				</div>

				<div className="flex sm:flex-row  justify-between sm:w-screen sm:px-[200px] flex-col">
					<h2 className=" flex items-center title1 description overflow-hidden ">
						Voting Title
					</h2>
					<div className="description title1 text-center self-center ">
						<CountDown />
					</div>
				</div>

				<div className="flex flex-col sm:w-full  justify-center">
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
				</div>
				<ButtonAlert
					className="border p-4"
					text="Dummy Button showAlert"
					onClick={() =>
						showAlert({
							title: "title ",
							message: "Alert message appeared here",
							isOpen: true,
							onPositiveClick: () => alert("Sent successfully"),
							positiveBtnText: "Confirm",
						})
					}
				/>
			</div>
		</div>
	);
};

export default Code;
