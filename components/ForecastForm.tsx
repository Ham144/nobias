import Image from "next/image";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
	candidate: Candidate;
	submitCandidate: (candidate: Candidate) => void;
	removeCandidate: (key: number) => void;
}

export function ForecastForm(props: Props) {
	// const [title, setTitle] = useState("");
	const [candidate, setCandidate] = useState<Candidate>({
		key: 0,
		name: "",
		title: "",
	});

	useEffect(() => {
		setCandidate(props.candidate);
	}, [props.candidate]);

	useEffect(() => {
		props.submitCandidate(candidate);
	}, [candidate]);

	return (
		<div className="flex description flex-col justify-items-center sm:w-[200px] text-center  border rounded-sm border-blue-500  ">
			<div className="flex flex-row-reverse w-full  justify-between">
				<XCircleIcon
					width={30}
					className="flex rounded-full  self-center aspect-square hover:bg-gray-600"
					onClick={() => props.removeCandidate(candidate.key)}
				/>
				<Image
					className="relative sm:left-[63px] pt-2"
					src={"/favicon.ico"}
					width={50}
					height={50}
					alt="ouch"
				/>
			</div>
			<p>{props.candidate.key}</p>
			<p className="title2 overflow-hidden">{props.candidate.name}</p>
			<Form
				className="pt-1 mb-2 "
				onChange={(e) => setCandidate({ ...candidate, name: e })}
				value={props.candidate.name}
				placeHolder="input title"
			/>
		</div>
	);
}
