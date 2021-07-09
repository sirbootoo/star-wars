const axios = require("axios");
const util = require("../helpers/util");

const commentService = require("./comment.service");


exports.fetchMovies = async (searchTerm = null, limit=10, page=1) => {
    let url = "https://swapi.dev/api/films";
    if (searchTerm) {
        url = url + "/?search=" + searchTerm;
    }
    try {
        const res = await axios.get(url);
        console.log(res, "================= \n\n")
        let responseData = res.data.results;
        responseData = responseData.map((x, i) => {
            x.identifier = String(i + 1);
            return x;
        }).sort((a, b) => a.release_date - b.release_date);
        let paginationObject = util.paginator(responseData, page, limit);
        let paginatedData = paginationObject.data;
        let paginatedDataLength = paginatedData.length;
        while (paginatedDataLength--) {
            let movie = paginatedData[paginatedDataLength];
            const comments = await commentService.fetchComments(movie.identifier);
            movie.comments = comments;
            movie.commentsCount = comments.length;
            paginatedData[paginatedDataLength] = movie;
        }
        paginationObject.data = paginatedData;
        return Promise.resolve(paginationObject);
    } catch (err) {
        return Promise.reject(err)
    }
}

exports.fetchMovie = async (movie) => {
    let url = "https://swapi.dev/api/films/"+ movie;
    try {
        const res = await axios.get(url);
        let responseData = res.data;
        const comments = await commentService.fetchComments(movie);
        responseData.comments = comments;
        return Promise.resolve(responseData);
    } catch (err) {
        return Promise.reject(err);
    }
}