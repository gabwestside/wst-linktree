import { useState } from 'react'
import { Loading } from './components/Loading'
import { ProfileCard } from './components/ProfileCard'
import { profile } from './lib/data'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className='min-h-screen w-full bg-neutral-900 text-white'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center h-screen bg-zinc-900 opacity-90 z-50'>
          <Loading />
        </div>
      )}

      <div
        className='h-40 w-full'
        style={{
          background: `linear-gradient(180deg, ${profile.brand.headerFrom} 0%, ${profile.brand.headerTo} 100%)`,
        }}
      />

      <main className='-mt-20 pb-24 flex items-start justify-center px-4'>
        <ProfileCard profile={profile} onImageLoad={setLoading} />
      </main>

      <footer className='text-center text-xs text-neutral-400 pb-10'>
        Feito com ❤️ por{' '}
        <a
          href='https://github.com/gabwestside'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          Gabwestside
        </a>
      </footer>
    </div>
  )
}
