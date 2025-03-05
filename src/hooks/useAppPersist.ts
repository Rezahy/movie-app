import { useEffect } from "react";
import useMovie from "../store/movie";

const useAppPersist = (storageName: string) => {
	const bookmarkedMovies = useMovie((state) => state.bookmarkedMovies);
	const loadBookmarkedMoviesFromStorage = useMovie(
		(state) => state.loadBookmarkedMoviesFromStorage
	);

	useEffect(() => {
		loadBookmarkedMoviesFromStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		const bookmarkedMoviesAsString = JSON.stringify(bookmarkedMovies);
		localStorage.setItem(storageName, bookmarkedMoviesAsString);
	}, [storageName, bookmarkedMovies]);
};
export default useAppPersist;
