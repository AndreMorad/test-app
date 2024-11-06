# Use official Node.js image as base
FROM node:16 as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2 - Serve app with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]