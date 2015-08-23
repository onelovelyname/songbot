var requestModule = require('request');
var _ = require('underscore');

module.exports = {

  processStatus: function(request, response) {

    var query = 'https://api.spotify.com/v1/search?q='+ request.body.mood + '&type=track&limit=10';

    requestModule(query, function(spotifyError, spotifyResponse, spotifyBody) {
      
      if (spotifyError) {
        
        console.log("Error in Spotify request: ", error);
      
      } else {

        var spotifyTracks = JSON.parse(spotifyBody).tracks.items;
        
        var tracks = _.map(spotifyTracks, function(spotifyTrack) {
          return {
            name: spotifyTrack.name,
            uri: spotifyTrack.uri,
            id: spotifyTrack.id,
            artistName: spotifyTrack.artists[0].name,
            artistId: spotifyTrack.artists[0].id
          };
        });

        response.status(200).send(tracks);

      }
    });
  }

};
