# Allan Cairis Executive Site

Site pessoal executivo premium para `cairis.cloud`, construído em Next.js, TypeScript, TailwindCSS e Framer Motion.

## Posicionamento

Presença digital para apresentar minha atuação em arquitetura de software, DevSecOps, automação com IA, engenharia de plataforma, cloud, governança técnica e transformação digital.

> Arquitetura, Segurança e IA para ambientes que não podem falhar.

## Stack

- Next.js com App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- SEO técnico com metadata, Open Graph, sitemap e robots
- Docker multi-stage com output standalone
- Healthcheck em `/healthz`

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Docker

```bash
docker build -t cairis-cloud:latest .
docker run -d --name cairis-cloud -p 8082:80 cairis-cloud:latest
```

## Deploy no Easypanel

Configure o app como Dockerfile:

```text
Build type: Dockerfile
Dockerfile path: Dockerfile
Build context: .
Port: 80
Healthcheck: /healthz
Domain: cairis.cloud
```
