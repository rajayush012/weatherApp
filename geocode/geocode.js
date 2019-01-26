const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=RdGAhW53nl1VZqEmhQ836G9a5pPREC9O&location=${encodedAddress}` ,
        json: true
    },(error, response, body) =>{
        if(error){
            callback("Error! Can't connect to server!");
        }
        else if(body.info.statuscode===400){
            callback('Invalid address');
        }else if(body.results[0].locations[0].adminArea5==''){
            callback('Invalid address');
        }
        else{
        var add = {
            address: body.results[0].locations[0].adminArea5,
            addressState: body.results[0].locations[0].adminArea3,
            addressCountry: body.results[0].locations[0].adminArea1,
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
        };
        callback(undefined, add);
        // console.log(`Address: ${body.results[0].locations[0].adminArea5}`);
        // console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
        // console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
    });
}

module.exports = {
    geocodeAddress
};