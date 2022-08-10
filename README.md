# GifSearchEngine

## Requirements

* git
* node
* yarn
* [giphy](https://giphy.com/) api key

## Usage

```sh
git clone https://github.com/luovkle/GifSearchEngine
cd GifSearchEngine
```

Run backend.

```sh
cd backend
echo "BACKEND_REQUEST_LIMIT=REQUEST_LIMIT" > .env
echo "BACKEND_API_KEY=API_KEY" >> .env
yarn install
yarn start
```

Run frontend.

```sh
cd frontend
yarn install
yarn dev
```

## TODO

* add css
* add docker image
* add tests
