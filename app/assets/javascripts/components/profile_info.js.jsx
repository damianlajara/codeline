var Gravatar = require("react-gravatar");
var ProfileInfo = React.createClass({
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
      <div id="tab1">
        <div className="col-md-4">
        <h1>Tab one</h1>
        </div>
      </div>
    );
  },
  displayBio: function() {
    return (
      <div id="tab2">
        <div className="col-md-4">
        <h1>Tab two</h1>
        </div>
      </div>
    );
  },
  displaySkills: function() {
    return (
      <div id="tab3">
        <div className="col-md-4">
        <h1>Tab three</h1>
        </div>
      </div>
    );
  },
  getProfileContent: function() {
    return this.state.content;
  },
  render: function() {
    return (
      <div>

        <div className="jumbotron profileinfo-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Gravatar md5={this.props.user.gravatar_hash} size={200} />
              </div>
              {this.getProfileContent()}
            </div>
          </div>
        </div>

        <div className="profile-tabs btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
          <div className="btn-group" role="group" onClick={this.tab1Click}>
            <button type="button" id="stars" className="btn btn-default" href="#tab1" data-toggle="tab">
            <i className="fa fa-home" aria-hidden="true"></i>
                <div className="hidden-xs">My bio</div>
            </button>
          </div>
          <div className="btn-group" role="group" onClick={this.tab2Click}>
            <button type="button" id="favorites" className="btn btn-default" href="#tab2" data-toggle="tab">
            <i className="fa fa-star" aria-hidden="true"></i>
                <div className="hidden-xs">More about me</div>
            </button>
          </div>
          <div className="btn-group" role="group" onClick={this.tab3Click}>
            <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab">
            <i className="fa fa-tags" aria-hidden="true"></i>
                <div className="hidden-xs">Skills</div>
            </button>
          </div>
        </div>

      </div>
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
