import type { PlanType, SubscriptionPlan } from "../components/SubscriptionCard";

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "daily",
    name: "Daily Delivery",
    tagline: "A fresh arrangement on your doorstep every single day.",
    price: 89,
    priceSuffix: "/week, billed monthly",
    description:
      "For ritual-lovers and homebodies. Receive a compact arrangement tailored to high rotation and easy composting.",
    highlight: true,
  },
  {
    id: "weekly",
    name: "Weekly Delivery",
    tagline: "A new arrangement every week to refresh your space.",
    price: 48,
    priceSuffix: "/week, billed monthly",
    description:
      "Our most popular plan. Designed to last 5–7 days with premium stems and a considered color story.",
  },
  {
    id: "monthly",
    name: "Monthly Delivery",
    tagline: "A statement arrangement once a month.",
    price: 95,
    priceSuffix: "/month",
    description:
      "Perfect for gifting or marking new seasons. Includes premium blooms and an elevated vessel pairing.",
  },
];

export function getPlanById(id: PlanType | string | null | undefined) {
  if (!id) return null;
  return subscriptionPlans.find((plan) => plan.id === id) ?? null;
}

