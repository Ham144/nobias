import "../styles/globals.css";
import type { AppProps } from "next/app";
import "styled-jsx/css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/core/types";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={pageProps.session}>
			<Component {...pageProps} />;
		</SessionProvider>
	);
}

export default MyApp;
