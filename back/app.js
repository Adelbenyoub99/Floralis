const express = require("express");
const {connectToDb,test, Fleurs,Bouquets} = require('./models.js')
const path = require("path");
const app = express();


app.use("/img", express.static(path.join(__dirname, "views/images")));
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use("/css", express.static(path.join(__dirname, "views/css")));
app.use("/jsTW", express.static(path.join(__dirname, "scripts")));


connectToDb();

app.get("/bouquet", async (req, res) => {
  const bouquet = await Bouquets.findAll();
  res.json(bouquet)
})
app.get("/fleur", async (req, res) => {
  const fleur = await Fleurs.findAll();
  res.json(fleur)
})
app.get("/user", async (req, res) => {
  const user = await test();
  res.json(user)
})
app.get("/like", async (req, res) => {
  const like = await test();
  res.json(like)
})
app.get("/composer", async (req, res) => {
  const composer = await test();
  res.json(composer)
})
//////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////

  app.listen(5050, () => {
    console.log("Écoute sur le port " + 5050);
  });
