import { contato, ctaFinal, linkWhatsApp } from '../data/content'
import { Icon, WhatsAppIcon } from './Icons'
import Reveal from './Reveal'

export default function FinalCTA() {
  return (
    <section id="contato" aria-labelledby="cta-titulo" className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-black/20 blur-2xl" />

      <Reveal className="container-site relative text-center">
        <h2 id="cta-titulo" className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl">{ctaFinal.titulo}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white">{ctaFinal.texto}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn w-full bg-ink-950 px-8 py-4 text-lg text-white hover:bg-ink-800 sm:w-auto">
            {ctaFinal.ctaPrincipal}
          </a>
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn w-full bg-white px-8 py-4 text-lg text-ink-950 hover:bg-slate-100 sm:w-auto">
            <WhatsAppIcon className="h-5 w-5 text-[#128C7E]" />
            Contato
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-white">
          <Icon name="mail" className="h-5 w-5" />
          ou escreva para{' '}
          <a href={`mailto:${contato.email}`} className="font-bold underline underline-offset-4 hover:no-underline">
            {contato.email}
          </a>
        </p>
      </Reveal>
    </section>
  )
}
