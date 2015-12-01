var Profile = React.createClass({displayName: "Profile",
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  gravatarTag: function(hashedEmail, size) {
    var avatarSize = size || 60
    var hash = "http://www.gravatar.com/avatar/" + hashedEmail + "?s=" + size;
    return (React.createElement("img", {src: hash}));
  },
  // gravatarTag(this.props.user.gravatar_hash, 200)
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfileInfo, {user: this.props.user, gravatarTag: this.gravatarTag}), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement(Friends, {user: this.props.user, gravatarTag: this.gravatarTag}), 
            React.createElement(PostContainer, {posts: this.props.posts, user: this.props.user, currentUser: this.props.currentUser, gravatarTag: this.gravatarTag}), 
            React.createElement(RecentActivities, {activities: this.props.activities})
          )
        )
      )
    );
  }
});
module.exports = Profile;