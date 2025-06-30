document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  // Basic validation
  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.innerText = "Please fill out all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    status.style.color = "red";
    status.innerText = "Please enter a valid email address.";
    return;
  }

  // If valid
  status.style.color = "green";
  status.innerText = "Message sent successfully! (not really yet)";

  // Reset form fields
  document.getElementById("contactForm").reset();

  // You can now integrate with EmailJS, Formspree, or Google Apps Script here
});
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

 const response = await fetch("https://my-foodie-api.onrender.com/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name, email, message })
});


  const status = document.getElementById("form-status");
  if (res.ok) {
    status.textContent = "✅ Message sent successfully!";
    e.target.reset();
  } else {
    status.textContent = "❌ Failed to send message.";
  }
});
