document.addEventListener("DOMContentLoaded", () => {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll(".faq-item")

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active")

            // Close all FAQ items
            faqItems.forEach((faqItem) => {
                faqItem.classList.remove("active")
            })

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add("active")
            }
        })
    })

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

    // Pricing card hover effects
    document.querySelectorAll(".pricing-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
            if (!this.classList.contains("pricing-featured")) {
                this.style.transform = "translateY(-15px)"
                this.style.boxShadow = "0 25px 50px rgba(0,0,0,0.2)"
            }
        })

        card.addEventListener("mouseleave", function () {
            if (!this.classList.contains("pricing-featured")) {
                this.style.transform = "translateY(0)"
                this.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
            }
        })
    })

    // Button click handlers
    document.querySelectorAll(".get-listed-btn, .btn-support").forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log("Button clicked:", btn.textContent)
            // Add your form opening logic here
        })
    })

    // Benefit cards animation on scroll
    const benefitObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1"
                    entry.target.style.transform = "translateY(0)"
                }
            })
        },
        { threshold: 0.1 },
    )

    document.querySelectorAll(".benefit-card").forEach((card, index) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(30px)"
        card.style.transition = `all 0.6s ease ${index * 0.1}s`
        benefitObserver.observe(card)
    })

    // Parallax effect for hero section
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const heroShape = document.querySelector(".hero-shape")

        if (heroShape) {
            heroShape.style.transform = `rotate(-15deg) translateY(${scrolled * 0.5}px)`
        }
    })

    // Mobile menu toggle (if needed)
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("mobile-active")
        })
    }

    // Form validation and submission (placeholder)
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log("Form submitted")
            // Add your form submission logic here
        })
    })

    // Lazy loading for images
    const images = document.querySelectorAll("img[data-src]")
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                img.classList.remove("lazy")
                imageObserver.unobserve(img)
            }
        })
    })

    images.forEach((img) => imageObserver.observe(img))

    // Add loading states for buttons
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            if (!this.classList.contains("loading")) {
                this.classList.add("loading")
                setTimeout(() => {
                    this.classList.remove("loading")
                }, 2000)
            }
        })
    })
})

// Add CSS for loading states and animations
const style = document.createElement("style")
style.textContent = `
  .loading {
    opacity: 0.7;
    pointer-events: none;
  }
  
  .loading::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-left: 8px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
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
document.head.appendChild(style)