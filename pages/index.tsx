import type { NextPage } from "next";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Table from "../components/Table";

const Home: NextPage = () => {
	return (
		<div className="">
			<Menu />
			<Banner />
			<Table />
		</div>
	);
};

export default Home;
