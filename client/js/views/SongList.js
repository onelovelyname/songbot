var SongList = React.createClass({

  render: function() {

    var songNodes = this.props.data.length > 0 ?
      _.map(this.props.data, function(song) {
        console.log("song: ", song);
        return (
          <Song className="song" name={song.name} artist={song.artistName} uri={song.uri} />
        );      
      }) : (<li> No songs found. </li>);

    return (

      <div className="songList">
        {songNodes}
      </div>
    ); 
  }

});
