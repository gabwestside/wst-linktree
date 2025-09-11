import { ProfileCard } from './components/ProfileCard'
import { profile } from './lib/data'

export default function App() {
  return (
    <div className='min-h-screen w-full bg-neutral-900 text-white'>
      <div
        className='h-40 w-full'
        style={{
          background: `linear-gradient(180deg, ${profile.brand.headerFrom} 0%, ${profile.brand.headerTo} 100%)`,
        }}
      />
      
      <main className='-mt-20 pb-24 flex items-start justify-center px-4'>
        <ProfileCard profile={profile} />
      </main>
      
      <footer className='text-center text-xs text-neutral-400 pb-10'>
        Feito com ❤️ por{' '}
        <a
          href='github.com/gabwestside'
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
