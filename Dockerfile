FROM nginxinc/nginx-unprivileged


COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/

EXPOSE 80
