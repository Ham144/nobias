import React, { useState } from "react";
import Head from "next/head";
import Menu from "../../components/Menu";
import Image from "next/image";
import Form from "../../components/Form";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import { ForecastForm } from "../../components/ForecastForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";
import { useSession } from "next-auth/react";

import Restricted from "../../components/page/Restricted";
import { showAlert } from "../../components/Alert";
import { useRouter } from "next/router";
import ButtonAlert from "../../components/ButtonAlert";

registerLocale("enUS", enUS);

const Create = () => {
	const { data: session } = useSession();

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [title, setTitle] = useState("");
	const [candidates, setCandidates] = useState<Candidate[]>([]);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const submitCandidate = (candidate: Candidate) => {
		setCandidates(
			candidates.map((c) => (c.key === candidate.key ? candidate : c))
		);
	};

	const addCandidateForm = () => {
		const newCandidate: Candidate = {
			name: "test",
			key: candidates.length + 1,
			title: "",
		};
		setCandidates([...candidates, newCandidate]);
	};

	const removeCandidate = (key: number) => {
		const newCandidates = candidates.filter(
			(candidate) => candidate.key !== key
		);
		newCandidates.forEach((candidate, index) => {
			candidate.key = index + 1;
		});

		setCandidates(newCandidates);
	};

	const createVote = () => {
		if (title === "") {
			showAlert({ title: "Title not found ", message: "Tittle is required" });
			return;
		}
		if (candidates.length < 2) {
			showAlert({
				title: "Lack of Data",
				message: "Data should be more then 2",
			});
			return;
		}
		if (startDate > endDate) {
			showAlert({
				title: "Illegal date input",
				message: "End date is earlier then start date",
			});
			return;
		}
		if (candidates.some((candidate) => candidate.name === "")) {
			showAlert({
				title: "name is required",
				message: "Candidates name is empty",
			});
		}
		setLoading(true);

		fetch("api/vote", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				startDate,
				endDate,
				candidates,
				publisher: session?.user?.email,
			}),
		})
			.then((data) => {
				showAlert({
					title: "Succeed",
					message: "Thanks for your participation",
				});
				router.push("/");
			})
			.finally(() => setLoading(false));
	};

	if (!session) {
		return <Restricted />;
	}

	return (
		<div className="grid grid-cols-1 pt-3 justify-items-center">
			<Head>
				<title>hei</title>
			</Head>
			<Menu />
			<div className="pt-[100px] sm:grid sm:grid-cols-2  sm:w-[70%]  mx-auto ">
				<Image
					src={"/assets/3dcreate.webp"}
					width={400}
					height={400}
					alt="3d create"
					className="flex  drop-shadow-lg	"
				></Image>
				<div className="self-start space-y-16 sm:w-[500px] ">
					<h1 className="title1">Buat Voting baru</h1>
					<p className="description">input the required data before voting</p>
					<h1 className="title2">Detail forecast</h1>
					<label htmlFor="title">
						<div>Forecast Title :</div>
						<Form
							className=""
							value={title}
							onChange={(e) => setTitle(e)}
							placeHolder="AI will make significantly increasing unemployment number"
						/>
						<div className="flex w-full justify-between sm:mt-6 mt-4">
							<label htmlFor="title" className="">
								<div>Start :</div>
								<ReactDatePicker
									locale={"enUS"}
									showTimeSelect
									selected={startDate}
									onChange={(date) => date && setStartDate(date)}
									dateFormat={"Pp"}
									minDate={new Date()}
									className="flex text-center border pt-3 bg-slate-100 rounded-sm"
								/>
							</label>
							<label htmlFor="title" className="">
								<div>End :</div>
								<ReactDatePicker
									locale={"enUS"}
									onChange={(date) => date && setEndDate(date)}
									selected={endDate}
									showTimeSelect
									dateFormat={"Pp"}
									minDate={startDate}
									className="flex text-center border pt-3 bg-slate-100 rounded-sm"
								/>
							</label>
						</div>
					</label>
				</div>
			</div>
			<h2 className="title2 pt-5">Candidates</h2>
			<div className="grid sm:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 sm:justify-center ">
				{candidates.map((candidate: Candidate, index: number) => (
					<ForecastForm
						candidate={candidate}
						key={index}
						submitCandidate={submitCandidate}
						removeCandidate={removeCandidate}
					/>
				))}
				<PlusIcon
					width={100}
					className="aspect-square hover:bg-slate-600 transition hover:cursor-pointer hover:text-white hover:rounded-lg hover:scale-110"
					onClick={() => addCandidateForm()}
				/>
			</div>
			{/* {JSON.stringify(candidates)} */}
			<ButtonAlert
				className="border p-4"
				text="Create"
				onClick={() =>
					showAlert({
						title: " Alert test",
						message: "Alert message appeared here",
					})
				}
			/>
		</div>
	);
};

export default Create;
