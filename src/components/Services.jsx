import { servicos, linkWhatsApp } from '../data/content'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="section">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-titulo" className="mt-4 text-3xl sm:text-4xl">{servicos.titulo}</h2>
          <p className="mt-4 text-lg">{servicos.subtitulo}</p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.itens.map((s, i) => (
            <Reveal as="li" key={s.titulo} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-light transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={s.icone} />
                </div>
                <h3 className="mt-5 text-xl">{s.titulo}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{s.descricao}</p>
                <a
                  href={linkWhatsApp(`Olá! Gostaria de um orçamento para: ${s.titulo}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 self-start !px-5 !py-2.5 text-sm"
                  aria-label={`${servicos.cta} — ${s.titulo}`}
                >
                  {servicos.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
