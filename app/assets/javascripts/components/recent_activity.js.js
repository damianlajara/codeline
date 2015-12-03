var RecentActivity = React.createClass({displayName: "RecentActivity",
  propTypes: {
    type: React.PropTypes.string,
    activity: React.PropTypes.object,
    timeAgoInWords: React.PropTypes.func
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
        React.createElement("p", null, 
          React.createElement("a", {href: "/users/{this.props.activity.owner.username}"}, 
            this.props.activity.owner.username
          ), " posted something ", this.props.timeAgoInWords(activity.created_at), 

          React.createElement("a", {href: "/posts/{this.state.post.id}/like", onClick: this.upvoteClickHandler}, 
            React.createElement("i", {className: "fa thumbs-o-up"}), 
            React.createElement("span", {className: "badge"}, this.state.upvotes)
          ), 

          React.createElement("a", {href: "/posts/{this.state.post.id}/unlike", onClick: this.downvoteClickHandler}, 
            React.createElement("i", {className: "fa thumbs-o-down"}), 
            React.createElement("span", {className: "badge"}, this.state.downvotes)
          )
        )
      );
    } else {
      return (
        React.createElement("p", null, 
          React.createElement("a", {href: "/users/{this.props.activity.owner.username}"}, 
            this.props.activity.owner.username
          ), 
            "is now friends with", 
          React.createElement("a", {href: "/users/{this.props.activity.recipient.username}"}, 
            this.props.activity.recipient.username
          ), " !"
        )
      );
    }
  }
});

module.exports = RecentActivity;