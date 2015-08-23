var StatusBar = React.createClass({

  componentDidMount: function() {
    console.log("this.props in StatusBar: ", this.props);
  },

  pass: function(data) {
    console.log("data in pass: ", data);
    this.props.sendRequestbyBar(data);
  },

  render: function() {
    return (
      <div>
        <h2>Status Bar</h2>
        <StatusForm sendRequest={this.pass}/>
      </div>
    );
  }

});
