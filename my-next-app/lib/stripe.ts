import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  // In development this will just log; in production you should configure the env var.
  console.warn("[stripe] STRIPE_SECRET_KEY is not set. Stripe will not work.");
}

export const stripe =
  STRIPE_SECRET_KEY != null
    ? new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
      })
    : null;

