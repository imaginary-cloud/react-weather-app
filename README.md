# Table of contents

* [Setup](#setup) - General instructions to install Node 16;
* [Bootstrapping](#bootstrapping) - Instructions to get the application running;
* [A few goodies](#a-few-goodies) - Brief list of useful packages;
* [Building a Weather app](#building-a-weather-app) - Detailed description of the desired functionallities;
* [Next steps](#next-steps) - Suggestions of further challenges to enhance our Weather app.

# Setup
Make sure you have Node v15 installed and ready to go, either download it directly from its [download page](https://nodejs.org/en/download/current/), or through [`nvm`](https://github.com/nvm-sh/nvm), which we recommend for both Linux and macOS.

Follow the next set of instructions to complete your setup with `nvm`.

## NVM
### Install Node v16:
```bash
nvm install 16.6.2
```

### Select Node v16
```bash
nvm use 16.6.2
```

### Validate that Node v16 is installed and available
```bash
node --version
> v16.6.2
```
### Install npx
```bash
npm install -g npx
```

# Bootstrapping
## Create a React application
[`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) is a Node package curated by Facebook, that can be used to create a new React project, with the required support scripts and dependencies.

Through `npx` we able to download and execute the package in a single action to create a new react project:

```bash
npx create-react-app@4.0.3 weather-app
```
Note: On the first time npx will ask you to install the ***create-react-app*** package. Just click ***y*** and it will install and create your first react app.

And we have just created a new React project, that is almost ready to run.
Please take a few minutes browsing the generated files inside weather-app folder, mainly:
* `package.json` - npm relies on this file for all of its iteration, from dependencies to available scripts;
* `./src/App.js` - The main component of the generated application;
* `./src/index.js` - Root of our web application, where `App` is mounted;
* `README.me` - Description of the generated project.

## Launching the application

### Lunching our react application

We can now run the application on development mode.
```bash
npm start
```
The web application should be now running and accessible on a browser through [http://localhost:3000](http://localhost:3000).

The page will reload if you make any changes and will show any errors in the browser's console.


# A few goodies
Before we start hacking away our weather application, we will take advantage of a few packages that will speed up our development.

## Install **Material UI**
[**Material UI**](https://mui.com/) is a well known and very popular library of polished UI components that can easily be reused.
All components follow an underlying theme, keeping our application with a consistent look and feel.

```bash
npm install @mui/material@5.0.2 @emotion/react@11.4.1 @emotion/styled@11.3.0
```

Usage example:
```JSX
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Title = styled(Typography)(() => `
  fontSize: 18;
  color: black;
`)

const Footer = styled('p')(() => `
  fontSize: 8;
  color: grey;
`)

export function SimpleCard() {
  return (
    <Card>
      <CardContent>
        <Title variant="h1">
          Title
        </Title>
        <Typography variant="h5" component="h2" gutterBottom>
          Subtitle
        </Typography>
        <Typography color="textSecondary">
          Main content of the card
        </Typography>
        <Footer variant="body2" component="p">
          A footer note
        </Footer>
      </CardContent>
      <CardActions>
        <Button size="small">Call to action</Button>
      </CardActions>
    </Card>
  );
};

```

**Material UI** brings along dozens of components that cover a fairly amount of scenarios and the following root components will be quite useful during our development:

* [styled](https://mui.com/system/styled/) - Utility function to style existing components, like Typography, or dom elements, like paragraphs;
* [Autocomplete](https://mui.com/components/autocomplete/) - Input with suggestions;
* [Card](https://mui.com/components/cards/) - **Material UI**'s root Card component;
* [Grid](https://mui.com/components/grid/) - Easy manage a 12 columns layout;
* [Typography](https://mui.com/components/typography/) - Component for all kind of text, with a huge set of variants to fit titles, paragraphs, etc;


## Install **date-fns** to handle dates
[**date-fns**](https://date-fns.org/) is a popular package to handle and format dates.
```bash
npm install date-fns@2.25.0
```

Usage example
```JavaScript
import { format, parseISO } from 'date-fns'

const date = new Date(); // "Mon Nov 18 2021 21:20:02 GMT+0000 (Western European Standard Time)"

format(date, 'EEE d MMMM, h:mm:ss a') // "Mon 18 October, 9:20:02 PM"
format(parseISO("2021-11-18"), 'MMMM do yyyy') // "November 18th 2021"
```

More details about the available _formats_ can be found on  [**date-fns**'s docs](https://date-fns.org/v2.25.0/docs/format).


# Building a Weather app
Our weather app will consist of an [SPA](https://en.wikipedia.org/wiki/Single-page_application) that will display the current forecast details and the next few days' forecast, for a selected location.

Users should be allowed to search for a location. This search will guide our users, displaying possible locations containing the users' query as he types.

Upon selecting a location, he should be able to check the forecast for the next 5 days and the details of today's weather report.

We will rely on [MetaWeather](https://www.metaweather.com/api/)'s data. It provides endpoints to search for a location from a provided query string and another to fetch the weather report of a location, through its [WOEID](https://en.wikipedia.org/wiki/WOEID) - _Where on Earth ID_.
We have sampled the response for a possible search and location's forecast to simplify our development.

In the `sample` folder, the next examples are available:

* [`search.json`](./src/samples/search.json) - Available locations for the search query `li`;
* [`weatherReports.json`](./src/samples/weatherReports.json) - Weather reports for the locations available in `search.json`.

They can be imported and used in the application:
```JavaScript
import searchSample from "./sample/search.json";
```

The next sections we will further detail the behavior and role of each element of our interface and supply tips in how to proceed.
These tips are only tips and nothing more, feel free to explore Material-UI's components to shape the interface to suit your taste.


## Setting up a layout
Before jumping into more concrete blocks of our application we have to setup a general layout, it will work as the foundations of the interface and split it into sections where we will place the other elements.

[Grid](https://mui.com/components/grid/) from Material-UI is quite handy to achieve such behavior. It creates a wrapper container with 12 columns, allowing a quick establishment of sections with a fixed set of columns for a specified resolution. Grid will adjust its sub-components to fit the current resolution following the provided props.


## Searching for a location
This element consist of an input to type a location.

It will guide our user, displaying suggestions of locations that suit the provide input.

[**Material UI**'s Autocomplete](https://mui.com/components/autocomplete/) component suits this task. It is capable of providing suggestions from a existing source and filtering them to match the input. Also provides a mechanism to establish the behavior for click actions.

## Displaying the forecast for the next few days
Upon selecting a location trough the search, this section should render a set o elements to display the forecast for the next 5 days.

This should display a summary, with the following information:

  * Day of the forecast;
  * Weather forecast, sunny, rainy, etc;
  * Max temperature;
  * Min temperature;

The forecast for the next 5 days can be found in the sample file, `weatherReports.json`, in the attribute `consolidated_weather`.

[Card](https://mui.com/components/cards/) component are simple and effective ways of displaying this kind of information.

## Displaying detailed view for today's forecast
This section should display the details of today's forecast, with all the information available, from current temperature to degree of humidity.


# Next steps
## Fetch data directly from the API
Until now, our forecast comes only from the sample files, but ideally, we should be fetching the data directly from [MetaWeather](https://www.metaweather.com/), but this is where it gets complicated.

MetaWeather API doesn't have [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled, so our browser will refuse to fetch data from it. As a work around, we can use [`local-cors-proxy`](https://github.com/garmeeh/local-cors-proxy#readme) to proxy the request and trick our browser.
```bash
npx local-cors-proxy --origin http://localhost:3000 --proxyUrl https://www.metaweather.com
```

In order to perform request to MetaWeather, [axios](https://github.com/axios/axios#axios) is definitely the right tool for the job.

[react-query](https://github.com/tannerlinsley/react-query#visit-react-querytanstackcom-for-docs-guides-api-and-more) streamlines the usage of axios, so that it works as any other hook.

```bash
npm install axios@0.23.0 react-query@3.27.0
```

Simple example, performing a request to MetaWeather to fetch a locations data through its _woeid_:

```JavaScript
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function ForecastLocationDetails({ woeid }) {
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery(
    ['getLocationForecastDetails', woeid],
    () =>  {
      return axios.get(`http://localhost:8010/proxy/api/location/${woeid}/`)
      .then(({ data } = {}) => data)
    });

  if(isError) {
    return <h3>{error.message}</h3>
  }

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.location_type}</h3>
      <h2>{data.consolidated_weather[0].weather_state_name}</h2>
      <h2>{`${data.consolidated_weather[0].the_temp}º`}</h2>
    </>
  );
}


export default function App() {
  const woeid = "638242" // Berlin

  return (
    <QueryClientProvider client={queryClient}>
      <ForecastLocationDetails woeid={woeid}/>
    </QueryClientProvider>
  )
}
```

## Setting up a map
A map would be a great addition to our weather app. Since MetaWeather provides the latitude and longitude of a location, it would be nice to focus that location on a map.

It would be a bit awkward to make plans for a nice weekend BBQ based on the forecast for [Lisbon, Florida](https://en.wikipedia.org/wiki/Lisbon,_Florida) or some other [Lisbon](https://en.wikipedia.org/wiki/Lisbon_(disambiguation)#United_States), just in the USA.

As you can imagine, there are quite a few components at our disposal, and we suggest the usage of [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl).
It is quite simple to integrate and to display a point at a certain latitude and longitude.
Feel free to play with their [demos](https://alex3165.github.io/react-mapbox-gl/demos) to get a feeling about how it works and look around their [documentation](https://alex3165.github.io/react-mapbox-gl/documentation).
The most important components to focus upon a location would be `ReactMapboxGl`, `Layer` and `Feature`.

We can install it into our project with:
```bash
npm install react-mapbox-gl mapbox-gl
```


In order to use react-mapbox-gl, we will need an accessToken, that we already requested:

```
pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw
```

The snippet bellow we displays how we can create a Map, with the provide accessToken, that will focus upon Lisbon, Portugal and place a small marker:

```JavaScript

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicHNpbHZhaWMiLCJhIjoiY2tobmI5YTRlMDAzbTMxcGV6NDk3ZHNrdCJ9.mpgz1tj9j8cLrhrsZ5hlhw'
});

function MyMap() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[38.725670, -9.150370]} />
      </Layer>
    </Map>
  )
}
```
