import { Check, Copy, QrCode } from 'lucide-react'
import { useState } from 'react'
import type { Brand, Pix } from '../lib/types'
import { classNames } from '../lib/utils'

interface PixModalProps {
  onClose: () => void
  brand: Brand
  pix: Pix
}

export function PixModal({ onClose, brand, pix }: PixModalProps) {
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
