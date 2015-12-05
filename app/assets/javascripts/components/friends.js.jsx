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
    //Maybe limit to 16?
    return this.state.activeFriends.map(function(user, i) {
      // console.log("gravatar hash: ", user.gravatar_hash);
      return (
        <li key={i}>
          <a className="friend-image" href="users/{user.username}">
            <Gravatar md5={user.gravatar_hash} size={150} />
            <span className="text-content"><span>{user.username}</span></span>
          </a>
        </li>
      );
    }, this);
  },
  // friends: function() {
  //   //Maybe limit to 16?
  //   return this.state.activeFriends.map(function(user, i) {
  //     return (
  //       <div className="col-xs-12 col-md-6">
  //           <div className="panel panel-default">
  //               <div className="panel-image">
  //               <a className="panel-image-preview panel-image-preview" href="users/{user.username}" key={i}>
  //                 <Gravatar md5={user.gravatar_hash} size={424} />
  //               </a>
  //                   <label htmlFor="toggle-1"></label>
  //               </div>
  //               <input type="checkbox" id="toggle-1" className="panel-image-toggle"/>
  //               <div className="panel-body">
  //                   <h4>Title of Image</h4>
  //                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper et.</p>
  //               </div>
  //               <div className="panel-footer text-center">
  //                   <a href="#download"><i className="fa fa-download"></i></a>
  //                   <a href="#facebook"><i className="fa fa-facebook"></i></a>
  //                   <a href="#twitter"><i className="fa fa-twitter"></i></a>
  //                   <a href="#share"><i className="fa fa-share-alt"></i></a>
  //               </div>
  //           </div>
  //       </div>
  //     );
  //   }, this);
  // },
  render: function() {
    console.log("friends: ", this.friends());
    return (
      <div>
        <div className="col-md-1"></div>
        <div id="tab1" className="col-md-10">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">
              Friends ({this.state.activeFriends.size || " None at the moment "})
              </h3>
            </div>
            <div className="panel-body">
              <ul className="img-list">
                {this.friends()}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
});
module.exports = Friends;
