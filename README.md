# Test app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Application consists of following pages:

1. The index page - `/`. The page contains `ArticlesList` component with mock articles data and `Link` for redirecting to page with form. 
2. Creating article page - `/article`. The page contains form with author email, article title, creation date and article text fields. After submitting the form, form data will log in develop console. 

Application API:

1. API endpoint with mock article data array - `/api/articles`. Each array item contains id, article title, author email, article text and creation date.

## Libraries and framework

- Material-ui.

## Getting Started

1. Install dependencies: `yarn`.
2. Run the project: `yarn dev`.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project is currently using jest and enzyme for unit tests. 

Running tests: `yarn test`

## Code quality
The project use eslint with airbnb config.

For running linter use `yarn lint`.
