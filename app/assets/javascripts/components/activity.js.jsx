var Activity = React.createClass({
  propTypes: {
    activity: React.PropTypes.object,
    index: React.PropTypes.number
  },
  getText: function() {
    if(this.props.activity.trackable_type === "Post") {
        return (<p>{activity.trackable.content_html}</p>);
    } else if(this.props.activity.trackable_type === "Friendship") {
      return (
        <p>
          <a href="/users/{this.props.activity.owner.username}">
            {this.props.activity.owner.username}
          </a>
          is now friends with
          <a href="/users/{this.props.activity.recipient.username}">
            {this.props.activity.recipient.username}
          </a>
        </p>
      );
    }
  },
  render: function() {
    var inverted = this.props.index % 2 == 0 ? 'timeline-inverted' : "";
    return (
      <li className="{inverted}">
        <div className="timeline-badge">
          {gravatarTag(this.props.activity.owner.email)}
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">
            <a href="/users/{this.props.activity.owner.username}">
              {this.props.activity.owner.username}
            </a>
            </h4>
            <p>
              <small className="text-muted">
              <i className="fa fa-clock-o"></i>
              {timeAgoInWords(this.props.activity.created_at)} ago
             </small>
            </p>
          </div>
          <div className="timeline-body">
            {this.getText()}
          </div>
        </div>
      </li>
    );
  }
});
