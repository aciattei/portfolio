import { contato, navegacao, linkWhatsApp } from '../data/content'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14">
      <div className="container-site grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-extrabold text-white">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">F</span>
            Freelancer
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Administração e soluções digitais para empreendedores e pequenos negócios em Brasília.
          </p>
          <a href="#depoimentos" className="btn-ghost mt-6 !px-5 !py-2 text-sm">Veja nossos projetos</a>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">Navegação</p>
          <ul className="mt-4 space-y-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-slate-300 hover:text-primary-light">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">Contato</p>
          <address className="mt-4 space-y-2 not-italic text-slate-300">
            <p>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light">
                Contato
              </a>
            </p>
            <p>
              <a href={`mailto:${contato.email}`} className="hover:text-primary-light">{contato.email}</a>
            </p>
            <p>{contato.cidade}</p>
          </address>
        </div>
      </div>
      <div className="container-site mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {ano} Freelancer. Todos os direitos reservados.
      </div>
    </footer>
  )
}
