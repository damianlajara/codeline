var PostForm = React.createClass({displayName: "PostForm",
  propTypes: {
    updatePosts: React.PropTypes.func //parent's handler to updates its state, needs to pass it to the child in order to recieve a reply to set the state
  },
  submitForm: function(event) {
    event.preventDefault();
    console.log("clicked on submit");
    console.log("parent context: ", this.parent);

    var content = this.refs.postContentInput.value;
    console.log("input value: ", content);

    $.ajax({
      url: "/posts",
      type: "POST",
      dataType: "json",
      data: { post : { content : content } },
      success: function(newCreatedPost) {
        console.log("Got new post: ", newCreatedPost);
        this.props.updatePosts(newCreatedPost); //update parents state
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  },
  componentDidMount: function() {
    // console.log("input: ", ReactDOM.findDOMNode(this.refs.postContentInput).value);
  },
  render: function() {
    console.log("rendering post_form!")
    return (
      React.createElement("form", {acceptCharset: "UTF-8", action: "", method: ""}, 
        React.createElement("div", {className: "form panel panel-info"}, 
          React.createElement("div", {className: "panel-heading"}, 
            React.createElement("h3", {className: "panel-title"}, "Create a new post"), 
            React.createElement("i", {className: "fa fa-pencil-square-o", "aria-hidden": "true", "data-toggle": "collapse", "data-target": "#collapseForm"})
          ), 
          React.createElement("div", {id: "collapseForm", className: "collapse in"}, 
            React.createElement("div", {className: "panel-body"}, 
              React.createElement("input", {ref: "postContentInput", id: "post_content", name: "post[content]", type: "text", placeholder: "New Post Content Here", className: "form-control post-form-content", required: true}), 
              React.createElement("input", {ref: "submitPostForm", name: "commit", type: "submit", value: "Create Post", className: "btn btn-primary post-form-submit", onClick: this.submitForm})
            )
          )
        )
      )
    );
  }
});

module.exports = PostForm;