var SongBar = React.createClass({

  render: function() {

    return (

      <div className="song-bar">
        <h2>Song Bar</h2>
        <SongPlayer currentSong={this.props.data[0]} />
        <SongList data={this.props.data} />
      </div>

    );

  }

});
