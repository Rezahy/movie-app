import Movie from "./Movie";
import { MovieType } from "../utils/types";
import { FC } from "react";
interface MovieListPropTypes {
	movies: MovieType[];
}
const MovieList: FC<MovieListPropTypes> = ({ movies }) => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
			{movies.map((movie) => (
				<Movie key={movie.imdbID} {...movie} />
			))}
		</section>
	);
};
export default MovieList;
