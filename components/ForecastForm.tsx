import Image from "next/image";
import Form from "../components/Form";
import { useEffect, useState } from "react";

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

	return (
		<div className="flex description flex-col justify-items-center sm:w-[200px] text-center  border rounded-sm border-blue-500  ">
			<Image
				src={"/favicon.ico"}
				width={50}
				height={50}
				alt="ouch"
				className="self-center pt-2"
			/>
			<p className="title2">hello</p>
			<Form
				className="pt-1 mb-2 "
				onChange={() => }
				value={}
				placeHolder="input title"
			/>
		</div>
	);
}
