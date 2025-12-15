# 🚀 Instruções de Deploy - DeepMed

## Situação Atual

✅ **Commits prontos:**
- Adicionar arquivos PWA ao script de build (8df7768)
- Transformar DeepMed em PWA (Progressive Web App) (4402f34)
- Adicionar script de deploy para Replit (b79983b)
- Adicionar página de Matriz Curricular interativa (7df618f)
- Adicionar links clicáveis no logo e direcionar Episódios para Spotify (f8c0c30)
- Implementar rotas API e configuração de banco de dados (518145e)
- Atualizar dependências de segurança (3de2e82)
- Limpar código e remover arquivos não utilizados (275dad9)

✅ **Branch:** `claude/debug-repository-QGtVU` (já enviada para GitHub)

⚠️ **Problema:** Vercel está configurado para fazer deploy da branch `main`, mas as alterações estão na branch de desenvolvimento.

---

## 🎯 Solução: Criar Pull Request

### Passo 1: Acesse o GitHub
Vá para: https://github.com/deepmedicina-ai/deepmed-website

### Passo 2: Crie o Pull Request
1. Clique em **"Pull requests"**
2. Clique em **"New pull request"**
3. Selecione:
   - **Base:** `main`
   - **Compare:** `claude/debug-repository-QGtVU`
4. Clique em **"Create pull request"**
5. Título sugerido: **"Adicionar PWA e Matriz Curricular"**
6. Descrição sugerida:
   ```
   ## Mudanças
   - ✅ Transformar DeepMed em PWA (Progressive Web App)
   - ✅ Adicionar página de Matriz Curricular interativa
   - ✅ Melhorar navegação (logo clicável, link Spotify)
   - ✅ Implementar rotas API e banco de dados
   - ✅ Atualizar dependências de segurança

   ## PWA Features
   - Instalável em dispositivos móveis
   - Funciona offline
   - Ícones e manifest configurados
   - Service Worker implementado

   ## Matriz Curricular
   - 12 períodos do curso
   - 7.523 horas totais
   - Busca por disciplinas
   - Filtros por ciclo
   - Modal com detalhes
   ```

### Passo 3: Mergear o Pull Request
1. Revise as mudanças
2. Clique em **"Merge pull request"**
3. Confirme o merge

### Passo 4: Vercel Deploy Automático
- ✅ Vercel vai detectar o push na `main` automaticamente
- ⏱️ Deploy leva 2-5 minutos
- 🔗 Acesse: https://deepmed.net.br

### Passo 5: Verificar Deploy
1. Aguarde alguns minutos
2. Limpe o cache do navegador: **Ctrl+Shift+R** (ou **Cmd+Shift+R** no Mac)
3. Verifique:
   - https://deepmed.net.br/matriz-curricular ← Nova página
   - https://deepmed.net.br/manifest.json ← PWA manifest
   - https://deepmed.net.br/sw.js ← Service Worker
4. No Safari mobile, você pode instalar o app (botão "Adicionar à Tela Inicial")

---

## 🔄 Alternativa: Deploy da Branch Atual

Se preferir não mergear ainda, pode configurar Vercel para deploy da branch atual:

### No Vercel Dashboard:
1. Acesse: https://vercel.com
2. Selecione o projeto **deepmed-website**
3. Vá em **Settings** → **Git**
4. Em **Production Branch**, altere de `main` para `claude/debug-repository-QGtVU`
5. Salve e aguarde o novo deploy

---

## 📋 Checklist Final

- [ ] Pull Request criado no GitHub
- [ ] Pull Request mergeado na branch `main`
- [ ] Deploy do Vercel concluído (verificar no dashboard)
- [ ] Cache do navegador limpo
- [ ] Página Matriz Curricular acessível
- [ ] PWA instalável no mobile
- [ ] Service Worker registrado (verificar no Console do navegador)

---

## 🆘 Troubleshooting

### "As mudanças não aparecem no site"
- Limpe o cache: Ctrl+Shift+R
- Verifique se o PR foi mergeado
- Confira o status do deploy no Vercel Dashboard

### "Service Worker não registra"
- Abra o Console do navegador (F12)
- Procure por: "DeepMed PWA registrado com sucesso"
- Se houver erro, reporte o log

### "Erro no Vercel deploy"
- Acesse o Vercel Dashboard
- Verifique os logs de build
- Confira se o build está usando Node.js 18+

---

**Última atualização:** 2025-12-15
**Branch com mudanças:** claude/debug-repository-QGtVU
**Commits:** 8 novos commits prontos para deploy
