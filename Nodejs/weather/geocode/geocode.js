const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to google servers..');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

//561d7341a1d672a7ae87fb5d9c3e1051

module.exports = {
  geocodeAddress,
};
