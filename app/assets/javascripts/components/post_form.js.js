var PostForm = React.createClass({displayName: "PostForm",
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
      React.createElement("form", {acceptCharset: "UTF-8", action: "", method: ""}, 
        React.createElement("div", {className: "form panel panel-info"}, 
          React.createElement("div", {className: "panel-heading"}, 
            React.createElement("h3", {className: "panel-title"}, "Create a new post"), 
            React.createElement("i", {className: "fa fa-pencil-square-o", "aria-hidden": "true", "data-toggle": "collapse", "data-target": "#collapseForm"})
          ), 
          React.createElement("div", {id: "collapseForm", className: "collapse"}, 
            React.createElement("div", {className: "panel-body"}, 
            React.createElement("input", {ref: "postContentInput", id: "post_content", name: "post[content]", type: "text", placeholder: "New Post Content Here", className: "form-control", required: true})
            ), 
            React.createElement("div", {className: "panel-footer"}, 
              React.createElement("input", {ref: "submitPostForm", name: "commit", type: "submit", value: "Create Post", className: "btn btn-primary btn-block", onClick: this.submitForm})
            )
          )
        )
      )
    );
  }
});

module.exports = PostForm;