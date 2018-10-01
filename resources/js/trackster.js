$(document).ready(function(){
  $('#search').click(function(){
    Trackster.searchTracksByTitle($('#input').val());
  });
});

var Trackster = {};
const API_KEY = '4704092f4b581c3c68a01526db6a7ba6';
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track='+title+'&api_key='+API_KEY+'&format=json',
    datatype: 'jsonp',
    success: function(data) {
      console.log(data);
    }
    });
};
