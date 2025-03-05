import MovieList from "../../components/MovieList";
import useMovie from "../../store/movie";

const Bookmarked = () => {
	const bookmarkedMovies = useMovie((state) => state.bookmarkedMovies);
	return (
		<div className="mt-8">
			{bookmarkedMovies.length > 0 ? (
				<MovieList movies={bookmarkedMovies} />
			) : (
				<EmptyView />
			)}
		</div>
	);
};
export default Bookmarked;

const EmptyView = () => {
	return (
		<div className="flex items-center justify-center mt-14">
			<h3 className="font-semibold text-xl">
				Your Bookmarked movie List is Empty
			</h3>
		</div>
	);
};
