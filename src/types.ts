export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

/**
 * Uma fonte externa citada por um tópico.
 *
 * O portal não hospeda cópia de nada: toda afirmação que vale a pena conferir
 * aponta para o original. O campo `acesso` existe para tornar explícito o alvo
 * declarado do projeto — estudar por aqui não deve depender de comprar livro
 * caro —, então `livre` significa livre de verdade: obra em domínio público,
 * licença aberta ou edição digital autorizada pelo próprio autor/editora.
 */
export interface Fonte {
  id: string;
  autor: string;
  ano?: string;
  titulo: string;
  /** Veículo: universidade, editora, periódico, colaboração. */
  publicacao?: string;
  url: string;
  idioma: 'pt' | 'en' | 'es' | 'de' | 'fr';
  tipo: 'livro' | 'notas-de-aula' | 'curso' | 'artigo' | 'dados' | 'verbete' | 'video';
  acesso: 'livre' | 'cadastro-gratuito';
  /** Por que esta fonte foi escolhida, e o que ler nela. */
  nota?: string;
}

/**
 * Estágio de redação do subtópico. `pendente` é o estado inicial de tudo que
 * veio da grade curricular e ainda não foi escrito; a interface mostra isso ao
 * leitor em vez de fingir que a página existe.
 */
export type EstagioConteudo = 'completo' | 'pendente';

export interface SubTopic {
  id: string;
  title: string;
  /** Uma frase dizendo o que o leitor sai sabendo. */
  objetivo?: string;
  /** IDs de subtópicos que convém ler antes deste. */
  prerequisitos?: string[];
  content: string;
  /** Fontes citadas, por id do registro em `data/fontes.ts`. */
  fontes?: string[];
  exercises: Exercise[];
}

export interface Module {
  id: string;
  title: string;
  /** O que este módulo inteiro resolve, em uma frase. */
  descricao?: string;
  subtopics: SubTopic[];
}

export interface UserProgress {
  [subtopicId: string]: {
    completed: boolean;
    score?: number;
  };
}

/** Um subtópico está escrito quando tem conteúdo próprio. */
export function estagio(sub: SubTopic): EstagioConteudo {
  return sub.content.trim().length > 0 ? 'completo' : 'pendente';
}
