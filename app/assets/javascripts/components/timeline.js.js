var Timeline = React.createClass({displayName: "Timeline",
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object,
    content: React.PropTypes.string
  },
  gravatarTag: function(email, size) {
    var avatarSize = size || 60
    var formattedEmail = email.trim().toLowerCase();
    var hash = "http://www.gravatar.com/avatar/" + CryptoJS.MD5(formattedEmail) + "?s=" + size;
    return ('<img src="' + hash + '"/>');
  },
  getInitialState: function() {
    return { activities: this.props.activities, content: this.props.content };
  },
  getDefaultProps: function() {
    return { activities: [], content: "" };
  },
  render: function() {
    var activeContent = "";
    var activePost = "";
    if (this.props.content === "posts") {
      activePost = "active";
    } else {
      activeContent = "active";
    }

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "jumbotron text-center"}, 
          React.createElement("h1", null, "Timeline"), 
          React.createElement("div", {className: "btn-group", role: "group", "aria-label": "Default"}, 

            React.createElement("a", {href: "/activities", className: "btn btn-default {activeContent}"}, 
              "Everything"
            ), 

            React.createElement("a", {href: "/activities?content=posts", className: "btn btn-default {activePost}"}, 
              "Posts"
            )

          ), 
          React.createElement("p", null)
        ), 

        React.createElement("div", {className: "container"}, 
          React.createElement(Activities, {activities: this.props.activities, currentUser: this.props.currentUser, gravatarTag: this.gravatarTag})
        )
      )

    );
  }
});