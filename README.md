# wst-linktree · Cartão de Visita (React + TypeScript + Tailwind)

Um mini site estilo **Linktree** com um card elegante, botões grandes e ícones, modal de **PIX**, botão de **WhatsApp** e suporte a uma tag **“Em breve 🚧🔜”** para itens ainda não publicados.

> **Stack**: Vite + React + TypeScript · TailwindCSS · lucide-react

---

## ✨ Funcionalidades

* Card com avatar circular, nome, cargo e bio
* Botões de links (LinkedIn, Site, GitHub, Instagram, Email…)
* **WhatsApp** com mensagem pré-preenchida
* Modal de **PIX** (chave + QR opcional + copiar chave)
* Flag **`soon`** para desabilitar um botão e exibir **“Em breve 🚧🔜”**
* Paleta de cores personalizável
* Acessível (foco, `aria-disabled` nos itens desabilitados)

---

## 📦 Requisitos

* Node.js 18+ (recomendado)
* npm (ou pnpm/yarn)

---

## 🚀 Início Rápido

Crie o app com Vite (template React + TypeScript):

```bash
npm create vite@latest wst-linktree -- --template react-ts
cd wst-linktree
```

Instale dependências:

```bash
npm i lucide-react
npm i -D tailwindcss @tailwindcss/cli postcss autoprefixer
```

Inicialize o Tailwind (v4 – CLI novo):

```bash
npx @tailwindcss/cli init -p
```

Configure o `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

Em `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Substitua o conteúdo de `src/App.tsx` pelo componente do projeto (fornecido neste repositório).

Execute:

```bash
npm run dev
```

> **Alternativa (Tailwind v3)**: `npm i -D tailwindcss@3 postcss autoprefixer && npx tailwindcss@3 init -p`

---

## 🖼️ Imagens & Assets (produção)

Você tem duas opções **válidas** para as imagens:

1. **Pasta `public/`** (caminho absoluto):

   * Coloque as imagens em `public/` e referencie como `/profile-photo.png` ou `/pix-qr.png`.
2. **Importando de `src/assets/`** (Vite copia para o build):

   ```ts
   import avatarUrl from "./assets/profile-photo.png";
   import pixQRUrl from "./assets/pix-qr.jpg";
   // ... use avatar: avatarUrl, pix.qrImage: pixQRUrl
   ```

> **Atenção (Vercel/Unix)**: nomes de arquivos são **case‑sensitive**; confira também a **extensão** (`.png` × `.jpg`).

---

## 🔧 Personalização Rápida

No objeto `profile` você altera texto, cores e links.

```ts
const profile: Profile = {
  name: "Seu Nome",
  role: "Desenvolvedor de Software",
  about: "Breve descrição…",
  avatar: "/profile-photo.png", // ou import via src/assets
  brand: { base: "#7417EA", dark: "#5A12B6", headerFrom: "#7417EA", headerTo: "#9C27FF" },
  contacts: [
    { label: "LinkedIn", href: "https://linkedin.com/in/usuario", icon: Linkedin },
    // Exemplo com botão desabilitado e tag:
    { label: "Site Profissional", href: "https://seusite.com", icon: Globe, soon: true, soonLabel: "Em breve 🚧🔜" },
    // WhatsApp com helper (gera wa.me):
    { label: "WhatsApp", href: makeWhatsAppLink("+55 11 91234-5678", "Olá! Vim pelo seu site."), icon: MessageCircle },
  ],
  pix: { key: "SUA_CHAVE_PIX", qrImage: "/pix-qr.png" },
};
```

### Helper do WhatsApp

```ts
function makeWhatsAppLink(phoneIntl: string, text?: string): string {
  const digits = (phoneIntl || "").replace(/[^0-9]/g, "");
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
```

### Botão “Em breve”

Basta adicionar `soon: true` (e opcionalmente `soonLabel`). O componente **não** renderiza `<a>` clicável—usa um contêiner com `aria-disabled` e aplica `cursor-not-allowed` + `opacity-60`.

### PIX

* `pix.key`: chave **copiável** pelo usuário
* `pix.qrImage` (opcional): arquivo do QR (em `public/` ou importado de `src/assets/`)

---

## 🧪 Scripts comuns (Vite)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

---

## 🌐 Deploy na Vercel

1. Faça **build** local: `npm run build`
2. Suba para o GitHub
3. Import na Vercel → framework **Vite** → build `npm run build` → output `dist`

**Dica**: Se uma imagem falhar em produção (404):

* Arquivo está em `public/` quando usar caminho absoluto `/...`?
* Extensão/nome e **maiúsculas/minúsculas** batem?
* Se estiver em `src/assets/`, você **importou** no código?
* Teste local: `npm run build && npx serve dist` e abra a aba **Network**.

---

## 🧩 Acessibilidade & SEO

* Ícones possuem suporte via `lucide-react`
* Imagens usam `alt`
* Favicon incluso (ex.: `favicon_gabwest.ico` / PNGs). Adicione ao `index.html`:

  ```html
  <link rel="icon" href="/favicon_gabwest.ico" />
  ```

---

## 📚 Estrutura (sugerida)

```
├─ public/
│  ├─ favicon_gabwest.ico
│  ├─ profile-photo.png
│  └─ pix-qr.png
├─ src/
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
└─ tailwind.config.js
```

---

## 💡 Próximos Passos

* Modo claro/escuro automático
* Animações sutis (Framer Motion)
* Analytics de clique nos botões
* i18n (pt‑BR/en)

---

## 📝 Licença

MIT © Você. Ajuste conforme desejar.

---

## 🙌 Créditos

* Ícones: [lucide.dev](https://lucide.dev)
* Estilos: TailwindCSS
* Build: Vite + React + TypeScript
