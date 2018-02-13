## Abandonware

# Universe Buckets Blaze Helpers
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

##  License MIT
