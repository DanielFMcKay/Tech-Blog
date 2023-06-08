const router = require("express").Router();


router.get("/", async (req, res) => {
    try {


        console.log("homepage");
        res.render("homepage", {

            logged_in: req.session.logged_in,
            title: "Tech Blog",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;