document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  const button = document.querySelector("button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Hello from Templates 🚀");
    });
  }
});
