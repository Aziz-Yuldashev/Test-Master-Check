FROM node:20

# Web
WORKDIR /app

COPY ./Front web

WORKDIR /app/web

ENV VITE_REACT_APP_API_URL='http://localhost:5000/api'

RUN npm install
RUN npm run build


# API
WORKDIR /app/Back

COPY ./Back .

ENV PORT=5000

RUN npm install
