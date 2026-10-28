const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Mots trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide d'une lettre à l'autre en ligne droite pour relier et trouver les mots cachés.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Maîtrisé ! 💡",
        modalSuccessDesc: "Prêt pour le module suivant ?",
        modalFinalTitle: "Expertise Économique Validée ! 🏆",
        modalFinalDesc: "Félicitations, tu as complété les 20 niveaux d'Éducation Économique !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Words found",
        instruction: "Instruction: Slide your finger or mouse smoothly from letter to letter in a straight line to find and connect the hidden words.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Mastered! 💡",
        modalSuccessDesc: "Ready for the next module?",
        modalFinalTitle: "Economic Expertise Completed! 🏆",
        modalFinalDesc: "Congratulations, you completed all 20 Economic Education levels!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start"
    },
    es: {
        levelWord: "Nivel",
        scoreWord: "Palabras encontradas",
        instruction: "Instrucción: Desliza tu dedo o ratón de manera fluida de una letra a otra en línea recta para conectar y encontrar las palabras ocultas.",
        wordsTitle: "Palabras a buscar:",
        modalSuccessTitle: "¡Nivel Dominado! 💡",
        modalSuccessDesc: "¿Listo para el siguiente módulo?",
        modalFinalTitle: "¡Experticia Económica Completada! 🏆",
        modalFinalDesc: "¡Felicidades, completaste los 20 niveles de Educación Económica!",
        nextBtn: "Siguiente Nivel",
        replayBtn: "Jugar de nuevo desde el inicio"
    }
};

const LEVELS = [
    {
        title: { fr: "1. Fondamentaux & Marché", en: "1. Fundamentals & Market", es: "1. Fundamentos y Mercado" },
        words: { fr: ["PRIX", "OFFRE", "DEMANDE", "COUT", "MARCHE"], en: ["PRICE", "SUPPLY", "DEMAND", "COST", "MARKET"], es: ["PRECIO", "OFERTA", "DEMANDA", "COSTO", "MERCADO"] }
    },
    {
        title: { fr: "2. Monnaie & Banques", en: "2. Money & Banking", es: "2. Dinero y Banca" },
        words: { fr: ["MONNAIE", "BANQUE", "CREDIT", "TAUX", "EPARGNE"], en: ["MONEY", "BANK", "CREDIT", "RATE", "SAVINGS"], es: ["DINERO", "BANCO", "CREDITO", "TASA", "AHORRO"] }
    },
    {
        title: { fr: "3. Inflation & Monnaie", en: "3. Inflation & Currency", es: "3. Inflación y Divisas" },
        words: { fr: ["HAUSSE", "PRIX", "DEVISE", "CHANGE", "VALEUR"], en: ["RISE", "PRICE", "CURRENCY", "EXCHANGE", "VALUE"], es: ["ALZA", "PRECIO", "DIVISA", "CAMBIO", "VALOR"] }
    },
    {
        title: { fr: "4. Entreprise & Capital", en: "4. Business & Capital", es: "4. Empresa y Capital" },
        words: { fr: ["ACTIF", "DETTE", "BILAN", "PROFIT", "RISQUE"], en: ["ASSET", "DEBT", "BALANCE", "PROFIT", "RISK"], es: ["ACTIVO", "DEUDA", "BALANCE", "UTILIDAD", "RIESGO"] }
    },
    {
        title: { fr: "5. Investissement & Bourse", en: "5. Investment & Stock Market", es: "5. Inversión y Bolsa" },
        words: { fr: ["BOURSE", "TITRE", "ACTION", "FONDS", "RENDE"], en: ["STOCK", "SHARE", "EQUITY", "FUND", "YIELD"], es: ["BOLSA", "TITULO", "ACCION", "FONDO", "RENTA"] }
    },
    {
        title: { fr: "6. Commerce International", en: "6. International Trade", es: "6. Comercio Internacional" },
        words: { fr: ["IMPORT", "EXPORT", "TARIF", "PORT", "GLOBAL"], en: ["IMPORT", "EXPORT", "TARIFF", "PORT", "GLOBAL"], es: ["IMPORT", "EXPORT", "ARANCEL", "PUERTO", "GLOBAL"] }
    },
    {
        title: { fr: "7. Emploi & Travail", en: "7. Employment & Labor", es: "7. Empleo y Trabajo" },
        words: { fr: ["SALAIRE", "EMPLOI", "CHOMAGE", "PAIE", "TRAVAIL"], en: ["WAGE", "JOB", "JOBLESS", "PAY", "LABOR"], es: ["SALARIO", "EMPLEO", "PARO", "PAGO", "TRABAJO"] }
    },
    {
        title: { fr: "8. Fiscalité & Impôts", en: "8. Taxation & Taxes", es: "8. Fiscalidad e Impuestos" },
        words: { fr: ["IMPOT", "TAXE", "FISC", "REVENU", "BUDGET"], en: ["TAX", "LEVY", "FISC", "INCOME", "BUDGET"], es: ["IMPUESTO", "TASA", "FISCO", "RENTA", "PRESUP"] }
    },
    {
        title: { fr: "9. Croissance & PIB", en: "9. Growth & GDP", es: "9. Crecimiento y PIB" },
        words: { fr: ["PIB", "CYCLE", "BOOM", "CRISE", "TENDANCE"], en: ["GDP", "CYCLE", "BOOM", "CRISIS", "TREND"], es: ["PIB", "CICLO", "BOOM", "CRISIS", "TEND"] }
    },
    {
        title: { fr: "10. Consommation & Ménages", en: "10. Consumption & Households", es: "10. Consumo y Hogares" },
        words: { fr: ["ACHAT", "PANIER", "REVENU", "BESOIN", "CHOIX"], en: ["BUY", "BASKET", "INCOME", "NEED", "CHOICE"], es: ["COMPRA", "CESTA", "RENTA", "NECES", "ELEC"] }
    },
    {
        title: { fr: "11. Production & Industrie", en: "11. Production & Industry", es: "11. Producción e Industria" },
        words: { fr: ["USINE", "STOCK", "VENTE", "OFFRE", "SECTEUR"], en: ["PLANT", "STOCK", "SALE", "SUPPLY", "SECTOR"], es: ["PLANTA", "STOCK", "VENTA", "OFERTA", "SECTOR"] }
    },
    {
        title: { fr: "12. Politique Monétaire", en: "12. Monetary Policy", es: "12. Política Monetaria" },
        words: { fr: ["BANQUE", "TAUX", "CREDIT", "RESERVE", "REGLE"], en: ["BANK", "RATE", "CREDIT", "RESERVE", "RULE"], es: ["BANCO", "TASA", "CREDITO", "RESERVA", "REGLA"] }
    },
    {
        title: { fr: "13. Dette & Financement", en: "13. Debt & Financing", es: "13. Deuda y Financiamiento" },
        words: { fr: ["EMPRUNT", "PRET", "CREDIT", "SOLDE", "PRYS"], en: ["LOAN", "DEBT", "CREDIT", "BALANCE", "PRICE"], es: ["PRESTAMO", "DEUDA", "CREDITO", "SALDO", "PAGO"] }
    },
    {
        title: { fr: "14. Innovation & Start-up", en: "14. Innovation & Start-up", es: "14. Innovación y Start-up" },
        words: { fr: ["START", "FONDS", "RISQUE", "PROJET", "VENTURE"], en: ["START", "FUND", "RISK", "PROJECT", "VENTURE"], es: ["INICIO", "FONDO", "RIESGO", "PROYECTO", "CAPITAL"] }
    },
    {
        title: { fr: "15. Pauvreté & Inégalité", en: "15. Poverty & Inequality", es: "15. Pobreza y Desigualdad" },
        words: { fr: ["REVENU", "AIDE", "FONDS", "SOCIO", "PART"], en: ["INCOME", "AID", "FUND", "SOCIAL", "SHARE"], es: ["RENTA", "AYUDA", "FONDO", "SOCIAL", "PARTE"] }
    },
    {
        title: { fr: "16. Économie Informelle", en: "16. Informal Economy", es: "16. Economía Informal" },
        words: { fr: ["MARCHE", "RUE", "CACH", "VENTE", "GAINS"], en: ["STREET", "MARKET", "HIDDEN", "SALE", "GAIN"], es: ["CALLE", "MERCADO", "OCULTO", "VENTA", "GANANCIA"] }
    },
    {
        title: { fr: "17. Développement Durable", en: "17. Sustainable Development", es: "17. Desarrollo Sostenible" },
        words: { fr: ["VERT", "CLIMAT", "FUTUR", "CYCLE", "TRANS"], en: ["GREEN", "CLIMATE", "FUTURE", "CYCLE", "CLEAN"], es: ["VERDE", "CLIMA", "FUTURO", "CICLO", "LIMPIO"] }
    },
    {
        title: { fr: "18. Analyse & Statistiques", en: "18. Analysis & Statistics", es: "18. Análisis y Estadísticas" },
        words: { fr: ["DONNEE", "CHIFF", "TAUX", "CALCUL", "TREND"], en: ["DATA", "DIGIT", "RATE", "MATH", "TREND"], es: ["DATOS", "CIFRA", "TASA", "CALCULO", "TEND"] }
    },
    {
        title: { fr: "19. Finances Personnelles", en: "19. Personal Finance", es: "19. Finanzas Personales" },
        words: { fr: ["EPARG", "BUDGET", "CARTE", "DEPENSE", "SOLDE"], en: ["SAVE", "BUDGET", "CARD", "SPEND", "BALANCE"], es: ["AHORRO", "PRESUP", "TARJETA", "GASTO", "SALDO"] }
    },
    {
        title: { fr: "20. EE - Éducation Ultime", en: "20. Ultimate EE Education", es: "20. EE Educación Única" },
        words: { fr: ["ETZER", "EMILE", "SAVOIR", "FUTUR", "MONDE"], en: ["ETZER", "EMILE", "WISDOM", "FUTURE", "WORLD"], es: ["ETZER", "EMILE", "SABER", "FUTURO", "MUNDO"] }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

const GRID_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-dark');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-dark') ? '☀️' : '🌙';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = word.replace(/[^A-Z]/g, '');

        while (!placed && attempts < 100) {
            attempts++;
            const direction = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ word: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach(word => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${word}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    let matched = placedWords.find(pw => pw.word === formedWord || pw.word === formedWord.split('').reverse().join(''));
    const t = I18N[currentLang];

    if (matched && currentWords.includes(matched.word) && !foundWords.has(matched.word)) {
        foundWords.add(matched.word);
        
        selectedCells.forEach(key => {
            const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
            if (cell) cell.classList.add('found');
        });

        const chip = document.getElementById(`chip-${matched.word}`);
        if (chip) chip.classList.add('found');

        document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

        if (foundWords.size === currentWords.length) {
            setTimeout(showLevelModal, 400);
        }
    }

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}