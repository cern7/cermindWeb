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
            <h3 class="toc-title">Termeni și Condiții</h3>
            <nav class="toc-nav">
              <ul class="toc-list">
                <li
                  class="toc-item"
                  v-for="section in sections"
                  :key="section.id"
                >
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
                <h2 class="agreement-title">
                  Acord privind termenii și condițiile
                </h2>
                <p class="agreement-description">
                  Prin accesarea și utilizarea serviciilor noastre, confirmați
                  că ați citit, ați înțeles și sunteți de acord să respectați
                  acești Termeni și condiții de utilizare.
                </p>
                <div class="agreement-actions">
                  <router-link to="/" class="btn btn-primary">
                    <House />
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
import { House } from "lucide-vue-next";
export default {
  components: {
    House,
  },

  name: "Terms",
  data() {
    return {
      lastUpdated: "19 August, 2025",
      observer: null,
      sections: [
        {
          id: "introduction",
          title: "Introducere",
          content: `
            <p>Acești Termeni și Condiții reglementează utilizarea aplicației software Cermate (denumită în continuare „Aplicația”), furnizată de către Cermind.</p>
            <p>Prin instalarea și utilizarea Aplicației, utilizatorul declară că a citit, a înțeles și acceptă integral acești Termeni și Condiții.</p>
           `,
        },
        {
          id: "application",
          title: "Obiectul Aplicației",
          content: `
            <p>Aplicația permite utilizatorilor:</p>
            <ul>
              <li>Să caute dosare utilizând API-ul public furnizat de Ministerul Justiției din România;</li>
              <li>Să genereze documente PDF pe baza unor șabloane furnizate de utilizator;</li>
              <li>Să trimită aceste documente prin email către instanțele de judecată sau alți destinatari, folosind integrarea cu serviciile Google (Gmail, Google Drive);</li>
              <li>să salveze fișierele generate local pe dispozitiv și/sau în contul personal Google Drive.</li>
            </ul>
          `,
        },
        {
          id: "license",
          title: "Licență de utilizare",
          content: `
          <p>Aplicația este pusă la dispoziție utilizatorului pe baza unei licențe limitate, neexclusive și netransferabile.</p>
          <p>Licența este valabilă conform acordului încheiat între părți (client și furnizor).</p>
          <p>Utilizatorul nu are dreptul să revândă, să distribuie sau să modifice Aplicația.</p>
          `,
        },
        {
          id: "oauth-google",
          title: "Autentificare și integrare Google",
          content: `
            <p>Aplicația utilizează serviciul Google OAuth pentru autentificare. Utilizatorul trebuie să își ofere consimțământul pentru următoarele permisiuni:</p>
            <ul>
              <li>Acces la fișierele create de Aplicație în Google Drive;</li>
              <li>Posibilitatea de a redacta și trimite emailuri prin Gmail.</li>
            </ul>
            <br>
            <p>Aplicația respectă Google API Services User Data Policy, inclusiv cerințele privind Limited Use.</p>
          `,
        },
        {
          id: "google-apis",
          title: "Limite privind utilizarea serviciilor Gmail și Google Drive",
          content: `
            <ol>
              <li>
                Serviciile noastre utilizează API-urile Gmail și Google Drive, care sunt
                furnizate de Google LLC.
              </li>
              <li>
                Utilizarea serviciilor este supusă limitărilor impuse de Google, inclusiv,
                dar fără a se limita la:
              </li>
              <ul>
                <li>
                  Stocare Drive: Fiecare cont are o limită de stocare totală disponibilă,
                  conform planului Google asociat. Depășirea acestei limite poate împiedica
                  încărcarea sau sincronizarea fișierelor.
                  <a
                    href="https://support.google.com/drive/answer/2375123"
                    target="_blank"
                    rel="noopener"
                    >Detalii Google Drive</a
                  >
                </li>
                <li>
                  Număr de email-uri: Gmail impune limite privind numărul de email-uri
                  trimise și primite pe zi. Depășirea acestor limite poate duce la blocarea
                  temporară a trimiterei de email-uri.
                  <a
                    href="https://support.google.com/mail/answer/22839"
                    target="_blank"
                    rel="noopener"
                    >Detalii Gmail</a
                  >
                </li>
              </ul>
              <li>
                Noi nu putem garanta disponibilitatea serviciilor dacă aceste limite sunt
                atinse. Orice problemă cauzată de depășirea limitelor Google nu poate fi
                atribuită site-ului nostru.
              </li>
              <li>
                Utilizatorii sunt responsabili să respecte limitele și termenii de utilizare
                Google, precum și să gestioneze conturile proprii pentru a evita
                întreruperile de serviciu.
              </li>
            </ol>

  `,
        },

        {
          id: "gdpr",
          title: "Date colectate și protecția datelor personale",
          content: `
            <p>Aplicația respectă legislația națională și europeană privind protecția datelor (GDPR).</p>
            <ul>
              <li>Date colectate: adresa MAC (salvată doar într-o formă mascată, neidentificabilă) și tipul sistemului de operare.</li>
              <li>Datele de autentificare Google și token-urile de acces sunt stocate doar local pe dispozitivul utilizatorului. Furnizorul nu are acces la aceste date și nu le stochează pe servere proprii.</li>
              <li>Documentele PDF și emailurile generate rămân în exclusivitate la utilizator (local și în contul Google).</li>
            </ul>
           <br>
            <p>Utilizatorul are drepturile prevăzute de GDPR: acces, rectificare, ștergere, opoziție și portabilitate.</p>
          `,
        },
        {
          id: "responsibility-limitations",
          title: "Limitarea răspunderii",
          content: `
            <p>Furnizorul nu garantează:</p>
            <ul>
              <li>Funcționarea continuă sau fără erori a API-ului Ministerului Justiției;</li>
              <li>Disponibilitatea serviciilor Google (Drive, Gmail);</li>
              <li>Că Aplicația este lipsită de erori sau compatibilă cu toate sistemele.</li>
            </ul>
            <br>
            <p>Furnizorul nu este responsabil pentru:</p>
            <ul>
              <li>Pierderea de date cauzată de utilizator;</li>
              <li>Folosirea Aplicației în scopuri ilegale;</li>
              <li>Eventualele daune directe sau indirecte rezultate din utilizarea Aplicației.</li>
            </ul>
            `,
        },
        {
          id: "termination",
          title: "Încetarea utilizării",
          content: `
            <p>Licența poate fi reziliată de către furnizor în cazul nerespectării Termenilor și Condițiilor.</p>
            <p>La încetarea utilizării, utilizatorul trebuie să dezinstaleze Aplicația și să șteargă eventualele copii.</p>
          `,
        },
        {
          id: "governing-law",
          title: "Legislație aplicabilă",
          content: `
            <p>Acești Termeni și Condiții sunt guvernați de legislația în vigoare în România și de reglementările Uniunii Europene.</p>
            <p>Orice litigiu va fi soluționat de instanțele competente din România.</p>
            `,
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },

    initScrollAnimations() {
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
        this.$refs.headerContent,
        this.$refs.toc,
        this.$refs.content,
        this.$refs.agreementSection,
        ...Object.keys(this.$refs)
          .filter((key) => key.startsWith("section-"))
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
    this.initScrollAnimations();

    // Initial animation
    this.$nextTick(() => {
      if (this.$refs.headerContent) {
        this.$refs.headerContent.classList.add("animate-in");
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
.terms {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  background: linear-gradient(
    135deg,
    var(--background) 0%,
    var(--background-secondary) 100%
  );
  padding: var(--space-xxl) 0 var(--space-xl);
  border-bottom: 1px solid var(--border-color);
  border-radius: 25px 25px 25px 25px;
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
  content: "";
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
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-dark)
  );
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
