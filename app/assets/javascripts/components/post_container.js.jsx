var PostForm = require('./post_form');
var Post = require('./post');

var PostContainer = React.createClass({
  propTypes: {
    posts: React.PropTypes.array,
    userOfPost: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    timeAgoInWords: React.PropTypes.func
  },
  getInitialState: function() {
    return { posts: this.props.posts };
  },
  getDefaultProps: function() {
    return { posts: [] };
  },
  renderPosts: function() {
    return this.props.posts.map(function(post, i) {
      return (
        <Post post={post} key={post.id} currentUser={this.props.currentUser} userOfPost={this.props.userOfPost}
        timeAgoInWords={this.props.timeAgoInWords} />
      );
    },this);
  },
  render: function() {
    if(this.props.currentUser && this.props.currentUser.id === this.props.userOfPost.id) {
      //Only show the form if it's the user logged in and it's his account
      return (
        <div className="col-md-6">
          <PostForm />
          {this.renderPosts()}
        </div>
      );
    } else {
      return (
        <div className="col-md-6">
          {this.renderPosts()}
        </div>
      );
    }
  }
});

module.exports = PostContainer;