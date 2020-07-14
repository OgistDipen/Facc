FROM node:12.2.0-alpine as react_build 
WORKDIR /var/www/factory

#copy the react app to the container
COPY . /var/www/factory/

#prepare the cotnainer for building react
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
#because we want production build of our react or nginx
RUN npm run build

#prepare nginx
FROM nginx:1.16.0-alpine

COPY --from=react_build /var/www/factory/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx
EXPOSE 81 
CMD ["nginx","-g","daemon off;"]