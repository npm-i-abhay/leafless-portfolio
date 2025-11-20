FROM node:18-alpine

WORKDIR /app
COPY my-portfolio/ ./
RUN npm install --legacy-peer-deps

COPY . .
EXPOSE 80
CMD npm run dev