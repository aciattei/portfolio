import { hero, linkWhatsApp } from '../data/content'
import { Icon, WhatsAppIcon } from './Icons'
import ImagePlaceholder from './ImagePlaceholder'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24">
      {/* Imagem de destaque em largura total (substitua src pela sua foto em /public) */}
      <div className="absolute inset-0 -z-20">
        <ImagePlaceholder
          eager
          alt="Foto profissional de uma empreendedora analisando o site do seu negócio em um notebook, em escritório moderno"
          className="opacity-40"
        />
      </div>
      {/* Sobreposição escura para garantir contraste do texto */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/80 via-ink-950/85 to-ink-950" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-site py-16 text-center">
        <p className="eyebrow">{hero.selo}</p>
        <h1 id="hero-titulo" className="mx-auto mt-6 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Transformo sua <span className="text-primary-light">presença online</span> e impulsiono suas{' '}
          <span className="text-primary-light">vendas.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">{hero.subtitulo}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full px-8 py-4 text-lg sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" />
            {hero.ctaPrincipal}
          </a>
          <a href="#servicos" className="btn-ghost w-full px-8 py-4 text-lg sm:w-auto">
            {hero.ctaSecundario}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
          {hero.pontos.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-secondary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
