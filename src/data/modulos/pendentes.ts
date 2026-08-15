import type { Module, SubTopic } from '../../types';

/**
 * Módulos 4 a 28: a grade completa, ainda por escrever.
 *
 * Eles ficam aqui com `content` vazio de propósito. Antes, cada um desses
 * tópicos trazia a string "Conteúdo em desenvolvimento...", o que produzia uma
 * página que parecia pronta e não era — o leitor clicava, recebia uma frase e
 * ficava sem saber se aquilo era o conteúdo ou uma falha. Com o campo vazio, a
 * interface reconhece o estágio e mostra um aviso honesto, com a descrição do
 * que o módulo vai cobrir e para onde ir enquanto isso.
 *
 * A grade é mantida por inteiro desde já porque ela é o mapa: quem estuda
 * precisa ver onde o tópico de hoje se encaixa no caminho até o fim.
 */
function pendentes(pares: [string, string][]): SubTopic[] {
  return pares.map(([id, title]) => ({ id, title, content: '', exercises: [] }));
}

export const modulosPendentes: Module[] = [
  {
    id: '5',
    title: '5. Mecânica Analítica',
    descricao:
      'A reformulação de Lagrange e Hamilton: em vez de forças, princípios variacionais — a linguagem em que toda a física posterior foi escrita.',
    subtopics: pendentes([
      ['5.1', '5.1. Princípio da mínima ação'],
      ['5.2', '5.2. Lagrangiana'],
      ['5.3', '5.3. Equações de Euler-Lagrange'],
      ['5.4', '5.4. Hamiltoniana'],
      ['5.5', '5.5. Espaço de fases'],
      ['5.6', '5.6. Simetrias e conservação'],
      ['5.7', '5.7. Teorema de Noether'],
    ]),
  },
  {
    id: '6',
    title: '6. Relatividade Especial',
    descricao:
      'O que segue de exigir que a velocidade da luz seja a mesma para todos: espaço e tempo deixam de ser absolutos e passam a ser um único objeto.',
    subtopics: pendentes([
      ['6.1', '6.1. Postulados de Einstein'],
      ['6.2', '6.2. Espaço-tempo'],
      ['6.3', '6.3. Intervalo espaço-temporal'],
      ['6.4', '6.4. Quadrivetores'],
      ['6.5', '6.5. Energia relativística'],
      ['6.6', '6.6. Tensor energia-momento'],
    ]),
  },
  {
    id: '7',
    title: '7. Física Estatística',
    descricao:
      'Como a termodinâmica emerge da contagem de microestados, e por que sistemas com muitas partículas exibem comportamento coletivo que nenhuma delas tem.',
    subtopics: pendentes([
      ['7.1', '7.1. Microestados'],
      ['7.2', '7.2. Macroestados'],
      ['7.3', '7.3. Distribuição de Boltzmann'],
      ['7.4', '7.4. Entropia estatística'],
      ['7.5', '7.5. Flutuações térmicas'],
      ['7.6', '7.6. Transições de fase'],
    ]),
  },
  {
    id: '8',
    title: '8. Mecânica Quântica',
    descricao:
      'A teoria que substitui trajetórias por amplitudes de probabilidade — e o formalismo de operadores que a torna calculável.',
    subtopics: pendentes([
      ['8.1', '8.1. Dualidade onda-partícula'],
      ['8.2', '8.2. Função de onda'],
      ['8.3', '8.3. Equação de Schrödinger'],
      ['8.4', '8.4. Operadores'],
      ['8.5', '8.5. Observáveis'],
      ['8.6', '8.6. Estados quânticos'],
      ['8.7', '8.7. Spin'],
      ['8.8', '8.8. Oscilador harmônico quântico'],
      ['8.9', '8.9. Teoria de perturbações'],
    ]),
  },
  {
    id: '9',
    title: '9. Teoria Quântica de Campos (TQC)',
    descricao:
      'A síntese de quântica com relatividade restrita: partículas deixam de ser objetos e passam a ser excitações de campos que preenchem o espaço.',
    subtopics: pendentes([
      ['9.1', '9.1. Campos clássicos'],
      ['9.2', '9.2. Campos escalares'],
      ['9.3', '9.3. Campos vetoriais'],
      ['9.4', '9.4. Quantização de campos'],
      ['9.5', '9.5. Partículas como excitações de campos'],
      ['9.6', '9.6. Diagramas de Feynman'],
      ['9.7', '9.7. Seções de choque'],
      ['9.8', '9.8. Taxas de decaimento'],
    ]),
  },
  {
    id: '10',
    title: '10. Simetrias em Física',
    descricao:
      'Teoria de grupos como gramática das leis físicas: o que se conserva, o que se transforma, e por que as partículas vêm nas famílias que vêm.',
    subtopics: pendentes([
      ['10.1', '10.1. Grupos'],
      ['10.2', '10.2. Grupos contínuos'],
      ['10.3', '10.3. Grupos de Lie'],
      ['10.4', '10.4. Álgebras de Lie'],
      ['10.5', '10.5. Representações de grupos'],
      ['10.6', '10.6. Simetrias globais'],
      ['10.7', '10.7. Simetrias locais (gauge)'],
    ]),
  },
  {
    id: '11',
    title: '11. Teorias de Gauge',
    descricao:
      'Exigir que uma simetria valha ponto a ponto força o surgimento de campos de interação. As forças da natureza aparecem como consequência.',
    subtopics: pendentes([
      ['11.1', '11.1. U(1)'],
      ['11.2', '11.2. SU(2)'],
      ['11.3', '11.3. SU(3)'],
      ['11.4', '11.4. Campos de gauge'],
      ['11.5', '11.5. Derivada covariante'],
      ['11.6', '11.6. Tensor de campo'],
      ['11.7', '11.7. Teorias de Yang-Mills'],
    ]),
  },
  {
    id: '12',
    title: '12. Modelo Padrão de Partículas',
    descricao:
      'O inventário confirmado da matéria e das forças, e a teoria mais precisamente testada da história — junto com o que ela reconhecidamente não explica.',
    subtopics: pendentes([
      ['12.1', '12.1. Léptons'],
      ['12.2', '12.2. Quarks'],
      ['12.3', '12.3. Bósons mediadores'],
      ['12.4', '12.4. Campo de Higgs'],
      ['12.5', '12.5. Quebra eletrofraca'],
      ['12.6', '12.6. Massa das partículas'],
    ]),
  },
  {
    id: '13',
    title: '13. Mecanismo de Higgs',
    descricao:
      'Como bósons de gauge adquirem massa sem destruir a simetria da teoria — a peça que faltava, confirmada no LHC em 2012.',
    subtopics: pendentes([
      ['13.1', '13.1. Potencial de Higgs'],
      ['13.2', '13.2. Quebra espontânea de simetria'],
      ['13.3', '13.3. Valor esperado no vácuo (VEV)'],
      ['13.4', '13.4. Bósons de Goldstone'],
      ['13.5', '13.5. Bósons de gauge massivos'],
      ['13.6', '13.6. Higgs dupleto'],
    ]),
  },
  {
    id: '14',
    title: '14. Cosmologia Básica',
    descricao:
      'A relatividade geral aplicada ao universo inteiro: expansão, métrica FLRW e as equações que determinam a história cósmica.',
    subtopics: pendentes([
      ['14.1', '14.1. Universo em expansão'],
      ['14.2', '14.2. Lei de Hubble'],
      ['14.3', '14.3. Redshift'],
      ['14.4', '14.4. Princípio cosmológico'],
      ['14.5', '14.5. Métrica FLRW'],
      ['14.6', '14.6. Equações de Friedmann'],
      ['14.7', '14.7. Idade do Universo'],
    ]),
  },
  {
    id: '15',
    title: '15. Cosmologia Moderna',
    descricao:
      'O que as observações estabeleceram: radiação de fundo, abundâncias primordiais e o modelo de seis parâmetros que ajusta tudo isso.',
    subtopics: pendentes([
      ['15.1', '15.1. Radiação cósmica de fundo'],
      ['15.2', '15.2. Nucleossíntese primordial'],
      ['15.3', '15.3. Formação de galáxias'],
      ['15.4', '15.4. Matéria escura'],
      ['15.5', '15.5. Energia escura'],
      ['15.6', '15.6. Modelo ΛCDM'],
    ]),
  },
  {
    id: '16',
    title: '16. Relatividade Geral',
    descricao:
      'Gravidade como geometria: a matéria diz ao espaço-tempo como se curvar, e a curvatura diz à matéria como se mover.',
    subtopics: pendentes([
      ['16.1', '16.1. Princípio da equivalência'],
      ['16.2', '16.2. Geometria diferencial'],
      ['16.3', '16.3. Variedades'],
      ['16.4', '16.4. Métrica'],
      ['16.5', '16.5. Geodésicas'],
      ['16.6', '16.6. Curvatura'],
      ['16.7', '16.7. Tensores'],
      ['16.8', '16.8. Tensor de Ricci'],
      ['16.9', '16.9. Escalar de Ricci'],
      ['16.10', '16.10. Equações de Einstein'],
    ]),
  },
  {
    id: '17',
    title: '17. Buracos Negros e Horizontes',
    descricao:
      'Onde relatividade, termodinâmica e teoria quântica se encontram — e onde a entropia passa a ser proporcional à área, não ao volume.',
    subtopics: pendentes([
      ['17.1', '17.1. Horizonte de eventos'],
      ['17.2', '17.2. Buraco negro de Schwarzschild'],
      ['17.3', '17.3. Área do horizonte'],
      ['17.4', '17.4. Temperatura de Hawking'],
      ['17.5', '17.5. Entropia de Bekenstein-Hawking'],
    ]),
  },
  {
    id: '18',
    title: '18. Gravidade Termodinâmica',
    descricao:
      'A hipótese de que as equações de Einstein são uma equação de estado — gravidade como fenômeno emergente, não fundamental.',
    subtopics: pendentes([
      ['18.1', '18.1. Temperatura de Unruh'],
      ['18.2', '18.2. Horizontes de Rindler'],
      ['18.3', '18.3. Relação de Clausius'],
      ['18.4', '18.4. Equações de Einstein como equação de estado'],
      ['18.5', '18.5. Correntes de entropia'],
      ['18.6', '18.6. Hidrodinâmica relativística'],
    ]),
  },
  {
    id: '19',
    title: '19. Teoria Efetiva de Campos',
    descricao:
      'Por que é possível fazer física sem conhecer a teoria final: separação de escalas, renormalização e o que "naturalidade" quer dizer.',
    subtopics: pendentes([
      ['19.1', '19.1. Escalas de energia'],
      ['19.2', '19.2. Operadores efetivos'],
      ['19.3', '19.3. Renormalização'],
      ['19.4', '19.4. Grupo de renormalização'],
      ['19.5', '19.5. Cutoff ultravioleta'],
      ['19.6', '19.6. Naturalidade'],
    ]),
  },
  {
    id: '20',
    title: '20. Cosmologia de Campos Escalares',
    descricao:
      'Campos escalares como motores cosmológicos: inflação no início e energia escura hoje.',
    subtopics: pendentes([
      ['20.1', '20.1. Inflaton'],
      ['20.2', '20.2. Quintessência'],
      ['20.3', '20.3. Slow-roll'],
      ['20.4', '20.4. Campos ultraleves'],
      ['20.5', '20.5. Energia do vácuo'],
    ]),
  },
  {
    id: '21',
    title: '21. Matéria Escura',
    descricao:
      'A evidência de que 85% da matéria não emite luz, os candidatos propostos e o estado das buscas experimentais.',
    subtopics: pendentes([
      ['21.1', '21.1. Evidências observacionais'],
      ['21.2', '21.2. Freeze-out térmico'],
      ['21.3', '21.3. WIMPs'],
      ['21.4', '21.4. Matéria escura vetorial'],
      ['21.5', '21.5. Matéria escura auto-interagente'],
      ['21.6', '21.6. Abundância relicta'],
      ['21.7', '21.7. Detecção direta'],
      ['21.8', '21.8. Detecção indireta'],
    ]),
  },
  {
    id: '22',
    title: '22. Quebra Espontânea de Simetria Avançada',
    descricao:
      'O mecanismo pelo qual o estado fundamental tem menos simetria que as leis que o governam — e o que sobra disso em forma de partículas leves.',
    subtopics: pendentes([
      ['22.1', '22.1. Potencial mexicano'],
      ['22.2', '22.2. Modos radiais'],
      ['22.3', '22.3. Modos angulares'],
      ['22.4', '22.4. Teorema de Goldstone'],
      ['22.5', '22.5. Pseudo-Goldstones'],
      ['22.6', '22.6. Simetria custodial'],
    ]),
  },
  {
    id: '23',
    title: '23. Teorias Não Abelianas',
    descricao:
      'Quando os geradores da simetria não comutam, os campos de gauge interagem entre si — e daí vêm o confinamento e a liberdade assintótica.',
    subtopics: pendentes([
      ['23.1', '23.1. Estrutura SU(2)'],
      ['23.2', '23.2. Geradores'],
      ['23.3', '23.3. Constantes de estrutura'],
      ['23.4', '23.4. Auto-acoplamentos'],
      ['23.5', '23.5. Confinamento (conceito)'],
      ['23.6', '23.6. Setores escuros não abelianos'],
    ]),
  },
  {
    id: '24',
    title: '24. Defeitos Topológicos',
    descricao:
      'Estruturas estáveis por topologia, não por energia: monopolos, cordas cósmicas e o que elas deixariam como assinatura observável.',
    subtopics: pendentes([
      ['24.1', '24.1. Topologia básica'],
      ['24.2', '24.2. Homotopia'],
      ['24.3', '24.3. Monopolos'],
      ['24.4', '24.4. Cordas cósmicas'],
      ['24.5', '24.5. Cordas globais'],
      ['24.6', '24.6. Redes de defeitos'],
    ]),
  },
  {
    id: '25',
    title: '25. Ondas Gravitacionais',
    descricao:
      'Ondulações na própria geometria do espaço-tempo, previstas em 1916 e detectadas em 2015 — um novo canal de observação do universo.',
    subtopics: pendentes([
      ['25.1', '25.1. Perturbações da métrica'],
      ['25.2', '25.2. Produção de ondas gravitacionais'],
      ['25.3', '25.3. Fundo estocástico'],
      ['25.4', '25.4. Detectores de ondas gravitacionais'],
      ['25.5', '25.5. LISA'],
      ['25.6', '25.6. Pulsar Timing Arrays'],
    ]),
  },
  {
    id: '26',
    title: '26. Formação de Estruturas no Universo',
    descricao:
      'Como flutuações quânticas microscópicas do universo primordial viraram galáxias e aglomerados.',
    subtopics: pendentes([
      ['26.1', '26.1. Perturbações cosmológicas'],
      ['26.2', '26.2. Crescimento linear'],
      ['26.3', '26.3. Espectro de potência'],
      ['26.4', '26.4. Função de transferência'],
      ['26.5', '26.5. Lentes gravitacionais fracas'],
      ['26.6', '26.6. Floresta Lyman-α'],
    ]),
  },
  {
    id: '27',
    title: '27. Métodos Computacionais em Cosmologia',
    descricao:
      'As ferramentas numéricas com que a cosmologia é feita na prática: integradores, cadeias de Markov e solvers de Einstein–Boltzmann.',
    subtopics: pendentes([
      ['27.1', '27.1. Integração numérica'],
      ['27.2', '27.2. Método de Runge-Kutta'],
      ['27.3', '27.3. Solução de equações diferenciais acopladas'],
      ['27.4', '27.4. Cadeias de Markov (MCMC)'],
      ['27.5', '27.5. Código CLASS'],
      ['27.6', '27.6. Código CAMB'],
      ['27.7', '27.7. Solvers Einstein–Boltzmann'],
    ]),
  },
  {
    id: '28',
    title: '28. Tópicos Específicos do Artigo',
    descricao:
      'A síntese para a qual toda a trilha aponta: setores escuros não abelianos, seleção termodinâmica e unificação estrutural entre matéria e energia escura.',
    subtopics: pendentes([
      ['28.1', '28.1. Teorias Yang-Mills-Higgs'],
      ['28.2', '28.2. Setores escuros unificados'],
      ['28.3', '28.3. Quintessência pseudo-Goldstone'],
      ['28.4', '28.4. Simetria global U(1)PQ'],
      ['28.5', '28.5. Vetores massivos de SU(2)D'],
      ['28.6', '28.6. Simetria custodial SO(3)'],
      ['28.7', '28.7. Princípio de seleção termodinâmica'],
      ['28.8', '28.8. Extremização de entropia em horizontes'],
      ['28.9', '28.9. Parâmetros de ordem cosmológicos'],
      ['28.10', '28.10. Transições de fase cosmológicas'],
      ['28.11', '28.11. Fundo estocástico de ondas gravitacionais'],
      ['28.12', '28.12. Unificação estrutural: matéria e energia escura'],
    ]),
  },
];
