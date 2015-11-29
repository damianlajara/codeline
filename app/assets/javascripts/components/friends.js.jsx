var Friends = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  getInitialState: function() {
    return { activeFriends: {} };
  },
  componentWillMount: function() {
    console.log("Getting friends from server");
    this.getActiveFriendsFromServer();
  },
  getActiveFriendsFromServer: function() {
    $.ajax({
      url: "/users/" + this.props.user.username + "/active_friends",
      type: "GET",
      success: function(friends) {
        console.log("friends: ", friends);
        this.setState({activeFriends: friends});
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    }.bind(this));
  },
  friends: function() {
    //Maybe limit to 16?
    this.state.activeFriends.map(function(user, i) {
      return (
        <a href="users/{user.username}">
          {gravatarTag(user.email, 40)}
        </a>
      );
    }, this);
  },
  render: function() {
    return (
      <div className="col-md-3">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
            Friends ({this.state.activeFriends.size})
            </h3>
          </div>
          <div className="panel-body">
            {this.friends()}
          </div>
        </div>
      </div>
    );
  }
});
