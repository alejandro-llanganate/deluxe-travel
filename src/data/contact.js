export const WHATSAPP_NUMBER = '593987917055'
export const PHONE_DISPLAY = '0987917055'
export const PHONE_TEL = '+593987917055'

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function getDepositAmount(price) {
  return Math.ceil(price * 0.5)
}
