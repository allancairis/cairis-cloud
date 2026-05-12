# Deploy no Hostinger + Easypanel

Este projeto está pronto para publicar como app Docker no Easypanel.

## Configuração recomendada

- Tipo de app: Dockerfile / Git repository
- Branch: `main`
- Dockerfile: `Dockerfile`
- Build context: `.`
- Porta interna do container: `80`
- Healthcheck: `/healthz`
- Domínio: `cairis.cloud`

## DNS

No DNS do domínio, aponte:

```text
Tipo: A
Nome: @
Valor: IP_DA_VPS
TTL: padrão
```

Opcional para `www`:

```text
Tipo: CNAME
Nome: www
Valor: cairis.cloud
TTL: padrão
```

## Easypanel

1. Crie um novo app `cairis-cloud`.
2. Escolha deploy por repositório Git.
3. Configure:

```text
Build type: Dockerfile
Dockerfile path: Dockerfile
Port: 80
```

4. Adicione `cairis.cloud` e `www.cairis.cloud`.
5. Ative SSL/HTTPS.

## Deploy automático

Copie o Deploy Webhook no Easypanel e crie o secret no GitHub:

```text
EASYPANEL_DEPLOY_WEBHOOK=https://...
```

Ao fazer push na branch `main`, o workflow valida, builda, testa `/healthz` e chama o webhook.
