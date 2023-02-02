const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", async (req, res) => {
//   await stripe.paymentIntents.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         console.log(stripeErr);
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

router.post("/payment", async (req, res) => {
  try {
    const source = await stripe.sources.create({
      type: "card",
      token: req.body.tokenId,
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      source: source.id,
    });
    res.status(200).json(paymentIntent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
