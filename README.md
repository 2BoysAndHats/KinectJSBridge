# KinectJSBridge
####The ThisMightWork client (A Kinect data streaming API for Windows)


This is the client half of the ThisMightWork library. This a JavaScript library that enables web devlopers to devlop applications that use Kinect body tracking technology super easily.

It also has an easy to use syntax. This is all the code you need to get started:

```
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

For more detail, see the documentation.

## Installation
Simply follow the [server setup instructions](https://github.com/2BoysAndHats/ThisMightWork/blob/master/README.md), launch the new ThisMightWork app, and open a demo in your browser!

## Documentation
Plese see the [wiki](https://github.com/2BoysAndHats/KinectJSBridge/wiki)
