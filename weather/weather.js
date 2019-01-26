const request = require('request');

var getWeather = (lat,lng,callback) => { 
    request({
    url: `https://api.darksky.net/forecast/84519472a68d013c600b33e9c38f494a/${lat},${lng}` ,
    json: true
},(error, response, body) =>{
    //console.log(body);
    if(error){
        callback("Error! Can't connect to server!");
    }else if (response.statusCode===400) {
        callback('Server disconnected');
    }
    else{
        callback(undefined, {
            temperature: body.currently.temperature,
            summary: body.currently.summary
        });
    
    
 
    }   
}
);

};

module.exports.getWeather = getWeather;