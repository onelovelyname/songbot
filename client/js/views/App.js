var App = React.createClass({

  getInitialState: function() {
    return {
      data: []
    };
  },

  sendRequestByApp: function(data) {

    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: data,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render: function() {
    return (
      <div>
        <SongBar data={this.state.data} />
        <StatusBar sendRequestbyBar={this.sendRequestByApp} />
      </div>
    );
  }

})

React.render(
  <App url="api/status"/>,
  document.getElementById('app')
);
