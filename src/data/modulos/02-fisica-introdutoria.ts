import type { Module } from '../../types';

export const fisicaIntrodutoria: Module = {
  id: '2',
  title: '2. Física Introdutória',
  descricao:
    'Da descrição do movimento às suas causas, e daí às duas grandezas que se conservam. É o esqueleto de que todo o resto depende.',
  subtopics: [
    {
      id: '2.1',
      title: '2.1. Grandezas físicas',
      objetivo:
        'Entender que medir é comparar com um padrão — e usar análise dimensional para conferir qualquer equação.',
      fontes: ['libretexts-fisica-pt', 'openstax-fisica-1', 'feynman-i', 'ocw-8-01'],
      content: String.raw`
### O problema

Antes de descobrir uma lei, é preciso ter o que medir. E medir é sempre comparar com um padrão combinado: dizer que a mesa tem 2 metros é dizer que ela contém duas vezes o metro. Se o padrão muda, todos os números mudam — por isso a definição das unidades é assunto sério, e não burocracia.

### A construção

**Grandezas de base.** O Sistema Internacional escolhe sete grandezas independentes e define tudo o mais a partir delas. Em mecânica, três bastam: comprimento (metro, $\text{m}$), massa (quilograma, $\text{kg}$) e tempo (segundo, $\text{s}$). Velocidade, força e energia são grandezas derivadas — combinações dessas.

**Padrões que não dependem de objetos.** O SI moderno abandonou os artefatos físicos. O segundo é definido por uma transição do átomo de césio-133; o metro, fixando a velocidade da luz em exatamente $299\,792\,458\ \text{m/s}$; e desde 2019 o quilograma é definido fixando o valor da constante de Planck. A lógica é a mesma nos três casos: em vez de guardar um objeto num cofre em Paris, fixa-se uma constante da natureza — que é a mesma em qualquer laboratório do universo.

**Análise dimensional.** Toda equação física tem de ser dimensionalmente homogênea: os dois lados precisam ter a mesma dimensão. Isso dá uma ferramenta de verificação gratuita e poderosa. Energia tem dimensão de $\text{massa} \times \text{comprimento}^2 / \text{tempo}^2$; confira:

$$
[E_c] = \left[\tfrac{1}{2}mv^2\right] = \text{kg} \cdot \left(\frac{\text{m}}{\text{s}}\right)^2 = \frac{\text{kg}\cdot\text{m}^2}{\text{s}^2} = \text{J}.
$$

E o mesmo vale para $E = mc^2$, o que é uma pista de que as duas expressões falam da mesma grandeza. Se num cálculo longo os dois lados não batem dimensionalmente, há erro — sem precisar refazer a conta.

**Ordens de grandeza.** Antes de calcular exato, calcule aproximado. Estimar que um adulto tem massa da ordem de $10^2\ \text{kg}$ e que um próton tem $10^{-27}\ \text{kg}$ já organiza o problema. Essa disciplina — chamada estimativa de Fermi — separa quem entende física de quem apenas manipula fórmulas.

### A declaração

Grandeza física é toda propriedade que se pode medir, expressa por um número acompanhado de uma unidade. As grandezas de base do SI são definidas fixando constantes fundamentais da natureza; as demais são derivadas delas. A homogeneidade dimensional é condição necessária de validade para qualquer equação física.

### Onde se tropeça

- **Reportar um número sem unidade.** "A resposta é 9,8" não é uma resposta física.
- **Confundir massa com peso.** Massa é uma propriedade do corpo, medida em kg; peso é a força gravitacional sobre ele, medida em newtons, e muda com o local.
- **Escrever mais algarismos do que a medida sustenta.** Se você mediu com régua de milímetro, o resultado não tem seis casas decimais.
`,
      exercises: [
        {
          id: 'ex-2.1.1',
          question: 'Qual é a unidade de base de comprimento no Sistema Internacional?',
          options: ['Quilômetro', 'Centímetro', 'Metro', 'Milha'],
          correctAnswerIndex: 2,
          explanation:
            'O metro é a unidade de base. Quilômetro e centímetro são múltiplos e submúltiplos dele; a milha não pertence ao SI.',
        },
        {
          id: 'ex-2.1.2',
          question: 'Por que o quilograma passou a ser definido pela constante de Planck em 2019?',
          options: [
            'Porque o cilindro de platina guardado em Paris era pequeno demais.',
            'Porque uma constante da natureza é a mesma em qualquer lugar, enquanto um artefato pode se alterar com o tempo.',
            'Porque a constante de Planck é mais fácil de medir que a massa.',
            'Porque o SI decidiu abandonar o quilograma como unidade de base.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Padrões materiais mudam: o protótipo internacional divergiu de suas cópias ao longo de um século. Fixar uma constante fundamental torna a definição reprodutível em qualquer laboratório.',
        },
        {
          id: 'ex-2.1.3',
          question: 'Um estudante obtém, para uma energia, o resultado "12 kg·m/s²". O que a análise dimensional diz?',
          options: [
            'Está correto: essa é a unidade de energia.',
            'Está errado: kg·m/s² é a dimensão de força; energia é kg·m²/s².',
            'Está correto, mas seria melhor escrever em joules.',
            'Não é possível concluir nada sem saber o valor numérico.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'kg·m/s² é o newton, unidade de força. Falta um fator de comprimento: energia é força × distância, ou seja, kg·m²/s² = joule. A incompatibilidade dimensional denuncia o erro sem refazer a conta.',
        },
      ],
    },

    {
      id: '2.2',
      title: '2.2. Cinemática',
      objetivo:
        'Descrever o movimento com precisão — posição, velocidade e aceleração — antes de perguntar o que o causa.',
      prerequisitos: ['1.7', '2.1'],
      fontes: ['ocw-8-01', 'openstax-fisica-1', 'tong-dynamics'],
      content: String.raw`
### O problema

Galileu percebeu que era preciso separar duas perguntas que a física aristotélica misturava: *como* um corpo se move e *por que* ele se move. A cinemática trata só da primeira. Restringir a pergunta parece uma perda, mas é o que torna o problema solúvel.

### A construção

**Posição, velocidade, aceleração.** Tudo parte da função posição $x(t)$. A velocidade é sua taxa de variação e a aceleração é a taxa de variação da velocidade:

$$
v(t) = \frac{dx}{dt}, \qquad a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2}.
$$

É a única definição consistente com o velocímetro: velocidade média é deslocamento sobre intervalo, e a instantânea é o limite quando o intervalo tende a zero — a derivada do módulo 1.7.

**Média não é instantânea.** Percorrer 100 km em 2 h dá média de 50 km/h, o que não impede que em nenhum instante o velocímetro tenha marcado 50. A média descarta a história interna do percurso.

**Movimento com aceleração constante.** Integrando $a$ constante duas vezes (módulo 1.8):

$$
v(t) = v_0 + a t, \qquad x(t) = x_0 + v_0 t + \tfrac{1}{2}a t^2.
$$

Eliminando o tempo entre as duas, obtém-se a relação de Torricelli, $v^2 = v_0^2 + 2a\,\Delta x$, útil justamente quando não se conhece o tempo. Nenhuma dessas fórmulas precisa ser decorada: as três saem de integrar uma aceleração constante.

**Queda livre.** Perto da superfície da Terra, $a = g \approx 9{,}8\ \text{m/s}^2$ para baixo, independentemente da massa — o resultado contraintuitivo de Galileu. Uma pena cai mais devagar por causa do ar, não da gravidade; no vácuo, pena e martelo chegam juntos, o que os astronautas da Apollo 15 demonstraram na Lua.

**Movimento em duas dimensões.** A grande simplificação: componentes horizontais e verticais são independentes. Num lançamento, o movimento horizontal é uniforme e o vertical é uniformemente acelerado, e é por isso que uma bala disparada horizontalmente e outra simplesmente solta da mesma altura tocam o chão **no mesmo instante**.

### A declaração

Cinemática é a descrição do movimento em termos de posição, velocidade e aceleração, sem referência às suas causas. Velocidade é a derivada da posição no tempo; aceleração, a derivada da velocidade. Sob aceleração constante, o movimento é completamente determinado pela posição e velocidade iniciais.

### Onde se tropeça

- **Confundir distância com deslocamento.** Ida e volta ao mesmo ponto dá deslocamento zero, mas distância percorrida não nula.
- **Achar que velocidade nula implica aceleração nula.** No ponto mais alto de um lançamento vertical a velocidade é zero e a aceleração continua sendo $g$.
- **Somar velocidades perpendiculares como escalares.** Elas se compõem vetorialmente, como no módulo 1.5.
`,
      exercises: [
        {
          id: 'ex-2.2.1',
          question: 'Um carro percorre 100 km em 2 horas numa estrada reta. Sua velocidade média é:',
          options: ['100 km/h', '200 km/h', '50 km/h', '25 km/h'],
          correctAnswerIndex: 2,
          explanation:
            'Velocidade média é deslocamento dividido por intervalo de tempo: 100 km ÷ 2 h = 50 km/h. Isso nada diz sobre a velocidade em cada instante.',
        },
        {
          id: 'ex-2.2.2',
          question: 'No ponto mais alto da trajetória de uma bola lançada verticalmente para cima:',
          options: [
            'Velocidade e aceleração são ambas nulas.',
            'A velocidade é nula, mas a aceleração continua valendo g, apontando para baixo.',
            'A aceleração é nula e a velocidade é máxima.',
            'A aceleração inverte de sentido e aponta para cima.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A velocidade passa por zero ao inverter de sentido, mas a gravidade não deixa de agir em nenhum instante. Velocidade nula e aceleração nula são coisas independentes.',
        },
        {
          id: 'ex-2.2.3',
          question: 'Uma bala é disparada horizontalmente enquanto outra é simplesmente solta da mesma altura. Desprezando o ar:',
          options: [
            'A bala disparada chega ao chão bem depois.',
            'A bala solta chega bem antes, porque não tem velocidade horizontal.',
            'As duas tocam o chão no mesmo instante.',
            'Depende da velocidade do disparo.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Os movimentos horizontal e vertical são independentes. A queda vertical é governada só por g e pela altura inicial, que são iguais nos dois casos.',
        },
      ],
    },

    {
      id: '2.3',
      title: '2.3. Dinâmica Newtoniana',
      objetivo:
        'Entender as três leis de Newton como um sistema — inclusive por que a primeira não é caso particular da segunda.',
      prerequisitos: ['1.5', '2.2'],
      fontes: ['libretexts-fisica-pt', 'ocw-8-01', 'feynman-i', 'tong-dynamics'],
      content: String.raw`
### O problema

A cinemática descreve o movimento; falta explicá-lo. Por que a maçã cai e a Lua não? Aristóteles supunha que manter movimento exige força continuamente aplicada — o que a experiência cotidiana parece confirmar, já que tudo para quando você para de empurrar. A ruptura de Newton foi perceber que o que faz parar é o atrito, não a ausência de força motora.

### A construção

**Primeira lei (inércia).** Um corpo livre de forças resultantes mantém velocidade constante — parado ou em linha reta com rapidez constante. Ela não é um caso particular da segunda: seu papel é *definir* em que referenciais as outras leis valem. Referencial inercial é aquele em que a primeira lei se verifica, e é só neles que $\vec{F} = m\vec{a}$ pode ser aplicada diretamente. Num ônibus freando, você é jogado para a frente sem que força alguma o empurre — o referencial é que não é inercial.

**Segunda lei.** A forma geral, e mais fiel a Newton, é

$$
\vec{F} = \frac{d\vec{p}}{dt}, \qquad \vec{p} = m\vec{v},
$$

que se reduz a $\vec{F} = m\vec{a}$ quando a massa é constante. A versão com momento é a que sobrevive a massa variável (um foguete queimando combustível) e a que se generaliza na relatividade. Note que é uma equação vetorial: força e aceleração têm sempre a mesma direção e sentido.

**Terceira lei.** Se A exerce força sobre B, B exerce sobre A uma força de mesmo módulo e sentido oposto. O ponto crítico, e a origem de quase toda confusão: **as duas forças agem em corpos diferentes** e por isso nunca se cancelam. O cavalo puxa a carroça e a carroça puxa o cavalo — o que move a carroça é a força sobre *ela*; o que move o cavalo é o atrito do chão sobre seus cascos.

**Momento e sua conservação.** Somando a terceira lei sobre um sistema isolado, as forças internas se cancelam aos pares e resta

$$
\frac{d\vec{P}_{\text{total}}}{dt} = 0.
$$

O momento total se conserva. É por isso que uma arma recua, que um foguete acelera no vácuo sem ter em que se apoiar, e que colisões podem ser analisadas sem saber nada sobre os detalhes da força durante o impacto — o que é enorme, porque essa força é complicada e breve demais para ser medida.

**Gravitação.** A mesma lei que faz a maçã cair mantém a Lua em órbita:

$$
F = G\frac{m_1 m_2}{r^2}.
$$

A unificação do céu com a Terra num único sistema de leis é o feito que fundou a física moderna. A Lua está em queda livre permanente — só que sua velocidade tangencial faz com que ela erre a Terra continuamente.

### A declaração

A dinâmica newtoniana afirma que a taxa de variação do momento de um corpo é igual à força resultante sobre ele, em referenciais inerciais, e que toda interação é mútua e simétrica. Dessas leis segue que o momento total de um sistema isolado se conserva.

### Onde se tropeça

- **Achar que o par ação–reação se cancela.** Se cancelasse, nada aceleraria. As forças atuam em corpos distintos.
- **Confundir força com movimento.** Movimento uniforme não exige força; força é necessária para *mudar* o movimento.
- **Usar $F = ma$ em referencial acelerado.** Ali é preciso introduzir forças fictícias (centrífuga, Coriolis), que existem por causa da escolha do referencial.
`,
      exercises: [
        {
          id: 'ex-2.3.1',
          question: 'Segundo a terceira lei, se a Terra puxa seu corpo para baixo, então:',
          options: [
            'Você não exerce força alguma sobre a Terra.',
            'Você flutua lentamente.',
            'Seu corpo puxa a Terra com força de mesmo módulo e sentido oposto.',
            'O ar compensa a diferença de forças.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'A atração é mútua e simétrica. A Terra praticamente não acelera porque sua massa é enorme, mas a força que ela recebe tem o mesmo módulo da que exerce.',
        },
        {
          id: 'ex-2.3.2',
          question: 'Por que a primeira lei de Newton não é apenas um caso particular da segunda (F = 0 ⟹ a = 0)?',
          options: [
            'Porque ela vale só para corpos em repouso.',
            'Porque seu papel é definir quais referenciais são inerciais — isto é, onde a segunda lei pode ser aplicada.',
            'Porque foi enunciada antes da segunda.',
            'Porque trata de forças de contato, e a segunda de forças a distância.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sem a primeira lei, F = ma não teria domínio de validade especificado. Ela seleciona a classe de referenciais em que a dinâmica funciona sem forças fictícias.',
        },
        {
          id: 'ex-2.3.3',
          question: 'Um foguete acelera no vácuo porque:',
          options: [
            'Os gases expelidos empurram contra o ar externo.',
            'O momento total se conserva: ao lançar gases para trás, o foguete adquire momento para a frente.',
            'A gravidade é menor no espaço.',
            'A massa do foguete aumenta durante a queima.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Nada precisa ser empurrado do lado de fora. O sistema foguete + gases é isolado, e o momento total permanece constante — daí a velocidade adquirida na direção oposta à dos gases.',
        },
      ],
    },

    {
      id: '2.4',
      title: '2.4. Trabalho e Energia',
      objetivo:
        'Ver de onde vem a conservação da energia e por que ela simplifica problemas que a dinâmica resolveria com dificuldade.',
      prerequisitos: ['1.8', '2.3'],
      fontes: ['feynman-i', 'ocw-8-01', 'openstax-fisica-1'],
      content: String.raw`
### O problema

Com $\vec{F} = m\vec{a}$ é possível, em princípio, resolver qualquer problema de mecânica. Na prática, muitos ficam intratáveis — pense num carrinho de montanha-russa numa curva complicada, em que a direção da força muda a cada ponto. Existe um atalho: uma grandeza que, se não se perde, permite comparar o começo com o fim sem acompanhar o meio.

### A construção

**Trabalho.** O trabalho de uma força ao longo de um deslocamento é

$$
W = \vec{F} \cdot \vec{d} = |\vec{F}||\vec{d}|\cos\theta,
$$

e no caso geral, uma integral ao longo do caminho. O produto escalar do módulo 1.5 já entrega a consequência mais estranha: empurrar uma parede o dia inteiro sem movê-la realiza trabalho *nulo*, e carregar uma mala em terreno plano também — a força é vertical, o deslocamento é horizontal, $\cos 90^\circ = 0$. Seu cansaço é real, mas é metabólico, não mecânico.

**Energia cinética.** Partindo de $F = ma$ e integrando ao longo do deslocamento, chega-se ao teorema do trabalho–energia:

$$
W_{\text{total}} = \Delta E_c, \qquad E_c = \frac{1}{2}mv^2.
$$

O fator $v^2$ tem consequência prática severa: dobrar a velocidade quadruplica a energia cinética, e portanto a distância de frenagem. É a razão física de limites de velocidade.

**Energia potencial.** Para certas forças — chamadas conservativas —, o trabalho depende só dos pontos inicial e final, não do caminho. Para essas, o trabalho pode ser escrito como perda de uma função da posição, a energia potencial. Perto da superfície da Terra,

$$
E_p = mgh.
$$

O atrito não é conservativo: quanto mais longo o caminho, mais energia dissipada — e por isso não existe "energia potencial de atrito".

**Conservação da energia mecânica.** Na ausência de forças dissipativas,

$$
E_c + E_p = \text{constante}.
$$

Daí sai, em uma linha, a velocidade de um corpo que cai de altura $h$: iguale $mgh$ a $\frac{1}{2}mv^2$ e obtenha $v = \sqrt{2gh}$, sem resolver equação de movimento nenhuma. E vale para qualquer trajetória sem atrito — escorregador reto, curvo ou em espiral dão a mesma velocidade final.

**Por que a energia se conserva.** A resposta profunda não é newtoniana. O teorema de Noether (módulo 5.7) mostra que a conservação da energia decorre de o resultado de um experimento não depender de *quando* ele é feito — a simetria das leis físicas sob translação no tempo. Conservação não é um fato bruto: é a sombra de uma simetria.

### A declaração

Trabalho é a transferência de energia realizada por uma força ao longo de um deslocamento, dado pelo produto escalar entre força e deslocamento. A energia cinética é a energia associada ao movimento e a potencial, à configuração. Na ausência de dissipação, a soma das duas permanece constante — e essa conservação decorre da invariância das leis físicas por translação temporal.

### Onde se tropeça

- **Achar que esforço implica trabalho.** Segurar peso parado gasta calorias e realiza trabalho mecânico nulo.
- **Tratar energia como substância.** É uma grandeza contável, não um fluido armazenado em recipientes.
- **Esquecer que o atrito não some com a energia.** Ela vira energia térmica: a conservação continua valendo no balanço completo.
`,
      exercises: [
        {
          id: 'ex-2.4.1',
          question: 'Ao puxar a flecha de um arco e mantê-la retesada, o que está armazenado é:',
          options: ['Energia térmica.', 'Energia cinética.', 'Energia potencial elástica.', 'Trabalho gravitacional.'],
          correctAnswerIndex: 2,
          explanation:
            'A deformação elástica do arco armazena energia potencial, que se converte em cinética da flecha ao ser liberada.',
        },
        {
          id: 'ex-2.4.2',
          question: 'Um carro dobra sua velocidade. Sua distância de frenagem, mantidas as demais condições:',
          options: ['Dobra.', 'Quadruplica.', 'Fica igual.', 'Aumenta 50%.'],
          correctAnswerIndex: 1,
          explanation:
            'A energia cinética é ½mv² e cresce com o quadrado da velocidade. Como o atrito dissipa energia proporcionalmente à distância percorrida, é preciso quatro vezes mais espaço.',
        },
        {
          id: 'ex-2.4.3',
          question: 'Segundo o teorema de Noether, a conservação da energia é consequência de:',
          options: [
            'A matéria não poder ser criada nem destruída.',
            'As leis da física não dependerem do instante em que o experimento é realizado.',
            'A força gravitacional decair com o quadrado da distância.',
            'A energia cinética ser sempre positiva.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cada simetria contínua gera uma lei de conservação. Invariância por translação no tempo gera conservação de energia; por translação no espaço, conservação de momento; por rotação, momento angular.',
        },
      ],
    },
  ],
};
