## create nextjs app
npx create-next-app@latest --typescript

## install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## restructure the folders
- delete style folder
- create src folder in root directory
- move pages folder into src

## add following to _app.tsx
import "tailwindcss/tailwind.css";

npm install --dev-save prettier