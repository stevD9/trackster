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
  $('#tracks').empty();
  for (var i = 0; i < tracks.length; i++) {
    var albumArt = tracks[i].image[1]['#text'];
    var trackRow = '<div class="row track">' +
          ' <div class="col-xs-1 col-xs-offset-1 play-button">' +
          '  <a href='+tracks[i].url+' target="_blank">' +
          '   <i class="fas fa-play-circle fa-2x"></i></a>' +
          ' </div>' +
          ' <div class="col-xs-4">'+tracks[i].name+'</div>' +
          ' <div class="col-xs-2">'+tracks[i].artist+'</div>' +
          ' <div class="col-xs-2"><img src='+albumArt+'></div>' +
          ' <div class="col-xs-2">'+tracks[i].listeners+'</div>' +
          '</div>';
    $('#tracks').append(trackRow);
  };
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track='+title+'&api_key='+API_KEY+'&format=json',
    datatype: 'jsonp',
    success: function(data) {
      Trackster.renderTracks(data.results.trackmatches.track);
    }
  });
};
