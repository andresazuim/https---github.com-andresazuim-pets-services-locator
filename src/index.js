const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3000
const key ="Sua_chave_key_do_google_maps"



app.get('/api/services', async (req, res) => {
    try {
                
        const radius = 5000; 
        const findServices = req.query        
        const cityName = findServices.locality.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, '+')
        
        const urlGeolocation= `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${cityName}&key=${key}`
              
        const responseGeolocation = await axios.get(urlGeolocation)
        const findPlaces = responseGeolocation.data.results[0].geometry.location;
              
        const urlPlace = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${findPlaces.lat},${findPlaces.lng}&radius=${radius}&type=${findServices.type}&key=${key}`
        const response = await axios.get(urlPlace)
        
        const results = response.data.results.map(place => ({
            name: place.name,
            address: place.vicinity, // ou 'formatted_address' para endereço completo
            rating: place.rating
        }));
        res.status(200).json({ results });

    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).send('Server error')
    }
})

app.listen(PORT, () => {
    console.log(`app online na porta ${PORT}`)
})
