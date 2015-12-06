var Gravatar = require("react-gravatar");
var Friends = React.createClass({
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
        <div key={i} className="col-sm-3 image-container">
          <a className="friend-image" href="users/{user.username}">
            <Gravatar md5={user.gravatar_hash} size={150} />
            <span className="text-content">
              <span> {user.username} </span>
            </span>
          </a>
        </div>
      );
    }, this);
  },
  render: function() {
    console.log("friends: ", this.friends());
    return (
      <div>
        <div className="col-md-1"></div>
        <div id="tab1" className="col-md-10">
          <div className="panel panel-info friends-panel">
            <div className="panel-heading">
              <h3 className="panel-title text-center">
              Friends ({this.state.activeFriends.length || " None at the moment "})
              </h3>
            </div>
            <div className="panel-body">
              <div className="row img-list">
                {this.friends()}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
});
module.exports = Friends;
