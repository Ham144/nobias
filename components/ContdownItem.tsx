import { zeroPad } from "react-countdown";

interface Props {
	value: number;
	label: string;
}

export default function CountdownItem(props: Props) {
	return (
		<>
			<div className="flex  items-center ">
				<div className="flex flex-col text-center">
					<span className="text-3xl">{zeroPad(props.value, 2)}</span>
					<span>{props.label}</span>
				</div>
			</div>
		</>
	);
}
