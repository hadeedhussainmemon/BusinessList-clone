document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animate numbers on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        animateNumber(entry.target);
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Observe all number elements
  document.querySelectorAll(".fact-number, .stat-number").forEach((el) => {
    observer.observe(el);
  });

  function animateNumber(element) {
    const target = Number.parseInt(element.textContent.replace(/,/g, ""));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Format number with commas
      element.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }

  // Add hover effects to pricing cards
  document.querySelectorAll(".pricing-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      if (!this.classList.contains("pricing-featured")) {
        this.style.transform = "translateY(-10px)";
        this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
      }
    });

    card.addEventListener("mouseleave", function () {
      if (!this.classList.contains("pricing-featured")) {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }
    });
  });

  // Button click handlers
  document.querySelectorAll(".get-listed-btn, .btn-pricing").forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Get Listed clicked");
      // Add your form opening logic here
    });
  });

  // Search functionality
  document.querySelectorAll(".btn-filled").forEach((btn) => {
    if (btn.textContent.includes("Search")) {
      btn.addEventListener("click", () => {
        console.log("Search clicked");
        // Add your search logic here
      });
    }
  });

  // City item click handlers
  document.querySelectorAll(".city-item").forEach((item) => {
    item.addEventListener("click", function () {
      const cityName = this.querySelector(".city-name").textContent;
      if (cityName === "See All") {
        console.log("Show all cities");
      } else {
        console.log("Selected city:", cityName);
      }
    });
  });

  // Category item click handlers - Updated for real links
  document.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", function () {
      const categoryName = this.querySelector(".city-name").textContent;
      const destination = this.getAttribute("href");
      console.log("Navigating to category:", categoryName, "at", destination);

      // The browser will handle the navigation automatically
    });
  });

  // Network animation
  function animateNetwork() {
    const nodes = document.querySelectorAll(".node");
    nodes.forEach((node, index) => {
      setTimeout(() => {
        node.style.animation = "pulse 2s infinite";
      }, index * 200);
    });
  }

  // Start network animation when section is visible
  const networkSection = document.querySelector(".network-section");
  if (networkSection) {
    const networkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNetwork();
          }
        });
      },
      { threshold: 0.5 }
    );

    networkObserver.observe(networkSection);
  }

  // Category navigation functionality - Updated for real links
  document.querySelectorAll(".category-nav-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      // Don't prevent default since we want real navigation
      // Just update the active state for visual feedback

      // Remove active class from all items
      document.querySelectorAll(".category-nav-item").forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");

      const categoryName = this.textContent;
      const destination = this.getAttribute("href");
      console.log("Navigating to category:", categoryName, "at", destination);

      // The browser will handle the navigation automatically
    });
  });

  // Smooth scroll for category navigation on mobile
  const categoryNav = document.querySelector(".category-nav-list");
  if (categoryNav) {
    let isScrolling = false;

    categoryNav.addEventListener("scroll", () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          // Add any scroll-based functionality here
          isScrolling = false;
        });
        isScrolling = true;
      }
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("mobile-menu-active");
      this.querySelector("i").classList.toggle("fa-bars");
      this.querySelector("i").classList.toggle("fa-times");
    });
  }

  function handleResponsiveImages() {
    const heroImage = document.querySelector(".hero-bg-image");
    if (heroImage) {
      // Optimize image loading for different screen sizes
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        heroImage.style.objectPosition = "center center";
      } else if (screenWidth <= 768) {
        heroImage.style.objectPosition = "center top";
      }
    }
  }

  function handleMobileScroll() {
    let ticking = false;

    function updateScrollBehavior() {
      const scrolled = window.scrollY;
      const header = document.querySelector(".header");

      if (header) {
        if (scrolled > 100) {
          header.style.background = "rgba(255, 255, 255, 0.95)";
          header.style.backdropFilter = "blur(10px)";
        } else {
          header.style.background = "white";
          header.style.backdropFilter = "none";
        }
      }

      ticking = false;
    }

    function requestScrollUpdate() {
      if (!ticking) {
        requestAnimationFrame(updateScrollBehavior);
        ticking = true;
      }
    }

    window.addEventListener("scroll", requestScrollUpdate);
  }

  function enhanceTouchInteractions() {
    const categoryItems = document.querySelectorAll(".category-item");
    const cityItems = document.querySelectorAll(".city-item");
    const pricingCards = document.querySelectorAll(".pricing-card");

    // Add touch feedback for category items
    categoryItems.forEach((item) => {
      item.addEventListener("touchstart", function () {
        this.style.transform = "translateY(-3px) scale(0.98)";
      });

      item.addEventListener("touchend", function () {
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });

    // Add touch feedback for city items
    cityItems.forEach((item) => {
      item.addEventListener("touchstart", function () {
        this.style.transform = "translateY(-1px) scale(0.99)";
      });

      item.addEventListener("touchend", function () {
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });

    // Add touch feedback for pricing cards
    pricingCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        if (!this.classList.contains("pricing-featured")) {
          this.style.transform = "translateY(-5px) scale(0.98)";
        }
      });

      card.addEventListener("touchend", function () {
        setTimeout(() => {
          if (!this.classList.contains("pricing-featured")) {
            this.style.transform = "";
          }
        }, 150);
      });
    });
  }

  function handleViewportChanges() {
    const viewport = window.visualViewport;

    if (viewport) {
      viewport.addEventListener("resize", () => {
        // Adjust layout when virtual keyboard appears on mobile
        document.documentElement.style.setProperty(
          "--vh",
          `${viewport.height * 0.01}px`
        );
      });
    }

    // Fallback for browsers without visualViewport support
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    });

    // Set initial value
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }

  // Initialize all responsive enhancements
  handleResponsiveImages();
  handleMobileScroll();
  enhanceTouchInteractions();
  handleViewportChanges();

  function initImageProtection() {
    // Prevent dragging of all images, icons, and SVGs
    document
      .querySelectorAll("img, svg, i[class*='fa'], .icon, [class*='icon']")
      .forEach((element) => {
        element.draggable = false;
        element.addEventListener("dragstart", (e) => {
          e.preventDefault();
          return false;
        });

        // Prevent context menu on images and icons
        element.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          showProtectionMessage();
          return false;
        });

        // Prevent selection
        element.addEventListener("selectstart", (e) => {
          e.preventDefault();
          return false;
        });

        // Add user-select: none via style
        element.style.userSelect = "none";
        element.style.webkitUserSelect = "none";
        element.style.mozUserSelect = "none";
        element.style.msUserSelect = "none";

        // Prevent touch callout on iOS
        element.style.webkitTouchCallout = "none";
      });

    // Global drag prevention for images, icons, and SVGs
    document.addEventListener("dragstart", (e) => {
      if (
        e.target.tagName === "IMG" ||
        e.target.tagName === "SVG" ||
        e.target.classList.contains("icon") ||
        e.target.className.includes("fa") ||
        e.target.className.includes("icon")
      ) {
        e.preventDefault();
        showProtectionMessage();
        return false;
      }
    });

    // Prevent keyboard shortcuts for saving images
    document.addEventListener("keydown", (e) => {
      // Prevent Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V, F12, Ctrl+Shift+I, Ctrl+U
      if (
        (e.ctrlKey &&
          (e.key === "s" ||
            e.key === "a" ||
            e.key === "c" ||
            e.key === "v" ||
            e.key === "u")) ||
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "C")
      ) {
        e.preventDefault();
        showProtectionMessage();
        return false;
      }
    });

    // Show protection message
    function showProtectionMessage() {
      // Remove existing message if any
      const existingMessage = document.querySelector(".protection-message");
      if (existingMessage) {
        existingMessage.remove();
      }

      const message = document.createElement("div");
      message.className = "protection-message";
      message.innerHTML = `
        <div style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 20px 30px;
          border-radius: 10px;
          z-index: 10000;
          text-align: center;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        ">
          <h3 style="margin: 0 0 10px 0; color: #ff4444;">⚠️ Content Protected</h3>
          <p style="margin: 0; font-size: 14px;">Images are protected from copying and downloading<br>تصاویر کاپی اور ڈاؤن لوڈ سے محفوظ ہیں</p>
        </div>
      `;

      document.body.appendChild(message);

      // Auto remove after 3 seconds
      setTimeout(() => {
        if (message.parentNode) {
          message.remove();
        }
      }, 3000);
    }

    // Observe for dynamically added images, icons, and SVGs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            if (
              node.tagName === "IMG" ||
              node.tagName === "SVG" ||
              node.classList.contains("icon") ||
              node.className.includes("fa") ||
              node.className.includes("icon")
            ) {
              applyImageProtection(node);
            } else {
              // Check for images and icons within added elements
              const elements =
                node.querySelectorAll &&
                node.querySelectorAll(
                  "img, svg, i[class*='fa'], .icon, [class*='icon']"
                );
              if (elements) {
                elements.forEach(applyImageProtection);
              }
            }
          }
        });
      });
    });

    function applyImageProtection(element) {
      element.draggable = false;
      element.addEventListener("dragstart", (e) => {
        e.preventDefault();
        return false;
      });
      element.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        showProtectionMessage();
        return false;
      });
      element.addEventListener("selectstart", (e) => {
        e.preventDefault();
        return false;
      });
      element.style.userSelect = "none";
      element.style.webkitUserSelect = "none";
      element.style.mozUserSelect = "none";
      element.style.msUserSelect = "none";
      element.style.webkitTouchCallout = "none";
    }

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // Initialize image protection
  initImageProtection();

  // Re-run responsive image handling on window resize
  window.addEventListener("resize", handleResponsiveImages);
});

const mobileStyles = document.createElement("style");
mobileStyles.textContent = `
  /* Mobile menu styles */
  @media (max-width: 640px) {
    .nav-menu.mobile-menu-active {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      z-index: 999;
    }
    
    .nav-menu.mobile-menu-active .nav-link {
      display: block;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .nav-menu.mobile-menu-active .search-icon-btn {
      display: block;
      margin-top: 10px;
    }
  }
  
  /* Use CSS custom properties for dynamic viewport height */
  .hero {
    height: calc(var(--vh, 1vh) * 85);
  }
  
  @media (max-width: 768px) {
    .hero {
      height: calc(var(--vh, 1vh) * 70);
    }
  }
  
  @media (max-width: 640px) {
    .hero {
      height: calc(var(--vh, 1vh) * 60);
    }
  }
  
  @media (max-width: 480px) {
    .hero {
      height: calc(var(--vh, 1vh) * 50);
    }
  }
`;
document.head.appendChild(mobileStyles);

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .animated {
        /* Prevent re-animation */
    }
`;
document.head.appendChild(style);
