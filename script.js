const turnOnCameraBtn = document.querySelector('#turn-on-camera-btn');
const takePicBtn = document.querySelector('#picture-btn');
const statusBar = document.querySelector('#status-message');

if ('mediaDevices' in navigator) {
  turnOnCameraBtn.addEventListener('click', turnCameraOn);
}

async function turnCameraOn() {
  const constraints = {
    video: { with: 200, height: 300 },
  };

  const md = navigator.mediaDevices;

  try {
    const stream = await md.getUserMedia(constraints);
    console.log('We got a stream object', stream);

    const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
    let blob = await imageCapture.takePhoto();
    takenPicture.src = URL.createObjectURL(blob);
  } catch (error) {
    statusBar.innerHTML = 'Failed to get video!';
    console.log('Failed to get video.' + error.message);
  }
}
