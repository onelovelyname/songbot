var App = React.createClass({

  render: function() {
    return (
      <div>
        <SongBar />
        <StatusBar />
      </div>
    );
  }

})

React.render(
  <App />,
  document.getElementById('app')
);
