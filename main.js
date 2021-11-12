prediction_1 = ""; prediction_2 = "";
Webcam.attach("#camera");
Web_Cam = document.getElementById("camera");
Webcam.set({ width: 350, height: 300, image_format: "png", png_quality: 90 });
function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("answer").innerHTML =
      '<img id="selfie_image" src="' + data_uri + '">';
  });
}
classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/7olFx_JrI/model.json",
  modelLoaded
);
function check() {
  img = document.getElementById("selfie_image");
  classifier.classify(img, gotResult);
}
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered  by
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML =results[1].label;
    
  }
}
function modelLoaded() {
  console.log("Model Loaded!");
}

