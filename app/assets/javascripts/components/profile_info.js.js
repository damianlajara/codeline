var Gravatar = require("react-gravatar");
var ProfileInfo = React.createClass({displayName: "ProfileInfo",
  propTypes: {
    user: React.PropTypes.object
  },
  getInitialState: function() {
    return { content: this.displayLinks() };
  },
  tab1Click: function() {
    this.setState({content: this.displayLinks()});
    console.log("rendering first tab");
  },
  tab2Click: function() {
    this.setState({content: this.displayBio()});
    console.log("rendering second tab");
  },
  tab3Click: function() {
    this.setState({content: this.displaySkills()});
    console.log("rendering third tab");
  },
  displayLinks: function() {
    return (
      React.createElement("div", {id: "tab1"}, 
        React.createElement("div", {className: "col-md-4"}, 
        React.createElement("h1", null, "Tab one")
        )
      )
    );
  },
  displayBio: function() {
    return (
      React.createElement("div", {id: "tab2"}, 
        React.createElement("div", {className: "col-md-4"}, 
        React.createElement("h1", null, "Tab two")
        )
      )
    );
  },
  displaySkills: function() {
    return (
      React.createElement("div", {id: "tab3"}, 
        React.createElement("div", {className: "col-md-4"}, 
        React.createElement("h1", null, "Tab three")
        )
      )
    );
  },
  getProfileContent: function() {
    return this.state.content;
  },
  render: function() {
    return (
      React.createElement("div", null, 

        React.createElement("div", {className: "jumbotron profileinfo-container"}, 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-md-4"}, 
                React.createElement(Gravatar, {md5: this.props.user.gravatar_hash, size: 200})
              ), 
              this.getProfileContent()
            )
          )
        ), 

        React.createElement("div", {className: "profile-tabs btn-group btn-group-justified btn-group-lg", role: "group", "aria-label": "..."}, 
          React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab1Click}, 
            React.createElement("button", {type: "button", id: "stars", className: "btn btn-default", href: "#tab1", "data-toggle": "tab"}, 
            React.createElement("i", {className: "fa fa-home", "aria-hidden": "true"}), 
                React.createElement("div", {className: "hidden-xs"}, "My bio")
            )
          ), 
          React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab2Click}, 
            React.createElement("button", {type: "button", id: "favorites", className: "btn btn-default", href: "#tab2", "data-toggle": "tab"}, 
            React.createElement("i", {className: "fa fa-star", "aria-hidden": "true"}), 
                React.createElement("div", {className: "hidden-xs"}, "More about me")
            )
          ), 
          React.createElement("div", {className: "btn-group", role: "group", onClick: this.tab3Click}, 
            React.createElement("button", {type: "button", id: "following", className: "btn btn-default", href: "#tab3", "data-toggle": "tab"}, 
            React.createElement("i", {className: "fa fa-tags", "aria-hidden": "true"}), 
                React.createElement("div", {className: "hidden-xs"}, "Skills")
            )
          )
        )

      )
    );
  }
});
module.exports = ProfileInfo;


// <div className="jumbotron">
//   <div className="container">
//     <div className="row">
//       <div className="col-md-4">
//       <Gravatar md5={this.props.user.gravatar_hash} size={200} />
//       </div>
//       <div className="col-md-4">
//         <h3>{this.props.user.username}</h3>
//         <p>Age: {this.props.user.age}</p>
//         <p>Gender: {this.props.user.gender} </p>
//         <p><a href={this.props.user.website}>Website</a></p>
//         <p><a href={this.props.user.blog}>Blog</a></p>
//       </div>
//       <div className="col-md-4">
//         <h3>About Me</h3>
//         <p>{this.props.user.bio}</p>
//       </div>
//     </div>
//   </div>
// </div>





// <div>
//   <div className="col-md-4">
//     <h3>{this.props.user.username}</h3>
//     <p>Age: {this.props.user.age}</p>
//     <p>Gender: {this.props.user.gender} </p>
//     <p><a href={this.props.user.website}>Website</a></p>
//     <p><a href={this.props.user.blog}>Blog</a></p>
//   </div>
//   <div className="col-md-4">
//     <h3>About Me</h3>
//     <p>{this.props.user.bio}</p>
//   </div>
// </div>