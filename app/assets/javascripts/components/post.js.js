var Gravatar = require("react-gravatar");
var Post = React.createClass({displayName: "Post",
  propTypes: {
    post: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    userOfPost: React.PropTypes.object,
    timeAgoInWords: React.PropTypes.func
  },
  getLinks: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.userOfPost) {
      return (
        React.createElement("div", null, 
          React.createElement("a", {href: "/posts/{this.props.post.id}", "data-method": "delete", rel: "nofollow"}, "x"), 
          React.createElement("a", {href: "/posts/{this.props.post.id}/edit"}, "edit")
        )
      );
    } else {
      return null;
    }
  },
  render: function() {
    console.log(this.props.timeAgoInWords(this.props.post.created_at))
    return (
      React.createElement("div", {className: "post panel panel-info"}, 
        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("p", {className: "panel-title"}, 
            React.createElement(Gravatar, {className: "gravatar", md5: this.props.userOfPost.gravatar_hash, size: 20}), 
            this.props.userOfPost.username, " posted this ", this.props.timeAgoInWords(this.props.post.created_at), 
            this.getLinks()
          )
        ), 
        React.createElement("div", {className: "panel-body"}, 
          $('<div/>').html(this.props.post.content_html).text()
        )
      )
    );
  }
});
module.exports = Post;