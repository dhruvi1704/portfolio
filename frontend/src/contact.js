document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:5010/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    }
  });
});
