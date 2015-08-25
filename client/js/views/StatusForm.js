var StatusForm = React.createClass({

  componentDidMount: function() {
  },

  handleSubmit: function(event) {
    
    event.preventDefault();

    var mood = React.findDOMNode(this.refs.mood).value.trim();
    var location = React.findDOMNode(this.refs.location).value.trim();
    
    var data = {
      mood: mood,
      location: location
    };

    this.props.sendRequest(data);

    React.findDOMNode(this.refs.mood).value = "";
    React.findDOMNode(this.refs.location).value = "";

    return;

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
