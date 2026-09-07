# Vanderson Rodrigues — Quality Engineer Portfolio

Portfólio profissional de Vanderson Cardoso Rodrigues, com posicionamento em **Quality Engineering, QA Automation, API Testing, Performance e CI/CD**.

## Stack
Next.js • React • TypeScript • CSS • Lucide • Playwright • GitHub Actions

## Arquitetura
- `src/app`: página, metadata, sitemap, robots e estilos globais
- `src/components`: componentes reutilizáveis
- `src/data`: conteúdo profissional desacoplado da UI
- `src/types`: contratos TypeScript
- `tests`: testes E2E com Playwright
- `.github/workflows`: Quality Gate
- `public`: currículo PDF e assets públicos

## Executar localmente
```bash
npm install
npm run dev
```
Acesse `http://localhost:3000`.

## Quality Gate
```bash
npm run typecheck
npm run build
npm run test:e2e
```

O workflow do GitHub Actions executa instalação, type-check, build e testes Playwright em pushes e pull requests para `main`.

## Deploy na Vercel
O projeto está preparado para deploy pela integração GitHub → Vercel.

1. Importe o repositório na Vercel.
2. Framework Preset: `Next.js`.
3. Build Command: padrão (`next build`).
4. Output: padrão do Next.js.
5. Após definir um domínio próprio, adicione `NEXT_PUBLIC_SITE_URL` com a URL HTTPS final.

O sitemap usa automaticamente a URL de produção da Vercel quando `NEXT_PUBLIC_SITE_URL` não estiver definido.

## Tema
O portfólio possui modo claro e escuro, respeita a preferência inicial do sistema e persiste a escolha no navegador.

## Conteúdo e privacidade
As métricas apresentadas são apenas as documentadas no currículo. Informações internas ou confidenciais de projetos não são expostas.

## Autor
**Vanderson Cardoso Rodrigues**  
Quality Engineer | QA | Test Automation | API | Performance
