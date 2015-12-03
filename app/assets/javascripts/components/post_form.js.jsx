var PostForm = React.createClass({
  submitForm: function(event) {
    event.preventDefault();
    console.log("clicked on submit");
    var content = this.refs.postContentInput.value;
    console.log("input value: ", content);
    $.post( "/posts", { post: {content: content } }, function( data ) {
      console.log("Data: ", data);
    }, "json");
  },
  componentDidMount: function() {
    // console.log("input: ", ReactDOM.findDOMNode(this.refs.postContentInput).value);
  },
  render: function() {
    return (
      <form acceptCharset="UTF-8" action="" method="">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Post</h3>
          </div>
          <div className="panel-body">
          <input ref="postContentInput" id="post_content" name="post[content]" type="text" placeholder="New Post Content Here" className="form-control" required />
          </div>
          <div className="panel-footer">
            <input ref="submitPostForm" name="commit" type="submit" value="Create Post" className="btn btn-primary btn-block" onClick={this.submitForm}/>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = PostForm;
