import type { Module } from '../../types';

export const fisicaEstatistica: Module = {
  id: '7',
  title: '7. Física Estatística',
  descricao:
    'A maquinaria que deduz a termodinâmica a partir da contagem de estados — e explica por que sistemas com muitas partículas exibem comportamento coletivo que nenhuma delas tem.',
  subtopics: [
    {
      id: '7.1',
      title: '7.1. Microestados',
      objetivo:
        'Aprender a contar estados de verdade — inclusive por que a contagem clássica ingênua produz uma entropia errada.',
      prerequisitos: ['3.3', '5.5'],
      fontes: ['tong-statphys', 'feynman-site'],
      content: String.raw`
### O problema

O tópico 3.3 apresentou a ideia: um macroestado corresponde a muitos microestados, e a entropia é $k_B \ln \Omega$. Com quatro moedas, contar $\Omega$ é trivial. Com $10^{23}$ moléculas cujas posições e momentos variam continuamente, "contar" deixa de ter sentido óbvio — não há estados discretos para enumerar.

### A construção

**Contar volumes.** A saída vem do módulo 5.5: o estado completo de $N$ partículas é um ponto no espaço de fases de $6N$ dimensões, e Liouville garante que volumes ali são preservados pela dinâmica. Então "número de microestados" passa a significar **volume no espaço de fases**. Só falta uma unidade de volume, porque um volume puro tem dimensão e não pode entrar num logaritmo.

**A célula mínima.** A unidade vem da mecânica quântica: o princípio da incerteza impede distinguir estados dentro de uma célula de volume $h$ por grau de liberdade. Logo,

$$
\Omega = \frac{1}{h^{3N}} \int d^{3N}q \, d^{3N}p .
$$

Vale notar o que aconteceu: uma teoria dita clássica precisou da constante de Planck para que sua contagem fizesse sentido. A física estatística clássica é, nesse ponto, incompleta por dentro — e sabia disso antes de a mecânica quântica existir, porque sem uma unidade a entropia ficava definida apenas a menos de uma constante aditiva arbitrária.

**O paradoxo de Gibbs.** Aqui está o segundo remendo, e ele é mais grave. Tome um recipiente dividido ao meio, com o **mesmo** gás dos dois lados, à mesma temperatura e pressão. Retire a divisória. Pela contagem ingênua, a entropia aumenta — mas nada aconteceu fisicamente, e recolocar a divisória restaura o estado inicial. Uma entropia que cresce numa operação reversível está errada.

O erro é tratar as partículas como distinguíveis. Trocar duas moléculas idênticas de lugar **não produz um microestado novo**; produz o mesmo estado contado duas vezes. A correção é dividir pelo número de permutações:

$$
\Omega = \frac{1}{N!\,h^{3N}} \int d^{3N}q \, d^{3N}p .
$$

Gibbs introduziu o $N!$ como conserto *ad hoc* em 1902. Só com a mecânica quântica ele ganhou justificativa: partículas idênticas não são apenas parecidas, são **indistinguíveis em princípio**, e não existe fato sobre qual é qual. Este é um dos casos mais limpos da física em que um problema de consistência interna apontou, décadas antes, para uma teoria ainda não formulada.

**Um exemplo que se conta na mão.** Para $N$ spins que valem $\pm 1$ num campo magnético, cada configuração é um microestado e há $2^N$ deles. O macroestado "magnetização líquida $M$" agrupa todos os arranjos com o mesmo número de spins para cima, e o número deles é um coeficiente binomial. Esse modelo minúsculo — sem posições, sem momentos — já produz temperatura, entropia e transição de fase, e é o laboratório usado no resto do módulo.

### A declaração

Microestado é a especificação completa da configuração microscópica de um sistema. Para sistemas clássicos, seu número é definido como o volume no espaço de fases dividido por $h$ por grau de liberdade e por $N!$ para partículas idênticas — duas correções que a mecânica clássica não podia justificar e que a teoria quântica explica.

### Onde se tropeça

- **Esquecer o $N!$.** Sem ele, a entropia deixa de ser extensiva e o paradoxo de Gibbs reaparece.
- **Achar que $h$ entra por convenção.** Sem uma unidade de volume de fase, a entropia fica indeterminada a menos de uma constante — o $h$ não é escolha, é necessidade.
- **Confundir microestado com "posição das partículas".** Ele inclui os momentos: dois gases com as mesmas posições e velocidades diferentes são microestados distintos.
`,
      exercises: [
        {
          id: 'ex-7.1.1',
          question: 'Por que a contagem de microestados clássicos precisa da constante de Planck?',
          options: [
            'Porque as partículas se movem com velocidade quantizada.',
            'Porque um volume no espaço de fases tem dimensão e não pode entrar num logaritmo — é preciso uma célula unitária, e ela vale h por grau de liberdade.',
            'Porque a energia é sempre um múltiplo de h.',
            'Porque h corrige o efeito da temperatura.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sem unidade, a entropia fica definida só a menos de uma constante aditiva arbitrária. A física estatística clássica precisou de h para fechar por dentro — antes de a mecânica quântica existir.',
        },
        {
          id: 'ex-7.1.2',
          question: 'O paradoxo de Gibbs surge quando:',
          options: [
            'Dois gases diferentes se misturam e a entropia aumenta.',
            'A divisória entre duas metades do mesmo gás é removida e a contagem ingênua indica aumento de entropia, apesar de nada ter mudado fisicamente.',
            'A temperatura de um gás cai abaixo do zero absoluto.',
            'O volume do recipiente é reduzido à metade.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A operação é reversível — basta recolocar a divisória —, então a entropia não pode ter aumentado. O erro está em tratar partículas idênticas como distinguíveis.',
        },
        {
          id: 'ex-7.1.3',
          question: 'A correção do fator N! na contagem significa que:',
          options: [
            'Cada partícula pode ocupar N estados diferentes.',
            'Permutar partículas idênticas não gera um microestado novo: elas são indistinguíveis em princípio, não apenas parecidas.',
            'O sistema tem N graus de liberdade.',
            'A entropia cresce com o fatorial do número de partículas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Gibbs introduziu o fator como conserto ad hoc em 1902. Só a mecânica quântica o justificou: não existe fato sobre qual partícula idêntica é qual.',
        },
      ],
    },

    {
      id: '7.2',
      title: '7.2. Macroestados',
      objetivo:
        'Entender ensembles — as três formas de descrever um sistema conforme o que se mantém fixo — e por que elas concordam.',
      prerequisitos: ['3.6', '7.1'],
      fontes: ['tong-statphys'],
      content: String.raw`
### O problema

Dizer "macroestado é o que se mede" é vago demais para calcular. Na prática, a descrição depende de como o sistema está acoplado ao mundo: isolado, em banho térmico, ou trocando partículas. Cada situação exige uma matemática diferente — e é preciso garantir que as três deem a mesma física.

### A construção

**Ensemble.** Em vez de acompanhar um sistema ao longo do tempo, considera-se um conjunto imaginário de cópias, todas compatíveis com o mesmo macroestado, e calculam-se médias sobre esse conjunto. A justificativa para trocar média temporal por média de ensemble é a **hipótese ergódica**: ao longo de tempo suficiente, o sistema visita todos os microestados acessíveis com frequência proporcional ao seu peso. É uma hipótese, não um teorema — provar ergodicidade é difícil e ela **falha** em casos importantes, como vidros e sistemas integráveis. Vale registrar isso em vez de fingir que a fundamentação é limpa.

**Microcanônico: energia fixa.** Sistema isolado, com $E$, $V$ e $N$ fixos. Todos os microestados acessíveis têm a **mesma probabilidade** — este é o postulado fundamental da física estatística, e não é derivado de nada mais básico. Daqui sai diretamente $S = k_B \ln\Omega$, e a temperatura aparece como *definição*:

$$
\frac{1}{T} = \frac{\partial S}{\partial E}.
$$

É a mesma condição de maximização de entropia obtida em 3.6, agora com conteúdo microscópico: temperatura mede o quanto a entropia responde à adição de energia.

**Canônico: temperatura fixa.** O sistema troca energia com um reservatório grande. Agora $E$ **flutua**, e o que é fixo é $T$. A probabilidade de um microestado deixa de ser uniforme e passa a depender da energia — resultado de 7.3. A quantidade central é a função de partição

$$
Z = \sum_i e^{-E_i/k_B T},
$$

e a conexão com a termodinâmica é direta e notavelmente econômica:

$$
F = -k_B T \ln Z.
$$

Lembrando de 3.7 que $F$ é o potencial adequado a $T$ e $V$ fixos: **calculada $Z$, toda a termodinâmica do sistema segue por derivação.** É por isso que o problema central da física estatística é quase sempre "consiga somar $Z$".

**Grande canônico: número variável.** Reservatório de energia **e** de partículas, com $T$ e potencial químico $\mu$ fixos. Necessário sempre que há reação química, adsorção, ou quando se trata de gases quânticos, em que o número de partículas num dado nível não é fixo.

**Por que os três concordam.** No **limite termodinâmico** ($N \to \infty$ com densidade fixa), as flutuações relativas de energia e de número de partículas vão a zero como $1/\sqrt{N}$ — resultado de 7.5. Um sistema canônico com $10^{23}$ partículas tem energia tão bem definida quanto um microcanônico. Escolhe-se o ensemble por conveniência de cálculo, não por fidelidade física.

Mas o "limite termodinâmico" é uma condição, não uma decoração: para nanopartículas, proteínas isoladas ou sistemas com poucas dezenas de graus de liberdade, os ensembles **realmente** dão resultados diferentes, e é preciso escolher o que corresponde à situação física.

### A declaração

Macroestado é a descrição de um sistema por suas variáveis termodinâmicas, e a cada conjunto de variáveis fixadas corresponde um ensemble: microcanônico para energia fixa, canônico para temperatura fixa, grande canônico para temperatura e potencial químico fixos. No limite termodinâmico os três produzem a mesma física.

### Onde se tropeça

- **Tratar a hipótese ergódica como demonstrada.** Ela falha em vidros e sistemas integráveis.
- **Aplicar equivalência de ensembles a sistemas pequenos.** Ela vale no limite termodinâmico, e nanossistemas não estão nele.
- **Ver $Z$ como artifício de normalização.** É o objeto central: dela sai $F$, e de $F$ sai toda a termodinâmica.
`,
      exercises: [
        {
          id: 'ex-7.2.1',
          question: 'No ensemble microcanônico, qual é o postulado fundamental?',
          options: [
            'A energia de cada partícula é a mesma.',
            'Todos os microestados acessíveis com a energia dada são igualmente prováveis.',
            'A entropia é sempre máxima.',
            'A temperatura é constante.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É um postulado, não um teorema — não é derivado de nada mais básico. Dele saem S = k ln Ω e a definição 1/T = ∂S/∂E.',
        },
        {
          id: 'ex-7.2.2',
          question: 'Por que a função de partição Z é o objeto central do ensemble canônico?',
          options: [
            'Porque ela dá a energia exata do sistema.',
            'Porque F = −kT ln Z, e de F toda a termodinâmica segue por derivação.',
            'Porque ela é sempre igual a 1 após normalização.',
            'Porque ela conta o número de partículas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Z conecta a contagem microscópica à energia livre de Helmholtz de 3.7. Calculada Z, pressão, entropia, energia média e calor específico saem por derivadas — daí o problema central ser "consiga somar Z".',
        },
        {
          id: 'ex-7.2.3',
          question: 'Os ensembles microcanônico e canônico dão a mesma física:',
          options: [
            'Sempre, para qualquer sistema.',
            'No limite termodinâmico, porque as flutuações relativas caem como 1/√N — mas para nanossistemas eles diferem de verdade.',
            'Apenas para gases ideais.',
            'Nunca: são descrições incompatíveis.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Com 10²³ partículas, a energia num sistema canônico é tão bem definida quanto num microcanônico. Com poucas dezenas de graus de liberdade, não é — e a escolha do ensemble passa a ter conteúdo físico.',
        },
      ],
    },

    {
      id: '7.3',
      title: '7.3. Distribuição de Boltzmann',
      objetivo:
        'Deduzir por que estados de maior energia são exponencialmente menos prováveis — e ver a fórmula reaparecer em química, astronomia e biologia.',
      prerequisitos: ['7.2'],
      fontes: ['tong-statphys', 'feynman-site', 'libretexts-fisica-2-pt'],
      content: String.raw`
### O problema

No ensemble microcanônico todos os microestados são igualmente prováveis. Mas um sistema em contato com um banho térmico pode ter qualquer energia — e claramente não a tem com igual probabilidade, ou o ar da sala teria tantas moléculas a 5000 K quanto a 300 K. Falta a lei de probabilidade correta.

### A construção

**A dedução.** Considere o sistema pequeno $S$ acoplado a um reservatório $R$ enorme, com energia total fixa. O conjunto $S + R$ é isolado, então nele vale o postulado de equiprobabilidade. A probabilidade de $S$ estar num microestado de energia $E_i$ é proporcional ao número de microestados que **o reservatório** pode ter com o que sobra:

$$
P(E_i) \propto \Omega_R(E_{\text{tot}} - E_i).
$$

Como $\Omega_R$ é astronomicamente grande, o passo natural é expandir seu logaritmo, não ele mesmo. Usando $S_R = k_B\ln\Omega_R$ e $\partial S_R/\partial E = 1/T$, a expansão em primeira ordem dá $\ln\Omega_R(E_{\text{tot}} - E_i) \approx \text{const} - E_i/k_B T$, e portanto

$$
P(E_i) = \frac{e^{-E_i/k_B T}}{Z}.
$$

Repare de onde vem a exponencial: da **linearização do logaritmo** do número de estados do reservatório. Ela não é postulada nem ajustada a dados — é consequência de o reservatório ser grande.

**Como ler o resultado.** Estados de maior energia não são proibidos, são exponencialmente suprimidos. O fator $k_B T$ funciona como uma moeda: transições que custam muito menos que $k_B T$ acontecem o tempo todo, e as que custam muito mais são raríssimas. À temperatura ambiente, $k_B T \approx 0{,}025$ eV — e é esse número que decide o que é possível na química da vida.

**Onde a fórmula aparece.**

| Área | Manifestação |
| --- | --- |
| Química | Lei de Arrhenius: taxa de reação proporcional a $e^{-E_a/k_BT}$ |
| Atmosfera | Densidade do ar caindo com a altitude, $e^{-mgh/k_BT}$ |
| Astronomia | Populações de níveis atômicos, que produzem as linhas espectrais estelares |
| Semicondutores | Número de portadores atravessando o gap |
| Biologia | Taxa de dobramento e desnaturação de proteínas |

São a mesma equação. É difícil apontar outra fórmula da física com esse alcance.

**Equipartição, e seu limite.** No caso clássico, cada grau de liberdade quadrático na energia contribui com $\frac{1}{2}k_B T$ para a energia média. Daí $\frac{3}{2}k_BT$ para um gás monoatômico, como usado em 3.1.

Mas o teorema falhava espetacularmente, e a falha foi historicamente decisiva. O calor específico dos sólidos cai a zero em baixa temperatura, e não deveria; os graus de liberdade vibracionais das moléculas "somem" a baixa temperatura; e aplicar equipartição aos modos do campo eletromagnético dá energia infinita — a catástrofe do ultravioleta. A explicação é a mesma nos três casos: os níveis são **quantizados**, e quando o espaçamento entre eles excede $k_B T$, a distribuição de Boltzmann suprime a excitação e o grau de liberdade fica "congelado". Foi por essa porta que a mecânica quântica entrou na física, e é para onde o módulo 8 aponta.

### A declaração

A distribuição de Boltzmann estabelece que, para um sistema em equilíbrio térmico à temperatura $T$, a probabilidade de ocupar um microestado decai exponencialmente com sua energia, com escala fixada por $k_B T$. Ela decorre da equiprobabilidade dos microestados do conjunto sistema mais reservatório, e não de hipótese adicional.

### Onde se tropeça

- **Confundir probabilidade de microestado com probabilidade de energia.** Se muitos estados compartilham a mesma energia, a degenerescência multiplica o fator exponencial.
- **Aplicar equipartição sem checar a escala.** Se o espaçamento dos níveis supera $k_B T$, o grau de liberdade está congelado e não contribui.
- **Ler a exponencial como proibição.** Estados de alta energia ocorrem — raramente —, e é justamente a cauda dessa distribuição que permite reações químicas e fusão nuclear.
`,
      exercises: [
        {
          id: 'ex-7.3.1',
          question: 'De onde vem a forma exponencial da distribuição de Boltzmann?',
          options: [
            'De um ajuste empírico a dados de gases.',
            'Da expansão em primeira ordem do logaritmo do número de microestados do reservatório, usando ∂S/∂E = 1/T.',
            'Da hipótese de que a energia é quantizada.',
            'Da conservação do momento nas colisões.',
            ],
          correctAnswerIndex: 1,
          explanation:
            'A probabilidade do sistema é proporcional a Ω_R(E_tot − E_i). Expandindo ln Ω_R em torno de E_tot aparece o termo −E_i/k_BT, e a exponencial é consequência de o reservatório ser grande.',
        },
        {
          id: 'ex-7.3.2',
          question: 'À temperatura ambiente, k_BT vale cerca de 0,025 eV. O que esse número decide?',
          options: [
            'A velocidade máxima das moléculas.',
            'Que processos são acessíveis termicamente: transições muito mais caras que k_BT são exponencialmente raras.',
            'O número total de moléculas no sistema.',
            'A pressão do gás.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'k_BT funciona como moeda energética. É por isso que ligações químicas de alguns eV são estáveis à temperatura ambiente enquanto pontes de hidrogênio, bem mais fracas, se rompem e refazem o tempo todo.',
        },
        {
          id: 'ex-7.3.3',
          question: 'Por que o teorema da equipartição falha em baixas temperaturas?',
          options: [
            'Porque as partículas param de se mover.',
            'Porque os níveis de energia são quantizados: quando o espaçamento excede k_BT, a distribuição de Boltzmann suprime a excitação e o grau de liberdade congela.',
            'Porque a entropia se torna negativa.',
            'Porque a hipótese ergódica deixa de valer.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Foi essa falha — calor específico dos sólidos caindo a zero, modos vibracionais sumindo, catástrofe do ultravioleta — que abriu a porta para a mecânica quântica.',
        },
      ],
    },

    {
      id: '7.4',
      title: '7.4. Entropia estatística',
      objetivo:
        'Generalizar S = k ln Ω para distribuições não uniformes e ver por que a fórmula resultante é idêntica à da teoria da informação.',
      prerequisitos: ['3.3', '7.3'],
      fontes: ['tong-statphys', 'tong-teaching'],
      content: String.raw`
### O problema

A fórmula de Boltzmann, $S = k_B\ln\Omega$, pressupõe microestados equiprováveis — ela vale no ensemble microcanônico. No canônico as probabilidades são exponenciais, não uniformes. Qual é a entropia então?

### A construção

**A fórmula de Gibbs.** A generalização é

$$
S = -k_B \sum_i p_i \ln p_i .
$$

O teste imediato: se todos os $\Omega$ estados têm $p_i = 1/\Omega$, a soma dá $\ln\Omega$ e recupera-se Boltzmann. Ou seja, $S = k_B\ln\Omega$ é o caso particular uniforme, não a definição geral.

**Entropia como ignorância.** A expressão tem interpretação direta: mede a incerteza que resta sobre o microestado quando só se conhece o macroestado. Se $p_i = 1$ para um estado e zero para os demais — você sabe exatamente qual é —, então $S = 0$. Quanto mais espalhada a distribuição, maior $S$. Entropia é **informação faltante**, medida em unidades térmicas.

**A coincidência que não é coincidência.** Em 1948, Claude Shannon buscava quantificar informação em transmissão de mensagens e chegou a

$$
H = -\sum_i p_i \log_2 p_i,
$$

a mesma expressão a menos da base do logaritmo e da constante. Conta-se que von Neumann sugeriu o nome: chame de entropia, porque a função já tem esse nome na mecânica estatística e, além disso, ninguém sabe direito o que entropia é, o que dá vantagem em qualquer debate. A anedota é boa, mas a identidade é real — as duas grandezas medem a mesma coisa, incerteza sobre um estado desconhecido.

**Máxima entropia como princípio.** A conexão fecha um ciclo elegante. Maximize a entropia de Gibbs sujeita apenas à normalização e você obtém a distribuição uniforme, que é o ensemble microcanônico. Maximize sujeita à normalização e a um valor fixo de energia média e você obtém **exatamente** a distribuição de Boltzmann de 7.3. Isto é, os ensembles não precisam ser postulados um a um: são a distribuição menos comprometida compatível com o que se sabe. Física estatística vira inferência sob informação incompleta.

**O demônio de Maxwell, e sua morte.** Maxwell imaginou um ser que, operando uma portinhola sem realizar trabalho, separasse moléculas rápidas de lentas e assim reduzisse a entropia — violando a segunda lei. A resolução demorou mais de um século e é o argumento mais forte a favor da identificação entropia–informação: o demônio precisa **medir** e **registrar** qual molécula vem vindo, e sua memória é finita. O princípio de Landauer estabelece que **apagar** um bit de informação custa no mínimo $k_B T \ln 2$ de energia dissipada. Ao limpar a memória para continuar operando, o demônio paga exatamente a entropia que economizou. A segunda lei se salva por um argumento sobre informação, não sobre mecânica — e a previsão de Landauer foi medida em laboratório em 2012.

### A declaração

A entropia estatística de Gibbs é menos a constante de Boltzmann vezes a soma de $p_i \ln p_i$ sobre os microestados, reduzindo-se à fórmula de Boltzmann quando a distribuição é uniforme. Ela é formalmente idêntica à entropia de Shannon e quantifica a informação faltante sobre o microestado dado o macroestado.

### Onde se tropeça

- **Usar $S = k_B\ln\Omega$ fora do microcanônico.** Fora da distribuição uniforme, a fórmula correta é a de Gibbs.
- **Tratar a identidade com Shannon como analogia frouxa.** Landauer e sua verificação experimental mostram que a conexão tem consequências físicas mensuráveis.
- **Achar que o demônio é derrotado pelo custo da medição.** Medir pode, em princípio, ser feito de forma reversível; o custo irredutível está no **apagamento** da memória.
`,
      exercises: [
        {
          id: 'ex-7.4.1',
          question: 'Qual é a relação entre S = −k Σ pᵢ ln pᵢ e S = k ln Ω?',
          options: [
            'São fórmulas incompatíveis, usadas em teorias diferentes.',
            'A segunda é o caso particular da primeira quando todos os microestados são equiprováveis.',
            'A primeira vale só para gases; a segunda, para sólidos.',
            'A primeira é uma aproximação da segunda para N grande.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Com pᵢ = 1/Ω para todos, a soma dá ln Ω. A fórmula de Gibbs é a geral; a de Boltzmann vale no ensemble microcanônico.',
        },
        {
          id: 'ex-7.4.2',
          question: 'Maximizar a entropia de Gibbs sujeita a um valor fixo de energia média produz:',
          options: [
            'A distribuição uniforme.',
            'Exatamente a distribuição de Boltzmann.',
            'Uma distribuição gaussiana.',
            'Nenhuma distribuição bem definida.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o princípio de máxima entropia: os ensembles deixam de ser postulados separados e passam a ser a distribuição menos comprometida compatível com o que se sabe.',
        },
        {
          id: 'ex-7.4.3',
          question: 'Como o demônio de Maxwell é conciliado com a segunda lei?',
          options: [
            'Provando que ele não pode medir a velocidade das moléculas.',
            'Pelo princípio de Landauer: apagar um bit da memória do demônio custa no mínimo k_BT·ln2, o que paga a entropia economizada.',
            'Mostrando que a portinhola sempre realiza trabalho.',
            'Concluindo que a segunda lei realmente admite exceções.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Medir pode, em princípio, ser reversível. O custo irredutível está no apagamento — e essa previsão foi verificada experimentalmente em 2012.',
        },
      ],
    },

    {
      id: '7.5',
      title: '7.5. Flutuações térmicas',
      objetivo:
        'Entender por que grandezas macroscópicas parecem exatas, quando são vistas as flutuações — e por que elas carregam informação sobre a resposta do sistema.',
      prerequisitos: ['1.10', '7.3'],
      fontes: ['tong-statphys', 'feynman-site'],
      content: String.raw`
### O problema

No ensemble canônico a energia não é fixa: ela flutua. Mas nenhum termômetro de laboratório mostra a temperatura oscilando. Ou as flutuações são pequenas demais para importar, ou o formalismo está errado — e vale saber qual das duas.

### A construção

**O tamanho das flutuações.** Para $N$ contribuições independentes, o desvio-padrão da energia total cresce como $\sqrt{N}$, enquanto a própria energia cresce como $N$. Logo a flutuação **relativa** vai a zero:

$$
\frac{\Delta E}{E} \sim \frac{1}{\sqrt{N}} .
$$

Com $N \sim 10^{23}$, isso dá cerca de $10^{-11}$ — nenhum instrumento macroscópico detecta. É esse resultado que dissolve a tensão do problema e, de quebra, explica por que a segunda lei parece absoluta apesar de ser estatística: as violações existem e têm tamanho relativo $10^{-11}$.

**Flutuação e capacidade térmica.** Aqui está o que torna o tópico mais que uma verificação de consistência. Derivando a energia média em relação à temperatura, obtém-se

$$
\langle \Delta E^2 \rangle = k_B T^2 C_V .
$$

Leia com atenção o que essa igualdade afirma: do lado esquerdo, o quanto o sistema **flutua espontaneamente** em equilíbrio; do lado direito, o quanto ele **responde** a uma mudança externa de temperatura. As duas coisas são a mesma. Um sistema que absorve muito calor por grau também flutua muito por conta própria.

**O teorema flutuação–dissipação.** A relação acima é um caso particular de um resultado geral: a resposta de um sistema a uma perturbação externa é determinada por suas flutuações espontâneas em equilíbrio. Einstein usou exatamente essa lógica em 1905, no artigo sobre movimento browniano: relacionou a difusão de partículas em suspensão à viscosidade do fluido, obtendo uma previsão quantitativa testável. Perrin a verificou, mediu o número de Avogadro por esse caminho e, com isso, encerrou o debate sobre a existência dos átomos. Flutuação térmica visível ao microscópio foi a prova de que a matéria é feita de partículas.

**Onde flutuações dominam.** O regime em que $N$ é pequeno é a regra, não a exceção, em várias áreas. Numa célula, uma molécula reguladora pode existir em algumas dezenas de cópias, e a expressão gênica é ruidosa por necessidade estatística. Em nanoeletrônica, o ruído térmico é um limite de projeto. E, no ponto crítico de uma transição de fase (tópico 7.6), a capacidade térmica diverge — e, pela relação acima, as flutuações também: é o único regime em que um sistema macroscópico flutua de maneira macroscopicamente visível.

**Um pedaço de céu.** A opalescência crítica — um fluido perto do ponto crítico fica leitoso — é isso acontecendo à vista. E o céu é azul pelo mesmo motivo: flutuações de densidade do ar espalham luz, com eficiência proporcional a $1/\lambda^4$, o que favorece o azul.

### A declaração

Flutuações térmicas são desvios espontâneos das grandezas macroscópicas em torno de seus valores médios, com magnitude relativa que decai como o inverso da raiz do número de partículas. Elas se relacionam quantitativamente às funções de resposta do sistema pelo teorema flutuação–dissipação.

### Onde se tropeça

- **Achar que flutuações são erro de medida.** São propriedade física do sistema, e foram elas que provaram a existência dos átomos.
- **Estender $1/\sqrt{N}$ ao ponto crítico.** Ali as correlações são de longo alcance, a capacidade térmica diverge e o argumento de independência falha.
- **Supor que sistemas biológicos são bem descritos por médias.** Com dezenas de moléculas, o ruído é da ordem do sinal.
`,
      exercises: [
        {
          id: 'ex-7.5.1',
          question: 'Por que grandezas macroscópicas parecem exatas, apesar das flutuações?',
          options: [
            'Porque as flutuações são canceladas pelos instrumentos.',
            'Porque a flutuação relativa decai como 1/√N, o que dá cerca de 10⁻¹¹ para N ~ 10²³.',
            'Porque a temperatura impede flutuações.',
            'Porque as flutuações ocorrem rápido demais para serem medidas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A flutuação absoluta cresce com √N e a grandeza com N. É o mesmo resultado de 1.10 que faz a segunda lei parecer absoluta sendo estatística.',
        },
        {
          id: 'ex-7.5.2',
          question: 'A relação ⟨ΔE²⟩ = k_BT²C_V afirma que:',
          options: [
            'A energia é proporcional à temperatura.',
            'O quanto um sistema flutua espontaneamente em equilíbrio determina o quanto ele responde a uma perturbação externa.',
            'A capacidade térmica é sempre positiva.',
            'As flutuações crescem com a temperatura ao quadrado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É um caso do teorema flutuação-dissipação. Um sistema que absorve muito calor por grau também flutua muito por conta própria — resposta e flutuação são a mesma coisa.',
        },
        {
          id: 'ex-7.5.3',
          question: 'O trabalho de Einstein e Perrin sobre movimento browniano usou flutuações para:',
          options: [
            'Medir a velocidade da luz.',
            'Medir o número de Avogadro e encerrar o debate sobre a existência dos átomos.',
            'Demonstrar a segunda lei da termodinâmica.',
            'Determinar a constante de Planck.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Einstein relacionou a difusão das partículas em suspensão à viscosidade do fluido, gerando previsão quantitativa. Perrin verificou e obteve N_A — flutuação térmica visível ao microscópio como prova da estrutura atômica da matéria.',
        },
      ],
    },

    {
      id: '7.6',
      title: '7.6. Transições de fase',
      objetivo:
        'Entender como comportamento coletivo abrupto emerge de interações locais — e por que sistemas totalmente diferentes obedecem aos mesmos expoentes.',
      prerequisitos: ['3.7', '7.5'],
      fontes: ['tong-statphys', 'tong-teaching'],
      content: String.raw`
### O problema

A água ferve a 100 °C, não gradualmente entre 90 e 110. Um ímã perde a magnetização de forma abrupta ao passar da temperatura de Curie. Por que uma mudança contínua de temperatura produz uma mudança **descontínua** de comportamento, se as interações microscópicas são as mesmas dos dois lados?

### A construção

**Onde a descontinuidade se esconde.** As grandezas termodinâmicas vêm de derivadas da energia livre (tópico 3.7), e a energia livre em si é contínua. Uma transição é um ponto em que alguma **derivada** de $F$ é singular:

- **primeira ordem** — a primeira derivada salta; há calor latente e coexistência de fases. Fusão e ebulição são assim;
- **segunda ordem (contínua)** — a primeira derivada é contínua e a segunda diverge; não há calor latente. É o caso do ferromagneto no ponto de Curie e do fluido no ponto crítico.

Um fato matemático importante: em sistemas **finitos** a função de partição é uma soma finita de exponenciais e portanto analítica — ela não tem singularidade. **Transições de fase só existem, estritamente, no limite termodinâmico.** A descontinuidade é uma propriedade emergente do infinito, não algo presente em nenhum número finito de moléculas.

**Parâmetro de ordem.** A grandeza que distingue as fases: magnetização no ferromagneto, diferença de densidade no fluido, amplitude da função de onda no supercondutor. Ela vale zero na fase desordenada e ganha valor não nulo abaixo da temperatura crítica.

**Quebra espontânea de simetria.** O ponto conceitual que faz este tópico valer para muito além da termodinâmica. Acima da temperatura de Curie, o ferromagneto não tem direção preferida — é simétrico por rotação. Abaixo, ele escolhe **uma** direção de magnetização. As leis microscópicas continuam perfeitamente simétricas; o **estado** é que não é.

Isso é exatamente o mecanismo que produz a massa das partículas no módulo 13: o potencial de Higgs é simétrico, e o vácuo escolhe um ponto. Aprender quebra espontânea aqui, num ímã que se pode segurar na mão, é aprendê-la no caso mais concreto que existe.

**Comprimento de correlação e criticalidade.** Perto de $T_c$, regiões cada vez maiores agem em conjunto: o comprimento de correlação $\xi$ diverge. No ponto crítico não há escala característica — flutuações de todos os tamanhos coexistem, e o sistema fica auto-similar. É por isso que a opalescência crítica de 7.5 aparece: as flutuações de densidade crescem até a escala do comprimento de onda da luz.

**Universalidade.** Aqui está o resultado mais surpreendente da física estatística. Perto do ponto crítico as grandezas seguem leis de potência, como $M \sim (T_c - T)^{\beta}$, e os expoentes como $\beta$ são **os mesmos** para sistemas fisicamente sem relação nenhuma: um ferromagneto uniaxial, a transição líquido–vapor da água e certas ligas metálicas compartilham exatamente os mesmos números.

O motivo: no ponto crítico, com $\xi$ divergindo, os detalhes microscópicos deixam de importar. Só sobrevivem a dimensão do espaço e a simetria do parâmetro de ordem. Sistemas com essas duas coisas iguais estão na mesma **classe de universalidade** — e é irrelevante do que eles são feitos.

A explicação completa é o grupo de renormalização, de Kenneth Wilson, no módulo 19. Vale antecipar por que aquele módulo aparece num currículo de cosmologia: a mesma ferramenta que explica por que a água e um ímã têm os mesmos expoentes críticos é a que organiza a teoria quântica de campos e o conceito de teoria efetiva.

### A declaração

Transição de fase é uma singularidade em alguma derivada da energia livre, existente estritamente apenas no limite termodinâmico, e caracterizada por um parâmetro de ordem que distingue as fases. Nas transições contínuas o comprimento de correlação diverge, os detalhes microscópicos se tornam irrelevantes, e o comportamento crítico depende apenas da dimensionalidade e da simetria do parâmetro de ordem.

### Onde se tropeça

- **Procurar transições de fase em sistemas pequenos.** Em sistemas finitos $Z$ é analítica; o que se vê são arredondamentos, não singularidades.
- **Achar que a simetria é destruída.** As leis permanecem simétricas; o que perde a simetria é o estado.
- **Ver universalidade como coincidência numérica.** É consequência de os detalhes microscópicos se tornarem irrelevantes quando $\xi$ diverge.
`,
      exercises: [
        {
          id: 'ex-7.6.1',
          question: 'Por que transições de fase, estritamente falando, só existem no limite termodinâmico?',
          options: [
            'Porque sistemas pequenos não têm temperatura definida.',
            'Porque em sistemas finitos Z é uma soma finita de exponenciais, portanto analítica — não pode ter a singularidade que caracteriza a transição.',
            'Porque a energia livre não é definida para poucos átomos.',
            'Porque flutuações destroem a transição.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A descontinuidade é uma propriedade emergente do infinito. Em sistemas finitos o que se observa são versões arredondadas, sem singularidade verdadeira.',
        },
        {
          id: 'ex-7.6.2',
          question: 'Um ímã abaixo da temperatura de Curie escolhe uma direção de magnetização. Isso significa que:',
          options: [
            'As leis microscópicas deixaram de ser simétricas por rotação.',
            'As leis continuam simétricas, mas o estado do sistema não é — é quebra espontânea de simetria.',
            'A energia do sistema aumentou.',
            'O parâmetro de ordem desapareceu.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A simetria é da lei, a assimetria é do estado. É exatamente o mecanismo que dá massa às partículas no módulo 13: o potencial de Higgs é simétrico e o vácuo escolhe um ponto.',
        },
        {
          id: 'ex-7.6.3',
          question: 'Por que a água e um ímã uniaxial têm os mesmos expoentes críticos?',
          options: [
            'Por coincidência numérica sem significado profundo.',
            'Porque no ponto crítico o comprimento de correlação diverge e os detalhes microscópicos se tornam irrelevantes — só sobrevivem a dimensão e a simetria do parâmetro de ordem.',
            'Porque ambos são compostos por átomos.',
            'Porque suas temperaturas críticas são próximas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É universalidade. Sistemas com a mesma dimensionalidade e a mesma simetria do parâmetro de ordem pertencem à mesma classe, independentemente do que sejam feitos — e o grupo de renormalização do módulo 19 explica por quê.',
        },
      ],
    },
  ],
};
