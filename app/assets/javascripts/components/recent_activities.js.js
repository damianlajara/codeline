var RecentActivities = React.createClass({displayName: "RecentActivities",
  propTypes: {
    activities: React.PropTypes.array,
    timeAgoInWords: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      activities: []
    }
  },
  postActivity: function(activity) {
    // Make sure to check that the activity still exists. If we delete a post, friendship or w.e it is that we are tracking, the activity will still be tracking it since we are not explicitly deleting the activity upon the dependent destroy
    if (activity.trackable) {
      return (React.createElement(RecentActivity, {type: "post", activity: activity, timeAgoInWords: this.props.timeAgoInWords}));
    } else {
      return null;
    }
  },
  friendshipActivity: function(activity) {
    // Make sure to check that the activity still exists. If we delete a post, friendship or w.e it is that we are tracking, the activity will still be tracking it since we are not explicitly deleting the activity upon the dependent destroy
    if (activity.trackable) {
      return (React.createElement(RecentActivity, {type: "friendship", activity: activity, timeAgoInWords: this.props.timeAgoInWords}));
    } else {
      return null;
    }
  },
  renderActivities: function(activities) {
    //Map through actvities
    this.props.activities.map(function(activity, i) {
      if(activity.key === "post.created") {
        return (this.postActivity(activity));
      } else {
        // friendship.accepted
        return (this.friendshipActivity(activity));
      }
    },this);
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-1"}), 
        React.createElement("div", {id: "tab3", className: "col-md-10"}, 
          React.createElement("div", {className: "panel panel-info"}, 
            React.createElement("div", {className: "panel-heading"}, 
              React.createElement("h3", {className: "panel-title"}, "Recent Activity")
            ), 
            React.createElement("div", {className: "panel-body"}, 
              this.renderActivities(this.props.activities)
            )
          )
        ), 
        React.createElement("div", {className: "col-md-1"})
      )

    );
  }
});

module.exports = RecentActivities;