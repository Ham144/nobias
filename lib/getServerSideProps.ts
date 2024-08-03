import { getProviders } from "next-auth/react";

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: { providers },
	};
}
