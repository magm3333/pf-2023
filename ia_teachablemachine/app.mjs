//npm install @sashido/teachablemachine-node
import TeachableMachine from "@sashido/teachablemachine-node";

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/NJQ0pC-jz/"
});

model.classify({
  imageUrl: "file://img/magm.png",
}).then((predictions) => {
  console.log("Predictions:", predictions);
}).catch((e) => {
  console.log("ERROR", e);
});