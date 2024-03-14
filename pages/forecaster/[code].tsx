import { useRouter } from "next/router";
import React, { useState } from "react";
import Menu from "../../components/Menu";
import Head from "next/head";
import CandidateForm from "../../components/CandidateForm";
import CountDown from "../../components/CountDown";

const Code = () => {
	const router = useRouter();
	const { code } = router.query;

	const [percent, setPercent] = useState(10);

	return (
		<div className=" overflow-x-hidden  flex justify-center  ">
			<Head>
				<title>Voting {code}</title>
			</Head>
			<Menu />
			<div className="flex flex-col  gap-y-3 pt-[100px] w-[800px]   items-center mx-auto ">
				<div className=" title1   border border-b-8 sm:pl-5 ">
					Make it real,{code}
				</div>

				<div className="flex sm:flex-row justify-between sm:w-screen sm:px-[200px] flex-col">
					<h2 className="title1 description overflow-hidden max-w-[300px]">
						Voting Title
					</h2>
					<div className="description title1 text-center self-center ">
						<CountDown />
					</div>
				</div>
				<div>
					<h2 className="title1">test percent</h2>
					<input
						type="range"
						value={percent}
						onChange={(e) => setPercent(Number(e.target.value))}
					/>
					{percent}
				</div>

				<div className="flex flex-col sm:w-full  justify-center">
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
					<CandidateForm percent={percent} />
				</div>
			</div>
		</div>
	);
};

export default Code;
