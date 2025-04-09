/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // your customizations here
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [], // ← this should be an empty array or contain only valid plugins
};
