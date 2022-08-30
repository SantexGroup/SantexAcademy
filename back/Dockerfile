ARG NODE_VERSION=18.8.0

# Build stage
FROM node:${NODE_VERSION}-alpine as builder

RUN apk update && apk add curl
# install node-prune (https://github.com/tj/node-prune)
#RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | ash -s -- -b /usr/local/bin

WORKDIR /app
ADD . .
RUN npm install

# remove development dependencies
#RUN npm prune --production

# run node prune
#RUN /usr/local/bin/node-prune

# App stage
FROM node:${NODE_VERSION}-alpine AS app

RUN apk update
RUN apk upgrade
RUN apk add bash
RUN apk add --no-cache bash
ARG GROUP_ID=9000
ARG USER_ID=9001

WORKDIR /app
# Copy only compiled .js files and package.*
COPY --from=builder ./app ./dist
COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/entrypoint.sh ./
RUN mkdir -p /app/uploads
RUN mkdir -p /app/dist/logs
RUN chown $USER_ID:$GROUP_ID -R  /app/uploads

RUN chmod +x ./entrypoint.sh

# Create non root user and set /app as home
RUN addgroup -g $GROUP_ID appgrp
RUN adduser -u $USER_ID appuser -S -h /app -G appgrp

RUN chown $USER_ID:$GROUP_ID -R /app/dist/logs/
# Run app as non root
USER appuser

ENTRYPOINT ["./entrypoint.sh"]
CMD ["serve"]