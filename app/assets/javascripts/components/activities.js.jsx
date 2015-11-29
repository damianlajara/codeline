var Activities = React.createClass({
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object
  },
  allActivities : function() {
    this.props.activities.map(function(activity, i) {
      if(activity.trackable_type === "Friendship" && activity.owner === this.props.currentUser) {
        return (
          <Activity activity={activity} key={activity.trackable_id} index={i} />
        )
      }
    },this);
  },
  render: function() {
    return (
      <ul className="timeline">
        {this.allActivities()}
      </ul>
    );
  }
});
