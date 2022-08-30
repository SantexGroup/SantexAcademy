ARG NODE_VERSION=18.8.0
# Stage 1: Compile and Build angular codebase

# Use official node image as the base image

FROM node:$NODE_VERSION as build
# Set the working directory
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build-development


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/jesus-maria /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY ./src/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 4200
EXPOSE 4200