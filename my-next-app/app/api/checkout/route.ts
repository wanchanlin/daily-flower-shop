import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";
import { getPlanById } from "../../../lib/subscriptions";

// TODO: Replace these with your real Stripe Price IDs
const STRIPE_PRICE_IDS: Record<string, string> = {
  daily: "price_daily_placeholder",
  weekly: "price_weekly_placeholder",
  monthly: "price_monthly_placeholder",
};

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured on the server." },
      { status: 500 },
    );
  }

  const formData = await req.formData();
  const planId = formData.get("planId")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";

  const plan = getPlanById(planId);

  if (!plan) {
    return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const priceId = STRIPE_PRICE_IDS[plan.id];

  if (!priceId || priceId.endsWith("_placeholder")) {
    return NextResponse.json(
      {
        error:
          "Stripe price IDs are not configured. Update STRIPE_PRICE_IDS in app/api/checkout/route.ts.",
      },
      { status: 500 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${req.nextUrl.origin}/account?status=success`,
      cancel_url: `${req.nextUrl.origin}/subscribe?plan=${plan.id}`,
      metadata: {
        planId: plan.id,
      },
    });

    if (!session.url) {
      throw new Error("No session URL returned from Stripe.");
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    console.error("[stripe] checkout error", error);
    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 },
    );
  }
}

