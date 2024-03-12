import { LinkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function Table() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const Test = () => {
		try {
			return (
				<section className="container">
					<h1 className="title2">Recently Created Votes</h1>
					<table className="sm:w-[1000px] w-[98%] text-center sm:text-nowrap text-wrap">
						<tr className="">
							<th className="border">No</th>
							<th className="border">Title</th>
							<th className="border">Forecast</th>
							<th className="border">Code</th>
							<th className="border">Start</th>
							<th className="border">End</th>
						</tr>
						<tr>
							<td className="border py-3">1</td>
							<td className="border py-3">Indonesia economy</td>
							<td className="border py-3">
								2045 have enormous youth population
							</td>
							<td className="border py-3">423kln</td>
							<td className="border py-3">24 january 2023</td>
							<td className="border py-3 border-l-0 flex justify-between items-center">
								21 january 2045
								<div className="">
									<a href="#" className="">
										<LinkIcon className="h-7 w-7 text-blue-500  p-1 hover:bg-blue-100" />
										<TrashIcon className="h-7 w-7 text-blue-500 p-1  hover:bg-blue-100" />
									</a>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border py-3">1</td>
							<td className="border py-3">Indonesia economy</td>
							<td className="border py-3">
								2045 have enormous youth population
							</td>
							<td className="border py-3">423kln</td>
							<td className="border py-3">24 january 2023</td>
							<td className="border py-3 border-l-0 flex justify-between items-center">
								21 january 2045
								<div className="">
									<a href="#" className="">
										<LinkIcon className="h-7 w-7 text-blue-500  p-1 hover:bg-blue-100" />
										<TrashIcon className="h-7 w-7 text-blue-500 p-1  hover:bg-blue-100" />
									</a>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border py-3">1</td>
							<td className="border py-3">Indonesia economy</td>
							<td className="border py-3">
								2045 have enormous youth population
							</td>
							<td className="border py-3">423kln</td>
							<td className="border py-3">24 january 2023</td>
							<td className="border py-3 border-l-0 flex justify-between items-center">
								21 january 2045
								<div className="">
									<a href="#" className="">
										<LinkIcon className="h-7 w-7 text-blue-500  p-1 hover:bg-blue-100" />
										<TrashIcon className="h-7 w-7 text-blue-500 p-1  hover:bg-blue-100" />
									</a>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border py-3">1</td>
							<td className="border py-3">Indonesia economy</td>
							<td className="border py-3">
								2045 have enormous youth population
							</td>
							<td className="border py-3">423kln</td>
							<td className="border py-3">24 january 2023</td>
							<td className="border py-3 border-l-0 flex justify-between items-center">
								21 january 2045
								<div className="">
									<a href="#" className="">
										<LinkIcon className="h-7 w-7 text-blue-500  p-1 hover:bg-blue-100" />
										<TrashIcon className="h-7 w-7 text-blue-500 p-1  hover:bg-blue-100" />
									</a>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border py-3">1</td>
							<td className="border py-3">Indonesia economy</td>
							<td className="border py-3">
								2045 have enormous youth population
							</td>
							<td className="border py-3">423kln</td>
							<td className="border py-3">24 january 2023</td>
							<td className="border py-3 border-l-0 flex justify-between items-center">
								21 january 2045
								<div className="">
									<a href="#" className="">
										<LinkIcon className="h-7 w-7 text-blue-500  p-1 hover:bg-blue-100" />
										<TrashIcon className="h-7 w-7 text-blue-500 p-1  hover:bg-blue-100" />
									</a>
								</div>
							</td>
						</tr>
					</table>
				</section>
			);
		} catch (error) {
			console.log("throwOnHydrationMismatch");
		}
	};

	return <div>{isClient ? <Test /> : "Prerendered"}</div>;
}
