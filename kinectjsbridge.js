/*
	KinectJSBridge


	Client for ThisMightWork

	Written by 2BoysAndHats
*/


var Kinect = function  () {
	this.websocket = null;

	//Event stuff - User will override
	this.onFrame = function () {};
	this.onGesture = function () {};

	(function (p) {
		p.connect = function (url){
			p.websocket = new WebSocket((url || "ws://localhost:8070/kinect"));

			p.websocket.onopen = function () {
				console.log("WebSocket open");
			}

			p.websocket.onerror = function () {
				console.log("WebSocket error");
			}
		}

	})(this);
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