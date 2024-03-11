import React, { useState } from "react";
import Head from "next/head";
import Menu from "../../components/Menu";
import Image from "next/image";
import Form from "../../components/Form";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";
import { ForecastForm } from "../../components/ForecastForm";

registerLocale("enUS", enUS);

const Create = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [title, setTitle] = useState("");

	return (
		<div className="grid grid-cols-1 pt-3 justify-items-center">
			<Head>
				<title>hei</title>
			</Head>
			<Menu />
			<div className="pt-[90px] sm:grid sm:grid-cols-2  sm:w-[70%]  mx-auto ">
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
					<h1 className="title2">Detail</h1>
					<label htmlFor="title">
						<div>Title :</div>
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
			<h2 className="title2 pt-5">forecast</h2>
			<div className="grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 sm:justify-center ">
				<ForecastForm candidate={} submitCandidate={} removeCandidate={} />
			</div>
		</div>
	);
};

export default Create;
