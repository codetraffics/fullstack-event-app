This is a Next.js full stack project with Next.js for frontend and vercel neon postgres database for backend.
## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the frontend with the command below:

```bash
npm run dev
```

To set up the database and connect it to the frontend, run:

```bash
npx prisma generate
npx prisma db push
```

Access prisma studio with the command below:

```bash
npm prisma studio
```