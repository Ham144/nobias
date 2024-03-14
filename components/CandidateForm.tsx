import { useEffect, useState } from "react";
import Button from "../../nobias/components/Button";
import { CheckIcon } from "@heroicons/react/24/outline";

interface Props {
	percent: number;
}

export default function CandidateForm(props: Props) {
	const [percentage, setPercentage] = useState(props.percent);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setPercentage(props.percent);
	}, [[props.percent]]);

	useEffect(() => {
		setPercentage(percentage);
	}, [percentage]);

	const handleAdd = () => {
		setPercentage(percentage + 1);
		// alert("berhasil");
		console.log(props.percent);
	};

	const choose = () => {
		setChecked(!checked);
		if (checked) setPercentage(percentage - 1);
		else setPercentage(percentage + 1);
	};

	return (
		<div className="flex justify-center sm:w-auto w-screen  rounded-s-lg shadow-lg p-2 m-2 gap-x-2 ">
			<div className=" w-10  rounded-s-lg text-center  bg-zinc-200 self-center  py-[40px]">
				1
			</div>
			<div className="flex-col w-[600px]    ">
				<h2 className="title2  !text-left">Candidate name</h2>
				<p className="description text-left">description here</p>
				<div className="flex w-full h-6  bg-zinc-200 gap-2 mt-2 rounded-lg">
					<div
						className={` bg-black h-full rounded-lg transition-all`}
						style={{ width: percentage + "%" }}
					>
						<div
							className="percentage absolute"
							style={
								percentage <= 99
									? {
											transform: `translate(${(percentage * 25) / 2}%, -15%)`,
									  }
									: {}
							}
						>
							{percentage}%
						</div>
					</div>
				</div>
				<Button text="Add multiple" size="small" onclick={handleAdd} />
			</div>
			<div
				className={`${
					checked ? "bg-blue-600" : "bg-zinc-300"
				} title2 px-1 w-10 mx-2 rounded-e-lg text-center  self-center  py-[30px] hover:bg-zinc-500 active:bg-blue-500`}
				onClick={() => choose()}
			>
				<CheckIcon className="w-7 h-7" />
			</div>
		</div>
	);
}
