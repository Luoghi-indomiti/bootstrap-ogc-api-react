# How to safely land on an API

Now we have the project structure created by [Create React App](https://github.com/facebook/create-react-app):

```
bootstrap-ogc-api-react
├── README.md
├── node_modules
├── yarn.lock
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

From here, we should be able to start the application with:

```bash
yarn start
```

If everything worked correctly from the browser we should see http://localhost:3000/ and a dark page with a rotating React logo :electron:

We are running our app in **development mode**. If we do edits the page will reload automatically showing our changes.

## What will we do now:

Our plan is to create a webapp so, given an API endpoint, if it is an endpoint developed according to the specification [OGC API - Features](http://docs.ogc.org/is/17-069r3/17-069r3.html), it will allow us to navigate through its data and services.

## Second step :rocket: 

- Change src/App.js and get rid of React rotating logo :wave:
- Create a [React component](https://reactjs.org/docs/components-and-props.html) named **ApiLoader** (feel free to use [this example](https://github.com/Luoghi-indomiti/bootstrap-ogc-api-react/blob/step-1/src/api/exampleemptycomponent.js)), that:
    - Takes an URL in a text input form
    - Checks the `/conformance` endpoint, if avalilable (must have it, otherwise we can already say it is not an OGC API)
    - Verifies that is a OGC Open API Features endpoint `http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core`
    - Verifies that supports encoding GeoJson `http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson`
    - Shows a message to confirm conformance or not


To query the API from React we will use the library [Axios](https://axios-http.com/docs/intro) that we can install with

```bash
yarn add axios
```

**Optional:** to give some structure and style our application, in order to make it a bit nicer, we could install a module as [bootstrap](https://react-bootstrap.github.io/) (or whatever alternative you prefer):

```bash
yarn add bootstrap@latest
```


## The lazy way :sleepy:

```bash
git checkout step-2
yarn install
```

