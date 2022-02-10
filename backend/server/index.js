    const express = require("express");
    const PORT = process.env.PORT || 3001;
    const app = express();
    const cors = require('cors');
    const session = require('express-session');

    app.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUninitialized: false,
            cookie: { /* can add cookie related info here */ }
        }),
        cors()
    );

    app.get('/', function(req, res){
        if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
            req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
        req.session.pageCountByCurrentUserOrAnyNameYouWant++;
        res.status(200).json({ message: req.session.pageCountByCurrentUserOrAnyNameYouWant });
    });

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        });