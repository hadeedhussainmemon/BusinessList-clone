document.addEventListener("DOMContentLoaded", () => {
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
  document.querySelectorAll(".fact-number, .stat-number").forEach((el) => {
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

  // Add hover effects to pricing cards
  document.querySelectorAll(".pricing-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("pricing-featured")) {
        this.style.transform = "translateY(-10px)"
        this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
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
  document.querySelectorAll(".get-listed-btn, .btn-pricing").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Get Listed clicked")
      // Add your form opening logic here
    })
  })

  // Search functionality
  document.querySelectorAll(".btn-filled").forEach((btn) => {
    if (btn.textContent.includes("Search")) {
      btn.addEventListener("click", () => {
        console.log("Search clicked")
        // Add your search logic here
      })
    }
  })

  // City item click handlers
  document.querySelectorAll(".city-item").forEach((item) => {
    item.addEventListener("click", function () {
      const cityName = this.querySelector(".city-name").textContent
      if (cityName === "See All") {
        console.log("Show all cities")
      } else {
        console.log("Selected city:", cityName)
      }
    })
  })

  // Category item click handlers - Updated for real links
  document.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", function () {
      const categoryName = this.querySelector(".city-name").textContent
      const destination = this.getAttribute("href")
      console.log("Navigating to category:", categoryName, "at", destination)

      // The browser will handle the navigation automatically
    })
  })

  // Network animation
  function animateNetwork() {
    const nodes = document.querySelectorAll(".node")
    nodes.forEach((node, index) => {
      setTimeout(() => {
        node.style.animation = "pulse 2s infinite"
      }, index * 200)
    })
  }

  // Start network animation when section is visible
  const networkSection = document.querySelector(".network-section")
  if (networkSection) {
    const networkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNetwork()
          }
        })
      },
      { threshold: 0.5 },
    )

    networkObserver.observe(networkSection)
  }

  // Category navigation functionality - Updated for real links
  document.querySelectorAll(".category-nav-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      // Don't prevent default since we want real navigation
      // Just update the active state for visual feedback

      // Remove active class from all items
      document.querySelectorAll(".category-nav-item").forEach((navItem) => {
        navItem.classList.remove("active")
      })

      // Add active class to clicked item
      this.classList.add("active")

      const categoryName = this.textContent
      const destination = this.getAttribute("href")
      console.log("Navigating to category:", categoryName, "at", destination)

      // The browser will handle the navigation automatically
    })
  })

  // Smooth scroll for category navigation on mobile
  const categoryNav = document.querySelector(".category-nav-list")
  if (categoryNav) {
    let isScrolling = false

    categoryNav.addEventListener("scroll", () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          // Add any scroll-based functionality here
          isScrolling = false
        })
        isScrolling = true
      }
    })
  }
})

// Add CSS animations
const style = document.createElement("style")
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .animated {
        /* Prevent re-animation */
    }
`
document.head.appendChild(style)
