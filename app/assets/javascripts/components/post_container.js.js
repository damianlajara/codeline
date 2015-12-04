var PostForm = require('./post_form');
var Post = require('./post');

var PostContainer = React.createClass({displayName: "PostContainer",
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
  updatePosts: function(newPost) {
    console.log("updated state with: ", newPost);
    // add the new post to the state and sort it, then update the state with the new value
    var newPosts = this.state.posts.concat(newPost).sort(function(a,b) {
      aTime = new Date(a.created_at).getTime();
      bTime = new Date(b.created_at).getTime();
      return bTime - aTime;
    });
    console.log("sorted new posts: ", newPosts);
    this.setState({posts: newPosts});
  },
  displayForm: function() {
    if(this.props.currentUser && this.props.currentUser.id === this.props.userOfPost.id) {
      //Only show the form if it's the user logged in and it's his/her account
      return (
        React.createElement(PostForm, {updatePosts: this.updatePosts})
      );
    }
  },
  renderPosts: function() {
    console.log("rendering Posts")
    console.log("posts in renderPosts: ", this.state.posts)
    return this.state.posts.map(function(post, i) {
      return (
        React.createElement(Post, {post: post, key: post.id, currentUser: this.props.currentUser, userOfPost: this.props.userOfPost, 
        timeAgoInWords: this.props.timeAgoInWords})
      );
    },this);
  },
  render: function() {
    console.log("rendering post_container!")
    return (
      React.createElement("div", {className: "col-md-6"}, 
        this.displayForm(), 
        this.renderPosts()
      )
    );
  }
});

module.exports = PostContainer;