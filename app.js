const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address for weather',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
            console.log('--------------------');
         console.log(results.address+" "+results.addressState+" "+results.addressCountry);
         console.log('--------------------');

        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) =>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log('Current Temp:',weatherResults.temperature);
                console.log('Summary:',weatherResults.summary);
                console.log('--------------------');

            }
        } );
    }
});


  
 
 

  