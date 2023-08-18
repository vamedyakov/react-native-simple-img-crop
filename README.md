# react-native-simple-img-crop

Image crop Native module for React Native.

## Getting started

### Install

`yarn add react-native-simple-img-crop`

or

`npm install react-native-simple-img-crop --save`

### Install Pods

`npx pod-install`

## Usage

Start by importing the library:

```javascript
import {cropImage} from "react-native-simple-img-crop";
```

### Crop image

Crop the image specified by the URI param. If URI points to a remote image, it will be downloaded automatically. If the image cannot be loaded/downloaded, the promise will be rejected.

If the cropping process is successful, the resultant cropped image will be stored in the cache path, and the URI returned in the promise will point to the image in the cache path. Remember to delete the cropped image from the cache path when you are done with it.

```javascript
  cropImage(uri, cropData).then(url => {
    console.log("Cropped image uri", url);
  })
```

### cropData
| Property      | Required | Description                                                                                                                |
|---------------|----------|----------------------------------------------------------------------------------------------------------------------------|
| `offset`      | Yes      | The top-left corner of the cropped image, specified in the original image's coordinate space                               |
| `size`        | Yes      | Size (dimensions) of the cropped image                                                                                     |
| `displaySize` | No       | Size to which you want to scale the cropped image                                                                          |
| `resizeMode`  | No       | Resizing mode to use when scaling the image (iOS only, android resize mode is always 'cover') **Default value**: 'contain' |

```javascript
  cropData = {
    offset: {x: number, y: number},
    size: {width: number, height: number},
    displaySize: {width: number, height: number},
    resizeMode: 'contain' | 'cover' | 'stretch',
  };
```
