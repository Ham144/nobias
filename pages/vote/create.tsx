import React from "react";
import Head from "next/head";
import Menu from "../../components/Menu";
import Image from "next/image";

const create = () => {
	return (
		<div className="flex justify-center pt-3">
			<Head>
				<title>hei</title>
			</Head>
			<Menu />

			<div className="pt-[90px] grid grid-cols-2 w-[50%] justify-items-center  mx-auto ">
				<Image
					src={"/assets/3dcreate.webp"}
					width={400}
					height={400}
					alt="3d create"
					className="flex self-end"
				></Image>
				<div className="  self-start space-y-3">
					<h1 className="title1">Buat Voting baru</h1>
					<p className="description">input the required data before voting</p>
					<h1 className="title2">Detail</h1>
					<label htmlFor="title" className="">
						Title :
						<input
							type="text"
							autoComplete="true"
							className="flex text-center border pt-3 w-[100%]  bg-slate-100 rounded-sm"
						/>
					</label>
					<div className="flex gap-8">
						<label htmlFor="title" className="">
							Start :
							<input
								type="text"
								autoComplete="true"
								className="flex text-center border pt-3 w-[100%]  bg-slate-100 rounded-sm"
							/>
						</label>
						<label htmlFor="title" className="">
							End :
							<input
								type="text"
								autoComplete="true"
								className="flex text-center border pt-3 w-[100%]  bg-slate-100 rounded-sm"
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default create;
