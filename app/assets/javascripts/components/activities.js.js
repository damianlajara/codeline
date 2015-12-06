var Activity = require('./activity');
var Activities = React.createClass({displayName: "Activities",
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object
  },
  allActivities : function() {
    this.props.activities.map(function(activity, i) {
      if(activity.trackable_type === "Friendship" && activity.owner === this.props.currentUser) {
        return (
          React.createElement(Activity, {activity: activity, key: activity.trackable_id, index: i})
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
module.exports = Activities;