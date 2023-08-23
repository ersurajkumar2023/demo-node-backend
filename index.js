const express = require("express");
const router = require("./router");


const PORT = 5000;

const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(router);