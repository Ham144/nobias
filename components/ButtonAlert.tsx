interface Props {
	className?: string;
	text: string;
	onClick: () => void;
}
export default function ButtonAlert(props: Props) {
	return (
		<button
			className={`${props.className}`}
			onClick={props.onClick && props.onClick}
		>
			{props.text}
		</button>
	);
}
