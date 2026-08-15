import type { Module } from '../../types';

export const eletromagnetismo: Module = {
  id: '4',
  title: '4. Eletromagnetismo',
  descricao:
    'A primeira unificação da física: eletricidade, magnetismo e luz reduzidos a quatro equações — e, sem que ninguém percebesse na época, a primeira teoria de gauge.',
  subtopics: [
    {
      id: '4.1',
      title: '4.1. Carga elétrica',
      objetivo:
        'Entender a carga como propriedade conservada e quantizada, e por que a força elétrica é absurdamente mais forte que a gravidade.',
      prerequisitos: ['2.3'],
      fontes: ['libretexts-fisica-2-pt', 'feynman-site', 'openstax-fisica-2'],
      content: String.raw`
### O problema

Âmbar atritado atrai palha. O fenômeno é conhecido desde a Grécia — *elektron* é a palavra grega para âmbar — e ficou dois mil anos como curiosidade. A pergunta que faltava era: atrito não cria nada, então o que exatamente está sendo transferido?

### A construção

**Dois sinais, não um.** A primeira descoberta importante é que a eletricidade não é uma quantidade única. Existem dois tipos, e cargas iguais se repelem enquanto opostas se atraem. Franklin batizou-os de positivo e negativo por analogia com excesso e falta, e a escolha foi infeliz: hoje sabemos que o portador móvel nos metais é o elétron, cuja carga é *negativa*. Por isso a corrente convencional aponta no sentido contrário ao movimento real dos elétrons — uma inversão de sinal que atravessa toda a engenharia elétrica.

**Conservação.** Atrito não cria carga; separa. O que o pano ganha, o âmbar perde, e a soma permanece exatamente a mesma. A carga total do universo é constante — uma lei de conservação tão rígida quanto a da energia, e que, como ela, decorre de uma simetria: no tópico 4.7 se verá que a simetria responsável é a invariância de gauge $U(1)$.

**Quantização.** Toda carga observada é múltiplo inteiro de

$$
e = 1{,}602 \times 10^{-19}\ \text{C}.
$$

Millikan mediu isso em 1909 observando gotas de óleo em queda entre placas carregadas: os valores encontrados não se espalhavam continuamente, agrupavam-se em múltiplos de um mesmo número. Quarks têm carga fracionária, $\pm\frac{1}{3}e$ e $\pm\frac{2}{3}e$, mas nunca aparecem isolados — as combinações observáveis sempre somam múltiplos inteiros de $e$.

**Lei de Coulomb.** A força entre duas cargas puntiformes é

$$
F = k\,\frac{q_1 q_2}{r^2}, \qquad k \approx 8{,}99 \times 10^9\ \frac{\text{N}\cdot\text{m}^2}{\text{C}^2}.
$$

A forma é idêntica à da gravitação de Newton — mesmo decaimento com o quadrado da distância —, com duas diferenças decisivas: a força elétrica pode ser atrativa ou repulsiva, e ela é *enormemente* mais intensa. Entre dois prótons, a repulsão elétrica supera a atração gravitacional por um fator da ordem de $10^{36}$.

**Por que então o mundo parece dominado pela gravidade?** Justamente porque há dois sinais. A matéria comum é neutra em larguíssima escala, e as forças elétricas se cancelam quase perfeitamente. A gravidade, que só atrai, não tem cancelamento possível: some sempre, e por isso governa planetas e galáxias apesar de ser ridiculamente fraca. Também é por isso que a força elétrica domina tudo o que acontece em escala atômica — ligação química, resistência dos materiais, o fato de sua mão não atravessar a mesa.

### A declaração

Carga elétrica é a propriedade da matéria que determina sua participação na interação eletromagnética. Existe em dois sinais, é rigorosamente conservada e vem quantizada em múltiplos inteiros da carga elementar. Entre cargas puntiformes em repouso, a força varia com o inverso do quadrado da distância.

### Onde se tropeça

- **Achar que atrito cria carga.** Ele apenas a separa; o balanço total não muda.
- **Confundir o sentido da corrente com o movimento dos elétrons.** Nos metais eles vão no sentido oposto ao da corrente convencional.
- **Aplicar Coulomb a cargas em movimento sem cuidado.** A lei vale para cargas em repouso; com movimento aparecem efeitos magnéticos e atrasos de propagação.
`,
      exercises: [
        {
          id: 'ex-4.1.1',
          question: 'Ao atritar um pano num bastão de vidro, o bastão fica positivo. O que aconteceu com a carga total do sistema?',
          options: [
            'Aumentou, porque o atrito criou carga positiva.',
            'Permaneceu exatamente a mesma: o pano ficou com a carga negativa correspondente.',
            'Diminuiu, porque parte da carga virou calor.',
            'Não é possível saber sem medir o pano.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Carga é rigorosamente conservada. O atrito transfere elétrons de um corpo para o outro; o que um ganha, o outro perde, e a soma não muda.',
        },
        {
          id: 'ex-4.1.2',
          question: 'A força elétrica entre dois prótons supera a gravitacional por um fator de cerca de 10³⁶. Por que, então, a gravidade domina a astronomia?',
          options: [
            'Porque a força elétrica só age a curtas distâncias.',
            'Porque a matéria em grande escala é neutra: as cargas se cancelam, enquanto a gravidade só atrai e nunca se cancela.',
            'Porque a gravidade se intensifica com a massa acumulada, ultrapassando a eletricidade.',
            'Porque no vácuo a constante de Coulomb tende a zero.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Ambas decaem com 1/r². A diferença é a existência de dois sinais elétricos: um planeta é eletricamente neutro em altíssima precisão, mas toda a sua massa contribui gravitacionalmente no mesmo sentido.',
        },
        {
          id: 'ex-4.1.3',
          question: 'O experimento da gota de óleo de Millikan mostrou que:',
          options: [
            'A carga do elétron é negativa.',
            'As cargas medidas não variavam continuamente, mas em múltiplos inteiros de um valor mínimo — a carga é quantizada.',
            'A força elétrica decai com o quadrado da distância.',
            'Elétrons têm massa desprezível.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Medindo muitas gotas, Millikan encontrou valores agrupados em múltiplos de aproximadamente 1,6 × 10⁻¹⁹ C. A quantização era um fato experimental, não uma hipótese teórica.',
        },
      ],
    },

    {
      id: '4.2',
      title: '4.2. Campo elétrico',
      objetivo:
        'Entender por que o campo deixou de ser artifício de cálculo e passou a ser considerado real.',
      prerequisitos: ['1.5', '4.1'],
      fontes: ['tong-em', 'libretexts-fisica-2-pt', 'feynman-site'],
      content: String.raw`
### O problema

A lei de Coulomb funciona, mas descreve uma ação a distância instantânea: a carga aqui sente a carga lá, através do nada, sem intermediário e sem atraso. Newton já achava isso insatisfatório na gravitação — chamou a hipótese de "um absurdo tão grande que nenhum homem com competência filosófica poderia aceitá-la". Faraday, um século e meio depois, propôs a alternativa.

### A construção

**A ideia de campo.** Em vez de "a carga $A$ empurra a carga $B$", diga: a carga $A$ modifica o espaço à sua volta, e $B$ reage à condição local do espaço onde ela está. O campo elétrico é essa condição:

$$
\vec{E} = \frac{\vec{F}}{q_0},
$$

a força por unidade de carga de prova. A definição é operacional — coloque uma carga pequena e veja o que acontece — mas o conteúdo é conceitual: nada age a distância; tudo é local.

**Campo de uma carga puntiforme.** Combinando com Coulomb,

$$
E = k\,\frac{q}{r^2},
$$

apontando para fora se $q > 0$. E vale o princípio da superposição: o campo de várias cargas é a soma vetorial dos campos individuais. Isso não é óbvio — é um fato experimental sobre a linearidade das equações, e é o que torna o eletromagnetismo tratável.

**Linhas de campo.** A representação de Faraday: curvas tangentes a $\vec{E}$ em cada ponto, com densidade proporcional à intensidade. Elas nascem em cargas positivas e morrem em negativas, e nunca se cruzam — se cruzassem, o campo teria duas direções no mesmo ponto.

**Lei de Gauss.** O fluxo de $\vec{E}$ através de qualquer superfície fechada depende só da carga contida:

$$
\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{int}}}{\varepsilon_0}.
$$

É Coulomb reescrita, mas numa forma incomparavelmente mais poderosa quando há simetria: o campo de uma esfera, de um fio infinito ou de um plano carregado sai em três linhas. E há um resultado prático notável escondido aí — dentro de um condutor em equilíbrio o campo é nulo, e é por isso que um carro é um lugar razoavelmente seguro num temporal.

**O campo é real?** Enquanto as cargas estão paradas, "campo" pode ser encarado como contabilidade conveniente. A questão muda de figura quando as cargas aceleram: a perturbação leva tempo para chegar, propaga-se a $c$, e carrega energia e momento próprios. Se você sacode uma carga aqui e outra a um ano-luz reage daqui a um ano, durante esse ano a energia esteve *em algum lugar*. Esse lugar é o campo. Depois de Maxwell, ele deixa de ser artifício e passa a ser entidade física.

### A declaração

Campo elétrico é a grandeza vetorial que descreve, em cada ponto do espaço, a força por unidade de carga que ali seria exercida. Ele substitui a ação a distância por interação local e, uma vez que transporta energia e momento e se propaga com velocidade finita, constitui um ente físico e não apenas um recurso de cálculo.

### Onde se tropeça

- **Achar que o campo só existe se houver carga de prova.** A carga de prova revela o campo; não o cria.
- **Cruzar linhas de campo num desenho.** Impossível: o campo tem uma única direção em cada ponto.
- **Usar Gauss sem simetria.** A lei vale sempre, mas só permite *calcular* $E$ facilmente quando a simetria deixa o campo constante sobre a superfície escolhida.
`,
      exercises: [
        {
          id: 'ex-4.2.1',
          question: 'O que a introdução do conceito de campo resolve em relação à lei de Coulomb?',
          options: [
            'Torna o cálculo numérico mais rápido.',
            'Substitui a ação instantânea a distância por interação local, permitindo propagação com velocidade finita.',
            'Elimina a necessidade de considerar o sinal das cargas.',
            'Faz a força deixar de decair com o quadrado da distância.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A carga responde à condição do espaço onde ela está, não a outra carga distante. Isso abre espaço para atraso na propagação — o que se confirma quando as cargas aceleram.',
        },
        {
          id: 'ex-4.2.2',
          question: 'Dentro de um condutor metálico em equilíbrio eletrostático, o campo elétrico é:',
          options: [
            'Máximo, pois as cargas se concentram no interior.',
            'Nulo — se não fosse, as cargas livres se moveriam e não haveria equilíbrio.',
            'Igual ao campo externo.',
            'Proporcional à espessura do condutor.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Campo interno não nulo aceleraria as cargas livres, contradizendo o equilíbrio. É o princípio da gaiola de Faraday — e a razão de um carro proteger razoavelmente num temporal.',
        },
        {
          id: 'ex-4.2.3',
          question: 'Qual observação torna difícil sustentar que o campo é apenas um artifício de cálculo?',
          options: [
            'O fato de as linhas de campo nunca se cruzarem.',
            'O fato de o campo obedecer ao princípio da superposição.',
            'O fato de a perturbação levar tempo para chegar: durante o trânsito, a energia precisa estar em algum lugar.',
            'O fato de o campo ser medido em N/C.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Se você sacode uma carga e outra distante só reage depois, a energia esteve armazenada em algo durante o intervalo. Esse algo é o campo, que carrega energia e momento próprios.',
        },
      ],
    },

    {
      id: '4.3',
      title: '4.3. Potencial elétrico',
      objetivo:
        'Trocar um campo vetorial por uma função escalar sem perder informação — e entender o que a tomada de 127 V está de fato afirmando.',
      prerequisitos: ['2.4', '4.2'],
      fontes: ['tong-em', 'libretexts-fisica-2-pt', 'openstax-fisica-2'],
      content: String.raw`
### O problema

Trabalhar com $\vec{E}$ significa carregar três componentes em cada ponto do espaço. Na mecânica, um problema análogo foi resolvido trocando força por energia potencial — uma função escalar. A pergunta é se o mesmo truque funciona aqui.

### A construção

**Funciona porque a força elétrica é conservativa.** O trabalho realizado ao mover uma carga entre dois pontos não depende do caminho. Isso autoriza definir uma energia potencial e, dividindo pela carga, o potencial elétrico:

$$
V = \frac{U}{q}, \qquad [V] = \frac{\text{J}}{\text{C}} = \text{volt}.
$$

Um escalar por ponto em vez de três componentes — e nada se perde, porque o campo é recuperável por derivação.

**Do potencial ao campo.** A relação inversa é

$$
\vec{E} = -\nabla V,
$$

isto é, o campo aponta na direção em que $V$ decresce mais rapidamente. A analogia com um mapa topográfico é exata: $V$ é a altitude, $\vec{E}$ é a inclinação, e a bolinha rola morro abaixo. O sinal negativo diz exatamente isso.

**O que 127 V significa.** Sempre uma *diferença*. Potencial absoluto não tem sentido físico — só diferenças são mensuráveis, e o zero é convencional (a terra, ou o infinito). Dizer que a tomada é de 127 V é dizer que cada coulomb que a atravessa recebe 127 joules. Daí também o pássaro no fio de alta tensão: ele está a milhares de volts em relação ao solo e não acontece nada, porque a diferença de potencial *entre suas patas* é minúscula.

**Superfícies equipotenciais.** São as superfícies de $V$ constante — as curvas de nível do mapa. Mover uma carga sobre uma delas não custa trabalho, e por isso $\vec{E}$ é sempre perpendicular a elas. A superfície de um condutor em equilíbrio é equipotencial, o que explica por que o campo elétrico sai perpendicular a ela.

**Elétron-volt.** A energia que um elétron ganha ao atravessar 1 V:

$$
1\ \text{eV} = 1{,}602 \times 10^{-19}\ \text{J}.
$$

É uma unidade minúscula e é a moeda corrente da física atômica e de partículas — ligações químicas são de alguns eV, o LHC opera em TeV. Toda vez que se lê "um bóson de 125 GeV", é esta definição que está em uso.

### A declaração

Potencial elétrico é a energia potencial por unidade de carga associada à posição num campo elétrico. Por ser a força elétrica conservativa, o potencial é uma função escalar bem definida, da qual o campo se obtém como menos o gradiente. Apenas diferenças de potencial têm significado físico.

### Onde se tropeça

- **Confundir potencial com energia potencial.** $V$ é por unidade de carga; $U = qV$ depende da carga que você colocou lá.
- **Falar em potencial absoluto.** Só diferenças são mensuráveis; o zero é escolhido por conveniência.
- **Supor que potencial alto implica perigo.** O que fere é a corrente, que depende da *diferença* de potencial aplicada ao corpo e da resistência do caminho.
`,
      exercises: [
        {
          id: 'ex-4.3.1',
          question: 'Por que é possível descrever o campo elétrico por uma única função escalar?',
          options: [
            'Porque o campo elétrico é sempre uniforme.',
            'Porque a força elétrica é conservativa: o trabalho entre dois pontos não depende do caminho.',
            'Porque as cargas são quantizadas.',
            'Porque o campo decai com o quadrado da distância.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Independência do caminho é exatamente a condição que permite definir uma energia potencial. Dividindo por q obtém-se o potencial, e o campo volta por E = −∇V.',
        },
        {
          id: 'ex-4.3.2',
          question: 'Um pássaro pousa num fio de alta tensão a 10 000 V e nada acontece. Por quê?',
          options: [
            'Porque as penas isolam o corpo do pássaro.',
            'Porque o que importa é a diferença de potencial entre as patas, que é praticamente nula — não há caminho para corrente atravessá-lo.',
            'Porque a corrente alternada não afeta seres vivos.',
            'Porque a massa do pássaro é pequena demais.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Potencial absoluto não faz nada. Corrente exige diferença de potencial ao longo do corpo; entre dois pontos próximos do mesmo fio ela é desprezível.',
        },
        {
          id: 'ex-4.3.3',
          question: 'Sobre uma superfície equipotencial, o campo elétrico é:',
          options: [
            'Paralelo à superfície.',
            'Perpendicular à superfície.',
            'Nulo em todos os pontos.',
            'Variável em direção conforme o ponto.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Mover carga sobre a equipotencial não realiza trabalho, logo a componente de E ao longo dela é nula. Resta apenas a componente perpendicular — é o mesmo que dizer que o gradiente aponta na direção de máxima variação.',
        },
      ],
    },

    {
      id: '4.4',
      title: '4.4. Campo magnético',
      objetivo:
        'Entender por que não existe carga magnética, e por que a força magnética nunca realiza trabalho.',
      prerequisitos: ['1.5', '4.2'],
      fontes: ['tong-em', 'libretexts-fisica-2-pt', 'feynman-site'],
      content: String.raw`
### O problema

Ímãs e cargas pareciam fenômenos distintos até 1820, quando Ørsted notou, numa aula, que a agulha de uma bússola se movia ao ligar uma corrente próxima. Eletricidade produzia magnetismo. Restava descobrir o que exatamente e por quê.

### A construção

**Cargas em movimento.** A conclusão que se consolidou: magnetismo é o que cargas em movimento fazem. Uma corrente cria campo magnético; um ímã permanente também, e sua fonte são as correntes microscópicas dos elétrons — o momento magnético de spin e o orbital.

**Força de Lorentz.** Sobre uma carga que se move num campo magnético,

$$
\vec{F} = q\,\vec{v} \times \vec{B}.
$$

O produto vetorial do tópico 1.5 entrega três consequências de uma vez. A força é **perpendicular à velocidade**, então curva a trajetória sem alterar a rapidez. Ela é **nula** para uma carga parada ou movendo-se ao longo de $\vec{B}$. E, sendo sempre perpendicular ao deslocamento, ela **nunca realiza trabalho** — o produto escalar $\vec{F} \cdot d\vec{s}$ é identicamente zero.

Esse último ponto costuma soar errado: um ímã levanta um clipe, e levantar é trabalho. Quem realiza esse trabalho, porém, é o campo elétrico induzido durante o processo, não a força magnética. A força magnética redireciona; quem paga a conta energética é sempre outra coisa.

**Movimento circular.** Com $\vec{v}$ perpendicular a $\vec{B}$, a força de módulo constante e sempre perpendicular produz movimento circular, com raio

$$
r = \frac{mv}{qB}.
$$

É a base do cíclotron, do espectrômetro de massa e do confinamento em tokamaks.

**Ausência de monopolos.** A diferença mais profunda em relação ao campo elétrico: nunca se observou uma carga magnética isolada. Parta um ímã ao meio e você obtém dois ímãs completos, cada um com seus dois polos. Formalmente,

$$
\oint \vec{B} \cdot d\vec{A} = 0,
$$

o fluxo magnético através de qualquer superfície fechada é nulo — as linhas de $\vec{B}$ não têm começo nem fim, sempre se fecham. Vale registrar que a teoria não proíbe monopolos; Dirac mostrou em 1931 que a existência de um único monopolo em todo o universo explicaria a quantização da carga elétrica. Eles simplesmente nunca foram encontrados, e voltam como previsão de várias teorias no módulo 24.

**Indução.** Faraday completou a simetria: campo magnético *variável* gera campo elétrico.

$$
\varepsilon = -\frac{d\Phi_B}{dt}.
$$

O sinal negativo é a lei de Lenz — a corrente induzida se opõe à variação que a produziu. Não é detalhe técnico: se fosse positivo, a variação se amplificaria sozinha e a energia não se conservaria. Toda a geração de energia elétrica do planeta é essa equação em operação.

### A declaração

Campo magnético é o campo produzido por cargas em movimento e que exerce força sobre outras cargas em movimento, sempre perpendicular à velocidade e ao próprio campo. Não existem fontes magnéticas isoladas: suas linhas são fechadas. Variações temporais do fluxo magnético induzem campo elétrico.

### Onde se tropeça

- **Achar que a força magnética realiza trabalho.** Sendo perpendicular ao deslocamento, ela nunca realiza.
- **Esperar que um ímã cortado produza polos isolados.** Cada pedaço é um ímã completo.
- **Esquecer o sinal da lei de Lenz.** Ele é o que garante a conservação da energia na indução.
`,
      exercises: [
        {
          id: 'ex-4.4.1',
          question: 'Por que a força magnética sobre uma carga nunca realiza trabalho?',
          options: [
            'Porque o campo magnético é fraco demais.',
            'Porque F = qv × B é sempre perpendicular à velocidade, e portanto ao deslocamento: F · ds = 0.',
            'Porque a carga se move em círculo e volta ao ponto inicial.',
            'Porque o campo magnético não tem energia associada.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O produto vetorial garante perpendicularidade. A força muda a direção da velocidade, nunca seu módulo — e trabalho exige componente de força na direção do deslocamento.',
        },
        {
          id: 'ex-4.4.2',
          question: 'Ao cortar um ímã ao meio, obtém-se:',
          options: [
            'Um polo norte isolado e um polo sul isolado.',
            'Dois ímãs completos, cada um com polo norte e polo sul.',
            'Dois pedaços desmagnetizados.',
            'Um ímã e um monopolo magnético.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Nunca se observou carga magnética isolada. As linhas de B são fechadas, e o fluxo através de qualquer superfície fechada é nulo.',
        },
        {
          id: 'ex-4.4.3',
          question: 'O sinal negativo na lei de Faraday (lei de Lenz) é necessário porque:',
          options: [
            'É uma convenção de sinal arbitrária, sem conteúdo físico.',
            'Sem ele, a corrente induzida reforçaria a variação que a gerou, criando energia do nada.',
            'Ele corrige a diferença entre corrente contínua e alternada.',
            'Ele compensa a resistência elétrica do circuito.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A corrente induzida se opõe à variação de fluxo. Com sinal positivo haveria realimentação positiva e violação da conservação da energia — a lei de Lenz é a conservação de energia aparecendo na indução.',
        },
      ],
    },

    {
      id: '4.5',
      title: '4.5. Equações de Maxwell',
      objetivo:
        'Ver como quatro equações unificam eletricidade, magnetismo e luz — e o que a correção de Maxwell acrescentou.',
      prerequisitos: ['4.3', '4.4'],
      fontes: ['tong-em', 'feynman-site', 'libretexts-fisica-2-pt'],
      content: String.raw`
### O problema

Por volta de 1860 havia um conjunto de leis experimentais soltas — Gauss, Gauss para o magnetismo, Ampère, Faraday. Maxwell tentou escrevê-las como um sistema coerente e descobriu que, como estavam, elas se contradiziam.

### A construção

**A inconsistência.** A lei de Ampère original relacionava o campo magnético à corrente que atravessa uma superfície apoiada num circuito fechado. Maxwell notou o problema com um capacitor carregando: escolhendo uma superfície que passa *entre* as placas, nenhuma corrente a atravessa — mas o campo magnético existe e não pode depender de qual superfície o físico resolveu desenhar.

**A correção.** Maxwell acrescentou um termo: um **campo elétrico variável** produz campo magnético, exatamente como uma corrente. Ele o chamou de corrente de deslocamento. Entre as placas do capacitor não há carga fluindo, mas há $\vec{E}$ crescendo — e é isso que sustenta o campo magnético. A adição não veio de um experimento novo; veio da exigência de coerência interna.

**As quatro equações.** Na forma integral:

$$
\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{int}}}{\varepsilon_0}, \qquad \oint \vec{B} \cdot d\vec{A} = 0,
$$

$$
\oint \vec{E} \cdot d\vec{s} = -\frac{d\Phi_B}{dt}, \qquad \oint \vec{B} \cdot d\vec{s} = \mu_0 I + \mu_0\varepsilon_0 \frac{d\Phi_E}{dt}.
$$

Lidas em português: cargas são fontes de campo elétrico; não existem cargas magnéticas; campo magnético variável gera campo elétrico; corrente **e campo elétrico variável** geram campo magnético.

**A consequência que ninguém esperava.** Com o termo novo, as equações admitem solução sem carga nem corrente nenhuma: $\vec{E}$ variável gera $\vec{B}$, que ao variar gera $\vec{E}$, indefinidamente. Uma perturbação que se sustenta e se propaga. Maxwell calculou a velocidade dessa onda a partir de duas constantes medidas em laboratório com ímãs e capacitores:

$$
c = \frac{1}{\sqrt{\varepsilon_0\mu_0}} \approx 3 \times 10^8\ \text{m/s},
$$

e reconheceu o número: era a velocidade da luz, medida por astrônomos décadas antes. A conclusão foi imediata e vertiginosa — a luz é uma onda eletromagnética. Óptica e eletromagnetismo eram o mesmo assunto.

**O que veio depois.** Essa velocidade não depende do movimento do observador — as equações não trazem nenhum referencial privilegiado. Levar isso a sério é o ponto de partida da relatividade restrita, no módulo 6. Einstein não corrigiu Maxwell: corrigiu a mecânica para que ela coubesse junto.

### A declaração

As equações de Maxwell são o conjunto completo de leis do campo eletromagnético clássico: relacionam os campos às suas fontes e um ao outro. Delas segue a existência de ondas eletromagnéticas que se propagam no vácuo com velocidade determinada por constantes elétricas e magnéticas, identificada com a velocidade da luz.

### Onde se tropeça

- **Achar que a corrente de deslocamento é corrente de verdade.** Não há carga fluindo; o que gera $\vec{B}$ ali é a variação de $\vec{E}$.
- **Tratar as quatro como fatos independentes.** Elas formam um sistema, e é a consistência do sistema que produz a onda.
- **Supor que a luz precisa de meio.** As equações não exigem éter; a onda é do próprio campo.
`,
      exercises: [
        {
          id: 'ex-4.5.1',
          question: 'O que motivou Maxwell a acrescentar a corrente de deslocamento à lei de Ampère?',
          options: [
            'Um experimento novo com capacitores.',
            'Uma inconsistência: o campo magnético num capacitor carregando dependeria de qual superfície fosse escolhida no cálculo.',
            'A necessidade de explicar a existência de ímãs permanentes.',
            'A descoberta do elétron.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O resultado físico não pode depender da superfície que o físico desenha. Exigir coerência forçou o termo com dΦ_E/dt — e foi ele que abriu caminho para as ondas eletromagnéticas.',
        },
        {
          id: 'ex-4.5.2',
          question: 'Maxwell calculou 1/√(ε₀μ₀) e obteve cerca de 3 × 10⁸ m/s. Qual foi a conclusão?',
          options: [
            'Que suas equações estavam erradas por um fator numérico.',
            'Que a luz é uma onda eletromagnética, unificando óptica e eletromagnetismo.',
            'Que o éter se move a essa velocidade.',
            'Que as constantes elétricas precisavam ser remedidas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O valor coincidia com a velocidade da luz já medida astronomicamente. Duas constantes obtidas com ímãs e capacitores previam a velocidade da luz — sinal de que se tratava do mesmo fenômeno.',
        },
        {
          id: 'ex-4.5.3',
          question: 'Que afirmação a equação ∮B·dA = 0 faz sobre a natureza?',
          options: [
            'Que o campo magnético é sempre nulo no vácuo.',
            'Que não existem cargas magnéticas isoladas: as linhas de B são fechadas.',
            'Que o campo magnético não armazena energia.',
            'Que o campo magnético só existe dentro de materiais.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Fluxo nulo através de qualquer superfície fechada significa que tudo o que entra sai: não há fonte nem sorvedouro. É a ausência de monopolos magnéticos escrita em forma de equação.',
        },
      ],
    },

    {
      id: '4.6',
      title: '4.6. Ondas eletromagnéticas',
      objetivo:
        'Entender que rádio, luz visível e raios gama são o mesmo fenômeno, e o que muda de um para outro.',
      prerequisitos: ['1.4', '4.5'],
      fontes: ['tong-em', 'feynman-site', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

As equações de Maxwell preveem uma onda que se sustenta sem meio material. Restava perguntar o que exatamente está oscilando, e se essa onda pode ser produzida em laboratório — porque uma previsão dessas, sem confirmação, é só matemática elegante.

### A construção

**O que oscila.** Não é matéria: são os próprios campos. $\vec{E}$ e $\vec{B}$ oscilam perpendicularmente um ao outro e ambos perpendiculares à direção de propagação — onda transversal. Suas amplitudes guardam a razão $E = cB$, e as duas oscilam em fase: onde $\vec{E}$ é máximo, $\vec{B}$ também é.

**Confirmação experimental.** Hertz produziu e detectou ondas de rádio em 1887, mostrando que elas refletem, refratam e interferem exatamente como a luz. A previsão de Maxwell estava certa. Consta que, perguntado sobre a utilidade daquilo, Hertz respondeu que não tinha nenhuma — o que é um bom lembrete sobre o valor de julgar pesquisa básica por aplicação imediata.

**O espectro.** Todas essas ondas são o mesmo fenômeno; muda apenas a frequência. Com

$$
c = \lambda f,
$$

comprimento de onda e frequência são inversamente proporcionais. Do rádio (metros) às micro-ondas, infravermelho, visível (cerca de 400 a 700 nanômetros), ultravioleta, raios X e gama (picômetros). A faixa visível não tem nada de especial fisicamente — é apenas onde o Sol emite mais e onde a atmosfera é transparente. Nossos olhos evoluíram para a janela disponível.

**Energia e fótons.** A onda transporta energia, e a intensidade é proporcional ao quadrado da amplitude. Mas há um limite clássico: no efeito fotoelétrico, o que arranca elétrons não é a intensidade, e sim a frequência. Einstein explicou em 1905 postulando que a energia vem em pacotes:

$$
E = hf.
$$

É por isso que ultravioleta causa queimadura e ondas de rádio, por mais intensas, não — cada fóton de rádio simplesmente não carrega energia suficiente para romper uma ligação química. Essa é a porta de entrada da mecânica quântica, no módulo 8.

**Velocidade em meios.** No vácuo, $c$. Num meio, a onda efetivamente se propaga mais devagar, com índice de refração $n = c/v$. É essa mudança de velocidade que produz a refração — e, como $n$ depende da frequência, cores diferentes desviam de forma diferente: o arco-íris e o prisma de Newton.

### A declaração

Onda eletromagnética é uma perturbação autossustentada dos campos elétrico e magnético, transversal, que se propaga no vácuo com velocidade $c$ e não requer meio material. Rádio, luz visível e raios gama diferem apenas em frequência, e a energia transportada é quantizada em fótons de energia proporcional à frequência.

### Onde se tropeça

- **Achar que a onda precisa de meio.** O éter foi procurado e não existe; o campo é o próprio suporte.
- **Confundir intensidade com energia por fóton.** Luz vermelha intensa não substitui luz ultravioleta fraca para arrancar elétrons.
- **Tratar a luz visível como categoria física distinta.** É biologia, não física: apenas a faixa que nossos olhos detectam.
`,
      exercises: [
        {
          id: 'ex-4.6.1',
          question: 'Numa onda eletromagnética que se propaga no vácuo, o que oscila?',
          options: [
            'As moléculas do meio material.',
            'Os campos elétrico e magnético, perpendiculares entre si e à direção de propagação.',
            'A densidade do éter.',
            'A pressão do ar.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Não há matéria envolvida. E e B se sustentam mutuamente — a variação de um gera o outro —, o que permite a propagação no vácuo.',
        },
        {
          id: 'ex-4.6.2',
          question: 'Por que luz ultravioleta causa queimadura na pele e ondas de rádio, mesmo intensas, não?',
          options: [
            'Porque o ultravioleta se propaga mais rápido.',
            'Porque a energia de cada fóton é E = hf, e só fótons de alta frequência têm energia suficiente para romper ligações químicas.',
            'Porque as ondas de rádio são refletidas pela pele.',
            'Porque o ultravioleta tem maior comprimento de onda.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O dano depende da energia por fóton, não da intensidade total. Aumentar a potência do rádio aumenta o número de fótons, mas cada um continua fraco demais.',
        },
        {
          id: 'ex-4.6.3',
          question: 'O que distingue fisicamente a luz visível das demais faixas do espectro?',
          options: [
            'Ela é a única que se propaga no vácuo.',
            'Nada de fundamental: é apenas a faixa onde o Sol emite mais e a atmosfera é transparente, e à qual nossos olhos se adaptaram.',
            'Ela não transporta energia.',
            'Ela tem velocidade diferente das outras.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Todas as faixas são o mesmo fenômeno, diferindo apenas em frequência. O recorte do visível é um fato biológico e atmosférico, não uma divisão da física.',
        },
      ],
    },

    {
      id: '4.7',
      title: '4.7. Simetrias de gauge U(1)',
      objetivo:
        'Reconhecer no eletromagnetismo a primeira teoria de gauge — e ver a força elétrica surgir como consequência de uma exigência de simetria.',
      prerequisitos: ['4.3', '4.5'],
      fontes: ['tong-em', 'tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

No tópico 4.3 apareceu um fato que se aceitou sem examinar: o zero do potencial é arbitrário. Somar uma constante a $V$ em todo o espaço não muda campo, força, nem qualquer coisa mensurável. Isso costuma ser tratado como conveniência de cálculo. Levá-lo a sério, porém, reorganiza toda a física do século XX.

### A construção

**A liberdade nos potenciais.** Os campos podem ser escritos a partir de um potencial escalar $V$ e de um potencial vetor $\vec{A}$. E essa escrita não é única: a transformação

$$
V \to V - \frac{\partial \chi}{\partial t}, \qquad \vec{A} \to \vec{A} + \nabla\chi,
$$

para qualquer função $\chi$ do espaço e do tempo, deixa $\vec{E}$ e $\vec{B}$ **exatamente iguais**. Isso é uma transformação de gauge, e é uma redundância genuína: descrições diferentes do mesmo estado físico.

**A simetria global e a fase.** Na descrição quântica, uma partícula carregada é representada por uma função de onda complexa $\psi$. Toda quantidade observável depende de $|\psi|^2$, de modo que multiplicar por uma fase,

$$
\psi \to e^{i\alpha}\psi,
$$

não muda nada. Com $\alpha$ constante, isso é uma simetria **global** — e o teorema de Noether (módulo 5.7) associa a ela uma quantidade conservada, que é precisamente a **carga elétrica**. A conservação da carga, anunciada no tópico 4.1, tem aqui sua origem.

O conjunto dessas fases é o grupo $U(1)$: as rotações no círculo unitário do plano complexo. Daí o nome do tópico.

**A exigência local, e o que ela força.** Agora a pergunta decisiva: por que a fase teria de ser a mesma em todos os pontos do universo? Exija que $\alpha$ possa ser escolhida livremente em cada ponto, $\alpha(x,t)$ — uma simetria **local**, ou de gauge.

Aí a equação de Schrödinger deixa de funcionar, porque as derivadas passam a atuar sobre a fase e produzem termos extras. Para restaurar a invariância, é preciso introduzir um campo que absorva exatamente esses termos, substituindo a derivada comum pela **derivada covariante**. E o campo que faz esse trabalho, com as propriedades de transformação necessárias, é o campo eletromagnético.

Este é o ponto do módulo inteiro: **a interação eletromagnética não é postulada, é deduzida.** Comece com partículas carregadas livres, exija que a fase seja escolhível ponto a ponto, e o campo eletromagnético aparece por necessidade — junto com sua dinâmica.

**Por que isso importa daqui em diante.** O mesmo raciocínio, com grupos maiores, produz o resto das forças conhecidas: $SU(2)$ dá a interação fraca e $SU(3)$ a forte. É o programa dos módulos 10 a 12, e o eletromagnetismo é o caso mais simples — o único em que o grupo é abeliano, isto é, em que as transformações comutam. Por isso o fóton não interage consigo mesmo, enquanto os glúons de $SU(3)$ interagem, o que leva ao confinamento do módulo 23.

### A declaração

A simetria de gauge $U(1)$ é a invariância da física sob mudança local da fase da função de onda de partículas carregadas. Exigi-la obriga a existência de um campo de compensação, que é o campo eletromagnético; a versão global dessa simetria implica, pelo teorema de Noether, a conservação da carga elétrica.

### Onde se tropeça

- **Confundir simetria de gauge com simetria física.** Ela é uma redundância da descrição: estados relacionados por gauge são o *mesmo* estado, não estados distintos relacionados por uma operação.
- **Achar que os potenciais são meros artifícios.** O efeito Aharonov–Bohm mostra que $\vec{A}$ tem consequências mensuráveis mesmo onde $\vec{B}$ é nulo.
- **Ler a dedução como truque formal.** Ela é o princípio organizador do Modelo Padrão inteiro.
`,
      exercises: [
        {
          id: 'ex-4.7.1',
          question: 'O que caracteriza uma transformação de gauge no eletromagnetismo?',
          options: [
            'Uma mudança nos campos E e B que preserva a energia total.',
            'Uma mudança nos potenciais V e A que deixa E e B inalterados — descrições diferentes do mesmo estado físico.',
            'Uma rotação do sistema de coordenadas.',
            'Uma mudança de referencial inercial.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A escrita dos campos em termos de potenciais não é única. A liberdade correspondente é uma redundância da descrição, não uma transformação entre estados físicos distintos.',
        },
        {
          id: 'ex-4.7.2',
          question: 'Pelo teorema de Noether, a invariância sob mudança global de fase (grupo U(1)) implica a conservação de qual grandeza?',
          options: ['Energia.', 'Momento angular.', 'Carga elétrica.', 'Número de partículas.'],
          correctAnswerIndex: 2,
          explanation:
            'Cada simetria contínua gera uma lei de conservação. A simetria de fase global da função de onda de partículas carregadas gera exatamente a conservação da carga elétrica.',
        },
        {
          id: 'ex-4.7.3',
          question: 'O que acontece ao exigir que a fase da função de onda possa ser escolhida independentemente em cada ponto do espaço-tempo?',
          options: [
            'Nada: a física já é invariante por essa mudança.',
            'A equação deixa de ser invariante, e restaurar a invariância obriga a introduzir um campo de compensação — que é justamente o campo eletromagnético.',
            'A carga elétrica deixa de se conservar.',
            'A função de onda perde o significado probabilístico.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'As derivadas passam a atuar sobre a fase variável e geram termos extras. O campo que os cancela, trocando a derivada comum pela covariante, tem exatamente as propriedades do campo eletromagnético: a interação é deduzida, não postulada.',
        },
      ],
    },
  ],
};
