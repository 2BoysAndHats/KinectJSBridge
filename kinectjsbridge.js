/*
	KinectJSBridge


	Client for ThisMightWork

	Written by 2BoysAndHats
*/


var Kinect = function  () {
	this.websocket = null;

}


Kinect.HAND_STATES = ["unknown","notTracked","open","closed","lasso"];

Kinect.FRAME_WIDTH = 1920;
Kinect.FRAME_HEIGHT = 1080;


Kinect.scaleX = function (x) {
	(Kinect.FRAME_WIDTH / screen.width) * x;
}

Kinect.scaleY = function (y) {
	(Kinect.FRAME_HEIGHT / screen.height) * y;
}	