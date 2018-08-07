<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe Buckets Blaze Helpers
</h1>

&nbsp;

<h3 align="center">
  -- Abandonware. This package is deprecated! --
</h3>

&nbsp;

Sets of helpers that improves work with buckets in blaze templates

## Installation
```sh
$ meteor universe:buckets-blaze-helpers
```

## How to use

```js
import attachBucketToTemplate from 'meteor/universe:buckets-blaze-helpers';

// You can attach a few bucket as well (by multiple calling)
attachBucketToTemplate(Template.my, myBucket); //or Template.my.attachBucket(myBucket)
```

In your template you will be have available under bucketName
helpers like: `getDocs, getDoc, getCount, ready, subscriptionId, subscriptionHash, isStatic`

example:

```html
<template name="my">
    <p>subId: {{myBucket.subscriptionId}}</p>
    <p>isReady: {{myBucket.ready}}</p>
    <p>count: {{myBucket.getCount}}</p>
</template>
```

## License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe Buckets Blaze Helpers is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
