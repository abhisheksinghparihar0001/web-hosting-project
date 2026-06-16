# Step 1: Use lightweight Alpine Nginx image
FROM nginx:alpine

# Step 2: Clean default config and html
RUN rm /etc/nginx/conf.d/default.conf && \
    rm -rf /usr/share/nginx/html/*

# Step 3: Copy custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Step 4: Copy Frontend Code
COPY frontend/ /usr/share/nginx/html/

# Step 5: Security - Setup non-root user permissions
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /tmp

# Step 6: Switch to non-root user
USER nginx

# Step 7: Expose unprivileged port mapped in nginx.conf
EXPOSE 8080

# Step 8: Docker Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/healthz || exit 1

# Step 9: Start Nginx
CMD ["nginx", "-g", "daemon off;"]

