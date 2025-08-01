# Stage 1: Build the Angular app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
# Install Angular CLI version 20.0.5 globally
RUN npm install -g @angular/cli@20.0.5
RUN npm install
COPY . .
# Build with verbose output and fail on error
RUN ng build --configuration production --verbose || exit 1
# Debug: List files in dist/ and dist/todo
RUN ls -la /app/dist || echo "dist/ does not exist"
RUN ls -la /app/dist/todo || echo "dist/todo does not exist"
RUN ls -la /app/dist/todo/browser || echo "dist/todo/browser does not exist"

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the browser folder (client-side assets)
COPY --from=build /app/dist/todo/browser /usr/share/nginx/html
# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Debug: List files in Nginx html directory
RUN ls -la /usr/share/nginx/html || echo "Nginx html directory is empty"
# Debug: Verify Nginx config
RUN cat /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]