# Build-Stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run-Stage
FROM nginx:alpine
COPY --from=build /app/www /usr/share/nginx/html

# Kopiere die NGINX-Konfigurationsdatei
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Port 6666 für NGINX
EXPOSE 6666

CMD ["nginx", "-g", "daemon off;"]