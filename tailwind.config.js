/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens : {
        'lg-phone' : '481px',
        
        'tablet' : '769px',

        'lg-tablet' : '991px',

        'laptop' : '1200px',

      },
      boxShadow : {
        'btn-sha' : '4px 4px 10px 0px rgba(0, 0, 0, 0.30)',
        'input-sha' : '2px 2px 8px 0px rgb(238, 238, 238)'
      }
    },
  },
  plugins: [],
  darkMode : 'class'
}

