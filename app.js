const button = document.querySelector(".cta-button");

button.addEventListener("click", () => {
  // Prevent double clicks
  button.disabled = true;

  // Change label
  button.textContent = "Creating account...";

  // Simulate async action (API / wallet / auth later)
  setTimeout(() => {
    button.textContent = "Account Created";
  }, 2000);
});
