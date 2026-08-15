import type { Module } from '../../types';

/**
 * O conteúdo vai em `String.raw` de propósito.
 *
 * Em template literal comum, `\f` de `\frac` é o caractere de form-feed: o
 * texto `$\frac{1}{2}mv^2$` chegava à tela como `$rac{1}{2}mv^2$`. O mesmo
 * valia para `\theta` (`\t` = tabulação), `\nabla` (`\n` = quebra de linha) e
 * `\vec` — ou seja, para quase toda a notação de física. Com `String.raw` a
 * barra invertida é literal e o LaTeX chega inteiro ao KaTeX.
 */
export const matematicaFundamental: Module = {
  id: '1',
  title: '1. Matemática Fundamental',
  descricao:
    'A linguagem antes da física. Cada tópico daqui existe porque alguma pergunta sobre o mundo não podia ser feita sem ele.',
  subtopics: [
    {
      id: '1.1',
      title: '1.1. Aritmética',
      objetivo:
        'Entender por que as regras da aritmética são as que são — e não uma lista de convenções a decorar.',
      fontes: ['obmep-portal', 'khan-pt', 'obmep-modulos'],
      content: String.raw`
### O problema

Contar é fácil: um, dois, três. A dificuldade aparece quando o mundo se recusa a vir em pedaços inteiros. Meia hora. Três quartos de xícara. Uma dívida. A distância até uma estrela. A aritmética é o registro de uma sequência de crises assim — cada vez que os números disponíveis não davam conta de uma pergunta legítima, o conjunto foi ampliado.

### A construção

**Dos naturais aos inteiros.** Com $1, 2, 3, \dots$ você conta objetos, e a subtração só funciona às vezes: $5 - 3$ existe, $3 - 5$ não. Ou você proíbe metade das subtrações, ou inventa números negativos. Inventar sai mais barato, e com isso todo $a - b$ passa a ter resposta. O zero entra junto, como o resultado de $a - a$.

**Dos inteiros aos racionais.** Com a divisão acontece o mesmo: $6 \div 3$ existe, $3 \div 6$ não existe entre os inteiros. Os racionais são a resposta, e vale prestar atenção no que uma fração *é*: não um par de números empilhados, mas a resposta de uma divisão. Por isso

$$
\frac{2}{8} = \frac{1}{4},
$$

não porque exista uma regra de simplificar, mas porque as duas divisões dão o mesmo número. Frações diferentes no papel podem ser o mesmo número — é a mesma quantidade escrita de outro jeito.

**Razão não é o mesmo que fração.** A fração $\frac{2}{3}$ responde "que parte do todo?". A razão $2:3$ responde "quanto de um para cada tanto do outro?". Se a receita pede farinha e açúcar na razão $2:1$, a farinha é $\frac{2}{3}$ da mistura, não $\frac{2}{1}$. Confundir os dois é a origem da maioria dos erros de proporção.

**Potências.** Escrever $2 \times 2 \times 2$ como $2^3$ começa como abreviação, mas a abreviação impõe uma regra:

$$
a^m \cdot a^n = a^{m+n}.
$$

Multiplicar potências de mesma base soma expoentes, porque você está juntando fatores. E é essa regra — não uma convenção arbitrária — que obriga $a^0 = 1$: para que $a^n \cdot a^0 = a^{n+0} = a^n$, o fator $a^0$ tem de ser neutro. Pelo mesmo motivo, $a^{-n} = 1/a^n$ e $a^{1/2} = \sqrt{a}$. Uma vez fixada a regra da soma dos expoentes, tudo o mais é consequência forçada.

**Raízes.** A raiz é a pergunta inversa da potência: $\sqrt[n]{a}$ é o número que elevado a $n$ devolve $a$. Foi aqui que os gregos levaram o primeiro susto matemático da história: $\sqrt{2}$ não é razão de dois inteiros. Existe, mede a diagonal do quadrado de lado 1 — e mesmo assim nenhuma fração o representa. Os racionais também não bastavam.

**Notação científica.** Toda a física quantitativa depende de escrever $3 \times 10^8$ em vez de $300{,}000{,}000$. O ganho não é economia de tinta, é ordem de grandeza: o expoente diz em que escala você está. A massa do elétron é $9{,}1 \times 10^{-31}\ \text{kg}$ e a do Sol é $2 \times 10^{30}\ \text{kg}$ — sessenta e uma ordens de grandeza entre elas, e é o expoente que torna essa comparação pensável.

### A declaração

A aritmética é o estudo das operações sobre números e das estruturas que essas operações exigem. Cada ampliação do conjunto numérico — naturais, inteiros, racionais, reais — não foi um capricho, mas o preço de manter uma operação sempre definida.

### Onde se tropeça

- **Somar frações somando numeradores e denominadores.** $\frac{1}{2} + \frac{1}{3} \ne \frac{2}{5}$. Divisões diferentes não se somam antes de irem ao mesmo denominador: $\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$.
- **Achar que $(a+b)^2 = a^2 + b^2$.** Expandindo de verdade, $(a+b)^2 = a^2 + 2ab + b^2$. O termo cruzado $2ab$ é a área dos dois retângulos que aparecem quando você desenha o quadrado de lado $a+b$.
- **Tratar porcentagem como se fosse aditiva.** Cair 50% e depois subir 50% não volta ao ponto de partida: $100 \to 50 \to 75$. Porcentagem multiplica.
`,
      exercises: [
        {
          id: 'ex-1.1.1',
          question: 'Uma pizza foi dividida em 8 fatias e você comeu 2. Que fração da pizza você comeu?',
          options: ['1/8', '2/8, que é o mesmo número que 1/4', '1/2', '4/8'],
          correctAnswerIndex: 1,
          explanation:
            'Duas fatias de oito: 2/8. Como 2 ÷ 8 e 1 ÷ 4 dão o mesmo resultado (0,25), 2/8 e 1/4 não são frações "equivalentes" — são o mesmo número escrito de dois jeitos.',
        },
        {
          id: 'ex-1.1.2',
          question: 'Por que a² · a⁰ ter de valer a² obriga a⁰ = 1?',
          options: [
            'Porque o zero anula qualquer multiplicação.',
            'Porque a regra aᵐ · aⁿ = aᵐ⁺ⁿ força a⁰ a ser o elemento neutro da multiplicação.',
            'Porque é uma convenção adotada por acordo entre matemáticos.',
            'Porque a⁰ é a raiz quadrada de a.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Aplicando a regra: a² · a⁰ = a²⁺⁰ = a². O único número que multiplica a² sem alterá-lo é 1. Não é convenção — é a única escolha compatível com a regra dos expoentes.',
        },
        {
          id: 'ex-1.1.3',
          question: 'Uma ação cai 50% num dia e sobe 50% no dia seguinte. Comparada ao preço inicial, ela está:',
          options: [
            'Exatamente no mesmo preço.',
            '25% abaixo do preço inicial.',
            '25% acima do preço inicial.',
            '50% abaixo do preço inicial.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Partindo de 100: cai para 50, sobe 50% de 50 (que é 25) e chega a 75. Porcentagem multiplica, não soma — os 50% da subida incidem sobre uma base menor.',
        },
      ],
    },

    {
      id: '1.2',
      title: '1.2. Álgebra Básica',
      objetivo:
        'Passar de "resolver contas" para "escrever relações" — a mudança que torna a física possível.',
      prerequisitos: ['1.1'],
      fontes: ['obmep-portal', 'khan-pt'],
      content: String.raw`
### O problema

A aritmética responde perguntas fechadas: quanto é $7 \times 8$. A física não faz perguntas assim. Ela pergunta como a distância percorrida depende do tempo, como a pressão depende do volume — pergunta sobre *relações* entre quantidades que ainda não têm valor fixo. Para isso é preciso um símbolo que segure o lugar de um número sem ser um número.

### A construção

**Variáveis.** Escrever $x$ é declarar: existe uma quantidade aqui, ainda não sei qual. A força da ideia é que você pode operar com ela antes de saber seu valor. $x + x = 2x$ vale para qualquer $x$ — você calculou sem calcular nada.

**Equações.** Uma equação é uma afirmação de igualdade, e a metáfora útil é a balança: o que você faz de um lado, faz do outro, e o equilíbrio se mantém. Resolver $x + 5 = 12$ é subtrair 5 dos dois lados até isolar $x$. Não é magia nem receita: é a preservação da igualdade.

**Sistemas.** Duas incógnitas exigem duas informações independentes. Se

$$
x + y = 10 \qquad \text{e} \qquad x - y = 4,
$$

somando as duas equações o $y$ desaparece e sobra $2x = 14$, logo $x = 7$ e $y = 3$. Geometricamente são duas retas no plano, e a solução é o ponto onde elas se cruzam. Se as retas forem paralelas, não há solução; se forem a mesma reta, há infinitas. O caso "sem solução" não é um defeito da conta — é o sistema informando que as duas exigências são incompatíveis.

**Funções.** Aqui está o salto conceitual do módulo. Uma função é uma regra que associa a cada entrada exatamente uma saída. A notação $f(x) = 2x$ não é "f vezes x": é o nome da regra, aplicada a $x$. A exigência de *exatamente uma* saída é o que separa função de relação qualquer — é por isso que $y^2 = x$ não define $y$ como função de $x$ ($x = 4$ admitiria $y = 2$ e $y = -2$).

**Gráficos.** O gráfico de $f$ é o conjunto dos pontos $(x, f(x))$. Ele transforma uma regra abstrata em forma visível, e a forma carrega informação: a reta $f(x) = ax + b$ tem inclinação constante $a$; a parábola $f(x) = x^2$ é simétrica em torno do eixo vertical porque $(-x)^2 = x^2$. Ler o gráfico é ler a função.

### A declaração

Álgebra é o estudo das relações entre quantidades, feitas com símbolos em lugar de valores. A equação afirma uma igualdade a ser satisfeita; a função descreve uma dependência entre quantidades. As leis da física são, quase sem exceção, funções e equações — e é por isso que este tópico não é preliminar, é a gramática de tudo o que vem depois.

### Onde se tropeça

- **Ler $f(x)$ como multiplicação.** É aplicação de regra, não produto. Confundir isso destrói qualquer manipulação subsequente.
- **"Passar para o outro lado trocando o sinal".** Funciona, mas descrito assim vira mágica sem justificativa. O que se faz é aplicar a mesma operação aos dois lados; a troca de sinal é o resultado visível disso.
- **Cancelar termos dentro de uma soma.** Em $\frac{x + 3}{x}$ não se corta o $x$: só é lícito cancelar fatores de um produto, não parcelas de uma soma.
`,
      exercises: [
        {
          id: 'ex-1.2.1',
          question: 'Se x + 5 = 12, qual é o valor de x?',
          options: ['5', '7', '17', '6'],
          correctAnswerIndex: 1,
          explanation:
            'Subtraindo 5 dos dois lados, a igualdade se mantém: x = 12 − 5 = 7.',
        },
        {
          id: 'ex-1.2.2',
          question: 'Por que y² = x não define y como função de x?',
          options: [
            'Porque x pode ser negativo.',
            'Porque a um mesmo x correspondem dois valores de y, e função exige saída única.',
            'Porque não é possível desenhar o gráfico.',
            'Porque y aparece elevado ao quadrado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Para x = 4 teríamos y = 2 e y = −2. A definição de função exige exatamente uma saída por entrada, então essa relação não é função de x.',
        },
        {
          id: 'ex-1.2.3',
          question: 'O sistema x + y = 10 e 2x + 2y = 30 tem quantas soluções?',
          options: [
            'Uma solução única.',
            'Nenhuma: as equações se contradizem.',
            'Infinitas soluções.',
            'Duas soluções.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A segunda equação diz x + y = 15, e a primeira diz x + y = 10. Como as retas são paralelas e distintas, não há ponto de encontro: o sistema é incompatível.',
        },
      ],
    },

    {
      id: '1.3',
      title: '1.3. Geometria',
      objetivo:
        'Ver a geometria como o primeiro sistema dedutivo da história — e entender por que Descartes a converteu em álgebra.',
      prerequisitos: ['1.2'],
      fontes: ['obmep-modulos', 'khan-pt'],
      content: String.raw`
### O problema

Medir terra depois da cheia do Nilo, orientar um templo, prever um eclipse: todas exigem raciocinar sobre forma, tamanho e posição. A geometria nasce prática, mas a contribuição grega foi outra — mostrar que dessas questões se pode fazer *dedução*, partindo de poucos postulados e provando o resto.

### A construção

**Geometria plana.** Figuras numa superfície bidimensional. Duas quantidades organizam quase tudo: perímetro (o contorno) e área (o interior). A área do retângulo é $A = b \cdot h$ — não por definição, mas porque cabem $b \cdot h$ quadrados unitários dentro dele. Dessa fórmula saem as outras: o triângulo é metade de um retângulo, $A = \frac{b h}{2}$; o círculo é $A = \pi r^2$.

**O teorema de Pitágoras.** Num triângulo retângulo de catetos $a, b$ e hipotenusa $c$,

$$
a^2 + b^2 = c^2.
$$

É o resultado mais reaproveitado da matemática inteira. Sua leitura correta é sobre *áreas*: o quadrado construído sobre a hipotenusa tem área igual à soma dos quadrados construídos sobre os catetos. Dele sai a fórmula da distância, e dela sai a métrica — a ideia que, generalizada, vira o objeto central da relatividade geral no módulo 16.

**Geometria espacial.** Acrescente profundidade e as figuras viram sólidos; a área vira volume. O paralelepípedo tem $V = a b c$, a esfera tem $V = \frac{4}{3}\pi r^3$. Uma consequência dessas fórmulas governa boa parte da biologia e da engenharia: ao dobrar o tamanho de um objeto, a área cresce com o quadrado e o volume com o cubo. É por isso que não existem insetos do tamanho de elefantes — o peso cresceria mais rápido que a resistência das pernas.

**Coordenadas cartesianas.** A ideia de Descartes: fixe dois eixos perpendiculares e todo ponto do plano vira um par de números $(x, y)$. O efeito é que geometria e álgebra passam a ser a mesma coisa. Uma reta vira $y = ax + b$; a circunferência de raio $r$ centrada na origem vira

$$
x^2 + y^2 = r^2,
$$

que é Pitágoras outra vez. A partir daí, provar teoremas geométricos passa a ser manipular equações — e é assim que a física trabalha até hoje.

### A declaração

Geometria é o estudo de forma, tamanho, posição e das relações que se mantêm entre elas. A geometria analítica é a tradução dessas relações em equações por meio de coordenadas, e é a ponte pela qual a geometria entra na física.

### Onde se tropeça

- **Confundir área com perímetro.** Duas figuras podem ter o mesmo perímetro e áreas muito diferentes: entre todas as figuras de perímetro fixo, o círculo é a de maior área.
- **Escalar tudo linearmente.** Dobrar o lado de um cubo multiplica sua área por 4 e seu volume por 8.
- **Achar que Pitágoras vale sempre.** Só vale em triângulo retângulo. No caso geral vale a lei dos cossenos, $c^2 = a^2 + b^2 - 2ab\cos\gamma$, que se reduz a Pitágoras quando $\gamma = 90^\circ$ e $\cos\gamma = 0$.
`,
      exercises: [
        {
          id: 'ex-1.3.1',
          question: 'Um quarto quadrado tem 4 metros de lado. Qual é a área do piso?',
          options: ['8 metros quadrados', '16 metros quadrados', '12 metros quadrados', '4 metros quadrados'],
          correctAnswerIndex: 1,
          explanation:
            'Área do quadrado = lado × lado = 4 × 4 = 16 m². Cabem 16 quadrados de 1 m × 1 m dentro dele.',
        },
        {
          id: 'ex-1.3.2',
          question: 'Ao dobrar o raio de uma esfera, seu volume fica multiplicado por:',
          options: ['2', '4', '8', '6'],
          correctAnswerIndex: 2,
          explanation:
            'V = (4/3)πr³. Trocando r por 2r, o volume ganha o fator 2³ = 8. Área cresce com o quadrado, volume com o cubo.',
        },
        {
          id: 'ex-1.3.3',
          question: 'A equação x² + y² = 25 descreve, no plano cartesiano:',
          options: [
            'Uma reta de inclinação 25.',
            'Uma parábola com vértice na origem.',
            'A circunferência de raio 5 centrada na origem.',
            'Um quadrado de lado 5.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Pelo teorema de Pitágoras, √(x² + y²) é a distância do ponto (x, y) à origem. Exigir que essa distância seja sempre 5 é exatamente a definição de circunferência de raio 5.',
        },
      ],
    },

    {
      id: '1.4',
      title: '1.4. Trigonometria',
      objetivo:
        'Entender por que seno e cosseno, nascidos de triângulos, acabam descrevendo toda oscilação da natureza.',
      prerequisitos: ['1.3'],
      fontes: ['obmep-modulos', 'khan-pt', 'ocw-18-01'],
      content: String.raw`
### O problema

Como medir a altura de uma árvore sem subir nela, ou a distância até a Lua sem ir lá? A resposta grega: triângulos semelhantes têm lados proporcionais. Se você conhece um ângulo e um lado, os demais estão determinados — a trigonometria é a tabela que converte ângulo em proporção.

### A construção

**As três razões.** Num triângulo retângulo, fixado um ângulo agudo $\theta$:

$$
\sin\theta = \frac{\text{cateto oposto}}{\text{hipotenusa}}, \qquad \cos\theta = \frac{\text{cateto adjacente}}{\text{hipotenusa}}, \qquad \tan\theta = \frac{\sin\theta}{\cos\theta}.
$$

O ponto decisivo: essas razões **não dependem do tamanho do triângulo**, só do ângulo. Todo triângulo retângulo com o mesmo $\theta$ dá o mesmo seno. É isso que permite medir o inacessível a partir do acessível.

**A identidade fundamental.** Dividindo $a^2 + b^2 = c^2$ por $c^2$ obtém-se

$$
\sin^2\theta + \cos^2\theta = 1.
$$

Não é fórmula nova: é Pitágoras normalizado, e vale para todo $\theta$.

**Do triângulo ao círculo.** A generalização que muda tudo: em vez de um triângulo, tome o círculo de raio 1 e um ponto que gira sobre ele. Defina $\cos\theta$ como a coordenada horizontal desse ponto e $\sin\theta$ como a vertical. Para ângulos agudos isso reproduz as razões anteriores — mas agora $\theta$ pode ser qualquer valor, inclusive maior que $90^\circ$ ou negativo. E, girando indefinidamente, as funções se repetem:

$$
\sin(\theta + 2\pi) = \sin\theta.
$$

**Por que isso importa em física.** Ao projetar um movimento circular uniforme sobre um eixo, o que se vê é exatamente $\sin$ ou $\cos$ do tempo. Por isso pêndulo, mola, corda de violão, corrente alternada e onda eletromagnética são todos descritos por

$$
x(t) = A\cos(\omega t + \varphi),
$$

com amplitude $A$, frequência angular $\omega$ e fase $\varphi$. Seno e cosseno deixaram de ser sobre triângulos: viraram a forma matemática do que oscila.

**Radianos.** Medir ângulo em graus é herança babilônica arbitrária. O radiano mede o ângulo pelo arco que ele subtende num círculo de raio 1, de modo que a volta completa é $2\pi$. A vantagem aparece no cálculo: só em radianos vale $\frac{d}{d\theta}\sin\theta = \cos\theta$ sem constantes de conversão sobrando.

### A declaração

Trigonometria é o estudo das relações entre ângulos e comprimentos, estendido do triângulo ao círculo. Nessa extensão, seno e cosseno tornam-se as funções periódicas fundamentais — a descrição matemática de qualquer fenômeno que se repete.

### Onde se tropeça

- **Calculadora em graus quando a fórmula pede radianos.** É a origem de uma quantidade impressionante de respostas absurdas em física.
- **Escrever $\sin^{-1}$ pensando em $1/\sin$.** $\sin^{-1}$ é a função inversa (arco cujo seno é...); o inverso multiplicativo é a cossecante.
- **Achar que $\sin(a+b) = \sin a + \sin b$.** Seno não é linear. Vale $\sin(a+b) = \sin a\cos b + \cos a \sin b$.
`,
      exercises: [
        {
          id: 'ex-1.4.1',
          question: 'Num triângulo retângulo, a razão entre o cateto oposto e a hipotenusa é chamada de:',
          options: ['Cosseno', 'Tangente', 'Seno', 'Secante'],
          correctAnswerIndex: 2,
          explanation:
            'Seno é oposto sobre hipotenusa; cosseno é adjacente sobre hipotenusa; tangente é a razão entre os dois.',
        },
        {
          id: 'ex-1.4.2',
          question: 'De onde vem a identidade sen²θ + cos²θ = 1?',
          options: [
            'De uma definição arbitrária do círculo trigonométrico.',
            'Do teorema de Pitágoras, dividido pelo quadrado da hipotenusa.',
            'Da lei dos cossenos aplicada a triângulos obtusos.',
            'Da soma dos ângulos internos do triângulo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Partindo de a² + b² = c² e dividindo tudo por c²: (a/c)² + (b/c)² = 1, ou seja, sen²θ + cos²θ = 1.',
        },
        {
          id: 'ex-1.4.3',
          question: 'Por que seno e cosseno descrevem molas, pêndulos e ondas, e não apenas triângulos?',
          options: [
            'Porque toda oscilação tem forma triangular.',
            'Porque são a projeção de um movimento circular uniforme sobre um eixo — logo, funções periódicas do tempo.',
            'Porque só elas podem ser derivadas.',
            'Por convenção histórica, herdada da astronomia.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Ao definir seno e cosseno pelas coordenadas de um ponto que gira no círculo unitário, elas passam a ser funções periódicas de qualquer ângulo. Projete um movimento circular uniforme num eixo e você obtém exatamente x(t) = A·cos(ωt + φ).',
        },
      ],
    },

    {
      id: '1.5',
      title: '1.5. Álgebra Vetorial',
      objetivo:
        'Distinguir quantidades que têm direção das que não têm — e aprender as duas multiplicações que a física usa.',
      prerequisitos: ['1.4'],
      fontes: ['tong-dynamics', 'feynman-i', 'openstax-fisica-1'],
      content: String.raw`
### O problema

"O vento está a 30 km/h" é uma informação incompleta: 30 km/h para onde? Temperatura, massa e energia ficam bem descritas por um número só. Velocidade, força e campo elétrico, não — falta a direção. É preciso um objeto matemático que carregue as duas coisas.

### A construção

**Vetores.** Um vetor tem módulo (quanto) e direção e sentido (para onde). Em coordenadas, um vetor no espaço é uma tripla $\vec{v} = (v_x, v_y, v_z)$, e seu módulo sai de Pitágoras em três dimensões:

$$
|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}.
$$

**Soma.** Vetores somam componente a componente, e o significado geométrico é a regra do paralelogramo: empurre a caixa para a frente enquanto alguém a empurra para o lado, e ela vai na diagonal. É essa regra — e não uma soma de números — que explica por que um barco apontando perpendicularmente à correnteza atravessa o rio na diagonal.

**Produto escalar.** A primeira multiplicação devolve um número:

$$
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z = |\vec{a}||\vec{b}|\cos\theta.
$$

O fator $\cos\theta$ diz que o produto escalar mede alinhamento: é máximo quando os vetores apontam para o mesmo lado, **zero quando são perpendiculares** e negativo quando se opõem. Daí sua utilidade imediata: o trabalho de uma força é $W = \vec{F} \cdot \vec{d}$, e empurrar perpendicularmente ao deslocamento realiza trabalho nulo — resultado que parece estranho até você notar que é o produto escalar dizendo isso.

**Produto vetorial.** A segunda multiplicação devolve outro vetor:

$$
|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta,
$$

com direção perpendicular ao plano formado por $\vec{a}$ e $\vec{b}$ e sentido dado pela regra da mão direita. Agora o fator é $\sin\theta$: o produto vetorial mede o quanto os vetores são *perpendiculares*, e se anula quando são paralelos. Seu módulo é a área do paralelogramo que eles formam. Torque, momento angular e a força magnética sobre uma carga são todos produtos vetoriais — é por isso que a força magnética é perpendicular à velocidade, e por isso que ela nunca realiza trabalho.

### A declaração

Vetor é uma quantidade caracterizada por módulo, direção e sentido, que se soma pela regra do paralelogramo. O produto escalar projeta um vetor sobre o outro e resulta num escalar; o produto vetorial mede a área orientada que eles definem e resulta num vetor perpendicular a ambos.

### Onde se tropeça

- **Somar módulos.** Se $|\vec{a}| = 3$ e $|\vec{b}| = 4$, então $|\vec{a}+\vec{b}|$ vale 7 apenas se forem paralelos; vale 5 se forem perpendiculares e 1 se forem opostos.
- **Trocar os dois produtos.** O escalar dá número e zera na perpendicular; o vetorial dá vetor e zera na paralela. Trocá-los inverte todas as conclusões físicas.
- **Esquecer a anticomutatividade.** $\vec{a} \times \vec{b} = -\,\vec{b} \times \vec{a}$. A ordem inverte o sentido do resultado.
`,
      exercises: [
        {
          id: 'ex-1.5.1',
          question: 'O que distingue um vetor de um escalar?',
          options: [
            'O vetor não tem valor numérico, apenas sentido.',
            'O vetor possui módulo, direção e sentido; o escalar, apenas magnitude.',
            'O vetor só existe em três dimensões.',
            'O vetor é sempre positivo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Massa e temperatura ficam determinadas por um número (escalares). Velocidade e força exigem também a informação de para onde apontam.',
        },
        {
          id: 'ex-1.5.2',
          question: 'Dois vetores perpendiculares entre si têm produto escalar igual a:',
          options: [
            'Ao produto dos módulos.',
            'Zero.',
            'Um.',
            'À área do paralelogramo que formam.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'a·b = |a||b|cos θ, e cos 90° = 0. Fisicamente: uma força perpendicular ao deslocamento não realiza trabalho.',
        },
        {
          id: 'ex-1.5.3',
          question: 'Se |a| = 3 e |b| = 4, qual é o menor valor possível para |a + b|?',
          options: ['7', '5', '1', '0'],
          correctAnswerIndex: 2,
          explanation:
            'O mínimo ocorre com os vetores opostos: |3 − 4| = 1. Se forem paralelos dá 7; se forem perpendiculares, 5, por Pitágoras.',
        },
      ],
    },

    {
      id: '1.6',
      title: '1.6. Álgebra Linear',
      objetivo:
        'Ver matrizes como transformações do espaço, e entender por que autovetores são a estrutura escondida de uma transformação.',
      prerequisitos: ['1.5'],
      fontes: ['tong-teaching', 'ocw-18-01'],
      content: String.raw`
### O problema

Um vetor descreve uma quantidade orientada. Mas a física raramente quer um vetor parado: quer saber o que acontece quando o espaço inteiro é girado, esticado ou projetado. Precisamos de objetos que representem *transformações* — e de um jeito de compô-las.

### A construção

**Espaços vetoriais.** A abstração começa por perguntar do que realmente se precisa: um conjunto onde se pode somar elementos e multiplicá-los por números, respeitando as regras usuais. Quem satisfaz isso é espaço vetorial. Setas no plano satisfazem — mas polinômios também, e funções também. Essa generalidade não é luxo: as funções de onda da mecânica quântica são vetores num espaço de dimensão infinita, e toda a estrutura do módulo 8 depende disso.

**Matrizes como transformações.** Uma matriz não é primariamente uma tabela: é a receita de uma transformação linear. A matriz

$$
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$

gira todo vetor do plano por um ângulo $\theta$. Multiplicar matrizes é compor transformações — aplicar uma depois da outra —, e é daí que vem a estranheza de $AB \ne BA$: girar e depois refletir não é o mesmo que refletir e depois girar. A não comutatividade não é um defeito algébrico, é um fato geométrico, e mais tarde vira o princípio da incerteza no módulo 8.

**Determinante.** O determinante de uma matriz mede o fator pelo qual ela multiplica áreas (em 2D) ou volumes (em 3D). Se $\det A = 3$, a transformação triplica volumes; se $\det A = -1$, preserva volume mas inverte a orientação, como um espelho. E se $\det A = 0$, a transformação achatou o espaço numa dimensão menor — informação foi destruída, e é exatamente por isso que uma matriz com determinante nulo não tem inversa.

**Autovalores e autovetores.** Numa transformação, quase todo vetor muda de direção. Alguns não: apenas esticam ou encolhem. Esses são os autovetores, e o fator de escala é o autovalor:

$$
A\vec{v} = \lambda\vec{v}.
$$

Encontrá-los é encontrar os eixos naturais da transformação — as direções em que ela age do modo mais simples possível. Na prática, é o que se faz o tempo todo: os modos normais de vibração de uma ponte, os eixos principais de um corpo rígido e os estados de energia definida de um átomo são todos problemas de autovetor.

### A declaração

Álgebra linear é o estudo dos espaços vetoriais e das transformações lineares entre eles. A matriz representa a transformação; o determinante mede o efeito sobre volumes; autovetores e autovalores identificam as direções invariantes e o quanto cada uma é escalada.

### Onde se tropeça

- **Tratar matriz como mero arranjo de números.** Enquanto ela for uma tabela, a multiplicação linha-por-coluna parece arbitrária. Como composição de transformações, é a única definição possível.
- **Supor comutatividade.** $AB \ne BA$ em geral.
- **Ler $\det A = 0$ como "a matriz é pequena".** Significa que ela colapsou o espaço e perdeu informação de forma irreversível.
`,
      exercises: [
        {
          id: 'ex-1.6.1',
          question: 'A leitura mais útil de uma matriz, em física, é:',
          options: [
            'Um número complexo em forma tabular.',
            'Uma equação diferencial disfarçada.',
            'A representação de uma transformação linear do espaço.',
            'Um vetor de comprimento unitário.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Vista como transformação, a regra de multiplicação deixa de ser arbitrária: multiplicar matrizes é aplicar uma transformação depois da outra.',
        },
        {
          id: 'ex-1.6.2',
          question: 'Uma matriz com determinante zero significa que a transformação:',
          options: [
            'Não altera nenhum vetor.',
            'Achatou o espaço numa dimensão menor, destruindo informação — e por isso não tem inversa.',
            'Gira o espaço sem deformá-lo.',
            'Multiplica todos os volumes por zero apenas na origem.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O determinante é o fator de escala de volumes. Zero significa colapso a um plano, reta ou ponto: vetores distintos passam a ter a mesma imagem, e a operação é irreversível.',
        },
        {
          id: 'ex-1.6.3',
          question: 'Um autovetor de uma transformação A é um vetor que:',
          options: [
            'Tem sempre comprimento igual a 1.',
            'É levado a zero pela transformação.',
            'Mantém sua direção sob a transformação, sendo apenas multiplicado por um fator λ.',
            'É perpendicular a todos os demais vetores.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Por definição, Av = λv: a transformação não gira esse vetor, apenas o escala. Autovetores marcam os eixos naturais da transformação.',
        },
      ],
    },

    {
      id: '1.7',
      title: '1.7. Cálculo Diferencial',
      objetivo:
        'Entender a derivada como taxa de variação instantânea, e o limite como o que torna essa ideia legítima.',
      prerequisitos: ['1.2', '1.4'],
      fontes: ['ocw-18-01', 'feynman-i', 'khan-pt'],
      content: String.raw`
### O problema

Um carro percorre 100 km em 2 horas: velocidade média de 50 km/h. Mas o velocímetro marca um valor *agora*, e "agora" tem duração zero. Velocidade média num intervalo nulo seria $0/0$ — sem sentido. Ou a velocidade instantânea não existe, ou é preciso uma ideia nova. Newton e Leibniz, independentemente, produziram a ideia nova.

### A construção

**Limites.** A saída é não avaliar em zero, mas perguntar para onde a razão tende à medida que o intervalo encolhe. Escreve-se

$$
\lim_{h \to 0} f(h) = L
$$

para dizer: os valores de $f(h)$ ficam arbitrariamente próximos de $L$ conforme $h$ se aproxima de zero — sem que $h$ precise chegar lá. É esse "sem chegar lá" que dissolve o $0/0$.

**Derivada.** Aplicando a ideia à razão entre variação da posição e variação do tempo:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}.
$$

Geometricamente, a fração é a inclinação da reta secante que liga dois pontos do gráfico; no limite, a secante vira tangente, e a derivada é a inclinação da curva naquele ponto. Fisicamente, se $f$ é posição, $f'$ é velocidade; a derivada da velocidade é a aceleração.

**Um caso concreto.** Para $f(x) = x^2$:

$$
\frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h,
$$

e quando $h \to 0$ sobra $f'(x) = 2x$. Note o que aconteceu: enquanto $h \ne 0$ foi lícito dividir, e só depois o limite foi tomado. É essa ordem que torna o argumento correto.

**Máximos e mínimos.** No topo de um morro a inclinação é zero — subindo antes, descendo depois. Logo, candidatos a máximo ou mínimo de $f$ estão onde $f'(x) = 0$. É a ferramenta de otimização mais usada que existe, e reaparece em física com uma força inesperada: no módulo 5, a trajetória real de uma partícula é aquela que torna estacionária uma quantidade chamada ação — a natureza também procura onde a derivada se anula.

### A declaração

A derivada de uma função num ponto é o limite da taxa de variação média quando o intervalo tende a zero; equivale à inclinação da reta tangente ao gráfico naquele ponto. O cálculo diferencial é o estudo dessa operação e de suas consequências.

### Onde se tropeça

- **Ler $dy/dx$ como fração de dois números.** É notação de limite. (Em manipulações de física ela se comporta como fração com frequência suficiente para ser útil — mas isso é um teorema a ser justificado, não uma definição.)
- **Confundir $f'(x) = 0$ com máximo.** Pode ser mínimo ou ponto de inflexão; é preciso examinar a segunda derivada ou o comportamento ao redor.
- **Achar que toda função tem derivada.** $f(x) = |x|$ não tem derivada em $x = 0$: o gráfico tem bico, e a inclinação à esquerda difere da inclinação à direita.
`,
      exercises: [
        {
          id: 'ex-1.7.1',
          question: 'Se a função descreve a posição de um carro ao longo do tempo, sua derivada representa:',
          options: ['A aceleração do carro.', 'A velocidade do carro.', 'A distância total percorrida.', 'O tempo de viagem.'],
          correctAnswerIndex: 1,
          explanation:
            'A derivada é a taxa de variação instantânea. Da posição em relação ao tempo, isso é exatamente a velocidade — e a derivada da velocidade é a aceleração.',
        },
        {
          id: 'ex-1.7.2',
          question: 'Por que a derivada precisa de limite, em vez de simplesmente usar um intervalo de tempo igual a zero?',
          options: [
            'Porque intervalo zero daria 0/0, que é indefinido; o limite descreve a tendência sem nunca avaliar em zero.',
            'Porque o zero não é um número real.',
            'Porque a divisão por zero dá infinito, e infinito é grande demais.',
            'Porque o limite é apenas uma aproximação numérica da derivada.',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Com h = 0 a razão vira 0/0. O limite pergunta para onde a razão tende quando h encolhe, mantendo h ≠ 0 durante toda a conta.',
        },
        {
          id: 'ex-1.7.3',
          question: 'A função f(x) = |x| não é derivável em x = 0 porque:',
          options: [
            'Ela não é contínua nesse ponto.',
            'Ela vale zero nesse ponto.',
            'As inclinações pela esquerda (−1) e pela direita (+1) discordam, então o limite não existe.',
            'Seu gráfico não passa pela origem.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'A função é contínua, mas tem um bico. Como o limite da razão incremental depende do lado por onde você se aproxima, ele não existe — e sem limite não há derivada.',
        },
      ],
    },

    {
      id: '1.8',
      title: '1.8. Cálculo Integral',
      objetivo:
        'Entender a integral como acumulação, e o teorema fundamental como a descoberta de que derivar e integrar são operações inversas.',
      prerequisitos: ['1.7'],
      fontes: ['ocw-18-01', 'feynman-i'],
      content: String.raw`
### O problema

Se a velocidade fosse constante, a distância seria velocidade vezes tempo. Mas a velocidade real varia a cada instante. Como somar infinitas contribuições, cada uma durando um tempo infinitesimal?

### A construção

**Somas de Riemann.** Divida o intervalo em $n$ pedacinhos de largura $\Delta x$. Em cada um, aproxime a função por um valor constante e monte um retângulo. A soma das áreas é uma aproximação:

$$
\sum_{i=1}^{n} f(x_i)\,\Delta x.
$$

Fatias mais finas, aproximação melhor. A integral é o limite disso:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\,\Delta x.
$$

O símbolo $\int$ é um "S" alongado, de *soma* — a notação de Leibniz conta o que a operação é.

**Área sob a curva.** Se $f$ é a velocidade, cada retângulo $v \cdot \Delta t$ é a distância percorrida naquele instantinho, e a soma de todos é a distância total. Por isso a área sob o gráfico da velocidade é a distância — e a área sob o gráfico da força é o trabalho, e sob o da potência é a energia. O padrão é sempre o mesmo: a integral acumula.

**O teorema fundamental do cálculo.** O resultado que une os dois módulos e que não era nada óbvio: se $F' = f$, então

$$
\int_a^b f(x)\,dx = F(b) - F(a).
$$

Ou seja, derivar e integrar são operações inversas. O impacto prático é enorme: em vez de calcular um limite de somas infinitas, basta encontrar uma função cuja derivada seja $f$ e avaliá-la nos extremos. Um problema de acumulação virou um problema de reconhecimento.

**Exemplo.** Um corpo em queda livre parte do repouso com $a = g$ constante. Integrando a aceleração vem a velocidade, $v(t) = gt$; integrando a velocidade vem a posição,

$$
x(t) = \frac{1}{2}gt^2,
$$

que é a fórmula da queda livre — obtida, não decorada.

### A declaração

A integral definida de uma função num intervalo é o limite das somas de Riemann, e mede a acumulação total da grandeza representada por $f$. Pelo teorema fundamental do cálculo, ela se calcula por diferença de valores de uma primitiva, o que faz de integração e derivação operações mutuamente inversas.

### Onde se tropeça

- **Esquecer que área abaixo do eixo conta como negativa.** A integral da velocidade de um corpo que vai e volta dá o deslocamento líquido, não a distância percorrida.
- **Omitir a constante de integração.** Toda primitiva é definida a menos de uma constante; em física, essa constante é a condição inicial — onde o corpo estava em $t=0$.
- **Achar que toda função tem primitiva elementar.** $e^{-x^2}$ não tem, e ainda assim sua integral existe e é central em estatística e mecânica quântica.
`,
      exercises: [
        {
          id: 'ex-1.8.1',
          question: 'Enquanto a derivada dá a taxa de variação, a integral serve fundamentalmente para:',
          options: [
            'Separar variáveis de uma equação.',
            'Acumular infinitas contribuições infinitesimais ao longo de um intervalo.',
            'Encontrar a inclinação da reta tangente.',
            'Dividir uma função em duas partes iguais.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A integral é o limite de somas de fatias cada vez mais finas. Somando v·Δt obtém-se distância; somando F·Δx, trabalho.',
        },
        {
          id: 'ex-1.8.2',
          question: 'O teorema fundamental do cálculo afirma que:',
          options: [
            'Toda função contínua é derivável.',
            'A integral de a até b pode ser obtida por F(b) − F(a), onde F é uma primitiva de f — logo derivar e integrar são inversas.',
            'A área sob uma curva é sempre positiva.',
            'Toda integral pode ser calculada numericamente.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o que dispensa calcular o limite das somas: basta achar F com F′ = f e avaliar nos extremos. Foi a descoberta que transformou o cálculo em ferramenta prática.',
        },
        {
          id: 'ex-1.8.3',
          question: 'Integrando duas vezes a aceleração constante g, a partir do repouso na origem, obtém-se:',
          options: ['x(t) = g t', 'x(t) = g t²', 'x(t) = ½ g t²', 'x(t) = 2 g t'],
          correctAnswerIndex: 2,
          explanation:
            'A primeira integração dá v(t) = g t; a segunda dá x(t) = ½ g t². As constantes de integração são nulas porque o corpo parte do repouso e da origem.',
        },
      ],
    },

    {
      id: '1.9',
      title: '1.9. Equações Diferenciais',
      objetivo:
        'Entender por que as leis da natureza são equações cuja incógnita é uma função, e não um número.',
      prerequisitos: ['1.7', '1.8'],
      fontes: ['ocw-18-01', 'tong-dynamics', 'feynman-i'],
      content: String.raw`
### O problema

Nenhuma lei fundamental da física diz quanto vale alguma coisa. Elas dizem como as coisas *mudam*: a força determina a aceleração, o resfriamento depende da diferença de temperatura, a taxa de decaimento depende de quanto material resta. São afirmações sobre derivadas — e, portanto, equações em que a incógnita é uma função inteira.

### A construção

**O que é a equação.** Uma equação diferencial relaciona uma função com suas derivadas. A lei de resfriamento de Newton é o exemplo mais limpo:

$$
\frac{dT}{dt} = -k\,(T - T_{\text{amb}}),
$$

que se lê: a taxa de perda de calor é proporcional à diferença entre a temperatura do corpo e a do ambiente. Resolvê-la é encontrar a função $T(t)$ que satisfaz essa relação em todo instante.

**A solução é uma função.** Para o caso acima, a resposta é uma exponencial que decai:

$$
T(t) = T_{\text{amb}} + \left(T_0 - T_{\text{amb}}\right)e^{-kt}.
$$

Repare que a solução não é um número: é toda a história térmica do café, para qualquer instante. E repare por que a exponencial aparece — ela é a função cuja derivada é proporcional a ela mesma, que era exatamente o que a equação pedia.

**Condições iniciais.** A equação sozinha admite infinitas soluções, uma para cada temperatura inicial. A física fica determinada quando se acrescenta o estado em $t = 0$. Essa divisão de trabalho é conceitualmente importante: **a lei diz como o sistema evolui; as condições iniciais dizem de onde ele parte.** Uma não substitui a outra.

**Segunda ordem: o oscilador.** A segunda lei de Newton aplicada a uma mola dá

$$
m\frac{d^2x}{dt^2} = -kx,
$$

cuja solução é $x(t) = A\cos(\omega t + \varphi)$ com $\omega = \sqrt{k/m}$. Aqui a trigonometria do tópico 1.4 reaparece por necessidade matemática: a equação pede uma função cuja segunda derivada seja ela mesma com sinal trocado, e seno e cosseno são precisamente isso. Esse é o oscilador harmônico, o sistema mais reutilizado da física — volta em circuitos, em vibração molecular, e no módulo 8 como oscilador harmônico quântico.

**Sistemas dinâmicos.** Quando várias grandezas se influenciam mutuamente, as equações se acoplam: presas e predadores, pêndulos duplos, fluidos. Aí surge o fato que atrapalhou o determinismo do século XIX — sistemas perfeitamente determinísticos podem ser caóticos, isto é, tão sensíveis à condição inicial que a previsão de longo prazo se torna impossível na prática, ainda que a lei seja exata.

### A declaração

Uma equação diferencial é uma equação cuja incógnita é uma função, relacionando-a com suas derivadas. Sua solução geral contém constantes arbitrárias, fixadas pelas condições iniciais ou de contorno. As leis dinâmicas da física são equações diferenciais — é essa a forma em que elas se apresentam.

### Onde se tropeça

- **Procurar um número como resposta.** A resposta é uma função; verificar a solução é substituí-la na equação e ver se a igualdade se sustenta.
- **Ignorar as condições iniciais.** Sem elas você tem uma família de soluções, não a trajetória do sistema.
- **Confundir determinismo com previsibilidade.** As equações do clima são determinísticas; ainda assim, previsão além de duas semanas é inviável, porque erros minúsculos crescem exponencialmente.
`,
      exercises: [
        {
          id: 'ex-1.9.1',
          question: 'Enquanto uma equação algébrica busca um número, a solução de uma equação diferencial é:',
          options: ['Um único número negativo.', 'Uma matriz.', 'Uma função.', 'Um vetor de constantes.'],
          correctAnswerIndex: 2,
          explanation:
            'A incógnita é a própria função. Resolver dT/dt = −k(T − T_amb) é achar T(t) para todo instante, não um valor isolado.',
        },
        {
          id: 'ex-1.9.2',
          question: 'Numa equação diferencial, qual é o papel das condições iniciais?',
          options: [
            'Elas simplificam a álgebra, mas não mudam a solução.',
            'A equação diz como o sistema evolui; as condições iniciais dizem de qual estado ele parte, selecionando uma solução entre infinitas.',
            'Elas substituem a necessidade de integrar.',
            'Elas garantem que a solução seja positiva.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A solução geral traz constantes arbitrárias. É a condição inicial que fixa essas constantes e transforma a família de soluções na trajetória de um sistema concreto.',
        },
        {
          id: 'ex-1.9.3',
          question: 'Por que seno e cosseno resolvem a equação da mola, m·x″ = −k·x?',
          options: [
            'Porque toda equação diferencial tem solução trigonométrica.',
            'Porque são as funções cuja segunda derivada é elas mesmas com o sinal trocado — exatamente o que a equação exige.',
            'Porque a mola tem formato circular.',
            'Porque são as únicas funções periódicas que existem.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Derivando cos(ωt) duas vezes obtém-se −ω²cos(ωt). A equação pede que a segunda derivada seja proporcional à função com sinal negativo, e é isso que seno e cosseno fazem.',
        },
      ],
    },

    {
      id: '1.10',
      title: '1.10. Probabilidade e Estatística',
      objetivo:
        'Distinguir probabilidade (do modelo para os dados) de inferência (dos dados para o modelo) — e saber o que uma barra de erro está afirmando.',
      prerequisitos: ['1.8'],
      fontes: ['ocw-18-01', 'khan-pt', 'feynman-i'],
      content: String.raw`
### O problema

Nenhuma medida é exata. Repita o mesmo experimento e os números diferem — por ruído térmico, por limite do instrumento, e, no caso quântico, porque a natureza é assim mesmo. Sem uma matemática do incerto não é possível dizer o que um experimento mostrou, nem quando duas medidas discordam de verdade.

### A construção

**Probabilidade.** Atribui-se a cada resultado possível um número entre 0 e 1, e a soma sobre todos os resultados é 1. Para eventos independentes, as probabilidades se multiplicam: duas coroas seguidas têm chance $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Independência é uma hipótese sobre o mundo, não uma propriedade automática — e supô-la indevidamente é a falha mais cara da estatística aplicada.

**Distribuições.** Uma distribuição diz como a probabilidade se reparte entre os valores possíveis. A gaussiana,

$$
p(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}},
$$

aparece com uma frequência que parece suspeita até você conhecer o teorema central do limite: a soma de muitas contribuições aleatórias independentes tende à gaussiana, praticamente qualquer que seja a distribuição de cada contribuição. Como quase toda medida física é a soma de muitos efeitos pequenos, a curva do sino é a regra e não a exceção.

**Média e variância.** A média $\mu$ localiza o centro; a variância mede a dispersão em torno dele:

$$
\sigma^2 = \langle (x - \mu)^2 \rangle.
$$

O desvio-padrão $\sigma$ é a raiz da variância e tem a mesma unidade da grandeza medida — por isso é ele, e não a variância, que aparece nas barras de erro. Duas amostras podem ter exatamente a mesma média e comportamentos completamente distintos; a média sozinha é uma descrição pobre.

**Inferência.** Aqui a seta se inverte. A probabilidade vai do modelo para os dados: dado que a moeda é honesta, qual a chance de dez caras? A inferência vai dos dados para o modelo: observadas dez caras, o que se pode afirmar sobre a moeda? É este segundo movimento que o cientista precisa fazer, e ele é estruturalmente mais difícil.

Um resultado quantitativo orienta tudo: a incerteza da média de $N$ medidas independentes cai como

$$
\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{N}}.
$$

Quadruplicar o número de medidas reduz a incerteza pela metade. É por isso que grandes colaborações acumulam anos de dados — e por que o ganho fica cada vez mais caro.

### A declaração

Probabilidade é a matemática que quantifica incerteza a partir de um modelo; estatística é o percurso inverso, que estima o modelo a partir de dados finitos. Média e variância resumem uma distribuição; o desvio-padrão da média quantifica quanto se pode confiar num resultado experimental.

### Onde se tropeça

- **Falácia do apostador.** Uma moeda honesta não "deve" coroa depois de cinco caras. Ela não tem memória.
- **Confundir correlação com causa.** Correlação é uma afirmação sobre a distribuição conjunta; causa é uma afirmação sobre o que aconteceria sob intervenção.
- **Ler o valor-$p$ como probabilidade de a hipótese ser falsa.** Ele é a probabilidade de observar dados ao menos tão extremos *supondo a hipótese nula verdadeira* — uma afirmação bem mais fraca.
`,
      exercises: [
        {
          id: 'ex-1.10.1',
          question: 'Se a média mostra o centro dos dados, o que a variância mostra?',
          options: [
            'Qual medida foi a maior de todas.',
            'O quanto os dados se espalham em torno da média.',
            'O erro de arredondamento do instrumento.',
            'O valor mais frequente da amostra.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A variância é a média dos quadrados dos desvios em relação à média. Sua raiz, o desvio-padrão, tem a mesma unidade da grandeza e é o que aparece nas barras de erro.',
        },
        {
          id: 'ex-1.10.2',
          question: 'Para reduzir à metade a incerteza da média de um conjunto de medidas, é preciso:',
          options: [
            'Dobrar o número de medidas.',
            'Quadruplicar o número de medidas.',
            'Dobrar a precisão do instrumento apenas.',
            'Descartar as medidas mais distantes da média.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A incerteza da média cai como σ/√N. Para dividi-la por 2 é preciso multiplicar N por 4 — daí o custo crescente de cada ganho de precisão.',
        },
        {
          id: 'ex-1.10.3',
          question: 'Uma moeda honesta deu cinco caras seguidas. A probabilidade de coroa no próximo lançamento é:',
          options: [
            'Maior que 1/2, porque o resultado precisa compensar.',
            'Exatamente 1/2 — lançamentos independentes não têm memória.',
            'Menor que 1/2, porque a sequência indica tendência.',
            'Impossível de determinar sem mais dados.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Independência significa que o resultado anterior não altera a distribuição do próximo. Esperar compensação é a falácia do apostador.',
        },
      ],
    },
  ],
};
