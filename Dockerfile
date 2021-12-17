FROM node:14 AS development

ARG user
ARG uid

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /app

COPY package*.json ./

COPY . .