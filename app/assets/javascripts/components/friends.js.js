var Gravatar = require("react-gravatar");
var Friends = React.createClass({displayName: "Friends",
  propTypes: {
    user: React.PropTypes.object
  },
  getInitialState: function() {
    return { activeFriends: [] };
  },
  componentDidMount: function() {
    this.getActiveFriendsFromServer();
  },
  getActiveFriendsFromServer: function() {
    $.ajax({
      context: this,
      url: "/users/" + this.props.user.username + "/active_friends",
      type: "GET",
      dataType: "json",
      success: function(friends) {
        // console.log("friends: ", friends);
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
      // console.log("gravatar hash: ", user.gravatar_hash);
      return (
        React.createElement("a", {href: "users/{user.username}", key: i}, 
          React.createElement(Gravatar, {md5: user.gravatar_hash, size: 40})
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
module.exports = Friends;