import type { Module } from '../../types';

export const simetrias: Module = {
  id: '10',
  title: '10. Simetrias em Física',
  descricao:
    'Teoria de grupos como gramática das leis físicas: o que se conserva, o que se transforma, e por que as partículas vêm nas famílias que vêm.',
  subtopics: [
    {
      id: '10.1',
      title: '10.1. Grupos',
      objetivo:
        'Isolar a estrutura comum a toda operação de simetria — e entender por que abstraí-la é o que a torna útil em física.',
      prerequisitos: ['5.6', '1.6'],
      fontes: ['uff-grupos', 'woit-grupos', 'tong-teaching'],
      content: String.raw`
### O problema

No tópico 5.6 as simetrias foram usadas de modo informal: "deslocar o laboratório", "girar o aparato", "esperar mais um pouco". Funcionou, e rendeu três leis de conservação. Mas o método parou ali. Ele não diz que simetrias são *possíveis*, não permite combinar duas, e não prevê nada.

Para ir além é preciso saber o que uma simetria é com precisão suficiente para calcular. E o caminho começa por uma observação que não é sobre objetos simétricos, e sim sobre as **operações**.

### A construção

**O que as operações têm em comum.** Tome um triângulo equilátero e liste tudo o que se pode fazer com ele sem mudar sua aparência: girar 120°, girar 240°, refletir em cada uma das três alturas — e não fazer nada. São seis operações. Três fatos sobre essa lista:

1. Executar duas em sequência dá uma que já está na lista. Girar 120° e depois refletir é o mesmo que refletir por outro eixo. A lista é **fechada**.
2. Toda operação pode ser **desfeita**, e o desfazer também está na lista.
3. "Não fazer nada" está na lista, e é **neutro**: composta com qualquer outra, devolve essa outra.

Nada disso é sobre triângulos. É sobre operações que preservam alguma coisa — e como esses três fatos reaparecem em toda simetria de toda a física, vale isolá-los.

**A definição.** Um grupo é um conjunto $G$ com uma operação que combina dois elementos, satisfazendo:

- **fechamento**: se $a$ e $b$ estão em $G$, o produto $a\cdot b$ também está;
- **associatividade**: $(a\cdot b)\cdot c = a\cdot(b\cdot c)$;
- **elemento neutro**: existe $e$ tal que $e\cdot a = a\cdot e = a$ para todo $a$;
- **inverso**: para cada $a$ existe $a^{-1}$ com $a\cdot a^{-1} = a^{-1}\cdot a = e$.

Vale notar o que **não** está exigido: que $a\cdot b = b\cdot a$. A ausência não é descuido.

**A ordem importa, e isso é físico.** Pegue um livro. Gire 90° em torno do eixo vertical e depois 90° em torno do eixo que aponta para você. Recomece e faça na ordem inversa. O livro termina em posições diferentes — não por imprecisão da mão, mas porque rotações no espaço genuinamente não comutam.

Um grupo em que $a\cdot b = b\cdot a$ para todo par chama-se **abeliano**; caso contrário, **não abeliano**. Rotações no plano são abelianas; no espaço, não. E a distinção não é técnica: é ela que, no módulo 11, separa o eletromagnetismo — abeliano, com um fóton que não carrega carga elétrica — das interações forte e fraca, não abelianas, cujos mediadores carregam a própria carga que medeiam.

**Exemplos que já apareceram sem o nome.** Os inteiros com a soma formam um grupo: o neutro é 0 e o inverso de $n$ é $-n$. As fases $e^{i\alpha}$ do tópico 4.7 formam um grupo — o produto de duas fases é uma fase, e é o grupo $U(1)$. E as transformações de Lorentz do módulo 6 formam um grupo: compor dois boosts dá uma transformação de Lorentz, o inverso do boost de velocidade $v$ é o de $-v$, e o neutro é $v = 0$.

Esse último caso merece uma frase a mais, porque contém uma surpresa. O produto de dois boosts em direções **diferentes** não é um boost puro: sobra uma rotação. O fechamento do grupo obriga a incluí-la, e ela é medível — é a precessão de Thomas, que corta pela metade o acoplamento spin-órbita que o cálculo ingênuo prevê nos níveis atômicos. Fechamento não é formalidade contábil; ele prevê fenômeno.

**Por que abstrair.** As seis simetrias do triângulo equilátero e as seis permutações de três objetos são, como grupos, **o mesmo grupo**: cada simetria permuta os vértices, e toda permutação de vértices é realizada por alguma simetria. Existe uma correspondência que preserva a operação — um isomorfismo —, e isso significa que qualquer coisa demonstrada sobre um vale automaticamente sobre o outro.

É esse o retorno da abstração, e a física o coleta o tempo todo: um punhado de grupos aparece em contextos que nada têm a ver entre si, e o resultado provado uma vez serve em todos.

### A declaração

Um grupo é um conjunto munido de uma operação associativa e fechada, com elemento neutro e com inverso para cada elemento. As operações que deixam um objeto ou uma lei invariantes sempre formam um grupo, e é essa estrutura — não o objeto — que a física usa: grupos isomorfos são o mesmo grupo, e o que vale para um vale para toda realização sua.

### Onde se tropeça

- **Confundir o grupo com aquilo sobre o que ele age.** O grupo é o conjunto das *transformações*; o triângulo não é elemento do grupo, é o que as transformações movem.
- **Supor comutatividade.** É o hábito herdado dos números, e ele custa caro: quase todos os grupos importantes da física de partículas são não abelianos.
- **Achar que simetria é semelhança visual.** Em física, simetria é invariância sob uma transformação. A lagrangiana de 5.2 é invariante por translação temporal, e não há nada de visual nisso.
- **Tratar o fechamento como detalhe.** Ele prevê a rotação de Thomas aqui, e no tópico 10.4 é o que força a existência de uma álgebra.
`,
      exercises: [
        {
          id: 'ex-10.1.1',
          question: 'Qual das quatro exigências da definição de grupo NÃO consta dela?',
          options: [
            'Que o produto de dois elementos seja um elemento do conjunto.',
            'Que a operação seja comutativa.',
            'Que exista um elemento neutro.',
            'Que todo elemento tenha inverso.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A comutatividade não é exigida, e a omissão é deliberada: rotações no espaço não comutam, e grupos não abelianos são a regra na física de partículas.',
        },
        {
          id: 'ex-10.1.2',
          question:
            'O produto de dois boosts de Lorentz em direções diferentes não é um boost puro — sobra uma rotação. O que isso ilustra?',
          options: [
            'Que as transformações de Lorentz não formam um grupo.',
            'Que o fechamento do grupo obriga a incluir a rotação, e essa exigência tem consequência medível — a precessão de Thomas.',
            'Que boosts em direções diferentes são proibidos.',
            'Que a relatividade restrita é inconsistente para velocidades altas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O grupo é fechado justamente porque a rotação extra faz parte dele. E ela aparece no espectro atômico, cortando pela metade o acoplamento spin-órbita que o cálculo ingênuo prevê.',
        },
        {
          id: 'ex-10.1.3',
          question:
            'Dizer que as simetrias do triângulo equilátero e as permutações de três objetos são "o mesmo grupo" significa que:',
          options: [
            'Triângulos e permutações são o mesmo objeto.',
            'Existe uma correspondência entre os dois conjuntos que preserva a operação, de modo que todo resultado provado num vale no outro.',
            'Os dois conjuntos têm o mesmo número de elementos.',
            'Ambos são abelianos.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Isomorfismo é correspondência que preserva a operação — ter o mesmo número de elementos não basta. É daí que vem o retorno da abstração: prova-se uma vez, usa-se em toda realização.',
        },
      ],
    },

    {
      id: '10.2',
      title: '10.2. Grupos contínuos',
      objetivo:
        'Entender por que só simetrias contínuas geram leis de conservação — e aprender a contar os parâmetros de um grupo.',
      prerequisitos: ['10.1', '6.2'],
      fontes: ['woit-grupos', 'tong-qft', 'uff-grupos'],
      content: String.raw`
### O problema

O tópico 5.6 terminou com uma restrição enunciada e não explicada: só simetrias **contínuas** produzem quantidades conservadas; as discretas dão regras de seleção. Com o vocabulário de 10.1 é possível dizer o que separa os dois casos — e a resposta explica a restrição, em vez de apenas registrá-la.

### A construção

**Rotular elementos por parâmetros.** O grupo do triângulo tem seis elementos, e dá para listá-los. As rotações do plano são outra coisa: há uma para cada ângulo $\theta$, e não há como listar. O que se faz é rotulá-las pelo parâmetro, e a composição vira soma de parâmetros:

$$
R(\theta_1)\,R(\theta_2) = R(\theta_1 + \theta_2) .
$$

O conjunto dos rótulos tem geometria própria: como $\theta = 0$ e $\theta = 2\pi$ são o mesmo elemento, o espaço de parâmetros é um **círculo**. Ou seja, o grupo não é só um conjunto — é um espaço, com dimensão, com forma, e mais adiante com topologia. Esta última chega a ter consequência física: o módulo 24 obtém monopolos e cordas cósmicas de propriedades topológicas do grupo, não da dinâmica.

**Dimensão do grupo é o número de parâmetros independentes.** Vale contar alguns:

| Grupo | O que faz | Parâmetros |
| --- | --- | --- |
| $U(1)$ | fase, rotação no plano | 1 |
| $SO(3)$ | rotações no espaço | 3 (eixo: 2, ângulo: 1) |
| Lorentz | rotações e boosts | 6 (3 + 3) |
| Poincaré | Lorentz mais translações | 10 (6 + 4) |

**O retorno é imediato.** Pelo teorema de Noether (5.7), cada parâmetro independente de uma simetria contínua dá uma quantidade conservada. O grupo de Poincaré tem dez parâmetros, logo **dez leis de conservação**: a energia, as três componentes do momento, as três do momento angular e mais três, associadas aos boosts, que fixam o movimento uniforme do centro de energia.

Nada em 5.6 permitia esse tipo de contagem. Ali as conservações apareciam uma a uma; aqui elas são contadas pela dimensão de um grupo.

**Por que a continuidade é exatamente a condição de Noether.** Num grupo contínuo existe *vizinhança da identidade*: dá para aplicar uma transformação tão pequena quanto se queira. Escreva a transformação com parâmetro infinitesimal, expanda a ação em série e imponha que a variação se anule — é dessa **derivada em relação ao parâmetro** que sai a corrente conservada.

Uma simetria discreta não tem vizinhança da identidade. Não existe "meia reflexão"; não há do que tomar derivada. Por isso ela não produz corrente, e produz outra coisa: uma regra de seleção, que diz se um processo é permitido ou proibido. A afirmação de 5.6 estava certa; a razão é esta.

**Contínuo não é o mesmo que infinito.** Os inteiros com a soma formam um grupo infinito e completamente discreto: entre 3 e 4 não há elemento. O que caracteriza o grupo contínuo não é a quantidade de elementos, é haver caminho entre eles.

**Nem todo elemento se alcança a partir da identidade.** O grupo de Lorentz completo tem quatro pedaços desconexos: além do que contém a identidade, há os obtidos aplicando inversão espacial ($P$), inversão temporal ($T$) e as duas juntas. Nenhuma sequência contínua de rotações e boosts leva ao pedaço de $P$ — refletir não é girar muito.

A consequência é dupla. A contagem de parâmetros descreve só o pedaço conexo. E $P$ e $T$ ficam como simetrias discretas — que a interação fraca, aliás, **viola**: o experimento de Wu com cobalto-60, em 1957, mostrou que a natureza distingue esquerda de direita, assunto do módulo 12.

**Compacto ou não.** O parâmetro de uma rotação é limitado: dar volta completa retorna ao início. O de um boost não é — a rapidez cresce sem limite conforme a velocidade se aproxima de $c$. Diz-se que $SO(3)$ é **compacto** e o grupo de Lorentz não é, e a diferença tem consequência: grupos compactos admitem representações unitárias de dimensão finita, e grupos não compactos não admitem nenhuma além da trivial. É por isso que uma teoria quântica relativística não cabe num espaço de estados de dimensão finita — e uma das razões pelas quais ela precisa ser uma teoria de **campos**, como o módulo 9 construiu.

### A declaração

Um grupo contínuo é aquele cujos elementos são rotulados por parâmetros que variam continuamente, formando eles próprios um espaço; o número de parâmetros independentes é a dimensão do grupo. Só nesses grupos existe vizinhança da identidade, e é da derivada em relação ao parâmetro que o teorema de Noether extrai a corrente conservada — razão pela qual simetrias discretas dão regras de seleção, e não quantidades conservadas.

### Onde se tropeça

- **Confundir contínuo com infinito.** Os inteiros são infinitos e discretos.
- **Confundir a dimensão do grupo com a do espaço em que ele age.** $SO(3)$ ter dimensão 3 e agir em três dimensões é coincidência: $SO(4)$ tem dimensão 6 e age em quatro.
- **Tratar simetria discreta como assunto menor.** $P$, $C$ e $T$ governam o que pode acontecer, e a violação de $CP$ é uma das condições necessárias para que exista mais matéria que antimatéria.
- **Supor que todo elemento se alcança a partir da identidade.** A inversão espacial mora em outro pedaço do grupo de Lorentz.
`,
      exercises: [
        {
          id: 'ex-10.2.1',
          question: 'Por que uma simetria discreta não produz quantidade conservada pelo teorema de Noether?',
          options: [
            'Porque simetrias discretas são aproximadas.',
            'Porque não há vizinhança da identidade e, portanto, nada de que tomar derivada em relação ao parâmetro.',
            'Porque elas violam a conservação da energia.',
            'Porque só valem em sistemas finitos.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Não existe "meia reflexão". O argumento de Noether depende de uma transformação infinitesimal, e a simetria discreta não tem uma. Ela dá regra de seleção: processo permitido ou proibido.',
        },
        {
          id: 'ex-10.2.2',
          question: 'O grupo de Poincaré tem dez parâmetros. O que isso permite afirmar de imediato?',
          options: [
            'Que existem dez tipos de partícula.',
            'Que há dez leis de conservação associadas: energia, três de momento, três de momento angular e três ligadas aos boosts.',
            'Que o espaço-tempo tem dez dimensões.',
            'Que a teoria tem dez constantes livres.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cada parâmetro independente de uma simetria contínua dá uma quantidade conservada. A contagem sai da dimensão do grupo — algo que o tratamento informal do tópico 5.6 não permitia fazer.',
        },
        {
          id: 'ex-10.2.3',
          question: 'A não compacidade do grupo de Lorentz — o parâmetro de boost é ilimitado — tem qual consequência?',
          options: [
            'As transformações de Lorentz deixam de formar um grupo.',
            'O grupo não admite representações unitárias de dimensão finita, e é por isso que uma teoria quântica relativística precisa de campos.',
            'A velocidade da luz deixa de ser um limite.',
            'A energia deixa de ser conservada.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Grupos compactos admitem representações unitárias de dimensão finita; grupos não compactos, não. Daí a necessidade de um espaço de estados de dimensão infinita — o do módulo 9.',
        },
      ],
    },

    {
      id: '10.3',
      title: '10.3. Grupos de Lie',
      objetivo:
        'Reconhecer os grupos matriciais que a física usa e extrair deles um número que vai importar muito: quantos parâmetros — e, adiante, quantos mediadores.',
      prerequisitos: ['10.2', '1.6'],
      fontes: ['woit-grupos', 'tong-gaugetheory', 'ocw-8-323'],
      content: String.raw`
### O problema

Dizer que um grupo contínuo é um espaço de parâmetros é correto e inútil para calcular. Falta um formato concreto — algo com que se possa fazer conta.

Ele existe, e é quase banal: praticamente todo grupo que a física usa é um grupo de **matrizes**. Matrizes multiplicam-se, invertem-se, têm identidade. A questão passa a ser quais famílias de matrizes aparecem, e por quê.

### A construção

**A definição.** Um grupo de Lie é um grupo que também é uma variedade diferenciável, com multiplicação e inversão suaves. A suavidade é a hipótese de trabalho de todo o módulo: é ela que autoriza derivar em relação aos parâmetros, coisa que 10.4 fará imediatamente.

**A família matricial.** Cada grupo é definido pelo que preserva:

- $GL(n)$: todas as matrizes $n \times n$ invertíveis;
- $O(n)$: as que preservam o produto interno real, $O^{\mathsf{T}}O = \mathbb{1}$ — as rotações e reflexões do espaço euclidiano;
- $SO(n)$: as de $O(n)$ com determinante $+1$, isto é, sem reflexão;
- $U(n)$: as que preservam a norma de um vetor **complexo**, $U^{\dagger}U = \mathbb{1}$;
- $SU(n)$: as de $U(n)$ com determinante $1$.

**Por que a quântica usa $U(n)$ e não $O(n)$.** O estado quântico do tópico 8.6 é um vetor **complexo**, e a exigência física do tópico 8.5 é que a probabilidade total continue valendo 1 depois da transformação. Probabilidade total é a norma do vetor complexo. As transformações que a preservam são exatamente as unitárias.

Convém ver o que essa frase diz: unitariedade não é convenção de conveniência matemática. Ela é a afirmação de que a probabilidade se conserva, e é ela que seleciona $U(n)$ como o grupo das simetrias quânticas. Trocar por $O(n)$, por analogia com rotações do espaço real, perde a fase — e é a fase que produz interferência.

**Contar os parâmetros.** Vale fazer a conta, porque o resultado reaparece com peso adiante. Uma matriz complexa $n \times n$ tem $2n^2$ parâmetros reais. A condição $U^{\dagger}U = \mathbb{1}$ impõe $n^2$ condições reais: $n$ na diagonal e $n^2 - n$ nos pares fora dela. Restam

$$
2n^2 - n^2 = n^2
$$

parâmetros para $U(n)$. Exigir determinante 1 remove mais um, e $SU(n)$ fica com $n^2 - 1$. Em particular:

$$
\dim SU(2) = 3, \qquad \dim SU(3) = 8 .
$$

**O número que volta.** Esses dois números não são curiosidade aritmética. No módulo 11 o campo de gauge vive na álgebra do grupo e tem, por isso, exatamente tantas componentes quanto a dimensão do grupo: uma para $U(1)$ — o fóton —, três para $SU(2)$ e oito para $SU(3)$.

Há oito glúons. O número não foi medido e depois explicado: ele estava fixado pela contagem de parâmetros de um grupo, e a medida confirmou.

**Compacidade, de novo.** $SU(n)$ e $SO(n)$ são compactos: o espaço de parâmetros é fechado e limitado. Isso importa por dois motivos que aparecem em 10.5 — grupos compactos têm representações unitárias de dimensão finita, e essas representações são exatamente as famílias finitas de partículas que se observa.

**O mapa exponencial.** Como todo elemento ligado à identidade se alcança por composição de transformações infinitesimais, ele pode ser escrito como exponencial:

$$
g = \exp\!\left(i\,\theta^a T^a\right) .
$$

Os $T^a$ são os geradores, e são o assunto do próximo tópico. O ganho é grande: em vez de um grupo com infinitos elementos, resta um conjunto finito de matrizes — $n^2 - 1$ delas, para $SU(n)$.

### A declaração

Um grupo de Lie é um grupo que também é uma variedade diferenciável, e na prática da física quase sempre um grupo de matrizes definido pelo produto que preserva. Os grupos unitários preservam a norma de vetores complexos — razão pela qual a mecânica quântica os usa —, e $SU(n)$ tem $n^2 - 1$ parâmetros, número que virá a ser o de campos de gauge da interação correspondente.

### Onde se tropeça

- **Achar que "grupo de matrizes" é a definição.** É a realização usual; a definição é grupo mais variedade diferenciável.
- **Trocar $U(n)$ por $O(n)$ por analogia com rotações reais.** Perde-se a fase, e com ela a interferência.
- **Contar parâmetros complexos.** A dimensão do grupo se conta em parâmetros reais: $SU(2)$ tem 3, não 4.
- **Supor que grupos com o mesmo número de parâmetros são o mesmo grupo.** $SU(2)$ e $SO(3)$ têm ambos dimensão 3, e não são o mesmo grupo — o tópico 10.4 mostra onde diferem e o que isso custa.
`,
      exercises: [
        {
          id: 'ex-10.3.1',
          question: 'Por que a mecânica quântica usa grupos unitários, e não ortogonais?',
          options: [
            'Porque matrizes unitárias são mais fáceis de inverter.',
            'Porque o estado é um vetor complexo e a probabilidade total deve ser preservada — e as transformações que preservam a norma complexa são exatamente as unitárias.',
            'Porque grupos ortogonais não têm inversa.',
            'Porque a energia precisa ser real.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Unitariedade é a conservação da probabilidade escrita como condição sobre matrizes. Usar grupos ortogonais perderia a fase, e é a fase que produz interferência.',
        },
        {
          id: 'ex-10.3.2',
          question: 'Quantos parâmetros reais independentes tem SU(3)?',
          options: ['3', '8', '9', '16'],
          correctAnswerIndex: 1,
          explanation:
            'SU(n) tem n² − 1 parâmetros: 9 − 1 = 8. Esse é o número de glúons, e ele estava fixado pela contagem antes de qualquer medida.',
        },
        {
          id: 'ex-10.3.3',
          question: 'O que se ganha ao escrever um elemento do grupo como exponencial de geradores?',
          options: [
            'A garantia de que o grupo é abeliano.',
            'A troca de um grupo com infinitos elementos por um conjunto finito de matrizes — os geradores — que o determinam perto da identidade.',
            'A eliminação da necessidade de parâmetros.',
            'A conservação automática da energia.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a estratégia do módulo inteiro: tudo perto da identidade se obtém compondo transformações infinitesimais, então basta conhecer o infinitesimal. Para SU(n), isso são n² − 1 matrizes.',
        },
      ],
    },

    {
      id: '10.4',
      title: '10.4. Álgebras de Lie',
      objetivo:
        'Trocar um grupo de infinitos elementos por um punhado de geradores — e reconhecer neles a álgebra do momento angular que o tópico 8.7 apresentou como fato bruto.',
      prerequisitos: ['10.3', '8.7'],
      fontes: ['woit-grupos', 'tong-qft', 'tong-aqm'],
      content: String.raw`
### O problema

Um grupo contínuo tem infinitos elementos, e não se calcula com infinitos objetos. Mas o tópico 10.2 já indicou a saída: tudo que está ligado à identidade se obtém compondo transformações infinitesimais. Se for assim, conhecer o infinitesimal deve bastar — e o infinitesimal é finito em número.

Falta ver o que sobra do grupo quando se toma essa derivada, e se o que sobra ainda tem estrutura suficiente para servir.

### A construção

**Geradores.** Escreva um elemento infinitamente próximo da identidade:

$$
g \simeq \mathbb{1} + i\,\varepsilon^a T^a .
$$

Os $T^a$ são os **geradores**, um para cada parâmetro — logo o número de geradores é a dimensão do grupo, contada em 10.3. O fator $i$ é convenção de físico, e não é gratuita: com ele os $T^a$ saem hermitianos, e operador hermitiano é observável (tópico 8.5). Sem ele, os geradores seriam anti-hermitianos e não corresponderiam a nada mensurável.

**O comutador aparece por necessidade, não por gosto.** Tome dois elementos $a$ e $b$ do grupo e forme o comutador de grupo $a\,b\,a^{-1}b^{-1}$. Pelo fechamento — aquela exigência de 10.1 que parecia contábil —, o resultado está no grupo. Expandindo em série nos parâmetros, o primeiro termo não trivial envolve $[T^a, T^b]$. Para que o resultado seja mesmo um elemento do grupo, esse comutador precisa ser, ele próprio, combinação de geradores:

$$
[T^a, T^b] = i f^{abc} T^c .
$$

Os $f^{abc}$ são as **constantes de estrutura**. Isto é uma álgebra de Lie: o espaço dos geradores, com o comutador como operação.

Vale registrar o que acabou de acontecer. O fechamento do grupo — a mais inócua das quatro exigências da definição — obriga os geradores a fecharem sob comutação. A estrutura não foi escolhida; foi imposta.

**Abeliano quer dizer $f^{abc} = 0$.** Se todos os geradores comutam, o grupo é abeliano. É o caso de $U(1)$, que tem um só gerador — e um gerador sempre comuta consigo mesmo. Daí o fóton não interagir com fóton, ponto que o tópico 10.7 retoma.

**O reencontro com o spin.** Para $SU(2)$, os geradores são as matrizes de Pauli divididas por 2, e as constantes de estrutura são o símbolo de Levi-Civita:

$$
[J_i, J_j] = i\,\varepsilon_{ijk} J_k .
$$

Essa relação foi apresentada no tópico 8.7 como a propriedade que *define* momento angular, aceita ali como fato. Aqui ela é derivada: é a álgebra de Lie de $SU(2)$, e nada além disso. As consequências que pareciam postulados — que os autovalores de $J_z$ avancem de um em um, que $j$ possa ser semi-inteiro — decorrem das representações dessa álgebra, assunto de 10.5.

**Casimir, e a origem dos números quânticos.** O operador $J^2$ comuta com todos os geradores. Um operador com essa propriedade chama-se **Casimir**, e seu valor não muda dentro de uma família de estados ligados pelas transformações do grupo.

É daí que vêm os números quânticos. O Casimir rotula a família inteira — o $j$ —, e os geradores que comutam entre si rotulam o estado dentro dela — o $m$. Nada disso foi postulado: é a estrutura da álgebra.

**A álgebra determina o grupo, mas só perto da identidade.** Aqui está a limitação honesta do método, e ela é fértil. As álgebras de $SU(2)$ e de $SO(3)$ têm exatamente as mesmas constantes de estrutura. E, ainda assim, os grupos são diferentes: $SU(2)$ recobre $SO(3)$ **duas vezes**, isto é, dois elementos de $SU(2)$ correspondem a cada rotação.

O que isso significa fisicamente é notável. Girar um objeto de $2\pi$ é, para $SO(3)$, não fazer nada. Para $SU(2)$, é multiplicar por $-1$: um estado de spin $1/2$ só retorna a si mesmo depois de $4\pi$. Isso não é artefato de notação — foi medido, em 1975, com interferometria de nêutrons, comparando dois feixes dos quais um passava por rotação de $2\pi$ a mais que o outro. A interferência mudou como previsto.

E é também a razão de existir spin $1/2$: os espinores são representações de $SU(2)$ que **não** são representações de $SO(3)$. Se o grupo de rotações da natureza fosse $SO(3)$ e não seu recobrimento, não haveria elétron com o spin que ele tem.

### A declaração

A álgebra de Lie de um grupo é o espaço dos geradores das transformações infinitesimais, munido do comutador; o fechamento do grupo obriga o comutador de dois geradores a ser combinação linear de geradores, com coeficientes chamados constantes de estrutura. A álgebra determina completamente o grupo nas vizinhanças da identidade — e não o determina globalmente, como mostram $SU(2)$ e $SO(3)$, que compartilham a álgebra e diferem no todo.

### Onde se tropeça

- **Achar que a álgebra determina o grupo por inteiro.** Determina só localmente, e a diferença global é medível.
- **Esquecer o fator $i$ na definição do gerador.** Sem ele os geradores não são hermitianos, e portanto não são observáveis.
- **Tratar as constantes de estrutura como propriedades do universo.** Elas dependem da base escolhida para os geradores; o que não depende é a álgebra.
- **Confundir gerador com elemento do grupo.** O gerador não é uma rotação; ele vive no espaço tangente à identidade.
`,
      exercises: [
        {
          id: 'ex-10.4.1',
          question: 'Por que o comutador de dois geradores tem de ser uma combinação linear de geradores?',
          options: [
            'Por convenção adotada para simplificar as contas.',
            'Porque o grupo é fechado: o comutador de grupo aba⁻¹b⁻¹ é elemento do grupo, e expandi-lo em série força essa condição sobre os geradores.',
            'Porque os geradores são hermitianos.',
            'Porque toda álgebra é comutativa.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A exigência de fechamento, que na definição de grupo parecia contábil, é o que impõe a estrutura de álgebra. Ela não foi escolhida — foi forçada.',
        },
        {
          id: 'ex-10.4.2',
          question: 'A relação [Jᵢ, Jⱼ] = i εᵢⱼₖ Jₖ, apresentada no tópico 8.7 como definição de momento angular, é:',
          options: [
            'Um postulado independente da mecânica quântica.',
            'A álgebra de Lie do grupo SU(2) — de onde decorrem, sem postulado extra, a quantização e os valores semi-inteiros de j.',
            'Uma consequência da equação de Schrödinger.',
            'Uma aproximação válida só para spin 1/2.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O que em 8.7 era fato bruto aqui é derivado. E o que parecia postulado adicional — o espectro de Jz — vem das representações dessa álgebra, no tópico 10.5.',
        },
        {
          id: 'ex-10.4.3',
          question: 'SU(2) e SO(3) têm a mesma álgebra de Lie. Qual a consequência física da diferença global entre eles?',
          options: [
            'Nenhuma: álgebras iguais implicam física idêntica.',
            'Uma rotação de 2π multiplica um estado de spin 1/2 por −1, e só 4π o devolve — efeito medido com interferometria de nêutrons.',
            'A energia deixa de ser conservada sob rotações.',
            'O momento angular passa a ser contínuo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'SU(2) recobre SO(3) duas vezes. Daí também a existência de espinores: eles são representações de SU(2) que não são representações de SO(3).',
        },
      ],
    },

    {
      id: '10.5',
      title: '10.5. Representações de grupos',
      objetivo:
        'Ligar o grupo abstrato aos estados e campos concretos — e descobrir o que fixa o tamanho das famílias de partículas.',
      prerequisitos: ['10.4', '9.5'],
      fontes: ['woit-grupos', 'usp-grupos-fisica', 'tong-qft'],
      content: String.raw`
### O problema

Há um fato experimental que pede explicação e raramente recebe: **as partículas vêm em famílias, de tamanhos específicos**.

Próton e nêutron têm massas de 938,3 e 939,6 MeV — diferem em 0,14 por cento — e a interação forte não os distingue. Os píons vêm em três. Os mésons leves vêm em oito. Não há nada na dinâmica que exija três, ou oito, e a pergunta é o que fixa esses números.

O grupo, sozinho, não responde: ele é abstrato, e partícula não é. Falta a peça que liga um ao outro.

### A construção

**Representação é a realização concreta do grupo.** Uma representação associa a cada elemento $g$ do grupo um operador linear $D(g)$ num espaço vetorial $V$, preservando a multiplicação:

$$
D(a)\,D(b) = D(ab) .
$$

O grupo continua o mesmo; o que muda é onde ele age. As rotações agem sobre um escalar como matrizes $1\times1$, sobre um vetor como $3\times3$, sobre um espinor como $2\times2$. Mesmo grupo, três representações.

**A dimensão da representação não é a dimensão do grupo.** Vale insistir, porque a confusão é a mais comum do assunto. $SU(2)$ tem dimensão 3 — três parâmetros, três geradores — sempre. Suas representações têm dimensões $1, 2, 3, 4, \dots$, ou seja, $2j+1$:

| Representação | Dimensão | Objeto físico |
| --- | --- | --- |
| $j=0$ | 1 | escalar, singleto |
| $j=1/2$ | 2 | espinor, elétron |
| $j=1$ | 3 | vetor, tripleto |
| $j=3/2$ | 4 | quadrupleto |

**Irredutibilidade, e por que ela é a resposta do problema.** Se existe um subespaço próprio de $V$ que todos os $D(g)$ preservam, a representação **se decompõe**: aqueles estados nunca se misturam com o resto. Uma representação que não se decompõe é **irredutível**.

E aqui está o ponto do tópico: **uma família de partículas é uma representação irredutível**. Os estados de um multipleto se transformam uns nos outros sob o grupo e nunca vazam para fora. O tamanho da família não é escolha da natureza entre valores possíveis: é a dimensão de uma representação irredutível, e a lista dessas dimensões é fixada pelo grupo.

**Por que as massas dentro do multipleto são próximas.** Numa representação irredutível, o Casimir de 10.4 vale o mesmo para todos os membros. Se a hamiltoniana comuta com todos os geradores — simetria exata —, todos os membros têm exatamente a mesma energia.

O isospin não é exato: as massas dos quarks $u$ e $d$ diferem, e o eletromagnetismo distingue o próton do nêutron porque um tem carga e o outro não. Então a degenerescência é aproximada, e a previsão é quantitativa: quebra pequena, separação pequena. Os 0,14 por cento entre próton e nêutron são a medida disso. Simetria aproximada não é simetria vaga — ela prevê o tamanho do desvio.

**A representação adjunta.** Todo grupo tem uma representação em que ele age sobre a própria álgebra. Ela se chama **adjunta**, e sua dimensão é a dimensão do grupo: 3 para $SU(2)$, 8 para $SU(3)$.

Os bósons de gauge vivem nela. É por isso que a contagem de 10.3 dá o número de mediadores: oito glúons porque a adjunta de $SU(3)$ tem dimensão 8.

**Combinar representações, e o que isso reproduz.** Duas partículas de spin $1/2$ formam um sistema cujo espaço é o produto das duas representações de dimensão 2, e esse produto se decompõe:

$$
\mathbf{2} \otimes \mathbf{2} = \mathbf{3} \oplus \mathbf{1} .
$$

Tripleto mais singleto — exatamente a soma de momentos angulares que a química usa para pares de elétrons, aqui obtida como decomposição de representações.

O mesmo mecanismo, com $SU(3)$ de sabor, dá $\mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{8} \oplus \mathbf{1}$ para quark e antiquark: o octeto de mésons. Foi assim que Gell-Mann organizou os hádrons conhecidos nos anos 1960 — e, ao organizá-los, encontrou um buraco. Uma posição do decupleto bariônico estava vazia, e a representação dizia qual carga, qual estranheza e, pelo espaçamento regular das massas, qual massa a partícula faltante deveria ter: cerca de 1680 MeV.

O $\Omega^-$ foi encontrado em 1964, com 1672 MeV. A teoria de representações fez uma previsão numérica de algo que ninguém tinha visto, e a previsão se confirmou.

**Wigner, e o que é uma partícula.** Em 1939, Wigner classificou as representações irredutíveis unitárias do grupo de Poincaré e propôs que **uma partícula elementar é uma dessas representações**. Os rótulos disponíveis são os dois Casimires do grupo: massa e spin.

Isso reorganiza uma frase que se costuma dizer sem examinar. "Toda partícula tem uma massa e um spin" não é observação empírica acumulada: é o resultado da classificação das representações do grupo de simetria do espaço-tempo. Não há outros rótulos porque não há outros Casimires.

E completa o tópico 9.5. Ali uma partícula era excitação de um campo; aqui se sabe *qual* excitação — a que corresponde a uma representação irredutível, com massa e spin definidos.

### A declaração

Uma representação é a realização de um grupo abstrato como operadores lineares sobre um espaço vetorial concreto, e sua dimensão nada tem a ver com a dimensão do grupo. Uma representação irredutível não se decompõe, e é ela que corresponde a uma família de partículas: o tamanho do multipleto é a dimensão da representação, e a igualdade do Casimir dentro dela explica a degenerescência de massa, exata quando a simetria é exata e aproximada quando não é.

### Onde se tropeça

- **Confundir dimensão da representação com dimensão do grupo.** $SU(2)$ tem dimensão 3 e representações de dimensão 1, 2, 3, 4 e assim por diante.
- **Achar que a representação fundamental "é" o grupo.** Ela é uma entre infinitas realizações.
- **Esperar degenerescência exata de uma simetria aproximada.** A separação de massa mede a quebra, e é isso que a torna testável.
- **Ler multipleto como agrupamento de conveniência.** Ele é o conjunto de estados que as transformações do grupo misturam entre si, e nunca com outros.
`,
      exercises: [
        {
          id: 'ex-10.5.1',
          question: 'O que fixa o tamanho de um multipleto de partículas?',
          options: [
            'A intensidade da interação entre elas.',
            'A dimensão de uma representação irredutível do grupo de simetria.',
            'A quantidade de parâmetros do grupo.',
            'O número de quarks que as compõem.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Os estados do multipleto se transformam uns nos outros e nunca vazam para fora — é a definição de irredutível. A lista de tamanhos possíveis é fixada pelo grupo, não escolhida.',
        },
        {
          id: 'ex-10.5.2',
          question: 'Próton e nêutron diferem em 0,14% na massa. Como a teoria de representações lê esse número?',
          options: [
            'Como coincidência sem significado.',
            'Como a medida da quebra do isospin: a degenerescência seria exata se a simetria fosse exata, e a pequena diferença de massa dos quarks u e d mais o eletromagnetismo produzem exatamente uma separação pequena.',
            'Como prova de que o isospin não existe.',
            'Como erro experimental.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Numa representação irredutível o Casimir é o mesmo para todos os membros. Simetria aproximada prevê o tamanho do desvio — e é isso que torna a hipótese testável em vez de vaga.',
        },
        {
          id: 'ex-10.5.3',
          question: 'Na classificação de Wigner, o que é uma partícula elementar?',
          options: [
            'O menor pedaço indivisível de matéria.',
            'Uma representação irredutível unitária do grupo de Poincaré, rotulada pelos dois Casimires do grupo: massa e spin.',
            'Uma solução da equação de Schrödinger com energia definida.',
            'Um pacote de onda localizado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É por isso que toda partícula tem massa e spin, e nenhum outro rótulo do mesmo tipo: não há outros Casimires. Junto com o tópico 9.5, isso diz qual excitação do campo é uma partícula.',
        },
      ],
    },

    {
      id: '10.6',
      title: '10.6. Simetrias globais',
      objetivo:
        'Distinguir simetrias do espaço-tempo das internas, e as exatas das aproximadas, acidentais e quebradas — que é o que separa usar simetria de acreditar nela.',
      prerequisitos: ['10.5', '5.7', '9.1'],
      fontes: ['tong-qft', 'ocw-8-323', 'usp-grupos-fisica'],
      content: String.raw`
### O problema

Com grupo, álgebra e representação na mão, cabe a pergunta empírica: que simetrias a natureza de fato tem?

A resposta não é uma lista uniforme. Algumas valem exatamente, outras só aproximadamente, algumas não foram impostas e apareceram sozinhas — e há as que a lagrangiana tem e o estado fundamental não. Confundir esses casos é o erro característico de quem aprendeu simetria como princípio estético.

### A construção

**Global quer dizer: a mesma transformação em todos os pontos.** Na linguagem de campos do tópico 9.1, uma simetria global age como $\phi(x) \to D(g)\,\phi(x)$ com o mesmo $g$ em toda parte. O teorema de Noether dá então uma corrente com $\partial_\mu j^\mu = 0$, e a carga conservada é sua integral no espaço.

**Duas famílias, e a distinção importa.** As simetrias **do espaço-tempo** agem sobre o argumento $x$: é o grupo de Poincaré, com os dez parâmetros contados em 10.2. As simetrias **internas** agem sobre índices que o campo carrega, deixando $x$ intocado — a fase de 4.7, cuja carga de Noether é a carga elétrica, é o exemplo mínimo.

**Isospin: a primeira simetria interna não trivial.** Em 1932, logo depois da descoberta do nêutron, Heisenberg propôs tratá-lo como o *mesmo* objeto que o próton em outro estado — um dupleto de um $SU(2)$ interno.

A evidência não era estética. As massas quase coincidem, e as forças nucleares medidas em espalhamento próton-próton, próton-nêutron e nêutron-nêutron são praticamente as mesmas depois de descontado o eletromagnetismo. O píon, no mesmo esquema, aparece como tripleto — dimensão 3, a representação adjunta de $SU(2)$ —, e é o que se observa: $\pi^+$, $\pi^0$, $\pi^-$.

**Aproximada, e com hierarquia.** Estendendo o grupo para $SU(3)$ de sabor, incluindo o quark estranho, a organização continua funcionando — mas pior. O isospin vale a cerca de 1 por cento; o $SU(3)$ de sabor, a 20 ou 30 por cento. A razão é direta: a quebra vem da diferença de massa dos quarks, e o quark estranho é muito mais pesado que $u$ e $d$. A qualidade da simetria acompanha o tamanho da quebra, o que é exatamente o que se espera de uma hipótese com conteúdo.

**Simetrias acidentais.** Este é o caso mais instrutivo. O número bariônico e o número leptônico **não foram impostos** ao Modelo Padrão. Escreveram-se os campos e todos os termos compatíveis com as simetrias de gauge e com a renormalizabilidade, e a conservação de $B$ e de $L$ apareceu de brinde, como consequência.

O que se segue disso é importante: uma simetria acidental **não é sagrada**. Ela vale enquanto valerem as hipóteses que a produziram. Efeitos não perturbativos do setor eletrofraco violam $B+L$ (preservando $B-L$), e praticamente toda extensão unificada viola o número bariônico, prevendo que o próton decaia. É previsão testável, e foi testada: o Super-Kamiokande estabelece vida média do próton acima de $10^{34}$ anos, o que já eliminou os modelos unificados mais simples.

Simetria acidental é, portanto, previsão da teoria — e testá-la é testar a teoria.

**Quebra explícita e quebra espontânea.** São coisas diferentes e o vocabulário as confunde. Na **explícita**, um termo da lagrangiana simplesmente viola a simetria: as massas dos quarks em relação ao isospin. Na **espontânea**, a lagrangiana é simétrica e o **estado fundamental** não é — a simetria continua lá, mas o vácuo escolheu uma direção.

O segundo caso tem um teorema: cada simetria global contínua espontaneamente quebrada deixa um bóson sem massa, o bóson de Goldstone. O módulo 22 desenvolve isso, e o módulo 13 usa a mesma ideia com um grupo de gauge.

Há um exemplo à mão, e ele é quantitativo. Os píons são leves demais — 140 MeV contra cerca de 940 do núcleon — e a razão é que eles são os quase-Goldstones da simetria quiral, quebrada espontaneamente. Não são exatamente sem massa porque a simetria não era exata desde o início. A massa pequena mede o quanto ela não era.

**As discretas, e o que a ausência de simetria ensina.** Paridade ($P$), conjugação de carga ($C$) e reversão temporal ($T$) são simetrias discretas, sem carga conservada associada — como 10.2 explicou.

A interação fraca **viola** $P$: o experimento de Wu, em 1957, com cobalto-60 polarizado, mostrou que os elétrons emitidos preferem uma direção em relação ao spin nuclear. A natureza distingue esquerda de direita. Em 1964, Christenson, Cronin, Fitch e Turlay mostraram que o produto $CP$ também é violado, no decaimento de káons neutros. Já $CPT$ é preservado, e não por acaso: é teorema em qualquer teoria quântica de campos local e invariante de Lorentz.

Vale terminar por onde isso deixa a física, sem arredondar. A violação de $CP$ é uma das três condições de Sakharov para que o universo tenha terminado com mais matéria que antimatéria. A quantidade dela presente no Modelo Padrão é **ordens de grandeza insuficiente** para explicar a assimetria observada. Isso é um problema em aberto, não um item resolvido — e é uma das razões pelas quais se procuram simetrias e setores além do Modelo Padrão, tema dos módulos 21 e 28.

### A declaração

Uma simetria global é aquela cujo parâmetro é o mesmo em todos os pontos do espaço-tempo, e por Noether gera uma corrente e uma carga conservadas. Elas se dividem em espaço-temporais e internas, e se classificam quanto à qualidade: exatas, aproximadas — com a quebra medindo o desvio —, acidentais, quando decorrem da estrutura da teoria sem terem sido impostas, e espontaneamente quebradas, quando valem para a lagrangiana mas não para o estado fundamental.

### Onde se tropeça

- **Tratar toda simetria como exata.** A maior parte das simetrias úteis em física de partículas é aproximada, e é do tamanho da quebra que se extrai previsão.
- **Achar que simetria acidental é acaso sem conteúdo.** É consequência da teoria, e portanto previsão testável — o decaimento do próton é o caso.
- **Confundir quebra explícita com espontânea.** Numa a lagrangiana perde a simetria; na outra, ela a mantém e o vácuo é que não a tem.
- **Supor que a existência de uma simetria é sempre a notícia.** A violação de $P$ e de $CP$ ensinou mais sobre a interação fraca do que qualquer simetria que ela respeita.
`,
      exercises: [
        {
          id: 'ex-10.6.1',
          question: 'O que distingue uma simetria interna de uma simetria do espaço-tempo?',
          options: [
            'A interna vale só dentro de átomos.',
            'A interna age sobre índices que o campo carrega, deixando o ponto x intocado; a de espaço-tempo age sobre o próprio x.',
            'A interna não gera quantidade conservada.',
            'A interna é sempre discreta.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A fase do tópico 4.7 é interna e sua carga de Noether é a carga elétrica; o grupo de Poincaré é de espaço-tempo e dá energia, momento e momento angular.',
        },
        {
          id: 'ex-10.6.2',
          question: 'O número bariônico é uma simetria acidental do Modelo Padrão. O que isso quer dizer?',
          options: [
            'Que ele é conservado por acaso, sem consequência alguma.',
            'Que não foi imposto: apareceu como consequência dos campos existentes e da renormalizabilidade — e por isso pode falhar, o que torna o decaimento do próton uma previsão testável.',
            'Que sua conservação é exata em qualquer teoria concebível.',
            'Que ele não é medido experimentalmente.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Simetria acidental vale enquanto valerem as hipóteses que a produziram. Efeitos não perturbativos violam B+L, extensões unificadas violam B, e o limite do Super-Kamiokande já descartou os modelos mais simples.',
        },
        {
          id: 'ex-10.6.3',
          question: 'Por que os píons são muito mais leves que o núcleon?',
          options: [
            'Porque contêm menos quarks.',
            'Porque são os quase-bósons de Goldstone da simetria quiral, quebrada espontaneamente — e sua massa pequena mede o quanto essa simetria já não era exata.',
            'Porque não sentem a interação forte.',
            'Porque têm spin zero.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A quebra espontânea de uma simetria global contínua deixa um bóson sem massa. Como a simetria quiral não era exata desde o início, o que sobra é um bóson leve, e não exatamente sem massa.',
        },
      ],
    },

    {
      id: '10.7',
      title: '10.7. Simetrias locais (gauge)',
      objetivo:
        'Ver o que muda quando o parâmetro da simetria varia de ponto a ponto — e entender por que uma simetria de gauge não é, a rigor, uma simetria.',
      prerequisitos: ['10.6', '4.7'],
      fontes: ['tong-gaugetheory', 'tong-qft', 'woit-grupos'],
      content: String.raw`
### O problema

O tópico 4.7 já fez este movimento uma vez, com $U(1)$, e obteve o eletromagnetismo inteiro. Duas coisas ficaram em aberto.

A primeira é o que muda quando o grupo é maior — e a resposta não é "mais do mesmo": aparece um fenômeno que $U(1)$ não tem. A segunda é mais incômoda. Aquele tópico descreveu a transformação de gauge como **redundância da descrição**, o que é uma coisa bem diferente de uma simetria, e seguiu chamando as duas pelo mesmo nome. Convém resolver isso antes de o módulo 11 construir todo o Modelo Padrão em cima.

### A construção

**O que "local" custa.** Numa simetria global, o parâmetro é o mesmo em toda parte, e a derivada do campo se transforma como o campo. Deixe o parâmetro variar, $g \to g(x)$, e isso se perde.

A razão é geométrica, e vale mais que a conta. A derivada compara o campo em dois pontos vizinhos. Com uma simetria local, cada ponto tem sua própria convenção — sua própria escolha de fase, ou de qual eixo interno chamar de primeiro. Subtrair valores medidos em convenções diferentes não significa nada, do mesmo modo que subtrair uma altura medida a partir do nível do mar de outra medida a partir do solo.

Para comparar é preciso uma regra que transporte a convenção de um ponto ao seguinte. Essa regra é um campo, e é ele que substitui a derivada comum pela **derivada covariante**:

$$
D_\mu = \partial_\mu - i g A_\mu .
$$

O campo $A_\mu$ não foi acrescentado por conveniência: sem ele não existe operação de derivada com significado. O módulo 11 monta a maquinaria — a derivada covariante em 11.5, o tensor de campo em 11.6.

**Quantos campos.** O parâmetro da transformação vive na álgebra de Lie, e o campo de conexão também: $A_\mu = A_\mu^a T^a$, com $a$ correndo de 1 até a dimensão do grupo.

Aqui a contagem de 10.3 entrega o resultado físico. O número de campos de gauge é a dimensão do grupo:

| Grupo | Dimensão | Campos de gauge |
| --- | --- | --- |
| $U(1)$ | 1 | o fóton |
| $SU(2)$ | 3 | três campos; dois se combinam nos $W^\pm$, e o terceiro se mistura com o campo de $U(1)$ para dar o $Z$ e o fóton |
| $SU(3)$ | 8 | os oito glúons |

**A novidade não abeliana.** Se o grupo é abeliano, os geradores comutam e nada de novo acontece — é o caso de 4.7. Se não é, o tensor de campo ganha um termo com o comutador dos campos, e esse termo não é decorativo: ele significa que **o campo de gauge carrega a carga da interação que ele medeia**.

O fóton não tem carga elétrica e não interage com fóton: dois feixes de luz se atravessam. O glúon tem carga de cor e interage com glúon. Dessa única diferença saem a liberdade assintótica e o confinamento — a força forte fica *fraca* a curta distância e não deixa quark escapar a longa —, assunto dos tópicos 11.7 e do módulo 23.

**Massa proibida.** Um termo de massa para o campo de gauge teria a forma $m^2 A_\mu A^\mu$, e ele **não é invariante de gauge**. A conclusão é dura: a simetria local proíbe que o mediador tenha massa.

O fóton não tem, e o glúon não tem. Mas o $W$ tem 80,4 GeV e o $Z$ tem 91,2 GeV, e alcance finito é justamente o que se observa na interação fraca. Ou a simetria não está lá, ou acontece algo mais sutil. É esta tensão, e não uma elegância abstrata, que o módulo 13 vem resolver.

**Gauge é redundância, não simetria.** Agora a parte que 4.7 deixou pendente.

Uma simetria global leva um estado físico a **outro** estado físico, distinto e com as mesmas propriedades. Uma transformação de gauge leva uma descrição a **outra descrição do mesmo estado**. São operações de natureza diferente, e a palavra "simetria" cobre as duas por acidente histórico.

A evidência é contábil e verificável. O campo $A_\mu$ tem quatro componentes. Uma é eliminada pela escolha de gauge, outra por um vínculo residual, e sobram **duas** — que são as duas polarizações da luz do tópico 4.6. Se as quatro componentes fossem físicas, a luz teria quatro polarizações. Não tem.

Disso decorrem duas afirmações que convém guardar:

- Uma simetria de gauge não é uma propriedade da natureza que se possa medir; é uma propriedade da linguagem com que se descreve partícula de spin 1 sem massa. O que é mensurável é o subgrupo global correspondente — a conservação da carga.
- A expressão "quebra espontânea da simetria de gauge", que o módulo 13 vai usar e que é consagrada na literatura, abrevia algo mais preciso do que diz. Uma redundância de descrição não quebra. O que muda é o estado fundamental num gauge fixado, e o que se observa é o resultado: alcance finito, mediador massivo.

Guardar isso agora evita ler o módulo 13 como mágica.

### A declaração

Uma simetria local, ou de gauge, é aquela cujo parâmetro pode ser escolhido independentemente em cada ponto do espaço-tempo. Exigi-la torna a derivada comum inadequada — pois ela compara valores expressos em convenções diferentes — e obriga a introduzir um campo de conexão com tantas componentes quantos forem os geradores do grupo; quando o grupo é não abeliano, esse campo carrega a própria carga que medeia. E, ao contrário da simetria global, ela não relaciona estados físicos distintos: relaciona descrições do mesmo estado.

### Onde se tropeça

- **Ler gauge como simetria física.** Ela é redundância da descrição; o que se mede é o subgrupo global, isto é, a carga conservada.
- **Achar que o campo de gauge é um acréscimo conveniente.** Sem ele não há derivada com significado quando o parâmetro é local.
- **Esperar que o fóton interaja consigo mesmo.** Só o caso não abeliano tem auto-acoplamento, e é dele que vêm confinamento e liberdade assintótica.
- **Contar as componentes de $A_\mu$ como graus de liberdade.** São quatro componentes e duas polarizações, e a diferença é exatamente a medida da redundância.
`,
      exercises: [
        {
          id: 'ex-10.7.1',
          question: 'Por que a derivada comum deixa de servir quando a simetria é local?',
          options: [
            'Porque ela deixa de existir matematicamente.',
            'Porque ela compara o campo em pontos vizinhos, e com simetria local cada ponto tem sua própria convenção — a diferença entre valores medidos em convenções distintas não significa nada.',
            'Porque o campo passa a ser descontínuo.',
            'Porque a velocidade da luz é finita.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É por isso que se precisa de uma regra de transporte entre pontos, e essa regra é o campo de gauge. Ele não é acrescentado por gosto: sem ele não há derivada com significado.',
        },
        {
          id: 'ex-10.7.2',
          question: 'Qual é a diferença física entre uma teoria de gauge abeliana e uma não abeliana?',
          options: [
            'A não abeliana tem mais partículas de matéria.',
            'Na não abeliana o campo de gauge carrega a própria carga que medeia, e portanto interage consigo mesmo — de onde vêm liberdade assintótica e confinamento.',
            'A abeliana não conserva carga.',
            'A não abeliana só vale a baixas energias.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O tensor de campo ganha um termo com o comutador dos campos, que só se anula no caso abeliano. Fótons se atravessam; glúons interagem com glúons.',
        },
        {
          id: 'ex-10.7.3',
          question: 'Em que sentido uma simetria de gauge não é uma simetria?',
          options: [
            'Ela não é: gauge e simetria global são exatamente a mesma coisa.',
            'Uma simetria global leva um estado físico a outro estado físico distinto; uma transformação de gauge leva uma descrição a outra descrição do mesmo estado — e a contagem confirma: Aμ tem quatro componentes e a luz tem duas polarizações.',
            'Porque ela só vale aproximadamente.',
            'Porque ela não tem geradores.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É redundância da descrição, não propriedade mensurável da natureza. O que se mede é o subgrupo global — a conservação da carga. Guardar isso evita ler a quebra do módulo 13 como mágica.',
        },
      ],
    },
  ],
};
