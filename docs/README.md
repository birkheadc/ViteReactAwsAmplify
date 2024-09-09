# Vite React Aws Amplify

A template for projects I refer to. Developed with Vite, using React, and Designed to be deployed to Aws Amplify.

## Environment Variables

Locally, environment variables are read from .env in the root directory. This file is not checked into git so it must be created. For a list of what variables are needed for the app to function, see `src/vite-env.d.ts`. This file acts as a list of necessary environment variables, as well as provides type support for them.

## Auth

Authentication and authorization leans heavily into AWS Cognito. The `login` and `register` links redirect to a Cognito service that should be configured ahead of time. After logging in through Cognito, the user is redirected to the login page of the app with a code parameter in the url. The login page then uses this code to retrieve an access token and refresh token. The refresh token is stored in local storage, while the access token is stored in memory. When making requests to the backend, the access token is sent in the Authorization header. The backend then verifies the access token with Cognito. When the access token expires, the frontend automatically uses the refresh token to retrieve another. When the refresh token expires, the user is prompted to login again.
