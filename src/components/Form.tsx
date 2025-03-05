import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import useMovie from "../store/movie";

const Form = () => {
	const searchMovieByName = useMovie((state) => state.searchMovieByName);

	const searchInputRef = useRef<HTMLInputElement>(null);
	const getMoviesFromApi = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { value } = searchInputRef.current!;
		if (value) {
			await searchMovieByName(value);
			searchInputRef.current!.value = "";
		}
	};
	return (
		<form onSubmit={getMoviesFromApi}>
			<div className="bg-neutral-800 rounded-full flex items-center px-4 space-x-2">
				<input
					ref={searchInputRef}
					type="text"
					placeholder="Search movie or show"
					className="py-3 px-1  shadow-lg text-neutral-200 placeholder:text-neutral-500 flex-1 bg-transparent"
				/>
				<button>
					<RiSearchLine className="text-xl text-neutral-500 hover:text-neutral-200 transition-colors duration-300 ease-in-out cursor-pointer" />
				</button>
			</div>
		</form>
	);
};
export default Form;
