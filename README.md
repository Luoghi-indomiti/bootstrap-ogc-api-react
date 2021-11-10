# Checking collections

:heavy_check_mark: Now we have an `ApiLoader` component that tells us if the endpoint loaded is a valid OGC Open Api Features. It wouldn't be difficult to check other conformances, but for this workshop we will focus on Features.


## What will we do now:

In addition to conformance, every OGC API has a "collections" endpoint that returns the groupings of objects, features, as in our case, or others, depending on the specification implemented. Now we will list collections available.
To do so, you'll need a working OGC API, better with some nice example data. If you don't have one, feel free to use one of the following:

- [joana server](http://18.156.191.178)
- [pygeoapi demo server](https://demo.pygeoapi.io/stable)

## Third step :rocket: 

- Create another [React component](https://reactjs.org/docs/components-and-props.html) named **Collections** that:
    - Requests and lists the collections available at `http://yourapiendpoint/collections?f=json`
    - Checks which collections contain **feature items** (because we know that our API has Features, but it may still contain other types of collections)
    - **Optional:** Shows Features and other collections in separate groups
- Wire the `Collections` component to `ApiLoader` as a button: makes sense to show it only for valid API (please share the url between the two components)


Collections endpoint returns an array of Collection items. Each Item has different properties, for now we are interested into:

- *id* : to identify the collection
- *title* : the title that we can show in the list
- *description* : would be nice to show also a description
- *itemType* : to check if it's a collection of **feature** items or not


## The lazy way :sleepy:

You guessed it!

```bash
git checkout step-3
```

