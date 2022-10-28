import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="uk">
				<Head>
					<link rel="icon" href="favicon.ico" />
					<meta
						name="description"
						content="Junior Army - волонтерська організація з
							грандіозними намірами. Механізація та модернізація
							життя громадян України - основна задача нашої
							команди."
					/>
					<meta
						name="keywords"
						content="Junior, Army, Junior Army, Junior-Army, junior, army, junior-army, junior-army.pp.ua, www.junior-army.pp.ua, UI, UX, UI/UX, ui, ux, ui/ux, Web, web, Bots, bots, Apps, apps, electron.js, react-native"
					/>
				</Head>
				<body className="bg-black text-white transition-all">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
