# 📊 Planilha de Manutenção Elétrica - Eucatur

Este projeto contém um script em Google Apps Script utilizado para organizar visualmente e facilitar a operação de uma planilha de **manutenção elétrica** da empresa de transporte **Eucatur**.

## 🔧 Objetivo

O objetivo do script é **otimizar o fluxo de trabalho dos eletricistas**, que utilizam a planilha para visualizar e acompanhar os serviços a serem executados, através de uma **interface visual acessível** projetada para uso em um painel físico na área de manutenção.

---

## ⚙️ Funcionalidades

- ✅ **Destaca em verde** as linhas com **serviços concluídos** (quando preenchido o horário final).
- 🟧 **Destaca em laranja** as linhas com **serviços em andamento** (com horário inicial, mas sem final).
- ⬆️ **Move os serviços concluídos para o topo** da planilha, facilitando a visualização do que já foi resolvido.
- 🔐 Verifica se o usuário tem **permissão de edição** nas células protegidas antes de executar.
- 🧹 Esconde automaticamente a **coluna auxiliar (Z)** após o uso, mantendo a planilha limpa.

---

## 📁 Estrutura do Projeto

📂 planilha-manutencao-eletrica-eucatur/
├── code.gs # Script principal com lógica de organização e checagem de permissões
├── README.md # Documentação do projeto

## 🚀 Como usar

1. Abra a planilha usada pelo setor de manutenção da Eucatur.
2. No menu da planilha, clique em **"Automação" → "Ordenar e Processar"**.
3. O script irá:
   - Verificar se você está na aba correta (`ELETRICA`);
   - Checar permissões de edição;
   - Aplicar cores de status (verde/laranja);
   - Ordenar os serviços resolvidos acima dos pendentes;
   - Ocultar a coluna auxiliar (Z).

> ⚠️ Este script **funciona apenas na aba "ELETRICA"** da planilha. Se você tentar executar em outra aba, será exibido um alerta.

---

## 🧠 Tecnologias Utilizadas

- **Google Apps Script** (JavaScript para planilhas do Google)
- Google Sheets como plataforma de visualização
- Sistema GLOBUS para alimentação dos dados originais

---

## 🧩 Exemplo Visual

Abaixo um exemplo da planilha em uso com o script:

![Exemplo visual](caminho/para/imagem.png) <!-- substitua pelo caminho correto da imagem no GitHub -->

---

## 📌 Motivação

O setor de manutenção elétrica da Eucatur recebe ordens de serviço registradas pelo sistema GLOBUS. Os apontadores transcrevem essas informações para a planilha, que é exibida em um painel no setor.  
Este script automatiza a organização, reduzindo o tempo gasto pelos eletricistas na leitura e localização das tarefas e **aumentando a eficiência visual** do processo.

---

## 📄 Licença

Este projeto é livre para uso pessoal e educacional. Para uso corporativo ou redistribuição, entre em contato com o autor.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Emanuel Miranda de Oliveira**  
GitHub: [@noguxibr](https://github.com/noguxibr)
