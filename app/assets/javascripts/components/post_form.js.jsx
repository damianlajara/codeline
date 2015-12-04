var PostForm = React.createClass({
  submitForm: function(event) {
    event.preventDefault();
    console.log("clicked on submit");
    var content = this.refs.postContentInput.value;
    console.log("input value: ", content);
    $.post( "/posts", { post: {content: content } }, function( newCreatedPost ) {
      console.log("newCreatedPost: ", newCreatedPost);
    }, "json");
  },
  componentDidMount: function() {
    // console.log("input: ", ReactDOM.findDOMNode(this.refs.postContentInput).value);
  },
  render: function() {
    return (
      <form acceptCharset="UTF-8" action="" method="">
        <div className="form panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Create a new post</h3>
            <i className="fa fa-pencil-square-o" aria-hidden="true" data-toggle="collapse" data-target="#collapseForm"></i>
          </div>
          <div id="collapseForm" className="collapse">
            <div className="panel-body">
            <input ref="postContentInput" id="post_content" name="post[content]" type="text" placeholder="New Post Content Here" className="form-control" required />
            </div>
            <div className="panel-footer">
              <input ref="submitPostForm" name="commit" type="submit" value="Create Post" className="btn btn-primary btn-block" onClick={this.submitForm}/>
            </div>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = PostForm;
