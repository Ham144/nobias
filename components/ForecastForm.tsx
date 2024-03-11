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
			<XCircleIcon
				width={50}
				className="absolute sm:translate-x-[250%] translate-x-[380%] rounded-full  self-start aspect-square hover:bg-gray-600"
				onClick={() => props.removeCandidate(candidate.key)}
			/>
			<Image
				src={"/favicon.ico"}
				width={50}
				height={50}
				alt="ouch"
				className="self-center pt-2"
			/>
			<p>{props.candidate.key}</p>
			<p className="title2">{props.candidate.name}</p>
			<Form
				className="pt-1 mb-2 "
				onChange={(e) => setCandidate({ ...candidate, name: e })}
				value={props.candidate.name}
				placeHolder="input title"
			/>
		</div>
	);
}
