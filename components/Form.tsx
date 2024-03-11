interface Props {
	onChange: (value: string) => void;
	value: string;
	placeHolder: string;
	className: string;
}

export default function Form(props: Props) {
	return (
		<input
			type="text"
			value={props.value}
			autoComplete="true"
			onChange={(e) => props.onChange(e.target.value)}
			placeholder={props.placeHolder}
			className={` ${props.className} flex text-center border pt-3 font-sans  text-zinc-800 w-[100%]  bg-slate-100 rounded-sm"
`}
		/>
	);
}
