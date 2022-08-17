import twilio from "twilio";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { from, to, message } = JSON.parse(req.body);

    console.log(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

    let twilloSDK = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
    let tres = await twilloSDK.messages.create({
      from,
      to,
      body: message,
    });
    res.status(200).json(tres);
    console.log(tres);
  } else {
    res.json({ err: "ERROR" });
  }
}
// hg gfd dfdgr
