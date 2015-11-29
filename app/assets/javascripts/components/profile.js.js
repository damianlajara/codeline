var Profile = React.createClass({displayName: "Profile",
  propTypes: {
    user: React.PropTypes.object,
    posts: React.PropTypes.array,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  gravatarTag: function(email, size) {
    var avatarSize = size || 60
    var formattedEmail = email.trim().toLowerCase();
    var hash = "http://www.gravatar.com/avatar/" + CryptoJS.MD5(formattedEmail) + "?s=" + size;
    return ('<img src="' + hash + '"/>');
  },
  timeAgoInWords: function(from_time) {
    var distance_in_minutes, distance_in_seconds, distance_in_years, minute_offset_for_leap_year, remainder;
    var to_time = Date.now();
    distance_in_minutes = Math.round(Math.abs(to_time - from_time) / 60 / 1000);
    distance_in_seconds = Math.round(Math.abs(to_time - from_time) / 1000);
    if (0 <= distance_in_minutes && distance_in_minutes <= 1) {
      if (distance_in_minutes === 0) {
        return "less than 1 minute ago";
      } else {
        return "" + distance_in_minutes + " minutes ago";
      }
    } else if (2 <= distance_in_minutes && distance_in_minutes <= 44) {
      return "" + distance_in_minutes + " minutes ago";
    } else if (45 <= distance_in_minutes && distance_in_minutes <= 89) {
      return "about 1 hour ago";
    } else if (90 <= distance_in_minutes && distance_in_minutes <= 1439) {
      return "about " + (Math.round(distance_in_minutes / 60.0)) + " hours ago";
    } else if (1440 <= distance_in_minutes && distance_in_minutes <= 2529) {
      return "1 day ago";
    } else if (2530 <= distance_in_minutes && distance_in_minutes <= 43199) {
      return "" + (Math.round(distance_in_minutes / 1440.0)) + " days ago";
    } else if (43200 <= distance_in_minutes && distance_in_minutes <= 86399) {
      return "about 1 month ago";
    } else if (86400 <= distance_in_minutes && distance_in_minutes <= 525599) {
      return "" + (Math.round(distance_in_minutes / 43200.0)) + " months ago";
    } else {
      distance_in_years = distance_in_minutes / 525600;
      minute_offset_for_leap_year = (distance_in_years / 4) * 1440;
      remainder = (distance_in_minutes - minute_offset_for_leap_year) % 525600;
      if (remainder < 131400) {
        return "about " + (Math.round(distance_in_years)) + " years ago";
      } else if (remainder < 394200) {
        return "over " + (Math.round(distance_in_years)) + " years ago";
      } else {
        return "almost " + (Math.round(distance_in_years + 1)) + " years ago";
      }
    }
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfileInfo, {user: this.props.user, gravatarTag: this.gravatarTag}), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement(Friends, {user: this.props.user, gravatarTag: this.gravatarTag}), 
            React.createElement(PostContainer, {posts: this.props.posts, user: this.props.user, currentUser: this.props.currentUser, gravatarTag: this.gravatarTag, timeAgoInWords: this.timeAgoInWords}), 
            React.createElement(RecentActivities, {activities: this.props.activities, timeAgoInWords: this.timeAgoInWords})
          )
        )
      )
    );
  }
});