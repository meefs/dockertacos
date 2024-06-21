# Build stage for the React application
FROM node:14 as build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the entire project (including the local template directory)
COPY . .

# Create a new React app using the local template
RUN npx create-react-app my-taco-app --template file:cra-template-taco-shop

# Change to the newly created app directory
WORKDIR /app/my-taco-app

# Install all dependencies
RUN npm install

# Build the React app
RUN npm run build

# Production stage using NGINX to serve the app
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy the build folder from the 'build' stage to the NGINX serve directory
COPY --from=build /app/my-taco-app/build .

# Copy a custom NGINX configuration if necessary
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Using the default command of NGINX image which starts NGINX
CMD ["nginx", "-g", "daemon off;"]
