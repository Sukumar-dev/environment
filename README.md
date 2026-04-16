# Deployment Guide

## MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create an account.
2. Create a new cluster and select the appropriate settings (free tier available).
3. Configure your cluster's security settings:
   - Add your IP address to the IP whitelist.
   - Create a database user with read and write access.
4. Get the connection string from the cluster dashboard and replace the placeholder with your username and password.

## Railway Backend Deployment
1. Go to [Railway](https://railway.app) and sign in or create an account.
2. Create a new project and connect your GitHub repository.
3. Set up your environment variables (including the MongoDB connection string).
4. Deploy your backend by clicking the `Deploy` button.
5. Note the generated URL for accessing your backend.

## Vercel Frontend Deployment
1. Go to [Vercel](https://vercel.com) and sign in or create an account.
2. Import your frontend project from the GitHub repository.
3. Set any necessary environment variables.
4. Click `Deploy` to deploy your frontend application.
5. Copy the live URL of your application from the dashboard.

## Docker Instructions
1. Make sure you have Docker installed on your machine.
2. Create a Dockerfile in your project root:
   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY package.json .
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD [ "npm", "start" ]
   ```
3. Build the Docker image:
   ```bash
   docker build -t your-app-name .
   ```
4. Run your Docker container:
   ```bash
   docker run -p 3000:3000 your-app-name
   ```
5. Access your application at `http://localhost:3000`.