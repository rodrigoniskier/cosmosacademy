import type { Module } from '../../types';

export const relatividadeEspecial: Module = {
  id: '6',
  title: '6. Relatividade Especial',
  descricao:
    'O que segue de exigir que a velocidade da luz seja a mesma para todos: espaço e tempo deixam de ser absolutos e passam a ser um único objeto geométrico.',
  subtopics: [
    {
      id: '6.1',
      title: '6.1. Postulados de Einstein',
      objetivo:
        'Entender que a relatividade não corrigiu Maxwell — corrigiu a mecânica, para que ela coubesse junto.',
      prerequisitos: ['2.3', '4.5'],
      fontes: ['tong-dynamics', 'feynman-site', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

No fim do módulo 4 ficou uma pendência incômoda. As equações de Maxwell preveem que a luz viaja a $c = 1/\sqrt{\varepsilon_0\mu_0}$ — e não dizem *em relação a quê*. Na mecânica newtoniana, velocidades se somam: quem corre atrás de um trem a 80 km/h vendo-o a 100 km/h mede 20 km/h de diferença. Aplicado à luz, isso implica que alguém correndo atrás de um pulso luminoso deveria medi-lo mais devagar — e então as equações de Maxwell valeriam apenas num referencial privilegiado, o do éter.

Michelson e Morley foram medir a velocidade da Terra em relação a esse éter em 1887, com um interferômetro sensível o bastante para detectá-la. **Não encontraram nada.** Nem naquele ano, nem seis meses depois, quando a Terra se movia em sentido oposto na órbita.

### A construção

**As saídas disponíveis.** Havia três. Abandonar Maxwell, que estava funcionando espetacularmente bem. Salvar o éter com hipóteses adicionais — foi o caminho de Lorentz e FitzGerald, que postularam que os corpos se contraem ao se mover, exatamente o quanto seria preciso para esconder o efeito. Ou aceitar o resultado como fato fundamental e ver o que ele exige. Einstein tomou a terceira.

**Os dois postulados.** Em 1905:

1. **Princípio da relatividade.** As leis da física são as mesmas em todos os referenciais inerciais. Não existe experimento capaz de distinguir repouso de movimento uniforme.
2. **Constância de $c$.** A velocidade da luz no vácuo é a mesma em todos os referenciais inerciais, independentemente do movimento da fonte ou do observador.

O primeiro postulado já era de Galileu. O segundo é o que rompe tudo — e note que ele é praticamente uma consequência do primeiro, uma vez que se aceite que as equações de Maxwell são leis da física: se elas valem igualmente em todo referencial inercial, então o $c$ que aparece nelas é o mesmo para todos.

**O que precisa ceder.** Os dois postulados são incompatíveis com a adição galileana de velocidades, então alguma coisa tem de sair. Einstein percebeu que o que sai é a **simultaneidade absoluta**. Dois eventos que ocorrem ao mesmo tempo para um observador não ocorrem ao mesmo tempo para outro em movimento relativo — e não por limitação de instrumentos, mas porque "ao mesmo tempo" não é uma propriedade dos eventos, é uma relação que depende do referencial.

**As consequências, e o cuidado ao enunciá-las.** Delas seguem, com o fator

$$
\gamma = \frac{1}{\sqrt{1 - v^2/c^2}},
$$

a dilatação do tempo ($\Delta t = \gamma \Delta t_0$) e a contração do comprimento ($L = L_0/\gamma$). O cuidado necessário: nada disso é ilusão de óptica nem atraso de sinal. Um relógio em movimento **de fato** marca menos tempo, e isso é medido rotineiramente — múons produzidos na alta atmosfera chegam ao solo em número muito maior do que sua meia-vida em repouso permitiria, e os satélites do GPS precisam de correção relativística sob pena de acumular erro de quilômetros por dia.

**Por que a mecânica newtoniana continua servindo.** Para $v \ll c$, $\gamma \approx 1$ e todas as fórmulas relativísticas se reduzem às newtonianas. A 100 km/h, $\gamma$ difere de 1 na décima quinta casa decimal. Newton não foi refutado: foi delimitado — e essa é a relação normal entre teorias em física, tema que volta no módulo 19 sobre teorias efetivas.

### A declaração

A relatividade restrita se apoia em dois postulados: as leis da física são idênticas em todos os referenciais inerciais, e a velocidade da luz no vácuo é a mesma para todos eles. Deles decorre que a simultaneidade é relativa ao referencial, e que intervalos de tempo e comprimentos medidos dependem do movimento relativo entre observador e objeto.

### Onde se tropeça

- **Achar que a relatividade diz que "tudo é relativo".** Ela diz o contrário: $c$ e as leis da física são absolutas, e é por isso que espaço e tempo têm de ceder.
- **Tratar dilatação e contração como aparência.** São efeitos reais e medidos, não erros de percepção.
- **Perguntar "quem está realmente se movendo".** A pergunta não tem resposta: é exatamente o que o primeiro postulado nega.
`,
      exercises: [
        {
          id: 'ex-6.1.1',
          question: 'O que o experimento de Michelson-Morley encontrou?',
          options: [
            'Que a Terra se move a 30 km/s em relação ao éter.',
            'Nenhuma diferença na velocidade da luz conforme a direção — nenhum sinal de movimento em relação a um éter.',
            'Que a luz é mais rápida no sentido do movimento da Terra.',
            'Que o éter é arrastado pela atmosfera.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O resultado nulo se repetiu inclusive seis meses depois, com a Terra movendo-se em sentido oposto na órbita. Foi a evidência de que não há referencial privilegiado para a luz.',
        },
        {
          id: 'ex-6.1.2',
          question: 'Aceitos os dois postulados, o que precisa ser abandonado?',
          options: [
            'A conservação da energia.',
            'A simultaneidade absoluta: "ao mesmo tempo" passa a depender do referencial.',
            'As equações de Maxwell.',
            'A existência de referenciais inerciais.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Os postulados são incompatíveis com a adição galileana de velocidades. O que cede é a noção de que dois eventos têm um "mesmo instante" independente de quem observa.',
        },
        {
          id: 'ex-6.1.3',
          question: 'Por que a mecânica newtoniana continua sendo usada apesar de a relatividade estar correta?',
          options: [
            'Porque a relatividade só vale para a luz.',
            'Porque para v ≪ c o fator γ é praticamente 1, e as fórmulas relativísticas se reduzem às newtonianas.',
            'Porque Newton é mais fácil de calcular, ainda que dê respostas erradas.',
            'Porque a relatividade só foi confirmada em laboratório.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A 100 km/h, γ difere de 1 na décima quinta casa decimal. Newton não foi refutado, foi delimitado — teorias antigas viram casos-limite das novas.',
        },
      ],
    },

    {
      id: '6.2',
      title: '6.2. Espaço-tempo',
      objetivo:
        'Entender por que Minkowski precisou fundir espaço e tempo num único objeto, e o que um diagrama de espaço-tempo mostra.',
      prerequisitos: ['6.1'],
      fontes: ['tong-dynamics', 'feynman-site', 'carroll-gr'],
      content: String.raw`
### O problema

Se dois observadores discordam sobre distâncias *e* sobre intervalos de tempo, o que sobra de objetivo? Uma teoria física precisa de algo que todos concordem, ou não há sobre o que conversar.

### A construção

**A proposta de Minkowski.** Em 1908, Hermann Minkowski — que tinha sido professor de Einstein e o considerara um aluno preguiçoso — deu a formulação geométrica: espaço e tempo não são dois palcos, são um só, de quatro dimensões. Sua frase na conferência de Colônia ficou célebre: "De agora em diante, o espaço por si e o tempo por si estão condenados a se desvanecer em meras sombras, e apenas uma espécie de união entre os dois preservará uma realidade independente."

**Eventos.** A entidade básica deixa de ser "ponto do espaço" e passa a ser **evento**: um lugar *e* um instante, $(t, x, y, z)$. Uma partícula não é um ponto que se move — é uma curva no espaço-tempo, sua **linha de universo**.

**A analogia que organiza tudo.** Considere uma régua no plano. Dois observadores com eixos girados um em relação ao outro discordam sobre $\Delta x$ e sobre $\Delta y$, mas concordam sobre o comprimento:

$$
\Delta x^2 + \Delta y^2 = \text{invariante}.
$$

Uma rotação embaralha as componentes e preserva a distância. A relatividade tem a mesma estrutura: uma mudança de referencial é uma espécie de rotação no espaço-tempo, que embaralha $t$ e $x$ e preserva uma combinação. Só que essa combinação vem com um sinal trocado, e é isso que faz do espaço-tempo algo diferente de um espaço de quatro dimensões comum — assunto de 6.3.

**Diagramas de espaço-tempo.** Convenciona-se pôr o tempo no eixo vertical e o espaço no horizontal, usando unidades em que $c = 1$ para que raios de luz façam 45°. Nesse diagrama:

- objetos em repouso são **retas verticais**;
- objetos em movimento uniforme são retas inclinadas, sempre com inclinação maior que 45° em relação ao eixo espacial, já que nada supera $c$;
- objetos acelerados são curvas.

**O cone de luz.** Traçando os raios de luz que passam por um evento, obtém-se um cone duplo que divide todo o espaço-tempo em três regiões, e essa divisão é **a mesma para todos os observadores**. O interior do cone futuro contém tudo o que o evento pode influenciar; o interior do cone passado, tudo o que pode tê-lo influenciado; e o exterior, os eventos com os quais ele não pode ter relação causal nenhuma, porque isso exigiria sinal mais rápido que a luz.

Este é o ponto conceitual mais importante do módulo: **a relatividade não destrói a causalidade, ela a torna geométrica.** Simultaneidade virou relativa; a estrutura causal, não. Dois observadores podem discordar sobre a ordem temporal de eventos fora do cone de luz um do outro — mas nunca sobre a ordem de eventos causalmente conectados.

### A declaração

O espaço-tempo é a variedade quadridimensional cujos pontos são eventos, na qual a mudança de referencial inercial atua como uma rotação generalizada que mistura coordenadas espaciais e temporal. A estrutura de cones de luz nele definida é invariante e determina quais pares de eventos podem estar em relação causal.

### Onde se tropeça

- **Imaginar o tempo como "só mais um eixo espacial".** O sinal trocado na métrica torna a direção temporal qualitativamente distinta.
- **Achar que a relatividade permite inverter causa e efeito.** Só a ordem de eventos *não* causalmente conectados é relativa.
- **Ler a linha de universo como trajetória no espaço.** Ela inclui o tempo; uma partícula parada tem linha de universo, e ela é vertical.
`,
      exercises: [
        {
          id: 'ex-6.2.1',
          question: 'No espaço-tempo de Minkowski, a entidade básica é:',
          options: [
            'O ponto do espaço.',
            'O evento: um lugar e um instante tomados juntos.',
            'O intervalo de tempo.',
            'A velocidade relativa.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Um evento é (t, x, y, z). Uma partícula não é um ponto que se move: é uma curva no espaço-tempo, sua linha de universo — e uma partícula em repouso tem linha de universo vertical.',
        },
        {
          id: 'ex-6.2.2',
          question: 'O cone de luz de um evento delimita:',
          options: [
            'A região onde a gravidade é mais forte.',
            'O conjunto de eventos que podem influenciá-lo ou ser influenciados por ele — sua estrutura causal, igual para todos os observadores.',
            'A trajetória que a luz efetivamente percorreu.',
            'Os eventos simultâneos a ele.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Interior do cone futuro: o que o evento pode causar. Interior do passado: o que pode tê-lo causado. Exterior: sem relação causal possível, pois exigiria sinal mais rápido que a luz.',
        },
        {
          id: 'ex-6.2.3',
          question: 'A relatividade permite que dois observadores discordem sobre a ordem temporal de dois eventos?',
          options: [
            'Nunca, sob nenhuma circunstância.',
            'Sim, mas apenas para eventos fora do cone de luz um do outro — a ordem de eventos causalmente conectados é absoluta.',
            'Sim, inclusive para causa e efeito.',
            'Apenas se um dos observadores estiver acelerado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A simultaneidade virou relativa, mas a estrutura causal não. Nenhum referencial vê o efeito antes da causa quando os dois eventos podem se influenciar.',
        },
      ],
    },

    {
      id: '6.3',
      title: '6.3. Intervalo espaço-temporal',
      objetivo:
        'Encontrar a quantidade em que todos os observadores concordam — e ver o que o sinal negativo da métrica significa.',
      prerequisitos: ['1.3', '6.2'],
      fontes: ['tong-dynamics', 'carroll-gr'],
      content: String.raw`
### O problema

Observadores discordam sobre $\Delta t$ e sobre $\Delta x$. Se nenhuma combinação deles fosse comum a todos, a relatividade seria uma teoria sem conteúdo objetivo. A pergunta é qual combinação sobrevive à mudança de referencial.

### A construção

**A resposta.** Entre dois eventos, a quantidade invariante é o intervalo espaço-temporal:

$$
\Delta s^2 = -c^2\Delta t^2 + \Delta x^2 + \Delta y^2 + \Delta z^2.
$$

Todos os observadores inerciais calculam o **mesmo** $\Delta s^2$, ainda que cada termo isolado difira entre eles. É o análogo relativístico do teorema de Pitágoras do tópico 1.3 — com uma diferença que muda tudo.

**O sinal.** Na geometria euclidiana todos os termos entram somando, e a distância nunca é negativa. Aqui o termo temporal entra com sinal oposto. Essa assinatura é o que se chama de geometria *lorentziana*, e é ela que distingue o espaço-tempo de um espaço de quatro dimensões comum. O tempo não é "mais um eixo": é um eixo com sinal contrário, e disso decorre toda a estrutura causal.

Um aviso de leitura: convenções diferem. Muitos textos usam $(+,-,-,-)$ em vez de $(-,+,+,+)$. Nada de físico depende da escolha, mas comparar fórmulas de livros diferentes sem checar a convenção é fonte garantida de erro de sinal.

**Três tipos de intervalo.** O sinal de $\Delta s^2$ classifica o par de eventos, e a classificação é invariante:

| Intervalo | Sinal | Significado |
| --- | --- | --- |
| Tipo tempo | $\Delta s^2 < 0$ | Dá para ir de um ao outro mais devagar que a luz; podem ser causalmente conectados. Existe referencial em que ocorrem no mesmo lugar. |
| Tipo luz | $\Delta s^2 = 0$ | Ligados exatamente por um raio de luz; ficam sobre o cone. |
| Tipo espaço | $\Delta s^2 > 0$ | Separados demais para qualquer sinal; sem relação causal. Existe referencial em que são simultâneos. |

Note o que as duas últimas colunas dizem: para eventos tipo tempo, é a *ordem temporal* que é absoluta; para eventos tipo espaço, é a *separação espacial* que se pode anular pela escolha de referencial, e a ordem temporal que se pode inverter.

**Tempo próprio.** Para eventos tipo tempo, define-se

$$
\Delta\tau = \sqrt{-\Delta s^2 / c^2},
$$

o tempo medido por um relógio que viaja de um evento ao outro. Sendo construído a partir de um invariante, $\Delta\tau$ é o mesmo para todos os observadores — é o tempo *físico* vivido ao longo daquela linha de universo, e não um tempo de coordenada.

**O paradoxo dos gêmeos, resolvido em uma linha.** A gêmea que viaja e volta envelhece menos. A pergunta clássica — "por simetria, cada uma não deveria ver a outra mais nova?" — se dissolve na geometria: as duas linhas de universo ligam os *mesmos dois eventos*, mas têm comprimentos próprios diferentes. E a simetria nunca existiu, porque só uma delas acelerou, ou seja, só uma tem linha de universo quebrada. É o mesmo que dizer que, entre dois pontos, dois caminhos podem ter comprimentos diferentes — com a inversão de que, no espaço-tempo, a linha reta é a de tempo próprio **máximo**.

### A declaração

O intervalo espaço-temporal é a combinação de separações temporal e espaciais que permanece invariante sob mudanças de referencial inercial, com o termo temporal entrando com sinal oposto aos espaciais. Seu sinal classifica pares de eventos como tipo tempo, tipo luz ou tipo espaço, e essa classificação é absoluta.

### Onde se tropeça

- **Misturar convenções de assinatura.** $(-,+,+,+)$ e $(+,-,-,-)$ coexistem na literatura; escolha uma e verifique a do texto que estiver lendo.
- **Achar que $\Delta s^2 < 0$ é um absurdo.** Não é uma distância euclidiana; o sinal é informação, e diz que os eventos são causalmente conectáveis.
- **Supor que a linha reta minimiza o tempo próprio.** No espaço-tempo ela o **maximiza** — é exatamente por isso que a gêmea que ficou envelhece mais.
`,
      exercises: [
        {
          id: 'ex-6.3.1',
          question: 'O que torna o intervalo espaço-temporal especial?',
          options: [
            'Ele é sempre positivo.',
            'Todos os observadores inerciais calculam o mesmo valor para ele, ainda que discordem de cada termo isoladamente.',
            'Ele mede a distância percorrida pela luz.',
            'Ele só é definido para eventos simultâneos.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o invariante da relatividade restrita, o análogo de Pitágoras. Sem ele, não haveria conteúdo objetivo sobre o qual observadores diferentes pudessem concordar.',
        },
        {
          id: 'ex-6.3.2',
          question: 'Dois eventos com Δs² > 0 (tipo espaço):',
          options: [
            'Podem ser ligados por um sinal luminoso.',
            'Não podem ter relação causal, e existe um referencial em que são simultâneos.',
            'Ocorrem sempre no mesmo lugar.',
            'Violam a relatividade.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Estão separados demais para qualquer sinal alcançar. Como não há relação causal, a ordem temporal entre eles depende do referencial — e há um em que são simultâneos.',
        },
        {
          id: 'ex-6.3.3',
          question: 'No paradoxo dos gêmeos, por que a gêmea viajante envelhece menos?',
          options: [
            'Porque a situação é simétrica e cada uma vê a outra mais nova.',
            'Porque as duas linhas de universo ligam os mesmos eventos com tempos próprios diferentes — e só a viajante acelerou, quebrando a simetria.',
            'Porque a velocidade dilata o espaço, não o tempo.',
            'Porque o efeito é apenas aparente e some quando elas se reencontram.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Não há simetria: só uma delas mudou de referencial. Geometricamente, entre dois eventos a linha de universo reta é a de tempo próprio máximo — e é a gêmea que ficou quem a percorre.',
        },
      ],
    },

    {
      id: '6.4',
      title: '6.4. Quadrivetores',
      objetivo:
        'Aprender a escrever leis físicas de modo que sua validade em todo referencial seja visível na própria notação.',
      prerequisitos: ['1.5', '6.3'],
      fontes: ['tong-dynamics', 'carroll-gr', 'tong-qft'],
      content: String.raw`
### O problema

Verificar caso a caso se uma lei física respeita a relatividade é trabalhoso e frágil. Seria muito melhor ter uma notação em que uma equação correta *pareça* correta — em que a invariância seja evidente na forma, e não precise ser demonstrada a cada vez.

### A construção

**A ideia.** Assim como um vetor comum é um objeto de três componentes que se transformam de um jeito específico sob rotação, um **quadrivetor** é um objeto de quatro componentes que se transformam de um jeito específico sob mudança de referencial inercial — a transformação de Lorentz. O protótipo é a posição:

$$
x^\mu = (ct, x, y, z), \qquad \mu = 0, 1, 2, 3.
$$

**A regra que dá todo o poder.** Para cada par de quadrivetores existe um produto escalar, construído com os sinais da métrica, cujo resultado é **invariante**:

$$
A \cdot B = -A^0B^0 + A^1B^1 + A^2B^2 + A^3B^3.
$$

O intervalo de 6.3 é simplesmente $x \cdot x$. E daí segue a estratégia geral: **se uma equação iguala quadrivetores, ou iguala escalares construídos com eles, ela vale automaticamente em todo referencial.** A relatividade deixa de ser uma checagem e passa a ser uma exigência de sintaxe.

**Quadrivelocidade.** Derivar a posição em relação ao tempo de coordenada não funciona, porque $t$ depende do referencial. A saída é derivar em relação ao tempo próprio, que é invariante:

$$
u^\mu = \frac{dx^\mu}{d\tau} = \gamma\,(c, \vec{v}).
$$

Um detalhe surpreendente e instrutivo: $u \cdot u = -c^2$ **sempre**, para qualquer partícula e qualquer velocidade. Uma leitura possível — popular e útil, ainda que informal — é que todo objeto se move pelo espaço-tempo com "rapidez" fixa $c$; ficar parado no espaço significa gastar tudo em deslocamento no tempo, e mover-se no espaço significa desviar parte disso, o que é exatamente a dilatação temporal.

**Quadrimomento.** Multiplicando pela massa de repouso:

$$
p^\mu = m u^\mu = \left(\frac{E}{c},\ \vec{p}\right).
$$

Aqui está o resultado que reorganiza a física: **energia e momento são componentes de um mesmo objeto**, assim como tempo e espaço são. Observadores diferentes atribuem valores diferentes a $E$ e a $\vec{p}$, e concordam sobre a combinação invariante — o que leva direto a 6.5.

**Por que isso é maior que a relatividade restrita.** A notação de índices introduzida aqui é a mesma que sustenta a teoria quântica de campos (módulo 9) e a relatividade geral (módulo 16). Quando se lê que uma lagrangiana "é um escalar de Lorentz", está se dizendo que a teoria respeita a relatividade por construção. Este tópico é, na prática, a alfabetização para tudo o que vem depois.

### A declaração

Quadrivetores são objetos de quatro componentes que se transformam sob transformações de Lorentz de modo análogo ao quadrivetor posição, e cujo produto escalar, definido com a métrica de Minkowski, é invariante. Escrever leis físicas como igualdades entre quadrivetores garante sua validade em todos os referenciais inerciais.

### Onde se tropeça

- **Derivar em relação ao tempo de coordenada.** Só o tempo próprio serve como parâmetro invariante.
- **Aplicar Pitágoras ao produto escalar.** O sinal do termo temporal é oposto; $u \cdot u$ é negativo na convenção usada aqui.
- **Tratar energia e momento como grandezas independentes.** São componentes do mesmo quadrivetor, e se misturam ao mudar de referencial.
`,
      exercises: [
        {
          id: 'ex-6.4.1',
          question: 'Qual é a vantagem central de escrever uma lei física como igualdade entre quadrivetores?',
          options: [
            'A equação fica mais curta.',
            'Sua validade em todos os referenciais inerciais passa a ser garantida pela forma da equação, sem verificação caso a caso.',
            'Elimina a necessidade de condições iniciais.',
            'Torna desnecessário o conceito de tempo próprio.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Quadrivetores se transformam de maneira definida sob Lorentz. Se os dois lados de uma equação se transformam igual, a igualdade sobrevive à mudança de referencial automaticamente.',
        },
        {
          id: 'ex-6.4.2',
          question: 'Por que a quadrivelocidade é definida derivando em relação ao tempo próprio τ, e não ao tempo t?',
          options: [
            'Porque τ é sempre maior que t.',
            'Porque τ é invariante, enquanto t depende do referencial — derivar em relação a t não produziria um quadrivetor.',
            'Porque τ é mais fácil de medir.',
            'Porque t não é definido para partículas em movimento.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Um quadrivetor precisa se transformar de modo definido. Dividir um quadrivetor por um escalar invariante preserva essa propriedade; dividir por uma componente que muda com o referencial, não.',
        },
        {
          id: 'ex-6.4.3',
          question: 'O quadrimomento p = (E/c, p⃗) mostra que:',
          options: [
            'A energia é sempre maior que o momento.',
            'Energia e momento são componentes de um mesmo objeto, e se misturam ao mudar de referencial — como tempo e espaço.',
            'O momento é conservado apenas em referenciais em repouso.',
            'A energia não depende do referencial.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Assim como tempo e espaço se misturam sob Lorentz, energia e momento também. Observadores discordam de cada componente e concordam sobre a combinação invariante.',
        },
      ],
    },

    {
      id: '6.5',
      title: '6.5. Energia relativística',
      objetivo:
        'Ver de onde sai E = mc², o que ela realmente afirma, e por que quase toda a massa do seu corpo não vem do Higgs.',
      prerequisitos: ['2.4', '6.4'],
      fontes: ['tong-dynamics', 'feynman-site', 'libretexts-fisica-3-pt'],
      content: String.raw`
### O problema

Se energia e momento são componentes de um quadrivetor, deve existir um invariante construído com eles — e esse invariante deve dizer algo sobre a partícula que independe de quem observa.

### A construção

**O invariante.** Calculando $p \cdot p$ e usando $u \cdot u = -c^2$:

$$
E^2 = (pc)^2 + (mc^2)^2.
$$

Esta é a relação energia–momento, e é ela — não $E = mc^2$ — a fórmula geral. Aqui $m$ é a **massa de repouso**, a mesma para todos os observadores; $E$ e $p$ variam de referencial para referencial, e essa combinação deles não varia.

**Os dois casos-limite.** Para uma partícula em repouso, $p = 0$ e sobra

$$
E = mc^2,
$$

a famosa. Para um fóton, que não tem massa, sobra $E = pc$ — o que mostra que partículas sem massa carregam momento, e é por isso que existe pressão de radiação e que velas solares funcionam.

**O que $E = mc^2$ afirma de verdade.** Não é uma receita de conversão entre duas substâncias distintas. É uma afirmação de **identidade**: massa é uma forma de energia, e o $c^2$ é apenas o fator de conversão entre as unidades em que historicamente medimos as duas. Um corpo quente tem mais massa que o mesmo corpo frio. Uma mola comprimida pesa mais que a relaxada. Os efeitos são minúsculos porque $c^2$ é gigantesco, mas são reais e, em escala nuclear, dominantes.

**Energia cinética relativística.** A energia total é $E = \gamma mc^2$, e a cinética é o que sobra ao descontar a energia de repouso:

$$
E_c = (\gamma - 1)mc^2.
$$

Para $v \ll c$, uma expansão devolve $E_c \approx \frac{1}{2}mv^2$ — a fórmula do módulo 2.4 reaparece como primeira aproximação. E, quando $v \to c$, $\gamma \to \infty$: acelerar uma partícula massiva até $c$ exigiria energia infinita. **É isso que torna $c$ um limite**, e não uma dificuldade de engenharia.

**De onde vem a massa das coisas.** Aqui está o fato que costuma surpreender mais. Um próton pesa cerca de 938 MeV/c², mas a soma das massas dos três quarks que o compõem dá apenas alguns MeV — **menos de 2%**. O resto é energia: energia cinética dos quarks e energia do campo de glúons que os confina, convertida em massa pela relação acima. O bóson de Higgs, do módulo 13, explica a massa dos quarks e dos léptons; ele **não** explica a maior parte da massa do seu corpo. Essa vem de $E = mc^2$ aplicada à cromodinâmica.

**Onde isso aparece.** No defeito de massa nuclear: o hélio pesa menos que dois prótons mais dois nêutrons, e a diferença é a energia de ligação liberada — a fonte da luz do Sol. Na aniquilação matéria–antimatéria, em que a conversão é total. E nos aceleradores, onde a energia cinética de colisão vira massa de partículas novas, que é literalmente como se produz um bóson de Higgs.

### A declaração

A relação energia–momento afirma que o quadrado da energia é a soma do quadrado do momento vezes $c^2$ com o quadrado da energia de repouso, sendo essa combinação invariante sob mudança de referencial. Massa e energia não são grandezas distintas convertíveis uma na outra, mas a mesma grandeza medida em unidades diferentes.

### Onde se tropeça

- **Usar $E = mc^2$ para partículas em movimento.** A fórmula geral é a relação energia–momento; $E = mc^2$ vale só no repouso.
- **Falar em "massa relativística" que cresce com a velocidade.** A convenção moderna reserva $m$ para a massa de repouso, invariante; o que cresce é a energia.
- **Atribuir toda a massa ao Higgs.** Mais de 98% da massa de um próton é energia de ligação da interação forte.
`,
      exercises: [
        {
          id: 'ex-6.5.1',
          question: 'Qual é a relação geral entre energia, momento e massa?',
          options: [
            'E = mc², sempre.',
            'E² = (pc)² + (mc²)², da qual E = mc² é o caso de repouso e E = pc o caso sem massa.',
            'E = ½mv², corrigida por γ.',
            'E = pc, sempre.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o invariante construído com o quadrimomento. E = mc² vale só para p = 0; para o fóton, sem massa, sobra E = pc — que é por que existe pressão de radiação.',
        },
        {
          id: 'ex-6.5.2',
          question: 'Por que nenhuma partícula com massa pode atingir a velocidade da luz?',
          options: [
            'Porque a tecnologia atual não é suficiente.',
            'Porque E = γmc² diverge quando v → c: seria preciso energia infinita.',
            'Porque a massa se tornaria negativa.',
            'Porque o tempo pararia de correr.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O fator γ cresce sem limite conforme v se aproxima de c. O limite é imposto pela física, não pela engenharia.',
        },
        {
          id: 'ex-6.5.3',
          question: 'A maior parte da massa de um próton vem de:',
          options: [
            'Da soma das massas dos três quarks, dadas pelo campo de Higgs.',
            'Da energia cinética dos quarks e do campo de glúons que os confina, convertida em massa por E = mc².',
            'Da massa dos elétrons ao redor.',
            'Da energia gravitacional do núcleo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Os três quarks somam poucos MeV de um próton de ~938 MeV/c² — menos de 2%. O Higgs explica a massa dos quarks e léptons, não a maior parte da massa da matéria comum.',
        },
      ],
    },

    {
      id: '6.6',
      title: '6.6. Tensor energia-momento',
      objetivo:
        'Generalizar de partículas para campos e meios contínuos — e chegar ao objeto que aparece do lado direito das equações de Einstein.',
      prerequisitos: ['6.4', '6.5'],
      fontes: ['carroll-gr', 'tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

O quadrimomento descreve uma partícula. Mas a física trata também de fluidos, campos eletromagnéticos e matéria distribuída, em que não faz sentido perguntar pelo momento "da" partícula. É preciso uma descrição de como energia e momento se distribuem e fluem pelo espaço-tempo — e ela precisa ser um objeto que se transforme corretamente sob Lorentz.

### A construção

**Por que um vetor não basta.** Para descrever fluxo é preciso responder duas perguntas ao mesmo tempo: *qual* componente de energia-momento, e *através de qual* direção ela atravessa. Duas perguntas com quatro respostas possíveis cada uma dão dezesseis números — um objeto com **dois** índices, chamado tensor:

$$
T^{\mu\nu} = \text{fluxo da componente } \mu \text{ do quadrimomento através da superfície de } \nu \text{ constante}.
$$

**O que cada bloco significa.** A interpretação é concreta:

| Componente | Significado |
| --- | --- |
| $T^{00}$ | Densidade de energia |
| $T^{0i}$ | Densidade de momento — e também fluxo de energia |
| $T^{i0}$ | Fluxo de energia na direção $i$ |
| $T^{ij}$ | Fluxo de momento: pressão na diagonal, tensões de cisalhamento fora dela |

Repare que $T^{0i}$ e $T^{i0}$ dizem a mesma coisa. Isso não é acidente: o tensor é **simétrico**, e essa simetria é a afirmação relativística de que fluxo de energia e densidade de momento são a mesma grandeza — outra consequência de energia e momento serem faces de um objeto só.

**Fluido perfeito.** O caso mais usado em cosmologia. Sem viscosidade nem condução de calor, tudo se reduz a dois números, a densidade $\rho$ e a pressão $p$:

$$
T^{\mu\nu} = \operatorname{diag}\left(\rho c^2,\ p,\ p,\ p\right)
$$

no referencial de repouso do fluido. É essa forma que alimenta as equações de Friedmann do módulo 14, e a razão de a cosmologia poder descrever conteúdos tão diferentes — matéria, radiação, energia escura — apenas trocando a relação entre $p$ e $\rho$.

**Conservação.** A lei de conservação de energia e momento se escreve numa linha:

$$
\partial_\mu T^{\mu\nu} = 0.
$$

São quatro equações: uma expressando conservação de energia, três de momento. Compare com o esforço de tratá-las separadamente na física pré-relativística — o ganho da notação tensorial não é estético, é de conteúdo.

**Onde isso desemboca.** Este tensor é o lado direito das equações de Einstein:

$$
G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}.
$$

À esquerda, geometria; à direita, o conteúdo de energia e momento. **É por isso que na relatividade geral não é a massa que gera gravidade, mas tudo o que compõe $T^{\mu\nu}$** — energia, pressão, tensões. Luz, que não tem massa, gera campo gravitacional; e a pressão negativa da energia escura, no módulo 15, é justamente o que produz expansão acelerada. Sem esse tensor, nenhuma dessas afirmações seria formulável.

Uma nota honesta sobre o limite: em relatividade geral, o próprio campo gravitacional **não** entra em $T^{\mu\nu}$ de forma local e bem definida. Essa é uma dificuldade real, não uma omissão didática, e é uma das razões pelas quais "a energia total do universo" não é uma quantidade bem posta — o que conecta de volta ao segundo teorema de Noether, em 5.7.

### A declaração

O tensor energia-momento é o objeto de dois índices que descreve a densidade e o fluxo de energia e de momento em cada ponto do espaço-tempo. É simétrico, sua divergência nula expressa a conservação de energia e momento, e é ele que atua como fonte do campo gravitacional nas equações de Einstein.

### Onde se tropeça

- **Achar que só a massa gera gravidade.** A fonte é o tensor inteiro, o que inclui energia, pressão e tensões.
- **Ler $T^{ij}$ como algo exótico.** É pressão e cisalhamento, os mesmos da mecânica dos meios contínuos.
- **Procurar a energia do campo gravitacional dentro de $T^{\mu\nu}$.** Ela não está lá, e essa ausência é um problema conceitual genuíno da relatividade geral.
`,
      exercises: [
        {
          id: 'ex-6.6.1',
          question: 'Por que a descrição de energia e momento em meios contínuos exige um tensor de dois índices, e não um quadrivetor?',
          options: [
            'Porque há mais de uma partícula envolvida.',
            'Porque é preciso especificar qual componente do quadrimomento e através de qual direção ela flui — duas perguntas, quatro respostas cada.',
            'Porque a energia é sempre positiva.',
            'Porque o espaço-tempo tem quatro dimensões.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Fluxo exige dois rótulos: o que flui e por onde. Isso dá dezesseis componentes, organizadas num objeto de dois índices.',
        },
        {
          id: 'ex-6.6.2',
          question: 'A equação ∂_μ T^{μν} = 0 expressa:',
          options: [
            'Que o tensor é simétrico.',
            'A conservação de energia e momento — quatro equações, uma para energia e três para momento.',
            'Que a pressão é nula.',
            'A equação de estado do fluido.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A divergência nula do tensor é a forma relativística das leis de conservação, reunindo numa linha o que a física pré-relativística tratava em equações separadas.',
        },
        {
          id: 'ex-6.6.3',
          question: 'Nas equações de Einstein, a fonte do campo gravitacional é:',
          options: [
            'Apenas a massa em repouso.',
            'O tensor energia-momento inteiro — o que inclui energia, pressão e tensões, e é por isso que a luz também gera gravidade.',
            'A densidade de carga elétrica.',
            'A velocidade da matéria.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'G_μν = (8πG/c⁴)·T_μν. Como a fonte é o tensor completo, radiação sem massa curva o espaço-tempo, e a pressão negativa da energia escura produz expansão acelerada.',
        },
      ],
    },
  ],
};
