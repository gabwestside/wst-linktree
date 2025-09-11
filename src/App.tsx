import {
  Check,
  Copy,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  QrCode,
} from 'lucide-react'
import { useState } from 'react'

/**
 * Cartão de visita estilo Linktree
 * - TailwindCSS para estilos (leve e responsivo)
 * - Ícones via lucide-react
 * - Suporte a PIX (chave + modal de QR)
 *
 * Como usar:
 * 1) Garanta que seu app tenha Tailwind configurado.
 * 2) Coloque este componente em src/App.jsx (ou importe onde preferir).
 * 3) Edite o objeto `profile` com seus dados e links.
 */

const profile = {
  name: 'Nicholas Timbó Nogueira',
  role: 'Desenvolvedor de Software',
  about:
    'Profissional da área de Tecnologia como Desenvolvedor Web Fullstack e prestador de serviços. Para saber mais, entre em contato.',
  avatar:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=facearea&facepad=2&h=400',
  // cor principal (ajuste à sua paleta)
  brand: {
    base: '#7417EA', // botões
    dark: '#5A12B6', // hover
    headerFrom: '#7417EA',
    headerTo: '#9C27FF',
  },
  contacts: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seu-usuario',
      icon: Linkedin,
    },
    {
      label: 'Site Profissional',
      href: 'https://seusite.com',
      icon: Globe,
    },
    { label: 'GitHub', href: 'https://github.com/seu-usuario', icon: Github },
    {
      label: 'Instagram',
      href: 'https://instagram.com/seu-usuario',
      icon: Instagram,
    },
    { label: 'E‑mail', href: 'mailto:seuemail@dominio.com', icon: Mail },
  ],
  // PIX – use a sua chave e, opcionalmente, um QR local em /public/pix-qr.png
  pix: {
    key: '00020126360014BR.GOV.BCB.PIX0114+559999999999520400005303986540510.005802BR5925NICHOLAS TIMBO NOGUEIRA6009FORTALEZA62070503***6304ABCD',
    qrImage: '/pix-qr.png', // coloque um arquivo em public/pix-qr.png se quiser ver o QR
  },
}

function classNames(...xs) {
  return xs.filter(Boolean).join(' ')
}

export default function App() {
  return (
    <div className='min-h-screen w-full bg-neutral-900 text-white'>
      {/* faixa superior */}
      <div
        className='h-40 w-full'
        style={{
          background: `linear-gradient(180deg, ${profile.brand.headerFrom} 0%, ${profile.brand.headerTo} 100%)`,
        }}
      />

      {/* centro */}
      <main className='-mt-20 pb-24 flex items-start justify-center px-4'>
        <ProfileCard profile={profile} />
      </main>

      {/* rodapé */}
      <footer className='text-center text-xs text-neutral-400 pb-10'>
        Feito com ❤️ em React & Tailwind
      </footer>
    </div>
  )
}

function ProfileCard({ profile }: { profile: typeof profile }) {
  const [pixOpen, setPixOpen] = useState(false)

  return (
    <section className='w-full max-w-xl bg-neutral-900/80 backdrop-blur rounded-3xl shadow-2xl border border-white/10 p-6'>
      {/* avatar */}
      <div className='w-full flex justify-center -mt-16'>
        <div className='relative'>
          <img
            src={profile.avatar}
            alt={profile.name}
            className='h-28 w-28 rounded-full object-cover ring-4 ring-white/90 shadow-xl'
          />
          <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-lg -z-10' />
        </div>
      </div>

      {/* header */}
      <div className='mt-4 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          {profile.name}
        </h1>
        <p className='text-sm text-neutral-300 mt-1'>{profile.role}</p>
      </div>

      {/* about */}
      <p className='text-sm text-neutral-300/90 leading-relaxed text-center mt-5'>
        {profile.about}
      </p>

      {/* links */}
      <div className='mt-7 space-y-3'>
        {profile.contacts.map((item: typeof profile.contacts[0]) => (
          <LinkRow key={item.label} item={item} color={profile.brand} />
        ))}

        {/* PIX */}
        <button
          onClick={() => setPixOpen(true)}
          className='w-full group flex items-center gap-3 rounded-2xl px-5 py-4 font-medium shadow-md border border-white/10'
          style={{ backgroundColor: profile.brand.base }}
        >
          <span className='p-2 rounded-xl bg-white/15'>
            <QrCode className='h-5 w-5' />
          </span>
          <span className='flex-1 text-left'>Pagamento Pix</span>
          <span className='opacity-70 group-hover:opacity-100 transition'>
            ➡
          </span>
        </button>
      </div>

      {/* Modal PIX */}
      {pixOpen && (
        <PixModal
          onClose={() => setPixOpen(false)}
          brand={profile.brand}
          pix={profile.pix}
        />
      )}
    </section>
  )
}

function LinkRow({ item, color }: { item: typeof profile.contacts[0]; color: typeof profile.brand }) {
  const Icon = item.icon
  return (
    <a
      href={item.href}
      target='_blank'
      rel='noreferrer noopener'
      className='w-full group flex items-center gap-3 rounded-2xl px-5 py-4 font-medium shadow-md border border-white/10 focus:outline-none focus:ring-4 focus:ring-white/20'
      style={{ backgroundColor: color.base }}
    >
      <span className='p-2 rounded-xl bg-white/15'>
        <Icon className='h-5 w-5' />
      </span>
      <span className='flex-1 text-left'>{item.label}</span>
      <span className='opacity-70 group-hover:opacity-100 transition'>↗</span>
    </a>
  )
}

function PixModal({ onClose, brand, pix }: { onClose: () => void; brand: typeof profile.brand; pix: typeof profile.pix }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pix.key)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='fixed inset-0 z-50 grid place-items-center p-4 bg-black/60'>
      <div className='w-full max-w-md rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden'>
        <div
          className='h-2 w-full'
          style={{
            background: `linear-gradient(90deg, ${brand.headerFrom}, ${brand.headerTo})`,
          }}
        />
        <div className='p-6'>
          <h2 className='text-lg font-semibold flex items-center gap-2'>
            <QrCode className='h-5 w-5' /> PIX
          </h2>
          <p className='mt-2 text-sm text-neutral-300'>
            Escaneie o QR ou copie a chave abaixo.
          </p>

          <div className='mt-4 grid place-items-center'>
            {pix.qrImage ? (
              <img
                src={pix.qrImage}
                alt='QR Code PIX'
                className='h-48 w-48 rounded-xl border border-white/10 object-contain bg-white'
              />
            ) : (
              <div className='h-48 w-48 grid place-items-center rounded-xl border border-dashed border-white/20 text-xs text-neutral-400'>
                Adicione um arquivo em{' '}
                <code className='mx-1'>public/pix-qr.png</code>
              </div>
            )}
          </div>

          <div className='mt-4 flex items-center gap-2'>
            <code className='flex-1 text-xs md:text-[13px] break-all bg-neutral-800 border border-white/5 rounded-xl px-3 py-3'>
              {pix.key}
            </code>
            <button
              onClick={handleCopy}
              className={classNames(
                'inline-flex items-center gap-2 rounded-xl px-3 py-3 border border-white/10 text-sm font-medium',
                'hover:opacity-90 transition'
              )}
              style={{ backgroundColor: brand.base }}
            >
              {copied ? (
                <Check className='h-4 w-4' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>

          <div className='mt-6 flex justify-end gap-2'>
            <button
              onClick={onClose}
              className='rounded-xl px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5'
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
