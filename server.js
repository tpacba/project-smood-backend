require('dotenv').config()
let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

let SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
let SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let redirect_uri =
    process.env.REDIRECT_URI ||
    'http://localhost:8888/api/callback'

app.get('/login', function (req, res) {
    console.log("Going to redirect /login");

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: SPOTIFY_CLIENT_ID,
            scope: 'user-read-private user-read-email',
            redirect_uri: redirect_uri
        }))
})

