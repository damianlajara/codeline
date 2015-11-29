var PostContainer = React.createClass({
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    gravatarTag: React.PropTypes.func,
    timeAgoInWords: React.PropTypes.func
  },
  getInitialState: function() {
    return { posts: this.props.posts };
  },
  getDefaultProps: function() {
    return { posts: [] };
  },
  renderPosts: function() {
    this.props.posts.map(function(post, i) {
      return (
        <Post post={post} key={post.id} currentUser={this.props.currentUser} gravatarTag={this.props.gravatarTag} timeAgoInWords={this.props.timeAgoInWords}/>
      );
    },this);
  },
  render: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.user) {
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
