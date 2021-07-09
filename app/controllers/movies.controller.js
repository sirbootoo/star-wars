const movieService = require("../services/movies.service");


exports.fetchAllMovies = async (req, res) => {
    const { search, limit, page } = req.query;
    try {
        const response = await movieService.fetchMovies(search, limit, page);
        return res.status(200).json({
            status: 1, 
            data: response,
            message: "Movies fetching successful!"
        });
    } catch (err) {
        return res.status(err.response.status).json({
            status: 0,
            message: "Oops!!! Sorry, something went wrong",
            data: err.response.data
        })
    }
}


exports.fetchMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await movieService.fetchMovie(id);
        return res.status(200).json({
            status: 1, 
            data: response,
            message: "Movie fetched successfully!"
        });
    } catch (err) {
        return res.status(err.response.status).json({
            status: 0,
            message: "Oops!!! Sorry, something went wrong",
            data: err.response.data
        })
    }
}