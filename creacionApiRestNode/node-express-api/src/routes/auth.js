const { Router } = require("express");
const router = Router();

router.post("/api/login", (req, res) => {
    
    const { email, password } = req.body;
    console.log(email, password);

    res.json({"msg" : "Logueando usuario"});
});


module.exports = router;