import { Link, useParams } from "react-router-dom";
import useMovie from "../../store/movie";
import { useMemo } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { SiMetacritic } from "react-icons/si";
import MovieApi from "../../api/movie";
import { useQuery } from "@tanstack/react-query";
import { MovieDetail, MovieType, Rating } from "../../utils/types";
import MovieDetailsLoader from "../../components/MovieDetailsLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieDetails = () => {
	const { id } = useParams();
	const { data, isPending, error } = useQuery({
		queryKey: ["movie", id],
		queryFn: async () => {
			const response = await MovieApi.getMovieByID(id!);
			return response.data as MovieDetail;
		},
	});
	const bookmarkMovie = useMovie((state) => state.bookmarkMovie);
	const bookmarkedMovies = useMovie((state) => state.bookmarkedMovies);
	const unBookmarkMovie = useMovie((state) => state.unBookmarkMovie);
	const isBookmarked = useMemo(
		() =>
			bookmarkedMovies.find((bookmarkedMovie) => bookmarkedMovie.imdbID === id),
		[id, bookmarkedMovies]
	);

	const bookmark = () => {
		if (data) {
			const movie: MovieType = {
				Title: data.Title,
				Year: data.Year,
				imdbID: data.imdbID,
				Type: data?.Type,
				Poster: data.Poster,
			};
			bookmarkMovie(movie);
		}
	};

	const unBookmarked = () => {
		unBookmarkMovie(id!);
	};

	if (isPending) {
		return <MovieDetailsLoader />;
	}
	if (error) {
		const notify = () =>
			toast.error(error.message, {
				position: "bottom-center",
			});
		notify();
		return <ToastContainer />;
	}

	const getOtherRating = (rating: Rating) => {
		switch (rating.Source) {
			case "Rotten Tomatoes": {
				return (
					<h1 className="text-sm font-semibold">
						<SiRottentomatoes className="text-[#d24425] text-2xl inline-block" />{" "}
						{rating.Value}
					</h1>
				);
			}
			case "Metacritic": {
				return (
					<h1 className="text-sm font-semibold">
						<SiMetacritic className="text-gray-50 text-2xl inline-block" />{" "}
						{rating.Value}
					</h1>
				);
			}
		}
	};

	return (
		<div className="pt-16 grid grid-cols-1 md:grid-cols-6 gap-y-7 md:gap-0 md:gap-x-7">
			<div className="col-span-1 md:col-span-2 rounded-xl relative group hover:scale-105 hover:md:scale-110 transition-transform duration-300 ease-in-out">
				<div className="after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[400px] md:after:h-[450px] after:bg-neutral-800/40 group-hover:after:bg-neutral-800/10 after:transition-colors after:duration-300 after:ease-in-out relative after:rounded-xl">
					{isBookmarked ? (
						<FaBookmark
							className="absolute left-4 text-white font-bold top-4 z-10 cursor-pointer"
							size={25}
							onClick={unBookmarked}
						/>
					) : (
						<FaRegBookmark
							className="absolute left-4 text-white font-bold top-4 z-10 cursor-pointer"
							size={25}
							onClick={bookmark}
						/>
					)}

					<img
						src={data.Poster}
						alt=""
						className="rounded-2xl  object-cover h-[400px] md:h-[450px] w-full"
					/>
				</div>
			</div>
			<div className="col-span-1 md:col-span-4 flex flex-col justify-center  space-y-3 ">
				<div className="flex flex-row-reverse gap-2">
					<Link
						to={`https://imdb.com/title/${data.imdbID}`}
						target="_blank"
						className="text-sm font-semibold cursor-pointer"
					>
						<FaImdb className="text-yellow-400 text-2xl inline-block" />{" "}
						{data.imdbRating}/10 ({data.imdbVotes})
					</Link>
					{data.Ratings.map((rating) => getOtherRating(rating))}
				</div>
				<h2 className="text-2xl">
					{data.Title} ( {data.Year} )
				</h2>
				<h3>Runtime : {data.Runtime}</h3>
				<h3>Genre : {data.Genre}</h3>
				<h3>Director : {data.Director}</h3>
				<h3>Writer : {data.Writer}</h3>
				<h3>Actors : {data.Actors}</h3>
				<h3>Plot : {data.Plot}</h3>
				<h3>Country : {data.Country}</h3>
				<h3>Awards : {data.Awards}</h3>
				{data.BoxOffice && <h3>BoxOffice : {data.BoxOffice}</h3>}
			</div>
		</div>
	);
};

export default MovieDetails;
