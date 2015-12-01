var PostForm = React.createClass({displayName: "PostForm",
  render: function() {
    return (
      React.createElement("form", {"accept-charset": "UTF-8", action: "/posts/create", method: "post"}, 
        React.createElement("div", {className: "panel panel-info"}, 
          React.createElement("div", {className: "panel-heading"}, 
            React.createElement("h3", {className: "panel-title"}, "Post")
          ), 
          React.createElement("div", {className: "panel-body"}, 
          React.createElement("input", {id: "post_content", name: "post[content]", type: "text", placeholder: "New Post Content Here", className: "form-control", required: true})
          ), 
          React.createElement("div", {className: "panel-footer"}, 
            React.createElement("input", {name: "commit", type: "submit", value: "Create Post", className: "btn btn-primary btn-block"})
          )
        )
      )
    );
  }
});