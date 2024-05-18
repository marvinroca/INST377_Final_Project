const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())


const supabaseUrl = 'https://enkdqgujydzxshvstnxa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVua2RxZ3VqeWR6eHNodnN0bnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTU3MjEsImV4cCI6MjAzMTQ3MTcyMX0.csia766qvY2VRyNWZDRhxleC3FapMkdvTCaOK6a8d_s'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname })
})

app.get('/Home', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname })
})

app.get('/About', (req, res) => {
    res.sendFile('public/about.html', {root: __dirname })
})

app.get('/Help', (req, res) => {
    res.sendFile('public/help.html', {root: __dirname })
})




app.get('/Battles', async (req, res) => {
    console.log('Attempting to GET all pokemon 1 names')

    const { data, error } = await supabase
        .from('Battles')
        .select()

    if (error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})


// Insert Data
app.post('/Battles', async (req, res) => {
    console.log('Adding Battle')

    console.log(req.body)
    var poke_1_name = req.body.poke_1_name;
    var poke_1_hp = req.body.poke_1_hp;
    var poke_1_attack = req.body.poke_1_attack;
    var poke_1_defense = req.body.poke_1_defense;
    var poke_2_name = req.body.poke_2_name;
    var poke_2_hp = req.body.poke_2_hp;
    var poke_2_attack = req.body.poke_2_attack;
    var poke_2_defense = req.body.poke_2_defense;

    const { data, error } = await supabase
        .from('Battles')
        .insert({ 'poke_1_name': poke_1_name, 'poke_1_hp': poke_1_hp, 'poke_1_attack': poke_1_attack, 'poke_1_defense': poke_1_defense, 'poke_2_name': poke_2_name, 'poke_2_hp': poke_2_hp, 'poke_2_attack': poke_2_attack, 'poke_2_defense': poke_2_defense })
        .select()

    if (error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log(`Express App Listening on Port ${port}`)
})