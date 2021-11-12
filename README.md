# Checking features

:heavy_check_mark: Now that we have a component that lists all the features collections available.


## What will we do now:

Let's go another step deeper into the API, showing features items available in each collection.

- [joana server](http://18.156.191.178)
- [pygeoapi demo server](https://demo.pygeoapi.io/stable)

## Fourth step :rocket: 

- Create another [React component](https://reactjs.org/docs/components-and-props.html) named **Items** that:
    - Requests and lists the items available at `http://yourapiendpoint/collections/{collection}/items?f=json`
    - Wire the `Items` component to `Collections` as an extra button
- Create another [React component](https://reactjs.org/docs/components-and-props.html) named **Feature** that:
    - Gets the GeoJSON of a specified item `http://yourapiendpoint/collections/{collection}/items/{item}?f=json`
    - Shows the content of the json (like a textarea)
    - Wire the `Feature` component to `Items` as an extra button


Items endpoint returns an array of Feature items. Each Item has different properties, for now we are interested just into *id*, to identify the feature.


## The lazy way :sleepy:

```bash
git checkout step-4
yarn install
```

