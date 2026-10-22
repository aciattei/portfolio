import { useEffect, useState } from 'react'
import { navegacao } from '../data/content'
import { Icon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white">
        Pular para o conteúdo
      </a>
      <nav aria-label="Navegação principal" className="container-site flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-extrabold text-white" aria-label="Freelancer — ir para o início">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">F</span>
          Freelancer
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navegacao.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-primary-light">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#depoimentos" className="btn-ghost hidden !px-5 !py-2 text-sm lg:inline-flex">
          Veja nossos projetos
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-7 w-7" />
        </button>
      </nav>

      <div id="menu-mobile" hidden={!open} className="border-t border-white/10 bg-ink-950 lg:hidden">
        <ul className="container-site flex flex-col gap-1 py-4">
          {navegacao.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-slate-200 hover:bg-white/5 hover:text-primary-light">
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#depoimentos" onClick={() => setOpen(false)} className="btn-ghost w-full">
              Veja nossos projetos
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
