FROM node:20-alpine

WORKDIR /app
COPY my-portfolio/ ./
RUN npm install --legacy-peer-deps

COPY . .
EXPOSE 3001
CMD npm run dev