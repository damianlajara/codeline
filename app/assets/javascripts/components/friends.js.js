var Friends = React.createClass({displayName: "Friends",
  propTypes: {
    user: React.PropTypes.object
  },
  getInitialState: function() {
    return { activeFriends: [] };
  },
  componentWillMount: function() {
    console.log("Getting friends from server");
    this.getActiveFriendsFromServer();
  },
  getActiveFriendsFromServer: function() {
    var self = this;
    $.ajax({
      url: "/users/" + self.props.user.username + "/active_friends",
      type: "GET",
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
    this.state.activeFriends.map(function(user, i) {
      return (
        React.createElement("a", {href: "users/{user.username}"}, 
          gravatarTag(user.email, 40)
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
            "Friends (", this.state.activeFriends.size, ")"
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