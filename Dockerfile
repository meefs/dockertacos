# Build stage
FROM node:14 as build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the entire project (including the local template directory)
COPY . .

# Create a new React app using the local template. Ensure the template directory is correctly referenced
# Assuming 'cra-template-taco-shop' is the folder name of the template
RUN npx create-react-app my-taco-app --template file:cra-template-taco-shop

# Change to the newly created app directory
WORKDIR /app/my-taco-app

# Install all dependencies
RUN npm install

# Build the React app
RUN npm run build

# Production stage
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the build folder from the 'build' stage to the current stage
COPY --from=build /app/my-taco-app/build ./build

# Copy package.json to the current stage
COPY --from=build /app/my-taco-app/package.json ./

# Install only production dependencies
RUN npm install --only=production

# Inform Docker that the container will listen on port 3000 at runtime
EXPOSE 3000

# Set the default command to serve the built React app
CMD ["npx", "serve", "-s", "build"]
