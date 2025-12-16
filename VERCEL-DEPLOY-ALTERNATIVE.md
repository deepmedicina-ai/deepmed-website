# 🚀 Deploy Alternativo - Vercel

## ⚠️ Problema Identificado

Você não tem permissão de colaborador para criar Pull Requests no GitHub, MAS todos os commits já estão na branch `claude/debug-repository-QGtVU`.

## ✅ Solução: Configurar Vercel para Deploy da Branch Atual

### Passo 1: Acesse o Vercel Dashboard

1. Vá para: **https://vercel.com**
2. Faça login
3. Selecione o projeto: **deepmed-website**

### Passo 2: Alterar Production Branch

1. No projeto, clique em **Settings** (Configurações)
2. No menu lateral, clique em **Git**
3. Encontre a seção **Production Branch**
4. Altere de `main` para: **`claude/debug-repository-QGtVU`**
5. Clique em **Save** (Salvar)

### Passo 3: Forçar Novo Deploy

1. Volte para a aba **Deployments**
2. Clique no botão **⋯** (três pontos) do último deployment
3. Clique em **Redeploy**
4. Aguarde 2-5 minutos

### Passo 4: Verificar Deploy

1. Aguarde a mensagem "Deployment Ready"
2. Limpe o cache do navegador: **Cmd+Shift+R** (Safari no Mac)
3. Acesse: https://deepmed.net.br/matriz-curricular
4. Verifique o PWA:
   - https://deepmed.net.br/manifest.json
   - https://deepmed.net.br/sw.js

---

## 🔄 Solução Alternativa 2: Solicitar Permissão de Colaborador

Se preferir manter o fluxo tradicional com branch `main`:

1. Entre em contato com o dono do repositório `deepmedicina-ai/deepmed-website`
2. Solicite permissão de **Collaborator** ou **Write Access**
3. Depois disso, poderá criar Pull Requests normalmente

### Como adicionar colaborador (para o dono do repositório):

1. Vá para: https://github.com/deepmedicina-ai/deepmed-website/settings/access
2. Clique em **Add people**
3. Digite o username do colaborador
4. Selecione a permissão **Write** ou **Admin**
5. Clique em **Add to repository**

---

## 📋 Checklist

- [ ] Acessar Vercel Dashboard
- [ ] Alterar Production Branch para `claude/debug-repository-QGtVU`
- [ ] Salvar configuração
- [ ] Forçar redeploy
- [ ] Aguardar deploy concluir
- [ ] Limpar cache do navegador
- [ ] Verificar https://deepmed.net.br/matriz-curricular
- [ ] Testar instalação do PWA no mobile

---

## 🎯 Resultado Esperado

Após seguir esses passos, o site https://deepmed.net.br vai mostrar:

✅ Página Matriz Curricular funcionando
✅ PWA instalável no mobile
✅ Service Worker registrado
✅ Logo clicável e link Spotify
✅ Todas as 8 atualizações aplicadas

---

## 🆘 Ainda com Problemas?

### Cache muito agressivo
- Safari: Settings → Safari → Clear History and Website Data
- Ou use modo anônimo: Cmd+Shift+N

### Deploy não inicia
- Verifique se salvou a mudança da Production Branch
- Tente fazer um pequeno commit vazio para forçar deploy:
  ```bash
  git commit --allow-empty -m "Trigger Vercel deploy"
  git push origin claude/debug-repository-QGtVU
  ```

### PWA não instala
- Verifique se está em HTTPS
- Verifique se o Service Worker está registrado (Console do navegador)
- Limpe todos os Service Workers antigos

---

**Branch com todas as mudanças:** `claude/debug-repository-QGtVU`
**Commits:** 9 commits prontos (incluindo PWA e Matriz Curricular)
**Última atualização:** 2025-12-15 13:28
