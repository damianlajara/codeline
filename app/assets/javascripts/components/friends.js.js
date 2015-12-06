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
    // Maybe limit to 16?
    // TODO use array for testing the layout
    // var friend = {username: "damian", gravatar_hash: "asdbasd"}
    // var array = [friend, friend, friend, friend, friend, friend, friend, friend, friend, friend, friend]
    return this.state.activeFriends.map(function(user, i) {
      return (
        React.createElement("div", {key: i, className: "col-sm-3 image-container"}, 
          React.createElement("a", {className: "friend-image", href: "users/{user.username}"}, 
            React.createElement(Gravatar, {md5: user.gravatar_hash, size: 150}), 
            React.createElement("span", {className: "text-content"}, 
              React.createElement("span", null, " ", user.username, " ")
            )
          )
        )
      );
    }, this);
  },
  render: function() {
    console.log("friends: ", this.friends());
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-1"}), 
        React.createElement("div", {id: "tab1", className: "col-md-10"}, 
          React.createElement("div", {className: "panel panel-info friends-panel"}, 
            React.createElement("div", {className: "panel-heading"}, 
              React.createElement("h3", {className: "panel-title text-center"}, 
              "Friends (", this.state.activeFriends.length || " None at the moment ", ")"
              )
            ), 
            React.createElement("div", {className: "panel-body"}, 
              React.createElement("div", {className: "row img-list"}, 
                this.friends()
              )
            )
          )
        ), 
        React.createElement("div", {className: "col-md-1"})
      )
    );
  }
});
module.exports = Friends;