var RecentActivity = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    activity: React.PropTypes.object
  },
  getInitialState: function() {
    return { upvotes: 0, downvotes: 0, post: {} };
  },
  componentWillMount: function() {
    //get upvotes and downvotes from server
    // console.log("Getting post from server");
    this.getPostFromServer();
  },
  getPostFromServer: function() {
    $.ajax({
      url: "/posts/" + this.props.activity.trackable_id + "/activity",
      type: "GET",
      dataType: "json",
      success: function(post) {
        // console.log("post: ", post);
        this.setState({post: post});
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    }.bind(this));
  },
  upvoteClickHandler: function(event) {
    $.ajax({
      url: event.target.href,
      type: "post",
      dataType: "json",
      data: {"_method":"put"},
      success: function(upvotes) {
        // console.log("upvote: ", data);
        this.setState({upvotes: upvotes});
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  },
  downvoteClickHandler: function(event) {
    $.ajax({
      url: event.target.href,
      type: "post",
      dataType: "json",
      data: {"_method":"put"},
      success: function(downvotes) {
        // console.log("downvote: ", downvotes);
        this.setState({downvotes: downvotes});
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  },
  render: function() {
    if(this.props.type === "post") {
      return (
        <p>
          <a href="/users/{this.props.activity.owner.username}">
            {this.props.activity.owner.username}
          </a> posted something {timeAgoInWords(activity.created_at)} ago

          <a href="/posts/{this.state.post.id}/like" onClick={this.upvoteClickHandler}>
            <i className="fa thumbs-o-up"></i>
            <span className="badge">{this.state.upvotes}</span>
          </a>

          <a href="/posts/{this.state.post.id}/unlike" onClick={this.downvoteClickHandler}>
            <i className="fa thumbs-o-down"></i>
            <span className="badge">{this.state.downvotes}</span>
          </a>
        </p>
      );
    } else {
      return (
        <p>
          <a href="/users/{this.props.activity.owner.username}">
            {this.props.activity.owner.username}
          </a>
            is now friends with
          <a href="/users/{this.props.activity.recipient.username}">
            {this.props.activity.recipient.username}
          </a> !
        </p>
      );
    }
  }
});

module.exports = RecentActivity;
