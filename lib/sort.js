const ascending = data => {
    return data.sort();
};

const descending = data => {
    let sorting = ascending(data);

    return sorting.reverse();
};

module.exports = {
    ascending,
    descending
};