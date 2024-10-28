This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Implementing Prisma ORM

## Installing Prisma ORM

To install Prisma ORM, you need to run the following command:

```bash
npm install prisma -D
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
```

This will create a new folder called `prisma` in your project directory. Inside the `prisma` folder, you will find a file called `schema.prisma`. This file contains the Prisma schema, which defines the structure of your database.

## Generating Prisma Client

To generate the Prisma Client, you need to run the following command:

```bash
npx prisma generate
```

This will generate the Prisma Client in the `prisma` folder. The Prisma Client is a set of TypeScript classes that allow you to interact with your database using object-oriented programming.

## Using Prisma Client

To use the Prisma Client, you need to import it in your `app/page.tsx` file:

```tsx
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```

You can now use the Prisma Client to query your database. For example, to fetch all products from the database, you can use the following code:

```tsx
const products = await prisma.product.findMany()
```

This will fetch all products from the database and store them in the `products` variable.

You can also use the Prisma Client to create, update, and delete records in the database. For example, to create a new product, you can use the following code:

```tsx
const newProduct = {
  name: 'New Product',
  price: 99.99,
}

await prisma.product.create({
  data: newProduct,
})
```

This will create a new product with the name "New Product" and a price of 99.99.

You can also use the Prisma Client to update and delete records in the database. For example, to update a product, you can use the following code:

```tsx
const productToUpdate = await prisma.product.findUnique({
  where: {
    id: 1,
  },
})

if (productToUpdate) {
  productToUpdate.name = 'Updated Product'
  await prisma.product.update({
    where: {
      id: 1,
    },
    data: productToUpdate,
  })
}
```

This will update the product with the ID of 1 to have the name "Updated Product".

```tsx
const productToDelete = await prisma.product.findUnique({
  where: {
    id: 1,
  },
})

if (productToDelete) {
  await prisma.product.delete({
    where: {
      id: 1,
    },
  })
}
```

This will delete the product with the ID of 1.

## Conclusion

In this tutorial, we learned how to use Prisma ORM to interact with a PostgreSQL database. We also learned how to generate a Prisma Client and how to use it to query and manipulate data in the database.

We hope you enjoyed this tutorial and found it helpful. If you have any questions or feedback, please don't hesitate to reach out to us. Happy coding!  
