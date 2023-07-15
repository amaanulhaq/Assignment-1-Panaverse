function makeAlbum(artist = '', albumTitle = '', numTracks = 0) {
    let album = {
      artist: artist,
      albumTitle: albumTitle,
      numTracks: numTracks
    };
  
    return album;
  }
  
  let album1 = makeAlbum('Artist 1', 'Album 1');
  let album2 = makeAlbum('Artist 2', 'Album 2', 12);
  let album3 = makeAlbum('Artist 3', 'Album 3', 8);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);