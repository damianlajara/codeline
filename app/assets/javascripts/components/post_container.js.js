var PostContainer = React.createClass({displayName: "PostContainer",
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
        React.createElement(Post, {post: post, key: post.id, currentUser: this.props.currentUser, gravatarTag: this.props.gravatarTag, timeAgoInWords: this.props.timeAgoInWords})
      );
    },this);
  },
  render: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.user) {
      //Only show the form if it's the user logged in and it's his account
      return (
        React.createElement("div", {className: "col-md-6"}, 
          React.createElement(PostForm, null), 
          this.renderPosts()
        )
      );
    } else {
      return (
        React.createElement("div", {className: "col-md-6"}, 
          this.renderPosts()
        )
      );
    }
  }
});