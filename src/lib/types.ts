import type { LucideIcon } from 'lucide-react'

export type Profile = {
  name: string
  role: string
  about: string
  avatar: string
  brand: Brand
  contacts: Contact[]
  pix: Pix
}

export type Brand = {
  base: string
  dark: string
  headerFrom: string
  headerTo: string
}

export type Contact = {
  label: string
  href?: string
  icon: LucideIcon
  soon?: boolean
  soonLabel?: string
}

export type Pix = {
  key: string
  qrImage?: string
}
