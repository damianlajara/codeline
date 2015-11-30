Post = React.createClass({displayName: "Post",
  propTypes: {
    post: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    gravatarTag: React.PropTypes.func
  },
  getLinks: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.post.user) {
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
    return (
      React.createElement("div", {className: "panel panel-info"}, 
        React.createElement("div", {className: "panel-heading"}, 
          React.createElement("p", {className: "panel-title"}, 
            this.props.gravatarTag(this.props.post.user.gravatar_hash, 20), 
            this.props.post.user.username, " posted this ", timeAgoInWords(this.props.post.created_at), " ago", 
            this.getLinks()
          )
        ), 
        React.createElement("div", {className: "panel-body"}, 
          this.props.post.content_html
        )
      )
    );
  }
});