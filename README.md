# Site Freelancer — React + Tailwind (Vite)

## Rodar no computador
```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
```

## Onde editar
- **Textos:** `src/data/content.js` (todo o conteúdo do site está nesse arquivo).
- **Fotos:** coloque os arquivos em `public/` e passe `src="./nome.jpg"` no componente `ImagePlaceholder`
  (Hero.jsx e About.jsx). Fotos de depoimentos: campo `foto` em `content.js`.
- **Cores:** `tailwind.config.js` (primary `#9D6B34`, secondary `#a4adb8`).

## Antes de publicar
1. Troque os **números de impacto** (seção Sobre) pelos reais.
2. Troque os **depoimentos ilustrativos** por depoimentos reais, com autorização dos clientes,
   e mude `exemplo: true` para `false`.
3. Com o domínio definido, preencha `og:url` e `og:image` em `index.html`.

## Deploy automático (HostGator via FTP)
A cada push na branch `main`, o GitHub Actions (`.github/workflows/deploy.yml`) compila e envia
a pasta `dist/` por FTPS. Cadastre em *Settings → Secrets and variables → Actions*:

| Secret | Exemplo |
|---|---|
| `FTP_SERVER` | ftp.seudominio.com.br |
| `FTP_USERNAME` | usuário FTP criado no cPanel |
| `FTP_PASSWORD` | senha dessa conta |
| `FTP_PATH` | `./` (conta FTP restrita à pasta do site) |
