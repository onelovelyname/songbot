var Song = React.createClass({

  render: function() {
    return (
      <div className="song">
        <h3 className="name">{this.props.name}</h3>
        <h4 className="artistName">{this.props.artist}</h4>
      </div>
    )
  }

})
