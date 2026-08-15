import type { Module } from '../../types';

export const mecanicaAnalitica: Module = {
  id: '5',
  title: '5. Mecânica Analítica',
  descricao:
    'A reformulação de Lagrange e Hamilton: em vez de forças, princípios variacionais. É a linguagem em que toda a física posterior — quântica, relatividade e teoria de campos — foi efetivamente escrita.',
  subtopics: [
    {
      id: '5.1',
      title: '5.1. Princípio da mínima ação',
      objetivo:
        'Entender como uma lei local sobre forças pode ser reescrita como uma condição global sobre trajetórias inteiras — e por que "mínima" é o nome errado.',
      prerequisitos: ['1.7', '2.4'],
      fontes: ['feynman-site', 'tong-dynamics', 'ocw-8-01'],
      content: String.raw`
### O problema

A mecânica newtoniana é local e sequencial: em cada instante, a força determina a aceleração, e a trajetória se desenrola passo a passo. Funciona. Mas há um fato desconfortável escondido na óptica desde o século XVII — o princípio de Fermat, segundo o qual a luz, entre dois pontos, segue o caminho de menor tempo. Isso soa como se a luz *comparasse* percursos antes de escolher. É possível que a mecânica também tenha uma formulação assim, global em vez de passo a passo?

### A construção

**A ação.** Defina, para cada trajetória imaginável entre um ponto inicial e um final, um número — a ação:

$$
S[q] = \int_{t_1}^{t_2} L\big(q, \dot{q}, t\big)\, dt,
$$

onde $L$ é uma função chamada lagrangiana, discutida no próximo tópico. Repare no que $S$ é: não um número associado a um instante, mas a uma **história inteira**. Trajetórias diferentes recebem valores diferentes.

**O princípio.** Entre todas as trajetórias que ligam os mesmos dois eventos, a que a natureza realiza é aquela para a qual a ação é **estacionária**:

$$
\delta S = 0.
$$

Estacionária significa que pequenas deformações da trajetória não alteram $S$ em primeira ordem — exatamente a condição $f'(x) = 0$ do tópico 1.7, aplicada não a uma função de uma variável, mas a um funcional que come uma curva inteira e devolve um número.

**Por que "mínima" é o nome errado.** O nome histórico pegou, mas a condição correta é de ponto estacionário, não de mínimo. Para trajetórias curtas costuma ser mínimo; para trajetórias longas o mais comum é um ponto de sela. Na óptica isso é visível: um espelho côncavo pode fazer a luz seguir o caminho de tempo *máximo* entre dois pontos conjugados. A física exige $\delta S = 0$, e nada além disso.

**A objeção teleológica, e sua dissolução.** A formulação parece dizer que a partícula conhece o futuro e compara alternativas — o que seria estranhíssimo. Mas o princípio é matematicamente equivalente às leis locais de Newton: as duas descrevem exatamente o mesmo conjunto de trajetórias. Não há mecanismo de escolha. E, na mecânica quântica, a explicação fica mais interessante ainda: na formulação de Feynman por integrais de caminho, a partícula de fato "percorre" todos os caminhos, cada um contribuindo com uma fase $e^{iS/\hbar}$. Caminhos vizinhos a um caminho não estacionário têm fases que variam rápido e se cancelam; perto do caminho estacionário as fases se somam. **O caminho clássico é o que sobrevive à interferência.**

**Por que essa reformulação venceu.** Três razões práticas, todas decisivas. A ação é um escalar, então mudar de coordenadas — para polares, para um referencial girante — é trivial, ao passo que decompor forças vetorialmente é trabalhoso e propenso a erro. Vínculos como "a conta desliza no arame" entram de graça, sem calcular forças de reação. E, principalmente, simetrias da ação viram leis de conservação por um teorema geral, que é o assunto de 5.7.

### A declaração

O princípio da ação estacionária afirma que, entre todas as trajetórias que ligam dois eventos fixos, a fisicamente realizada é aquela em que a ação — a integral da lagrangiana ao longo do tempo — é estacionária sob variações que se anulam nos extremos. É equivalente às leis de Newton e as generaliza a qualquer sistema de coordenadas.

### Onde se tropeça

- **Ler "mínima" literalmente.** A condição é de estacionariedade; mínimos, máximos e selas satisfazem $\delta S = 0$.
- **Atribuir intenção à partícula.** O princípio é uma reformulação matemática de leis locais, não uma afirmação sobre escolha.
- **Esquecer que os extremos são fixos.** As variações precisam se anular em $t_1$ e $t_2$; sem isso, a dedução de 5.3 não fecha.
`,
      exercises: [
        {
          id: 'ex-5.1.1',
          question: 'A ação S é uma quantidade associada a:',
          options: [
            'Um instante específico do movimento.',
            'Uma trajetória inteira entre dois eventos.',
            'A posição inicial do corpo.',
            'A força resultante sobre o corpo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'S é uma integral ao longo do tempo: come uma história completa e devolve um número. É isso que torna o princípio global em vez de instante a instante.',
        },
        {
          id: 'ex-5.1.2',
          question: 'Por que a expressão "princípio da mínima ação" é tecnicamente imprecisa?',
          options: [
            'Porque a ação nunca é mínima, sempre máxima.',
            'Porque a condição física é δS = 0, ou seja, ponto estacionário — que pode ser mínimo, máximo ou sela.',
            'Porque a ação não é uma grandeza mensurável.',
            'Porque só vale para a luz, não para a matéria.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O nome é histórico. Trajetórias longas costumam corresponder a pontos de sela, e na óptica há casos de tempo máximo entre pontos conjugados de um espelho côncavo.',
        },
        {
          id: 'ex-5.1.3',
          question: 'Na formulação de Feynman por integrais de caminho, por que a trajetória clássica se destaca?',
          options: [
            'Porque é a única permitida pela mecânica quântica.',
            'Porque contribuições de caminhos vizinhos a ela têm fases que se somam, enquanto longe dela as fases oscilam rápido e se cancelam.',
            'Porque tem a menor energia possível.',
            'Porque é a mais curta em distância.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cada caminho contribui com e^(iS/ℏ). Perto do caminho estacionário, S quase não varia, então as fases se reforçam; longe dele, a interferência é destrutiva. O clássico é o que sobra.',
        },
      ],
    },

    {
      id: '5.2',
      title: '5.2. Lagrangiana',
      objetivo:
        'Entender o que é L = T − V, por que o sinal é de subtração, e o que se ganha com coordenadas generalizadas.',
      prerequisitos: ['2.4', '5.1'],
      fontes: ['tong-dynamics', 'feynman-site', 'libretexts-fisica-pt'],
      content: String.raw`
### O problema

O tópico anterior deixou uma lacuna: a ação é a integral de uma função $L$ que não foi definida. Sem saber qual é essa função, o princípio é uma forma vazia.

### A construção

**A resposta.** Para uma partícula sob forças conservativas, a lagrangiana é

$$
L = T - V,
$$

energia cinética menos energia potencial. Para uma partícula livre em uma dimensão, $L = \frac{1}{2}m\dot{x}^2$; para uma massa presa a uma mola, $L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$.

**Por que menos, e não mais?** É a pergunta que todo mundo faz, e a resposta honesta tem duas camadas. A resposta pragmática: porque funciona — é a única combinação que, colocada no princípio da ação, devolve $\vec{F} = m\vec{a}$, como se verá em 5.3. A resposta melhor vem de uma leitura do que a estacionariedade exige. A ação é a integral acumulada de $T - V$; torná-la estacionária significa, grosso modo, equilibrar a troca entre as duas ao longo do percurso. A soma $T + V$ é a energia, que já se conserva e portanto seria a mesma para qualquer trajetória — não discriminaria nada. É a **diferença** que carrega informação sobre o caminho.

Vale registrar o que não se deve fazer: dizer que $L = T - V$ "por definição". Ela não é definição, é resultado — e em sistemas com campo magnético ou em relatividade a forma muda, ainda que o princípio permaneça.

**Coordenadas generalizadas.** Aqui está o ganho prático que fez a formulação vencer. Em vez de $x, y, z$, use quaisquer parâmetros $q_1, \dots, q_n$ que descrevam a configuração do sistema. Para um pêndulo, o ângulo $\theta$ basta: um número em vez de dois, e os vínculos já embutidos. A lagrangiana fica

$$
L = \tfrac{1}{2}m\ell^2\dot{\theta}^2 + mg\ell\cos\theta,
$$

e nunca foi preciso calcular a tensão do fio. Compare com a abordagem newtoniana, em que a tensão é uma incógnita que aparece nas equações e precisa ser eliminada. **Vínculos deixam de ser um problema e passam a ser uma economia.**

**Graus de liberdade.** O número de coordenadas generalizadas independentes é o número de graus de liberdade. Um pêndulo simples tem 1; um pêndulo duplo, 2; uma partícula livre no espaço, 3; um corpo rígido, 6 (três de translação, três de rotação). Contar graus de liberdade corretamente é o primeiro passo de qualquer problema, e errar essa contagem é a origem mais comum de confusão.

**Não é única.** Duas lagrangianas que diferem pela derivada total de uma função qualquer, $L' = L + \frac{dF}{dt}$, produzem exatamente as mesmas equações de movimento — a diferença na ação vira um termo de fronteira, que se anula porque os extremos são fixos. Essa liberdade não é curiosidade: é o embrião da invariância de gauge que apareceu em 4.7.

### A declaração

A lagrangiana é a função de estado dinâmico cuja integral temporal é a ação; para sistemas conservativos, é a diferença entre energia cinética e energia potencial, expressa em coordenadas generalizadas. Ela é definida a menos da derivada total de uma função arbitrária das coordenadas e do tempo.

### Onde se tropeça

- **Confundir $L$ com a energia.** Energia é $T + V$ e se conserva; $L = T - V$ não é conservada e não é a energia.
- **Tratar $q$ e $\dot{q}$ como dependentes ao derivar.** Na lagrangiana elas são variáveis independentes; a relação entre elas só é imposta na trajetória.
- **Escolher coordenadas em excesso.** Usar mais coordenadas que graus de liberdade traz de volta os vínculos que se queria evitar.
`,
      exercises: [
        {
          id: 'ex-5.2.1',
          question: 'Para um sistema conservativo, a lagrangiana é:',
          options: ['T + V', 'T − V', 'V − T', 'T · V'],
          correctAnswerIndex: 1,
          explanation:
            'L = T − V. A soma T + V é a energia, que se conserva e seria a mesma em qualquer trajetória; é a diferença que distingue um caminho do outro.',
        },
        {
          id: 'ex-5.2.2',
          question: 'Qual é a principal vantagem prática das coordenadas generalizadas num pêndulo simples?',
          options: [
            'Permitem ignorar a gravidade.',
            'Reduzem o problema a uma variável (o ângulo) com o vínculo já embutido, dispensando o cálculo da tensão no fio.',
            'Tornam a energia cinética constante.',
            'Eliminam a necessidade de condições iniciais.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Na abordagem newtoniana a tensão é uma incógnita que aparece e precisa ser eliminada. Com θ como coordenada, o vínculo do fio inextensível já está imposto e a tensão nunca entra na conta.',
        },
        {
          id: 'ex-5.2.3',
          question: 'Somar a L a derivada total dF/dt de uma função das coordenadas e do tempo:',
          options: [
            'Muda completamente as equações de movimento.',
            'Não altera as equações de movimento, pois a mudança na ação é um termo de fronteira que se anula nos extremos fixos.',
            'Torna o sistema não conservativo.',
            'É proibido pelo princípio da ação.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A integral de dF/dt é F(t₂) − F(t₁), que não depende do caminho e, com extremos fixos, não é afetada pela variação. Essa liberdade é o embrião da invariância de gauge.',
        },
      ],
    },

    {
      id: '5.3',
      title: '5.3. Equações de Euler-Lagrange',
      objetivo:
        'Ver a condição δS = 0 virar equação diferencial — e recuperar F = ma como caso particular.',
      prerequisitos: ['1.9', '5.2'],
      fontes: ['tong-dynamics', 'ocw-18-01', 'feynman-site'],
      content: String.raw`
### O problema

"A ação é estacionária" é uma afirmação sobre trajetórias inteiras. Para calcular qualquer coisa, é preciso convertê-la numa equação que a trajetória satisfaz **ponto a ponto**. Essa conversão é o cálculo de variações.

### A construção

**A ideia da variação.** Seja $q(t)$ a trajetória verdadeira e considere uma vizinha, $q(t) + \epsilon\,\eta(t)$, onde $\eta$ é uma deformação arbitrária que se **anula nos extremos** — os pontos inicial e final são fixos. A ação vira uma função comum do número $\epsilon$, e exigir estacionariedade é exigir

$$
\left.\frac{dS}{d\epsilon}\right|_{\epsilon=0} = 0.
$$

Repare no que aconteceu: um problema sobre um espaço de curvas virou o problema de 1.7, derivada igual a zero.

**O passo decisivo.** Expandindo a derivada aparecem dois termos, um com $\eta$ e outro com $\dot{\eta}$. Integrando o segundo **por partes**, o termo de fronteira se anula — porque $\eta$ é nula nos extremos —, e tudo pode ser escrito com $\eta$ em evidência:

$$
\int_{t_1}^{t_2} \left[\frac{\partial L}{\partial q} - \frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right)\right] \eta(t)\, dt = 0.
$$

**O argumento final.** Essa integral tem de se anular para **toda** deformação $\eta$. Se o colchete fosse diferente de zero em algum ponto, seria possível escolher uma $\eta$ concentrada ali e obter integral não nula. Logo o colchete é identicamente nulo:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial q} = 0.
$$

São as equações de Euler–Lagrange, uma para cada coordenada generalizada.

**Teste: recuperar Newton.** Com $L = \frac{1}{2}m\dot{x}^2 - V(x)$, calcule as duas derivadas:

$$
\frac{\partial L}{\partial \dot{x}} = m\dot{x}, \qquad \frac{\partial L}{\partial x} = -\frac{dV}{dx}.
$$

Substituindo, $\frac{d}{dt}(m\dot{x}) + \frac{dV}{dx} = 0$, isto é, $m\ddot{x} = -\frac{dV}{dx} = F$. A segunda lei de Newton, obtida de um princípio variacional. As duas formulações são a mesma física.

**Teste 2: o pêndulo.** Com $L = \frac{1}{2}m\ell^2\dot{\theta}^2 + mg\ell\cos\theta$, as derivadas dão $m\ell^2\ddot{\theta} = -mg\ell\sin\theta$, ou seja,

$$
\ddot{\theta} = -\frac{g}{\ell}\sin\theta,
$$

sem uma única decomposição de forças e sem a tensão do fio. Para ângulos pequenos, $\sin\theta \approx \theta$ e reaparece o oscilador harmônico de 1.9.

**Momento conjugado.** A quantidade $p = \partial L/\partial\dot{q}$ recebe o nome de momento conjugado a $q$. Para $L = \frac{1}{2}m\dot{x}^2 - V$, ela é $m\dot{x}$, o momento usual — mas nem sempre coincide com "massa vezes velocidade": para uma carga em campo magnético ela inclui um termo com o potencial vetor. Guardar esse nome importa: é ele que faz a transição para Hamilton em 5.4.

### A declaração

As equações de Euler–Lagrange são a forma diferencial da condição de ação estacionária: para cada coordenada generalizada, a derivada temporal do momento conjugado iguala a derivada da lagrangiana em relação à coordenada. Elas equivalem às leis de Newton para sistemas conservativos e valem em qualquer sistema de coordenadas.

### Onde se tropeça

- **Esquecer a condição de fronteira.** A dedução depende de $\eta$ se anular nos extremos; sem isso o termo de fronteira sobrevive e o resultado muda.
- **Confundir $\partial/\partial q$ com $d/dt$.** A primeira trata $\dot{q}$ como fixo; a segunda é derivada total ao longo da trajetória.
- **Supor que o momento conjugado é sempre $m v$.** Não é — e o contraexemplo com campo magnético é justamente o que abre a porta para a formulação de gauge.
`,
      exercises: [
        {
          id: 'ex-5.3.1',
          question: 'Na dedução das equações de Euler-Lagrange, por que a deformação η(t) precisa se anular nos extremos?',
          options: [
            'Para que a integral convirja.',
            'Porque os pontos inicial e final são fixos, o que faz o termo de fronteira da integração por partes desaparecer.',
            'Porque η precisa ser positiva.',
            'Para garantir que a energia se conserve.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Compara-se a trajetória verdadeira com vizinhas que ligam os mesmos dois eventos. É essa fixação que anula o termo de fronteira e permite pôr η em evidência.',
        },
        {
          id: 'ex-5.3.2',
          question: 'Aplicando Euler-Lagrange a L = ½mẋ² − V(x), obtém-se:',
          options: [
            'A conservação da energia.',
            'mẍ = −dV/dx, ou seja, a segunda lei de Newton.',
            'A equação de onda.',
            'p = mv, apenas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Com ∂L/∂ẋ = mẋ e ∂L/∂x = −dV/dx, a equação dá d(mẋ)/dt = −dV/dx = F. As duas formulações descrevem a mesma física.',
        },
        {
          id: 'ex-5.3.3',
          question: 'O momento conjugado p = ∂L/∂q̇:',
          options: [
            'É sempre igual a massa vezes velocidade.',
            'Coincide com mv em casos simples, mas não em geral — para uma carga em campo magnético inclui um termo com o potencial vetor.',
            'É sempre nulo em sistemas conservativos.',
            'Só existe em coordenadas cartesianas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A definição é derivada da lagrangiana em relação à velocidade generalizada. Em coordenadas polares ou com campo magnético, o resultado difere de mv — e é o momento conjugado, não mv, que aparece na formulação hamiltoniana.',
        },
      ],
    },

    {
      id: '5.4',
      title: '5.4. Hamiltoniana',
      objetivo:
        'Trocar velocidade por momento como variável independente — a mesma transformada de Legendre da termodinâmica.',
      prerequisitos: ['3.8', '5.3'],
      fontes: ['tong-dynamics', 'tong-teaching', 'feynman-site'],
      content: String.raw`
### O problema

As equações de Euler–Lagrange são $n$ equações de **segunda** ordem nas coordenadas. Existe uma alternativa: $2n$ equações de **primeira** ordem, se você aceitar tratar posição e momento como variáveis igualmente fundamentais. A troca parece um mau negócio — o dobro de equações —, e não é.

### A construção

**A operação já é conhecida.** No tópico 3.8, trocar entropia por temperatura como variável independente exigiu a transformada de Legendre, e o preço foi um termo $-TS$. Aqui a situação é idêntica: a lagrangiana é função de $q$ e $\dot{q}$, e se quer trocar $\dot{q}$ por seu conjugado $p = \partial L/\partial\dot{q}$. A transformada dá

$$
H(q, p, t) = p\dot{q} - L(q, \dot{q}, t),
$$

com $\dot{q}$ reescrito em função de $p$. Compare com $F = U - TS$ e $g(p) = px - f(x)$: **é literalmente a mesma operação**, com outros nomes. Quem entendeu Legendre na termodinâmica não precisa aprender nada de novo aqui.

**O que $H$ é.** Para sistemas em que a energia potencial não depende da velocidade e as coordenadas não dependem explicitamente do tempo, o resultado é

$$
H = T + V,
$$

a energia total. Isso torna a hamiltoniana muito mais intuitiva que a lagrangiana — mas atenção: a igualdade $H = E$ **não** é automática. Em referenciais girantes ou com vínculos dependentes do tempo, $H$ pode ser conservada sem ser a energia, ou ser a energia sem se conservar. As duas propriedades são independentes.

**As equações de Hamilton.** Substituindo na formulação variacional, obtêm-se

$$
\dot{q} = \frac{\partial H}{\partial p}, \qquad \dot{p} = -\frac{\partial H}{\partial q}.
$$

Duas equações de primeira ordem por grau de liberdade, notavelmente simétricas em $q$ e $p$ — a menos de um sinal. Essa quase-simetria não é enfeite: ela é a estrutura simplética, o que dá ao espaço de fases de 5.5 sua geometria própria.

**Coordenadas cíclicas.** Se $H$ não depende de alguma coordenada $q_k$, a segunda equação dá imediatamente $\dot{p}_k = 0$: o momento conjugado é constante. Uma lei de conservação lida diretamente da forma da hamiltoniana, sem calcular nada. É a antecipação concreta do que 5.6 e 5.7 vão generalizar.

**Por que essa formulação importa.** Não é elegância desinteressada. A hamiltoniana é a ponte para praticamente tudo o que vem depois: em mecânica quântica ela vira o operador cujos autovalores são as energias permitidas (módulo 8.3, a equação de Schrödinger é construída a partir dela); em mecânica estatística ela aparece no expoente da distribuição de Boltzmann (módulo 7.3); e o espaço de fases hamiltoniano é onde a própria noção de "estado" é definida. A mecânica lagrangiana é melhor para deduzir equações; a hamiltoniana é melhor para entender estrutura.

### A declaração

A hamiltoniana é a transformada de Legendre da lagrangiana que troca as velocidades generalizadas pelos momentos conjugados como variáveis independentes. As equações de Hamilton substituem $n$ equações de segunda ordem por $2n$ de primeira ordem, tratando posição e momento simetricamente.

### Onde se tropeça

- **Assumir que $H$ é sempre a energia.** É preciso que os vínculos não dependam do tempo e que $V$ não dependa da velocidade.
- **Confundir conservação com identificação.** $H$ conservada e $H = E$ são condições distintas.
- **Deixar $\dot{q}$ na expressão final.** A transformada só está completa quando tudo está escrito em termos de $q$ e $p$.
`,
      exercises: [
        {
          id: 'ex-5.4.1',
          question: 'A relação H = pq̇ − L é, matematicamente:',
          options: [
            'Uma identidade trivial da álgebra.',
            'A transformada de Legendre que troca a velocidade generalizada pelo momento como variável independente — a mesma operação que leva de U a F na termodinâmica.',
            'A definição de energia cinética.',
            'Uma aproximação válida para velocidades pequenas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Tem exatamente a forma g(p) = px − f(x). Trocar q̇ por p aqui é a mesma operação que trocar S por T em F = U − TS.',
        },
        {
          id: 'ex-5.4.2',
          question: 'Se a hamiltoniana não depende explicitamente de uma coordenada q, então:',
          options: [
            'Essa coordenada é constante.',
            'O momento conjugado a ela é conservado, pois ṗ = −∂H/∂q = 0.',
            'A energia total é nula.',
            'O sistema não tem solução.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a segunda equação de Hamilton lida diretamente. Coordenada cíclica implica momento conjugado constante — uma lei de conservação obtida sem resolver nada.',
        },
        {
          id: 'ex-5.4.3',
          question: 'A afirmação "H é sempre igual à energia total do sistema" é:',
          options: [
            'Sempre verdadeira, por definição de hamiltoniana.',
            'Verdadeira apenas sob condições específicas: vínculos independentes do tempo e potencial independente da velocidade.',
            'Sempre falsa.',
            'Verdadeira apenas em mecânica quântica.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Em referenciais girantes ou com vínculos que variam no tempo, H pode se conservar sem ser a energia, ou ser a energia sem se conservar. Ser conservada e ser a energia são propriedades independentes.',
        },
      ],
    },

    {
      id: '5.5',
      title: '5.5. Espaço de fases',
      objetivo:
        'Ver o estado de um sistema como um ponto, sua história como uma curva — e entender o que o teorema de Liouville proíbe.',
      prerequisitos: ['5.4'],
      fontes: ['tong-dynamics', 'tong-statphys'],
      content: String.raw`
### O problema

Um sistema mecânico tem, a cada instante, posições e momentos. A pergunta é o que se ganha ao tratar esse conjunto como as coordenadas de um único ponto num espaço abstrato — em vez de acompanhar cada partícula separadamente.

### A construção

**A construção do espaço.** Para $n$ graus de liberdade, monte um espaço de $2n$ dimensões cujos eixos são $q_1,\dots,q_n,p_1,\dots,p_n$. Um ponto nesse espaço é o **estado completo** do sistema: dado ele, as equações de Hamilton determinam todo o futuro e todo o passado. A evolução temporal é uma curva, chamada trajetória de fase.

**O caso mais simples, e o que ele mostra.** Para um oscilador harmônico, a conservação da energia dá

$$
\frac{p^2}{2m} + \frac{1}{2}kx^2 = E,
$$

que é a equação de uma **elipse** no plano $(x,p)$. Toda a dinâmica — o vaivém eterno da massa na mola — é uma volta nessa elipse, e amplitudes diferentes são elipses concêntricas. Um pêndulo com energia grande o bastante para dar voltas completas produz um retrato diferente, e a curva que separa os dois comportamentos (oscilar e girar) é a separatriz. Ler o retrato de fase é ler o comportamento qualitativo do sistema **sem resolver as equações**.

**Trajetórias nunca se cruzam.** Se duas curvas se cruzassem, o ponto de cruzamento teria dois futuros distintos — e as equações de Hamilton são de primeira ordem, com solução única dada a condição inicial. O determinismo clássico, aqui, tem forma geométrica.

**Teorema de Liouville.** O resultado central. Tome uma região do espaço de fases — um conjunto de estados iniciais — e deixe cada ponto evoluir. A região se deforma, se estica, se enrola de maneira arbitrariamente complicada. Mas seu **volume permanece exatamente constante**:

$$
\frac{d\rho}{dt} = 0.
$$

O fluxo hamiltoniano é incompressível, como um fluido. A consequência prática é forte: **incerteza inicial não pode ser espremida.** Se você conhece o estado até certo volume no espaço de fases, esse volume nunca diminui — pode se esticar num filamento finíssimo e comprido, o que na prática *piora* sua previsão, mas o volume é conservado. É por isso que sistemas caóticos não são um defeito de método: a informação inicial se espalha, ela não se perde nem se concentra.

**Aonde isso leva.** Liouville é o alicerce da mecânica estatística: contar microestados, no módulo 7, é medir volumes no espaço de fases, e só faz sentido porque esse volume é invariante. E, na mecânica quântica, o espaço de fases ganha uma granulação mínima da ordem de $h$ por grau de liberdade — o princípio da incerteza é, nessa leitura, a afirmação de que existe uma célula mínima abaixo da qual não se distingue estado nenhum.

### A declaração

O espaço de fases é o espaço de $2n$ dimensões cujos pontos são os estados completos de um sistema de $n$ graus de liberdade, dados por coordenadas e momentos conjugados. A evolução hamiltoniana é um fluxo nesse espaço que preserva volume, e cujas trajetórias, por unicidade das soluções, nunca se cruzam.

### Onde se tropeça

- **Confundir espaço de fases com espaço físico.** Os eixos são coordenadas *e* momentos; a "forma" de uma trajetória ali não é a forma do movimento no espaço.
- **Achar que Liouville proíbe o caos.** Ele preserva volume, não forma: o caos estica a região em filamentos, mantendo o volume.
- **Esquecer que o volume preservado é o de $q$ **e** $p$ juntos.** Nenhum dos dois separadamente é conservado.
`,
      exercises: [
        {
          id: 'ex-5.5.1',
          question: 'No espaço de fases, o retrato de um oscilador harmônico é:',
          options: [
            'Uma reta inclinada.',
            'Uma elipse, porque p²/2m + kx²/2 = E é a equação de uma elipse no plano (x, p).',
            'Uma parábola.',
            'Um ponto fixo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A conservação da energia restringe o movimento a uma curva de nível. Para o oscilador, essa curva é uma elipse; energias diferentes dão elipses concêntricas.',
        },
        {
          id: 'ex-5.5.2',
          question: 'Duas trajetórias no espaço de fases nunca se cruzam porque:',
          options: [
            'Isso violaria a conservação da energia.',
            'Um cruzamento significaria dois futuros distintos para o mesmo estado, contradizendo a unicidade da solução das equações de Hamilton.',
            'O espaço de fases tem dimensão par.',
            'As trajetórias são sempre fechadas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'As equações de Hamilton são de primeira ordem: o estado atual determina univocamente a evolução. O determinismo clássico aparece aqui como uma propriedade geométrica.',
        },
        {
          id: 'ex-5.5.3',
          question: 'O teorema de Liouville afirma que, sob evolução hamiltoniana, uma região do espaço de fases:',
          options: [
            'Mantém a forma, mas não o volume.',
            'Mantém o volume, ainda que a forma possa se deformar arbitrariamente.',
            'Encolhe até virar um ponto.',
            'Cresce proporcionalmente ao tempo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O fluxo é incompressível. Em sistemas caóticos a região vira um filamento longuíssimo e finíssimo — a previsão piora —, mas o volume total não muda: a incerteza inicial se espalha, não desaparece.',
        },
      ],
    },

    {
      id: '5.6',
      title: '5.6. Simetrias e conservação',
      objetivo:
        'Ver leis de conservação surgirem da forma da lagrangiana, antes de enunciar o teorema geral.',
      prerequisitos: ['5.3', '5.4'],
      fontes: ['tong-dynamics', 'feynman-site', 'tong-teaching'],
      content: String.raw`
### O problema

Conservação de energia, de momento e de momento angular foram apresentadas, em toda a física elementar, como três fatos experimentais separados, cada um com sua justificativa própria. É uma coincidência suspeita — três leis com a mesma forma, descobertas em contextos distintos. Vale perguntar se têm origem comum.

### A construção

**A pista das coordenadas cíclicas.** Em 5.4 apareceu o fato decisivo em miniatura: se $L$ não depende de uma coordenada $q_k$, então Euler–Lagrange dá

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_k}\right) = \frac{\partial L}{\partial q_k} = 0,
$$

ou seja, $p_k$ é constante. E "$L$ não depende de $q_k$" é exatamente dizer que **deslocar o sistema ao longo de $q_k$ não muda a física** — uma simetria. Conservação e simetria já estão coladas.

**Caso 1: translação espacial.** Se o espaço é homogêneo — mover o laboratório inteiro três metros para a esquerda não altera resultado nenhum —, então $L$ não depende de $x$, e o momento conjugado $p_x$ se conserva. **Homogeneidade do espaço implica conservação do momento linear.**

**Caso 2: rotação.** Se o espaço é isotrópico — girar o aparato não muda o resultado —, a coordenada angular é cíclica e o momento angular se conserva. **Isotropia do espaço implica conservação do momento angular.** Note que isso explica por que o momento angular se conserva num campo central: o potencial depende só de $r$, então o ângulo não aparece em $L$.

**Caso 3: translação temporal.** Este é diferente, porque o tempo não é uma coordenada generalizada — é o parâmetro. O argumento correto: se $L$ não depende **explicitamente** do tempo, calcula-se a derivada total de $H$ ao longo da trajetória e, usando as equações de Hamilton, os termos se cancelam aos pares, restando

$$
\frac{dH}{dt} = \frac{\partial H}{\partial t}.
$$

Se $H$ não depende explicitamente de $t$, ela é conservada. **Homogeneidade do tempo implica conservação da energia** — a promessa feita lá em 2.4, agora cumprida.

**O que se ganhou.** As três conservações deixaram de ser fatos independentes e passaram a ser consequências de três propriedades do espaço e do tempo. E a recíproca é informativa: onde a simetria falha, a conservação falha junto. Um sistema com atrito dissipativo não é invariante por translação temporal na descrição reduzida, e ali a energia mecânica não se conserva. Em cosmologia, a expansão do universo quebra a invariância por translação temporal em escala global — e é por isso que a energia total do universo não é uma quantidade bem definida na relatividade geral, ponto que reaparece no módulo 14.

### A declaração

Cada simetria contínua da lagrangiana corresponde a uma quantidade conservada: invariância por translação espacial conserva o momento linear, por rotação conserva o momento angular, e por translação temporal conserva a energia. As leis de conservação não são fatos brutos independentes, mas manifestações das simetrias do sistema.

### Onde se tropeça

- **Tratar o tempo como coordenada generalizada.** Ele é o parâmetro da evolução; o argumento para a energia é diferente do das outras duas.
- **Confundir dependência explícita com implícita.** $L$ varia ao longo da trajetória mesmo sem depender explicitamente de $t$; o que importa para a conservação é a dependência explícita.
- **Achar que toda simetria dá conservação.** É preciso que seja **contínua**; simetrias discretas, como a reflexão espacial, dão regras de seleção, não quantidades conservadas.
`,
      exercises: [
        {
          id: 'ex-5.6.1',
          question: 'Se a lagrangiana não depende de uma coordenada q, o que se conclui imediatamente?',
          options: [
            'Que q é constante ao longo do movimento.',
            'Que o momento conjugado a q é conservado.',
            'Que a energia é nula.',
            'Que o sistema está em equilíbrio.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Euler-Lagrange dá d(∂L/∂q̇)/dt = ∂L/∂q = 0, ou seja, p constante. A coordenada em si continua variando — o que é constante é seu momento conjugado.',
        },
        {
          id: 'ex-5.6.2',
          question: 'A isotropia do espaço — girar o aparato não muda o resultado — implica a conservação de:',
          options: ['Energia.', 'Momento linear.', 'Momento angular.', 'Carga elétrica.'],
          correctAnswerIndex: 2,
          explanation:
            'Invariância por rotação torna a coordenada angular cíclica, e seu momento conjugado é o momento angular. Num campo central o potencial depende só de r, e é por isso que o momento angular se conserva ali.',
        },
        {
          id: 'ex-5.6.3',
          question: 'Por que o argumento para a conservação da energia difere dos outros dois?',
          options: [
            'Porque a energia não é conservada em nenhum sistema real.',
            'Porque o tempo é o parâmetro da evolução, não uma coordenada generalizada — o argumento passa pela dependência explícita de H em t.',
            'Porque a energia é escalar e as outras são vetoriais.',
            'Porque a energia depende do referencial.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Não há "momento conjugado ao tempo" no mesmo sentido. Calcula-se dH/dt ao longo da trajetória; usando as equações de Hamilton os termos se cancelam e resta ∂H/∂t, que é nulo se H não depende explicitamente do tempo.',
        },
      ],
    },

    {
      id: '5.7',
      title: '5.7. Teorema de Noether',
      objetivo:
        'Enunciar o resultado que transforma a correspondência entre simetria e conservação em teorema — e ver por que ele organiza toda a física moderna.',
      prerequisitos: ['5.6'],
      fontes: ['tong-dynamics', 'tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

O tópico anterior verificou três casos. Verificar casos não é demonstrar, e não diz o que fazer diante de uma simetria nova, que ninguém examinou antes. Falta o resultado geral: dada **qualquer** simetria contínua, qual é a quantidade conservada, e como calculá-la?

### A construção

**O contexto.** Emmy Noether provou o teorema em 1918, a pedido de Hilbert e Klein, que tentavam entender um problema com a conservação de energia na recém-formulada relatividade geral. Noether não conseguia ocupar cargo docente em Göttingen por ser mulher — Hilbert argumentou publicamente que o senado da universidade não era uma casa de banho —, e lecionou por anos sob o nome de outro professor. O teorema que ela provou nessa condição é hoje uma das ferramentas mais usadas da física teórica.

**O enunciado.** Seja uma transformação contínua das coordenadas, dependente de um parâmetro $\epsilon$, que deixa a ação invariante. Então existe uma quantidade $Q$, construível explicitamente a partir da lagrangiana e do gerador da transformação, que é conservada ao longo de qualquer trajetória física:

$$
\frac{dQ}{dt} = 0.
$$

Três coisas merecem destaque no enunciado. A simetria precisa ser **contínua**, porque a demonstração usa uma expansão em primeira ordem no parâmetro — simetrias discretas ficam de fora. A invariância exigida é a da **ação**, não da lagrangiana: como se viu em 5.2, $L$ pode mudar por uma derivada total sem consequência. E a correspondência é **construtiva** — o teorema não afirma apenas que existe uma quantidade conservada, ele diz qual é.

**O dicionário.** Aplicado às simetrias do espaço-tempo, o teorema reproduz o que 5.6 tinha verificado:

| Simetria contínua | Quantidade conservada |
| --- | --- |
| Translação no tempo | Energia |
| Translação no espaço | Momento linear |
| Rotação | Momento angular |
| Fase da função de onda ($U(1)$) | Carga elétrica |
| Transformação de Lorentz | Movimento do centro de massa |

A quarta linha é a que fecha o arco do módulo 4: a conservação da carga elétrica, anunciada em 4.1 e explicada em 4.7, é Noether aplicada à simetria de fase global. Não é uma lei separada — é o mesmo teorema com outra simetria na entrada.

**A inversão de método.** Aqui está o impacto real do teorema, e a razão de ele aparecer neste currículo antes da física de partículas. Noether pode ser lida em dois sentidos. Da simetria para a conservação, ela explica leis conhecidas. Da conservação para a simetria, ela vira **método de descoberta**: observando uma quantidade que se conserva sem explicação, procura-se a simetria responsável. Foi assim que se chegou a conceitos como isospin e número bariônico.

E há um terceiro uso, mais radical, que domina a física teórica desde os anos 1950: **postular a simetria e deduzir a teoria**. Em vez de perguntar quais são as forças e depois achar suas simetrias, escolhe-se o grupo de simetria e escreve-se a lagrangiana mais geral compatível com ele. Foi exatamente o que se fez em 4.7 com $U(1)$, produzindo o eletromagnetismo; com $SU(2)$ e $SU(3)$, o mesmo procedimento produz as interações fraca e forte, nos módulos 10 a 12. O Modelo Padrão inteiro é, nessa leitura, uma consequência de escolher $SU(3) \times SU(2) \times U(1)$.

**Um limite honesto.** O teorema não é onipotente. Ele exige simetria contínua e ação bem definida, e a versão para simetrias **locais** — o segundo teorema de Noether, do mesmo artigo de 1918 — produz não leis de conservação, mas identidades entre as equações de movimento. É justamente esse segundo teorema que explica por que a energia total do universo não é uma quantidade bem definida em relatividade geral: a invariância por difeomorfismos é local, e o que se obtém não é uma energia conservada global.

### A declaração

O teorema de Noether estabelece que a toda simetria contínua da ação corresponde uma quantidade conservada, construída explicitamente a partir da lagrangiana e do gerador da transformação. Ele unifica as leis de conservação da física sob um único princípio e, lido no sentido inverso, permite deduzir a estrutura de uma teoria a partir de suas simetrias postuladas.

### Onde se tropeça

- **Aplicá-lo a simetrias discretas.** Paridade e reversão temporal não geram quantidades conservadas por este teorema; elas dão regras de seleção.
- **Exigir invariância da lagrangiana.** O que precisa ser invariante é a ação; $L$ pode variar por uma derivada total.
- **Estender ingenuamente a simetrias locais.** Aí vale o segundo teorema, cujo resultado é de outra natureza — identidades, não conservação.
`,
      exercises: [
        {
          id: 'ex-5.7.1',
          question: 'O teorema de Noether estabelece uma correspondência entre:',
          options: [
            'Força e aceleração.',
            'Simetrias contínuas da ação e quantidades conservadas.',
            'Energia cinética e energia potencial.',
            'Coordenadas e momentos conjugados.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A cada simetria contínua corresponde uma grandeza conservada, e o teorema é construtivo: diz explicitamente qual é essa grandeza a partir da lagrangiana e do gerador da transformação.',
        },
        {
          id: 'ex-5.7.2',
          question: 'A conservação da carga elétrica corresponde, no dicionário de Noether, a qual simetria?',
          options: [
            'Translação no espaço.',
            'Rotação no espaço tridimensional.',
            'Invariância sob mudança global de fase da função de onda, o grupo U(1).',
            'Reversão temporal.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'É o mesmo teorema com outra simetria na entrada. A conservação da carga, anunciada em 4.1 e explicada em 4.7, não é uma lei independente: é Noether aplicada à simetria de fase.',
        },
        {
          id: 'ex-5.7.3',
          question: 'Qual uso do teorema de Noether domina a física teórica moderna?',
          options: [
            'Verificar experimentalmente leis de conservação já conhecidas.',
            'Postular o grupo de simetria e deduzir a teoria — escrever a lagrangiana mais geral compatível com ele.',
            'Calcular trajetórias de partículas com precisão numérica.',
            'Provar que a energia sempre se conserva.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Em vez de partir das forças e descobrir suas simetrias, parte-se da simetria. Foi assim que U(1) produziu o eletromagnetismo em 4.7; SU(2) e SU(3) produzem as interações fraca e forte, e o Modelo Padrão inteiro sai de SU(3) × SU(2) × U(1).',
        },
      ],
    },
  ],
};
