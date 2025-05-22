/**
 * Script de automação da planilha de manutenção elétrica da Eucatur.
 * Este código organiza visualmente os serviços dos eletricistas:
 * - Linhas com hora inicial (mas sem final) são destacadas em laranja.
 * - Linhas com hora final preenchida são destacadas em verde.
 * - Linhas concluídas são movidas para o topo da planilha automaticamente.
 * 
 * Desenvolvido para ser usado na aba 'ELETRICA' de uma Google Planilha.
 */

/**
 * Adiciona um menu personalizado chamado 'Automação' na planilha.
 * O menu contém uma opção que executa o script principal.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Automação')
    .addItem('Ordenar e Processar', 'executarScript')
    .addToUi();
}

/**
 * Função principal que organiza a aba 'ELETRICA':
 * - Verifica permissões
 * - Ordena pela coluna Z (coluna auxiliar de controle)
 * - Esconde a coluna auxiliar após o uso
 */
function executarScript() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Verifica se está na aba correta
  if (sheet.getName() !== 'ELETRICA') {
    SpreadsheetApp.getUi().alert('Este script só pode ser executado na aba "ELETRICA".');
    return;
  }

  const lastRow = sheet.getLastRow();

  // Verifica se há dados além do cabeçalho
  if (lastRow <= 1) {
    SpreadsheetApp.getUi().alert('Não há dados para processar.');
    return;
  }

  const dataRange = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn());
  const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);

  // Verifica se há proteções no intervalo e se o usuário pode editá-las
  for (const protection of protections) {
    if (rangesOverlap(dataRange, protection.getRange())) {
      if (!protection.canEdit()) {
        SpreadsheetApp.getUi().alert(
          'Você não tem permissão para editar algumas células protegidas. Processamento interrompido.'
        );
        return;
      }
    }
  }

  // Ordena pela coluna Z (coluna 26) de forma ascendente
  dataRange.sort([{ column: 26, ascending: true }]);

  // Oculta a coluna Z após o processamento
  sheet.hideColumns(26, 1);

  SpreadsheetApp.getUi().alert('Processamento concluído!');
}

/**
 * Verifica se dois intervalos se sobrepõem (colisão entre áreas).
 *
 * @param {Range} range1 - Primeiro intervalo
 * @param {Range} range2 - Segundo intervalo
 * @returns {boolean} - true se houver sobreposição, false caso contrário
 */
function rangesOverlap(range1, range2) {
  const range1StartRow = range1.getRow();
  const range1EndRow = range1StartRow + range1.getNumRows() - 1;
  const range1StartCol = range1.getColumn();
  const range1EndCol = range1StartCol + range1.getNumColumns() - 1;

  const range2StartRow = range2.getRow();
  const range2EndRow = range2StartRow + range2.getNumRows() - 1;
  const range2StartCol = range2.getColumn();
  const range2EndCol = range2StartCol + range2.getNumColumns() - 1;

  const rowsOverlap = !(range1EndRow < range2StartRow || range2EndRow < range1StartRow);
  const colsOverlap = !(range1EndCol < range2StartCol || range2EndCol < range1StartCol);

  return rowsOverlap && colsOverlap;
}
