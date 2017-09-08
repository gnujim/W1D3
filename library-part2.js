var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    for (var playlistId in this.playlists) {
      var playlist = this.playlists[playlistId];
      var count = playlist.tracks.length;
      console.log(
        playlistId + ": " + playlist.name + " - " + count + " tracks"
      );
    }
  },
  printTracks: function() {
    for (var trackId in this.tracks) {
      var tracks = this.tracks[trackId];
      console.log(
        trackId +
          ": " +
          tracks.name +
          " by " +
          tracks.artist +
          " (" +
          tracks.album +
          ")"
      );
    }
  },
  printPlaylist: function(playlistId) {
    var playlist = this.playlists[playlistId];
    var trackIds = playlist.tracks;
    console.log(
      playlistId + ": " + playlist.name + " - " + trackIds.length + " tracks"
    );
    for (var idx in trackIds) {
      var id = trackIds[idx];
      var track = this.tracks[id];
      console.log(
        id +
          ": " +
          track.name +
          " by " +
          track.artist +
          " (" +
          track.album +
          ")"
      );
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  addTrack: function(name, artist, album) {
    var id = uid();
    this.tracks[id] = { id, name, artist, album };
  },
  addPlaylist: function(name) {
    var id = uid();
    var tracks = [];
    this.playlists[id] = { id, name, tracks };
  },
  printSearchResults: function(query) {
    var list = this.tracks;
    for (var key in list) {
      var track = this.tracks[key];
      var nameMatch = track.name.search(query) >= 0;
      var artistMatch = track.artist.search(query) >= 0;
      var albumMatch = track.album.search(query) >= 0;
      if (nameMatch || artistMatch || albumMatch) {
        console.log(
          key +
            ": " +
            track.name +
            " by " +
            track.artist +
            " (" +
            track.album +
            ")"
        );
      }
    }
  }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

console.log("---- Print Playlists ----");
library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

console.log("---- Print Tracks ----");
library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

console.log("---- Print Playlist p02 ----");
library.printPlaylist("p02");

// adds an existing track to an existing playlist

console.log("---- Add Track To Playlist p02 Before ----");
library.printPlaylist("p02");
library.addTrackToPlaylist("t01", "p02");
console.log("---- Add Track To Playlist p02 After ----");
library.printPlaylist("p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

console.log("---- Add Track ----");
library.addTrack("All Star", "Smash Mouth", "Probably the Greatest Album Ever");
console.log(library.tracks);

// adds a playlist to the library

console.log("---- Add Playlist ----");
library.addPlaylist("My Playlist");
library.printPlaylists();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

console.log("---- Print Search Results for 'Code' ----");
library.printSearchResults("Code");
