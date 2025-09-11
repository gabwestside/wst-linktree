import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react'
import type { Profile } from './types'
import { makeWhatsAppLink } from './utils'

export const profile: Profile = {
  name: 'Gabriel Rodrigues',
  role: 'Desenvolvedor de Software',
  about:
    'Profissional da área de Tecnologia como Desenvolvedor Web Fullstack e prestador de serviços. Para saber mais, entre em contato.',
  avatar: 'src/assets/profile-photo.png',
  brand: {
    base: '#7417EA',
    dark: '#5A12B6',
    headerFrom: '#7417EA',
    headerTo: '#9C27FF',
  },
  contacts: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabriel-moura-706541200/',
      icon: Linkedin,
    },
    {
      label: 'Site Profissional',
      href: 'https://seusite.com',
      icon: Globe,
      soon: true,
    },
    { label: 'GitHub', href: 'https://github.com/gabwestside/', icon: Github },
    {
      label: 'Instagram',
      href: 'https://instagram.com/gabwestside',
      icon: Instagram,
    },
    {
      label: 'WhatsApp',
      href: makeWhatsAppLink(
        '+55 85 99272-9746',
        'Olá! Vim pelo seu cartão de visitas.'
      ),
      icon: MessageCircle,
    },
    { label: 'E‑mail', href: 'mailto:gabrielnfl13@gmail.com', icon: Mail },
  ],
  pix: {
    key: '00020126580014BR.GOV.BCB.PIX01368443eea2-eed6-46af-859b-b614e3f8b8995204000053039865802BR5917Gabriel Rodrigues6009SAO PAULO62140510NN6SVKtEMx6304F4C8',
    qrImage: 'src/assets/pix-qr.jpg',
  },
}
