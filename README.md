# Cosmos Academy

Portal de estudos em português de matemática e física, da aritmética às
transições de fase cosmológicas. A grade tem **28 módulos** e **193
subtópicos**, organizados numa única trilha em que cada assunto aparece depois
do que ele pressupõe.

O alvo declarado do projeto é que quem estuda por aqui **não dependa de comprar
bibliografia cara**. Em física e matemática isso é possível: o aparato de
referência aberto — as notas de Cambridge, as Feynman Lectures, o OpenStax
(inclusive traduzido para o português), o MIT OpenCourseWare e o Portal da
Matemática do IMPA — cobre praticamente toda a grade, e é para ele que os
tópicos apontam.

## Estado atual

| | |
| --- | --- |
| Módulos mapeados | **28** |
| Subtópicos na grade | **193** |
| Tópicos escritos | **29** |
| Exercícios | **87** |
| Fontes livres no registro | **21** |

Escrito até aqui: **Matemática Fundamental** (1.1–1.10), **Física Introdutória**
(2.1–2.4), **Termodinâmica Básica** (3.1–3.8) e **Eletromagnetismo** (4.1–4.7). O restante da grade está
publicado como mapa: o tópico existe, é navegável, e a interface diz
honestamente que o texto ainda não foi redigido em vez de mostrar uma página
vazia disfarçada de pronta.

## Como o conteúdo é escrito

Cada tópico segue uma **estrutura progressiva** e nunca começa pela definição:

1. **O problema** — que pergunta forçou o conceito a existir.
2. **A construção** — o conceito é montado, com a matemática à vista.
3. **A declaração** — só aqui a definição é enunciada.
4. **Onde se tropeça** — os erros que de fato se cometem.

A ordem não é estilística. Definição antes do problema se decora e não se
entende; depois do problema, ela é a resposta de uma pergunta que o leitor já
tem. A estrutura é verificada automaticamente: um tópico marcado como escrito
que não tenha as quatro seções reprova a CI.

Toda fonte é um objeto tipado com autor, ano, veículo, idioma, tipo e nível de
acesso — e sempre com link para o original. O portal não hospeda cópia de nada,
e não aponta para cópia não autorizada: além de injusto com quem publica, esses
links morrem, e um material de estudo não pode ser construído sobre eles.

## Matemática

O conteúdo é Markdown com LaTeX, renderizado por KaTeX com as fontes
empacotadas no bundle (sem CDN). Duas armadilhas já custaram caro e hoje têm
teste que as barra:

- **`String.raw` é obrigatório.** Em template literal comum, `\f` de `\frac` é
  o caractere de form-feed: `$\frac{1}{2}mv^2$` chegava à tela como
  `$rac{1}{2}mv^2$`. O mesmo vale para `\theta` (tabulação) e `\nabla` (quebra
  de linha) — ou seja, para quase toda a notação de física. O compilador não
  reclama; o texto sai corrompido.
- **Equação em display precisa dos `$$` em linhas separadas.** `$$x$$` numa
  linha só é aceito pelo remark-math, mas renderiza como matemática *inline*: a
  fórmula em destaque acaba espremida no meio do parágrafo.

## Verificação

```bash
npm run lint       # checagem de tipos
npm run verificar  # integridade estrutural do conteúdo
npm run auditar    # falha se alguma fonte citada estiver fora do ar
npm run checar     # lint + verificar
```

`npm run verificar` confere, entre outras coisas: ids duplicados,
`correctAnswerIndex` fora do intervalo de alternativas, alternativas repetidas,
pré-requisitos e fontes apontando para ids inexistentes, caracteres de controle
no texto, `$` desbalanceado e as quatro seções obrigatórias.

Cada regra existe porque a falha correspondente já aconteceu neste repositório
ou é barata de prevenir. **Compilar não é funcionar**: todos os defeitos
encontrados aqui passavam pelo TypeScript sem uma reclamação sequer.

A auditoria de links roda em
[`.github/workflows/verificacao.yml`](.github/workflows/verificacao.yml) — em
todo PR, em todo push para `main` e semanalmente. O ambiente de
desenvolvimento em sandbox só alcança o registry do npm, então localmente todas
as URLs falham por bloqueio de rede e não por estarem quebradas; use
`--permitir-falha-local` para inspecionar o relatório sem reprovar.

### Domínios restritos

Alguns acervos recusam acesso automatizado vindo de faixas de IP de nuvem. Na
primeira execução da auditoria, o `damtp.cam.ac.uk` (as notas de Tong) falhou na
conexão em todas as 8 URLs, e o `feynmanlectures.caltech.edu` respondeu **403** —
que é resposta de servidor, não falha de rede: DNS, TCP e TLS completaram e o
servidor recusou o cliente. As páginas abrem normalmente num navegador.

Da CI é impossível distinguir esse bloqueio de um link morto. Reprovar por causa
disso teria uma consequência ruim e silenciosa: empurraria o portal a trocar as
notas de Cambridge e as Feynman Lectures por fontes piores só porque um runner
não as alcança. Então esses domínios ficam em
[`src/data/dominios-restritos.json`](src/data/dominios-restritos.json), com
motivo, evidência e data da última confirmação manual; aparecem em seção própria
do relatório e **não** reprovam a auditoria.

Eles continuam sendo testados a cada execução — com menos tentativas e prazo mais
curto, para não gastar minutos de CI esperando um bloqueio conhecido — de modo
que, no dia em que voltarem a responder, isso apareça no relatório. Qualquer URL
fora dessa lista que falhe continua quebrando a auditoria.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Stack: Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + KaTeX.

O progresso de leitura fica em `localStorage`, junto com o último tópico
visitado — recarregar a página não apaga o que já foi estudado.

## Estrutura

```
src/
  types.ts              modelo de conteúdo e de fontes
  data/
    fontes.ts           registro central de fontes livres
    curriculum.ts       montagem da grade, índices e busca
    modulos/            um arquivo por módulo escrito
  components/
scripts/
  verificar-conteudo.ts integridade estrutural
  auditar-links.ts      todas as URLs citadas
```

## Licença e direitos

Os textos dos tópicos são de elaboração própria. As obras externas pertencem a
seus detentores de direitos e são sempre referenciadas com link para o original.
