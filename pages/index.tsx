import type { NextPage } from "next";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Table from "../components/Table";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Nobias</title>
				<link
					rel="shortcut icon"
					href="/assets/nobias-logo.png"
					type="image/x-icon"
				/>
			</Head>
			<Menu />
			<Banner />
			<Table />
		</div>
	);
};

export default Home;
