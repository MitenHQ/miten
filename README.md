# Miten

Improve your meetings by getting feedback

[Work in progress]

## How to run

## development

### Initilizing

```
npm i
cd ./backend
npm i
cp ./.env.sample ./.env
cd ../frontend
npm i
```

If you need the pages with content to work, you need to provide the Contentful environemnt vars

```
cp ./frontend/.env.development ./frontend/.env.development.local
```

Then open the file and update `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`.

### Run backend

```
cd ./backend
docker-compose up -d
npm start
```

### Run frontend

```
cd ./frontend
npm start
```
