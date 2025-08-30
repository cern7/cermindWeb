<template>
  <div class="terms">
    <div class="page-header">
      <div class="container">
        <div class="header-content" ref="headerContent">
          <h1 class="page-title">Termeni și Condiții</h1>
          <p class="page-subtitle">
            Please read these terms carefully before using our services.
          </p>
          <div class="last-updated">
            <span class="update-label">Last updated:</span>
            <span class="update-date">{{ lastUpdated }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- Table of Contents -->
          <aside class="toc" ref="toc">
            <h3 class="toc-title">Terms Overview</h3>
            <nav class="toc-nav">
              <ul class="toc-list">
                <li class="toc-item" v-for="section in sections" :key="section.id">
                  <a 
                    :href="`#${section.id}`" 
                    class="toc-link"
                    @click.prevent="scrollToSection(section.id)"
                  >
                    {{ section.title }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Main Content -->
          <main class="content" ref="content">
            <section 
              v-for="section in sections" 
              :key="section.id"
              :id="section.id"
              class="content-section"
              :ref="`section-${section.id}`"
            >
              <h2 class="section-heading">{{ section.title }}</h2>
              <div class="section-content" v-html="section.content"></div>
            </section>

            <!-- Agreement Section -->
            <section class="agreement-section" ref="agreementSection">
              <div class="agreement-card">
                <h2 class="agreement-title">Agreement to Terms</h2>
                <p class="agreement-description">
                  By accessing and using our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service.
                </p>
                <div class="agreement-actions">
                  <router-link to="/" class="btn btn-primary">
                    Return to Home
                  </router-link>
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
export default {
  name: 'Terms',
  data() {
    return {
      lastUpdated: 'August 8, 2025',
      observer: null,
      sections: [
        {
          id: 'acceptance',
          title: 'Acceptance of Terms',
          content: `
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <p>These Terms of Service ("Terms") govern your use of our website and services. If you disagree with any part of these terms, then you may not access our services.</p>
            <p>We reserve the right to update and change the Terms by posting updates and changes to our website.</p>
          `
        },
        {
          id: 'use-license',
          title: 'Use License',
          content: `
            <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
          `
        },
        {
          id: 'user-accounts',
          title: 'User Accounts',
          content: `
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
            <p>You are responsible for safeguarding the password and for all activities that occur under your account.</p>
            <p>You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.</p>
            <p>We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.</p>
          `
        },
        {
          id: 'prohibited-uses',
          title: 'Prohibited Uses',
          content: `
            <p>You may not use our service:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              <li>For any obscene or immoral purpose</li>
            </ul>
          `
        },
        {
          id: 'content-policy',
          title: 'Content Policy',
          content: `
            <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content").</p>
            <p>You are responsible for Content that you post to the service, including its legality, reliability, and appropriateness.</p>
            <p>By posting Content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content.</p>
            <p>We reserve the right to terminate your access to the service if you violate our content policies.</p>
          `
        },
        {
          id: 'privacy-policy',
          title: 'Privacy Policy',
          content: `
            <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.</p>
            <p>By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.</p>
            <p>We are committed to protecting your personal information and your right to privacy.</p>
          `
        },
        {
          id: 'termination',
          title: 'Termination',
          content: `
            <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.</p>
            <p>If you wish to terminate your account, you may simply discontinue using the service.</p>
            <p>All provisions of the Terms which by their nature should survive termination shall survive termination.</p>
          `
        },
        {
          id: 'disclaimer',
          title: 'Disclaimer',
          content: `
            <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
            <ul>
              <li>Excludes all representations and warranties relating to this website and its contents</li>
              <li>Does not warrant that the functions contained in this website will be uninterrupted or error-free</li>
              <li>Does not warrant that defects will be corrected, or that this website or the server that makes it available are free of viruses or bugs</li>
            </ul>
            <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit.</p>
          `
        },
        {
          id: 'governing-law',
          title: 'Governing Law',
          content: `
            <p>These Terms shall be interpreted and governed by the laws of the State, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.</p>
          `
        }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    
    initScrollAnimations() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe elements for animation
      const animateElements = [
        this.$refs.headerContent,
        this.$refs.toc,
        this.$refs.content,
        this.$refs.agreementSection,
        ...Object.keys(this.$refs)
          .filter(key => key.startsWith('section-'))
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
.terms {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 100%);
  padding: var(--space-xxl) 0 var(--space-xl);
  border-bottom: 1px solid var(--border-color);
  border-radius: 35px 35px 35px 35px
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
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
}

.last-updated {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  background: rgba(194, 165, 133, 0.1);
  padding: var(--space-xs) var(--space-md);
  border-radius: 2rem;
  font-size: var(--font-size-sm);
}

.update-label {
  color: var(--text-secondary);
}

.update-date {
  color: var(--primary-color);
  font-weight: 500;
}

/* Content Layout */
.page-content {
  padding: var(--space-xxl) 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-xxl);
  align-items: start;
}

/* Table of Contents */
.toc {
  position: sticky;
  top: 120px;
  background: white;
  border-radius: 1rem;
  padding: var(--space-lg);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease 0.2s;
}

.toc.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.toc-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.toc-list {
  list-style: none;
}

.toc-item {
  margin-bottom: var(--space-xs);
}

.toc-link {
  display: block;
  padding: var(--space-xs) var(--space-sm);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all var(--transition-base);
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.toc-link:hover {
  background: rgba(194, 165, 133, 0.1);
  color: var(--primary-color);
  transform: translateX(4px);
}

/* Main Content */
.content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease 0.4s;
}

.content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.content-section {
  margin-bottom: var(--space-xxl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.content-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-heading {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--primary-color);
  position: relative;
}

.section-heading::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--primary-light);
}

.section-content {
  color: var(--text-secondary);
  line-height: 1.7;
}

.section-content p {
  margin-bottom: var(--space-md);
}

.section-content ul {
  margin: var(--space-md) 0;
  padding-left: var(--space-lg);
}

.section-content li {
  margin-bottom: var(--space-xs);
  position: relative;
}

.section-content li::marker {
  color: var(--primary-color);
}

.section-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* Agreement Section */
.agreement-section {
  margin-top: var(--space-xxl);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.agreement-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.agreement-card {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  border-radius: 1rem;
  padding: var(--space-xxl);
  text-align: center;
}

.agreement-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.agreement-description {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.agreement-actions .btn {
  background-color: white;
  color: var(--primary-color);
  padding: var(--space-md) var(--space-xl);
  font-size: var(--font-size-lg);
}

.agreement-actions .btn:hover {
  background-color: var(--background-secondary);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 240px 1fr;
    gap: var(--space-xl);
  }

  .toc {
    padding: var(--space-md);
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .toc {
    position: static;
    order: 2;
    margin-top: var(--space-xl);
  }

  .content {
    order: 1;
  }

  .page-header {
    padding: var(--space-xl) 0;
  }

  .page-title {
    font-size: var(--font-size-2xl);
  }

  .section-heading {
    font-size: var(--font-size-xl);
  }

  .agreement-card {
    padding: var(--space-xl);
  }

  .agreement-title {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 480px) {
  .page-content {
    padding: var(--space-xl) 0;
  }

  .section-content ul {
    padding-left: var(--space-md);
  }

  .agreement-description {
    font-size: var(--font-size-base);
  }

  .agreement-actions .btn {
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--font-size-base);
  }
}
</style>