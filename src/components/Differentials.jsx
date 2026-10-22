import { diferenciais, linkWhatsApp } from '../data/content'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Differentials() {
  const { principal } = diferenciais
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-titulo" className="section bg-ink-900">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Diferenciais</p>
          <h2 id="diferenciais-titulo" className="mt-4 text-3xl sm:text-4xl">{diferenciais.titulo}</h2>
          <p className="mt-4 text-lg">{diferenciais.subtitulo}</p>
        </Reveal>

        {/* Diferencial principal em destaque */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-ink-800 to-ink-800 p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
              <Icon name={principal.icone} className="h-8 w-8" />
            </div>
            <div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">Principal diferencial</span>
              <h3 className="mt-3 text-2xl sm:text-3xl">{principal.titulo}</h3>
              <p className="mt-2 text-lg">{principal.descricao}</p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {diferenciais.itens.map((d, i) => (
            <Reveal as="li" key={d.titulo} delay={(i % 2) * 100}>
              <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition duration-300 hover:border-secondary/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary-light">
                  <Icon name={d.icone} />
                </div>
                <div>
                  <h3 className="text-lg">{d.titulo}</h3>
                  <p className="mt-1 leading-relaxed">{d.descricao}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <a href={linkWhatsApp('Olá! Gostaria de solicitar um orçamento.')} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Solicite um orçamento
          </a>
        </Reveal>
      </div>
    </section>
  )
}
