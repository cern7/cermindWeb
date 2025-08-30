<template>
  <div class="guide">
    <div class="page-header">
      <div class="container">
        <div class="header-content" ref="headerContent">
          <h1 class="page-title">Getting Started Guide</h1>
          <p class="page-subtitle">
            Everything you need to know to make the most of our platform
          </p>
          <div class="guide-stats">
            <div class="stat-item">
              <span class="stat-number">{{ steps.length }}</span>
              <span class="stat-label">Steps</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5</span>
              <span class="stat-label">Minutes</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">Easy</span>
              <span class="stat-label">Difficulty</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- Progress Sidebar -->
          <aside class="progress-sidebar" ref="sidebar">
            <div class="progress-header">
              <h3 class="progress-title">Your Progress</h3>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="progress-text">{{ completedSteps }} of {{ steps.length }} completed</span>
            </div>

            <nav class="step-nav">
              <ul class="step-list">
                <li 
                  v-for="(step, index) in steps" 
                  :key="index"
                  class="step-nav-item"
                  :class="{ 
                    'completed': step.completed, 
                    'active': currentStep === index 
                  }"
                >
                  <button 
                    class="step-nav-button"
                    @click="scrollToStep(index)"
                  >
                    <div class="step-number">
                      <CheckCircle v-if="step.completed" :size="16" />
                      <span v-else>{{ index + 1 }}</span>
                    </div>
                    <span class="step-nav-title">{{ step.title }}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Main Content -->
          <main class="guide-content" ref="content">
            <div class="intro-section" ref="introSection">
              <div class="intro-card">
                <div class="intro-icon">
                  <BookOpen :size="48" />
                </div>
                <h2 class="intro-title">Welcome to Your Journey</h2>
                <p class="intro-description">
                  This comprehensive guide will walk you through everything you need to know. 
                  Follow along at your own pace and check off steps as you complete them.
                </p>
                <button class="btn btn-primary" @click="scrollToStep(0)">
                  Start Guide
                </button>
              </div>
            </div>

            <div class="steps-container">
              <section 
                v-for="(step, index) in steps" 
                :key="index"
                :id="`step-${index}`"
                class="step-section"
                :ref="`step-${index}`"
              >
                <div class="step-card">
                  <div class="step-header">
                    <div class="step-indicator">
                      <div 
                        class="step-circle"
                        :class="{ 'completed': step.completed }"
                      >
                        <CheckCircle v-if="step.completed" :size="24" />
                        <span v-else class="step-number">{{ index + 1 }}</span>
                      </div>
                      <div class="step-line" v-if="index < steps.length - 1"></div>
                    </div>
                    
                    <div class="step-info">
                      <h3 class="step-title">{{ step.title }}</h3>
                      <p class="step-description">{{ step.description }}</p>
                    </div>
                  </div>

                  <div class="step-content" v-html="step.content"></div>

                  <div class="step-actions">
                    <button 
                      class="btn btn-outline mark-complete-btn"
                      :class="{ 'completed': step.completed }"
                      @click="toggleStepCompletion(index)"
                    >
                      <CheckCircle v-if="step.completed" :size="18" />
                      <Circle v-else :size="18" />
                      {{ step.completed ? 'Completed' : 'Mark as Complete' }}
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <!-- Completion Section -->
            <section class="completion-section" ref="completionSection" v-if="allStepsCompleted">
              <div class="completion-card">
                <div class="completion-icon">
                  <Trophy :size="64" />
                </div>
                <h2 class="completion-title">Congratulations! 🎉</h2>
                <p class="completion-description">
                  You've successfully completed all the steps in this guide. 
                  You're now ready to make the most of our platform.
                </p>
                <div class="completion-actions">
                  <router-link to="/" class="btn btn-primary">
                    Return to Home
                  </router-link>
                  <button class="btn btn-outline" @click="resetProgress">
                    Reset Progress
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpen, CheckCircle, Circle, Trophy } from 'lucide-vue-next'

export default {
  name: 'Guide',
  components: {
    BookOpen,
    CheckCircle,
    Circle,
    Trophy
  },
  data() {
    return {
      currentStep: 0,
      observer: null,
      steps: [
        {
          title: 'Create Your Account',
          description: 'Set up your personal account to get started',
          completed: false,
          content: `
            <div class="step-details">
              <p>Creating an account is the first step to accessing all our features. Here's what you'll need:</p>
              <ul>
                <li>A valid email address</li>
                <li>A secure password (at least 8 characters)</li>
                <li>Basic profile information</li>
              </ul>
              <div class="step-tip">
                <strong>Tip:</strong> Use a strong password that includes numbers, letters, and special characters.
              </div>
            </div>
          `
        },
        {
          title: 'Verify Your Email',
          description: 'Confirm your email address to secure your account',
          completed: false,
          content: `
            <div class="step-details">
              <p>After creating your account, you'll receive a verification email. Follow these steps:</p>
              <ol>
                <li>Check your inbox (and spam folder) for our verification email</li>
                <li>Click the verification link in the email</li>
                <li>You'll be redirected back to our platform</li>
                <li>Your account is now verified and ready to use</li>
              </ol>
              <div class="step-tip">
                <strong>Note:</strong> The verification link expires in 24 hours. Request a new one if needed.
              </div>
            </div>
          `
        },
        {
          title: 'Complete Your Profile',
          description: 'Add personal information to customize your experience',
          completed: false,
          content: `
            <div class="step-details">
              <p>Completing your profile helps us provide a better, more personalized experience:</p>
              <ul>
                <li>Upload a profile picture</li>
                <li>Add your name and bio</li>
                <li>Set your preferences and interests</li>
                <li>Configure notification settings</li>
              </ul>
              <div class="step-tip">
                <strong>Privacy:</strong> You control what information is visible to others. Review your privacy settings anytime.
              </div>
            </div>
          `
        },
        {
          title: 'Explore Key Features',
          description: 'Discover the main features that make our platform powerful',
          completed: false,
          content: `
            <div class="step-details">
              <p>Take some time to explore these essential features:</p>
              <ul>
                <li><strong>Dashboard:</strong> Your central hub for all activities</li>
                <li><strong>Tools:</strong> Access our suite of productivity tools</li>
                <li><strong>Settings:</strong> Customize your experience</li>
                <li><strong>Help Center:</strong> Find answers to common questions</li>
              </ul>
              <div class="step-tip">
                <strong>Tip:</strong> Use keyboard shortcuts to navigate faster. Press '?' to see all available shortcuts.
              </div>
            </div>
          `
        },
        {
          title: 'Connect & Collaborate',
          description: 'Learn how to work with others on the platform',
          completed: false,
          content: `
            <div class="step-details">
              <p>Our platform is designed for collaboration. Here's how to connect:</p>
              <ul>
                <li>Invite team members or colleagues</li>
                <li>Join existing projects and communities</li>
                <li>Share your work and get feedback</li>
                <li>Use our communication tools effectively</li>
              </ul>
              <div class="step-tip">
                <strong>Best Practice:</strong> Set clear permissions when sharing to maintain security while enabling collaboration.
              </div>
            </div>
          `
        }
      ]
    }
  },
  computed: {
    completedSteps() {
      return this.steps.filter(step => step.completed).length;
    },
    progressPercentage() {
      return Math.round((this.completedSteps / this.steps.length) * 100);
    },
    allStepsCompleted() {
      return this.completedSteps === this.steps.length;
    }
  },
  methods: {
    scrollToStep(stepIndex) {
      const element = document.getElementById(`step-${stepIndex}`);
      if (element) {
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    
    toggleStepCompletion(stepIndex) {
      this.steps[stepIndex].completed = !this.steps[stepIndex].completed;
      this.saveProgress();
    },
    
    resetProgress() {
      this.steps.forEach(step => {
        step.completed = false;
      });
      this.saveProgress();
    },
    
    saveProgress() {
      // In a real app, this would save to a backend or localStorage
      // For demo purposes, we'll just keep it in memory during the session
      console.log('Progress saved:', this.progressPercentage + '%');
    },
    
    loadProgress() {
      // In a real app, this would load from a backend or localStorage
      // For demo purposes, we'll start fresh each time
    },
    
    initScrollAnimations() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Update current step based on visible step
            const stepId = entry.target.id;
            if (stepId && stepId.startsWith('step-')) {
              const stepIndex = parseInt(stepId.replace('step-', ''));
              this.currentStep = stepIndex;
            }
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '-120px 0px -50% 0px'
      });

      // Observe elements for animation
      const animateElements = [
        this.$refs.headerContent,
        this.$refs.sidebar,
        this.$refs.content,
        this.$refs.introSection,
        this.$refs.completionSection,
        ...Object.keys(this.$refs)
          .filter(key => key.startsWith('step-'))
          .map(key => this.$refs[key])
          .flat()
      ];

      animateElements.forEach(el => {
        if (el) {
          this.observer.observe(el);
        }
      });
    }
  },
  
  mounted() {
    this.loadProgress();
    this.initScrollAnimations();
    
    // Initial animation
    this.$nextTick(() => {
      if (this.$refs.headerContent) {
        this.$refs.headerContent.classList.add('animate-in');
      }
    });
  },
  
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
</script>

<style scoped>
.guide {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: var(--space-xxl) 0;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.header-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.guide-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
}

/* Content Layout */
.page-content {
  padding: var(--space-xxl) 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-xxl);
  align-items: start;
}

/* Progress Sidebar */
.progress-sidebar {
  position: sticky;
  top: 120px;
  background: white;
  border-radius: 1rem;
  padding: var(--space-lg);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px var(--shadow);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease 0.2s;
}

.progress-sidebar.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.progress-header {
  margin-bottom: var(--space-lg);
}

.progress-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--background-secondary);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: var(--space-sm);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.step-list {
  list-style: none;
}

.step-nav-item {
  margin-bottom: var(--space-xs);
}

.step-nav-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border: none;
  background: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: left;
}

.step-nav-button:hover {
  background: rgba(194, 165, 133, 0.1);
}

.step-nav-item.active .step-nav-button {
  background: rgba(194, 165, 133, 0.15);
  color: var(--primary-color);
}

.step-nav-item.completed .step-nav-button {
  color: var(--primary-color);
}

.step-number {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: 600;
  flex-shrink: 0;
}

.step-nav-item.completed .step-number {
  background: var(--primary-color);
  color: white;
}

.step-nav-item.active .step-number {
  background: var(--primary-color);
  color: white;
}

.step-nav-title {
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* Main Content */
.guide-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease 0.4s;
}

.guide-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Intro Section */
.intro-section {
  margin-bottom: var(--space-xxl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.intro-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.intro-card {
  background: white;
  border-radius: 1rem;
  padding: var(--space-xxl);
  text-align: center;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px var(--shadow);
}

.intro-icon {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-lg);
  color: white;
}

.intro-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.intro-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

/* Step Sections */
.step-section {
  margin-bottom: var(--space-xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.step-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.step-card {
  background: white;
  border-radius: 1rem;
  padding: var(--space-xl);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow);
  position: relative;
}

.step-header {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.step-indicator {
  position: relative;
}

.step-circle {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--background-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.step-circle.completed {
  background: var(--primary-color);
  color: white;
}

.step-line {
  position: absolute;
  top: 3rem;
  left: 50%;
  width: 2px;
  height: 2rem;
  background: var(--border-color);
  transform: translateX(-50%);
}

.step-info {
  flex: 1;
}

.step-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
}

.step-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.step-content {
  margin-bottom: var(--space-lg);
  color: var(--text-secondary);
}

.step-details p {
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.step-details ul,
.step-details ol {
  margin: var(--space-md) 0;
  padding-left: var(--space-lg);
}

.step-details li {
  margin-bottom: var(--space-xs);
}

.step-tip {
  background: rgba(194, 165, 133, 0.1);
  border-left: 4px solid var(--primary-color);
  padding: var(--space-md);
  border-radius: 0 0.5rem 0.5rem 0;
  margin-top: var(--space-md);
  font-size: var(--font-size-sm);
}

.step-actions {
  display: flex;
  justify-content: flex-end;
}

.mark-complete-btn {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  transition: all var(--transition-base);
}

.mark-complete-btn.completed {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.mark-complete-btn.completed:hover {
  background: var(--primary-dark);
}

/* Completion Section */
.completion-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.completion-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.completion-card {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  border-radius: 1rem;
  padding: var(--space-xxl);
  text-align: center;
}

.completion-icon {
  margin-bottom: var(--space-lg);
  color: gold;
}

.completion-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.completion-description {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.completion-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.completion-actions .btn {
  background-color: white;
  color: var(--primary-color);
}

.completion-actions .btn-outline {
  background: transparent;
  color: white;
  border-color: white;
}

.completion-actions .btn:hover {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 280px 1fr;
    gap: var(--space-xl);
  }

  .progress-sidebar {
    padding: var(--space-md);
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .progress-sidebar {
    position: static;
    order: 2;
    margin-top: var(--space-xl);
  }

  .guide-content {
    order: 1;
  }

  .page-header {
    padding: var(--space-xl) 0;
  }

  .guide-stats {
    gap: var(--space-lg);
  }

  .step-header {
    gap: var(--space-md);
  }

  .step-card {
    padding: var(--space-lg);
  }

  .intro-card {
    padding: var(--space-xl);
  }

  .completion-card {
    padding: var(--space-xl);
  }
}

@media (max-width: 480px) {
  .page-content {
    padding: var(--space-xl) 0;
  }

  .step-header {
    flex-direction: column;
    gap: var(--space-sm);
  }

  .step-indicator {
    align-self: flex-start;
  }

  .completion-actions {
    flex-direction: column;
  }

  .guide-stats {
    gap: var(--space-md);
  }

  .stat-number {
    font-size: var(--font-size-xl);
  }
}
</style>