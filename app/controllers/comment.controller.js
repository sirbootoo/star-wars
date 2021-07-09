const commentService = require("../services/comment.service");
const movieService = require("../services/movies.service");


exports.create = async (req, res) => {
    const {movie} = req.body;
    const ipAddress = req.connection.remoteAddress;
    req.body.ipAddress = ipAddress;
    if(!movie) return res.status(400).json({status: 0, message: "Please state the movie this comment belongs to"});
    try{
        const moviePayload = await movieService.fetchMovie(movie);
        if(moviePayload) {
            const createComment = await commentService.createComment(req.body);
            return res.status(200).json({
                status: 1,
                message: "Message created successfully!",
                data: createComment
            })
        }
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            status: 0,
            message: "Oops!!! Sorry, something went wrong"
        })
    }
}