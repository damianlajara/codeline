Activity = React.createClass({displayName: "Activity",
  propTypes: {
    activity: React.PropTypes.object,
    index: React.PropTypes.number
  },
  getText: function() {
    if(this.props.activity.trackable_type === "Post") {
        return (React.createElement("p", null, activity.trackable.content_html));
    } else if(this.props.activity.trackable_type === "Friendship") {
      return (
        React.createElement("p", null, 
          React.createElement("a", {href: "/users/{this.props.activity.owner.username}"}, 
            this.props.activity.owner.username
          ), 
          "is now friends with", 
          React.createElement("a", {href: "/users/{this.props.activity.recipient.username}"}, 
            this.props.activity.recipient.username
          )
        )
      );
    }
  },
  render: function() {
    var inverted = this.props.index % 2 == 0 ? 'timeline-inverted' : "";
    return (
      React.createElement("li", {className: "{inverted}"}, 
        React.createElement("div", {className: "timeline-badge"}, 
          gravatarTag(this.props.activity.owner.email)
        ), 
        React.createElement("div", {className: "timeline-panel"}, 
          React.createElement("div", {className: "timeline-heading"}, 
            React.createElement("h4", {className: "timeline-title"}, 
            React.createElement("a", {href: "/users/{this.props.activity.owner.username}"}, 
              this.props.activity.owner.username
            )
            ), 
            React.createElement("p", null, 
              React.createElement("small", {className: "text-muted"}, 
              React.createElement("i", {className: "fa fa-clock-o"}), 
              timeAgoInWords(this.props.activity.created_at), " ago"
             )
            )
          ), 
          React.createElement("div", {className: "timeline-body"}, 
            this.getText()
          )
        )
      )
    );
  }
});