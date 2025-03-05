import axiosInstance from "../services/axios/axiosInstance";

class MovieApi {
	static async searchMoviesByName(query = "") {
		const response = await axiosInstance.get("", { params: { s: query } });
		if (response.status !== 200 || response.data.Error) {
			throw new Error(response.data.Error);
		}
		return response;
	}
	static async getMovieByID(id: string) {
		const response = await axiosInstance.get("", { params: { i: id } });
		if (response.status !== 200 || response.data.Error) {
			throw new Error(response.data.Error);
		}
		return response;
	}
}

export default MovieApi;
