import jsQR from "jsqr";

const video = document.getElementById("video") as HTMLVideoElement;
const resultDiv = document.getElementById("result");
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const checkbox = document.getElementById("checkbox");

const width = parseInt(canvas.style.width!);
const height = parseInt(canvas.style.height!);
canvas.width = width;
canvas.height = height;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function successCallback(stream: MediaStream){
    if (window.webkitURL) {
        video.src = window.webkitURL.createObjectURL(stream);
    } else if (video.mozSrcObject !== undefined) {
        video.mozSrcObject = stream;
    } else {
        video.src = stream;
    }
}

function errorCallback(){}

if (navigator.getUserMedia){

    navigator.getUserMedia({video: true}, successCallback, errorCallback);
    requestAnimationFrame(tick);
}

function tick(){
    requestAnimationFrame(tick);
    if (video.readyState === video.HAVE_ENOUGH_DATA){
        // Load the video onto the canvas
        context.drawImage(video, 0, 0, width, height);
        // Load the image data from the canvas
        const imageData = context.getImageData(0, 0, width, height);
        if (checkbox.checked) { // We want to extract the location of the QR code, so use the seperate functions
            const binarizedImage = jsQR.binarizeImage(imageData.data, imageData.width, imageData.height);
            const location = jsQR.locateQRInBinaryImage(binarizedImage);
            if(!location){
                resultDiv.innerHTML = "<div style='color: red; margin:15px;'>No QR Decoded</div>";
                return;
            }
            const rawQR = jsQR.extractQRFromBinaryImage(binarizedImage, location);
            if (!rawQR) {
                resultDiv.innerHTML = "<div style='color: red; margin:15px;'>No QR Decoded</div>";
                return;
            }
            decoded = jsQR.decodeQR(rawQR)
            if(decoded) {
                resultDiv.innerHTML = "<div style='color: green; margin:15px;'>QR Decoded! <span style='color: #000;'>"+decoded+"</span></div>"
                context.beginPath();
                context.moveTo(location.bottomLeft.x, location.bottomLeft.y);
                context.lineTo(location.topLeft.x, location.topLeft.y);
                context.lineTo(location.topRight.x, location.topRight.y);
                context.lineWidth = 8;
                context.strokeStyle = "green";
                context.stroke();
            } else {
                resultDiv.innerHTML = "<div style='color: red; margin:15px;'>No QR Decoded</div>"
            }
        } else { // We just want to parse the QR code, so we can use the wrapper function
            const decoded = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height);
            if(decoded) {
                resultDiv.innerHTML = "<div style='color: green; margin:15px;'>QR Decoded! <span style='color: #000;'>"+decoded+"</span></div>"
            } else {
                resultDiv.innerHTML = "<div style='color: red; margin:15px;'>No QR Decoded</div>"
            }
        }
    }
}
