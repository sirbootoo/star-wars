exports.paginator = (items, page, per_page, character=false) => {
    var page = page || 1,
        per_page = per_page || 10,
        offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(items.length / per_page);
    let paged = {
        page: page,
        per_page: per_page,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems,
    };
    if(character) {
        const totalHeight = items.reduce((pV, cV) => {
            return pV + Number(cV.height)
        }, 0);
        paged["totalHeight"] = {
            cm: totalHeight,
            other: this.cmToFeetAndInches(totalHeight)
        }
    }
    return paged;
}

exports.cmToFeetAndInches = (measurement) => {
    let inches = measurement / 2.54;
    const feet = inches / 12;
    inches = inches - (12 * 4);
    return {feet, inches}; 
}