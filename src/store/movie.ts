import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { MovieType } from "../utils/types";
import MovieApi from "../api/movie";
import { APP_BOOKMARKED_MOVIES_STORAGE_KEY } from "../utils/storageKey";
type State = {
	searchMovies: MovieType[];
	bookmarkedMovies: MovieType[];
	loading: boolean;
	error: Error | null;
};

type Actions = {
	searchMovieByName: (query: string) => Promise<void>;
	bookmarkMovie: (movie: MovieType) => void;
	unBookmarkMovie: (movieId: string) => void;
	loadBookmarkedMoviesFromStorage: () => void;
};
const useMovie = create<State & Actions>()(
	immer((set) => ({
		searchMovies: [],
		bookmarkedMovies: [],
		loading: false,
		error: null,
		searchMovieByName: async (query) => {
			set((state) => {
				state.loading = true;
				state.error = null;
				state.searchMovies = [];
			});

			try {
				const response = await MovieApi.searchMoviesByName(query);
				if (response.status === 200) {
					const responseData = response.data.Search as MovieType[];
					set((state) => {
						state.loading = false;
						state.searchMovies = responseData;
						state.error = null;
					});
				} else {
					throw new Error("SomeThing Went Wrong!");
				}
			} catch (e) {
				set((state) => {
					state.error = e as Error;
					state.searchMovies = [];
					state.loading = false;
				});
			}
		},
		bookmarkMovie: (movie) => {
			set((state) => {
				state.bookmarkedMovies.push(movie);
			});
		},
		unBookmarkMovie: (movieId) => {
			set((state) => {
				const movieIndex = state.bookmarkedMovies.findIndex(
					(bookmarkedMovie) => bookmarkedMovie.imdbID === movieId
				);
				state.bookmarkedMovies.splice(movieIndex, 1);
			});
		},
		loadBookmarkedMoviesFromStorage: () => {
			const storageData = localStorage[APP_BOOKMARKED_MOVIES_STORAGE_KEY];
			if (storageData) {
				set((state) => {
					state.bookmarkedMovies = JSON.parse(storageData);
				});
			}
		},
	}))
);
export default useMovie;
