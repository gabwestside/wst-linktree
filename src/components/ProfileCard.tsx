import { QrCode } from 'lucide-react'
import { useState, type SetStateAction } from 'react'
import type { Profile } from '../lib/types'
import { LinkRow } from './LinkRow'
import { PixModal } from './PixModal'

interface ProfileCardProps {
  profile: Profile
  onImageLoad?: React.Dispatch<SetStateAction<boolean>>
}

export function ProfileCard({ profile, onImageLoad }: ProfileCardProps) {
  const [pixOpen, setPixOpen] = useState(false)

  return (
    <section className='w-full max-w-xl bg-neutral-900/80 backdrop-blur rounded-3xl shadow-2xl border border-white/10 p-6'>
      <div className='w-full flex justify-center -mt-16'>
        <div className='relative'>
          <img
            onLoad={() => onImageLoad!(false)}
            src={profile.avatar}
            alt={profile.name}
            className='h-28 w-28 rounded-full object-cover ring-4 ring-white/90 shadow-xl'
          />
          <div className='absolute -inset-1 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-lg -z-10' />
        </div>
      </div>

      <div className='mt-4 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          {profile.name}
        </h1>
        <p className='text-sm text-neutral-300 mt-1'>{profile.role}</p>
      </div>

      <p className='text-sm text-neutral-300/90 leading-relaxed text-center mt-5'>
        {profile.about}
      </p>

      <div className='mt-7 space-y-3'>
        {profile.contacts.map((item: (typeof profile.contacts)[0]) => (
          <LinkRow key={item.label} item={item} color={profile.brand} />
        ))}

        <button
          onClick={() => setPixOpen(true)}
          className='w-full group flex items-center gap-3 rounded-2xl px-5 py-4 font-medium shadow-md border border-white/10 hover:opacity-80 transition cursor-pointer'
          style={{ backgroundColor: profile.brand.base }}
        >
          <span className='p-2 rounded-xl bg-white/15'>
            <QrCode className='h-5 w-5' />
          </span>
          <span className='flex-1 text-left'>Pagamento Pix</span>
        </button>
      </div>

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
