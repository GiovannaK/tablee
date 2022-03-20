FROM node:16 as development

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build


FROM node:16 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 4000

RUN npm run build

CMD [ "npm", "run", "start:dev" ]