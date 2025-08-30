<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content" ref="content">
        <div class="error-illustration">
          <div class="error-number">404</div>
          <div class="error-icon">
            <Search :size="64" />
          </div>
        </div>
        
        <div class="error-text">
          <h1 class="error-title">Page Not Found</h1>
          <p class="error-description">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>
        </div>
        
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary">
            <Home :size="18" />
            Back to Home
          </router-link>
          <button class="btn btn-outline" @click="goBack">
            <ArrowLeft :size="18" />
            Go Back
          </button>
        </div>
        
        <div class="helpful-links">
          <h3 class="links-title">Popular Pages</h3>
          <div class="links-grid">
            <router-link to="/guide" class="help-link">
              <BookOpen :size="20" />
              <span>Getting Started</span>
            </router-link>
            <router-link to="/privacy" class="help-link">
              <Shield :size="20" />
              <span>Privacy Policy</span>
            </router-link>
            <router-link to="/terms" class="help-link">
              <FileText :size="20" />
              <span>Terms of Service</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Home, ArrowLeft, BookOpen, Shield, FileText } from 'lucide-vue-next'

export default {
  name: 'NotFound',
  components: {
    Search,
    Home,
    ArrowLeft,
    BookOpen,
    Shield,
    FileText
  },
  methods: {
    goBack() {
      // Check if there's history to go back to
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        // If no history, go to home
        this.$router.push('/')
      }
    }
  },
  mounted() {
    // Animate content on mount
    this.$nextTick(() => {
      if (this.$refs.content) {
        this.$refs.content.classList.add('animate-in')
      }
    })
  }
}
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  padding: var(--space-xxl) 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 100%);
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.not-found-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Error Illustration */
.error-illustration {
  position: relative;
  margin-bottom: var(--space-xxl);
}

.error-number {
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 700;
  color: var(--primary-color);
  line-height: 0.8;
  margin-bottom: var(--space-md);
  text-shadow: 0 4px 8px rgba(194, 165, 133, 0.2);
  position: relative;
}

.error-number::before {
  content: '404';
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s ease-in-out infinite alternate;
}

@keyframes shimmer {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.error-icon {
  color: var(--primary-color);
  opacity: 0.7;
  margin-bottom: var(--space-lg);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Error Text */
.error-text {
  margin-bottom: var(--space-xxl);
}

.error-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.error-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

/* Error Actions */
.error-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-xxl);
}

.error-actions .btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--font-size-lg);
  min-width: 140px;
}

/* Helpful Links */
.helpful-links {
  margin-top: var(--space-xxl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--border-color);
}

.links-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
  max-width: 500px;
  margin: 0 auto;
}

.help-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all var(--transition-base);
  box-shadow: 0 2px 4px rgba(194, 165, 133, 0.05);
}

.help-link:hover {
  color: var(--primary-color);
  border-color: var(--primary-light);
  background: rgba(194, 165, 133, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(194, 165, 133, 0.1);
}

.help-link span {
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .not-found {
    padding: var(--space-xl) 0;
  }

  .error-title {
    font-size: var(--font-size-2xl);
  }

  .error-description {
    font-size: var(--font-size-base);
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .error-actions .btn {
    width: 200px;
  }

  .links-grid {
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }

  .help-link {
    padding: var(--space-sm) var(--space-md);
  }
}

@media (max-width: 480px) {
  .error-number {
    font-size: 4rem;
  }

  .helpful-links {
    margin-top: var(--space-xl);
    padding-top: var(--space-lg);
  }

  .links-title {
    font-size: var(--font-size-lg);
  }
}

/* Page loading state styles */
body.page-loading {
  overflow: hidden;
}

body.page-loading::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  z-index: 9999;
  animation: pageLoadProgress 0.3s ease;
}

@keyframes pageLoadProgress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>