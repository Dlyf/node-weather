const request = require('request');
const API_KEY = require('./../config');

var geocodeAddress = (address, callback) => {

    // encode les accents, etc.
    var addressEncoded = encodeURIComponent(address);
  
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=${API_KEY.GOOGLE_API_KEY}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback('Connexion au serveur impossible', null);
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Aucun résultat', null);
      } else if (body.status === 'OK') {
        callback(null, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng,
        });
      } else {
        //
      }
  
    }); // !# request()
  
  }; // !# geocodeAddress
  
  module.exports = {
    geocodeAddress
  }