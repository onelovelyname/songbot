var SongPlayer = React.createClass({

  render: function() {

    return (

      <div className="song-player">
        <iframe src="https://embed.spotify.com/?uri=spotify:track:0eGsygTp906u18L0Oimnem" width="300" height="380" frameborder="0" allowtransparency="true">
        </iframe>
      </div>

    );

  }

});
