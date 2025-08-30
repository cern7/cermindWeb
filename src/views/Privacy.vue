<template>
  <div class="privacy">
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Politica de confidențialitate</h1>
          <p class="page-subtitle">
            Confidențialitatea ta este importantă pentru noi. Află cum colectăm,
            utilizăm și protejăm datele tale.
          </p>
          <div class="last-updated">
            <span class="update-label">Ultima actualizare:</span>
            <span class="update-date">{{ lastUpdated }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- Cuprins -->
          <aside class="toc">
            <h3 class="toc-title">Cuprins</h3>
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

          <!-- Conținut principal -->
          <main class="content">
            <section
              v-for="section in sections"
              :key="section.id"
              :id="section.id"
              class="content-section"
            >
              <h2 class="section-heading">{{ section.title }}</h2>
              <div class="section-content" v-html="section.content"></div>
            </section>

            <!-- Contact -->
            <section id="contact" class="contact-section">
              <div class="contact-card">
                <h2 class="contact-title">
                  Întrebări legate de confidențialitate?
                </h2>
                <p class="contact-description">
                  Dacă ai nelămuriri legate de această Politică de
                  confidențialitate, ne poți contacta:
                </p>
                <div class="contact-info">
                  <div class="contact-item">
                    <strong>Email:</strong> office@cermind.ro
                  </div>
                  <div class="contact-item">
                    <strong>Adresă:</strong>București, România
                  </div>
                  <div class="contact-item">
                    <strong>Telefon:</strong> +40 755 570 090
                  </div>
                  <div class="contact-item">
                    <strong>CUI:</strong> 
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
  name: "Privacy",
  data() {
    return {
      lastUpdated: "19 august 2025",
      sections: [
        {
          id: "introducere",
          title: "1. Introducere",
          content: `
            <p>Această Politică de confidențialitate explică modul în care <strong>Cermind</strong> ("Operatorul") tratează datele personale în cadrul aplicației desktop <strong>Cermate</strong> ("Aplicația").</p>
            <p>Respectăm Regulamentul (UE) 2016/679 (GDPR), Legea nr. 190/2018 și Politicile Google API Services User Data Policy.</p>
          `,
        },
        {
          id: "date-colectate",
          title: "2. Ce date colectăm",
          content: `
            <ul>
              <li><strong>Adresa MAC</strong> – folosită exclusiv pentru gestionarea licenței;</li>
              <li><strong>Sistem de operare și versiune</strong> – pentru compatibilitate tehnică;</li>
              <li><strong>Acces la Gmail și Google Drive prin OAuth</strong> – exclusiv pentru trimiterea de e-mailuri și gestionarea fișierelor PDF la cererea utilizatorului.</li>
            </ul>
            <p>Nu stocăm conținutul e-mailurilor și nu copiem fișiere din Drive în alte locații decât cele alese de utilizator.</p>
          `,
        },
        {
          id: "scopuri",
          title: "3. Scopurile și temeiurile prelucrării",
          content: `
            <p>Datele sunt prelucrate strict pentru funcționarea aplicației, trimiterea e-mailurilor și gestionarea fișierelor PDF.</p>
            <p><strong>Temei legal:</strong> executarea contractului (art. 6(1)(b) GDPR) și consimțământul acordat prin permisiunile OAuth (art. 6(1)(a) GDPR).</p>
          `,
        },
        {
          id: "pastrare",
          title: "4. Păstrarea datelor",
          content: `
            <p>Nu păstrăm parole și nu colectăm conținut din Gmail/Drive. Token-urile OAuth 2.0 sunt stocate minim și în siguranță, și pot fi revocate oricând din <a href="https://myaccount.google.com/permissions" target="_blank">setările Google</a>.</p>
            <p>Datele tehnice (MAC, OS) sunt păstrate doar pe durata relației contractuale.</p>
          `,
        },
        {
          id: "destinatari",
          title: "5. Destinatari și transferuri",
          content: `
            <p>Accesul este limitat la personal autorizat și furnizori tehnici. Nu transferăm date în afara SEE fără garanții GDPR adecvate.</p>
          `,
        },
        {
          id: "drepturi",
          title: "6. Drepturile utilizatorului",
          content: `
            <ul>
              <li>Drept de acces, rectificare și ștergere;</li>
              <li>Drept de restricționare și opoziție;</li>
              <li>Drept la portabilitate (unde e aplicabil);</li>
              <li>Dreptul de a retrage consimțământul pentru Gmail/Drive prin contul Google;</li>
              <li>Dreptul de a depune plângere la ANSPDCP.</li>
            </ul>
          `,
        },
        {
          id: "securitate",
          title: "7. Securitate",
          content: `
            <p>Aplicăm măsuri tehnice și organizatorice adecvate: OAuth 2.0, control de acces, criptare și politici de minimizare a datelor.</p>
          `,
        },
        {
          id: "google",
          title: "8. Politici Google",
          content: `
            <p>Aplicația respectă Google API Services User Data Policy (inclusiv Limited Use). Sunt solicitate doar permisiunile strict necesare pentru funcționalitatea aplicației.</p>
          `,
        },
        {
          id: "modificari",
          title: "9. Modificări",
          content: `
            <p>Putem actualiza această Politică. Versiunea curentă va fi afișată pe site, cu data ultimei actualizări. Modificările importante vor fi comunicate utilizatorilor.</p>
          `,
        },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>

.page-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.page-subtitle {
  font-size: var(--font-size-xl);
  color: var(--primary-color);
  font-weight: 300;
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

.toc-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.toc-link {
  color: #dbdfe6; /* albastru intens */
  text-decoration: none;
  font-weight: 500;
  background-color: rgb(0, 0, 0, 0);
  transition: color 0.6s ease, text-decoration 0.9s ease;
}

.link-s:hover,
.link-s:focus {
  color: #1d4ed8; /* albastru mai închis */
  text-decoration: underline;
}

.link-s:active {
  color: #1e40af; /* apăsat */
}

.link-s:visited {
  color: #4f46e5; /* mov ușor diferit pentru link vizitat */
}
:deep(.content-section a) {
  color: #dbdfe6;
  font-weight: 500;
}

:deep(.content-section a:hover) {
  color: #f7f7f7; /* albastru mai închis */
  text-decoration: underline;
  background-color: rgba(0, 0, 0, 0);
}

.privacy {
  min-height: 100vh;
}

/* Page Header */
.page-header {
  background: linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 100%);
  padding: var(--space-xxl) 0 var(--space-xl);
  border-bottom: 1px solid var(--border-color);
  border-radius: 25px 25px 25px 25px
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15cm;
}

</style>
