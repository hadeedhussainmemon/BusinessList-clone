// DOM Elements
const signinForm = document.getElementById("signinForm")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const signinBtn = document.getElementById("signinBtn")
const btnLoader = document.getElementById("btnLoader")
const passwordToggle = document.getElementById("passwordToggle")
const messageContainer = document.getElementById("messageContainer")

// Form validation state
const formState = {
  username: { valid: false, value: "" },
  password: { valid: false, value: "" },
  isSubmitting: false,
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
  usernameInput.addEventListener("input", validateUsername)
  usernameInput.addEventListener("blur", validateUsername)
  passwordInput.addEventListener("input", validatePassword)
  passwordInput.addEventListener("blur", validatePassword)

  // Password toggle
  passwordToggle.addEventListener("click", togglePasswordVisibility)

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyboardShortcuts)

  // Auto-save form data
  usernameInput.addEventListener("input", saveFormData)
  passwordInput.addEventListener("input", saveFormData)

  // Clear messages when user starts typing
  ;[usernameInput, passwordInput].forEach((input) => {
    input.addEventListener("input", clearMessages)
  })
}

// Handle form submission
async function handleSignIn(e) {
  e.preventDefault()

  if (formState.isSubmitting) return

  // Validate all fields
  const isUsernameValid = validateUsername()
  const isPasswordValid = validatePassword()

  if (!isUsernameValid || !isPasswordValid) {
    showMessage("Please fill in all required fields correctly.", "error")
    shakeForm()
    return
  }

  // Start loading state
  setLoadingState(true)

  try {
    // Simulate API call
    const result = await simulateSignIn({
      username: formState.username.value,
      password: formState.password.value,
    })

    if (result.success) {
      showMessage("Sign in successful! Redirecting...", "success")

      // Clear saved form data
      clearSavedFormData()

      // Simulate redirect delay
      setTimeout(() => {
        // Redirect based on user type or intended destination
        const redirectUrl = getRedirectUrl()
        window.location.href = redirectUrl
      }, 1500)
    } else {
      throw new Error(result.message || "Sign in failed")
    }
  } catch (error) {
    showMessage(error.message || "Sign in failed. Please try again.", "error")
    shakeForm()

    // Clear password field on error
    passwordInput.value = ""
    formState.password.value = ""
    passwordInput.focus()
  } finally {
    setLoadingState(false)
  }
}

// Simulate sign in API call
function simulateSignIn(credentials) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate different scenarios
      if (credentials.username === "demo" && credentials.password === "demo123") {
        resolve({ success: true, user: { username: "demo", type: "personal" } })
      } else if (credentials.username === "business" && credentials.password === "business123") {
        resolve({ success: true, user: { username: "business", type: "business" } })
      } else if (credentials.username === "admin" && credentials.password === "admin123") {
        resolve({ success: true, user: { username: "admin", type: "admin" } })
      } else if (credentials.username.length < 3) {
        resolve({ success: false, message: "Username must be at least 3 characters long." })
      } else if (credentials.password.length < 6) {
        resolve({ success: false, message: "Password must be at least 6 characters long." })
      } else {
        resolve({ success: false, message: "Invalid username or password." })
      }
    }, 1500) // Simulate network delay
  })
}

// Get redirect URL based on user type or intended destination
function getRedirectUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  const returnUrl = urlParams.get("return")

  if (returnUrl) {
    return decodeURIComponent(returnUrl)
  }

  // Default redirect to dashboard or home
  return "index.html"
}

// Validate username
function validateUsername() {
  const value = usernameInput.value.trim()
  const isValid = value.length >= 3 && value.length <= 50

  formState.username = { valid: isValid, value: value }

  // Update UI
  usernameInput.classList.remove("error", "success")
  if (value.length > 0) {
    usernameInput.classList.add(isValid ? "success" : "error")
  }

  return isValid
}

// Validate password
function validatePassword() {
  const value = passwordInput.value
  const isValid = value.length >= 6

  formState.password = { valid: isValid, value: value }

  // Update UI
  passwordInput.classList.remove("error", "success")
  if (value.length > 0) {
    passwordInput.classList.add(isValid ? "success" : "error")
  }

  return isValid
}

// Toggle password visibility
function togglePasswordVisibility() {
  const isPassword = passwordInput.type === "password"
  passwordInput.type = isPassword ? "text" : "password"

  // Update icon
  const eyeIcon = passwordToggle.querySelector(".eye-icon")
  if (isPassword) {
    eyeIcon.style.backgroundImage =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'/%3E%3C/svg%3E\")"
  } else {
    eyeIcon.style.backgroundImage =
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23666' viewBox='0 0 24 24'%3E%3Cpath d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'/%3E%3C/svg%3E\")"
  }
}

// Set loading state
function setLoadingState(loading) {
  formState.isSubmitting = loading
  signinBtn.disabled = loading

  if (loading) {
    signinBtn.classList.add("loading")
  } else {
    signinBtn.classList.remove("loading")
  }

  // Disable/enable inputs
  usernameInput.disabled = loading
  passwordInput.disabled = loading
}

// Show message
function showMessage(text, type = "info") {
  clearMessages()

  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${type}`
  messageDiv.textContent = text

  messageContainer.appendChild(messageDiv)

  // Auto-hide success messages
  if (type === "success") {
    setTimeout(() => {
      clearMessages()
    }, 5000)
  }
}

// Clear messages
function clearMessages() {
  messageContainer.innerHTML = ""
}

// Shake form animation
function shakeForm() {
  document.querySelector(".signin-form-wrapper").classList.add("shake")
  setTimeout(() => {
    document.querySelector(".signin-form-wrapper").classList.remove("shake")
  }, 500)
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
  // Ctrl/Cmd + Enter to submit
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault()
    if (!formState.isSubmitting) {
      signinForm.dispatchEvent(new Event("submit"))
    }
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
  formState.username = { valid: false, value: "" }
  formState.password = { valid: false, value: "" }

  // Remove validation classes
  ;[usernameInput, passwordInput].forEach((input) => {
    input.classList.remove("error", "success")
  })

  usernameInput.focus()
}

// Save form data to localStorage
function saveFormData() {
  const formData = {
    username: usernameInput.value,
    timestamp: Date.now(),
  }

  try {
    localStorage.setItem("businesslist_signin_data", JSON.stringify(formData))
  } catch (error) {
    console.warn("Could not save form data:", error)
  }
}

// Load saved form data
function loadSavedFormData() {
  try {
    const savedData = localStorage.getItem("businesslist_signin_data")
    if (savedData) {
      const data = JSON.parse(savedData)

      // Only load if data is less than 24 hours old
      if (Date.now() - data.timestamp < 24 * 60 * 60 * 1000) {
        usernameInput.value = data.username || ""
        validateUsername()
      } else {
        clearSavedFormData()
      }
    }
  } catch (error) {
    console.warn("Could not load saved form data:", error)
    clearSavedFormData()
  }
}

// Clear saved form data
function clearSavedFormData() {
  try {
    localStorage.removeItem("businesslist_signin_data")
  } catch (error) {
    console.warn("Could not clear saved form data:", error)
  }
}

// Check for remembered user
function checkRememberedUser() {
  loadSavedFormData()

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

  // Add demo button in development
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    const demoBtn = document.createElement("button")
    demoBtn.textContent = "Fill Demo Credentials"
    demoBtn.style.cssText =
      "position:fixed;top:10px;right:10px;z-index:9999;padding:5px 10px;background:#3498db;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;"
    demoBtn.onclick = () => {
      usernameInput.value = "demo"
      passwordInput.value = "demo123"
      validateUsername()
      validatePassword()
    }
    document.body.appendChild(demoBtn)
  }
}

// Initialize demo credentials in development
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  showDemoCredentials()
}
