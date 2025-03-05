import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const router = useRoutes(routes);
	return (
		<Layout>
			<ScrollToTop />
			{router}
		</Layout>
	);
}

export default App;
