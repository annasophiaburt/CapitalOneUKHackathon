const API_BASE = "http://localhost:5000";

async function doSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl  = document.getElementById("sign-up-error");
  errorEl.style.display = "none";

  if (!name || !email || !username || !password) {
    showError("Please fill all of the required form fields.");
    return;
  }

  try {
    const res  = await fetch(`${API_BASE}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, username, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      showError(data.error || "Signup failed.");
      return;
    }
    window.location.href = "index.html";
  } catch (e) {
    showError("Could not connect to the server. Is the backend running?");
  }

  // TODO: Validate the fields, then POST { name, email, username, password } to /register
  // TODO: Handle success (redirect to login.html) and failure appropriately
}

document.addEventListener("keydown", (e) => { if (e.key === "Enter") doSignup(); });
