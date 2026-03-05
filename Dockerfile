FROM node:18-alpine

WORKDIR /app

# Copy package.json, lock file, and .npmrc (if exists)
COPY package*.json .npmrc* ./

# Install dependencies
RUN npm install

# Copy all local files
COPY . .

# Build the next app
RUN npm run build

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
