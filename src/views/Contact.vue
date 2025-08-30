<template>
  <section class="contact section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contact</h2>
        <p class="section-subtitle">
          Ai întrebări sau vrei o prezentare? Ne poți găsi mai jos.
        </p>
      </div>

      <aside>
        <div class="card">
          <h3 class="text-xl font-semibold mb-4">CERMIND</h3>
          <p class="meta mb-2">
            E-mail:
            <a href="mailto:office@cermind.ro" class="text-blue-600">
              office@cermind.ro
            </a>
          </p>
          <p class="meta mb-2">Adresă: București, România</p>
          <p class="meta">Telefon: +40-755-570-090</p>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
// nimic special aici, doar structură statică
</script>

<style scoped>
.section {
  padding: 4rem 0;
}

.meta {
  font-size: 0.95rem;
  color: #444;
}

/* Container responsive */
.container {
  max-width: 800px;       /* limităm pe desktop */
  margin: 0 auto;         /* centrat */
  padding: 1rem;
  background: linear-gradient(135deg, #eae1e1 0%, #e3dcdc 100%);
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Card styling */
.card {
  padding: 1.5rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .section {
    padding: 2rem 1rem;
  }

  .container {
    max-width: 100%;   /* ocupă toată lățimea pe mobil */
    padding: 1rem;
    border-radius: 15px;
  }

  .card {
    padding: 1rem;
  }

  .meta {
    font-size: 0.9rem;
  }
}
</style>
