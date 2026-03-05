fetch('posts/first-post.md')
.then(res => res.text())
.then(data => {
document.getElementById("posts").innerHTML =
"<div class='post'>" + data + "</div>";
});
