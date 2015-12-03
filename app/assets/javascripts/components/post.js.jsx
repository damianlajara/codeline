var Gravatar = require("react-gravatar");
var Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    userOfPost: React.PropTypes.object,
    timeAgoInWords: React.PropTypes.func
  },
  getLinks: function() {
    if(this.props.currentUser && this.props.currentUser === this.props.userOfPost) {
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
    console.log(this.props.timeAgoInWords(this.props.post.created_at))
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <p className="panel-title">
          <Gravatar md5={this.props.userOfPost.gravatar_hash} size={20} />
            {this.props.userOfPost.username} posted this {this.props.timeAgoInWords(this.props.post.created_at)}
            {this.getLinks()}
          </p>
        </div>
        <div className="panel-body">
          {$('<div/>').html(this.props.post.content_html).text()}
        </div>
      </div>
    );
  }
});
module.exports = Post;
