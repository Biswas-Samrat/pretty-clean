export const businessPhone = "+44 7305 315086";
export const businessPhoneLink = "tel:+447305315086";
export const businessWhatsAppLink = "https://wa.me/447305315086";
export const facebookPageUrl =
  "https://www.facebook.com/profile.php?id=61581179762385";
export const facebookHandle = "Pretty Clean";
export const businessAddress = "Swansea, Wales";

export function createWhatsAppUrl(
  message = "Hi Pretty Clean, I'd like to enquire about a cleaning service.",
) {
  return `${businessWhatsAppLink}?text=${encodeURIComponent(message)}`;
}
