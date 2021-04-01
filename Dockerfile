FROM nginx:alpine

COPY ./docs /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]