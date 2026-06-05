import { Module } from '../types';

export const curriculum: Module[] = [
  {
    id: '1',
    title: '1. Matemática Fundamental',
    subtopics: [
      {
        id: '1.1',
        title: '1.1. Aritmética',
        content: `
A aritmética é a base de toda a matemática. Ela lida com os números e as operações básicas que fazemos com eles no dia a dia.

**Números Inteiros:** São os números completos, positivos e negativos, incluindo o zero (..., -2, -1, 0, 1, 2, ...).
**Frações:** Representam partes de um todo. O número de cima é o numerador (quantas partes temos) e o de baixo é o denominador (em quantas partes o todo foi dividido).
**Razões e proporções:** Comparamos duas quantidades. Se um bolo leva 2 xícaras de farinha para 1 de açúcar, a razão é 2:1.
**Potências:** É uma forma curta de escrever multiplicações repetidas. Por exemplo, 2³ significa 2 * 2 * 2 = 8.
**Raízes:** É o processo inverso da potência. A raiz quadrada de 9 é 3, porque 3² = 9.
**Notação científica:** Uma forma de escrever números muito grandes ou muito pequenos usando potências de 10 (ex: 3 x 10⁸).
        `,
        exercises: [
          {
            id: 'ex-1.1.1',
            question: 'Se você tem uma pizza dividida em 8 fatias e come 2, que fração da pizza você comeu?',
            options: ['1/8', '2/8 (ou 1/4)', '1/2', '4/8'],
            correctAnswerIndex: 1,
            explanation: 'Você comeu 2 fatias de um total de 8, logo a fração é 2/8. Dividindo o topo e a base por 2, simplificamos para 1/4.'
          },
          {
            id: 'ex-1.1.2',
            question: 'Qual é o resultado de 3 elevado à 3ª potência (3³)?',
            options: ['9', '6', '27', '81'],
            correctAnswerIndex: 2,
            explanation: '3³ significa 3 vezes 3 vezes 3. (3 * 3 = 9) e (9 * 3 = 27).'
          }
        ]
      },
      {
        id: '1.2',
        title: '1.2. Álgebra Básica',
        content: `
A álgebra usa letras (variáveis) para representar números desconhecidos ou que podem mudar.

**Variáveis:** Letras como *x* ou *y* que guardam um valor.
**Equações:** São como balanças em equilíbrio. O lado esquerdo tem que ser igual ao lado direito (ex: x + 2 = 5).
**Sistemas de equações:** Mais de uma equação ao mesmo tempo para descobrir mais de uma variável.
**Funções:** São "máquinas" matemáticas. Você coloca um número, a função faz uma operação e cospe outro número (ex: f(x) = 2x).
**Gráficos:** Uma forma visual de ver como uma função se comporta em um plano (eixos X e Y).
        `,
        exercises: [
          {
            id: 'ex-1.2.1',
            question: 'Se x + 5 = 12, qual é o valor de x?',
            options: ['5', '7', '17', '6'],
            correctAnswerIndex: 1,
            explanation: 'Para isolar o x, subtraímos 5 dos dois lados: x = 12 - 5, logo x = 7.'
          }
        ]
      },
      {
        id: '1.3',
        title: '1.3. Geometria',
        content: `
A geometria é o estudo das formas, tamanhos, posições e dimensões das coisas no espaço. Ela nos ajuda a entender desde a planta de uma casa até o movimento dos planetas.

**Geometria Plana:** Lida com figuras "achatadas" em uma superfície 2D (como uma folha de papel). Exemplos: quadrados, triângulos e círculos.
- **Área:** É o espaço dentro de uma figura plana. Imagine quanto de tinta você precisaria para pintar o chão de uma sala.

**Geometria Espacial:** Adiciona a terceira dimensão (profundidade). Agora temos objetos 3D, como cubos, esferas e pirâmides.
- **Volume:** É o espaço que um objeto 3D ocupa. Imagine quanta água cabe dentro de uma caixa d'água.

**Coordenadas Cartesianas:** Um sistema criado por René Descartes que usa dois eixos cruzados (X horizontal, Y vertical) para encontrar a localização exata de qualquer ponto, como no jogo "Batalha Naval".
        `,
        exercises: [
          {
            id: 'ex-1.3.1',
            question: 'Se um quarto quadrado tem 4 metros de lado, qual é a área do piso?',
            options: ['8 metros quadrados', '16 metros quadrados', '12 metros quadrados', '4 metros quadrados'],
            correctAnswerIndex: 1,
            explanation: 'A área de um quadrado é o lado multiplicado por ele mesmo (Lado × Lado). Portanto, 4 × 4 = 16 metros quadrados.'
          }
        ]
      },
      {
        id: '1.4',
        title: '1.4. Trigonometria',
        content: `
A trigonometria estuda a relação entre os lados e os ângulos dos triângulos, focando especialmente nos triângulos que têm um ângulo reto de 90° (triângulos retângulos).

Imagine que você está na sombra de uma árvore, e quer saber a altura dela. A trigonometria te dá ferramentas matemáticas mágicas para medir isso!

**Seno (sen):** A relação entre o lado *oposto* ao ângulo e o lado mais longo do triângulo (hipotenusa).
**Cosseno (cos):** A relação entre o lado *vizinho* (adjacente) ao ângulo e a hipotenusa.
**Tangente (tan):** A relação entre o lado oposto e o lado vizinho.

Essas funções são vitais em tudo: desde construir pontes até criar gráficos 3D em jogos de videogame e prever ondas no mar.
        `,
        exercises: [
          {
            id: 'ex-1.4.1',
            question: 'Em um triângulo retângulo, a relação entre o cateto oposto e a hipotenusa é chamada de:',
            options: ['Cosseno', 'Tangente', 'Seno', 'Vetor'],
            correctAnswerIndex: 2,
            explanation: 'Exato! O Seno (sen) é a razão matemática entre a medida do cateto oposto a um ângulo e a medida da hipotenusa.'
          }
        ]
      },
      {
        id: '1.5',
        title: '1.5. Álgebra Vetorial',
        content: `
Esqueça os números comuns por um instante. Vetores não são apenas quantidades, eles representam **"quanto"** e para **"onde"**.

**Vetores:** Ferramentas matemáticas com *Módulo* (tamanho/força) e *Direção/Sentido* (para onde aponta). Pode usar vetores para mapear como o vento sopra numa cidade (velocidade + direção do vento).

**Soma Vetorial:** Quando você empurra uma caixa para frente, e seu amigo empurra para a direita, a caixa se move na diagonal. O caminho diagonal é a soma dos vetores.
**Produto Escalar:** Multiplica dois vetores, mas o resultado será um número simples (um escalar), nos dizendo o quão alinhados eles estão.
**Produto Vetorial:** Multiplica dois vetores no espaço 3D, criando um terceiro vetor inteiramente novo que sai rasgando perfeitamente a 90 graus (ortogonal) em relação aos outros dois.
        `,
        exercises: [
          {
            id: 'ex-1.5.1',
            question: 'O que diferencia um "Vetor" de um número normal (escalar)?',
            options: ['O vetor não tem valor, apenas sentido.', 'O vetor possui módulo (tamanho) e direção/sentido.', 'O vetor só existe em 3D.', 'O vetor é sempre positivo.'],
            correctAnswerIndex: 1,
            explanation: 'Correto! Diferente de um número comum, o vetor aponta para alguma direção.'
          }
        ]
      },
      {
        id: '1.6',
        title: '1.6. Álgebra Linear',
        content: `
Se você ama como a física moderna descreve buracos negros ou como a IA gera imagens, você deve agradecer à Álgebra Linear! Ela é a matemática do "espaço múltiplo".

**Espaços Vetoriais:** Universos matemáticos flexíveis onde vetores vivem e podem ser escalados e somados livremente.
**Matrizes:** Grandes "tabelas" numéricas. São as engrenagens principais na computação e física para transformar e esticar o espaço 3D.
**Determinantes:** Um número único mágico extraído de uma matriz que mede como o espaço original foi esticado, espremido ou achatado durante uma transformação.
**Autovalores e Autovetores (Eigenvectors):** Em um mundo caótico giratório (matrizes), os autovetores são aqueles vetores teimosos que permanecem perfeitamente na mesma direção, mesmo que sejam apenas esticados (seu "autovalor").
        `,
        exercises: [
          {
            id: 'ex-1.6.1',
            question: 'O que descreve melhor uma Matriz na Álgebra Linear?',
            options: ['Um único número complexo.', 'Uma equação diferencial.', 'Uma estrutura tabular numérica usada para transformações do espaço.', 'Um vetor de tamanho 1.'],
            correctAnswerIndex: 2,
            explanation: 'Uma matriz atua como uma tabela de números que transforma ou mapeia o espaço.'
          }
        ]
      },
      {
        id: '1.7',
        title: '1.7. Cálculo Diferencial',
        content: `
Criado independentemente por Newton e Leibniz, o cálculo mudou a humanidade. É a pura matemática da **mudança contínua**.

**Taxas de Variação:** Quando dirigimos à noite, quão rápido nossa posição está mudando examente neste milissegundo? O cálculo responde isso.
**Limites:** A base do cálculo. Permite examinar o que acontece com uma função ou valor à medida que ele se aproxima microscopicamente perto de algo, sem nunca necessariamente tocá-lo.
**Derivadas:** É o coração do cálculo. A derivada de qualquer curva nos dá uma nova curva que informa quão íngreme (sua taxa de variação ou "velocidade") a curva original está crescendo em todos os pontos. 
**Máximos e Mínimos:** Ferramenta da derivada que acha perfeitamente o pico mais alto (lucro máximo) ou mais fundo (gasto mínimo) de qualquer gráfico, simplesmente encontrando onde a subida repentinamente é zero.
        `,
        exercises: [
          {
            id: 'ex-1.7.1',
            question: 'Se a função original representa a posição de um carro ao longo do tempo, o que a sua Derivada vai representar?',
            options: ['A aceleração do carro.', 'A velocidade do carro.', 'O tamanho do carro.', 'A cor do carro.'],
            correctAnswerIndex: 1,
            explanation: 'A derivada da posição é a velocidade do carro (a taxa de mudança da posição no tempo).'
          }
        ]
      },
      {
        id: '1.8',
        title: '1.8. Cálculo Integral',
        content: `
Se o cálculo diferencial desmonta as curvas encontrando suas inclinações de mudança (Derivadas), o cálculo Integral repara a curva, **acumulando os pedacinhos.**

**Integrais:** É matematicamente a soma de infinitas (e minúsculas) fatias coladas umas nas outras. 
**Áreas sob curvas:** Quando você observa o gráfico da velocidade do seu carro ao longo do tempo (que flutua num zigue-zague contínuo), se você "Pintar" ou calcular toda a área abaixo dessa curva estranha, você descobre magicamente a incrível distância milimétrica final que o carro andou.
        `,
        exercises: [
          {
            id: 'ex-1.8.1',
            question: 'Se a Derivada separa para achar a taxa de variação de um processo, a Integral serve fundamentalmente para:',
            options: ['Separar variáveis.', 'Somar fatias minúsculas acumuladas sob uma região inteira.', 'Achar a inclinação da reta tangente.', 'Dividir fatias ao meio.'],
            correctAnswerIndex: 1,
            explanation: 'Correto! A Integral pega infinitas fatias infinitesimais e as soma, resultando na acumulação final desejada (como cálculo de áreas).'
          }
        ]
      },
      {
        id: '1.9',
        title: '1.9. Equações Diferenciais',
        content: `
Onde a física brilha — essa é a linguagem na qual as próprias leis majestosas da natureza são originalmente escritas!

Uma equação comum resolve que "x = 4", mas as **equações diferenciais resolvem "taxas em que funções variam" em relação à elas mesmas**. 

**Por exemplo:** Num copo de café quente numa sala fria: "A taxa que o café perde calor deve ser proporcional em todos os momentos exatamente ao calor atual do café!". Resolver isso garante a fórmula de esfriamento para qualquer instante (Equações Ordinárias).

**Sistemas Dinâmicos:** Sistemas como pêndulos, presas/predadores, ou oscilações de estrelas de nêutrons; onde infinitas variáveis de "taxas" trocam forças e comportamentos em fluidas interligações contínuas no tempo!
        `,
        exercises: [
          {
            id: 'ex-1.9.1',
            question: 'Enquanto uma equação algébrica busca um número (ex: x=2), a solução de fato para uma verdadeira Equação Diferencial é:',
            options: ['Um único número negativo.', 'Uma matriz gigante.', 'Uma função inteira.', 'Um vetor numérico.'],
            correctAnswerIndex: 2,
            explanation: 'A solução para uma equação diferencial não é um número, e sim uma função que descreve e modela o comportamento procurado.'
          }
        ]
      },
      {
        id: '1.10',
        title: '1.10. Probabilidade e Estatística',
        content: `
Na natureza nada é 100% perfeitamente visível — muito menos o lado quântico microscópico. A estatística é o escudo de um físico.

**Probabilidade:** A chance matemática natural que lida especificamente entre as apostas de chance nua (Como moedas caindo em coroas).
**Distribuições:** São a impressão digital e os padrões montanhosos da chance gráfica nas quais todos os valores de probabilidade descansam, famosa "curva do sino" (curva de Gauss).
**Médias e Variâncias:** As médias descrevem elegantemente todo o comportamento de qual é o centro e equilíbrio de algo geral. A **Variância** é o "caos em volta do centro", quanto os dados dançam rebeldes em toda distância longe do núcleo perfeito.
**Inferência Estatística:** Quando é doloroso mapear literalmente tudo, coletamos apenas um pingo seguro de "amostras" e conseguimos magicamente reconstruir previsões concretas e massivas sobre os modelos inteiros!
        `,
        exercises: [
          {
            id: 'ex-1.10.1',
            question: 'Em termos simples, se a Média nos mostra o "centro" matemático típico dos dados, o que é que a "Variância" mostra para o cenário inteiro?',
            options: ['Mostra quem ficou em primeiro lugar.', 'Mostra o quão espalhados e distantes os dados estão da média.', 'O erro computacional na máquina.', 'O valor de pico da estatística em si.'],
            correctAnswerIndex: 1,
            explanation: 'Exatamente! A Variância mede justamente a dispersão estendida de todos os resultados se afastando da linha do centro.'
          }
        ]
      },
    ]
  },
  {
    id: '2',
    title: '2. Física Introdutória',
    subtopics: [
      {
        id: '2.1',
        title: '2.1. Grandezas físicas',
        content: `
Para entender o universo, primeiro precisamos saber medir suas propriedades.

**Massa:** Quantidade de "matéria" em um objeto (medida em Quilogramas - kg).
**Tempo:** O fluxo dos eventos (medido em Segundos - s).
**Comprimento:** A distância entre dois pontos (medida em Metros - m).
**Energia:** A capacidade de realizar trabalho ou causar mudanças (medida em Joules - J).

Usamos o Sistema Internacional (SI) para padronizar essas medidas no mundo todo.
        `,
        exercises: [
          {
            id: 'ex-2.1.1',
            question: 'Qual é a unidade padrão de comprimento no Sistema Internacional de Unidades (SI)?',
            options: ['Quilômetro', 'Centímetro', 'Metro', 'Milha'],
            correctAnswerIndex: 2,
            explanation: 'O Metro (m) é a unidade base de comprimento no SI.'
          }
        ]
      },
      {
        id: '2.2',
        title: '2.2. Cinemática',
        content: `
A cinemática é o estudo do **como** as coisas se movem, sem se importar com o **porquê** se movem.

**Velocidade:** É a rapidez com que a posição de algo muda. Fórmula: Distância / Tempo.
**Aceleração:** É a rapidez com que a *velocidade* muda. Você acelera quando pisa no acelerador ou no freio (aceleração negativa).
**Movimento uniforme:** Velocidade constante, aceleração zero.
**Movimento acelerado:** A velocidade muda ao longo do tempo.
        `,
        exercises: [
          {
            id: 'ex-2.2.1',
            question: 'Se um carro viaja 100 km em 2 horas em uma estrada reta, qual é a sua velocidade média?',
            options: ['100 km/h', '200 km/h', '50 km/h', '10 km/h'],
            correctAnswerIndex: 2,
            explanation: 'Velocidade = Distância / Tempo. Portanto, 100 km / 2 h = 50 km/h.'
          }
        ]
      },
      {
        id: '2.3',
        title: '2.3. Dinâmica Newtoniana',
        content: `
Se a cinemática descreve a dança, a dinâmica explica a música por trás dela. Newton formulou três leis imortais que controlam tudo o que tocamos.

**1ª Lei de Newton (Inércia):** O universo é preguiçoso. Um objeto parado prefere continuar parado. Um objeto em movimento prefere continuar em linha reta para sempre. A única forma de mudar isso é usando uma força.
**2ª Lei de Newton (Força = Massa × Aceleração):** Se você quer que algo acelere, aplique uma Força ($F = m a$). Quanto mais pesado (massa) for um caminhão, mais força o motor precisará fazer para ele arrancar.
**3ª Lei de Newton (Ação e Reação):** Quando você dá um soco na parede, a parede também dá um soco idêntico em sua mão. Não existe tocar o universo sem que ele te toque de volta com exata mesma força.

**Conservação do Momento:** O "peso" de um movimento nunca se perde, ele apenas passa adiante. Em uma colisão de sinuca, a velocidade da primeira bola é transferida precisamente para as outras.
        `,
        exercises: [
          {
            id: 'ex-2.3.1',
            question: 'Segundo a Terceira Lei de Newton, se a Terra puxa o seu corpo para baixo com a força da gravidade...',
            options: ['Você não possui força própria.', 'Você também levita lentamente.', 'Seu corpo puxa a Terra para cima com exatamente a mesma força.', 'O ar empurra você para baixo.'],
            correctAnswerIndex: 2,
            explanation: 'Correto! A atração é mútua. Você puxa todo o planeta Terra em sua direção com a exata mesma força que ele usa para te puxar!'
          }
        ]
      },
      {
        id: '2.4',
        title: '2.4. Trabalho e Energia',
        content: `
A Força é a causa mecânica, mas a "Energia" é a verdadeira moeda cósmica invisível que dita se algo sequer tem permissão para acontecer. 

**Trabalho:** Na física, se você empurrar uma parede o dia todo e ela não se mover, você não realizou Nenhum Trabalho. O "Trabalho" mede a Força que efetivamente moveu algo por certa Distância.
**Energia Cinética ($\frac{1}{2}mv^2$):** A pura energia do movimento agressivo! Quanto mais rápida está uma bala, mais devastadora é essa energia que carrega.
**Energia Potencial:** A energia fantasma armazenada! Uma rocha parada na beira do penhasco está cheia de energia potencial escondida. Se ela cair, sua altura se transforma instantaneamente na perigosa Energia Cinética!
**Conservação da Energia:** A regra suprema do Universo: A Energia nunca pode ser destruída e nunca pode aparecer do nada; ela pode apenas mudar sua fantasia (por exemplo, eletricidade virando luz e calor lâmpada).
        `,
        exercises: [
          {
            id: 'ex-2.4.1',
            question: 'Quando seguramos um arco e puxamos firmemente a flecha para trás sem soltar, nela existe:',
            options: ['Termodinâmica gravitacional.', 'Energia Térmica.', 'Energia Cinética.', 'Energia Potencial Elástica.'],
            correctAnswerIndex: 3,
            explanation: 'A tensão carrega a flecha com energia que está aguardando (potencial) pela sua liberação no arco!'
          }
        ]
      },
    ]
  },
  {
    id: '3',
    title: '3. Termodinâmica Básica',
    subtopics: [
      { id: '3.1', title: '3.1. Temperatura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.2', title: '3.2. Calor', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.3', title: '3.3. Entropia', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.4', title: '3.4. Primeira Lei da Termodinâmica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.5', title: '3.5. Segunda Lei da Termodinâmica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.6', title: '3.6. Equilíbrio termodinâmico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.7', title: '3.7. Potenciais termodinâmicos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '3.8', title: '3.8. Transformada de Legendre', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '4',
    title: '4. Eletromagnetismo',
    subtopics: [
      { id: '4.1', title: '4.1. Carga elétrica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.2', title: '4.2. Campo elétrico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.3', title: '4.3. Potencial elétrico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.4', title: '4.4. Campo magnético', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.5', title: '4.5. Equações de Maxwell', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.6', title: '4.6. Ondas eletromagnéticas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '4.7', title: '4.7. Simetrias de gauge U(1)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '5',
    title: '5. Mecânica Analítica',
    subtopics: [
      { id: '5.1', title: '5.1. Princípio da mínima ação', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.2', title: '5.2. Lagrangiana', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.3', title: '5.3. Equações de Euler-Lagrange', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.4', title: '5.4. Hamiltoniana', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.5', title: '5.5. Espaço de fases', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.6', title: '5.6. Simetrias e conservação', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '5.7', title: '5.7. Teorema de Noether', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '6',
    title: '6. Relatividade Especial',
    subtopics: [
      { id: '6.1', title: '6.1. Postulados de Einstein', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '6.2', title: '6.2. Espaço-tempo', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '6.3', title: '6.3. Intervalo espaço-temporal', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '6.4', title: '6.4. Quadrivetores', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '6.5', title: '6.5. Energia relativística', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '6.6', title: '6.6. Tensor energia-momento', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '7',
    title: '7. Física Estatística',
    subtopics: [
      { id: '7.1', title: '7.1. Microestados', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '7.2', title: '7.2. Macroestados', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '7.3', title: '7.3. Distribuição de Boltzmann', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '7.4', title: '7.4. Entropia estatística', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '7.5', title: '7.5. Flutuações térmicas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '7.6', title: '7.6. Transições de fase', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '8',
    title: '8. Mecânica Quântica',
    subtopics: [
      { id: '8.1', title: '8.1. Dualidade onda-partícula', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.2', title: '8.2. Função de onda', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.3', title: '8.3. Equação de Schrödinger', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.4', title: '8.4. Operadores', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.5', title: '8.5. Observáveis', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.6', title: '8.6. Estados quânticos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.7', title: '8.7. Spin', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.8', title: '8.8. Oscilador harmônico quântico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '8.9', title: '8.9. Teoria de perturbações', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '9',
    title: '9. Teoria Quântica de Campos (TQC)',
    subtopics: [
      { id: '9.1', title: '9.1. Campos clássicos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.2', title: '9.2. Campos escalares', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.3', title: '9.3. Campos vetoriais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.4', title: '9.4. Quantização de campos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.5', title: '9.5. Partículas como excitações de campos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.6', title: '9.6. Diagramas de Feynman', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.7', title: '9.7. Seções de choque', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '9.8', title: '9.8. Taxas de decaimento', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '10',
    title: '10. Simetrias em Física',
    subtopics: [
      { id: '10.1', title: '10.1. Grupos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.2', title: '10.2. Grupos contínuos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.3', title: '10.3. Grupos de Lie', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.4', title: '10.4. Álgebras de Lie', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.5', title: '10.5. Representações de grupos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.6', title: '10.6. Simetrias globais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '10.7', title: '10.7. Simetrias locais (gauge)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '11',
    title: '11. Teorias de Gauge',
    subtopics: [
      { id: '11.1', title: '11.1. U(1)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.2', title: '11.2. SU(2)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.3', title: '11.3. SU(3)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.4', title: '11.4. Campos de gauge', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.5', title: '11.5. Derivada covariante', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.6', title: '11.6. Tensor de campo', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '11.7', title: '11.7. Teorias de Yang-Mills', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '12',
    title: '12. Modelo Padrão de Partículas',
    subtopics: [
      { id: '12.1', title: '12.1. Léptons', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '12.2', title: '12.2. Quarks', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '12.3', title: '12.3. Bósons mediadores', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '12.4', title: '12.4. Campo de Higgs', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '12.5', title: '12.5. Quebra eletrofraca', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '12.6', title: '12.6. Massa das partículas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '13',
    title: '13. Mecanismo de Higgs',
    subtopics: [
      { id: '13.1', title: '13.1. Potencial de Higgs', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '13.2', title: '13.2. Quebra espontânea de simetria', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '13.3', title: '13.3. Valor esperado no vácuo (VEV)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '13.4', title: '13.4. Bósons de Goldstone', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '13.5', title: '13.5. Bósons de gauge massivos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '13.6', title: '13.6. Higgs dupleto', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '14',
    title: '14. Cosmologia Básica',
    subtopics: [
      { id: '14.1', title: '14.1. Universo em expansão', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.2', title: '14.2. Lei de Hubble', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.3', title: '14.3. Redshift', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.4', title: '14.4. Princípio cosmológico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.5', title: '14.5. Métrica FLRW', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.6', title: '14.6. Equações de Friedmann', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '14.7', title: '14.7. Idade do Universo', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '15',
    title: '15. Cosmologia Moderna',
    subtopics: [
      { id: '15.1', title: '15.1. Radiação cósmica de fundo', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '15.2', title: '15.2. Nucleossíntese primordial', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '15.3', title: '15.3. Formação de galáxias', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '15.4', title: '15.4. Matéria escura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '15.5', title: '15.5. Energia escura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '15.6', title: '15.6. Modelo ΛCDM', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '16',
    title: '16. Relatividade Geral',
    subtopics: [
      { id: '16.1', title: '16.1. Princípio da equivalência', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.2', title: '16.2. Geometria diferencial', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.3', title: '16.3. Variedades', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.4', title: '16.4. Métrica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.5', title: '16.5. Geodésicas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.6', title: '16.6. Curvatura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.7', title: '16.7. Tensores', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.8', title: '16.8. Tensor de Ricci', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.9', title: '16.9. Escalar de Ricci', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '16.10', title: '16.10. Equações de Einstein', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '17',
    title: '17. Buracos Negros e Horizontes',
    subtopics: [
      { id: '17.1', title: '17.1. Horizonte de eventos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '17.2', title: '17.2. Buraco negro de Schwarzschild', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '17.3', title: '17.3. Área do horizonte', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '17.4', title: '17.4. Temperatura de Hawking', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '17.5', title: '17.5. Entropia de Bekenstein-Hawking', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '18',
    title: '18. Gravidade Termodinâmica',
    subtopics: [
      { id: '18.1', title: '18.1. Temperatura de Unruh', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '18.2', title: '18.2. Horizontes de Rindler', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '18.3', title: '18.3. Relação de Clausius', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '18.4', title: '18.4. Equações de Einstein como equação de estado', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '18.5', title: '18.5. Correntes de entropia', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '18.6', title: '18.6. Hidrodinâmica relativística', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '19',
    title: '19. Teoria Efetiva de Campos',
    subtopics: [
      { id: '19.1', title: '19.1. Escalas de energia', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '19.2', title: '19.2. Operadores efetivos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '19.3', title: '19.3. Renormalização', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '19.4', title: '19.4. Grupo de renormalização', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '19.5', title: '19.5. Cutoff ultravioleta', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '19.6', title: '19.6. Naturalidade', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '20',
    title: '20. Cosmologia de Campos Escalares',
    subtopics: [
      { id: '20.1', title: '20.1. Inflaton', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '20.2', title: '20.2. Quintessência', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '20.3', title: '20.3. Slow-roll', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '20.4', title: '20.4. Campos ultraleves', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '20.5', title: '20.5. Energia do vácuo', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '21',
    title: '21. Matéria Escura',
    subtopics: [
      { id: '21.1', title: '21.1. Evidências observacionais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.2', title: '21.2. Freeze-out térmico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.3', title: '21.3. WIMPs', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.4', title: '21.4. Matéria escura vetorial', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.5', title: '21.5. Matéria escura auto-interagente', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.6', title: '21.6. Abundância relicta', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.7', title: '21.7. Detecção direta', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '21.8', title: '21.8. Detecção indireta', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '22',
    title: '22. Quebra Espontânea de Simetria Avançada',
    subtopics: [
      { id: '22.1', title: '22.1. Potencial mexicano', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '22.2', title: '22.2. Modos radiais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '22.3', title: '22.3. Modos angulares', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '22.4', title: '22.4. Teorema de Goldstone', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '22.5', title: '22.5. Pseudo-Goldstones', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '22.6', title: '22.6. Simetria custodial', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '23',
    title: '23. Teorias Não Abelianas',
    subtopics: [
      { id: '23.1', title: '23.1. Estrutura SU(2)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '23.2', title: '23.2. Geradores', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '23.3', title: '23.3. Constantes de estrutura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '23.4', title: '23.4. Auto-acoplamentos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '23.5', title: '23.5. Confinamento (conceito)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '23.6', title: '23.6. Setores escuros não abelianos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '24',
    title: '24. Defeitos Topológicos',
    subtopics: [
      { id: '24.1', title: '24.1. Topologia básica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '24.2', title: '24.2. Homotopia', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '24.3', title: '24.3. Monopolos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '24.4', title: '24.4. Cordas cósmicas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '24.5', title: '24.5. Cordas globais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '24.6', title: '24.6. Redes de defeitos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '25',
    title: '25. Ondas Gravitacionais',
    subtopics: [
      { id: '25.1', title: '25.1. Perturbações da métrica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '25.2', title: '25.2. Produção de ondas gravitacionais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '25.3', title: '25.3. Fundo estocástico', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '25.4', title: '25.4. Detectores de ondas gravitacionais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '25.5', title: '25.5. LISA', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '25.6', title: '25.6. Pulsar Timing Arrays', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '26',
    title: '26. Formação de Estruturas no Universo',
    subtopics: [
      { id: '26.1', title: '26.1. Perturbações cosmológicas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '26.2', title: '26.2. Crescimento linear', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '26.3', title: '26.3. Espectro de potência', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '26.4', title: '26.4. Função de transferência', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '26.5', title: '26.5. Lentes gravitacionais fracas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '26.6', title: '26.6. Floresta Lyman-α', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '27',
    title: '27. Métodos Computacionais em Cosmologia',
    subtopics: [
      { id: '27.1', title: '27.1. Integração numérica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.2', title: '27.2. Método de Runge-Kutta', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.3', title: '27.3. Solução de equações diferenciais acopladas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.4', title: '27.4. Cadeias de Markov (MCMC)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.5', title: '27.5. Código CLASS', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.6', title: '27.6. Código CAMB', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '27.7', title: '27.7. Solvers Einstein–Boltzmann', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  },
  {
    id: '28',
    title: '28. Tópicos Específicos do Artigo',
    subtopics: [
      { id: '28.1', title: '28.1. Teorias Yang-Mills-Higgs', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.2', title: '28.2. Setores escuros unificados', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.3', title: '28.3. Quintessência pseudo-Goldstone', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.4', title: '28.4. Simetria global U(1)PQ', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.5', title: '28.5. Vetores massivos de SU(2)D', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.6', title: '28.6. Simetria custodial SO(3)', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.7', title: '28.7. Princípio de seleção termodinâmica', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.8', title: '28.8. Extremização de entropia em horizontes', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.9', title: '28.9. Parâmetros de ordem cosmológicos', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.10', title: '28.10. Transições de fase cosmológicas', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.11', title: '28.11. Fundo estocástico de ondas gravitacionais', content: 'Conteúdo em desenvolvimento...', exercises: [] },
      { id: '28.12', title: '28.12. Unificação estrutural: matéria e energia escura', content: 'Conteúdo em desenvolvimento...', exercises: [] },
    ]
  }
];
