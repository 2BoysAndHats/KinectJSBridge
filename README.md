# KinectJSBridge
#### The ThisMightWork client (A Kinect data streaming API for Windows)


This is the client half of the ThisMightWork library. (You can find the server half [here](https://github.com/2BoysAndHats/ThisMightWork)) This a JavaScript library that enables web developers to develop applications that use Kinect body tracking technology super easily.

(Note: gestures only work with the closest user)

It also has an easy to use syntax. This is all the code you need to get started:

```js
var kinect = new Kinect();
kinect.connect();

kinect.onFrame = function (frame) {
  console.log(frame);
}	

kinect.onGesture = function (gesture){
  console.log(Kinect.GESTURE_TYPES[gesture.GestureType])
}
```
(remembering to include the kinectjsbridge.js library!)
(This sample was taken from the [logger demo](https://github.com/2BoysAndHats/KinectJSBridge/blob/master/demos/loggerDemo/index.html))

For more detail, see the documentation.

## Installation
Simply follow the [server setup instructions](https://github.com/2BoysAndHats/ThisMightWork/blob/master/README.md#installation), launch the new ThisMightWork app, and open a demo in your browser!

(Note: on some browsers, you may have to run a server to stop permission with the images)

## Documentation
Plese see the [wiki](https://github.com/2BoysAndHats/KinectJSBridge/wiki)
