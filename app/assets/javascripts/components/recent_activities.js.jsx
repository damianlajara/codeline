var RecentActivities = React.createClass({
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
      return (<RecentActivity type="post" activity={activity} timeAgoInWords={this.props.timeAgoInWords} />);
    } else {
      return null;
    }
  },
  friendshipActivity: function(activity) {
    // Make sure to check that the activity still exists. If we delete a post, friendship or w.e it is that we are tracking, the activity will still be tracking it since we are not explicitly deleting the activity upon the dependent destroy
    if (activity.trackable) {
      return (<RecentActivity type="friendship" activity={activity} timeAgoInWords={this.props.timeAgoInWords} />);
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
      <div>
        <div className="col-md-1"></div>
        <div id="tab3" className="col-md-10">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Recent Activity</h3>
            </div>
            <div className="panel-body">
              {this.renderActivities(this.props.activities)}
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

    );
  }
});

module.exports = RecentActivities;
