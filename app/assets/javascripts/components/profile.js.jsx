var Profile = React.createClass({
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  render: function() {
    return (
      <div>
        <ProfileInfo user={this.props.user} />
        <div className="container">
          <div className="row">
            <Friends user={this.props.user} />
            <PostContainer posts={this.props.posts} user={this.props.user} currentUser={this.props.currentUser} />
            <RecentActivities activities={this.props.activities} />
          </div>
        </div>
      </div>
    );
  }
});
//USER AJAX to go to server and update the gravat via state
