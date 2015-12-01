var PostForm = React.createClass({
  render: function() {
    return (
      <form acceptCharset="UTF-8" action="/posts/create" method="post">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Post</h3>
          </div>
          <div className="panel-body">
          <input id="post_content" name="post[content]" type="text" placeholder="New Post Content Here" className="form-control" required/>
          </div>
          <div className="panel-footer">
            <input name="commit" type="submit" value="Create Post" className="btn btn-primary btn-block"/>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = PostForm;
