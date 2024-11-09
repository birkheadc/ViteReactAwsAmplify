# Vite React Aws Amplify

A template for projects I refer to. Developed with Vite, using React, and Designed to be deployed to Aws Amplify.

## How to Use

I will be writing this section as I use the template for a new project I am starting.

1. Create a new project with vite `npm create vite@latest` then install packages.
2. Initialize git
  - I use Publish to Github command from vscode to do this.
3. Install the necessary packages
  - Copy the contents of `package.json` from this template to the new project, except for the metadata
  - Delete `package-lock.json` in the project
  - Install the packages with `npm install`
4. Copy the following from this template to the new project:
  - .env
  - amplify.yml
  - components.json
  - jest.config.ts
  - postcss.config.js
  - tailwind.config.js
  - all of `.storybook` and `src` folders

5. Add .env to .gitignore

6. Change the reference to the name of the project in the following files:
  - `src/contexts/ThemeContext/ThemeProvider.tsx`

6. If necessary, update the following files to match the template as best as possible (vite sometimes updates the formatting)
  - .eslintrc.cjs
  - tsconfig.app.json
  - tsconfig.json
  - tsconfig.node.json
  - vite.config.ts

7. Remove any files that are not necessary for the project
8. Create a development and staging branch and push to Github
9. Create the Amplify project and connect to the Github repository
  - Make sure to create environment variables as found in .env (you might not know the values yet)
  - VITE_LOCAL_URL is only used locally
10. Create development and staging environments in Amplify

## Environment Variables

Locally, environment variables are read from .env in the root directory. This file is not checked into git so it must be created. For a list of what variables are needed for the app to function, see `src/vite-env.d.ts`. This file acts as a list of necessary environment variables, as well as provides type support for them.

## Auth

Authentication and authorization leans heavily into AWS Cognito. The `login` and `register` links redirect to a Cognito service that should be configured ahead of time. After logging in through Cognito, the user is redirected to the login page of the app with a code parameter in the url. The login page then uses this code to retrieve an access token and refresh token. The refresh token is stored in local storage, while the access token is stored in memory. When making requests to the backend, the access token is sent in the Authorization header. The backend then verifies the access token with Cognito. When the access token expires, the frontend automatically uses the refresh token to retrieve another. When the refresh token expires, the user is prompted to login again.
