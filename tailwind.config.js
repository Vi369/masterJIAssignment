/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        backgroundImage:{
            'rm-user': "url('')",
            'rm-joke': "url('')",
            'cat': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./assets/catsListing/image 7.jpg')"
        }
    },
  },
  plugins: [],
}

