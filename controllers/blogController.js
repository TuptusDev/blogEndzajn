const getBlog = (req,res) => {

    const id = req.params.id;

    res.render("blog/news", {
        id
    });

};

module.exports = {
    get: getBlog
}