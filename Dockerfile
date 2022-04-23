FROM public.ecr.aws/bitnami/node:16-prod

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3333 

CMD [ "npm","run","dev" ]
