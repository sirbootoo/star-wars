const characterService = require("../services/character.service");


exports.fetchAllCharacters = async (req, res) => {
    const { search, limit, page, sort, gender } = req.query;
    try {
        const response = await characterService.fetchCharacters(search, limit, page, gender, sort);
        return res.status(200).json({
            status: 1, 
            data: response,
            message: "Characters fetching successful!"
        });
    } catch (err) {
        return res.status(500).json({
            status: 0,
            message: "Oops!!! Sorry, something went wrong",
            // data: err.response.data
        })
    }
}