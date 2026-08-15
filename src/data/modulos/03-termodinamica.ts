import type { Module } from '../../types';

export const termodinamica: Module = {
  id: '3',
  title: '3. Termodinâmica Básica',
  descricao:
    'A física do calor, do equilíbrio e da irreversibilidade — a única teoria clássica que sobreviveu intacta às revoluções quântica e relativística.',
  subtopics: [
    {
      id: '3.1',
      title: '3.1. Temperatura',
      objetivo:
        'Entender por que temperatura não é "quantidade de calor", e o que a lei zero acrescenta que o termômetro sozinho não garante.',
      prerequisitos: ['2.4'],
      fontes: ['libretexts-fisica-2-pt', 'tong-statphys', 'feynman-i'],
      content: String.raw`
### O problema

Todo mundo sabe o que é quente e frio antes de qualquer física. O problema é que a sensação mente: uma maçaneta de metal e uma porta de madeira, à mesma temperatura, parecem estar em temperaturas diferentes — o metal conduz calor da sua mão mais rápido. Se a percepção não serve, é preciso uma definição que dependa do sistema, não do observador.

### A construção

**A lei zero.** Começa por um fato experimental que parece banal e não é: se $A$ está em equilíbrio térmico com $C$, e $B$ também está em equilíbrio térmico com $C$, então $A$ e $B$ estão em equilíbrio térmico entre si. Essa transitividade é o que permite existir termômetro — o $C$ da história. Sem ela, medir $A$ e $B$ com o mesmo instrumento não autorizaria compará-los. Ela foi enunciada depois das outras três leis e, como é logicamente anterior a elas, recebeu o número zero.

A lei zero justifica a definição: **temperatura é aquilo que dois corpos em equilíbrio térmico têm em comum.**

**Escalas.** Celsius e Fahrenheit fixam dois pontos de referência arbitrários e interpolam. A escala Kelvin é diferente em espécie, não em grau: ela tem um zero absoluto, abaixo do qual não há nada. A relação é

$$
T[\text{K}] = T[^\circ\text{C}] + 273{,}15.
$$

É por isso que toda fórmula termodinâmica exige kelvin. Escrever a lei dos gases com graus Celsius produziria a previsão absurda de volume negativo abaixo de zero.

**O que a temperatura mede, microscopicamente.** Para um gás ideal monoatômico, a teoria cinética entrega o resultado central:

$$
\langle E_c \rangle = \frac{3}{2}k_B T,
$$

onde $k_B \approx 1{,}38 \times 10^{-23}\ \text{J/K}$ é a constante de Boltzmann. Ou seja, temperatura é uma medida da energia cinética *média* por partícula. Duas consequências imediatas: uma única molécula não tem temperatura — o conceito é estatístico e só existe para muitos graus de liberdade; e um copo de água morna contém muito mais energia térmica que uma fagulha incandescente, embora a fagulha esteja muitíssimo mais quente. Temperatura é intensiva, energia é extensiva.

**Zero absoluto.** Se temperatura mede agitação, existe um limite inferior: o estado de menor energia possível, $T = 0\ \text{K}$. A terceira lei da termodinâmica afirma que ele é inatingível em um número finito de etapas — dá para chegar a bilionésimos de kelvin, nunca a zero.

### A declaração

Temperatura é a grandeza que caracteriza o equilíbrio térmico: dois sistemas em contato só param de trocar energia quando ela se iguala. Microscopicamente, é proporcional à energia cinética média por grau de liberdade. Ao contrário da energia, é uma grandeza intensiva — não depende do tamanho do sistema.

### Onde se tropeça

- **Confundir temperatura com calor.** Temperatura é uma propriedade de estado; calor é energia em trânsito, e só existe durante a transferência.
- **Achar que mais quente significa mais energia.** Depende também da massa e do calor específico — o oceano tem incomparavelmente mais energia térmica que uma vela acesa.
- **Usar Celsius em fórmulas.** Só o kelvin é proporcional à energia cinética média; qualquer razão de temperaturas em Celsius é fisicamente sem sentido.
`,
      exercises: [
        {
          id: 'ex-3.1.1',
          question: 'O que a lei zero da termodinâmica torna possível?',
          options: [
            'Calcular a quantidade de calor trocada entre dois corpos.',
            'A própria existência do termômetro: se A e B estão em equilíbrio com C, estão em equilíbrio entre si.',
            'Determinar o zero absoluto da escala Kelvin.',
            'Provar que a energia se conserva em processos térmicos.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Sem a transitividade do equilíbrio térmico, medir dois corpos com o mesmo instrumento não permitiria compará-los. É essa lei que autoriza o termômetro a servir de intermediário universal.',
        },
        {
          id: 'ex-3.1.2',
          question: 'Uma fagulha a 800 °C e uma banheira de água a 40 °C. Qual afirmação é correta?',
          options: [
            'A fagulha contém mais energia térmica, por estar mais quente.',
            'A banheira contém muito mais energia térmica, embora sua temperatura seja bem menor.',
            'As duas contêm a mesma energia, já que energia e temperatura são proporcionais.',
            'Não é possível comparar sem saber a pressão.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Temperatura é intensiva (energia média por partícula); energia térmica é extensiva (depende de quantas partículas há). A banheira tem um número imensamente maior de moléculas.',
        },
        {
          id: 'ex-3.1.3',
          question: 'Por que fórmulas termodinâmicas exigem temperatura em kelvin?',
          options: [
            'Por convenção do Sistema Internacional, sem consequência prática.',
            'Porque só o kelvin é proporcional à energia cinética média, tendo zero verdadeiro; razões em Celsius não têm sentido físico.',
            'Porque o kelvin usa números maiores e reduz erros de arredondamento.',
            'Porque a escala Celsius não é usada em ciência.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Dobrar a temperatura em kelvin dobra a energia cinética média. Dobrar de 10 °C para 20 °C não dobra energia nenhuma, porque o zero da escala Celsius é arbitrário.',
        },
      ],
    },

    {
      id: '3.2',
      title: '3.2. Calor',
      objetivo:
        'Entender calor como energia em trânsito — e por que a queda da teoria do calórico foi decidida por um canhão.',
      prerequisitos: ['3.1'],
      fontes: ['libretexts-fisica-2-pt', 'feynman-i', 'openstax-fisica-2'],
      content: String.raw`
### O problema

Até o final do século XVIII, a explicação dominante era o **calórico**: um fluido invisível e indestrutível que escoava do corpo quente para o frio. A teoria não era tola — explicava condução, dilatação e equilíbrio térmico. Mas fazia uma previsão verificável: como o calórico se conserva, deve haver um estoque finito dele em cada corpo.

### A construção

**O experimento que derrubou o calórico.** Em 1798, Benjamin Thompson (Conde Rumford) supervisionava a perfuração de canhões em Munique e notou que a broca produzia calor **indefinidamente**, enquanto houvesse trabalho mecânico sendo feito. Uma broca cega, que raspava sem cortar, esquentava ainda mais. Se o calor fosse um fluido armazenado, o estoque teria de acabar. Não acabava. A conclusão: calor não é substância, é uma forma de transferência de energia — e trabalho mecânico pode ser convertido nele sem limite.

Joule fechou a conta décadas depois, medindo o equivalente mecânico do calor com pesos que giravam pás dentro de um recipiente com água. Daí a caloria valer $4{,}184\ \text{J}$: não são grandezas distintas, são a mesma coisa em unidades diferentes.

**Calor específico.** Corpos diferentes exigem energias diferentes para a mesma variação de temperatura:

$$
Q = m c \,\Delta T.
$$

A água tem calor específico excepcionalmente alto, $c \approx 4{,}18\ \text{kJ/(kg}\cdot\text{K)}$ — cerca de dez vezes o do ferro. Esse número, que parece detalhe tabelado, é a razão de o clima litorâneo ser ameno e de o corpo humano conseguir se termorregular.

**Calor latente.** Durante uma mudança de fase, o sistema absorve energia **sem mudar de temperatura**:

$$
Q = m L.
$$

O gelo a $0\ ^\circ\text{C}$ vira água a $0\ ^\circ\text{C}$ consumindo $334\ \text{kJ/kg}$. A energia entra e a temperatura não sobe porque ela vai romper as ligações da rede cristalina, não aumentar a agitação. É esse patamar que faz o gelo ser eficiente para resfriar bebidas — a maior parte do efeito é a fusão, não a temperatura baixa.

**Três mecanismos de transporte.** *Condução*: energia passa por contato, sem transporte de matéria. *Convecção*: o próprio fluido se desloca, carregando energia. *Radiação*: transferência por ondas eletromagnéticas, sem meio — é assim que o Sol nos aquece através do vácuo, e obedece à lei de Stefan–Boltzmann, com potência irradiada proporcional a $T^4$.

### A declaração

Calor é energia transferida entre sistemas em virtude de uma diferença de temperatura. Não é uma propriedade que um corpo possui, mas um processo: faz sentido dizer que um sistema *recebeu* calor, nunca que ele *contém* calor. A energia que um corpo contém é sua energia interna.

### Onde se tropeça

- **Dizer que um corpo "tem calor".** O que ele tem é energia interna; calor é o nome da transferência.
- **Supor que receber calor sempre aquece.** Durante uma mudança de fase não aquece.
- **Confundir sensação térmica com temperatura.** O metal parece mais frio que a madeira à mesma temperatura porque conduz melhor o calor da sua mão.
`,
      exercises: [
        {
          id: 'ex-3.2.1',
          question: 'O que a observação de Rumford, ao perfurar canhões, demonstrou?',
          options: [
            'Que o calórico é um fluido mais leve que o ar.',
            'Que o calor podia ser produzido indefinidamente por trabalho mecânico, logo não é uma substância conservada.',
            'Que o atrito diminui a temperatura dos metais.',
            'Que a energia mecânica se perde durante a perfuração.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A produção de calor não cessava enquanto houvesse trabalho. Um fluido armazenado teria estoque finito — o calor, portanto, é energia em trânsito, não substância.',
        },
        {
          id: 'ex-3.2.2',
          question: 'Ao derreter, o gelo a 0 °C absorve energia e permanece a 0 °C. Por quê?',
          options: [
            'Porque o termômetro não é sensível o bastante nessa faixa.',
            'Porque a energia é usada para romper as ligações da rede cristalina, não para aumentar a agitação térmica.',
            'Porque o gelo perde calor para o ambiente na mesma taxa em que o recebe.',
            'Porque o calor específico do gelo é nulo a 0 °C.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'É o calor latente de fusão: 334 kJ por quilograma vão para desmontar a estrutura sólida. A temperatura só volta a subir quando toda a massa tiver mudado de fase.',
        },
        {
          id: 'ex-3.2.3',
          question: 'O Sol aquece a Terra através do vácuo do espaço. O mecanismo é:',
          options: ['Condução.', 'Convecção.', 'Radiação eletromagnética.', 'Calor latente.'],
          correctAnswerIndex: 2,
          explanation:
            'Condução e convecção precisam de meio material. Só a radiação atravessa o vácuo, transportando energia por ondas eletromagnéticas.',
        },
      ],
    },

    {
      id: '3.3',
      title: '3.3. Entropia',
      objetivo:
        'Entender entropia como contagem de microestados — a definição que explica por que o tempo tem direção.',
      prerequisitos: ['1.10', '3.2'],
      fontes: ['tong-statphys', 'feynman-i', 'libretexts-fisica-2-pt'],
      content: String.raw`
### O problema

As leis de Newton não distinguem passado de futuro: filme uma colisão de bolas de bilhar, passe de trás para a frente, e nada viola a física. Mas filme uma xícara caindo e se espatifando, e a reversão é obviamente absurda. Se as leis microscópicas são reversíveis, de onde vem a seta do tempo?

### A construção

**Microestado e macroestado.** Um **microestado** é a especificação completa do sistema: posição e velocidade de cada molécula. Um **macroestado** é o que você consegue medir: pressão, volume, temperatura. O ponto decisivo é que um mesmo macroestado é compatível com um número gigantesco de microestados — e esse número varia enormemente de um macroestado para outro.

Um exemplo mínimo torna tudo visível. Jogue quatro moedas. O macroestado "duas caras" é realizado por 6 arranjos; "quatro caras", por apenas 1. Nada favorece nenhum arranjo individual: o resultado equilibrado é mais provável só porque há mais maneiras de obtê-lo. Agora troque 4 moedas por $10^{23}$ moléculas e a diferença deixa de ser "mais provável" para se tornar "certo para todos os efeitos práticos".

**A definição de Boltzmann.** Entropia é o logaritmo do número $\Omega$ de microestados compatíveis com o macroestado:

$$
S = k_B \ln \Omega.
$$

Está gravada no túmulo de Boltzmann, em Viena. Por que logaritmo? Porque entropia precisa ser aditiva: juntando dois sistemas independentes, os microestados se **multiplicam** ($\Omega_1 \Omega_2$), e queremos que as entropias se **somem**. O logaritmo é exatamente a função que converte produto em soma.

**A seta do tempo.** Um sistema isolado evolui para macroestados de $\Omega$ maior, não porque exista uma força empurrando nessa direção, mas porque há esmagadoramente mais microestados lá. A xícara quebrada corresponde a um número inconcebivelmente maior de arranjos de cacos do que a xícara inteira. A reversão não é proibida — é apenas tão improvável que não ocorrerá na idade do universo.

Isso reposiciona a segunda lei: ela não é uma lei fundamental como $\vec{F} = m\vec{a}$, mas uma afirmação estatística que se torna certeza prática quando $N \sim 10^{23}$.

**Entropia e informação.** Shannon chegou, em 1948, à mesma forma matemática estudando transmissão de mensagens. Não é coincidência: entropia mede o quanto você *não sabe* sobre o microestado, dado o macroestado. Essa identificação — entropia como informação faltante — é a ponte que leva à termodinâmica de buracos negros do módulo 17, onde a entropia acaba sendo proporcional à *área* do horizonte, e não ao volume.

### A declaração

Entropia é o logaritmo do número de microestados compatíveis com o macroestado observado, multiplicado pela constante de Boltzmann. Ela mede a informação faltante sobre a configuração microscópica e, por ser esmagadoramente maior em macroestados desordenados, estabelece a direção temporal dos processos espontâneos.

### Onde se tropeça

- **Traduzir entropia como "bagunça".** A analogia falha em casos importantes: esferas duras muito comprimidas *cristalizam* aumentando a entropia, porque a ordem posicional libera espaço de movimento.
- **Achar que a entropia nunca diminui em lugar nenhum.** Ela diminui localmente o tempo todo — geladeiras, cristais, seres vivos. O que não diminui é a do sistema *isolado* como um todo.
- **Confundir improvável com impossível.** A segunda lei é estatística; sua força vem do tamanho dos números, não de uma proibição absoluta.
`,
      exercises: [
        {
          id: 'ex-3.3.1',
          question: 'Por que a entropia é definida com um logaritmo, S = k_B ln Ω?',
          options: [
            'Para que os números resultantes fiquem menores e mais fáceis de tabelar.',
            'Porque os microestados de sistemas independentes se multiplicam, e queremos que as entropias se somem.',
            'Porque o logaritmo é a única função crescente conhecida.',
            'Porque Ω é sempre um número negativo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Juntando dois sistemas, Ω_total = Ω₁·Ω₂. Como entropia deve ser extensiva (aditiva), é preciso a função que transforma produto em soma: o logaritmo.',
        },
        {
          id: 'ex-3.3.2',
          question: 'Uma xícara espatifada nunca volta a se montar sozinha porque:',
          options: [
            'As leis de Newton proíbem esse processo.',
            'Existem incomparavelmente mais arranjos microscópicos correspondentes a "quebrada" do que a "inteira" — a reversão é possível, mas improvável a ponto de nunca ocorrer.',
            'A energia se perdeu durante a queda.',
            'A gravidade age só em um sentido.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'As leis microscópicas são reversíveis no tempo. A assimetria é estatística: o macroestado com mais microestados domina de forma esmagadora quando N ~ 10²³.',
        },
        {
          id: 'ex-3.3.3',
          question: 'Uma geladeira reduz a entropia de seu interior. Isso viola a segunda lei?',
          options: [
            'Sim, e é por isso que geladeiras consomem energia elétrica.',
            'Não: a entropia despejada no ambiente supera a reduzida no interior, e o balanço total aumenta.',
            'Não, porque a segunda lei só vale para gases.',
            'Sim, mas o efeito é pequeno demais para ser medido.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A segunda lei se aplica ao sistema isolado. A geladeira exporta mais entropia para a cozinha (pela grade traseira) do que remove de dentro — o total sempre cresce.',
        },
      ],
    },

    {
      id: '3.4',
      title: '3.4. Primeira Lei da Termodinâmica',
      objetivo:
        'Ver a conservação de energia estendida a processos térmicos — e entender por que calor e trabalho não são funções de estado.',
      prerequisitos: ['2.4', '3.2'],
      fontes: ['libretexts-fisica-2-pt', 'tong-statphys', 'openstax-fisica-2'],
      content: String.raw`
### O problema

Na mecânica sem atrito a energia se conserva. Com atrito, ela parece sumir. Uma vez estabelecido que calor é energia em trânsito (tópico 3.2), a suspeita se confirma: nada some, apenas muda de forma. Falta transformar a suspeita em equação.

### A construção

**O enunciado.** A energia interna $U$ de um sistema varia por duas vias — calor trocado e trabalho realizado:

$$
\Delta U = Q - W,
$$

com a convenção de que $Q$ é o calor **recebido** pelo sistema e $W$ o trabalho **realizado por** ele. Aquecer o gás aumenta $U$; deixá-lo expandir empurrando um pistão diminui.

**Função de estado e função de processo.** Aqui está a sutileza central do tópico. A energia interna $U$ é **função de estado**: depende só de onde o sistema está, não de como chegou. Já $Q$ e $W$ dependem do caminho — leve um gás do mesmo estado inicial ao mesmo estado final por dois processos distintos e os valores de calor e trabalho serão diferentes, ainda que $\Delta U$ seja idêntico.

Por isso a notação cuidadosa escreve $dU$ para a diferencial exata e $\delta Q$, $\delta W$ para as inexatas. E por isso a frase "o sistema contém tanto calor" é malformada: calor não é conteúdo, é trânsito. O que o sistema contém é $U$.

**Trabalho de expansão.** Para um gás que empurra um pistão contra pressão $p$:

$$
W = \int_{V_1}^{V_2} p\,dV,
$$

que é a área sob a curva no diagrama $p$–$V$. Como caminhos diferentes entre os mesmos extremos delimitam áreas diferentes, fica visível *por que* o trabalho depende do processo.

**Quatro processos de referência.** *Isotérmico* ($T$ constante): num gás ideal $U$ depende só de $T$, logo $\Delta U = 0$ e todo calor recebido vira trabalho. *Isovolumétrico* ($V$ constante): não há trabalho, e todo calor vai para $U$. *Isobárico* ($p$ constante): $W = p\,\Delta V$. *Adiabático* ($Q = 0$): $\Delta U = -W$, e o gás esfria ao se expandir — é por isso que o ar sobe, expande e forma nuvem, e que a válvula de um botijão fica gelada.

**O que a lei proíbe.** Não existe máquina de movimento perpétuo de primeira espécie: nenhum dispositivo produz trabalho sem consumir energia equivalente. Todo projeto desse tipo já submetido a escritórios de patente é, sem exceção, um erro de contabilidade.

### A declaração

A primeira lei da termodinâmica afirma que a variação da energia interna de um sistema é igual ao calor recebido menos o trabalho realizado por ele. É a conservação da energia estendida a processos térmicos, e distingue a energia interna — função de estado — de calor e trabalho, que são modos de transferência dependentes do caminho.

### Onde se tropeça

- **Errar o sinal.** Fixe a convenção antes de começar e mantenha-a: em física costuma-se usar $\Delta U = Q - W$; em engenharia química é comum $\Delta U = Q + W$, com $W$ definido como o trabalho realizado *sobre* o sistema.
- **Tratar $Q$ e $W$ como propriedades do sistema.** São propriedades do *processo*.
- **Achar que adiabático é o mesmo que isotérmico.** Num processo adiabático não há troca de calor, e justamente por isso a temperatura muda.
`,
      exercises: [
        {
          id: 'ex-3.4.1',
          question: 'Por que a energia interna é função de estado, mas calor e trabalho não são?',
          options: [
            'Porque a energia interna é sempre positiva.',
            'Porque U depende apenas do estado atual do sistema, enquanto Q e W dependem do caminho percorrido entre os estados.',
            'Porque calor e trabalho não têm unidade de energia.',
            'Porque U é medido diretamente e Q e W são calculados.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Dois processos diferentes ligando os mesmos estados inicial e final dão o mesmo ΔU, mas valores distintos de Q e de W. Por isso se escreve dU exata e δQ, δW inexatas.',
        },
        {
          id: 'ex-3.4.2',
          question: 'Num processo isotérmico com gás ideal, o calor recebido pelo sistema:',
          options: [
            'É integralmente convertido em trabalho, pois ΔU = 0.',
            'É integralmente convertido em energia interna.',
            'É nulo, porque a temperatura não varia.',
            'Divide-se igualmente entre trabalho e energia interna.',
          ],
          correctAnswerIndex: 0,
          explanation:
            'A energia interna de um gás ideal depende só da temperatura. Mantida T constante, ΔU = 0, e a primeira lei dá Q = W.',
        },
        {
          id: 'ex-3.4.3',
          question: 'Ao abrir a válvula de um botijão, o metal fica gelado. A explicação é:',
          options: [
            'O gás recebe calor do ambiente ao sair.',
            'A expansão é praticamente adiabática: sem tempo para trocar calor, o gás realiza trabalho às custas da própria energia interna e esfria.',
            'A pressão externa aquece o metal por atrito.',
            'O gás muda de fase ao sair, absorvendo calor latente do metal.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Com Q ≈ 0, a primeira lei dá ΔU = −W. O trabalho de expansão é pago com energia interna, e a temperatura cai. É o mesmo mecanismo que forma nuvens no ar ascendente.',
        },
      ],
    },

    {
      id: '3.5',
      title: '3.5. Segunda Lei da Termodinâmica',
      objetivo:
        'Entender por que a conservação de energia não basta, e por que existe um teto de eficiência que nenhuma engenharia derruba.',
      prerequisitos: ['3.3', '3.4'],
      fontes: ['tong-statphys', 'feynman-i', 'libretexts-fisica-2-pt'],
      content: String.raw`
### O problema

A primeira lei permite coisas que nunca acontecem. Uma xícara de café esfriando enquanto a cozinha esquenta conserva energia — e o processo inverso, o café ferver espontaneamente enquanto a cozinha esfria um pouco, **também** conservaria. A conservação de energia não distingue os dois. Falta uma lei que diga qual direção a natureza toma.

### A construção

**Três enunciados equivalentes.** *Clausius*: é impossível um processo cujo único efeito seja transferir calor de um corpo frio para um quente. *Kelvin–Planck*: é impossível um processo cujo único efeito seja converter integralmente calor em trabalho. *Entrópico*: em um sistema isolado,

$$
\Delta S \ge 0,
$$

com igualdade apenas em processos reversíveis. Parecem afirmações sobre coisas distintas — geladeiras, motores, contagem de microestados — e demonstra-se que uma implica a outra.

**Assimetria fundamental entre trabalho e calor.** Trabalho converte-se integralmente em calor: basta esfregar as mãos. O caminho inverso é restrito. A razão fica clara com o tópico 3.3: trabalho é movimento organizado, calor é movimento desorganizado. Ir de organizado para desorganizado é fácil porque há mais microestados desorganizados. O contrário exige pagar em entropia noutro lugar.

**O limite de Carnot.** Qualquer motor térmico operando entre um reservatório quente $T_H$ e um frio $T_C$ tem eficiência limitada por

$$
\eta \le 1 - \frac{T_C}{T_H},
$$

com temperaturas em kelvin. O resultado é notável pelo que **não** contém: não menciona o combustível, o fluido de trabalho, o material ou a genialidade do projeto. É um teto imposto pela segunda lei.

Números concretos: uma termelétrica com vapor a $550\ ^\circ\text{C}$ (823 K) descarregando a $30\ ^\circ\text{C}$ (303 K) tem teto de $1 - 303/823 \approx 63\%$. Usinas reais chegam a cerca de 40%. A diferença entre 40% e 63% é problema de engenharia; a diferença entre 63% e 100% é proibida pela física.

Note ainda o que a fórmula prevê: só haveria eficiência de 100% com $T_C = 0\ \text{K}$, que a terceira lei declara inatingível.

**O status da lei.** Diferentemente das outras, a segunda lei não é uma verdade microscópica: é estatística. Flutuações que a violam localmente ocorrem e são medidas em sistemas pequenos — o teorema de flutuação de Jarzynski quantifica exatamente sua probabilidade. Para sistemas macroscópicos, porém, essa probabilidade é tão pequena que a lei é, na prática, absoluta. Foi disso que Eddington falou ao dizer que uma teoria em conflito com a segunda lei não tem esperança alguma.

### A declaração

A segunda lei da termodinâmica afirma que a entropia de um sistema isolado nunca diminui, sendo constante apenas em processos reversíveis. Dela segue que nenhum motor térmico pode converter integralmente calor em trabalho, e que a eficiência de qualquer máquina entre duas temperaturas é limitada pelo rendimento de Carnot.

### Onde se tropeça

- **Achar que a vida ou a evolução violam a segunda lei.** Sistemas vivos são abertos: exportam entropia para o ambiente e reduzem localmente a sua às custas do aumento global.
- **Confundir os dois tipos de moto-perpétuo.** O de primeira espécie viola a conservação de energia; o de segunda a respeita, mas violaria a segunda lei ao converter calor ambiente integralmente em trabalho.
- **Ler o limite de Carnot como falha de engenharia.** É um teto teórico; nenhuma tecnologia futura o ultrapassará.
`,
      exercises: [
        {
          id: 'ex-3.5.1',
          question: 'Por que a primeira lei sozinha não explica que o café esfria e nunca esquenta espontaneamente?',
          options: [
            'Porque a primeira lei só vale para gases ideais.',
            'Porque ambos os processos conservam energia — é preciso a segunda lei para selecionar a direção.',
            'Porque a energia do café é menor que a da cozinha.',
            'Porque a primeira lei não se aplica a líquidos.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A conservação de energia é simétrica no tempo: permite os dois sentidos. Só o critério entrópico, ΔS ≥ 0, distingue o que ocorre do que não ocorre.',
        },
        {
          id: 'ex-3.5.2',
          question: 'Uma usina opera entre 823 K e 303 K. A máxima eficiência teórica é aproximadamente:',
          options: ['37%', '63%', '85%', '100%, se a engenharia for perfeita'],
          correctAnswerIndex: 1,
          explanation:
            'η ≤ 1 − T_C/T_H = 1 − 303/823 ≈ 0,63. Nenhum fluido de trabalho, material ou projeto ultrapassa esse teto.',
        },
        {
          id: 'ex-3.5.3',
          question: 'Um ser vivo constrói estruturas altamente ordenadas. Isso contraria a segunda lei?',
          options: [
            'Sim, e é um problema em aberto da biologia.',
            'Não: organismos são sistemas abertos, que reduzem a própria entropia exportando mais entropia ainda para o ambiente.',
            'Não, porque a segunda lei não se aplica à matéria orgânica.',
            'Sim, mas o efeito é compensado pela radiação solar recebida.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A lei restringe sistemas isolados. Um organismo consome energia de baixa entropia e descarta calor e resíduos de alta entropia; o balanço total do conjunto organismo + ambiente aumenta.',
        },
      ],
    },

    {
      id: '3.6',
      title: '3.6. Equilíbrio termodinâmico',
      objetivo:
        'Entender por que o equilíbrio é o estado de entropia máxima — e por que ele é a condição de validade de toda a termodinâmica.',
      prerequisitos: ['3.3', '3.5'],
      fontes: ['tong-statphys', 'libretexts-fisica-2-pt'],
      content: String.raw`
### O problema

Toda variável termodinâmica pressupõe algo que costuma passar despercebido. Falar da "temperatura do café" só faz sentido se o café tiver *uma* temperatura — se a superfície estiver a 90 °C e o fundo a 60 °C, o símbolo $T$ não se refere a nada. A termodinâmica clássica é, rigorosamente, uma teoria de estados de equilíbrio.

### A construção

**Definição.** Um sistema está em equilíbrio termodinâmico quando suas variáveis macroscópicas não mudam com o tempo e não há fluxos líquidos internos. São, na verdade, três condições simultâneas:

- **térmico** — temperatura uniforme, sem fluxo líquido de calor;
- **mecânico** — pressão equilibrada, sem movimento líquido;
- **químico** — potencial químico uniforme, sem reação ou difusão líquida.

**Equilíbrio não é ausência de atividade.** No nível microscópico, tudo continua acontecendo: moléculas colidem, evaporam e condensam sem parar. O que caracteriza o equilíbrio é o balanço — cada processo ocorre à mesma taxa que seu inverso. Água num copo fechado parece parada, e há evaporação e condensação em taxas iguais o tempo todo. Equilíbrio é um estado dinâmico.

**Por que o sistema vai para lá.** A resposta está no tópico 3.3: o equilíbrio é o macroestado com o maior número de microestados. Um sistema isolado evolui até $S$ atingir o máximo, e é isso que se quer dizer com "o equilíbrio é o estado de entropia máxima". Dessa condição de máximo saem as igualdades familiares — impondo $dS = 0$ para dois corpos em contato térmico, obtém-se $T_1 = T_2$; permitindo troca de volume, $p_1 = p_2$; permitindo troca de partículas, $\mu_1 = \mu_2$. As condições de equilíbrio não são postulados independentes: são consequências da maximização da entropia.

**Quase-estático e reversível.** Um processo é quase-estático quando é lento o bastante para que o sistema esteja em equilíbrio a cada instante. É uma idealização — mas é a única condição sob a qual as variáveis de estado estão definidas ao longo do caminho, e por isso os diagramas $p$–$V$ desenham curvas contínuas. Reversível é o processo quase-estático **sem dissipação**: só nele vale $\Delta S = 0$. Todo processo real é irreversível em algum grau, e o processo reversível funciona como o limite ideal contra o qual os reais são medidos.

**Onde a teoria não alcança.** Sistemas fora do equilíbrio — uma chama, uma célula viva, o clima, o universo em expansão — não são cobertos pela termodinâmica clássica. Tratá-los exige termodinâmica de não-equilíbrio, uma área ainda em aberto. Vale registrar: a maior parte do universo interessante está fora do equilíbrio, e é aí que se organiza a estrutura.

### A declaração

Equilíbrio termodinâmico é o estado em que as variáveis macroscópicas permanecem constantes e não há fluxos líquidos de energia, volume ou matéria. Corresponde ao macroestado de entropia máxima compatível com os vínculos impostos, e as igualdades de temperatura, pressão e potencial químico decorrem dessa maximização.

### Onde se tropeça

- **Confundir equilíbrio com repouso.** No nível microscópico o equilíbrio é intensamente dinâmico; o que se equilibra são as taxas.
- **Confundir estado estacionário com equilíbrio.** Uma barra com as pontas em temperaturas fixas atinge um perfil constante no tempo, mas há fluxo contínuo de calor — é estacionário, não é equilíbrio, e há produção contínua de entropia.
- **Aplicar variáveis de estado fora do equilíbrio.** Falar da temperatura de um sistema com gradientes fortes é usar um símbolo sem referente.
`,
      exercises: [
        {
          id: 'ex-3.6.1',
          question: 'No equilíbrio termodinâmico, o que ocorre no nível microscópico?',
          options: [
            'Todo movimento molecular cessa.',
            'Processos e seus inversos continuam ocorrendo, mas em taxas iguais.',
            'As moléculas se distribuem em posições fixas.',
            'A energia cinética de cada molécula fica idêntica.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Equilíbrio é balanço, não paralisia. Numa garrafa fechada, evaporação e condensação prosseguem indefinidamente em taxas iguais.',
        },
        {
          id: 'ex-3.6.2',
          question: 'De onde vem a condição T₁ = T₂ para dois corpos em contato térmico?',
          options: [
            'É um postulado independente da termodinâmica.',
            'Da maximização da entropia total: impondo dS = 0 para a troca de energia entre eles, resulta a igualdade das temperaturas.',
            'Da primeira lei aplicada a cada corpo.',
            'Da definição da escala Kelvin.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'O equilíbrio é o máximo de S. Derivando a entropia total em relação à energia trocada e igualando a zero, obtém-se 1/T₁ = 1/T₂ — a igualdade de temperaturas é consequência, não postulado.',
        },
        {
          id: 'ex-3.6.3',
          question: 'Uma barra metálica com uma ponta a 100 °C e outra a 0 °C, mantidas fixas, atinge um perfil de temperatura constante no tempo. Esse estado é:',
          options: [
            'Equilíbrio termodinâmico, pois nada muda com o tempo.',
            'Estado estacionário fora do equilíbrio: há fluxo contínuo de calor e produção contínua de entropia.',
            'Equilíbrio mecânico, mas não térmico.',
            'Um processo reversível.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Constância no tempo não basta: o equilíbrio exige ausência de fluxos líquidos. Aqui o calor atravessa a barra ininterruptamente, e o sistema só se mantém porque reservatórios externos sustentam as pontas.',
        },
      ],
    },

    {
      id: '3.7',
      title: '3.7. Potenciais termodinâmicos',
      objetivo:
        'Entender por que existem quatro potenciais e como escolher o certo para as condições do seu experimento.',
      prerequisitos: ['3.5', '3.6'],
      fontes: ['tong-statphys', 'openstax-fisica-2'],
      content: String.raw`
### O problema

O critério de equilíbrio "entropia máxima" é correto e quase inútil na bancada, porque exige um sistema **isolado**, com energia e volume fixos. Nenhum experimento de química é assim: eles ocorrem em recipiente aberto, sob pressão atmosférica, mergulhados num banho térmico à temperatura ambiente. Precisamos de critérios de equilíbrio adaptados às condições em que se trabalha de fato.

### A construção

**A ideia.** Para cada conjunto de variáveis mantidas fixas existe uma função que é *minimizada* no equilíbrio. São os potenciais termodinâmicos, e há quatro deles porque há quatro combinações úteis de variáveis controladas.

**Energia interna $U(S,V)$.** O potencial natural quando entropia e volume são fixos. Sua diferencial reúne a primeira e a segunda leis numa expressão só:

$$
dU = T\,dS - p\,dV.
$$

Fixados $S$ e $V$, o equilíbrio minimiza $U$. O problema prático é evidente: ninguém sabe segurar a entropia constante numa bancada.

**Entalpia $H = U + pV$.** Trocando volume por pressão como variável controlada:

$$
dH = T\,dS + V\,dp.
$$

A pressão constante, o calor trocado é exatamente $\Delta H$. É por isso que tabelas de química listam entalpias de reação: uma reação em béquer aberto ocorre à pressão atmosférica, e $\Delta H$ é o que o calorímetro mede.

**Energia livre de Helmholtz $F = U - TS$.** Para temperatura e volume fixos:

$$
dF = -S\,dT - p\,dV.
$$

A $T$ e $V$ constantes, o equilíbrio minimiza $F$. A interpretação vale o esforço: $F$ é a parte da energia interna efetivamente disponível para realizar trabalho, já descontado o pedaço $TS$ que precisa permanecer como agitação térmica. Daí o nome "energia **livre**".

**Energia livre de Gibbs $G = U + pV - TS$.** Para temperatura e pressão fixas:

$$
dG = -S\,dT + V\,dp.
$$

É o potencial da vida real — química de bancada, bioquímica, transições de fase. A condição $\Delta G < 0$ é o critério de espontaneidade que se usa o tempo todo, e sua estrutura explica muita coisa:

$$
\Delta G = \Delta H - T\Delta S.
$$

Uma reação pode ser espontânea mesmo absorvendo calor ($\Delta H > 0$), desde que aumente bastante a entropia e a temperatura seja alta o suficiente. É exatamente o caso da dissolução do nitrato de amônio em água, que esfria a solução e ocorre assim mesmo — o gelo instantâneo de farmácia funciona por isso.

**Relações de Maxwell.** Como as diferenciais são exatas, as derivadas cruzadas comutam, e daí saem identidades como

$$
\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial p}{\partial S}\right)_V.
$$

Não é um jogo formal: essas relações permitem obter quantidades impossíveis de medir diretamente (como variações de entropia) a partir de quantidades que qualquer laboratório mede (pressão, volume, temperatura).

### A declaração

Potenciais termodinâmicos são funções de estado construídas de modo que cada uma seja minimizada no equilíbrio sob um conjunto específico de variáveis controladas: $U$ para $(S,V)$, $H$ para $(S,p)$, $F$ para $(T,V)$ e $G$ para $(T,p)$. A escolha do potencial é ditada pelas condições experimentais.

### Onde se tropeça

- **Usar $\Delta G$ fora de $T$ e $p$ constantes.** Fora dessas condições o critério de espontaneidade é outro.
- **Ler "energia livre" como se fosse toda a energia.** É a fração extraível como trabalho; o resto está imobilizado no termo $TS$.
- **Confundir espontâneo com rápido.** A conversão de diamante em grafite tem $\Delta G < 0$ e leva tempo geológico: termodinâmica diz *se* pode, cinética diz *quando*.
`,
      exercises: [
        {
          id: 'ex-3.7.1',
          question: 'Por que a energia livre de Gibbs é o potencial mais usado em química?',
          options: [
            'Porque é a mais fácil de calcular.',
            'Porque as reações de bancada ocorrem a temperatura e pressão constantes, que são exatamente as variáveis naturais de G.',
            'Porque só ela tem unidade de energia.',
            'Porque é a única que decresce com o tempo.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cada potencial corresponde a um conjunto de variáveis controladas. Béquer aberto em banho térmico significa p e T fixos — e nessas condições o equilíbrio minimiza G.',
        },
        {
          id: 'ex-3.7.2',
          question: 'Uma reação absorve calor (ΔH > 0) e ainda assim ocorre espontaneamente. Como?',
          options: [
            'Isso é impossível pela primeira lei.',
            'Se ΔS for suficientemente positivo, o termo −TΔS torna ΔG = ΔH − TΔS negativo.',
            'Apenas se a pressão for muito alta.',
            'Somente em sistemas isolados.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'A espontaneidade é decidida por ΔG, não por ΔH. A dissolução do nitrato de amônio esfria a água e ocorre assim mesmo, porque o ganho de entropia domina.',
        },
        {
          id: 'ex-3.7.3',
          question: 'A energia livre de Helmholtz F = U − TS recebe esse nome porque:',
          options: [
            'É a energia que não custa nada para ser obtida.',
            'É a parcela da energia interna disponível para realizar trabalho, descontada a porção TS presa como agitação térmica.',
            'É sempre menor que zero.',
            'Não depende da temperatura.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Nem toda a energia interna é extraível: a parte TS precisa continuar como movimento desordenado por exigência da segunda lei. O que sobra — o "livre" — é o teto de trabalho a T e V constantes.',
        },
      ],
    },

    {
      id: '3.8',
      title: '3.8. Transformada de Legendre',
      objetivo:
        'Entender a operação matemática que gera os potenciais termodinâmicos — e reconhecê-la depois na mecânica analítica.',
      prerequisitos: ['1.7', '3.7'],
      fontes: ['tong-statphys', 'tong-teaching'],
      content: String.raw`
### O problema

No tópico anterior, $H$, $F$ e $G$ apareceram como definições que funcionam. Mas de onde saíram? Por que somar $pV$ e subtrair $TS$, e não outra combinação qualquer? Existe uma única operação matemática por trás dos quatro potenciais, e ela é usada de novo — sem aviso — na passagem da mecânica lagrangiana para a hamiltoniana no módulo 5.

### A construção

**A pergunta abstrata.** Você tem $f(x)$ e quer trocar a variável independente: em vez de descrever a função por seu valor em cada $x$, quer descrevê-la pela sua **inclinação** $p = df/dx$. A troca ingênua — isolar $x$ em função de $p$ e substituir — **perde informação**: todas as translações verticais de $f$ têm exatamente as mesmas inclinações. Só a inclinação não determina a curva.

**A solução.** Guarde, para cada inclinação $p$, o ponto onde a reta tangente de inclinação $p$ corta o eixo vertical. Isso preserva tudo. A operação é a transformada de Legendre:

$$
g(p) = p\,x(p) - f(x(p)), \qquad p = \frac{df}{dx}.
$$

Uma curva convexa fica assim descrita de dois modos equivalentes: como conjunto de pontos, ou como envelope de suas retas tangentes. Nada se perde — e a prova disso é que a transformada aplicada duas vezes devolve a função original.

**Por que os sinais dos potenciais são o que são.** Agora tudo se encaixa. Partindo de $dU = T\,dS - p\,dV$, a variável conjugada de $S$ é $T = (\partial U/\partial S)_V$. Trocar $S$ por $T$ como variável independente é exatamente uma transformada de Legendre:

$$
F = U - TS.
$$

O termo $-TS$ não é escolha estética: é a estrutura da transformada. Do mesmo modo, trocar $V$ por $p$ dá $H = U + pV$ (o sinal muda porque na diferencial o termo é $-p\,dV$), e trocar as duas ao mesmo tempo dá $G$. Os quatro potenciais são a mesma função vista em quatro pares de variáveis.

**O mesmo movimento na mecânica.** A lagrangiana $L(q, \dot{q})$ descreve o sistema pelas posições e velocidades. Definindo o momento conjugado $p = \partial L/\partial \dot{q}$ e transformando,

$$
H(q,p) = p\dot{q} - L,
$$

chega-se à hamiltoniana. É literalmente a mesma operação — a única diferença é o nome das variáveis. Quem entendeu Legendre na termodinâmica já entendeu metade do módulo 5, e a estrutura reaparece de novo em teoria de campos, na relação entre densidade lagrangiana e hamiltoniana.

**Por que a convexidade importa.** A transformada só é bem definida e inversível se a função for convexa — caso contrário, uma mesma inclinação ocorreria em vários pontos e a correspondência quebraria. Isso não é tecnicalidade: a convexidade da entropia é o que garante a estabilidade termodinâmica, e é exatamente onde ela falha que ocorrem as transições de fase de primeira ordem.

### A declaração

A transformada de Legendre troca uma variável independente por sua derivada conjugada, preservando toda a informação da função ao descrevê-la pelo envelope de suas retas tangentes. Os potenciais termodinâmicos são transformadas de Legendre da energia interna, e a passagem da lagrangiana à hamiltoniana é a mesma operação.

### Onde se tropeça

- **Achar que basta substituir $x$ por $p$.** Isso perde a constante de integração e, com ela, informação. O termo $p\,x$ é o que restaura a correspondência um-a-um.
- **Errar o sinal.** O sinal decorre do sinal do termo na diferencial: $-p\,dV$ leva a $+pV$; $+T\,dS$ leva a $-TS$.
- **Ignorar a exigência de convexidade.** Sem ela a transformada deixa de ser inversível — e é justamente aí que a física fica interessante.
`,
      exercises: [
        {
          id: 'ex-3.8.1',
          question: 'Por que não basta simplesmente substituir x por p para trocar a variável independente de uma função?',
          options: [
            'Porque a álgebra fica complicada demais.',
            'Porque a inclinação sozinha não distingue funções que diferem por uma constante — informação seria perdida.',
            'Porque p pode ser negativo.',
            'Porque a derivada nem sempre existe.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Todas as translações verticais de f têm as mesmas inclinações. A transformada de Legendre resolve isso guardando também onde a tangente corta o eixo vertical, o que torna a correspondência um-a-um.',
        },
        {
          id: 'ex-3.8.2',
          question: 'A energia livre de Helmholtz F = U − TS é, matematicamente:',
          options: [
            'Uma definição empírica ajustada aos dados de calorimetria.',
            'A transformada de Legendre de U que troca a entropia S pela temperatura T como variável independente.',
            'A integral de U em relação à temperatura.',
            'A média entre a energia interna e a entalpia.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Como T = (∂U/∂S)_V, trocar S por T é exatamente a transformada de Legendre — e o termo −TS é a estrutura dessa operação, não uma escolha arbitrária.',
        },
        {
          id: 'ex-3.8.3',
          question: 'Que outra passagem da física é a mesma transformada de Legendre?',
          options: [
            'A passagem das coordenadas cartesianas para as polares.',
            'A passagem da lagrangiana L(q, q̇) para a hamiltoniana H(q, p), com p = ∂L/∂q̇.',
            'A passagem da velocidade média para a instantânea.',
            'A passagem do referencial inercial para o acelerado.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'H = pq̇ − L tem exatamente a forma g(p) = px − f(x). Trocar velocidade por momento como variável independente é a mesma operação que trocar entropia por temperatura.',
        },
      ],
    },
  ],
};
