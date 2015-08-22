var StatusBar = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var mood = React.findDOMNode(this.refs.mood).value.trim();
    var location = React.findDOMNode(this.refs.location).value.trim();
    
    var data = {
      mood: mood,
      location: location
    };

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
      <form className="statusForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="How are you feeling?" ref="mood" />
        <input type="text" placeholder="Where are you located?" ref="location" />
        <input type="submit" value="post" />
      </form>
    );
  }

});

React.render(
  <StatusBar url="api/status" />,
  document.getElementById('status')
);
