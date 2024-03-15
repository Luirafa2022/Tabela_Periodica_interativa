// Dados dos elementos
const elements = [
    { symbol: 'H', name: 'Hidrogênio', atomicNumber: 1, atomicMass: '1.008', period: 1, group: 'Não Metais' },
    { symbol: 'He', name: 'Hélio', atomicNumber: 2, atomicMass: '4.003', period: 1, group: 'Gases Nobres' },
    { symbol: 'Li', name: 'Lítio', atomicNumber: 3, atomicMass: '6.941', period: 2, group: 'Metais Alcalinos' },
    { symbol: 'Be', name: 'Berílio', atomicNumber: 4, atomicMass: '9.012', period: 2, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'B', name: 'Boro', atomicNumber: 5, atomicMass: '10.811', period: 2, group: 'Semimetais' },
    { symbol: 'C', name: 'Carbono', atomicNumber: 6, atomicMass: '12.011', period: 2, group: 'Não Metais' },
    { symbol: 'N', name: 'Nitrogênio', atomicNumber: 7, atomicMass: '14.007', period: 2, group: 'Não Metais' },
    { symbol: 'O', name: 'Oxigênio', atomicNumber: 8, atomicMass: '15.999', period: 2, group: 'Não Metais' },
    { symbol: 'F', name: 'Flúor', atomicNumber: 9, atomicMass: '18.998', period: 2, group: 'Halogênios' },
    { symbol: 'Ne', name: 'Neônio', atomicNumber: 10, atomicMass: '20.180', period: 2, group: 'Gases Nobres' },
    { symbol: 'Na', name: 'Sódio', atomicNumber: 11, atomicMass: '22.990', period: 3, group: 'Metais Alcalinos' },
    { symbol: 'Mg', name: 'Magnésio', atomicNumber: 12, atomicMass: '24.305', period: 3, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'Al', name: 'Alumínio', atomicNumber: 13, atomicMass: '26.982', period: 3, group: 'Metais Representativos' },
    { symbol: 'Si', name: 'Silício', atomicNumber: 14, atomicMass: '28.086', period: 3, group: 'Semimetais' },
    { symbol: 'P', name: 'Fósforo', atomicNumber: 15, atomicMass: '30.974', period: 3, group: 'Não Metais' },
    { symbol: 'S', name: 'Enxofre', atomicNumber: 16, atomicMass: '32.065', period: 3, group: 'Não Metais' },
    { symbol: 'Cl', name: 'Cloro', atomicNumber: 17, atomicMass: '35.453', period: 3, group: 'Halogênios' },
    { symbol: 'Ar', name: 'Argônio', atomicNumber: 18, atomicMass: '39.948', period: 3, group: 'Gases Nobres' },
    { symbol: 'K', name: 'Potássio', atomicNumber: 19, atomicMass: '39.098', period: 4, group: 'Metais Alcalinos' },
    { symbol: 'Ca', name: 'Cálcio', atomicNumber: 20, atomicMass: '40.078', period: 4, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'Sc', name: 'Escândio', atomicNumber: 21, atomicMass: '44.956', period: 4, group: 'Metais de Transição' },
    { symbol: 'Ti', name: 'Titânio', atomicNumber: 22, atomicMass: '47.867', period: 4, group: 'Metais de Transição' },
    { symbol: 'V', name: 'Vanádio', atomicNumber: 23, atomicMass: '50.942', period: 4, group: 'Metais de Transição' },
    { symbol: 'Cr', name: 'Cromo', atomicNumber: 24, atomicMass: '51.996', period: 4, group: 'Metais de Transição' },
    { symbol: 'Mn', name: 'Manganês', atomicNumber: 25, atomicMass: '54.938', period: 4, group: 'Metais de Transição' },
    { symbol: 'Fe', name: 'Ferro', atomicNumber: 26, atomicMass: '55.845', period: 4, group: 'Metais de Transição' },
    { symbol: 'Co', name: 'Cobalto', atomicNumber: 27, atomicMass: '58.933', period: 4, group: 'Metais de Transição' },
    { symbol: 'Ni', name: 'Níquel', atomicNumber: 28, atomicMass: '58.693', period: 4, group: 'Metais de Transição' },
    { symbol: 'Cu', name: 'Cobre', atomicNumber: 29, atomicMass: '63.546', period: 4, group: 'Metais de Transição' },
    { symbol: 'Zn', name: 'Zinco', atomicNumber: 30, atomicMass: '65.409', period: 4, group: 'Metais de Transição' },
    { symbol: 'Ga', name: 'Gálio', atomicNumber: 31, atomicMass: '69.723', period: 4, group: 'Metais Representativos' },
    { symbol: 'Ge', name: 'Germânio', atomicNumber: 32, atomicMass: '72.630', period: 4, group: 'Semimetais' },
    { symbol: 'As', name: 'Arsênio', atomicNumber: 33, atomicMass: '74.922', period: 4, group: 'Semimetais' },
    { symbol: 'Se', name: 'Selênio', atomicNumber: 34, atomicMass: '78.971', period: 4, group: 'Não Metais' },
    { symbol: 'Br', name: 'Bromo', atomicNumber: 35, atomicMass: '79.904', period: 4, group: 'Halogênios' },
    { symbol: 'Kr', name: 'Criptônio', atomicNumber: 36, atomicMass: '83.798', period: 4, group: 'Gases Nobres' },
    { symbol: 'Rb', name: 'Rubídio', atomicNumber: 37, atomicMass: '85.468', period: 5, group: 'Metais Alcalinos' },
    { symbol: 'Sr', name: 'Estrôncio', atomicNumber: 38, atomicMass: '87.62', period: 5, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'Y', name: 'Ítrio', atomicNumber: 39, atomicMass: '88.906', period: 5, group: 'Metais de Transição' },
    { symbol: 'Zr', name: 'Zircônio', atomicNumber: 40, atomicMass: '91.224', period: 5, group: 'Metais de Transição' },
    { symbol: 'Nb', name: 'Nióbio', atomicNumber: 41, atomicMass: '92.906', period: 5, group: 'Metais de Transição' },
    { symbol: 'Mo', name: 'Molibdênio', atomicNumber: 42, atomicMass: '95.94', period: 5, group: 'Metais de Transição' },
    { symbol: 'Tc', name: 'Tecnécio', atomicNumber: 43, atomicMass: '98.000', period: 5, group: 'Metais de Transição' },
    { symbol: 'Ru', name: 'Rutênio', atomicNumber: 44, atomicMass: '101.07', period: 5, group: 'Metais de Transição' },
    { symbol: 'Rh', name: 'Ródio', atomicNumber: 45, atomicMass: '102.906', period: 5, group: 'Metais de Transição' },
    { symbol: 'Pd', name: 'Paládio', atomicNumber: 46, atomicMass: '106.42', period: 5, group: 'Metais de Transição' },
    { symbol: 'Ag', name: 'Prata', atomicNumber: 47, atomicMass: '107.868', period: 5, group: 'Metais de Transição' },
    { symbol: 'Cd', name: 'Cádmio', atomicNumber: 48, atomicMass: '112.411', period: 5, group: 'Metais de Transição' },
    { symbol: 'In', name: 'Índio', atomicNumber: 49, atomicMass: '114.818', period: 5, group: 'Metais Representativos' },
    { symbol: 'Sn', name: 'Estanho', atomicNumber: 50, atomicMass: '118.710', period: 5, group: 'Metais Representativos' },
    { symbol: 'Sb', name: 'Antimônio', atomicNumber: 51, atomicMass: '121.760', period: 5, group: 'Semimetais' },
    { symbol: 'Te', name: 'Telúrio', atomicNumber: 52, atomicMass: '127.60', period: 5, group: 'Semimetais' },
    { symbol: 'I', name: 'Iodo', atomicNumber: 53, atomicMass: '126.904', period: 5, group: 'Halogênios' },
    { symbol: 'Xe', name: 'Xenônio', atomicNumber: 54, atomicMass: '131.293', period: 5, group: 'Gases Nobres' },
    { symbol: 'Cs', name: 'Césio', atomicNumber: 55, atomicMass: '132.905', period: 6, group: 'Metais Alcalinos' },
    { symbol: 'Ba', name: 'Bário', atomicNumber: 56, atomicMass: '137.327', period: 6, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'La', name: 'Lantânio', atomicNumber: 57, atomicMass: '138.905', period: 6, group: 'Lantanídeos' },
    { symbol: 'Ce', name: 'Cério', atomicNumber: 58, atomicMass: '140.116', period: 6, group: 'Lantanídeos' },
    { symbol: 'Pr', name: 'Praseodímio', atomicNumber: 59, atomicMass: '140.908', period: 6, group: 'Lantanídeos' },
    { symbol: 'Nd', name: 'Neodímio', atomicNumber: 60, atomicMass: '144.242', period: 6, group: 'Lantanídeos' },
    { symbol: 'Pm', name: 'Promécio', atomicNumber: 61, atomicMass: '145.000', period: 6, group: 'Lantanídeos' },
    { symbol: 'Sm', name: 'Samário', atomicNumber: 62, atomicMass: '150.36', period: 6, group: 'Lantanídeos' },
    { symbol: 'Eu', name: 'Európio', atomicNumber: 63, atomicMass: '151.964', period: 6, group: 'Lantanídeos' },
    { symbol: 'Gd', name: 'Gadolínio', atomicNumber: 64, atomicMass: '157.25', period: 6, group: 'Lantanídeos' },
    { symbol: 'Tb', name: 'Térbio', atomicNumber: 65, atomicMass: '158.925', period: 6, group: 'Lantanídeos' },
    { symbol: 'Dy', name: 'Disprósio', atomicNumber: 66, atomicMass: '162.500', period: 6, group: 'Lantanídeos' },
    { symbol: 'Ho', name: 'Hólmio', atomicNumber: 67, atomicMass: '164.930', period: 6, group: 'Lantanídeos' },
    { symbol: 'Er', name: 'Érbio', atomicNumber: 68, atomicMass: '167.259', period: 6, group: 'Lantanídeos' },
    { symbol: 'Tm', name: 'Túlio', atomicNumber: 69, atomicMass: '168.934', period: 6, group: 'Lantanídeos' },
    { symbol: 'Yb', name: 'Itérbio', atomicNumber: 70, atomicMass: '173.054', period: 6, group: 'Lantanídeos' },
    { symbol: 'Lu', name: 'Lutécio', atomicNumber: 71, atomicMass: '174.967', period: 6, group: 'Lantanídeos' },
    { symbol: 'Hf', name: 'Háfnio', atomicNumber: 72, atomicMass: '178.49', period: 6, group: 'Metais de Transição' },
    { symbol: 'Ta', name: 'Tântalo', atomicNumber: 73, atomicMass: '180.948', period: 6, group: 'Metais de Transição' },
    { symbol: 'W', name: 'Tungstênio', atomicNumber: 74, atomicMass: '183.84', period: 6, group: 'Metais de Transição' },
    { symbol: 'Re', name: 'Rênio', atomicNumber: 75, atomicMass: '186.207', period: 6, group: 'Metais de Transição' },
    { symbol: 'Os', name: 'Ósmio', atomicNumber: 76, atomicMass: '190.23', period: 6, group: 'Metais de Transição' },
    { symbol: 'Ir', name: 'Irídio', atomicNumber: 77, atomicMass: '192.217', period: 6, group: 'Metais de Transição' },
    { symbol: 'Pt', name: 'Platina', atomicNumber: 78, atomicMass: '195.078', period: 6, group: 'Metais de Transição' },
    { symbol: 'Au', name: 'Ouro', atomicNumber: 79, atomicMass: '196.967', period: 6, group: 'Metais de Transição' },
    { symbol: 'Hg', name: 'Mercúrio', atomicNumber: 80, atomicMass: '200.59', period: 6, group: 'Metais de Transição' },
    { symbol: 'Tl', name: 'Tálio', atomicNumber: 81, atomicMass: '204.383', period: 6, group: 'Metais Representativos' },
    { symbol: 'Pb', name: 'Chumbo', atomicNumber: 82, atomicMass: '207.2', period: 6, group: 'Metais Representativos' },
    { symbol: 'Bi', name: 'Bismuto', atomicNumber: 83, atomicMass: '208.980', period: 6, group: 'Metais Representativos' },
    { symbol: 'Po', name: 'Polônio', atomicNumber: 84, atomicMass: '209.000', period: 6, group: 'Semimetais' },
    { symbol: 'At', name: 'Astato', atomicNumber: 85, atomicMass: '210.000', period: 6, group: 'Halogênios' },
    { symbol: 'Rn', name: 'Radônio', atomicNumber: 86, atomicMass: '222.000', period: 6, group: 'Gases Nobres' },
    { symbol: 'Fr', name: 'Frâncio', atomicNumber: 87, atomicMass: '223.020', period: 7, group: 'Metais Alcalinos' },
    { symbol: 'Ra', name: 'Rádio', atomicNumber: 88, atomicMass: '226.025', period: 7, group: 'Metais Alcalino-Terrosos' },
    { symbol: 'Ac', name: 'Actínio', atomicNumber: 89, atomicMass: '227.028', period: 7, group: 'Actinídeos' },
    { symbol: 'Th', name: 'Tório', atomicNumber: 90, atomicMass: '232.038', period: 7, group: 'Actinídeos' },
    { symbol: 'Pa', name: 'Protactínio', atomicNumber: 91, atomicMass: '231.036', period: 7, group: 'Actinídeos' },
    { symbol: 'U', name: 'Urânio', atomicNumber: 92, atomicMass: '238.029', period: 7, group: 'Actinídeos' },
    { symbol: 'Np', name: 'Neptúnio', atomicNumber: 93, atomicMass: '237.048', period: 7, group: 'Actinídeos' },
    { symbol: 'Pu', name: 'Plutônio', atomicNumber: 94, atomicMass: '244.064', period: 7, group: 'Actinídeos' },
    { symbol: 'Am', name: 'Amerício', atomicNumber: 95, atomicMass: '243.061', period: 7, group: 'Actinídeos' },
    { symbol: 'Cm', name: 'Cúrio', atomicNumber: 96, atomicMass: '247.070', period: 7, group: 'Actinídeos' },
    { symbol: 'Bk', name: 'Bérklio', atomicNumber: 97, atomicMass: '247.070', period: 7, group: 'Actinídeos' },
    { symbol: 'Cf', name: 'Califórnio', atomicNumber: 98, atomicMass: '251.080', period: 7, group: 'Actinídeos' },
    { symbol: 'Es', name: 'Einstênio', atomicNumber: 99, atomicMass: '252.083', period: 7, group: 'Actinídeos' },
    { symbol: 'Fm', name: 'Férmio', atomicNumber: 100, atomicMass: '257.095', period: 7, group: 'Actinídeos' },
    { symbol: 'Md', name: 'Mendelévio', atomicNumber: 101, atomicMass: '258.100', period: 7, group: 'Actinídeos' },
    { symbol: 'No', name: 'Nobélio', atomicNumber: 102, atomicMass: '259.101', period: 7, group: 'Actinídeos' },
    { symbol: 'Lr', name: 'Laurêncio', atomicNumber: 103, atomicMass: '262.110', period: 7, group: 'Actinídeos' },
    { symbol: 'Rf', name: 'Rutherfórdio', atomicNumber: 104, atomicMass: '267.122', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Db', name: 'Dúbnio', atomicNumber: 105, atomicMass: '268.126', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Sg', name: 'Seabórgio', atomicNumber: 106, atomicMass: '269.129', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Bh', name: 'Bóhrio', atomicNumber: 107, atomicMass: '270.133', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Hs', name: 'Hássio', atomicNumber: 108, atomicMass: '277.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Mt', name: 'Meitnério', atomicNumber: 109, atomicMass: '278.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Ds', name: 'Darmstádio', atomicNumber: 110, atomicMass: '281.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Rg', name: 'Rêntgenio', atomicNumber: 111, atomicMass: '282.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Cn', name: 'Copernício', atomicNumber: 112, atomicMass: '285.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Nh', name: 'Nihônio', atomicNumber: 113, atomicMass: '286.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Fl', name: 'Fleróvio', atomicNumber: 114, atomicMass: '289.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Mc', name: 'Moscóvio', atomicNumber: 115, atomicMass: '290.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Lv', name: 'Liverpmório', atomicNumber: 116, atomicMass: '293.000', period: 7, group: 'Elementos Transactínidos' },
    { symbol: 'Ts', name: 'Tenesso', atomicNumber: 117, atomicMass: '294.000', period: 7, group: 'Elementos Superpeados' },
    { symbol: 'Og', name: 'Oganessônio', atomicNumber: 118, atomicMass: '294.000', period: 7, group: 'Gases Nobres' }
    ];
  
// Função para criar a tabela periódica
function createPeriodicTable() {
    const periodicTable = document.getElementById('periodic-table');
  
    for (let i = 0; i < elements.length; i++) {
      const element = document.createElement('div');
      element.classList.add('element');
      element.dataset.index = i;
  
      const symbol = document.createElement('div');
      symbol.classList.add('symbol');
      symbol.textContent = elements[i].symbol;
  
      const name = document.createElement('div');
      name.classList.add('name');
      name.textContent = elements[i].name;
  
      const atomicNumber = document.createElement('div');
      atomicNumber.classList.add('atomic-number');
      atomicNumber.textContent = elements[i].atomicNumber;
  
      element.appendChild(symbol);
      element.appendChild(name);
      element.appendChild(atomicNumber);
  
      element.addEventListener('click', () => {
        showElementInfo(i);
      });

    // Adicionar a classe correspondente ao grupo do elemento
    if (elements[i].group === 'Metais Alcalinos') {
        element.classList.add('alkali-metals');
    } else if (elements[i].group === 'Metais Alcalino-Terrosos') {
        element.classList.add('alkaline-earth-metals');
    } else if (elements[i].group === 'Metais de Transição') {
        element.classList.add('transition-metals');
    } else if (elements[i].group === 'Metais Representativos') {
        element.classList.add('post-transition-metals');
    } else if (elements[i].group === 'Semimetais') {
        element.classList.add('metalloids');
    } else if (elements[i].group === 'Não Metais') {
        element.classList.add('nonmetals');
    } else if (elements[i].group === 'Halogênios') {
        element.classList.add('halogens');
    } else if (elements[i].group === 'Gases Nobres') {
        element.classList.add('noble-gases');
    } else if (elements[i].group === 'Actinídeos') {
        element.classList.add('actinideos');
    } else if (elements[i].group === 'Elementos Superpeados') {
        element.classList.add('elementos_superpeados');
    } else if (elements[i].group === 'Elementos Transactínidos') {
        element.classList.add('elementos_transactinidos');
    } else if (elements[i].group === 'Lantanídeos') {
        element.classList.add('lantanideos');
    }
  
      periodicTable.appendChild(element);
    }
  }
  
    // Função para exibir informações do elemento selecionado
function showElementInfo(index) {
    const elementName = document.getElementById('element-name');
    const elementDescription = document.getElementById('element-description');
    const elementModel = document.getElementById('element-model');
  
    elementName.textContent = elements[index].name;
    elementDescription.innerHTML = `
      <p>Símbolo: ${elements[index].symbol}</p>
      <p>Número Atômico: ${elements[index].atomicNumber}</p>
      <p>Massa Atômica: ${elements[index].atomicMass}</p>
      <p>Período: ${elements[index].period}</p>
      <p>Grupo: ${elements[index].group}</p>
    `;
  
    // Limpar o canvas antes de desenhar o novo modelo
    const ctx = elementModel.getContext('2d');
    ctx.clearRect(0, 0, elementModel.width, elementModel.height);
  
    // Desenhar o modelo atômico do elemento
    const atomicNumber = elements[index].atomicNumber;
    const electronShells = getElectronShells(atomicNumber);
  
    const centerX = elementModel.width / 2;
    const centerY = elementModel.height / 2;
    const maxShellRadius = Math.min(centerX, centerY) * 0.8;
  
// Desenhar os elétrons com animação
const electronSpeed = 0.002; // Velocidade da animação dos elétrons
let electronAngle = 0;

function animateElectrons() {
  ctx.clearRect(0, 0, elementModel.width, elementModel.height);

  // Desenhar as camadas eletrônicas
  for (let i = 0; i < electronShells.length; i++) {
    const shellRadius = (maxShellRadius / electronShells.length) * (i + 1);
    ctx.beginPath();
    ctx.arc(centerX, centerY, shellRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.stroke();
  }

  // Desenhar o núcleo
  const nucleusRadius = maxShellRadius * 0.1;
  ctx.beginPath();
  ctx.arc(centerX, centerY, nucleusRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
  ctx.fill();

  // Desenhar os elétrons com animação
  for (let i = 0; i < electronShells.length; i++) {
    const electrons = electronShells[i];
    const shellRadius = (maxShellRadius / electronShells.length) * (i + 1);
    const angleStep = (2 * Math.PI) / electrons;

    for (let j = 0; j < electrons; j++) {
      const angle = electronAngle + j * angleStep;
      const x = centerX + shellRadius * Math.cos(angle);
      const y = centerY + shellRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, nucleusRadius * 0.3, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
      ctx.fill();
    }
  }

  electronAngle += electronSpeed;
  requestAnimationFrame(animateElectrons);
}

animateElectrons();
}
  
  // Função para obter a distribuição eletrônica por camada
  function getElectronShells(atomicNumber) {
    const shells = [2, 8, 18, 32, 50];
    const electronShells = [];
  
    let remainingElectrons = atomicNumber;
  
    for (let i = 0; i < shells.length; i++) {
      if (remainingElectrons <= 0) {
        break;
      }
  
      const electrons = Math.min(shells[i], remainingElectrons);
      electronShells.push(electrons);
      remainingElectrons -= electrons;
    }
  
    return electronShells;
  }
  
  // Criar a tabela periódica quando a página for carregada
  window.onload = createPeriodicTable;