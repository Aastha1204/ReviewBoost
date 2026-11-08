/** Contact and payment details used by the ReviewBoost demo. Replace with your own before going live. */

export const CONTACT = {
  phone: "+918691969772",
  whatsapp: "918691969772", // country code, no +
};

export const PAYMENTS = {
  upiId: "8691969772@superyes",
  payeeName: "Neovia AI",
  note: "Pay only after we have agreed the written scope and quote. 50% to start, 50% on delivery.",
};

export function upiLink(amount?: number) {
  const p = new URLSearchParams({ pa: PAYMENTS.upiId, pn: PAYMENTS.payeeName, cu: "INR", tn: "ReviewBoost payment" });
  if (amount && amount > 0) p.set("am", String(amount));
  return `upi://pay?${p.toString()}`;
}
