var SongPlayer = React.createClass({

  render: function() {

    var sourceText = (this.props.currentSong !== undefined) ?
    "https://embed.spotify.com/?uri=" + this.props.currentSong.uri :
    "https://embed.spotify.com/?uri=spotify:track:5JunxkcjfCYcY7xJ29tLai";
    return (

      <div className="song-player">
        <iframe src={sourceText} width="300" height="380" frameborder="0" allowtransparency="true"></iframe> 
      </div>

    );

  }

});
