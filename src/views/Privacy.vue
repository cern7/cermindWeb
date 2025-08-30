<template>
  <div class="privacy">
    <div class="page-header">
      <div class="container">
        <div class="header-content" ref="headerContent">
          <h1 class="page-title">Privacy Policy</h1>
          <p class="page-subtitle">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
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
            <h3 class="toc-title">Table of Contents</h3>
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

            <!-- Contact Section -->
            <section class="contact-section" ref="contactSection">
              <div class="contact-card">
                <h2 class="contact-title">Questions About Privacy?</h2>
                <p class="contact-description">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
                <div class="contact-info">
                  <div class="contact-item">
                    <strong>Email:</strong> privacy@example.com
                  </div>
                  <div class="contact-item">
                    <strong>Address:</strong> 123 Privacy Street, Data City, DC 12345
                  </div>
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
  name: 'Privacy',
  data() {
    return {
      lastUpdated: 'January 15, 2024',
      observer: null,
      sections: [
        {
          id: 'information-collection',
          title: 'Information We Collect',
          content: `
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our services</li>
              <li><strong>Device Information:</strong> IP address, browser type, and device characteristics</li>
            </ul>
          `
        },
        {
          id: 'information-use',
          title: 'How We Use Your Information',
          content: `
            <p>We use the information we collect to provide, maintain, and improve our services. Specifically, we may use your information to:</p>
            <ul>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Personalize and improve our services and provide content or features that match your interests</li>
            </ul>
          `
        },
        {
          id: 'information-sharing',
          title: 'Information Sharing and Disclosure',
          content: `
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted service providers who assist us in operating our services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
              <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
            </ul>
          `
        },
        {
          id: 'data-security',
          title: 'Data Security',
          content: `
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <p>These measures include:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>
          `
        },
        {
          id: 'cookies',
          title: 'Cookies and Tracking Technologies',
          content: `
            <p>We use cookies and similar tracking technologies to collect and use personal information about you. These technologies help us:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our services</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p>You can control cookies through your browser settings, but please note that disabling cookies may affect the functionality of our services.</p>
          `
        },
        {
          id: 'your-rights',
          title: 'Your Rights and Choices',
          content: `
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
              <li><strong>Opt-out:</strong> Opt out of certain uses and disclosures of your information</li>
            </ul>
          `
        },
        {
          id: 'policy-changes',
          title: 'Changes to This Policy',
          content: `
            <p>We may update this Privacy Policy from time to time. When we make changes, we will notify you by:</p>
            <ul>
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Sending you an email notification for significant changes (if you have provided your email address)</li>
            </ul>
            <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          `
        }
      ]
      }
  }
}
  </script>