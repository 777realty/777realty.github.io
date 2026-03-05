FROM node:18-alpine

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

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
