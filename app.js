const express = require("express")
const app = express()
const PokeController = require("./controllers/pokeController")
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use(express.static("public"))
app.listen(2000 || process.env.PORT, () => console.log(`Server running on port ${2000 || process.env.PORT}`));

app.use("/", PokeController)