document.addEventListener("DOMContentLoaded", () => {
    // Form elements
    const form = document.getElementById("signupForm")
    const createAccountBtn = document.getElementById("createAccountBtn")
    const passwordToggle = document.getElementById("passwordToggle")
    const password = document.getElementById("password")
    const accountTypes = document.querySelectorAll(".account-type")
    const businessSection = document.getElementById("businessSection")
    const businessUpdates = document.getElementById("businessUpdates")
    const businessBenefits = document.querySelectorAll(".business-benefit")

    let currentAccountType = "personal"

    // Account type selection
    accountTypes.forEach((type) => {
        type.addEventListener("click", () => {
            // Remove active class from all types
            accountTypes.forEach((t) => t.classList.remove("active"))

            // Add active class to clicked type
            type.classList.add("active")

            // Get selected type
            currentAccountType = type.dataset.type

            // Show/hide business fields
            if (currentAccountType === "business") {
                businessSection.style.display = "block"
                businessUpdates.style.display = "block"
                businessBenefits.forEach((benefit) => {
                    benefit.style.display = "flex"
                })

                // Make business fields required
                document.getElementById("businessName").required = true
                document.getElementById("businessCategory").required = true
                document.getElementById("businessCity").required = true
            } else {
                businessSection.style.display = "none"
                businessUpdates.style.display = "none"
                businessBenefits.forEach((benefit) => {
                    benefit.style.display = "none"
                })

                // Remove required from business fields
                document.getElementById("businessName").required = false
                document.getElementById("businessCategory").required = false
                document.getElementById("businessCity").required = false
            }
        })
    })

    // Password toggle
    passwordToggle.addEventListener("click", () => {
        const type = password.getAttribute("type") === "password" ? "text" : "password"
        password.setAttribute("type", type)

        const icon = passwordToggle.querySelector("i")
        icon.classList.toggle("fa-eye")
        icon.classList.toggle("fa-eye-slash")
    })

    // Form validation
    function validateForm() {
        const requiredFields = form.querySelectorAll("input[required], select[required]")
        const agreeTerms = document.getElementById("agreeTerms")
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

        // Validate username
        const username = document.getElementById("username")
        if (username.value && (username.value.length < 3 || username.value.length > 20)) {
            isValid = false
            username.style.borderColor = "#e74c3c"
            errors.push("Username must be between 3 and 20 characters")
        }

        // Validate password strength
        const passwordValue = password.value
        if (passwordValue && passwordValue.length < 8) {
            isValid = false
            password.style.borderColor = "#e74c3c"
            errors.push("Password must be at least 8 characters long")
        }

        // Validate password match
        const confirmPassword = document.getElementById("confirmPassword")
        if (passwordValue && confirmPassword.value && passwordValue !== confirmPassword.value) {
            isValid = false
            confirmPassword.style.borderColor = "#e74c3c"
            errors.push("Passwords do not match")
        }

        // Validate phone number format (if provided)
        const phone = document.getElementById("phone")
        if (phone.value) {
            const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
            if (!phoneRegex.test(phone.value)) {
                isValid = false
                phone.style.borderColor = "#e74c3c"
                errors.push("Please enter a valid phone number")
            }
        }

        // Validate business website (if provided)
        const businessWebsite = document.getElementById("businessWebsite")
        if (businessWebsite.value) {
            try {
                new URL(businessWebsite.value)
                businessWebsite.style.borderColor = "#e9ecef"
            } catch {
                isValid = false
                businessWebsite.style.borderColor = "#e74c3c"
                errors.push("Please enter a valid website URL")
            }
        }

        // Check terms agreement
        if (!agreeTerms.checked) {
            isValid = false
            errors.push("You must agree to the Terms of Service and Privacy Policy")
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

        // Scroll to top of form
        form.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Real-time validation for inputs
    const inputs = form.querySelectorAll("input, select")
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

    // Password strength indicator
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
                userData.accountType = currentAccountType

                console.log("User Registration Data:", userData)

                // Show success message
                const accountTypeText = currentAccountType === "business" ? "Business" : "Personal"
                showMessage(
                    `${accountTypeText} account created successfully! Please check your email to verify your account.`,
                    "success",
                )

                // Reset form
                form.reset()

                // Reset account type to personal
                accountTypes.forEach((t) => t.classList.remove("active"))
                accountTypes[0].classList.add("active")
                currentAccountType = "personal"
                businessSection.style.display = "none"
                businessUpdates.style.display = "none"
                businessBenefits.forEach((benefit) => {
                    benefit.style.display = "none"
                })

                // Reset button
                createAccountBtn.innerHTML = '<i class="fas fa-user-plus"></i> CREATE ACCOUNT'
                createAccountBtn.disabled = false
            }, 2000)
        }
    })

    // Auto-save form data to localStorage
    const saveFormData = () => {
        const formData = new FormData(form)
        const userData = Object.fromEntries(formData.entries())
        userData.accountType = currentAccountType
        localStorage.setItem("signupFormData", JSON.stringify(userData))
    }

    // Load saved form data
    const loadFormData = () => {
        const savedData = localStorage.getItem("signupFormData")
        if (savedData) {
            const userData = JSON.parse(savedData)
            Object.entries(userData).forEach(([key, value]) => {
                const field = form.querySelector(`[name="${key}"]`)
                if (field && field.type !== "password") {
                    if (field.type === "checkbox") {
                        field.checked = value === "1" || value === "on"
                    } else {
                        field.value = value
                    }
                }
            })

            // Set account type
            if (userData.accountType) {
                currentAccountType = userData.accountType
                accountTypes.forEach((type) => {
                    type.classList.toggle("active", type.dataset.type === currentAccountType)
                })

                if (currentAccountType === "business") {
                    businessSection.style.display = "block"
                    businessUpdates.style.display = "block"
                    businessBenefits.forEach((benefit) => {
                        benefit.style.display = "flex"
                    })
                }
            }
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
            localStorage.removeItem("signupFormData")
        }, 3000)
    })

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

    // Form progress tracking
    const trackFormProgress = () => {
        const totalFields = form.querySelectorAll("input[required], select[required]").length
        const filledFields = Array.from(form.querySelectorAll("input[required], select[required]")).filter(
            (field) => field.value.trim() !== "",
        ).length

        const progress = Math.round((filledFields / totalFields) * 100)
        console.log(`Form completion: ${progress}%`)
    }

    // Track progress on input
    inputs.forEach((input) => {
        input.addEventListener("input", trackFormProgress)
    })

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
                localStorage.removeItem("signupFormData")

                // Reset to personal account
                accountTypes.forEach((t) => t.classList.remove("active"))
                accountTypes[0].classList.add("active")
                currentAccountType = "personal"
                businessSection.style.display = "none"
                businessUpdates.style.display = "none"
                businessBenefits.forEach((benefit) => {
                    benefit.style.display = "none"
                })
            }
        }
    })
})

// Add CSS for mobile menu and additional styles
const additionalStyles = document.createElement("style")
additionalStyles.textContent = `
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

  .password-strength {
    transition: all 0.3s ease;
  }

  .username-availability {
    transition: all 0.3s ease;
  }

  .loading {
    opacity: 0.7 !important;
    pointer-events: none;
  }
`
document.head.appendChild(additionalStyles)
