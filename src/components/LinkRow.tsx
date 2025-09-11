import type { JSX } from 'react'
import type { Brand, Contact } from '../lib/types'

interface LinkRowProps {
  item: Contact
  color: Brand
}

export function LinkRow({ item, color }: LinkRowProps): JSX.Element {
  const Icon = item.icon
  const baseCls =
    'w-full group flex items-center gap-3 rounded-2xl px-5 py-4 font-medium shadow-md border border-white/10 focus:outline-none hover:opacity-80 transition'
  const style: React.CSSProperties = { backgroundColor: color.base }

  if (item.soon) {
    return (
      <div
        role='button'
        aria-disabled='true'
        className={`${baseCls} cursor-not-allowed opacity-60`}
        style={style}
        title={item.soonLabel ?? 'Em breve 🚧🔜'}
      >
        <span className='p-2 rounded-xl bg-white/15'>
          <Icon className='h-5 w-5' />
        </span>
        <span className='flex-1 text-left'>{item.label}</span>
        <span className='text-[11px] uppercase tracking-wide font-semibold px-2 py-1 rounded-full bg-black/20 border border-white/10'>
          {item.soonLabel ?? 'Em breve 🚧🔜'}
        </span>
      </div>
    )
  }

  return (
    <a
      href={item.href || '#'}
      target='_blank'
      rel='noreferrer noopener'
      className={`${baseCls} focus:ring-4 focus:ring-white/20`}
      style={style}
    >
      <span className='p-2 rounded-xl bg-white/15'>
        <Icon className='h-5 w-5' />
      </span>
      <span className='flex-1 text-left'>{item.label}</span>
    </a>
  )
}
