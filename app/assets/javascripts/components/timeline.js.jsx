var Timeline = React.createClass({
  propTypes: {
    activities: React.PropTypes.array,
    currentUser: React.PropTypes.object,
    content: React.PropTypes.string
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
      <div>
        <div className="jumbotron text-center">
          <h1>Timeline</h1>
          <div className="btn-group" role="group" aria-label="Default">

            <a href="/activities" className="btn btn-default {activeContent}">
              Everything
            </a>

            <a href="/activities?content=posts" className="btn btn-default {activePost}">
              Posts
            </a>

          </div>
          <p></p>
        </div>

        <div className="container">
          <Activities activities={this.props.activities} currentUser={this.props.currentUser}/>
        </div>
      </div>

    );
  }
});
