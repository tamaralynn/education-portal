const express = require('express');
const router = express.Router();

router.get("/id/:noteid", function(req, res) {
    return res.json({id:req.params.noteid});
});

module.exports = router;