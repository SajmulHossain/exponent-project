## 1. Setup .env file
```bash

AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

admin email = admin@example.com
admin password = admin123
```

## 2. Run the development server:
```bash
npm install
npx prisma format && npx prisma generate && npx prisma db push && npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
