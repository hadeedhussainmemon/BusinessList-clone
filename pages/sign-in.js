// DOM Elements
const signinForm = document.getElementById("signinForm")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const signinBtn = document.getElementById("signinBtn")
const btnLoader = document.getElementById("btnLoader")
const btnText = signinBtn.querySelector(".btn-text")
const passwordToggle = document.getElementById("passwordToggle")
const messageContainer = document.getElementById("messageContainer")

// Form validation state
const formState = {
  username: { valid: false, value: "" },
  password: { valid: false, value: "" },
  isSubmitting: false,
}

// Demo credentials for testing
const demoCredentials = {
  demo: "demo123",
  business: "business123",
  admin: "admin123",
}

// Load saved username (not password for security)
const savedUsername = localStorage.getItem("businesslist_username")
if (savedUsername) {
  usernameInput.value = savedUsername
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  initializeSignIn()
  setupEventListeners()
  checkRememberedUser()
})

// Initialize sign in functionality
function initializeSignIn() {
  // Add fade-in animation to form
  document.querySelector(".signin-form-wrapper").classList.add("fade-in")

  // Focus on username field
  setTimeout(() => {
    usernameInput.focus()
  }, 500)

  // Check for URL parameters (e.g., from registration)
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get("registered") === "true") {
    showMessage("Registration successful! Please sign in with your credentials.", "success")
  }
  if (urlParams.get("reset") === "true") {
    showMessage("Password reset successful! Please sign in with your new password.", "success")
  }
}

// Setup event listeners
function setupEventListeners() {
  // Form submission
  signinForm.addEventListener("submit", handleSignIn)

  // Input validation
  usernameInput.addEventListener("input", validateUsernameInput)
  passwordInput.addEventListener("input", validatePasswordInput)

  // Password toggle
  passwordToggle.addEventListener("click", togglePasswordVisibility)

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts)

  // Auto-save username
  usernameInput.addEventListener("blur", saveUsername)
}

// Handle form submission
async function handleSignIn(e) {
  e.preventDefault()

  if (formState.isSubmitting) return

  const username = usernameInput.value.trim()
  const password = passwordInput.value

  // Clear previous messages
  messageContainer.innerHTML = ""

  // Validate inputs
  const isUsernameValid = validateUsernameInput()
  const isPasswordValid = validatePasswordInput()

  if (!isUsernameValid || !isPasswordValid) {
    showMessage("Please fill in all fields correctly.")
    signinForm.classList.add("shake")
    setTimeout(() => signinForm.classList.remove("shake"), 500)
    return
  }

  // Show loading state
  signinBtn.disabled = true
  signinBtn.classList.add("loading")

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check demo credentials
    if (demoCredentials[username] && demoCredentials[username] === password) {
      showMessage("Sign in successful! Redirecting...", "success")

      // Save login state
      localStorage.setItem("businesslist_logged_in", "true")
      localStorage.setItem(
        "businesslist_user",
        JSON.stringify({
          username: username,
          loginTime: new Date().toISOString(),
          userType: username === "admin" ? "admin" : username === "business" ? "business" : "personal",
        }),
      )

      // Redirect after success message
      setTimeout(() => {
        if (username === "admin") {
          window.location.href = "admin-dashboard.html"
        } else if (username === "business") {
          window.location.href = "business-dashboard.html"
        } else {
          window.location.href = "user-dashboard.html"
        }
      }, 2000)
    } else {
      // In a real app, this would be handled by the server
      showMessage("Invalid username or password. Please try again.")
      signinForm.classList.add("shake")
      setTimeout(() => signinForm.classList.remove("shake"), 500)
    }
  } catch (error) {
    showMessage("An error occurred. Please try again later.")
    console.error("Sign in error:", error)
  } finally {
    // Hide loading state
    signinBtn.disabled = false
    signinBtn.classList.remove("loading")
  }
}

// Validate input
function validateInput(input, validationFn, errorMessage) {
  const value = input.value.trim()
  const isValid = validationFn(value)

  input.classList.remove("error", "success")

  if (value.length > 0) {
    if (isValid) {
      input.classList.add("success")
    } else {
      input.classList.add("error")
    }
  }

  return isValid
}

// Validate username input
function validateUsernameInput() {
  const value = usernameInput.value.trim()
  const isValid = value.length >= 3 && value.length <= 20

  formState.username = { valid: isValid, value: value }

  return isValid
}

// Validate password input
function validatePasswordInput() {
  const value = passwordInput.value
  const isValid = value.length >= 6

  formState.password = { valid: isValid, value: value }

  return isValid
}

// Toggle password visibility
function togglePasswordVisibility() {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type)

  // Update eye icon
  const eyeIcon = passwordToggle.querySelector(".eye-icon")
  if (type === "text") {
    eyeIcon.style.backgroundImage =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'/%3E%3C/svg%3E\")"
  } else {
    eyeIcon.style.backgroundImage =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E\")"
  }
}

// Show message
function showMessage(message, type = "error") {
  messageContainer.innerHTML = `<div class="message ${type}">${message}</div>`

  // Auto-hide after 5 seconds
  setTimeout(() => {
    const messageEl = messageContainer.querySelector(".message")
    if (messageEl) {
      messageEl.style.opacity = "0"
      setTimeout(() => {
        messageContainer.innerHTML = ""
      }, 300)
    }
  }, 5000)
}

// Save username
function saveUsername() {
  if (usernameInput.value.trim()) {
    localStorage.setItem("businesslist_username", usernameInput.value.trim())
  }
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
  // Ctrl/Cmd + Enter to submit
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault()
    signinForm.dispatchEvent(new Event("submit"))
  }

  // Escape to clear form
  if (e.key === "Escape") {
    clearForm()
    clearMessages()
  }
}

// Clear form
function clearForm() {
  usernameInput.value = ""
  passwordInput.value = ""
  messageContainer.innerHTML = ""
  usernameInput.focus()
}

// Clear messages
function clearMessages() {
  messageContainer.innerHTML = ""
}

// Check for remembered user
function checkRememberedUser() {
  // Check if user was previously signed in
  const wasSignedIn = sessionStorage.getItem("businesslist_was_signed_in")
  if (wasSignedIn) {
    showMessage("Your session has expired. Please sign in again.", "info")
    sessionStorage.removeItem("businesslist_was_signed_in")
  }
}

// Demo credentials helper
function showDemoCredentials() {
  const demoInfo = `
        Demo Credentials:
        • Username: demo, Password: demo123 (Personal Account)
        • Username: business, Password: business123 (Business Account)
        • Username: admin, Password: admin123 (Admin Account)
    `

  console.log(demoInfo)
}

// Initialize demo credentials in development
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  showDemoCredentials()
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle browser back/forward buttons
window.addEventListener("popstate", (e) => {
  // Clear any sensitive data when navigating away
  if (e.state && e.state.clearAuth) {
    localStorage.removeItem("businesslist_temp_data")
  }
})

// Security: Clear sensitive data on page unload
window.addEventListener("beforeunload", () => {
  // Don't clear login state, but clear any temporary sensitive data
  localStorage.removeItem("businesslist_temp_data")
})
