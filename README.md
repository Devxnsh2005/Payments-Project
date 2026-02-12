Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

Using this example

Run the following command:

npx create-turbo@latest
What's inside?

This Turborepo includes the following packages/apps:

Apps and Packages

docs: a Next.js app
web: another Next.js app
@repo/ui: a stub React component library shared by both web and docs applications
@repo/eslint-config: eslint configurations (includes eslint-config-next and eslint-config-prettier)
@repo/typescript-config: tsconfig.jsons used throughout the monorepo
Each package/app is 100% TypeScript.

Utilities

This Turborepo has some additional tools already setup for you:

TypeScript for static type checking
ESLint for code linting
Prettier for code formatting
Build

To build all apps and packages, run the following command:

cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
You can build a specific package by using a filter:

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
Develop

To develop all apps and packages, run the following command:

cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
You can develop a specific package by using a filter:

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
Remote Caching

Tip

Vercel Remote Cache is free for all plans. Get started today at vercel.com.
Turborepo can use a technique known as Remote Caching to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can create one, then enter the following commands:

cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
This will authenticate the Turborepo CLI with your Vercel account.

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
Useful Links

Learn more about the power of Turborepo:

Tasks
Caching
Remote Caching
Filtering
Configuration Options
CLI Usage
