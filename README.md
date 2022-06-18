## create nextjs app
npx create-next-app@latest --typescript

## install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## edit tailwind.config.css as follows
```
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## restructure the folders
- delete style folder
- create src folder in root directory
- move pages folder into src

## add following to _app.tsx
import "tailwindcss/tailwind.css";

## setup prettier
npm install --dev-save prettier