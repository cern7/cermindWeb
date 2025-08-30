import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Privacy from "@/views/Privacy.vue";
import Terms from "@/views/Terms.vue";
import Guide from "@/views/Guide.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Cermind",
      description:
        "Welcome to our platform - discover simplicity and elegance in every interaction.",
    },
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta: {
      title: "Privacy Policy - Cermind",
      description: "Learn how we collect, use, and protect your information.",
    },
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
    meta: {
      title: "Terms of Service - Cermind",
      description: "Terms and conditions for using our services.",
    },
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide,
    meta: {
      title: "Getting Started Guide - Cermind",
      description:
        "Complete guide to help you get started with our platform in just 5 minutes.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact Us - Cermind",
      description:
        "Get in touch with our team for support, inquiries, or feedback.",
    },
  },
  {
    // Catch-all route for 404 pages
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "Page Not Found - Your Brand",
      description: "The page you are looking for could not be found.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 100,
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  // Set document title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  // Set meta description
  if (to.meta && to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", to.meta.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = to.meta.description;
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }

  // Add loading state to body for page transitions
  document.body.classList.add("page-loading");

  next();
});

router.afterEach(() => {
  // Remove loading state after navigation completes
  setTimeout(() => {
    document.body.classList.remove("page-loading");
  }, 300);
});

// Error handling
router.onError((error) => {
  console.error("Router error:", error);
  // In a production app, you might want to send this to an error tracking service
});

export default router;
