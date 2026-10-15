import {
  Home,
  Sparkles,
  Check,
  Building2,
  BriefcaseBusiness,
  Sofa,
} from "lucide-react";

export const services = [
  {
    id: "regular-cleaning",
    title: "Regular Cleaning",
    shortDescription:
      "Reliable domestic cleaning designed to make everyday life easier.",
    description:
      "Reliable domestic cleaning designed to make everyday life easier. Pretty Clean takes care of the chores so you can enjoy a fresher, more comfortable home.",
    icon: "Home",
    image: "/photo/House%20Cleans.png",
    suitableFor: [
      "Weekly cleaning",
      "Fortnightly cleaning",
      "Busy households",
      "Keeping your home fresh",
      "More free time",
    ],
    benefits: [
      "Reliable local service",
      "Attention to detail",
      "Professional finish",
      "Friendly and trustworthy team",
    ],
    accent: "purple",
    price: "Quote based on property",
    priceNote: "Tailored to your home",
  },

  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "A detailed top-to-bottom clean focused on the areas that need extra attention.",
    description:
      "A detailed clean for homes that need extra attention. Pretty Clean works through the areas that are often overlooked to leave your home feeling fresh, cared for and thoroughly cleaned.",
    icon: "Sparkles",
    image: "/photo/Deep%20Cleans.png",
    suitableFor: [
      "Seasonal refresh",
      "Homes needing extra attention",
      "A full reset",
      "Before or after important occasions",
    ],
    benefits: [
      "Detailed cleaning",
      "Oversight of overlooked areas",
      "Thorough finish",
      "Personalised service",
    ],
    accent: "teal",
    price: "From £195",
    priceNote: "Personalised to your home",
  },

  {
    id: "monthly-deep-clean",
    title: "Monthly Deep Clean",
    shortDescription:
      "A full-house deep clean designed for clients who want their home refreshed on a regular monthly basis.",
    description:
      "Monthly Club • A full-house deep clean designed for clients who want their home thoroughly refreshed on a regular monthly basis.",
    icon: "Check",
    image: "/photo/Deep%20Cleans.png",
    suitableFor: [
      "Monthly refresh",
      "Busy households",
      "Seasonal upkeep",
      "A more detailed regular clean",
    ],
    benefits: [
      "Full-house deep cleaning",
      "Everything needed brought along",
      "Limited availability",
      "Professional finish",
    ],
    accent: "coral",
    price: "From £195",
    priceNote: "5–6 hours • Waiting list availability",
  },

  {
    id: "airbnb-changeovers",
    title: "Airbnb Changeovers",
    shortDescription:
      "Guest-ready cleaning for holiday lets and short-term rentals.",
    description:
      "Pretty Clean provides professional Airbnb changeover cleaning designed to leave properties guest-ready every time. We help hosts create a smooth, polished first impression from the moment guests arrive.",
    icon: "Building2",
    image: "/photo/End%20of%20Tenancy%20Cleans.png",
    suitableFor: [
      "Holiday lets",
      "Airbnb hosts",
      "Short-term rentals",
      "Guest-ready turnovers",
    ],
    benefits: [
      "Fresh, hotel-standard presentation",
      "Bathrooms cleaned to a high standard",
      "Kitchens left sparkling",
      "Reliable communication",
    ],
    accent: "purple",
    price: "Quote based on property",
    priceNote: "Swansea and surrounding areas",
  },

  {
    id: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    shortDescription:
      "Thorough cleaning designed to leave a property fresh, clean and ready for its next chapter.",
    description:
      "Thorough end-of-tenancy cleaning designed to leave a property clean, fresh and ready for its next chapter.",
    icon: "Home",
    image: "/photo/End%20of%20Tenancy%20Cleans.png",
    suitableFor: [
      "Moving out",
      "Rental property handover",
      "End of tenancy",
      "Preparing for inspection",
    ],
    benefits: [
      "Thorough property cleaning",
      "Professional finish",
      "Attention to detail",
      "Tailored to the property",
    ],
    accent: "teal",
    price: "Quote based on property",
    priceNote: "Tailored to your property",
  },

  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDescription:
      "Professional cleaning for offices, communal areas, staff kitchens and washrooms.",
    description:
      "Professional early-morning office cleaning throughout Swansea. Pretty Clean support busy workplaces with reliable cleaning schedules and a friendly, personal service.",
    icon: "BriefcaseBusiness",
    image: "/photo/House%20Cleans.png",
    suitableFor: [
      "Offices",
      "Staff kitchens",
      "Toilets and washrooms",
      "Communal areas",
    ],
    benefits: [
      "Daily or weekly cleaning",
      "Fully insured",
      "DBS checked",
      "Bespoke cleaning plans",
    ],
    accent: "coral",
    price: "Quote based on site",
    priceNote: "Swansea and surrounding areas",
  },

  {
    id: "cleaning-extras",
    title: "Cleaning Extras",
    shortDescription:
      "Add those extra jobs to your regular clean for a complete refresh.",
    description:
      "Fancy adding a little something extra to your regular clean? Whether you're preparing for guests or giving your home a seasonal refresh, we're happy to help.",
    icon: "Sofa",
    image: "/photo/House%20Cleans.png",
    suitableFor: [
      "Fridge refresh",
      "Inside window cleaning",
      "Bathroom deep clean refresh",
      "Skirting and sofa refresh",
    ],
    benefits: [
      "Affordable add-ons",
      "Tailored extras",
      "Flexible service",
      "Premium finish",
    ],
    accent: "purple",
    price: "From £20",
    priceNote: "Prices vary by job",
  },
];

export const serviceIcons = {
  Home,
  Sparkles,
  Check,
  Building2,
  BriefcaseBusiness,
  Sofa,
};
