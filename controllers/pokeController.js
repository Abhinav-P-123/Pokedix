const express = require("express")
const router = express.Router() // Using Express Router
const https = require("https")

router.get("/", (req, res) => {
    https.get("https://pokeapi.co/api/v2/pokemon", response => {
        let pokemons = "";
        response.on("data", chunk => {
            pokemons += chunk
        })

        response.on("end", () => {
            pokemons = JSON.parse(pokemons)
            res.render("homepage.ejs", { pokemonList: pokemons.results, next: pokemons.next, previous: pokemons.previous })
        })
    })
})

router.get("/pokemon", (req, res) => {
    let pokeURL = req.query.url;
    https.get(pokeURL, response => {
        let pokeDetails = "";
        response.on("data", chunk => {
            pokeDetails += chunk
        })

        response.on("end", () => {
            pokeDetails = JSON.parse(pokeDetails)
            res.render("detailsPage", { name: pokeDetails.name, id: pokeDetails.id, abilities: pokeDetails.abilities, stats: pokeDetails.stats, frontImg: pokeDetails.sprites.front_default, types: pokeDetails.types })
        })
    })
})

router.get("/getNext", (req, res) => {
    https.get(req.query.url, response => {
        let pokemons = "";
        response.on("data", chunk => {
            pokemons += chunk
        })

        response.on("end", () => {
            pokemons = JSON.parse(pokemons)
            res.render("homepage.ejs", { pokemonList: pokemons.results, next: pokemons.next, previous: pokemons.previous })
        })
    })
})

router.get("/getPrevious", (req, res) => {
    https.get(req.query.url, response => {
        let pokemons = "";
        response.on("data", chunk => {
            pokemons += chunk
        })

        response.on("end", () => {
            pokemons = JSON.parse(pokemons)
            res.render("homepage.ejs", { pokemonList: pokemons.results, next: pokemons.next, previous: pokemons.previous })
        })
    })
})
module.exports = router