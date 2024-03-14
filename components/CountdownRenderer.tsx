import CountdownItem from "./ContdownItem";

interface Props {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export default function CountdownRenderer(props: Props) {
	return (
		<>
			<div className="flex flex-row ">
				<CountdownItem value={props.days} label="day" />
				<span className="font-extrabold">:</span>
				<CountdownItem value={props.hours} label="hour" />
				<span className="font-extrabold">:</span>
				<CountdownItem value={props.minutes} label="mins" />
				<span className="font-extrabold">:</span>

				<CountdownItem value={props.seconds} label="secs" />
			</div>
		</>
	);
}
