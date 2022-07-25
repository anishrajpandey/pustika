import twilio from "twilio";
export default async function handler(req, res) {
  if (req.method==='POST') {
    const { from, to, message } = JSON.parse(req.body);
    // console.log(to, from, message);
    

    let twilloSDK = twilio(
      "AC97181b56bf15b8c78ad76a0e18e17a38",
      "8cd8b43101f0e8f629cf426633d8393d"
    );
    twilloSDK.messages
      .create({
        from,
        to,
        body:message,
      })
      .then((response) => {
       
        res.json({ response });
      })
      .catch((err) => {
        res.json({ err });
      });
  } else {
    res.json({ err: "ERROR" });
  }
}
