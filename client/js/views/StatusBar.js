var StatusBar = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Status Bar</h2>
        <StatusForm url="api/status" name="statusForm" />
      </div>
    );
  }

});
