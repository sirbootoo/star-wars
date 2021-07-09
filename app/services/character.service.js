const axios = require("axios");
const util = require("../helpers/util");


exports.fetchCharacters = async (searchTerm = null, limit=10, page=1, gender=null, sort=null) => {
    let url = "https://swapi.dev/api/people";
    if (searchTerm) {
        url = url + "/?search=" + searchTerm;
    }
    try {
        const res = await axios.get(url);
        let responseData = res.data.results;
        if(gender) {
            responseData = responseData.filter(x => x.gender.toLowerCase() == gender.toLowerCase())
        }
        if(sort) {
            if(sort == "name") {
                responseData.sort((a,b) => {
                    return a.name.normalize().localeCompare(b.name.normalize())
                });
            }
            if(sort == "height") {
                responseData.sort((a,b) => Number(a.height) - Number(b.height))
            }
        }
        let paginationObject = util.paginator(responseData, page, limit, true);
        return Promise.resolve(paginationObject);
    } catch (err) {
        return Promise.reject(err)
    }
}