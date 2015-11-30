var Profile = React.createClass({displayName: "Profile",
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfileInfo, {user: this.props.user}), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement(Friends, {user: this.props.user}), 
            React.createElement(PostContainer, {posts: this.props.posts, user: this.props.user, currentUser: this.props.currentUser}), 
            React.createElement(RecentActivities, {activities: this.props.activities})
          )
        )
      )
    );
  }
});
//USER AJAX to go to server and update the gravat via state