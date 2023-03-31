/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js","{html,js,php}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin','@tailwindcss/forms','tw-elements/dist/plugin')
  ],
}