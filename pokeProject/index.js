const supabaseClient = require('@supabase/supabase-js')
const express = require('express')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))


const supabaseUrl = 'https://enkdqgujydzxshvstnxa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVua2RxZ3VqeWR6eHNodnN0bnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTU3MjEsImV4cCI6MjAzMTQ3MTcyMX0.csia766qvY2VRyNWZDRhxleC3FapMkdvTCaOK6a8d_s'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/poke_1_name', async (req, res) => {
    console.log('Attempting to GET all pokemon 1 names')

    const { data, error } = await supabase
        .from('pokemon_1_name')
        .select()

    if(error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log('Supabase connected')
})