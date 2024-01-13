document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  submitComment();
});

function submitComment() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  // Create a new comment element
  var commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  // Create and append the name element
  var nameElement = document.createElement("h3");
  nameElement.textContent = name;
  commentElement.appendChild(nameElement);

  // Create and append the email element
  var emailElement = document.createElement("p");
  emailElement.textContent = email;
  commentElement.appendChild(emailElement);

  // Create and append the comment text element
  var commentTextElement = document.createElement("p");
  commentTextElement.textContent = comment;
  commentElement.appendChild(commentTextElement);

  // Append the comment element to the comment section
  var commentSection = document.getElementById("comment-section");
  commentSection.appendChild(commentElement);

  // Display the thank you message
  document.getElementById("thank-you-message").classList.remove("hidden");

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";

  // Scroll to the thank you message
  document.getElementById("thank-you-message").scrollIntoView({ behavior: "smooth" });
}