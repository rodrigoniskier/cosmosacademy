import type { Module } from '../../types';

export const teoriaQuanticaDeCampos: Module = {
  id: '9',
  title: '9. Teoria Quântica de Campos (TQC)',
  descricao:
    'A síntese de quântica com relatividade restrita: partículas deixam de ser objetos e passam a ser excitações de campos que preenchem o espaço.',
  subtopics: [
    {
      id: '9.1',
      title: '9.1. Campos clássicos',
      objetivo:
        'Passar de graus de liberdade discretos para contínuos — e aprender a escrever teorias pela densidade lagrangiana.',
      prerequisitos: ['5.3', '6.4'],
      fontes: ['tong-qft', 'tong-teaching', 'tong-em'],
      content: String.raw`
### O problema

A mecânica analítica do módulo 5 descreve sistemas com um número finito de coordenadas $q_i(t)$. Um campo é outra coisa: ele tem um valor em **cada ponto do espaço**, o que significa infinitos graus de liberdade — um por ponto. Antes de quantizar, é preciso saber como fazer mecânica analítica com isso.

### A construção

**A troca de rótulo.** Em vez de $q_i(t)$ com $i$ discreto, escreve-se $\phi(x, t)$, com a posição $x$ deixando de ser variável dinâmica e virando **rótulo** — ela ocupa o papel que o índice $i$ tinha. A variável dinâmica é o valor do campo em cada ponto.

Isso muda uma coisa importante de interpretação: em teoria de campos, $x$ não é "onde a partícula está". É um endereço, e o campo tem valor lá quer haja partícula ou não.

**Densidade lagrangiana.** A ação vira uma integral sobre o espaço-tempo inteiro:

$$
S = \int \mathcal{L}\left(\phi, \partial_\mu\phi\right) d^4x .
$$

Aqui está o ganho da notação de 6.4: escrever $d^4x$ e usar índices $\mu$ deixa a invariância de Lorentz **visível**. Se $\mathcal{L}$ é um escalar de Lorentz, a teoria respeita a relatividade por construção, sem verificação caso a caso.

**Euler–Lagrange para campos.** O mesmo princípio de ação estacionária de 5.1, aplicado a este funcional, dá

$$
\partial_\mu\left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0 .
$$

Compare com a equação de 5.3: a estrutura é idêntica, com a derivada temporal substituída pela quadridivergência. Não há teoria nova aqui; há a mesma teoria com mais graus de liberdade.

**O eletromagnetismo como exemplo.** Toda a física do módulo 4 cabe numa linha. Com o tensor de campo construído a partir do potencial $A_\mu$, a densidade lagrangiana

$$
\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} - A_\mu J^\mu
$$

produz, por Euler–Lagrange, as equações de Maxwell. As quatro equações de 4.5 são consequência de **uma** expressão escalar. E a invariância de gauge de 4.7 fica manifesta: $F_{\mu\nu}$ não muda sob transformação de gauge, logo $\mathcal{L}$ também não.

**Noether para campos.** O teorema de 5.7 se estende, e agora produz **correntes conservadas** em vez de números: a cada simetria contínua corresponde uma corrente $j^\mu$ com $\partial_\mu j^\mu = 0$, cuja integral no espaço é a carga conservada. Da invariância por translação no espaço-tempo sai justamente o tensor energia-momento de 6.6 — o que fecha o círculo: aquele tensor não foi inventado, ele **é** a corrente de Noether das translações.

### A declaração

Um campo clássico é uma variável dinâmica definida em cada ponto do espaço-tempo, cuja evolução decorre do princípio de ação estacionária aplicado a uma densidade lagrangiana. Escrita como escalar de Lorentz, essa densidade garante invariância relativística por construção, e suas simetrias contínuas produzem correntes conservadas pelo teorema de Noether.

### Onde se tropeça

- **Ler $x$ como grau de liberdade.** Em teoria de campos ele é rótulo; o grau de liberdade é o valor de $\phi$ ali.
- **Achar que a teoria de campos substitui a mecânica analítica.** É a mesma mecânica analítica com índice contínuo.
- **Esquecer que $\mathcal{L}$ é densidade.** A lagrangiana é sua integral no espaço.
`,
      exercises: [
        {
          id: 'ex-9.1.1',
          question: 'Ao passar de partículas para campos, qual é o papel da coordenada x?',
          options: [
            'Continua sendo a variável dinâmica, agora contínua.',
            'Deixa de ser variável dinâmica e vira rótulo — ocupa o lugar que o índice i tinha em qᵢ(t).',
            'Desaparece do formalismo.',
            'Passa a depender do tempo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A variável dinâmica é o valor do campo em cada ponto. E x não é "onde a partícula está": é um endereço, e o campo tem valor lá haja partícula ou não.',
        },
        {
          id: 'ex-9.1.2',
          question: 'Por que se exige que a densidade lagrangiana seja um escalar de Lorentz?',
          options: [
            'Para simplificar as integrais.',
            'Porque assim a invariância relativística da teoria fica garantida por construção, sem verificação caso a caso.',
            'Porque escalares são mais fáceis de quantizar.',
            'Porque a energia precisa ser positiva.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a estratégia introduzida em 6.4: se os objetos da equação se transformam de modo definido, a validade em todo referencial vira propriedade da sintaxe.',
        },
        {
          id: 'ex-9.1.3',
          question: 'O tensor energia-momento do tópico 6.6, na linguagem de campos, é:',
          options: [
            'Um objeto independente, postulado à parte.',
            'A corrente de Noether associada à invariância por translações no espaço-tempo.',
            'A densidade lagrangiana do campo eletromagnético.',
            'O gerador das transformações de gauge.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Ele não foi inventado: emerge do teorema de Noether aplicado a translações. É o mesmo teorema do módulo 5, agora produzindo correntes em vez de números.',
        },
      ],
    },

    {
      id: '9.2',
      title: '9.2. Campos escalares',
      objetivo:
        'Estudar o campo mais simples possível — e ver a equação de Klein-Gordon exibir o problema que a teoria de campos veio resolver.',
      prerequisitos: ['9.1'],
      fontes: ['tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

Antes de encarar o eletromagnetismo ou o Modelo Padrão, convém ter um campo o mais simples que existe: sem índices, sem direção, um número real em cada ponto. É o campo escalar, e ele carrega quase toda a estrutura da teoria.

### A construção

**A lagrangiana.** Para um campo escalar real de massa $m$:

$$
\mathcal{L} = \frac{1}{2}\partial_\mu\phi\,\partial^\mu\phi - \frac{1}{2}m^2\phi^2 .
$$

O primeiro termo é cinético; o segundo é um termo de massa. Aplicando Euler–Lagrange de 9.1, obtém-se a equação de Klein–Gordon:

$$
\left(\partial_\mu\partial^\mu + m^2\right)\phi = 0 .
$$

**A leitura correta do termo de massa.** Convém dizer com clareza, porque a confusão é comum: massa, em teoria de campos, **não** é uma propriedade que uma bolinha carrega. É o coeficiente do termo quadrático da lagrangiana. Ele determina a relação entre energia e momento das excitações do campo — e, mais concretamente, o alcance da força mediada por ele. Campo sem massa dá força de alcance infinito, como o eletromagnetismo; campo massivo dá alcance finito, da ordem de $\hbar/mc$. É por isso que o módulo 13 pode falar em "dar massa" a um campo: significa gerar esse coeficiente.

**O fracasso instrutivo.** Klein–Gordon foi originalmente proposta como equação de onda relativística para *uma partícula*, no lugar da equação de Schrödinger. Como tal, ela falha, e vale entender por quê.

Sendo de **segunda** ordem no tempo — ao contrário de Schrödinger, que é de primeira —, ela exige duas condições iniciais, e a densidade de probabilidade que se constrói a partir dela pode ser **negativa**. Uma probabilidade negativa não significa nada. Além disso, ela admite soluções de energia negativa, sem limite inferior: o sistema poderia decair indefinidamente.

**A saída, que é a virada conceitual do módulo.** Não se conserta a interpretação de uma partícula — abandona-se ela. A relatividade permite converter energia em massa (tópico 6.5), então **o número de partículas não é conservado**: com energia suficiente, pares se criam. Uma teoria relativística de uma partícula é, por isso, um projeto incoerente desde a origem.

Reinterpretado $\phi$ como **campo quantizado**, tudo se resolve: a quantidade problemática deixa de ser densidade de probabilidade e passa a ser densidade de **carga**, que pode legitimamente ter os dois sinais — partícula e antipartícula. E as soluções de energia negativa viram estados de antipartícula com energia positiva.

**O campo escalar na natureza.** Por décadas ele foi o exemplo pedagógico sem exemplar conhecido. Isso mudou em 2012: o **bóson de Higgs** é o primeiro campo escalar fundamental observado. E, em cosmologia, campos escalares fazem trabalho pesado — o inflaton do módulo 20 e os modelos de quintessência são exatamente isto.

### A declaração

O campo escalar é o campo mais simples, sem índices e com um valor por ponto, cuja dinâmica livre é dada pela equação de Klein-Gordon. O termo quadrático de sua lagrangiana define a massa das excitações; sua interpretação como equação de uma única partícula falha, e essa falha é o argumento de que a descrição correta é em termos de campos quantizados.

### Onde se tropeça

- **Ler massa como propriedade de um objeto.** É o coeficiente do termo quadrático, e fixa o alcance da interação.
- **Tratar Klein–Gordon como "Schrödinger relativística".** Ela não funciona nesse papel, e a falha é informativa.
- **Achar que campos escalares são apenas didáticos.** O Higgs é um, e o inflaton provavelmente também.
`,
      exercises: [
        {
          id: 'ex-9.2.1',
          question: 'Em teoria de campos, o que é a massa de um campo?',
          options: [
            'A quantidade de matéria que ele contém.',
            'O coeficiente do termo quadrático da lagrangiana, que fixa a relação energia-momento das excitações e o alcance da força mediada.',
            'A energia do estado fundamental.',
            'O número de partículas presentes.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Campo sem massa dá força de alcance infinito, como o eletromagnetismo; campo massivo dá alcance da ordem de ℏ/mc. É por isso que faz sentido dizer que o Higgs "dá massa" a um campo.',
        },
        {
          id: 'ex-9.2.2',
          question: 'Por que a equação de Klein-Gordon falha como equação de uma única partícula?',
          options: [
            'Porque não é invariante de Lorentz.',
            'Porque produz densidade de probabilidade que pode ser negativa e admite energias negativas sem limite inferior.',
            'Porque não tem soluções.',
            'Porque só vale para partículas sem massa.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sendo de segunda ordem no tempo, ela não permite a interpretação probabilística de Schrödinger. Reinterpretada como campo quantizado, a quantidade problemática vira densidade de carga — que pode ter os dois sinais.',
        },
        {
          id: 'ex-9.2.3',
          question: 'Qual é o argumento de fundo contra qualquer teoria relativística de uma única partícula?',
          options: [
            'A dificuldade matemática das equações.',
            'A relatividade permite converter energia em massa, logo o número de partículas não se conserva: com energia suficiente, pares são criados.',
            'A velocidade da luz ser finita.',
            'O princípio da incerteza.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'E = mc² torna incoerente fixar o número de partículas. Uma teoria que combine quântica e relatividade precisa admitir criação e destruição — que é exatamente o que a quantização de campos fornece.',
        },
      ],
    },

    {
      id: '9.3',
      title: '9.3. Campos vetoriais',
      objetivo:
        'Entender por que o fóton tem dois estados de polarização e não três — e como a massa de um campo de gauge muda a contagem.',
      prerequisitos: ['4.7', '9.2'],
      fontes: ['tong-qft', 'tong-em'],
      content: String.raw`
### O problema

O campo eletromagnético não é um número por ponto: é um quadrivetor $A_\mu$, com quatro componentes. Mas o fóton tem apenas **duas** polarizações independentes. Duas das quatro componentes precisam desaparecer, e entender como isso acontece é entender o que uma teoria de gauge realmente é.

### A construção

**A contagem, feita com cuidado.** Partindo de $A_\mu$, são quatro componentes. A equação de movimento impõe um vínculo, restando três. E a **invariância de gauge** de 4.7 — a liberdade de mudar $A_\mu$ sem alterar a física — remove mais uma: componentes ligadas por transformação de gauge descrevem o mesmo estado. Restam **duas**, que são as duas polarizações transversais observadas.

A leitura importante: a simetria de gauge não é uma propriedade extra que o campo tem. É a afirmação de que o campo tem **componentes redundantes**, e que a física está no quociente. Descrever o fóton com quatro componentes é usar variáveis demais de propósito, porque só assim a invariância de Lorentz fica manifesta.

**Campos massivos.** Acrescente um termo de massa e a contagem muda: um campo vetorial massivo tem **três** polarizações, porque agora existe também o modo longitudinal. É o caso dos bósons $W$ e $Z$ da interação fraca.

Só que o termo de massa $\frac{1}{2}m^2A_\mu A^\mu$ **quebra a invariância de gauge** — ele não é invariante sob a transformação de 4.7. E isso não é um detalhe estético: sem invariância de gauge a teoria perde a consistência quântica.

**O impasse, e para onde ele aponta.** Aqui está uma das linhas de tensão mais produtivas da física do século XX. A interação fraca tem alcance curtíssimo, o que exige mediadores massivos; a consistência da teoria exige invariância de gauge; e as duas coisas parecem incompatíveis.

A saída é não pôr a massa na lagrangiana. Deixa-se a teoria invariante de gauge e faz-se com que o **vácuo** quebre a simetria espontaneamente — exatamente o mecanismo do ferromagneto de 7.6, em que as leis são simétricas e o estado não é. O bóson vetorial então "engole" o modo de Goldstone resultante e ganha a terceira polarização. É o mecanismo de Higgs, do módulo 13, e o problema que ele resolve é o enunciado neste parágrafo.

**Contagem final, que também explica o alcance.**

| Campo | Massa | Polarizações | Alcance |
| --- | --- | --- | --- |
| Fóton | zero | 2 | infinito |
| Glúon | zero | 2 | confinado |
| $W$, $Z$ | ~80–91 GeV | 3 | ~$10^{-18}$ m |

O glúon é o caso curioso: sem massa, deveria dar alcance infinito, mas a interação forte é confinada por ser não abeliana — os glúons interagem entre si, assunto do módulo 23.

### A declaração

Campos vetoriais são descritos por um quadrivetor cujas componentes fisicamente independentes são reduzidas pelos vínculos das equações de movimento e pela redundância de gauge. Sem massa restam duas polarizações transversais; com massa restam três, mas o termo de massa explícito quebra a invariância de gauge e exige o mecanismo de quebra espontânea.

### Onde se tropeça

- **Contar quatro graus de liberdade para o fóton.** Vínculo e gauge reduzem a dois.
- **Ver a redundância de gauge como defeito.** Ela é o que permite manter a invariância de Lorentz manifesta.
- **Achar que basta somar um termo de massa.** Ele destrói a invariância de gauge e a consistência quântica da teoria.
`,
      exercises: [
        {
          id: 'ex-9.3.1',
          question: 'Por que o fóton tem apenas duas polarizações, se A_μ tem quatro componentes?',
          options: [
            'Porque duas componentes são sempre nulas por acaso.',
            'Porque a equação de movimento impõe um vínculo e a invariância de gauge remove mais uma componente: sobram duas.',
            'Porque o fóton se move à velocidade da luz.',
            'Porque só duas direções do espaço são acessíveis.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A simetria de gauge é a afirmação de que há componentes redundantes. Descrever o fóton com quatro componentes é usar variáveis demais de propósito, para manter a invariância de Lorentz manifesta.',
        },
        {
          id: 'ex-9.3.2',
          question: 'Qual é o problema de simplesmente adicionar um termo de massa a um campo de gauge?',
          options: [
            'O termo torna a energia negativa.',
            'Ele quebra a invariância de gauge, e sem ela a teoria perde consistência quântica.',
            'Ele faz o campo desaparecer.',
            'Ele viola a conservação de energia.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Esse é o impasse que motivou o mecanismo de Higgs: a interação fraca precisa de mediadores massivos, e a consistência exige invariância de gauge. A saída é a quebra espontânea pelo vácuo.',
        },
        {
          id: 'ex-9.3.3',
          question: 'Um campo vetorial massivo tem três polarizações porque:',
          options: [
            'A massa cria uma dimensão espacial extra.',
            'Além das duas transversais, passa a existir o modo longitudinal.',
            'Ele se move mais devagar que a luz.',
            'A invariância de Lorentz exige um número ímpar.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o grau de liberdade a mais que os bósons W e Z têm em relação ao fóton — e, no mecanismo de Higgs, ele é justamente o modo de Goldstone que o bóson vetorial absorve.',
        },
      ],
    },

    {
      id: '9.4',
      title: '9.4. Quantização de campos',
      objetivo:
        'Aplicar aos campos o procedimento do oscilador harmônico — e entender o que o vácuo passa a ser.',
      prerequisitos: ['8.8', '9.2'],
      fontes: ['tong-qft', 'tong-aqm'],
      content: String.raw`
### O problema

Os campos clássicos estão montados. Falta o passo que dá nome ao módulo: promover $\phi(x,t)$ de função a **operador**, do mesmo modo que $x$ e $p$ viraram operadores em 8.4.

### A construção

**A receita.** Decomponha o campo em modos de Fourier. Cada modo, com sua frequência $\omega_k$, satisfaz a equação de um oscilador harmônico — e este é o ponto que 8.8 antecipou. Quantizar o campo é quantizar **infinitos osciladores**, um por modo:

$$
\hat{\phi}(x) = \int \frac{d^3k}{(2\pi)^3}\frac{1}{\sqrt{2\omega_k}}\left(\hat{a}_k e^{ikx} + \hat{a}^\dagger_k e^{-ikx}\right).
$$

Os operadores $\hat{a}_k$ e $\hat{a}^\dagger_k$ são exatamente os de 8.8, agora rotulados por momento. E a reinterpretação anunciada lá se realiza aqui: $\hat{a}^\dagger_k$ **cria uma partícula** de momento $k$ e $\hat{a}_k$ a destrói.

**O que o vácuo é.** O estado de mais baixa energia, $|0\rangle$, é definido por $\hat{a}_k|0\rangle = 0$ para todo $k$ — não há partícula alguma. Mas ele **não** é o nada: cada oscilador contribui com sua energia de ponto zero $\frac{1}{2}\hbar\omega_k$, e o vácuo é um estado com flutuações permanentes em todos os modos.

Isso tem consequências medidas. O **efeito Casimir**, já citado em 8.8, é a atração entre duas placas por causa da modificação dos modos do vácuo entre elas. E o **deslocamento de Lamb**, no espectro do hidrogênio, é o efeito das flutuações do vácuo sobre os níveis atômicos — medido em 1947, foi o resultado que forçou o desenvolvimento da eletrodinâmica quântica moderna.

**O primeiro desastre.** Somando $\frac{1}{2}\hbar\omega_k$ sobre infinitos modos, a energia do vácuo é **infinita**. Na prática se descarta esse infinito, porque só diferenças de energia são medidas em laboratório — o que é legítimo enquanto a gravidade não entra.

Só que a gravidade **entra**: pelo módulo 6.6, é a energia total, e não diferenças, que curva o espaço-tempo. Estimar a densidade de energia do vácuo e comparar com a energia escura observada dá uma discrepância que chega a $10^{120}$ — o famoso problema da constante cosmológica, comumente descrito como a pior previsão da história da física. Ele está em aberto e reaparece no módulo 20.

**O teorema spin-estatística.** A dívida deixada em 8.7 se paga aqui. Quantizando com **comutadores**, obtêm-se partículas de spin inteiro que podem se acumular no mesmo estado — bósons. Quantizando com **anticomutadores**, obtêm-se partículas de spin semi-inteiro sujeitas à exclusão de Pauli — férmions. A escolha não é livre: a outra opção produz teorias com energia sem limite inferior ou violação de causalidade. **Que elétrons obedeçam a Pauli é consequência de relatividade mais quântica**, e não um fato experimental isolado. É um dos resultados mais profundos da física teórica.

### A declaração

Quantizar um campo é promover suas amplitudes de modo a operadores de criação e aniquilação, tratando cada modo como um oscilador harmônico quântico. O estado de vácuo assim definido não é vazio: possui flutuações de ponto zero com efeitos mensuráveis, e sua energia formalmente infinita é o núcleo do problema da constante cosmológica.

### Onde se tropeça

- **Imaginar o vácuo como ausência de tudo.** É o estado sem partículas, mas com flutuações de campo.
- **Achar que descartar o infinito é sempre legítimo.** Vale enquanto a gravidade não é levada em conta.
- **Tratar a exclusão de Pauli como postulado.** Ela decorre da quantização com anticomutadores, exigida pela consistência relativística.
`,
      exercises: [
        {
          id: 'ex-9.4.1',
          question: 'Quantizar um campo consiste essencialmente em:',
          options: [
            'Discretizar o espaço em uma rede.',
            'Decompor o campo em modos e tratar cada modo como um oscilador harmônico quântico, com operadores de criação e aniquilação.',
            'Substituir a energia por níveis discretos escolhidos experimentalmente.',
            'Aplicar a equação de Schrödinger ao campo inteiro.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a promessa de 8.8 cumprida: â† deixa de significar "suba um nível" e passa a significar "crie uma partícula de momento k".',
        },
        {
          id: 'ex-9.4.2',
          question: 'O estado de vácuo da teoria quântica de campos é:',
          options: [
            'A ausência completa de campos e energia.',
            'O estado sem partículas, mas com flutuações de ponto zero em todos os modos — com efeitos medidos, como Casimir e o deslocamento de Lamb.',
            'Um estado instável que decai rapidamente.',
            'O estado de maior entropia possível.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Vácuo é ausência de partículas, não ausência de campo. O deslocamento de Lamb, medido em 1947, foi o que forçou o desenvolvimento da eletrodinâmica quântica moderna.',
        },
        {
          id: 'ex-9.4.3',
          question: 'O teorema spin-estatística estabelece que:',
          options: [
            'Todas as partículas obedecem ao princípio de exclusão.',
            'Quantizar com comutadores dá bósons de spin inteiro e com anticomutadores dá férmions de spin semi-inteiro — a outra escolha produz teorias inconsistentes.',
            'O spin determina a massa da partícula.',
            'A estatística depende da temperatura.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Paga a dívida deixada em 8.7. Que elétrons obedeçam a Pauli é consequência de relatividade mais quântica, não um fato experimental isolado.',
        },
      ],
    },

    {
      id: '9.5',
      title: '9.5. Partículas como excitações de campos',
      objetivo:
        'Assimilar a inversão ontológica central da física moderna: o fundamental é o campo, não a partícula.',
      prerequisitos: ['9.4'],
      fontes: ['tong-qft', 'tong-teaching', 'feynman-site'],
      content: String.raw`
### O problema

O formalismo está montado, mas falta enunciar o que ele afirma sobre o mundo. E o que ele afirma contraria a imagem que quase todo mundo tem da matéria.

### A construção

**A inversão.** Não existe "o elétron" como objeto fundamental. Existe **o campo do elétron**, presente em todo ponto do universo, e o que se chama de elétron é uma excitação quantizada desse campo — como um nível $n=1$ de um oscilador. O mesmo vale para todas as partículas: cada tipo corresponde a um campo, e o inventário de partículas do módulo 12 é, na verdade, um inventário de **campos**.

**O que isso explica de imediato.** Três fatos que a imagem corpuscular não dá conta:

- **Por que todos os elétrons são idênticos.** Não é coincidência nem fabricação em série: são excitações do mesmo campo, do mesmo modo que duas ondas na mesma corda têm necessariamente as mesmas propriedades. Nenhuma medida jamais distinguiu dois elétrons.
- **Por que partículas são criadas e destruídas.** Não há objeto que precise vir de algum lugar; há campo que ganha ou perde excitação. Um nêutron decaindo não "continha" um elétron.
- **Por que existe antimatéria.** Cada campo carregado admite excitações de carga oposta, com a mesma massa. A antimatéria é previsão da estrutura, não descoberta acidental — Dirac a previu em 1928 e o pósitron apareceu em 1932.

**A leitura correta de "partícula".** O termo é uma abreviação conveniente para "excitação localizada e quantizada de um campo, com energia, momento, spin e cargas bem definidos". Ele funciona bem quando as excitações estão bem separadas e a energia é baixa. Em regime de campo forte ou espaço-tempo curvo, o conceito **perde nitidez**: no efeito Unruh do módulo 18, um observador acelerado detecta partículas onde um inercial não vê nenhuma. Nem "quantas partículas existem" é uma pergunta absoluta.

**O que resta de sólido.** Isso não é relativismo: o campo e seu estado são bem definidos. O que depende do observador é a decomposição desse estado em quanta — exatamente como, em 6.4, energia e momento dependem do referencial enquanto o quadrivetor não depende.

**Realidade dos campos.** Vale registrar o quanto essa descrição é levada a sério: o Modelo Padrão do módulo 12 é uma lista de campos e de como eles se acoplam. A previsão do Higgs, décadas antes de sua detecção, foi a previsão de um **campo** — e o bóson encontrado em 2012 foi a confirmação de que ele existe, por sua excitação.

### A declaração

Na teoria quântica de campos, os objetos fundamentais são campos definidos em todo o espaço-tempo, e as partículas são suas excitações quantizadas. Essa inversão explica a identidade entre partículas do mesmo tipo, a criação e destruição em processos de alta energia, e a existência da antimatéria como consequência estrutural.

### Onde se tropeça

- **Imaginar partículas como bolinhas que campos empurram.** Elas *são* estados do campo.
- **Achar que "número de partículas" é sempre bem definido.** Depende do observador em espaço-tempo curvo ou acelerado.
- **Tratar antimatéria como exótica.** É consequência direta da estrutura de campos carregados.
`,
      exercises: [
        {
          id: 'ex-9.5.1',
          question: 'Por que todos os elétrons do universo são exatamente idênticos?',
          options: [
            'Por um processo de fabricação uniforme no Big Bang.',
            'Porque são excitações do mesmo campo — como ondas na mesma corda, não podem diferir.',
            'Porque a natureza tende à simetria.',
            'Porque as diferenças são pequenas demais para serem medidas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A identidade é estrutural, não estatística. Nenhuma medida jamais distinguiu dois elétrons, e a teoria explica por que isso é necessário.',
        },
        {
          id: 'ex-9.5.2',
          question: 'A existência da antimatéria, na visão de campos, é:',
          options: [
            'Uma descoberta acidental sem explicação teórica.',
            'Consequência estrutural: cada campo carregado admite excitações de carga oposta e mesma massa. Dirac previu em 1928; o pósitron apareceu em 1932.',
            'Um efeito de altas energias apenas.',
            'Uma hipótese ainda não confirmada.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A previsão veio da estrutura da teoria, não da observação. É um dos casos mais fortes de previsão teórica confirmada depois.',
        },
        {
          id: 'ex-9.5.3',
          question: 'Em que sentido o conceito de partícula perde nitidez?',
          options: [
            'Em nenhum: é sempre bem definido.',
            'Em campo forte ou espaço-tempo curvo — no efeito Unruh, um observador acelerado detecta partículas onde um inercial não vê nenhuma.',
            'Apenas para partículas sem massa.',
            'Apenas em temperaturas muito baixas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O campo e seu estado permanecem bem definidos; o que depende do observador é a decomposição em quanta — analogamente a energia e momento dependerem do referencial enquanto o quadrivetor não depende.',
        },
      ],
    },

    {
      id: '9.6',
      title: '9.6. Diagramas de Feynman',
      objetivo:
        'Aprender a ler os diagramas como notação de cálculo — e não confundi-los com fotografias do que acontece.',
      prerequisitos: ['8.9', '9.5'],
      fontes: ['tong-qft', 'feynman-site'],
      content: String.raw`
### O problema

Com os campos quantizados, é possível calcular a probabilidade de um processo — dois elétrons entram, dois saem. Mas o cálculo perturbativo de 8.9 produz, em ordens sucessivas, integrais cada vez mais numerosas e complicadas, com uma contabilidade que rapidamente sai do controle.

### A construção

**A ideia de Feynman.** Cada termo da série perturbativa recebe um **desenho**, e existem regras que traduzem desenho em integral, sem ambiguidade. Os elementos:

- **linhas externas** — partículas que entram e saem;
- **linhas internas** — propagadores, partículas virtuais;
- **vértices** — pontos de interação, cada um contribuindo com um fator de acoplamento.

**A ordem perturbativa é visível.** O número de vértices dá a potência da constante de acoplamento. Em eletrodinâmica quântica, cada vértice traz um fator $\sqrt{\alpha}$ com $\alpha \approx 1/137$, de modo que diagramas com mais vértices contribuem cada vez menos. É por isso que a expansão funciona tão bem — e é a razão de a eletrodinâmica quântica ser tão precisa e a cromodinâmica, em baixa energia, não ser calculável assim.

**O que os diagramas não são.** Este é o ponto que a divulgação erra com mais frequência, e vale ser explícito: **um diagrama não é a trajetória de nada.** Ele é a representação gráfica de um termo de uma integral. Num espalhamento entre dois elétrons, o processo real é a soma de infinitos diagramas, e perguntar "por qual deles o processo passou" é tão sem sentido quanto perguntar por qual fenda o elétron passou em 8.1.

**Partículas virtuais.** As linhas internas correspondem a partículas **virtuais**, que não obedecem à relação energia–momento de 6.5 — diz-se que estão "fora da camada de massa". Elas não são detectáveis nem em princípio; são artefatos da expansão perturbativa. Descrevê-las como partículas que "aparecem e somem rapidamente por causa da incerteza" é uma metáfora popular que atrapalha mais do que ajuda: elas são termos de uma integral, e num cálculo não perturbativo elas simplesmente não aparecem.

**O que os diagramas de fato entregam.** Apesar de tudo isso, eles são uma das ferramentas mais poderosas já inventadas: transformaram cálculos que levavam meses em contas sistemáticas, e permitiram a precisão de dez casas decimais do momento magnético do elétron — envolvendo, nas ordens mais altas, milhares de diagramas.

**Infinitos, e o que fazer com eles.** Diagramas com laços produzem integrais **divergentes**. A renormalização, do módulo 19, é o procedimento que absorve esses infinitos em redefinições de massa e carga, deixando previsões finitas. Por décadas isso foi visto como um truque constrangedor — Feynman o chamou de "processo de escamoteação". A visão moderna é outra e mais confortável: a teoria é uma **teoria efetiva**, válida até certa escala de energia, e a renormalização é a maneira correta de organizar a ignorância sobre o que existe acima dela.

### A declaração

Diagramas de Feynman são a notação gráfica dos termos da expansão perturbativa em teoria quântica de campos, com regras precisas de tradução para integrais. Não representam trajetórias, e suas linhas internas correspondem a partículas virtuais que são elementos de cálculo, não entidades observáveis.

### Onde se tropeça

- **Ler o diagrama como fotografia do processo.** O processo é a soma de todos eles.
- **Atribuir realidade a partículas virtuais.** Elas não obedecem à relação energia-momento e não são detectáveis.
- **Achar que a renormalização é um truque para esconder erro.** É o modo correto de tratar uma teoria válida até certa escala.
`,
      exercises: [
        {
          id: 'ex-9.6.1',
          question: 'Um diagrama de Feynman representa:',
          options: [
            'A trajetória real seguida pelas partículas durante a interação.',
            'Um termo específico da expansão perturbativa, com regras precisas de tradução para uma integral.',
            'Uma fotografia obtida em detectores de partículas.',
            'O campo clássico em torno da colisão.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O processo real é a soma de infinitos diagramas. Perguntar por qual deles o processo passou é tão sem sentido quanto perguntar por qual fenda o elétron passou.',
        },
        {
          id: 'ex-9.6.2',
          question: 'Partículas virtuais, representadas pelas linhas internas, são:',
          options: [
            'Partículas reais de vida muito curta.',
            'Elementos de cálculo que não obedecem à relação energia-momento e não são detectáveis nem em princípio.',
            'Partículas que viajam mais rápido que a luz.',
            'Estados ligados temporários.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Estão "fora da camada de massa" e são artefatos da expansão perturbativa — num cálculo não perturbativo elas nem aparecem.',
        },
        {
          id: 'ex-9.6.3',
          question: 'Por que a expansão perturbativa funciona tão bem em eletrodinâmica quântica?',
          options: [
            'Porque o elétron tem massa pequena.',
            'Porque cada vértice traz um fator ligado a α ≈ 1/137, e diagramas com mais vértices contribuem cada vez menos.',
            'Porque há poucos diagramas possíveis.',
            'Porque as integrais são todas finitas.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O acoplamento pequeno é o que faz a série ser útil. Em cromodinâmica a baixa energia o acoplamento é grande, e o método deixa de funcionar — daí a necessidade de cálculo na rede.',
        },
      ],
    },

    {
      id: '9.7',
      title: '9.7. Seções de choque',
      objetivo:
        'Entender a grandeza que liga o cálculo teórico ao que um detector realmente conta.',
      prerequisitos: ['9.6'],
      fontes: ['tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

Os diagramas produzem amplitudes. Um experimento produz contagens de eventos. É preciso uma grandeza que traduza uma coisa na outra, e que não dependa dos detalhes de quão intenso é o feixe naquele dia.

### A construção

**A definição.** A seção de choque $\sigma$ tem dimensão de **área** e mede a probabilidade efetiva de um processo ocorrer. A imagem clássica ajuda: é como se cada partícula-alvo apresentasse um disco de área $\sigma$, e a colisão ocorresse quando a incidente o acerta.

A unidade padrão é o **barn**, $10^{-28}\ \text{m}^2$, da ordem da seção geométrica de um núcleo — o nome vem da expressão inglesa para "acertar a porta de um celeiro", ironia de físicos nucleares diante de alvos que lhes pareciam enormes. Processos raros são medidos em picobarns e femtobarns.

**A ligação com o experimento.** O número de eventos observados é

$$
N = \mathcal{L}\,\sigma,
$$

com $\mathcal{L}$ a luminosidade integrada, que caracteriza quantas colisões o acelerador entregou. A divisão de trabalho é limpa: **a teoria prevê $\sigma$, o acelerador fornece $\mathcal{L}$, o detector conta $N$.** Toda a física de partículas experimental é essa equação.

**Seção diferencial.** Frequentemente interessa não só se o processo ocorreu, mas em que direção os produtos saíram. A seção diferencial $d\sigma/d\Omega$ dá a distribuição angular, e ela carrega informação estrutural — foi assim que Rutherford descobriu o núcleo em 1911. Ao ver partículas alfa retroespalhadas em ângulos grandes, o que ele mediu foi uma distribuição angular incompatível com carga distribuída, e compatível com carga concentrada num ponto minúsculo. Espalhamento a ângulo grande revela estrutura pequena — o mesmo princípio que hoje sonda quarks dentro de prótons.

**Regra de ouro de Fermi.** A ponte formal entre amplitude e taxa observável:

$$
\Gamma = \frac{2\pi}{\hbar}\left|\mathcal{M}\right|^2 \rho,
$$

com $\mathcal{M}$ a amplitude calculada pelos diagramas e $\rho$ a densidade de estados finais. Note a estrutura: a probabilidade depende do módulo ao quadrado da amplitude, como em 8.2, **e** do número de estados finais disponíveis. Um processo pode ser suprimido não porque a dinâmica o desfavoreça, mas porque há pouco espaço de fase — e distinguir esses dois motivos é rotina na análise de dados.

**Ordens de grandeza, para calibrar a intuição.** A seção de choque de produção do Higgs no LHC é da ordem de dezenas de picobarns, contra uma seção total próton–próton de cerca de 100 milibarns. A razão é da ordem de $10^{-10}$: um evento de Higgs a cada dez bilhões de colisões. É por isso que se fala em anos de tomada de dados — e é a estatística de 1.10 que decide quando o sinal se destaca do fundo.

### A declaração

A seção de choque é uma grandeza com dimensão de área que quantifica a probabilidade de um processo de espalhamento, ligando a amplitude calculada teoricamente ao número de eventos observados por meio da luminosidade. Sua distribuição angular revela a estrutura interna dos alvos.

### Onde se tropeça

- **Ler $\sigma$ como tamanho físico do alvo.** É área efetiva, e pode ser muito maior ou menor que a geométrica.
- **Ignorar o espaço de fase.** Um processo pode ser raro por falta de estados finais, não por dinâmica.
- **Comparar seções sem comparar energias.** Elas dependem fortemente da energia de colisão.
`,
      exercises: [
        {
          id: 'ex-9.7.1',
          question: 'A seção de choque tem dimensão de área porque:',
          options: [
            'É medida com réguas.',
            'Representa a área efetiva que o alvo apresenta ao feixe — a probabilidade de acerto por partícula incidente.',
            'É proporcional ao raio do núcleo.',
            'A energia tem dimensão inversa de comprimento.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É como se cada alvo apresentasse um disco de área σ. A área efetiva pode ser muito maior ou menor que a geométrica, conforme a dinâmica do processo.',
        },
        {
          id: 'ex-9.7.2',
          question: 'Na relação N = ℒ·σ, a divisão de trabalho é:',
          options: [
            'A teoria prevê N e o experimento mede σ.',
            'A teoria prevê σ, o acelerador fornece a luminosidade ℒ e o detector conta N.',
            'Todos os três são medidos experimentalmente.',
            'ℒ é calculada teoricamente a partir de σ.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É a equação que organiza toda a física de partículas experimental: o cálculo entrega a seção de choque, a máquina entrega colisões, o detector entrega contagens.',
        },
        {
          id: 'ex-9.7.3',
          question: 'Rutherford descobriu o núcleo atômico ao observar que:',
          options: [
            'Nenhuma partícula alfa atravessava a folha de ouro.',
            'A distribuição angular do espalhamento era incompatível com carga distribuída e compatível com carga concentrada num ponto minúsculo.',
            'As partículas alfa perdiam toda a energia.',
            'A folha de ouro emitia luz.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Espalhamento a ângulo grande revela estrutura pequena. É o mesmo princípio que hoje sonda quarks dentro de prótons.',
        },
      ],
    },

    {
      id: '9.8',
      title: '9.8. Taxas de decaimento',
      objetivo:
        'Entender o que determina o tempo de vida de uma partícula — e por que a largura de uma ressonância é a mesma informação.',
      prerequisitos: ['9.7'],
      fontes: ['tong-qft', 'tong-teaching'],
      content: String.raw`
### O problema

Partículas instáveis decaem, e seus tempos de vida variam por mais de vinte ordens de grandeza — do nêutron, com quinze minutos, ao bóson $Z$, com $10^{-25}$ segundos. Convém entender o que faz um decaimento ser rápido ou lento, e como isso é medido para tempos absurdamente curtos.

### A construção

**Decaimento exponencial.** Cada partícula tem uma probabilidade constante de decair por unidade de tempo, o que dá a mesma equação diferencial de 1.9:

$$
N(t) = N_0 e^{-\Gamma t},
$$

com $\Gamma$ a taxa de decaimento e $\tau = 1/\Gamma$ o tempo de vida médio. Uma consequência que costuma soar estranha: partículas **não envelhecem**. Um múon que existe há um microssegundo tem exatamente a mesma probabilidade de decair no próximo instante que um recém-criado. A distribuição não tem memória, como na falácia do apostador de 1.10.

**O que controla a taxa.** Pela regra de ouro de 9.7, dois fatores:

- **a força da interação responsável** — decaimentos fortes são rápidos, eletromagnéticos intermediários, fracos lentos;
- **o espaço de fase disponível** — quanto mais energia sobra para os produtos, mais estados finais e maior a taxa.

Isso explica de imediato a escala de tempos observada:

| Partícula | Interação | Tempo de vida |
| --- | --- | --- |
| $Z^0$ | fraca, com muito espaço de fase | $\sim 10^{-25}$ s |
| $\rho$ | forte | $\sim 10^{-23}$ s |
| $\pi^0$ | eletromagnética | $\sim 10^{-16}$ s |
| $\mu$ | fraca, pouco espaço de fase | $2{,}2 \times 10^{-6}$ s |
| nêutron | fraca, espaço de fase mínimo | $\sim 880$ s |

O nêutron livre é o caso extremo e revelador: ele decai por interação fraca, e a diferença de massa entre ele e seus produtos é de apenas $0{,}78$ MeV. Espaço de fase minúsculo, tempo de vida de quinze minutos — e é essa quase-coincidência de massas que fixa a abundância primordial de hélio no universo, assunto do módulo 15.

**Regras de seleção.** Um decaimento só ocorre se respeitar todas as leis de conservação: energia, momento, momento angular, carga, número bariônico, número leptônico. Quando um decaimento cinematicamente possível **não** é observado, isso é informação — indica uma simetria ainda não identificada. Foi assim que se postularam o número bariônico e o leptônico, e é por isso que a busca por decaimento do próton é levada tão a sério: se ele ocorrer, o número bariônico não é exatamente conservado.

**Largura e tempo de vida.** Para tempos como $10^{-25}$ s não existe cronômetro. O que se mede é outra coisa: a **largura** $\Gamma$ do pico de ressonância no espectro de massa invariante. As duas grandezas são a mesma informação, ligadas pela relação de incerteza energia-tempo:

$$
\Gamma\,\tau \approx \hbar .
$$

Vida curta implica pico largo; vida longa implica pico estreito. O bóson $Z$ tem largura de cerca de $2{,}5$ GeV, e foi medindo essa largura no LEP que se estabeleceu, em 1989, que existem **exatamente três** famílias de neutrinos leves — cada família adicional alargaria o pico de forma detectável. Um dos resultados mais elegantes da física de partículas: contar espécies de partículas que mal interagem, medindo a largura de um pico.

### A declaração

A taxa de decaimento é a probabilidade por unidade de tempo de uma partícula instável decair, produzindo população que decresce exponencialmente. Ela é determinada pela intensidade da interação responsável e pelo espaço de fase disponível, e se manifesta experimentalmente como a largura do pico de ressonância, ligada ao tempo de vida pela relação de incerteza.

### Onde se tropeça

- **Achar que partículas envelhecem.** A probabilidade de decair não depende de há quanto tempo a partícula existe.
- **Explicar tempos de vida só pela força da interação.** O espaço de fase pode dominar, como no nêutron.
- **Ver largura e tempo de vida como grandezas distintas.** São a mesma informação em domínios conjugados.
`,
      exercises: [
        {
          id: 'ex-9.8.1',
          question: 'O nêutron livre vive cerca de 15 minutos, muito mais que outras partículas que decaem por interação fraca. Por quê?',
          options: [
            'Porque a interação fraca é mais fraca para o nêutron.',
            'Porque a diferença de massa entre ele e seus produtos é de apenas 0,78 MeV — o espaço de fase disponível é minúsculo.',
            'Porque o nêutron não tem carga elétrica.',
            'Porque ele é mais pesado que o próton.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A taxa depende da força da interação e do espaço de fase. Aqui o segundo fator domina — e é essa quase-coincidência de massas que fixa a abundância primordial de hélio no universo.',
        },
        {
          id: 'ex-9.8.2',
          question: 'Como se mede o tempo de vida de uma partícula que dura 10⁻²⁵ s?',
          options: [
            'Com cronômetros atômicos de altíssima precisão.',
            'Medindo a largura Γ do pico de ressonância no espectro de massa: Γ·τ ≈ ℏ liga as duas grandezas.',
            'Extrapolando a partir de partículas mais longevas.',
            'Não é possível medir.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Vida curta implica pico largo. Foi medindo a largura do bóson Z no LEP que se estabeleceu, em 1989, que existem exatamente três famílias de neutrinos leves.',
        },
        {
          id: 'ex-9.8.3',
          question: 'Quando um decaimento cinematicamente possível não é observado, isso indica:',
          options: [
            'Erro experimental.',
            'Provável existência de uma lei de conservação — uma simetria — que o proíbe.',
            'Que a partícula é estável por acaso.',
            'Que a energia disponível é insuficiente.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Foi assim que se postularam o número bariônico e o leptônico. É também por isso que a busca pelo decaimento do próton é levada a sério: se ocorrer, o número bariônico não é exatamente conservado.',
        },
      ],
    },
  ],
};
