# &lt;tumblr-feed&gt;
Web Component for easily getting a Tumblr blog JSON feed.

## Install as Bower package
```
$ bower install tumblr-feed
```

then in the head of yout HTML file you can import one of these two scripts

```html
<!-- Polyfill included version -->
<script src="bower_components/tumblr-feed/tumblr-feed-polyfill.js"></script>
<!-- Clean version -->
<script src="bower_components/tumblr-feed/tumblr-feed.js"></script>
```

## Install as NPM package
work in progress

<!--
```
$ yarn add tumblr-feed
```

then inside your JS files you can include it

```js
import {TumblrFeed} from 'tumblr-feed';
```

if you need to add the polyfill in your JS bundle add this line **before** importing the tumblr-feed Component

```js
import 'skatejs-web-components';
```

-->

## How to use
The bare minimum to have it working is to write the tag with the "blog" attribute set:

```html
<tumblr-feed blog="staff"></tumblr-feed>
```

and then in your Javascript file

```js
function tumblr(data){
  console.log(data) // the data returned from the specified blog
}
```

## Options
|Property|Type|Default|Required|Description|
|--------|----|-------|--------|---|
|blog|String|"staff"|true| the name of the blog you want to load data from (example: **staff**.tumblr.com)|
|callback|String|"tumblr"|false|the name of the callback function that will be executed on loading the feed|
|posts|Number|10|false| the number of posts to get, **maximum 50**|

## Limitations / project purpose
This Feed APIs are **really bad designed** by Tumblr, so all limitations like max number of posts and the callback function exposed as a global one cannot be overridden.

The purpose of this web component is to quickly retrieve one or more Tumblr blogs feed (in JSON format) for simple projects.

If you need deeper integration with Tumblr inside an application you should definetely look for the [official APIs](https://www.tumblr.com/docs/en/api/v2).


## License
Distributed under the [Apache 2.0](LICENSE) license.
