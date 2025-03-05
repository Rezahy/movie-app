import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FC, useMemo } from "react";
import type { MovieType } from "../utils/types";
import useMovie from "../store/movie";

const Movie: FC<MovieType> = ({
	Title: title,
	Year: year,
	imdbID,
	Type: type,
	Poster: poster,
}) => {
	const bookmarkMovie = useMovie((state) => state.bookmarkMovie);
	const bookmarkedMovies = useMovie((state) => state.bookmarkedMovies);
	const unBookmarkMovie = useMovie((state) => state.unBookmarkMovie);
	const isBookmarked = useMemo(
		() =>
			bookmarkedMovies.find(
				(bookmarkedMovie) => bookmarkedMovie.imdbID === imdbID
			),
		[imdbID, bookmarkedMovies]
	);
	const bookmark = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		const movie = {
			Title: title,
			Year: year,
			imdbID,
			Type: type,
			Poster: poster,
		};
		e.preventDefault();
		bookmarkMovie(movie);
	};

	const unBookmarked = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		e.preventDefault();
		unBookmarkMovie(imdbID);
	};

	return (
		<Link
			to={`/${imdbID}`}
			className="cursor-pointer rounded-xl relative group hover:scale-105 hover:md:scale-110 transition-transform duration-300 ease-in-out"
		>
			<div className="after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[400px] after:bg-neutral-800/40 group-hover:after:bg-neutral-800/10 after:transition-colors after:duration-300 after:ease-in-out relative after:rounded-xl">
				{isBookmarked ? (
					<FaBookmark
						className="absolute right-4 text-white font-bold top-4 z-10 cursor-pointer"
						size={25}
						onClick={unBookmarked}
					/>
				) : (
					<FaRegBookmark
						className="absolute right-4 text-white font-bold top-4 z-10 cursor-pointer"
						size={25}
						onClick={bookmark}
					/>
				)}

				<img
					src={poster}
					alt={title}
					className="rounded-2xl object-cover h-[400px] w-full"
				/>
			</div>

			<div className="text-neutral-200 space-y-1 mt-2 inline-block ">
				<h4 className="line-clamp-1 font-medium">
					{title} - {year}
				</h4>
				<h6 className="text-neutral-500 text-sm">{type}</h6>
			</div>
		</Link>
	);
};
export default Movie;
