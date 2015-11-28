var Activities = React.createClass({displayName: "Activities",
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object
  },
  allActivities : function() {
    this.props.activities.map(function(activity, index) {
      if(activity.trackable_type === "Friendship" && activity.owner === this.props.currentUser) {
        return (
          React.createElement(Activity, {activity: activity, key: index})
        )
      }
    },this);
  },
  render: function() {
    return (
      React.createElement("ul", {className: "timeline"}, 
        this.allActivities()
      )
    );
  }
});