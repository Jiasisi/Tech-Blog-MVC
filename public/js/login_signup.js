const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#login-username-input').value.trim();
  const password = document.querySelector('#login-password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signup-username-input').value.trim();
  const password = document.querySelector('#signup-password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

const loginBtn = document.getElementById("login-btn") 
if (loginBtn) {
  loginBtn.addEventListener("click", loginFormHandler);
}

const signupBtn = document.getElementById("signup-btn")
if (signupBtn) {
  signupBtn.addEventListener("click", signupFormHandler);
}