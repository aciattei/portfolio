// Mostra a foto real quando "src" é informado (com lazy loading);
// enquanto isso, exibe um placeholder descritivo.
// Para usar uma foto: coloque o arquivo em /public (ex.: public/fundadora.jpg)
// e passe src="./fundadora.jpg".
export default function ImagePlaceholder({ src, alt, className = '', eager = false }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-800 p-6 text-center ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10 text-secondary/60" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m21 16-5-5-8 8" />
      </svg>
      <p className="max-w-xs text-sm text-secondary">{alt}</p>
    </div>
  )
}
