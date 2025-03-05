import MovieLoader from "./MovieLoader";

const MovieContentLoader = () => (
	<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
		{Array(20)
			.fill(0)
			.map((_, index) => (
				<MovieLoader key={index} />
			))}
	</section>
);

export default MovieContentLoader;
