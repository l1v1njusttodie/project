const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/", require("./routes/index"));
app.use("/basket", require("./routes/basket"));
app.use("/signin", require("./routes/signin"));
app.use("/signin/signup", require("./routes/signup"));
app.use("/aboutus", require("./routes/aboutus"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
