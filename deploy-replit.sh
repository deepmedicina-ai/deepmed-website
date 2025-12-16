#!/bin/bash

echo "🚀 Script de Deploy para Replit"
echo "================================"
echo ""

# Verificar branch atual
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Branch atual: $CURRENT_BRANCH"
echo ""

# Garantir que está na branch correta
if [ "$CURRENT_BRANCH" != "claude/debug-repository-QGtVU" ]; then
    echo "⚠️  Mudando para branch claude/debug-repository-QGtVU..."
    git checkout claude/debug-repository-QGtVU
fi

# Mostrar últimos commits
echo "📝 Últimos 5 commits:"
git log --oneline -5
echo ""

# Build
echo "🔨 Executando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo ""
    echo "📋 Próximos passos:"
    echo "1. No Replit, clique no botão 'Republish'"
    echo "2. Aguarde o deploy completar (2-3 minutos)"
    echo "3. Limpe o cache do navegador (Ctrl+Shift+R)"
    echo "4. Teste: https://deepmed.net.br/matriz-curricular"
    echo ""
    echo "🎯 Arquivos prontos em: dist/public/"
    ls -lh dist/public/ | grep -E "index.html|assets"
else
    echo "❌ Erro no build!"
    exit 1
fi
