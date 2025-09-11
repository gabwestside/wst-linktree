export function classNames(
  ...xs: (string | false | null | undefined)[]
): string {
  return xs.filter(Boolean).join(' ')
}

export function makeWhatsAppLink(phoneIntl: string, text?: string): string {
  const digits = (phoneIntl || '').replace(/[^0-9]/g, '')
  const base = `https://wa.me/${digits}`

  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
