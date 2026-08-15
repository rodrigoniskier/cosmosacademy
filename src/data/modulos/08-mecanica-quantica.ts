import type { Module } from '../../types';

export const mecanicaQuantica: Module = {
  id: '8',
  title: '8. Mecânica Quântica',
  descricao:
    'A teoria que substitui trajetórias por amplitudes de probabilidade — e o formalismo de operadores que a torna calculável.',
  subtopics: [
    {
      id: '8.1',
      title: '8.1. Dualidade onda-partícula',
      objetivo:
        'Entender por que a física foi obrigada a abandonar a distinção entre onda e partícula, e o que o experimento da dupla fenda de fato mostra.',
      prerequisitos: ['4.6', '7.3'],
      fontes: ['feynman-site', 'tong-aqm', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

No fim do século XIX a arrumação parecia definitiva: matéria é feita de partículas, luz é onda, e Maxwell (módulo 4) tinha provado o segundo ponto. Três resultados experimentais destruíram essa arrumação em vinte anos — e nenhum deles era uma sutileza de laboratório.

### A construção

**A radiação de corpo negro (1900).** Aplicar equipartição aos modos do campo eletromagnético, como o tópico 7.3 mandava, prevê energia infinita: a catástrofe do ultravioleta. Planck obteve a curva correta supondo que a energia é trocada em pacotes $E = hf$. Ele mesmo considerou isso um truque matemático desesperado, e passou anos tentando eliminá-lo da teoria.

**O efeito fotoelétrico (1905).** Luz arranca elétrons de um metal — mas o que decide se arranca é a **frequência**, não a intensidade. Luz vermelha intensíssima não arranca nada; ultravioleta fraco arranca. Nenhuma teoria ondulatória explica isso, porque para uma onda a energia entregue depende da amplitude. Einstein levou os pacotes de Planck a sério: a luz **é** feita de quanta de energia $hf$, e foi por isto — não pela relatividade — que ele ganhou o Nobel.

**A difração de elétrons (1927).** Se luz tem lado de partícula, de Broglie propôs em 1924 a simetria inversa: partículas têm lado de onda, com

$$
\lambda = \frac{h}{p}.
$$

Era especulação de tese de doutorado. Davisson e Germer, e independentemente Thomson, observaram elétrons difratando em cristais exatamente com esse comprimento de onda. A tese estava certa.

**A dupla fenda, e o que ela realmente mostra.** Feynman dizia que este experimento contém o único mistério da mecânica quântica. Vale seguir a sequência com cuidado:

1. Elétrons atravessando duas fendas produzem franjas de interferência — comportamento de onda.
2. Enviando **um elétron por vez**, cada um chega como um ponto localizado na tela — comportamento de partícula. Mas, acumulando milhares deles, as franjas reaparecem. Cada elétron interfere consigo mesmo.
3. Instale um detector para saber por qual fenda cada elétron passou. **As franjas desaparecem.**

O item 3 é o decisivo, e a leitura popular dele costuma ser errada. Não se trata de "a consciência do observador afetar a realidade", nem de o detector ser desajeitado e empurrar o elétron. O que importa é se a informação sobre o caminho **existe no mundo** — se ela ficou registrada em qualquer sistema físico. Havendo registro, os caminhos deixam de ser indistinguíveis e as amplitudes não somam. Experimentos de escolha retardada e de apagador quântico confirmam que o critério é a disponibilidade da informação, não a presença de alguém olhando.

**A síntese.** Elétrons e fótons não são ondas nem partículas: são objetos de um terceiro tipo, para o qual nossa linguagem cotidiana não tem nome, e que exibem um comportamento ou outro conforme o que se pergunta. A dualidade não é uma contradição da natureza — é uma limitação do vocabulário herdado da experiência macroscópica.

### A declaração

A dualidade onda-partícula estabelece que entidades quânticas apresentam propriedades ondulatórias e corpusculares conforme o arranjo experimental, com comprimento de onda associado ao momento pela relação de de Broglie. A interferência desaparece exatamente quando a informação sobre o caminho passa a existir fisicamente, independentemente de ser lida.

### Onde se tropeça

- **Atribuir o colapso das franjas à consciência.** O que importa é o registro físico da informação, não a observação humana.
- **Achar que o elétron "escolhe" um dos dois comportamentos.** Ele não é nenhum dos dois; a escolha está na pergunta feita pelo aparato.
- **Esperar ver efeitos quânticos em objetos grandes.** Com $\lambda = h/p$, uma bola de futebol tem comprimento de onda de $10^{-34}\ \text{m}$ — indetectável em princípio, não só na prática.
`,
      exercises: [
        {
          id: 'ex-8.1.1',
          question: 'No efeito fotoelétrico, o que determina se elétrons são arrancados do metal?',
          options: [
            'A intensidade da luz incidente.',
            'A frequência da luz: cada fóton carrega E = hf, e abaixo de um limiar nenhum fóton tem energia suficiente.',
            'O tempo de exposição.',
            'A temperatura do metal.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Luz vermelha intensíssima não arranca nada; ultravioleta fraco arranca. Nenhuma teoria ondulatória explica isso — foi por essa explicação que Einstein ganhou o Nobel, não pela relatividade.',
        },
        {
          id: 'ex-8.1.2',
          question: 'Na dupla fenda, por que as franjas desaparecem quando se detecta por qual fenda o elétron passou?',
          options: [
            'Porque a consciência do observador altera a realidade física.',
            'Porque a informação sobre o caminho passa a existir fisicamente, tornando os caminhos distinguíveis — e amplitudes de caminhos distinguíveis não se somam.',
            'Porque o detector sempre empurra o elétron mecanicamente.',
            'Porque o elétron deixa de ser uma onda ao ser medido.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Experimentos de escolha retardada e apagador quântico mostram que o critério é a disponibilidade da informação no mundo, não a presença de alguém olhando nem uma perturbação mecânica.',
        },
        {
          id: 'ex-8.1.3',
          question: 'Por que não se observa comportamento ondulatório em objetos do cotidiano?',
          options: [
            'Porque a mecânica quântica só vale para partículas elementares.',
            'Porque λ = h/p, e para um objeto macroscópico o momento é tão grande que o comprimento de onda fica em torno de 10⁻³⁴ m.',
            'Porque o ar destrói as ondas de matéria.',
            'Porque objetos grandes são feitos de muitas partículas com fases aleatórias apenas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A constante de Planck é minúscula. Para uma bola de futebol o comprimento de onda de de Broglie é indetectável em princípio, não apenas por limitação instrumental.',
        },
      ],
    },

    {
      id: '8.2',
      title: '8.2. Função de onda',
      objetivo:
        'Entender o que ψ é, o que |ψ|² significa, e por que a interpretação probabilística não é ignorância sobre um valor já definido.',
      prerequisitos: ['1.10', '8.1'],
      fontes: ['feynman-site', 'tong-aqm'],
      content: String.raw`
### O problema

Se um elétron interfere consigo mesmo, alguma coisa se espalha pelas duas fendas. Mas o elétron chega inteiro num ponto da tela. O que exatamente é a entidade que se propaga?

### A construção

**A função de onda.** O estado de um sistema quântico é descrito por uma função complexa $\psi(x,t)$. Ela não é uma onda de matéria espalhada no espaço, nem uma densidade de carga — é uma **amplitude de probabilidade**, e seu caráter complexo é essencial, não um artifício de cálculo.

**A regra de Born.** Max Born, em 1926, deu a interpretação que colou:

$$
P(x)\,dx = |\psi(x,t)|^2\,dx,
$$

a probabilidade de encontrar a partícula entre $x$ e $x + dx$. Com isso a normalização é obrigatória — a partícula está em algum lugar:

$$
\int |\psi|^2 dx = 1.
$$

**Por que precisa ser complexa.** Se $\psi$ fosse real, $|\psi|^2$ seria simplesmente $\psi^2$ e a soma de duas contribuições nunca poderia dar menos que cada uma. Mas franjas escuras existem: nelas, duas contribuições se **cancelam**. É a fase relativa entre números complexos que permite interferência destrutiva. Some amplitudes, depois eleve ao quadrado:

$$
|\psi_1 + \psi_2|^2 \ne |\psi_1|^2 + |\psi_2|^2,
$$

e a diferença entre os dois lados é exatamente o termo de interferência. Trocar a ordem dessas duas operações é o erro conceitual mais caro do assunto.

**Probabilidade não é ignorância.** Este é o ponto onde a intuição clássica precisa ser abandonada de propósito. Numa moeda escondida sob a mão, o resultado já está definido e você apenas não sabe qual é. Em mecânica quântica não é assim: antes da medida, o valor **não está determinado**, e é isso que os teoremas de Bell tornam demonstrável. Se houvesse valores pré-definidos e locais, certas correlações entre partículas emaranhadas obedeceriam a um limite matemático — e experimentos, refinados de Aspect nos anos 1980 até os testes livres de brechas de 2015, mostram que esse limite é violado. O Nobel de Física de 2022 foi por essa linha de trabalho.

**Condições que $\psi$ precisa satisfazer.** Contínua, com derivada contínua onde o potencial é finito, e normalizável. Não são exigências técnicas gratuitas: são elas que, aplicadas a um elétron confinado, selecionam apenas certas soluções — e é daí que sai a quantização dos níveis de energia, em 8.3. **A quantização não é postulada; ela emerge de condições de contorno**, exatamente como só certas frequências cabem numa corda de violão presa nas duas pontas.

### A declaração

A função de onda é uma função complexa que codifica o estado de um sistema quântico, e cujo módulo ao quadrado dá a densidade de probabilidade de encontrar a partícula em cada ponto. Amplitudes se somam antes de serem elevadas ao quadrado, o que produz interferência, e a indeterminação que ela descreve não é ignorância sobre valores preexistentes.

### Onde se tropeça

- **Elevar ao quadrado antes de somar.** É a inversão que apaga toda a interferência.
- **Imaginar $\psi$ como a partícula espalhada.** Ela é amplitude de probabilidade, não substância diluída.
- **Ler o indeterminismo como limitação de conhecimento.** Os testes de Bell fecham essa saída para teorias locais de variáveis ocultas.
`,
      exercises: [
        {
          id: 'ex-8.2.1',
          question: 'Por que a função de onda precisa ser complexa?',
          options: [
            'Para facilitar os cálculos com exponenciais.',
            'Porque a fase relativa entre números complexos é o que permite interferência destrutiva — franjas escuras exigem cancelamento.',
            'Porque a energia pode ser negativa.',
            'Porque o espaço tem três dimensões.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Com ψ real, |ψ|² = ψ² e duas contribuições nunca dariam menos que cada uma. As franjas escuras são cancelamento, e cancelamento exige fase.',
        },
        {
          id: 'ex-8.2.2',
          question: 'A ordem correta das operações na interferência quântica é:',
          options: [
            'Elevar cada amplitude ao quadrado e depois somar as probabilidades.',
            'Somar as amplitudes e depois elevar ao quadrado.',
            'Somar os módulos e depois normalizar.',
            'Multiplicar as amplitudes entre si.',
          ],
          correctAnswerIndex: 1,
          explanation:
            '|ψ₁ + ψ₂|² ≠ |ψ₁|² + |ψ₂|², e a diferença é o termo de interferência. Inverter a ordem apaga todo o efeito quântico.',
        },
        {
          id: 'ex-8.2.3',
          question: 'A probabilidade quântica difere da probabilidade de uma moeda escondida porque:',
          options: [
            'É calculada com números complexos, mas descreve a mesma ignorância.',
            'Na moeda o resultado já está definido e apenas não é conhecido; em mecânica quântica os testes de Bell mostram que não há valor pré-definido local.',
            'A probabilidade quântica nunca é exatamente 1/2.',
            'A moeda pode ser medida sem perturbação.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Se houvesse valores pré-definidos e locais, certas correlações obedeceriam ao limite de Bell. Experimentos violam esse limite — dos testes de Aspect aos livres de brechas de 2015, reconhecidos com o Nobel de 2022.',
        },
      ],
    },

    {
      id: '8.3',
      title: '8.3. Equação de Schrödinger',
      objetivo:
        'Ver a equação que governa a evolução quântica, sua origem na hamiltoniana e como a quantização emerge de condições de contorno.',
      prerequisitos: ['1.9', '5.4', '8.2'],
      fontes: ['tong-aqm', 'feynman-site', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

A função de onda descreve o estado agora. Falta a lei dinâmica: dada $\psi$ num instante, o que determina $\psi$ depois? Na mecânica clássica esse papel cabia a $\vec{F} = m\vec{a}$ ou às equações de Hamilton.

### A construção

**A equação.** Schrödinger, em 1926:

$$
i\hbar\,\frac{\partial \psi}{\partial t} = \hat{H}\psi,
$$

com $\hbar = h/2\pi$. À direita, o operador hamiltoniano — a hamiltoniana de 5.4, agora promovida a operador. Para uma partícula em um potencial:

$$
\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x),
$$

em que o primeiro termo é a energia cinética e o segundo a potencial, exatamente como em $H = T + V$. A mecânica hamiltoniana não foi abandonada: ela virou a estrutura sobre a qual a quântica é construída, e é por isso que o módulo 5 vem antes deste.

**Ela não é derivada.** Vale ser honesto: a equação é um postulado. Schrödinger chegou a ela por analogia com a óptica — a relação entre óptica geométrica e ondulatória é análoga à relação entre mecânica clássica e quântica — mas não há dedução a partir de princípios anteriores. Sua justificativa é experimental, e é esmagadora.

**Duas propriedades que decidem tudo.** A equação é de **primeira ordem no tempo**, então $\psi$ agora determina $\psi$ em qualquer instante: a evolução quântica é perfeitamente determinística. E ela é **linear**, o que significa que combinações de soluções também são soluções — é daqui que vem a superposição, e portanto a interferência de 8.2.

Note a tensão que isso cria, e que é o problema da medição: a evolução é determinística e linear, mas o resultado de uma medida é probabilístico e único. As duas descrições coexistem no formalismo sem que ele explique como uma vira a outra.

**Equação independente do tempo.** Para potenciais estacionários, separam-se as variáveis e resta

$$
\hat{H}\psi = E\psi,
$$

que é um **problema de autovalores** — exatamente a estrutura do tópico 1.6. As soluções $\psi$ são autofunções e os $E$ permitidos são autovalores. A álgebra linear que parecia abstrata lá é o esqueleto da mecânica quântica aqui.

**De onde vem a quantização.** Resolva para uma partícula numa caixa de largura $L$, com $\psi$ obrigada a se anular nas paredes. Só sobrevivem soluções com número inteiro de meios comprimentos de onda, e as energias permitidas ficam

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \qquad n = 1, 2, 3, \dots
$$

Três leituras importantes. Primeiro, **a quantização não foi postulada** — ela saiu das condições de contorno, como os harmônicos de uma corda presa nas pontas. Segundo, o estado fundamental tem $n = 1$, não $n = 0$: existe uma **energia de ponto zero** irredutível, porque $\psi \equiv 0$ não é estado. Terceiro, $E_n$ cai com $L^2$: confinar mais custa energia, o que explica de imediato por que átomos têm o tamanho que têm e por que o elétron não cai no núcleo.

### A declaração

A equação de Schrödinger é a lei de evolução temporal dos estados quânticos, linear e de primeira ordem no tempo, tendo como gerador o operador hamiltoniano. Em potenciais estacionários ela se reduz a um problema de autovalores cujas soluções, sujeitas a condições de contorno, produzem espectros discretos de energia.

### Onde se tropeça

- **Procurar a dedução da equação.** Ela é postulado; sua validade é experimental.
- **Achar que a quântica é indeterminística na evolução.** A evolução é determinística; o indeterminismo aparece na medida.
- **Esperar $E = 0$ no estado fundamental.** A energia de ponto zero é consequência direta de $\psi$ não poder ser identicamente nula.
`,
      exercises: [
        {
          id: 'ex-8.3.1',
          question: 'A equação de Schrödinger é linear e de primeira ordem no tempo. Qual é a consequência?',
          options: [
            'A energia é sempre conservada.',
            'A evolução é determinística e admite superposição de soluções — daí a interferência.',
            'As partículas se movem em linha reta.',
            'A função de onda é sempre real.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Primeira ordem no tempo: ψ agora determina ψ depois. Linearidade: combinações de soluções são soluções. A tensão com o caráter probabilístico da medida é o problema da medição.',
        },
        {
          id: 'ex-8.3.2',
          question: 'De onde vem a quantização das energias numa partícula confinada?',
          options: [
            'De um postulado adicional da teoria quântica.',
            'Das condições de contorno: ψ precisa se anular nas paredes, o que só permite números inteiros de meios comprimentos de onda.',
            'Da constante de Planck ser pequena.',
            'Do princípio da incerteza.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A quantização emerge, não é postulada — exatamente como só certas frequências cabem numa corda de violão presa nas duas pontas.',
        },
        {
          id: 'ex-8.3.3',
          question: 'Por que o estado fundamental de uma partícula na caixa tem n = 1 e não n = 0?',
          options: [
            'Por convenção de numeração.',
            'Porque n = 0 daria ψ identicamente nula, que não representa estado algum — daí a energia de ponto zero irredutível.',
            'Porque a energia não pode ser negativa.',
            'Porque a caixa tem largura finita.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Uma função de onda identicamente nula significa "não há partícula". A menor energia possível é estritamente maior que zero, e é por isso que confinar custa energia — o que fixa o tamanho dos átomos.',
        },
      ],
    },

    {
      id: '8.4',
      title: '8.4. Operadores',
      objetivo:
        'Entender por que grandezas físicas viram operadores, e o que a não comutatividade tem a ver com o princípio da incerteza.',
      prerequisitos: ['1.6', '8.3'],
      fontes: ['tong-aqm', 'tong-teaching'],
      content: String.raw`
### O problema

Na física clássica, posição e momento são números associados ao estado. Na quântica o estado é uma função, e não há números prontos nela. Falta o dispositivo que extrai grandezas físicas de $\psi$.

### A construção

**Grandezas viram operadores.** A cada observável corresponde um operador que atua sobre a função de onda:

$$
\hat{x} = x, \qquad \hat{p} = -i\hbar\frac{\partial}{\partial x}, \qquad \hat{H} = \frac{\hat{p}^2}{2m} + V(\hat{x}).
$$

A construção da hamiltoniana segue a receita clássica de 5.4, com os operadores no lugar das variáveis — o que mostra, de novo, que a estrutura hamiltoniana foi preservada e não substituída.

**Hermiticidade.** Nem todo operador serve: valores medidos são números reais, e a condição que garante autovalores reais é a **hermiticidade**. Ela também garante que autofunções de autovalores distintos são ortogonais, o que dá ao conjunto delas a estrutura de uma base. É por isso que qualquer estado pode ser expandido em autoestados de um observável — fato usado o tempo todo em 8.5 e 8.6.

**A não comutatividade.** Aqui está o coração algébrico da teoria. Aplicar $\hat{x}$ e depois $\hat{p}$ não dá o mesmo que a ordem inversa:

$$
[\hat{x}, \hat{p}] = \hat{x}\hat{p} - \hat{p}\hat{x} = i\hbar .
$$

Isso não é uma esquisitice formal: é a mesma não comutatividade das matrizes do tópico 1.6, onde girar e depois refletir difere de refletir e depois girar. Aqui ela tem consequência física direta.

**O princípio da incerteza, como teorema.** De um comutador não nulo segue, matematicamente, uma desigualdade entre as dispersões:

$$
\Delta x\,\Delta p \ge \frac{\hbar}{2}.
$$

Duas coisas merecem ser ditas com clareza. Primeira: isto é um **teorema**, deduzido do formalismo, não um postulado nem uma constatação empírica. Segunda: **não é sobre perturbação do aparelho de medida.** A explicação popular — "para ver o elétron você precisa iluminá-lo, e o fóton o empurra" — foi a intuição inicial de Heisenberg e está errada como fundamento. A relação diz que um estado quântico simplesmente **não possui** posição e momento simultaneamente bem definidos; não há valor preciso a ser perturbado. Um estado bem localizado é, matematicamente, uma superposição de muitos momentos — é o mesmo fato da análise de Fourier que faz um pulso curto no tempo conter muitas frequências.

**Observáveis compatíveis.** Se dois operadores comutam, existem estados que são autoestados de ambos, e as duas grandezas podem ser conhecidas ao mesmo tempo com precisão arbitrária. É por isso que se pode rotular um estado atômico por energia, momento angular total e sua projeção: esses operadores comutam entre si. A escolha dos números quânticos que descrevem um sistema é, no fundo, a escolha de um conjunto de operadores que comutam.

### A declaração

Na mecânica quântica, cada grandeza física observável é representada por um operador hermitiano que atua sobre a função de onda. O comutador entre dois operadores determina se as grandezas correspondentes podem ter valores simultaneamente definidos, e comutadores não nulos implicam relações de incerteza como teorema do formalismo.

### Onde se tropeça

- **Explicar a incerteza pela perturbação da medida.** A relação vale para o estado, independentemente de haver medição.
- **Assumir comutatividade.** Trocar a ordem de $\hat{x}$ e $\hat{p}$ altera o resultado, e é disso que a física quântica depende.
- **Aplicar a relação a pares quaisquer.** Ela vale para observáveis cujo comutador não é nulo; energia e momento angular total, por exemplo, comutam.
`,
      exercises: [
        {
          id: 'ex-8.4.1',
          question: 'Por que os operadores associados a observáveis precisam ser hermitianos?',
          options: [
            'Para que sejam mais fáceis de calcular.',
            'Porque a hermiticidade garante autovalores reais — valores medidos são números reais — e autofunções ortogonais, que formam base.',
            'Porque a função de onda é complexa.',
            'Porque a energia é sempre positiva.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Autovalores reais são exigência física. A ortogonalidade das autofunções é o que permite expandir qualquer estado na base de autoestados de um observável.',
        },
        {
          id: 'ex-8.4.2',
          question: 'A relação Δx·Δp ≥ ℏ/2 é melhor descrita como:',
          options: [
            'Uma limitação prática dos instrumentos de medida.',
            'Um teorema que decorre de [x̂, p̂] = iℏ: o estado não possui posição e momento simultaneamente definidos.',
            'Um postulado independente da teoria.',
            'Uma consequência do fóton empurrar o elétron durante a observação.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É deduzida do formalismo e vale para o estado, haja ou não medição. Um estado bem localizado é uma superposição de muitos momentos — o mesmo fato de Fourier que faz um pulso curto conter muitas frequências.',
        },
        {
          id: 'ex-8.4.3',
          question: 'Se dois operadores comutam, então:',
          options: [
            'As grandezas correspondentes são sempre iguais.',
            'Existem estados que são autoestados de ambos, e as duas grandezas podem ter valores definidos simultaneamente.',
            'Uma delas não é observável.',
            'O sistema está em equilíbrio.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É por isso que se pode rotular um estado atômico por energia, momento angular total e projeção ao mesmo tempo: os operadores correspondentes comutam entre si.',
        },
      ],
    },

    {
      id: '8.5',
      title: '8.5. Observáveis',
      objetivo:
        'Entender o que uma medida faz — valor esperado, autovalores possíveis e o problema que o formalismo não resolve.',
      prerequisitos: ['8.4'],
      fontes: ['tong-aqm', 'feynman-site'],
      content: String.raw`
### O problema

Os operadores estão definidos. Falta a regra que liga o formalismo ao laboratório: dado um estado $\psi$ e um observável $\hat{A}$, o que exatamente se obtém ao medir?

### A construção

**Resultados possíveis.** A medida de $\hat{A}$ só pode dar um de seus **autovalores**. Isso já é uma restrição forte e verificável: um elétron num átomo não pode ter qualquer energia, e a componente de spin ao longo de um eixo só pode dar dois valores. O espectro do operador é o cardápio completo dos resultados possíveis.

**Probabilidades.** Expandindo o estado na base de autoestados de $\hat{A}$,

$$
\psi = \sum_n c_n \phi_n,
$$

a probabilidade de obter o autovalor $a_n$ é $|c_n|^2$. É a regra de Born de 8.2, agora na forma geral.

**Valor esperado.** A média sobre muitas medidas em sistemas identicamente preparados:

$$
\langle A \rangle = \int \psi^* \hat{A}\, \psi \, dx .
$$

Cuidado com o nome: **o valor esperado frequentemente não é um resultado possível.** Para um spin que dá $+\hbar/2$ ou $-\hbar/2$, o valor esperado pode ser zero — que nunca é medido. É média, não previsão de um evento individual.

**O colapso.** Feita a medida e obtido $a_n$, o estado passa a ser $\phi_n$. Medir de novo, imediatamente, devolve $a_n$ com certeza. Esta é a parte do formalismo em que é preciso ser honesto sobre o que não se sabe: o colapso é **postulado**, e não decorre da equação de Schrödinger. Pior, ele contradiz o espírito dela — a evolução de 8.3 é linear e determinística, e o colapso é abrupto e probabilístico.

**O problema da medição, e as saídas propostas.** A questão é o que distingue uma "medida" de qualquer outra interação física, já que o aparelho também é feito de átomos e deveria obedecer à mesma equação. As respostas em discussão:

| Abordagem | Posição sobre o colapso |
| --- | --- |
| Copenhague | Aceita o colapso como postulado e não pergunta mais |
| Muitos mundos | Não há colapso; todos os resultados ocorrem em ramos que deixam de interferir |
| Bohm | Partículas têm posições definidas guiadas por uma onda-piloto; o colapso é aparente |
| Colapso objetivo | Modifica a equação para que o colapso ocorra fisicamente, de modo testável |

Vale registrar que **todas dão as mesmas previsões experimentais** para os experimentos realizados até hoje (as teorias de colapso objetivo são a exceção parcial, e por isso estão sendo testadas). A escolha entre elas ainda não é decidível por experimento — é uma disputa aberta, e apresentá-la como resolvida seria falso.

**Decoerência: o que de fato se entende hoje.** Há progresso real, ainda que parcial. Um sistema quântico nunca está isolado; ao interagir com o ambiente, a informação sobre sua fase relativa vaza para bilhões de graus de liberdade, e a interferência se torna inobservável na prática — extraordinariamente rápido, em escalas macroscópicas. A decoerência explica **por que não vemos superposições de objetos grandes**, e isso é muito. O que ela não explica é por que se obtém *um* resultado definido em vez da superposição continuar existindo. O problema da medição não foi resolvido; foi delimitado.

### A declaração

Uma medida de um observável só pode retornar um dos autovalores do operador correspondente, com probabilidade dada pelo módulo ao quadrado do coeficiente do autoestado na expansão do estado. Após a medida o sistema fica no autoestado obtido — postulado que não decorre da equação de evolução e cuja interpretação permanece em aberto.

### Onde se tropeça

- **Tratar o valor esperado como resultado possível.** Ele é média, e pode não pertencer ao espectro.
- **Apresentar Copenhague como a interpretação correta.** É uma entre várias empiricamente equivalentes.
- **Dizer que a decoerência resolveu o problema da medição.** Ela explica o desaparecimento da interferência, não a unicidade do resultado.
`,
      exercises: [
        {
          id: 'ex-8.5.1',
          question: 'O valor esperado ⟨A⟩ de um observável:',
          options: [
            'É sempre um dos resultados possíveis da medida.',
            'É a média sobre muitas medidas, e pode não ser nenhum resultado possível — como zero para um spin que só dá ±ℏ/2.',
            'É igual ao maior autovalor.',
            'Só existe para observáveis com espectro contínuo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É média sobre sistemas identicamente preparados, não previsão de um evento individual. Confundir os dois é fonte constante de erro de interpretação.',
        },
        {
          id: 'ex-8.5.2',
          question: 'Qual é o status do postulado do colapso?',
          options: [
            'É deduzido da equação de Schrödinger.',
            'É postulado à parte, e contradiz o espírito da equação de Schrödinger, que é linear e determinística.',
            'Foi abandonado pela física moderna.',
            'É consequência do princípio da incerteza.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A evolução unitária é determinística e linear; o colapso é abrupto e probabilístico. Explicar como uma coisa vira a outra é o problema da medição.',
        },
        {
          id: 'ex-8.5.3',
          question: 'O que a decoerência explica, e o que ela não explica?',
          options: [
            'Explica tudo: o problema da medição está resolvido.',
            'Explica por que não vemos superposições macroscópicas, pois a fase vaza para o ambiente; não explica por que se obtém um resultado definido em vez de a superposição persistir.',
            'Explica a unicidade do resultado, mas não o desaparecimento da interferência.',
            'Não explica nada: é apenas uma reformulação de Copenhague.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É progresso real e parcial. A interferência some porque a informação de fase se espalha por bilhões de graus de liberdade — mas a unicidade do resultado continua em aberto.',
        },
      ],
    },

    {
      id: '8.6',
      title: '8.6. Estados quânticos',
      objetivo:
        'Passar da função de onda ao vetor de estado — e entender emaranhamento, que é o que a linguagem de funções de onda esconde.',
      prerequisitos: ['1.6', '8.5'],
      fontes: ['tong-aqm', 'tong-teaching'],
      content: String.raw`
### O problema

A função de onda $\psi(x)$ descreve uma partícula no espaço. Mas há sistemas quânticos sem análogo espacial nenhum — o spin de um elétron tem apenas dois estados possíveis, e não faz sentido perguntar como ele varia com $x$. É preciso uma formulação mais geral.

### A construção

**Vetores de estado.** O estado passa a ser um vetor $|\psi\rangle$ num espaço vetorial complexo — o espaço de Hilbert —, e a função de onda vira apenas suas componentes numa base específica, a de posição. É a mesma ideia de 1.6: um vetor existe independentemente das coordenadas que você escolhe para descrevê-lo. Aqui isso deixa de ser elegância e vira necessidade, porque espaços de dimensão finita, como o do spin, ficam fora do alcance da linguagem de funções.

**Superposição.** Se $|0\rangle$ e $|1\rangle$ são estados possíveis, então

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

também é, com $|\alpha|^2 + |\beta|^2 = 1$. É a linearidade da equação de Schrödinger expressa no espaço de estados — e é a base do qubit, que difere de um bit clássico exatamente por admitir fases relativas entre $\alpha$ e $\beta$.

Um cuidado que quase toda divulgação erra: superposição **não** significa "o sistema está nos dois estados ao mesmo tempo". Significa que ele está num terceiro estado, tão definido quanto os outros dois, que não é nenhum deles.

**Emaranhamento.** Aqui está o fenômeno que só aparece com clareza nesta linguagem. Para duas partículas, existem estados que **não podem ser escritos** como um par de estados individuais:

$$
|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|0\rangle_A|1\rangle_B - |1\rangle_A|0\rangle_B\right).
$$

Não há como atribuir um estado à partícula $A$ isoladamente. O sistema tem estado bem definido; suas partes, não — o que inverte a intuição de que o todo é feito das partes.

Medindo $A$ e obtendo $0$, sabe-se instantaneamente que $B$ dará $1$, a qualquer distância. E aqui é preciso ser preciso para não repetir a confusão usual: **isso não transmite informação e não viola a relatividade.** Quem está com $B$ vê resultados aleatórios e não detecta nada de diferente; a correlação só aparece ao comparar as duas listas de resultados, e essa comparação exige um canal clássico, limitado por $c$.

**O que Bell acrescentou.** As correlações do emaranhamento são **mais fortes** do que qualquer teoria de variáveis ocultas locais permitiria — foi o teorema de Bell de 1964 que transformou uma discussão filosófica em questão experimental, e os experimentos deram razão à mecânica quântica. É o resultado citado em 8.2, e é o que fundamenta criptografia quântica e computação quântica: um computador quântico de $n$ qubits explora um espaço de dimensão $2^n$, e é o emaranhamento que impede simulá-lo eficientemente num computador clássico.

**Estados puros e mistos.** Um estado puro é um vetor bem definido; um estado misto descreve ignorância clássica sobre qual estado puro o sistema tem, e exige a matriz densidade. A distinção importa porque uma parte de um sistema emaranhado, olhada isoladamente, é sempre um estado misto — e é essa observação que conecta emaranhamento, decoerência e entropia. A entropia de emaranhamento assim definida é a mesma quantidade que reaparece, de forma espetacular, na entropia de buracos negros do módulo 17.

### A declaração

O estado de um sistema quântico é um vetor num espaço de Hilbert complexo, do qual a função de onda é a representação na base de posição. Sistemas compostos admitem estados emaranhados, que não se fatoram em estados individuais das partes, e cujas correlações excedem o que teorias locais de variáveis ocultas permitem.

### Onde se tropeça

- **Dizer que a superposição é "estar em dois estados ao mesmo tempo".** É um estado distinto, com fase relativa própria.
- **Achar que emaranhamento transmite informação instantânea.** Os resultados locais são aleatórios; a correlação só emerge na comparação, que é clássica.
- **Confundir estado misto com superposição.** Um é ignorância clássica, o outro é um estado quântico definido.
`,
      exercises: [
        {
          id: 'ex-8.6.1',
          question: 'Por que a linguagem de vetores de estado é mais geral que a de funções de onda?',
          options: [
            'Porque é matematicamente mais simples.',
            'Porque sistemas como o spin têm espaço de estados de dimensão finita e não admitem descrição como função de x.',
            'Porque funções de onda não podem ser complexas.',
            'Porque vetores de estado dispensam normalização.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O spin de um elétron tem dois estados e nenhuma dependência espacial. A função de onda é apenas a componente do vetor de estado na base de posição.',
        },
        {
          id: 'ex-8.6.2',
          question: 'Um estado emaranhado de duas partículas é aquele que:',
          options: [
            'Tem as duas partículas no mesmo lugar.',
            'Não pode ser escrito como um par de estados individuais: o sistema tem estado definido, as partes não.',
            'Tem energia total nula.',
            'Só existe a distâncias muito pequenas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A não fatorabilidade é a definição. Inverte a intuição de que o todo é feito das partes: aqui o todo está bem definido e as partes, isoladamente, não têm estado puro.',
        },
        {
          id: 'ex-8.6.3',
          question: 'Por que o emaranhamento não permite comunicação mais rápida que a luz?',
          options: [
            'Porque a correlação se perde com a distância.',
            'Porque quem observa uma das partículas vê apenas resultados aleatórios; a correlação só aparece ao comparar as listas, e essa comparação exige um canal clássico limitado por c.',
            'Porque a medida destrói o emaranhamento antes que o sinal chegue.',
            'Porque a relatividade proíbe estados emaranhados.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Localmente nada muda: os resultados são aleatórios com ou sem a medida distante. Sem o canal clássico, não há como extrair informação da correlação.',
        },
      ],
    },

    {
      id: '8.7',
      title: '8.7. Spin',
      objetivo:
        'Entender o momento angular que não vem de rotação alguma — e por que ele decide a estrutura de toda a matéria.',
      prerequisitos: ['8.6'],
      fontes: ['tong-aqm', 'feynman-site', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

Em 1922, Stern e Gerlach passaram um feixe de átomos de prata por um campo magnético não uniforme, esperando um borrão contínuo. Obtiveram **duas** manchas separadas. Um momento angular clássico apontando em direções aleatórias daria todas as deflexões intermediárias; duas manchas significam que só há dois valores possíveis para a componente medida.

### A construção

**O que é.** Spin é momento angular **intrínseco**: uma propriedade da partícula, como massa e carga, e não o resultado de algo girando. A imagem da bolinha rodando é útil por dez minutos e depois atrapalha — um elétron é puntiforme até o limite experimental, e o cálculo clássico exigiria que sua superfície girasse mais rápido que a luz.

**Quantização.** A componente ao longo de qualquer eixo escolhido só pode dar

$$
S_z = \pm\frac{\hbar}{2},
$$

para partículas de spin $\frac{1}{2}$. E aqui está o que Stern–Gerlach mostra e é fácil enunciar mal: **qualquer** eixo dá dois valores. Não existe eixo privilegiado nem direção "verdadeira" do spin — medindo em $z$ e depois em $x$, o resultado em $x$ é aleatório, e uma nova medida em $z$ volta a ser aleatória. Os operadores de componentes de spin não comutam entre si, exatamente como em 8.4.

**Férmions e bósons.** A divisão mais consequente da física:

| | Spin | Estatística | Exemplos |
| --- | --- | --- | --- |
| Férmions | semi-inteiro | antissimétrica sob troca | elétron, quark, próton |
| Bósons | inteiro | simétrica sob troca | fóton, glúon, Higgs |

**O princípio de exclusão de Pauli.** Para férmions, o estado total deve trocar de sinal ao permutar duas partículas idênticas — o que torna impossível dois deles ocuparem o mesmo estado quântico. Note que isso não é uma força de repulsão: é uma **impossibilidade de contagem**, o estado simplesmente não existe. É a mesma indistinguibilidade que exigiu o fator $N!$ em 7.1, agora com consequência estrutural.

E as consequências são absolutamente tudo o que se vê. Os elétrons preenchem camadas sucessivas em vez de se acumularem no nível fundamental, e daí vêm a tabela periódica e toda a química. A rigidez da matéria — o fato de sua mão não atravessar a mesa — é pressão de degenerescência, não repulsão eletrostática. E é ela que sustenta anãs brancas e estrelas de nêutrons contra o colapso gravitacional, com o limite de Chandrasekhar marcando onde deixa de conseguir.

Bósons fazem o oposto: podem se acumular no mesmo estado, e é disso que dependem o laser, a superfluidez e os condensados de Bose–Einstein.

**A rotação de 720°.** Uma curiosidade que revela estrutura profunda: girar um sistema de spin $\frac{1}{2}$ de $360^\circ$ **não** o devolve ao estado inicial — a função de onda troca de sinal. É preciso $720^\circ$. Isso não é acessível à intuição, mas é medido em experimentos de interferometria de nêutrons, e reflete o fato de que o grupo relevante para o spin é $SU(2)$, e não o grupo de rotações do espaço comum. É a primeira aparição concreta de $SU(2)$ neste currículo, e ela volta com força nos módulos 10 e 11.

**Uma dívida.** A conexão entre spin e estatística — por que semi-inteiro implica antissimetria — não é demonstrável na mecânica quântica não relativística. É um **teorema** da teoria quântica de campos relativística, e aparece no módulo 9. Aqui ela entra como fato experimental bem estabelecido.

### A declaração

Spin é o momento angular intrínseco de uma partícula, quantizado em unidades de $\hbar/2$ e sem contrapartida em rotação espacial. Partículas de spin semi-inteiro obedecem à estatística de Fermi-Dirac e ao princípio de exclusão; as de spin inteiro obedecem à de Bose-Einstein e podem compartilhar o mesmo estado.

### Onde se tropeça

- **Imaginar a partícula girando.** A imagem falha quantitativamente e leva a conclusões erradas.
- **Achar que existe uma direção verdadeira do spin.** Medidas em eixos diferentes são incompatíveis, porque os operadores não comutam.
- **Tratar a exclusão de Pauli como força.** Não há força: o estado antissimétrico correspondente não existe.
`,
      exercises: [
        {
          id: 'ex-8.7.1',
          question: 'O experimento de Stern-Gerlach produziu duas manchas em vez de um borrão contínuo. O que isso mostrou?',
          options: [
            'Que os átomos de prata têm dois isótopos.',
            'Que a componente do momento angular ao longo do eixo medido só admite dois valores — é quantizada.',
            'Que o campo magnético era não uniforme.',
            'Que o feixe estava mal colimado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Um momento angular clássico apontando em direções aleatórias daria todas as deflexões intermediárias. Duas manchas separadas significam quantização — e qualquer eixo escolhido dá dois valores.',
        },
        {
          id: 'ex-8.7.2',
          question: 'O princípio de exclusão de Pauli é melhor descrito como:',
          options: [
            'Uma força repulsiva de curto alcance entre elétrons.',
            'Uma impossibilidade estrutural: o estado antissimétrico com dois férmions idênticos no mesmo estado quântico simplesmente não existe.',
            'Uma consequência da repulsão eletrostática.',
            'Uma regra empírica sem fundamento teórico.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Não há força envolvida. A antissimetria exigida para férmions faz o estado se anular — e daí vêm a tabela periódica, a rigidez da matéria e a sustentação de anãs brancas.',
        },
        {
          id: 'ex-8.7.3',
          question: 'A conexão entre spin semi-inteiro e estatística de Fermi-Dirac:',
          options: [
            'É demonstrada dentro da mecânica quântica não relativística.',
            'É um teorema da teoria quântica de campos relativística; na quântica não relativística entra como fato experimental.',
            'É apenas uma convenção de classificação.',
            'Foi refutada experimentalmente.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O teorema spin-estatística exige relatividade e teoria de campos — assunto do módulo 9. Aqui a conexão é usada como fato bem estabelecido, mas não demonstrado.',
        },
      ],
    },

    {
      id: '8.8',
      title: '8.8. Oscilador harmônico quântico',
      objetivo:
        'Resolver o sistema mais reutilizado da física — e entender por que ele é a ponte para a teoria quântica de campos.',
      prerequisitos: ['1.9', '8.3'],
      fontes: ['tong-aqm', 'tong-qft', 'feynman-site'],
      content: String.raw`
### O problema

O oscilador harmônico apareceu em 1.9 como a equação da mola e voltou em toda parte. Resolvê-lo quanticamente não é mais um exercício: qualquer potencial, perto de um mínimo, é aproximadamente harmônico, de modo que a solução deste problema é a primeira aproximação de quase todo sistema ligado que existe.

### A construção

**O resultado.** Com $V = \frac{1}{2}m\omega^2x^2$, a equação de Schrödinger dá

$$
E_n = \hbar\omega\left(n + \frac{1}{2}\right), \qquad n = 0, 1, 2, \dots
$$

Duas características chamam atenção. Os níveis são **igualmente espaçados**, com separação $\hbar\omega$ — diferente do átomo de hidrogênio, cujos níveis se acumulam. E o estado fundamental tem energia $\frac{1}{2}\hbar\omega$, não zero.

**A energia de ponto zero.** Ela é obrigatória, e o argumento é o de 8.4: uma partícula parada no fundo do poço teria posição e momento simultaneamente definidos, violando a relação de incerteza. O estado fundamental é o melhor compromisso possível entre estar localizado e ter momento pequeno.

E ela é medida. O hélio permanece líquido até o zero absoluto à pressão ambiente, porque a energia de ponto zero é suficiente para impedir a cristalização. O efeito Casimir — duas placas metálicas no vácuo se atraem — é atribuído às flutuações de ponto zero do campo eletromagnético, e é medido desde 1997.

**Operadores de criação e aniquilação.** O modo elegante de resolver dispensa equações diferenciais. Definem-se

$$
\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i}{m\omega}\hat{p}\right), \qquad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i}{m\omega}\hat{p}\right),
$$

com $[\hat{a}, \hat{a}^\dagger] = 1$. O operador $\hat{a}^\dagger$ leva o sistema do nível $n$ ao $n+1$ e $\hat{a}$ faz o contrário; a hamiltoniana vira $\hat{H} = \hbar\omega(\hat{a}^\dagger\hat{a} + \frac{1}{2})$, e todo o espectro sai de álgebra. É um dos cálculos mais bonitos da física, e vale fazê-lo à mão pelo menos uma vez.

**A mudança de leitura que abre o módulo 9.** Até aqui, $n$ é "o número do nível de energia". A reinterpretação decisiva é lê-lo como **número de quanta presentes**. Nessa leitura, $\hat{a}^\dagger$ **cria** um quantum e $\hat{a}$ o **destrói**.

Aplicada ao campo eletromagnético, ela resolve tudo: cada modo do campo é um oscilador harmônico, o número de quanta em cada modo é o número de **fótons** daquela frequência, e $\hat{a}^\dagger$ passa a significar "crie um fóton". Foi assim que a luz voltou a ser feita de partículas dentro de uma teoria de campos.

Este é, portanto, o tópico-ponte do currículo: **a teoria quântica de campos do módulo 9 é, em boa medida, a mecânica quântica de infinitos osciladores harmônicos acoplados** — um para cada modo de cada campo. Partícula deixa de ser objeto fundamental e passa a ser excitação de um campo, exatamente como um nível $n$ é excitação de um oscilador.

### A declaração

O oscilador harmônico quântico tem espectro de energia igualmente espaçado em unidades de $\hbar\omega$, com energia de ponto zero irredutível imposta pela relação de incerteza. Seus operadores de criação e aniquilação, reinterpretados como criadores e destruidores de quanta, são a base da descrição de campos quantizados.

### Onde se tropeça

- **Esperar que o fundamental tenha energia zero.** Seria incompatível com a relação de incerteza.
- **Achar que o espaçamento uniforme é geral.** Ele é característico do potencial quadrático; outros potenciais dão espectros diferentes.
- **Ver os operadores $\hat{a}$ e $\hat{a}^\dagger$ como truque de cálculo.** Sua reinterpretação como criação e destruição de quanta é o conteúdo físico central.
`,
      exercises: [
        {
          id: 'ex-8.8.1',
          question: 'Por que o estado fundamental do oscilador quântico tem energia ℏω/2 e não zero?',
          options: [
            'Por causa da interação com o ambiente.',
            'Porque uma partícula em repouso no fundo do poço teria posição e momento simultaneamente definidos, violando a relação de incerteza.',
            'Porque a mola nunca está completamente relaxada.',
            'Porque a energia potencial não pode ser nula.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O estado fundamental é o melhor compromisso entre localização e momento pequeno. E o efeito é medido: o hélio não solidifica à pressão ambiente por causa dele.',
        },
        {
          id: 'ex-8.8.2',
          question: 'A reinterpretação de n como número de quanta, em vez de número do nível, é importante porque:',
          options: [
            'Simplifica a notação dos cálculos.',
            'Permite ler â† como criador de partículas — e daí cada modo do campo eletromagnético vira um oscilador cujos quanta são fótons.',
            'Elimina a energia de ponto zero.',
            'Torna o espectro contínuo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a ponte para o módulo 9: a teoria quântica de campos é, em boa medida, a mecânica quântica de infinitos osciladores acoplados, um por modo de cada campo.',
        },
        {
          id: 'ex-8.8.3',
          question: 'O que distingue o espectro do oscilador harmônico do espectro do átomo de hidrogênio?',
          options: [
            'O do oscilador é contínuo.',
            'Os níveis do oscilador são igualmente espaçados por ℏω, enquanto os do hidrogênio se acumulam à medida que n cresce.',
            'O do hidrogênio não tem energia de ponto zero.',
            'Não há diferença relevante.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O espaçamento uniforme é característico do potencial quadrático, e é justamente ele que permite ler os níveis como número de quanta idênticos de energia ℏω.',
        },
      ],
    },

    {
      id: '8.9',
      title: '8.9. Teoria de perturbações',
      objetivo:
        'Aprender a atacar problemas sem solução exata — e entender por que a série pode dar resultados excelentes sem convergir.',
      prerequisitos: ['8.8'],
      fontes: ['tong-aqm', 'tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

A lista de sistemas quânticos com solução exata é curta: partícula livre, poço infinito, oscilador harmônico, átomo de hidrogênio, e pouco mais. Nem o átomo de hélio — dois elétrons — tem solução fechada. Ou a mecânica quântica se aplica a meia dúzia de casos, ou é preciso um método de aproximação.

### A construção

**A ideia.** Escreva a hamiltoniana como uma parte solúvel mais uma correção pequena:

$$
\hat{H} = \hat{H}_0 + \lambda \hat{V},
$$

e expanda energias e estados em potências de $\lambda$. Em primeira ordem, a correção da energia é notavelmente simples: é o valor esperado da perturbação no estado não perturbado,

$$
E_n^{(1)} = \langle \psi_n^{(0)} | \hat{V} | \psi_n^{(0)}\rangle .
$$

Ou seja, a primeira correção se calcula **sem conhecer** o estado corrigido. É por isso que o método é praticável.

**O que ele explica.** A estrutura fina do hidrogênio, com correções relativísticas e de acoplamento spin-órbita; o efeito Zeeman, com desdobramento de níveis em campo magnético; o efeito Stark, em campo elétrico; e as taxas de transição atômica que produzem os espectros observados. Praticamente toda a espectroscopia é teoria de perturbações em ação.

**Onde falha.** É um método com condições de validade, e vale enunciá-las. Ele exige que a perturbação seja pequena **comparada aos espaçamentos entre níveis**. Quando há degenerescência, o denominador que aparece nas correções vai a zero e a expansão explode — daí ser necessária a teoria de perturbações degenerada, que diagonaliza a perturbação dentro do subespaço degenerado antes de expandir.

E há fenômenos **inacessíveis** a qualquer ordem: supercondutividade, confinamento de quarks e tunelamento têm dependência do tipo $e^{-1/\lambda}$, cuja expansão de Taylor em torno de $\lambda = 0$ é identicamente nula. Nenhuma ordem de perturbação os enxerga. São efeitos genuinamente não perturbativos, e é por isso que áreas inteiras da física precisaram de métodos completamente diferentes — como a rede na cromodinâmica.

**O caso mais impressionante, e o mais desconfortável.** Em eletrodinâmica quântica, a expansão perturbativa produz a previsão mais precisa da física: o momento magnético anômalo do elétron confere com a medida em mais de dez casas decimais. É frequentemente citado como o triunfo do método.

O desconforto é que **a série é divergente**. Dyson deu o argumento em 1952: se ela convergisse para carga $e$, convergiria também para $e$ imaginário, o que corresponderia a cargas iguais se atraindo — e nesse caso o vácuo seria instável, produzindo pares indefinidamente. Como isso é absurdo, o raio de convergência é zero.

O que se tem é uma **série assintótica**: os termos primeiro diminuem, dão uma aproximação excelente, e depois começam a crescer. Somar mais termos, além de certo ponto, **piora** o resultado. Que a previsão mais precisa da ciência venha de uma série que não converge é um fato que costuma ser omitido, e não deveria — ele diz algo importante sobre o status da teoria quântica de campos, e prepara o terreno para a noção de teoria efetiva do módulo 19.

### A declaração

A teoria de perturbações aproxima soluções de sistemas sem solução exata expandindo em potências de um parâmetro pequeno em torno de um problema solúvel. Sua validade exige que a perturbação seja pequena frente aos espaçamentos de níveis, e ela é cega a fenômenos cuja dependência no parâmetro se anula em toda ordem.

### Onde se tropeça

- **Aplicar a versão não degenerada a níveis degenerados.** Os denominadores vão a zero; é preciso diagonalizar antes.
- **Somar sempre mais ordens.** Em séries assintóticas, além de certo ponto cada termo adicional piora a aproximação.
- **Concluir que tudo é perturbativo.** Confinamento, supercondutividade e tunelamento são invisíveis a qualquer ordem.
`,
      exercises: [
        {
          id: 'ex-8.9.1',
          question: 'Por que a correção de energia em primeira ordem é praticável?',
          options: [
            'Porque é sempre nula.',
            'Porque é o valor esperado da perturbação no estado não perturbado — calcula-se sem conhecer o estado corrigido.',
            'Porque exige apenas o autovalor mais baixo.',
            'Porque a perturbação é sempre diagonal.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o que torna o método utilizável: a primeira correção não depende de resolver o problema corrigido, apenas de calcular uma integral no estado que já se conhece.',
        },
        {
          id: 'ex-8.9.2',
          question: 'Fenômenos como supercondutividade e confinamento de quarks são inacessíveis à teoria de perturbações porque:',
          options: [
            'Envolvem muitas partículas.',
            'Têm dependência do tipo e^(−1/λ), cuja expansão de Taylor em torno de λ = 0 é identicamente nula — nenhuma ordem os enxerga.',
            'Ocorrem apenas a baixas temperaturas.',
            'Violam a mecânica quântica.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'São efeitos genuinamente não perturbativos. É por isso que áreas inteiras precisaram de métodos diferentes, como a cromodinâmica na rede.',
        },
        {
          id: 'ex-8.9.3',
          question: 'A série perturbativa da eletrodinâmica quântica, que dá a previsão mais precisa da física:',
          options: [
            'Converge rapidamente para o valor exato.',
            'É divergente — uma série assintótica em que, além de certo ponto, somar mais termos piora o resultado.',
            'Tem apenas um número finito de termos.',
            'Foi demonstrada convergente por Dyson.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Dyson mostrou em 1952 que o raio de convergência é zero: convergir para carga e implicaria convergir para e imaginário, o que tornaria o vácuo instável. A precisão de dez casas vem de uma série que não converge.',
        },
      ],
    },
  ],
};
