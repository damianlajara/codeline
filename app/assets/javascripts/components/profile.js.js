var ProfileInfo = require('./profile_info');
var Friends = require('./friends');
var PostContainer = require('./post_container');
var RecentActivities = require('./recent_activities');

var Profile = React.createClass({displayName: "Profile",
  propTypes: {
    posts: React.PropTypes.array,
    user: React.PropTypes.object,
    currentUser: React.PropTypes.object,
    activities: React.PropTypes.array
  },
  timeAgoInWords: function(from, to) {
    to = to ? to : Date.now();
    var from = new Date(from);
    var minutes = (to - from) / 60000;

    var data = [
      [0      , 'less than a minute ago'],
      [1      , 'a minute ago'],
      [2      , function(m) {return m.toFixed() + ' minutes ago';}],
      [45     , 'about 1 hour ago'],
      [90     , function(m) {return 'about ' + (m / 60).toFixed() + ' hours ago';}],
      [1440   , '1 day ago'],
      [2880   , function(m) {return (m / 1440).toFixed() + ' days ago';}],
      [43200  , 'about 1 month ago'],
      [86400  , function(m) {return (m / 43200).toFixed() + ' months ago';}],
      [52960  , 'about 1 year ago'],
      [1051200, function(m) {return (m / 525960).toFixed() + ' years ago';}],
      [Number.MAX_VALUE]
    ];

    function b_search(value, lower, pos, upper) {
      if  (data[pos][0] <= value && value < data[pos + 1][0])
        return data[pos];
      else if (value < data[pos][0])
        return b_search(value, lower, Math.floor((lower + pos - 1) / 2), pos - 1);
      else
        return b_search(value, pos + 1, Math.floor((pos + 1 + upper) / 2), upper);
    }

    var res = b_search(minutes, 0, Math.floor((data.length - 1) / 2), data.length - 1)[1];
    return (res instanceof Function) ? res(minutes) : res;
  },
  componentDidMount: function() {
    //Make the primary tab active
    var buttons = $('.profile-tabs button')
    buttons.click(function(){
      buttons.removeClass('active');
      $(this).addClass('active');
    });
  },
  getInitialState: function() {
    return { content: this.displayPostContainer() };
  },
  tab1Click: function() {
    this.setState({ content: this.displayFriends() });
    console.log("rendering first tab");
  },
  tab2Click: function() {
    this.setState({ content: this.displayPostContainer() });
    console.log("rendering second tab");
  },
  tab3Click: function() {
    this.setState({ content: this.displayRecentActivities() });
    console.log("rendering third tab");
  },
  displayFriends: function() {
    return (
      React.createElement(Friends, {user: this.props.user})
    );
  },
  displayPostContainer: function() {
    return (
      React.createElement(PostContainer, {posts: this.props.posts, userOfPost: this.props.user, currentUser: this.props.currentUser, 
      timeAgoInWords: this.timeAgoInWords})
    );
  },
  displayRecentActivities: function() {
    return (
      React.createElement(RecentActivities, {activities: this.props.activities, timeAgoInWords: this.timeAgoInWords})
    );
  },
  displayContent: function() {
    return this.state.content;
  },
  displayTabs: function() {
    return(
      React.createElement("div", {className: "profile-tabs btn-group btn-group-justified btn-group-lg", role: "group", "aria-label": "..."}, 
        React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab1Click}, 
          React.createElement("button", {type: "button", className: "btn btn-default", href: "#tab1", "data-toggle": "tab"}, 
          React.createElement("i", {className: "fa fa-group", "aria-hidden": "true"}), 
              React.createElement("div", {className: "hidden-xs"}, "Friends")
          )
        ), 
        React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab2Click}, 
          React.createElement("button", {type: "button", className: "active btn btn-default", href: "#tab2", "data-toggle": "tab"}, 
          React.createElement("i", {className: "fa fa-thumb-tack", "aria-hidden": "true"}), 
              React.createElement("div", {className: "hidden-xs"}, "Posts")
          )
        ), 
        React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab3Click}, 
          React.createElement("button", {type: "button", className: "btn btn-default", href: "#tab3", "data-toggle": "tab"}, 
          React.createElement("i", {className: "fa fa-clock-o", "aria-hidden": "true"}), 
              React.createElement("div", {className: "hidden-xs"}, "Recent Activity")
          )
        )
      )
    );
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProfileInfo, {user: this.props.user}), 
          this.displayTabs(), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            this.displayContent()
          )
        )
      )
    );
  }
});

module.exports = Profile;