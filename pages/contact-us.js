document.addEventListener("DOMContentLoaded", () => {
  // Form elements
  const form = document.getElementById("contactForm")
  const sendMessageBtn = document.getElementById("sendMessageBtn")

  // Form validation
  function validateForm() {
    const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]")
    let isValid = true
    const errors = []

    // Check required fields
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false
        field.style.borderColor = "#e74c3c"
        const fieldName = field.labels[0].textContent.replace(" *", "")
        errors.push(`${fieldName} is required`)
      } else {
        field.style.borderColor = "#e9ecef"
      }
    })

    // Validate email format
    const email = document.getElementById("email")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.value && !emailRegex.test(email.value)) {
      isValid = false
      email.style.borderColor = "#e74c3c"
      errors.push("Please enter a valid email address")
    }

    // Validate URL format if provided
    const companyUrl = document.getElementById("companyUrl")
    if (companyUrl.value) {
      try {
        new URL(companyUrl.value)
        companyUrl.style.borderColor = "#e9ecef"
      } catch {
        isValid = false
        companyUrl.style.borderColor = "#e74c3c"
        errors.push("Please enter a valid URL")
      }
    }

    // Display errors
    if (errors.length > 0) {
      showMessage("Please fix the following errors:\n\n" + errors.join("\n"), "error")
    }

    return isValid
  }

  // Show success/error messages
  function showMessage(message, type = "success") {
    // Remove existing messages
    const existingMessages = form.querySelectorAll(".success-message, .error-message")
    existingMessages.forEach((msg) => msg.remove())

    // Create new message
    const messageDiv = document.createElement("div")
    messageDiv.className = `${type}-message show`
    messageDiv.textContent = message

    // Insert at the top of the form
    form.insertBefore(messageDiv, form.firstChild)

    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageDiv.classList.remove("show")
      setTimeout(() => messageDiv.remove(), 300)
    }, 5000)
  }

  // Real-time validation for inputs
  const inputs = form.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        input.style.borderColor = "#e74c3c"
      } else {
        input.style.borderColor = "#e9ecef"
      }
    })

    input.addEventListener("focus", () => {
      input.style.borderColor = "#4ecdc4"
    })

    // Real-time email validation
    if (input.type === "email") {
      input.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (input.value && !emailRegex.test(input.value)) {
          input.style.borderColor = "#f39c12"
        } else if (input.value) {
          input.style.borderColor = "#27ae60"
        }
      })
    }
  })

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Show loading state
      sendMessageBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      sendMessageBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        // Collect form data
        const formData = new FormData(form)
        const contactData = Object.fromEntries(formData.entries())

        console.log("Contact Form Data:", contactData)

        // Show success message
        showMessage("Thank you for your message! We'll get back to you within 24 hours.", "success")

        // Reset form
        form.reset()

        // Reset button
        sendMessageBtn.innerHTML = "SEND MESSAGE"
        sendMessageBtn.disabled = false

        // Scroll to top of form to show success message
        form.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 2000)
    }
  })

  // Auto-save form data to localStorage
  const saveFormData = () => {
    const formData = new FormData(form)
    const contactData = Object.fromEntries(formData.entries())
    localStorage.setItem("contactFormData", JSON.stringify(contactData))
  }

  // Load saved form data
  const loadFormData = () => {
    const savedData = localStorage.getItem("contactFormData")
    if (savedData) {
      const contactData = JSON.parse(savedData)
      Object.entries(contactData).forEach(([key, value]) => {
        const field = form.querySelector(`[name="${key}"]`)
        if (field) {
          field.value = value
        }
      })
    }
  }

  // Save form data on input
  inputs.forEach((input) => {
    input.addEventListener("input", saveFormData)
  })

  // Load saved data on page load
  loadFormData()

  // Clear saved data on successful submission
  form.addEventListener("submit", () => {
    setTimeout(() => {
      localStorage.removeItem("contactFormData")
    }, 3000)
  })

  // Character counter for message field
  const messageField = document.getElementById("message")
  const addCharacterCounter = () => {
    const counter = document.createElement("div")
    counter.className = "character-counter"
    counter.style.cssText = `
      text-align: right;
      font-size: 0.8rem;
      color: #666;
      margin-top: 5px;
    `

    const updateCounter = () => {
      const length = messageField.value.length
      const maxLength = 1000
      counter.textContent = `${length}/${maxLength} characters`

      if (length > maxLength * 0.9) {
        counter.style.color = "#e74c3c"
      } else if (length > maxLength * 0.7) {
        counter.style.color = "#f39c12"
      } else {
        counter.style.color = "#666"
      }
    }

    messageField.addEventListener("input", updateCounter)
    messageField.parentNode.appendChild(counter)
    updateCounter()
  }

  addCharacterCounter()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active")
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Animate numbers on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
        animateNumber(entry.target)
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Observe all number elements
  document.querySelectorAll(".stat-number").forEach((el) => {
    observer.observe(el)
  })

  function animateNumber(element) {
    const target = Number.parseInt(element.textContent.replace(/,/g, ""))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }

      // Format number with commas
      element.textContent = Math.floor(current).toLocaleString()
    }, 16)
  }

  // Add loading states for buttons
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("loading") && this.type !== "submit") {
        this.classList.add("loading")
        this.style.opacity = "0.7"
        setTimeout(() => {
          this.classList.remove("loading")
          this.style.opacity = "1"
        }, 1000)
      }
    })
  })

  // Form field focus management
  const firstField = form.querySelector("select, input, textarea")
  if (firstField) {
    firstField.focus()
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault()
      form.dispatchEvent(new Event("submit"))
    }

    // Escape to clear form
    if (e.key === "Escape") {
      if (confirm("Are you sure you want to clear the form?")) {
        form.reset()
        localStorage.removeItem("contactFormData")
      }
    }
  })
})

// Add CSS for mobile menu
const mobileStyles = document.createElement("style")
mobileStyles.textContent = `
  @media (max-width: 768px) {
    .nav-menu.mobile-active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 20px;
    }
  }

  .character-counter {
    transition: color 0.3s ease;
  }
`
document.head.appendChild(mobileStyles)