<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero section">
      <div class="container">
        <div class="hero-content" ref="heroContent">
          <h2 class="hero-title">CERMATE</h2>
          <h2 class="hero-title">
            Economisește timp, câștigă mai multe dosare
          </h2>
          <p class="hero-subtitle">
            Aplicația Cermate ajută practicienii în insolvență să identifice
            automat dosarele relevante, să genereze rapid oferte PDF
            personalizate și să le trimită prin e-mail către tribunalele din
            țară.
          </p>
          <div class="hero-actions">
            <router-link to="/guide" class="btn btn-primary">
              Incepe acum
            </router-link>
            <button class="btn btn-outline" @click="scrollToFeatures">
              Afla mai multe
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features section" ref="featuresSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">De ce să alegi Cermate</h2>
          <p class="section-subtitle">
            Soluție simplă pentru nevoi complexe — de până la
            <strong>10 ori mai rapid</strong> în trimiterea ofertelor.
          </p>
        </div>

        <div class="features-grid">
          <div
            class="feature-card"
            v-for="(feature, index) in features"
            :key="index"
            :ref="`feature-${index}`"
            @mouseenter="handleCardHover"
            @mouseleave="handleCardLeave"
          >
            <div class="feature-icon">
              <component :is="feature.icon" :size="32" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta section" ref="ctaSection">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ești pregătit să începi?</h2>
          <p class="cta-description">
            Alătură-te practicienilor în insolvență care își optimizează
            activitatea și câștigă mai mult timp pentru dosarele importante.
          </p>
          <div class="cta-actions">
            <router-link to="/guide" class="btn btn-primary btn-lg">
              Începe chiar acum
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Using composition-like approach for better organization
import { useHead } from "@vueuse/head";
import { Search, FileText, Send, FolderSync, Timer, Database } from "lucide-vue-next";

export default {
  name: "Home",
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Cermate automatizează identificarea dosarelor de insolvență și trimiterea ofertelor PDF personalizate, ajutând practicienii să economisească timp și să obțină mai multe dosare.",
        },
        {
          name: "google-site-verification",
          content: "h3Qtim-9hkMSBOzvWRSw9bouu5ml1ouf0dc_aYPal6o",
        },
        {
          property: "og:title",
          content: "Cermate — Automatizare pentru practicieni în insolvență",
        },
        {
          property: "og:description",
          content:
            "Identifică automat dosare de insolvență, generează oferte PDF și trimite e-mailuri rapid.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:locale",
          content: "ro_RO",
        },
      ],
    });
  },
  components: {
    Search,
    FileText,
    Send,
    FolderSync,
    Timer,
    Database,
  },
  data() {
    return {
      features: [
        {
          icon: "Search",
          title: "Identificare automată",
          description:
            "Identificarea automată a dosarelor de insolvență relevante din surse publice.",
        },
        {
          icon: "FileText",
          title: "Generare PDF",
          description:
            "Generarea rapidă de oferte PDF personalizate pentru fiecare caz.",
        },
        {
          icon: "Send",
          title: "Trimitere oferte",
          description:
            "Trimiterea ofertelor prin e-mail direct către potențialii clienți sau instanțe.",
        },
        {
          icon: "FolderSync",
          title: "Gestionare dosare",
          description:
            "Organizarea și gestionarea centralizată a tuturor dosarelor într-un singur loc.",
        },
        {
          icon: "Timer", // sau "Timer" / "Activity" din lucide-vue-next
          title: "Eficiență dovedită",
          description:
            "Testată împreună cu practicieni în insolvență: trimiți același număr de oferte de până la 10 ori mai rapid.",
        },
        {
          icon: "Database", // din lucide-vue-next
          title: "Date oficiale",
          description:
            "Conectare directă la baza de date a Ministerului Justiției pentru informații corecte și actualizate.",
        },
      ],
      observer: null,
    };
  },
  methods: {
    scrollToFeatures() {
      this.$refs.featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },

    handleCardHover(event) {
      event.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    },

    handleCardLeave(event) {
      event.currentTarget.style.transform = "translateY(0) scale(1)";
    },

    initScrollAnimations() {
      // Intersection Observer for scroll-triggered animations
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      // Observe elements for animation
      const animateElements = [
        this.$refs.heroContent,
        this.$refs.featuresSection,
        this.$refs.ctaSection,
        ...Object.keys(this.$refs)
          .filter((key) => key.startsWith("feature-"))
          .map((key) => this.$refs[key])
          .flat(),
      ];

      animateElements.forEach((el) => {
        if (el) {
          this.observer.observe(el);
        }
      });
    },
  },

  mounted() {
    // Initialize scroll animations
    this.initScrollAnimations();

    // Initial hero animation
    this.$nextTick(() => {
      if (this.$refs.heroContent) {
        this.$refs.heroContent.classList.add("animate-in");
      }
    });
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style scoped>
.home {
  overflow: hidden;
}

.small {
  font-size: 13px;
  color: var(--muted);
}

/* Hero Section */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #eae1e1 0%, #e3dcdc 100%);
  position: relative;
  border-radius: 25px 25px 25px 25px;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 20%,
    rgba(194, 165, 133, 0.05) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
}

.highlight {
  color: var(--primary-color);
  position: relative;
}

.highlight::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--primary-light)
  );
  border-radius: 2px;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Features Section */
.features {
  background-color: var(--background);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-xxl);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease 0.2s;
}

.features.animate-in .section-header {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.section-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--primary-light);
  font-weight: 300;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xxl);
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: var(--space-xl);
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--transition-base);
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 2px 4px rgba(194, 165, 133, 0.05);
}

.feature-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:nth-child(1).animate-in {
  transition-delay: 0.1s;
}
.feature-card:nth-child(2).animate-in {
  transition-delay: 0.2s;
}
.feature-card:nth-child(3).animate-in {
  transition-delay: 0.3s;
}

.feature-card:hover {
  box-shadow: 0 8px 25px rgba(194, 165, 133, 0.15);
  border-color: var(--primary-light);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-md);
  color: white;
  transition: transform var(--transition-base);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  border-radius: (25px 25px 25px 25px);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  opacity: 1;
  transform: translateY(0);
}

.cta-content.animate-in {
  opacity: 0;
  transform: translateY(0);
}

.cta-title,
.cta-description {
  color: #fff;
}
.cta-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.cta-description {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

.btn-lg {
  background-color: white;
  color: var(--primary-color);
  border: 2px solid #fff;
}

.btn-lg:hover {
  background-color: var(--text-primary);
  color: #fff;
  border-color: rgba(0, 0, 0, 0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
    padding: var(--space-xl) 0;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions .btn {
    width: 200px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .feature-card {
    padding: var(--space-lg);
  }

  .section-title {
    font-size: var(--font-size-2xl);
  }

  .cta-title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .feature-card {
    padding: var(--space-md);
  }

  .btn-lg {
    padding: var(--space-sm) var(--space-lg);
    font-size: var(--font-size-base);
  }
}
</style>
