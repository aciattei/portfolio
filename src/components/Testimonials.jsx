import { useCallback, useEffect, useState } from 'react'
import { depoimentos } from '../data/content'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Testimonials() {
  const itens = depoimentos.itens
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)

  const ir = useCallback((i) => setAtual((i + itens.length) % itens.length), [itens.length])

  // Avança automaticamente (pausa ao passar o mouse/focar, e respeita "reduzir movimento")
  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (pausado || reduz) return
    const t = setInterval(() => ir(atual + 1), 7000)
    return () => clearInterval(t)
  }, [atual, pausado, ir])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') ir(atual - 1)
    if (e.key === 'ArrowRight') ir(atual + 1)
  }

  const d = itens[atual]
  const iniciais = d.nome.split(' ').map((p) => p[0]).slice(0, 2).join('')

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="section">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Prova social</p>
          <h2 id="depoimentos-titulo" className="mt-4 text-3xl sm:text-4xl">{depoimentos.titulo}</h2>
          <p className="mt-4 text-lg">{depoimentos.subtitulo}</p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Depoimentos de clientes"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            onFocus={() => setPausado(true)}
            onBlur={() => setPausado(false)}
            className="relative rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12"
          >
            <Icon name="quote" className="absolute right-8 top-8 h-12 w-12 text-primary/40" />

            <figure
              key={atual}
              aria-roledescription="slide"
              aria-label={`${atual + 1} de ${itens.length}`}
              aria-live={pausado ? 'polite' : 'off'}
              className="animate-[fadeIn_0.5s_ease-out]"
            >
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-ink-950">
                {d.resultado}
              </span>
              <blockquote className="mt-6 text-xl leading-relaxed text-white sm:text-2xl">“{d.texto}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {d.foto ? (
                  <img src={d.foto} alt={`Foto de ${d.nome}`} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                ) : (
                  <div role="img" aria-label={`Foto de ${d.nome} (a adicionar)`} className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {iniciais}
                  </div>
                )}
                <div>
                  <p className="font-bold text-white">{d.nome}</p>
                  <p className="text-sm text-slate-400">{d.cargo}</p>
                </div>
              </figcaption>
              {d.exemplo && (
                <p className="mt-6 text-xs italic text-slate-500">Depoimento ilustrativo — substitua por um depoimento real.</p>
              )}
            </figure>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2" role="group" aria-label="Escolher depoimento">
                {itens.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => ir(i)}
                    aria-label={`Ver depoimento ${i + 1}`}
                    aria-current={i === atual}
                    className={`h-2.5 rounded-full transition-all ${i === atual ? 'w-8 bg-primary' : 'w-2.5 bg-secondary/40 hover:bg-secondary'}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => ir(atual - 1)} aria-label="Depoimento anterior" className="rounded-full border border-white/15 p-3 text-white transition hover:border-primary hover:bg-primary">
                  <Icon name="arrowLeft" className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => ir(atual + 1)} aria-label="Próximo depoimento" className="rounded-full border border-white/15 p-3 text-white transition hover:border-primary hover:bg-primary">
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
