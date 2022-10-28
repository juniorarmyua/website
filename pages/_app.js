import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Junior Army</title>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default MyApp;
