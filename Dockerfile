# Base image to start from
FROM node:16

# Two arguments: First is the path outside the image to copy into the image
# Second is the path inside the image
COPY . /app

# Sets the working directory
WORKDIR /app

# Run command
RUN npm install
RUN npm install sqlite3


# Command to run after the image is built
CMD ["npm", "start"]

EXPOSE 3000