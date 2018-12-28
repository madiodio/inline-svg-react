# inline-svg-react

> Inline your raw svg files with react with a little bit of accessibility

The component will inline your raw SVG file in react with a little bit of accessibility. There are various
solutions that exist but I did this for the main purpose of my needs as I found this simpler. Plus it adds a little bit of accessibilty to the SVG elmenent. See [this post](https://css-tricks.com/accessible-svgs/#article-header-id-6) for further details about SVG accessibility when inlined.

## Install

```console
$ npm install inline-svg-react
# or with yarn
$ yarn add inline-svg-react
```

Note: You need [raw-loader](https://github.com/webpack-contrib/raw-loader) eg. `npm install raw-loader` if you want to [use this with webpack to require your svg files](#usage-with-webpack).

## Usage

Basic example:

```js
import React from "react";
import InlineSVG from "inline-svg-react";

const Icon = '<svg><path d="M13 23h7V8L10 .631 0 8v15h7v-7h6v7z"/></svg>';

export default () => (
  <div>
    <InlineSVG icon={Icon} label="Home" />
  </div>
);
```

...Will output

```html
<span>
  <svg role="img" aria-labelledby="svg-home--01">
    <title id="svg-home--01">Icon - Home</title>
    <path d="M13 23h7V8L10 .631 0 8v15h7v-7h6v7z" />
  </svg>
</span>
```

# Usage with Webpack

Using [raw-loader](https://github.com/webpack-contrib/raw-loader) to load your SVG files.

```js
module.exports = {
  rules: [
    {
      test: /\.svg$/,
      use: "raw-loader"
    }
  ]
};

// With svgo-loader to optimize your svg files:

module.exports = {
  rules: [
    {
      test: /\.svg$/,
      loader: "raw-loader!svgo-loader"
    }
  ]
};
```

...then in your .js file load the svg file as you would:

```js
import React from "react";
import InlineSVG from "inline-svg-react";
import Icon from "./myicon.svg";

export default () => (
  <div>
    <InlineSVG icon={Icon} />
  </div>
);
```

## Options (props)

### icon (Required)

`PropTypes.string`

Your raw SVG element.

### size (Optional)

`PropTypes.number`

Inline-svg-react can adds width and height to your wrapper element to keeps its styling consistent.

### label (Optional)

`PropTypes.string`

The name of your SVG element/file. It will inject in the SVG element this:

```html
<title id="svg-NameOfYourSVGElement--01">Icon - NameOfYourSVGElement</title>
```

### ...rest

Everything else you would like pass to the wrapper element (`span` in this instance) like `style`, `className`, etc...

---

## Inspirations and Altenatives

- [react-svg-inline](https://github.com/MoOx/react-svg-inline)
- [svg-inline-react](https://github.com/sairion/svg-inline-react)

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
