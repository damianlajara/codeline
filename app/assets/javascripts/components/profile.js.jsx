// var ProfileInfo = require('./profile_info');
// var Friends = require('./friends');
// var PostContainer = require('./post_container');
// var RecentActivities = require('./recent_activities');

var Profile = React.createClass({
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  gravatarTag: function(hashedEmail, size) {
    var avatarSize = size || 60
    var hash = "http://www.gravatar.com/avatar/" + hashedEmail + "?s=" + size;
    return (<img src={hash}/>);
  },
  render: function() {
    return (
      <div>
        <ProfileInfo user={this.props.user} gravatarTag={this.gravatarTag} />
        <div className="container">
          <div className="row">
            <Friends user={this.props.user} gravatarTag={this.gravatarTag} />
            <PostContainer posts={this.props.posts} user={this.props.user} currentUser={this.props.currentUser} gravatarTag={this.gravatarTag} />
            <RecentActivities activities={this.props.activities} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
