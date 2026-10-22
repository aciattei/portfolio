import { linkWhatsApp } from '../data/content'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppFloat() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  )
}
