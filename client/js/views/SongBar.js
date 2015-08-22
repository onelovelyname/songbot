var SongBar = React.createClass({

  render: function() {

    return (

      <div className="song-bar">
        <h2>Song Bar</h2>
        <SongPlayer />
        <SongList />
      </div>

    );

  }

});
