<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#resources"><strong>Resources</strong></a> ·
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
    - Styling with [Tailwind CSS](https://tailwindcss.com)
    - [Radix UI](https://radix-ui.com) for headless component primitives
    - Icons from [Radix UI Icons](https://www.radix-ui.com/icons)
- [husky](https://typicode.github.io/husky) for pre-commit hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) for running linters on staged files
- [@akqa-denmark/eslint-config-akqa-dk](https://github.com/AKQA-group/akqa-dk-frontend-configs) our shared linting configurations

## Getting Started

First, make sure you are on the correct node version:

```bash
nvm use
````

Then, install the dependencies:

```bash
npm install
```

Copy the `.env.local.example` file to `.env.local` and fill in the required environment variables.

Finally, run the development server:

```bash
npm run dev
```

Open [https://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Vercel AI SDK

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs/introduction) - learn about the Vercel AI SDK and how to use it in your project.
- [Vercel AI SDK Supported Providers](https://sdk.vercel.ai/providers/ai-sdk-providers) - learn about the supported AI providers and how to use them in your project.
- [Vercel AI SDK Playground](https://sdk.vercel.ai/playground) - test the Vercel AI SDK with different providers and models.
- [Vercel AI SDK and Next.js example project](https://vercel.com/templates?type=ai&framework=next.js) - A collection of Vercel AI SDK & Next.js projects.

### v0

- [v0](https://v0.dev) - a generative user interface system by Vercel powered by AI.
- [v0 Documentation](https://v0.dev/docs) - learn about the v0 tool and pricing.

### Tailwind CSS

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
- [Tailwind UI](https://tailwindui.com) - beautiful UI components, crafted by the creators of Tailwind CSS [Details at IS4](https://is4.akqa.dk/content/default.aspx?1|9e42f002-833f-4830-a3d2-207fb1655861|00000000-0000-0000-0002-000000000001).

### Shadcn UI, Radix UI, and Phosphor Icons

> [!NOTE]
> ALL Shadcn UI components have been added to the project.

- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - learn about the Shadcn UI components and how to use them in your project.
- [Radix UI Documentation](https://radix-ui.com/docs/primitives/accordion) - learn about the Radix UI components and how to use them in your project.
- [Phosphor Icons Documentation](https://phosphoricons.com) - learn about the Phosphor Icons and how to use them in your project.

