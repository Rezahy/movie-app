import Form from "../../components/Form";
import MovieList from "../../components/MovieList";
import "react-loading-skeleton/dist/skeleton.css";
import MovieContentLoader from "../../components/MovieContentLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import useMovie from "../../store/movie";
const Home = () => {
	const loading = useMovie((state) => state.loading);
	const searchMovies = useMovie((state) => state.searchMovies);
	const error = useMovie((state) => state.error);
	useEffect(() => {
		if (error) {
			const notify = () =>
				toast.error(error.message, {
					position: "bottom-center",
				});
			notify();
		}
	}, [error]);

	return (
		<div className="pt-10">
			<Form />
			{!loading && !error && <MovieList movies={searchMovies} />}
			{loading && <MovieContentLoader />}
			{error && <ToastContainer />}
		</div>
	);
};
export default Home;
