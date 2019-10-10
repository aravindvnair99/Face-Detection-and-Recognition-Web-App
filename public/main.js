const video = document.getElementById('live_preview');

Promise.all([
	faceapi.nets.ageGenderNet.loadFromUri('/models'),
	faceapi.nets.faceExpressionNet.loadFromUri('/models'),
	faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
	faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
	faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
	faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
	faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
	faceapi.nets.mtcnn.loadFromUri('/models')
]).then(startVideo);

function startVideo() {
	navigator.getUserMedia(
		{ video: {} },
		stream => (video.srcObject = stream),
		err => console.error(err)
	);
}

video.addEventListener('play', () => {
	console.info('Playing');
});
