````markdown
# ⚡ Planilha de Manutenção Elétrica – Eucatur

Este repositório contém um script desenvolvido em **Google Apps Script** para automatizar e facilitar a organização de uma planilha de **manutenção elétrica** da empresa de transporte **Eucatur**. O objetivo é tornar a visualização das ordens de serviço mais clara e eficiente para os eletricistas da equipe.

---

## 🎯 Objetivo

O script visa **otimizar o fluxo de trabalho** no setor de manutenção, melhorando a forma como as tarefas são visualizadas e priorizadas. A planilha é exibida em um painel físico e serve como ferramenta de acompanhamento para os serviços executados.

---

## ⚙️ Funcionalidades

- ✅ **Realce em verde** para serviços **concluídos** (com horário final preenchido).
- 🟧 **Realce em laranja** para serviços **em andamento** (com horário inicial, mas sem final).
- ⬆️ **Reordenação automática** das tarefas concluídas para o topo da planilha.
- 🔐 **Validação de permissões de edição** antes da execução.
- 🧹 **Ocultação automática da coluna auxiliar (Z)** ao fim do processo.

---

## 🗂 Estrutura do Projeto

```plaintext
planilha-manutencao-eletrica-eucatur/
├── code.gs         # Script principal em Google Apps Script
├── README.md       # Documentação do projeto
````

---

## 🚀 Como Usar

1. Acesse a planilha de manutenção da Eucatur no Google Sheets.
2. No menu da planilha, clique em **Automação → Ordenar e Processar**.
3. O script irá executar automaticamente as seguintes etapas:

   * Verificar se a aba ativa é `ELETRICA`;
   * Validar permissões de edição;
   * Colorir as linhas conforme o status da tarefa;
   * Reorganizar os serviços concluídos no topo;
   * Ocultar a coluna auxiliar (Z) para manter a planilha limpa.

> ⚠️ **Importante**: O script funciona apenas na aba `ELETRICA`. Ao tentar usar em outra aba, um alerta será exibido.

---

## 🧠 Tecnologias Utilizadas

* [Google Apps Script](https://developers.google.com/apps-script) (baseado em JavaScript)
* Google Sheets (como interface de visualização)
* Sistema GLOBUS (como fonte dos dados originais)

---

## 🖼 Exemplo Visual

> *Substitua o caminho abaixo pela imagem correta no repositório.*

![Exemplo da planilha em uso](docs/exemplo_visual.png)

---

## 📌 Contexto e Motivação

As ordens de serviço são emitidas pelo sistema GLOBUS e transcritas para a planilha por apontadores. Esta planilha é exibida em um painel físico no setor elétrico da Eucatur, servindo como base para o dia a dia da equipe.
O script foi criado para **automatizar a organização**, **reduzir o tempo de leitura** e **melhorar a produtividade** dos eletricistas.

---

## 📄 Licença

Este projeto é livre para uso pessoal e educacional.
Para uso comercial, corporativo ou redistribuição, entre em contato com o autor.

---

## 👨‍💻 Autor

Desenvolvido por [Lucas Emanuel Miranda de Oliveira](https://github.com/noguxibr)

---

```