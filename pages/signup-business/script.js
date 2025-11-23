document.addEventListener("DOMContentLoaded", () => {
    // Form elements
    const form = document.getElementById("registrationForm")
    const showMoreBtn = document.getElementById("showMoreBtn")
    const membershipDetails = document.getElementById("membershipDetails")
    const createAccountBtn = document.getElementById("createAccountBtn")
    const backBtn = document.getElementById("backBtn")

    // Show/Hide membership details
    showMoreBtn.addEventListener("click", () => {
        const isVisible = membershipDetails.classList.contains("show")

        if (isVisible) {
            membershipDetails.classList.remove("show")
            showMoreBtn.innerHTML = 'SHOW MORE <i class="fas fa-chevron-down"></i>'
        } else {
            membershipDetails.classList.add("show")
            showMoreBtn.innerHTML = 'SHOW LESS <i class="fas fa-chevron-up"></i>'
        }
    })

    // Form validation
    function validateForm() {
        const requiredFields = form.querySelectorAll("input[required]")
        const agreeTerms = document.getElementById("agreeTerms")
        let isValid = true
        const errors = []

        // Check required fields
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false
                field.style.borderColor = "#e74c3c"
                errors.push(`${field.labels[0].textContent.replace(" *", "")} is required`)
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

        // Validate password match
        const password = document.getElementById("password")
        const confirmPassword = document.getElementById("confirmPassword")
        if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
            isValid = false
            confirmPassword.style.borderColor = "#e74c3c"
            errors.push("Passwords do not match")
        }

        // Check terms agreement
        if (!agreeTerms.checked) {
            isValid = false
            errors.push("You must agree to the Terms of Service and Privacy Policy")
        }

        // Display errors
        if (errors.length > 0) {
            alert("Please fix the following errors:\n\n" + errors.join("\n"))
        }

        return isValid
    }

    // Password strength indicator
    const password = document.getElementById("password")
    password.addEventListener("input", (e) => {
        const value = e.target.value
        let strength = 0

        if (value.length >= 8) strength++
        if (/[A-Z]/.test(value)) strength++
        if (/[a-z]/.test(value)) strength++
        if (/[0-9]/.test(value)) strength++
        if (/[^A-Za-z0-9]/.test(value)) strength++

        // Remove existing strength indicator
        const existingIndicator = password.parentNode.querySelector(".password-strength")
        if (existingIndicator) {
            existingIndicator.remove()
        }

        if (value.length > 0) {
            const strengthIndicator = document.createElement("div")
            strengthIndicator.className = "password-strength"

            let strengthText = ""
            let strengthColor = ""

            if (strength < 2) {
                strengthText = "Weak"
                strengthColor = "#e74c3c"
            } else if (strength < 4) {
                strengthText = "Medium"
                strengthColor = "#f39c12"
            } else {
                strengthText = "Strong"
                strengthColor = "#27ae60"
            }

            strengthIndicator.innerHTML = `
        <div style="margin-top: 5px; font-size: 0.8rem; color: ${strengthColor};">
          Password strength: ${strengthText}
        </div>
      `

            password.parentNode.appendChild(strengthIndicator)
        }
    })

    // Real-time validation for inputs
    const inputs = form.querySelectorAll("input")
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
    })

    // Username availability check (simulated)
    const username = document.getElementById("username")
    let usernameTimeout

    username.addEventListener("input", (e) => {
        clearTimeout(usernameTimeout)
        const value = e.target.value.trim()

        // Remove existing availability indicator
        const existingIndicator = username.parentNode.querySelector(".username-availability")
        if (existingIndicator) {
            existingIndicator.remove()
        }

        if (value.length >= 3) {
            usernameTimeout = setTimeout(() => {
                // Simulate API call
                const isAvailable = Math.random() > 0.3 // 70% chance available

                const availabilityIndicator = document.createElement("div")
                availabilityIndicator.className = "username-availability"

                if (isAvailable) {
                    availabilityIndicator.innerHTML = `
            <div style="margin-top: 5px; font-size: 0.8rem; color: #27ae60;">
              <i class="fas fa-check"></i> Username is available
            </div>
          `
                } else {
                    availabilityIndicator.innerHTML = `
            <div style="margin-top: 5px; font-size: 0.8rem; color: #e74c3c;">
              <i class="fas fa-times"></i> Username is not available
            </div>
          `
                }

                username.parentNode.appendChild(availabilityIndicator)
            }, 1000)
        }
    })

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if (validateForm()) {
            // Show loading state
            createAccountBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...'
            createAccountBtn.disabled = true

            // Simulate form submission
            setTimeout(() => {
                // Collect form data
                const formData = new FormData(form)
                const userData = Object.fromEntries(formData.entries())

                console.log("User Registration Data:", userData)

                // Simulate redirect to PayPal
                alert("Account created successfully! Redirecting to PayPal for payment...")

                // Reset button
                createAccountBtn.innerHTML = "CREATE ACCOUNT"
                createAccountBtn.disabled = false

                // In a real application, redirect to PayPal here
                // window.location.href = 'https://paypal.com/checkout/...'
            }, 2000)
        }
    })

    // Back button
    backBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to go back? Your progress will be lost.")) {
            window.history.back()
        }
    })

    // Auto-save form data to localStorage
    const saveFormData = () => {
        const formData = new FormData(form)
        const userData = Object.fromEntries(formData.entries())
        localStorage.setItem("businessRegistrationData", JSON.stringify(userData))
    }

    // Load saved form data
    const loadFormData = () => {
        const savedData = localStorage.getItem("businessRegistrationData")
        if (savedData) {
            const userData = JSON.parse(savedData)
            Object.entries(userData).forEach(([key, value]) => {
                const field = form.querySelector(`[name="${key}"]`)
                if (field && field.type !== "password") {
                    field.value = value
                    if (field.type === "checkbox") {
                        field.checked = value === "on"
                    }
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
        localStorage.removeItem("businessRegistrationData")
    })

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("mobile-active")
        })
    }

    // Smooth scrolling for form sections
    const sectionTitles = document.querySelectorAll(".section-title")
    sectionTitles.forEach((title) => {
        title.addEventListener("click", () => {
            title.parentElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })
    })

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

    // Payment method selection
    const paymentOptions = document.querySelectorAll(".payment-option")
    paymentOptions.forEach((option) => {
        option.addEventListener("click", () => {
            paymentOptions.forEach((opt) => opt.classList.remove("selected"))
            option.classList.add("selected")
            option.querySelector("input[type='radio']").checked = true
        })
    })

    // Form progress indicator
    const createProgressIndicator = () => {
        const sections = document.querySelectorAll(".form-section")
        const progressContainer = document.createElement("div")
        progressContainer.className = "form-progress"
        progressContainer.style.cssText = `
      position: sticky;
      top: 80px;
      background: white;
      padding: 15px 0;
      border-bottom: 1px solid #e9ecef;
      margin-bottom: 20px;
      z-index: 100;
    `

        const progressBar = document.createElement("div")
        progressBar.style.cssText = `
      height: 4px;
      background: #e9ecef;
      border-radius: 2px;
      overflow: hidden;
    `

        const progressFill = document.createElement("div")
        progressFill.style.cssText = `
      height: 100%;
      background: #4ecdc4;
      width: 0%;
      transition: width 0.3s ease;
    `

        progressBar.appendChild(progressFill)
        progressContainer.appendChild(progressBar)

        const firstSection = sections[0]
        firstSection.parentNode.insertBefore(progressContainer, firstSection)

        // Update progress on scroll
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            progressFill.style.width = Math.min(scrollPercent, 100) + "%"
        })
    }

    createProgressIndicator()
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
`
document.head.appendChild(mobileStyles)