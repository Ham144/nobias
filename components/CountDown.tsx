import Countdown, { CountdownRendererFn } from "react-countdown";
import CountdownRenderer from "./CountdownRenderer";

export default function CountDown() {
	const countDown: CountdownRendererFn = ({
		days,
		hours,
		minutes,
		seconds,
	}) => {
		return (
			<CountdownRenderer
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	};

	return (
		<div>
			<Countdown date={Date.now() + 10000} renderer={countDown} />
		</div>
	);
}
