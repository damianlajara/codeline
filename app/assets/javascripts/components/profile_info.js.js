var ProfileInfo = React.createClass({displayName: "ProfileInfo",
  propTypes: {
    user: React.PropTypes.object,
    gravatarTag: React.PropTypes.func
  },
  render: function() {
    return (
      React.createElement("div", {className: "jumbotron"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-4"}, 
            this.props.gravatarTag(this.props.user.email, 200)
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("h3", null, this.props.user.username), 
              React.createElement("p", null, "Age: ", this.props.user.age), 
              React.createElement("p", null, "Gender: ", this.props.user.gender, " "), 
              React.createElement("p", null, React.createElement("a", {href: this.props.user.website}, "Website")), 
              React.createElement("p", null, React.createElement("a", {href: this.props.user.blog}, "Blog"))
            ), 
            React.createElement("div", {className: "col-md-4"}, 
              React.createElement("h3", null, "About Me"), 
              React.createElement("p", null, this.props.user.bio)
            )
          )
        )
      )
    );
  }
});