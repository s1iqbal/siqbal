e# Use a lightweight base image
FROM node:24-alpine

# Set working directory
WORKDIR /app
# Install tailwindcss and its dependencies
RUN npm install tailwindcss @tailwindcss/vite


# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port for the frontend server
EXPOSE 5173

# Run vite dev server (use 'npm run build' for production)
CMD ["npm", "run", "dev"]