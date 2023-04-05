import "../styles/globals.css";
import "../styles/output.css";

function MyApp({ Component, pageProps }: any): React.ReactElement {
	return <Component {...pageProps} />;
}

export default MyApp;
