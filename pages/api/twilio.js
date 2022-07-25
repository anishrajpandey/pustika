import twilio from "twilio";
export default async function handler(req, res) {
  if (req.method==='POST') {
    const { from, to, message } = JSON.parse(req.body);
    // console.log(to, from, message);
    

    let twilloSDK = twilio(
      process.env.TWILIO_SID, 
      process.env.TWILIO_AUTH
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
