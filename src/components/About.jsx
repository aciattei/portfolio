import { sobre } from '../data/content'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section bg-ink-900">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <h2 id="sobre-titulo" className="mt-4 text-3xl sm:text-4xl">{sobre.titulo}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {sobre.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-primary pl-5">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">Missão</p>
            <p className="mt-2 text-lg font-semibold text-white">{sobre.missao}</p>
          </blockquote>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {sobre.numeros.map((n) => (
              <div key={n.rotulo} className="flex flex-col-reverse rounded-2xl border border-white/10 bg-ink-800/60 p-4 text-center">
                <dt className="mt-1 text-xs text-slate-400 sm:text-sm">{n.rotulo}</dt>
                <dd className="text-2xl font-extrabold text-primary-light sm:text-3xl">{n.valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div aria-hidden="true" className="absolute -inset-3 -z-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-secondary/10 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
            <ImagePlaceholder alt={sobre.fotoDescricao} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
