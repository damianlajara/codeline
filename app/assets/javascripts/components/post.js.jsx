var Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    gravatarTag: React.PropTypes.func,
    timeAgoInWords: React.PropTypes.func
  },
  getLinks: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.post.user) {
      return (
        <div>
          <a href="/posts/{this.props.post.id}" data-method="delete" rel="nofollow">x</a>
          <a href="/posts/{this.props.post.id}/edit">edit</a>
        </div>
      );
    } else {
      return null;
    }
  },
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <p className="panel-title">
            {this.props.gravatarTag(this.props.post.user.email, 20)}
            {this.props.post.user.username} posted this {this.props.timeAgoInWords(this.props.post.created_at)} ago
            {this.getLinks()}
          </p>
        </div>
        <div className="panel-body">
          {this.props.post.content_html}
        </div>
      </div>
    );
  }
});
