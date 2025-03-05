import Home from "../pages/home";
import Bookmarked from "../pages/bookmarked";
import MovieDetails from "../pages/movieDetails";
const routes = [
	{ path: "/", element: <Home /> },
	{ path: "bookmarked", element: <Bookmarked /> },
	{ path: "/:id", element: <MovieDetails /> },
];

export default routes;
