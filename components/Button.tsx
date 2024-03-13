import { useRouter } from "next/navigation";

type setup = {
	text: string;
	size: string;
	target?: string;
	onclick?: () => void;
};

export default function Button(props: setup) {
	const router = useRouter();

	const pxpy = (size: string) => {
		switch (size) {
			case "medium":
				return "px-14 py-3 hover:bg-slate-100 ";
				break;
			case "small":
				return "px-3 py-1 hover:bg-slate-100 ";
				break;
			case "big-white":
				return "px-20 py-3 bg-white text-black hover:bg-slate-50 hover:text-black";
			case "big-black":
				return "px-20 py-3 bg-black text-white hover:bg-slate-400 hover:text-black";
			case "big-slate":
				return "px-20 py-3 bg-slate-100 text-black hover:bg-white hover:text-black";
			case "big-transparent":
				return "px-20 py-3 bg-transparent border hover:text-red-800 hover:border-red-800";
		}
		return size;
	};

	return (
		<button
			className={`border ${pxpy(
				props.size
			)} my-1  border-black transition-all  font-bold uppercase hover:animate-pulse rounded-md`}
			onClick={(value) => {
				!props.onclick ? router.push(`/${props.target}`) : props.onclick();
			}}
		>
			{props.text}
		</button>
	);
}
