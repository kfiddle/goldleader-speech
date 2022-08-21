import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { jsPDF } from "jspdf";

const Dictaphone = () => {
  const printFood = () => {
    console.log("some good food");
  };
  const commands = [
    {
      command: "I would like to order",
      callback: printFood,
    },
  ];

  const generatePDF = () => {
    let doc = new jsPDF("p", "pt");
    // doc.text(20, 200, "PDF stands for Personal Display of Flatulence.");
    // doc.text(20, 20, transcript);
    // doc.save("zanyGold.pdf");

    doc.text(
      20,
      20,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
    doc.save("zanyGold.pdf");
  };

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const listenAway = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const generateBlob = async () => {
    const blob = new Blob(["Welcome to Websparrow.org."], {
      // type: "text/plain;charset=utf-8",
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    const blobText = await blob.text();
    console.log(blobText);
  };

  // var blob = new Blob(["Welcome to Websparrow.org."],
  // { type: "text/plain;charset=utf-8" });
  // const fileDownloadUrl = URL.createObjectURL(blob);

  return (
    <div>
      <button onClick={listenAway}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <div style={{ background: "white", color: "black" }}>{transcript}</div>
      <button onClick={generateBlob}>GENERATE DOC</button>
    </div>
  );
};
export default Dictaphone;
