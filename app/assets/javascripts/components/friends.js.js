Friends = React.createClass({displayName: "Friends",
  propTypes: {
    user: React.PropTypes.object,
    gravatarTag: React.PropTypes.func
  },
  getInitialState: function() {
    return { activeFriends: [] };
  },
  componentDidMount: function() {
    console.log("Getting friends from server");
    this.getActiveFriendsFromServer();
  },
  getActiveFriendsFromServer: function() {
    console.log("username: ", this.props.user.username)
    $.ajax({
      context: this,
      url: "/users/" + this.props.user.username + "/active_friends",
      type: "GET",
      dataType: "json",
      success: function(friends) {
        console.log("friends: ", friends);
        this.setState({activeFriends: friends});
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  },
  friends: function() {
    //Maybe limit to 16?
    return this.state.activeFriends.map(function(user, i) {
      console.log("gravatar hash: ", user.gravatar_hash);
      return (
        React.createElement("a", {href: "users/{user.username}", key: i}, 
          this.props.gravatarTag(user.gravatar_hash, 40)
        )
      );
    }, this);
  },
  render: function() {
    return (
      React.createElement("div", {className: "col-md-3"}, 
        React.createElement("div", {className: "panel panel-info"}, 
          React.createElement("div", {className: "panel-heading"}, 
            React.createElement("h3", {className: "panel-title"}, 
            "Friends (", this.state.activeFriends.size || " None at the moment ", ")"
            )
          ), 
          React.createElement("div", {className: "panel-body"}, 
            this.friends()
          )
        )
      )
    );
  }
});