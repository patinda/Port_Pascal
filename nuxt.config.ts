export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "fr", name: "Français", file: "fr.json" },
    ],
    defaultLocale: "fr",
    langDir: "locales", 
    strategy: "prefix_except_default",
  },
  
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://res.cloudinary.com/dkztnapze/raw/upload/v1734475901/portfolio/styles_zwxl2s.css',
        },
        
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        },
        {
          src: 'https://res.cloudinary.com/dkztnapze/raw/upload/v1734517532/main_norgiq.js',
        },
      ],
    },
  },
});
