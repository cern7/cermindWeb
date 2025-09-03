<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <div class="nav-container">
          <router-link to="/" class="brand-link">
            <div class="logo">CER</div>
          </router-link>

          <button
            class="mobile-toggle"
            @click="toggleMobileMenu"
            :class="{ active: isMobileMenuOpen }"
            aria-label="Toggle navigation"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>

          <ul class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">
                {{ $t("nav.home") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/guide"
                class="nav-link"
                @click="closeMobileMenu"
              >
                {{ $t("nav.guide") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/privacy"
                class="nav-link"
                @click="closeMobileMenu"
              >
                {{ $t("nav.privacy") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/terms"
                class="nav-link"
                @click="closeMobileMenu"
              >
                {{ $t("nav.terms") }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                @click="closeMobileMenu"
              >
                {{ $t("nav.contact") }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div><br /></div>
    <main class="main">
      <transition name="page-fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </main>
    <footer>
      <div class="small">
        <router-link to="/"><strong>CERMIND © 2025 </strong></router-link>
        <span class="sep">•</span> Toate drepturile rezervate
        <span class="sep">•</span>
        <router-link to="/privacy">Politica de confidențialitate</router-link>
        <span class="sep">•</span>
        <router-link to="/terms">Termeni și Condiții</router-link>
        <span class="sep">•</span>
        <router-link to="/contact">Contact</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobileMenuOpen: false, // Fixed: Changed from true to false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav")) {
        this.isMobileMenuOpen = false;
      }
    });

    // Close mobile menu on route change
    this.$router.afterEach(() => {
      this.isMobileMenuOpen = false;
    });
  },
};
</script>

<style>
/* CSS Custom Properties for Design System */
:root {
  --logo-color-primary: #401caf;
  --logo-color-secondary: #4026a0;
  --primary-color: #251b10;
  --primary-light: #d4b896;
  --primary-dark: #a08b6f;
  --text-primary: #2c2c2c;
  --text-secondary: #2f2c2c;
  --header-link-color:#031D02;
  --text-light: #ffffff;
  --background: #544e4e;
  --background-secondary: #f8f8f8;
  --border-color: rgba(194, 165, 133, 0.2);
  --shadow: rgba(194, 165, 133, 0.1);
  --shadow-hover: rgba(194, 165, 133, 0.2);

  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-xxl: 4rem;

  /* Typography Scale */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;

  /* Z-index Scale */
  --z-header: 100;
  --z-modal: 1000;
}

/* Brand/Logo Styles - Fixed positioning */
.brand-link {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  transition: color var(--transition-fast);
  flex-shrink: 0;
  z-index: 10;
  position: relative;
}

.brand-link:hover {
  color: var(--primary-dark);
  background-color: rgba(0, 0, 0, 0);
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  max-width: 100vw;
}

footer {
  margin-top: 100px;
  background: #c2a585; /* palette color */
  color: #fff;
  font-size: 15px;
  text-align: center;
  padding: 24px 12px;
  border-radius: 12px 12px 0 0; /* rounded top edges */
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
}

footer a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

footer a:hover {
  background-color: rgba(255, 255, 255, 0); /* hover highlite-color */
  text-decoration: underline;
}

footer .small {
  font-size: 14px;
  color: #fff;
  opacity: 0.9;
  display: flex;
  flex-wrap: wrap; /* allow wrapping */
  justify-content: center;
  gap: 8px;
}

footer .sep {
  display: inline; /* default on desktop */
}

/* 📱 Mobile styles */
@media (max-width: 600px) {
  footer .small {
    flex-direction: column; /* stack each item */
    gap: 4px;
  }
  footer .sep {
    display: none; /* hide separators on mobile */
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background);
  font-size: var(--font-size-base);
}

/* Header Styles - Fixed width and constrained layout */
.header {
  position: sticky;
  top: 0;
  background: rgba(167, 155, 148, 0.4); /* lighter & transparent */
  backdrop-filter: blur(8px); /* glass blur effect */
  border-bottom: 1px solid var(--border-color);
  border-radius: 25px 25px 25px 25px; /* rounded bottom corners */
  z-index: var(--z-header);
  transition: all var(--transition-base);

  min-width: 320px; /* Minimum width to prevent collapse */
}

.nav {
  width: 100%;
}

#app {
  /* overflow-x: hidden; */
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.nav-container {
  width: min(1200px, 100vw); /* Fixed width instead of max-width */
  max-width: calc(100vw - 1rem); /* Prevent overflow on small screens */
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem; /* Reduced height from 4rem */
  position: relative;
  overflow: hidden; /* Prevent content overflow */
}

.logo {
  background: linear-gradient(
    135deg,
    var(--logo-color-primary),
    var(--logo-color-secondary)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: clamp(1.125rem, 3vw, 1.5rem); /* Responsive logo text */
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

/* Mobile Toggle - Fixed positioning */
.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  z-index: calc(var(--z-header) + 1);
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Prevent shrinking */
  position: relative;
}

.hamburger-line {
  width: 1.25rem;
  height: 2px;
  background-color: var(--primary-color);
  transition: all var(--transition-base);
  margin: 2px 0;
}

.mobile-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Navigation Links - Fixed positioning within container */
.nav-links {
  display: flex;
  list-style: none;
  gap: clamp(0.5rem, 2vw, 1.5rem); /* Responsive gap that scales */
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(100% - 200px); /* Leave space for logo and mobile toggle */
  justify-content: center;
  flex-wrap: nowrap; /* Prevent wrapping */
}

.nav-item {
  margin: 0;
  flex-shrink: 1; /* Allow items to shrink if needed */
  min-width: 0; /* Allow text to truncate if necessary */
}

.nav-link {
  text-decoration: none;
  color: var(--header-link-color);
  font-weight: 500;
  padding: var(--space-xs) clamp(0.5rem, 1.5vw, 1rem); /* Responsive padding */
  border-radius: 0.5rem;
  transition: all var(--transition-base);
  position: relative;
  display: block;
  white-space: nowrap; /* Prevent text wrapping */
  font-size: clamp(0.875rem, 1.5vw, 1rem); /* Responsive font size */
  text-overflow: ellipsis;
  overflow: hidden;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: rgba(194, 165, 133, 0.08);
}

/* Active link styling - White background */
.nav-link.router-link-active {
  color: var(--primary-color);
  background-color: rgba(243, 244, 246, 0.35);
  box-shadow: 0 2px 8px rgba(194, 165, 133, 0.15);
  font-weight: 600;
}

/* Main Content */
.main {
  flex: 1;
  min-height: calc(100vh - 6rem); /* Adjusted for smaller header */
}

/* Page Transition Effects */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all var(--transition-slow);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Additional constraint for very wide screens */
@media (min-width: 1400px) {
  .nav-container {
    width: 100%; /* Maintain fixed width even on very wide screens */
  }
}
/* Responsive Design - Fixed width constraints */
@media (max-width: 800px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-container {
    width: 100%; /* Full width on mobile */
    padding: 0 var(--space-sm);
    height: 2.5rem; /* Even smaller on mobile */
    box-sizing: border-box;
  }

  .nav-links {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(254, 254, 254, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: var(--space-lg);
    gap: var(--space-sm);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 4px 12px var(--shadow);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    border-radius: 15px 15px 15px 15px;
    max-width: 100%; /* Full width in mobile menu */
    width: 100%;
  }

  .nav-links.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: var(--space-sm);
    text-align: center;
    border-radius: 0.75rem;
    font-size: 1rem; /* Fixed font size on mobile */
    white-space: normal; /* Allow wrapping in mobile menu */
  }

  .logo {
    font-size: 1.25rem; /* Fixed mobile logo size */
  }
}

@media (max-width: 480px) {
  .nav-container {
    width: 100%;
    height: 2.25rem;
    padding: 0 0.75rem; /* Reduced padding for very small screens */
    box-sizing: border-box;
  }

  .logo {
    font-size: 1.125rem;
  }

  .nav-links {
    max-width: calc(100vw - 1.5rem); /* Prevent overflow */
  }
}

@media (max-width: 400px) {
  .nav-container {
    width: 100%;
    max-width: 100vw;
    padding: 0 0.5rem; /* Further reduced padding */
    margin: 0;
  }
  .header {
    padding: 0;
  }
}

/* Utility Classes */
.fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: min(1200px, 100vw);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.section {
  padding: var(--space-xxl) 0;
}

.text-center {
  text-align: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--font-size-base);
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--text-light);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-hover);
}

.btn-outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background: transparent;
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: var(--text-light);
  transform: translateY(-2px);
}
</style>
