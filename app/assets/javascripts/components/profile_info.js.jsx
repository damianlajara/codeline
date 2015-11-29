var ProfileInfo = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {gravatarTag(this.props.user.email, 200)}
            </div>
            <div className="col-md-4">
              <h3>{this.props.user.username}</h3>
              <p>Age: {this.props.user.age}</p>
              <p>Gender: {this.props.user.gender} </p>
              <p><a href={this.props.user.website}>Website</a></p>
              <p><a href={this.props.user.blog}>Blog</a></p>
            </div>
            <div className="col-md-4">
              <h3>About Me</h3>
              <p>{this.props.user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
