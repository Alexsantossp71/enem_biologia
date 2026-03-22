#!/bin/bash
echo "=== TESTES BÁSICOS DO SITE DE BIOLOGIA ==="
echo

# Teste 1: Verificar estrutura básica
echo "1. Verificando estrutura de arquivos..."
if [ -d "enem_biologia/docs" ]; then
  echo "   ✓ Diretório docs existe"
else
  echo "   ✗ Diretório docs não encontrado"
  exit 1
fi

# Teste 2: Verificar arquivos principais
echo "2. Verificando arquivos principais..."
required_files=("index.html" "cap1_biologia.html" "cap13_biologia.html")
for file in "${required_files[@]}"; do
  if [ -f "enem_biologia/docs/$file" ]; then
    echo "   ✓ $file existe"
  else
    echo "   ✗ $file não encontrado"
  fi
done

# Teste 3: Verificar recursos interativos
echo "3. Verificando recursos interativos..."
echo "   Capítulos com quiz:"
for i in {1..13}; do
  if [ -f "enem_biologia/docs/cap${i}_quiz.html" ]; then
    echo -n " $i"
  fi
done
echo

# Teste 4: Verificar HTML básico
echo "4. Verificando estrutura HTML..."
if grep -q "<!DOCTYPE html>" "enem_biologia/docs/index.html"; then
  echo "   ✓ DOCTYPE correto"
else
  echo "   ✗ DOCTYPE incorreto"
fi

# Teste 5: Verificar links
echo "5. Verificando links principais..."
broken_links=0
for i in {1..13}; do
  if [ -f "enem_biologia/docs/cap${i}_biologia.html" ]; then
    if grep -q "href=\"cap${i}_biologia.html\"" "enem_biologia/docs/index.html"; then
      : # Link ok
    else
      echo "   ✗ Link para cap${i}_biologia.html faltando no index"
      broken_links=$((broken_links+1))
    fi
  fi
done
if [ $broken_links -eq 0 ]; then
  echo "   ✓ Todos os links principais presentes"
fi

echo
echo "=== RESUMO ==="
echo "Testes concluídos. Verifique os logs acima para detalhes."
echo "Para executar: bash test_basic.sh"
