var Activities = React.createClass({
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object
  },
  allActivities : function() {
    this.props.activities.map(function(activity, index) {
      if(activity.trackable_type === "Friendship" && activity.owner === this.props.currentUser) {
        return (
          <Activity activity={activity} key={index} />
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
