import type { Fonte } from '../types';

/**
 * Registro central de fontes.
 *
 * Duas razões para centralizar em vez de repetir o link em cada tópico:
 * as mesmas obras são citadas dezenas de vezes ao longo dos 28 módulos, e a
 * auditoria de links precisa de uma lista única para conferir.
 *
 * Critério de entrada, deliberadamente estreito: só entra o que dá para ler
 * legalmente sem pagar — domínio público, licença aberta (CC) ou edição
 * digital publicada pelo próprio autor ou instituição. Cópia não autorizada de
 * livro em catálogo não entra: além de injusta com quem publica, esses links
 * morrem, e um portal de estudo não pode ser construído sobre eles.
 *
 * Onde o livro de referência ainda está em catálogo, a resposta não é apontar
 * para uma cópia pirata — é cobrir o conteúdo no próprio texto do tópico,
 * apoiado no aparato aberto. Felizmente, em física e matemática esse aparato é
 * excepcional: as notas de Cambridge, as Feynman Lectures, o OpenStax, o MIT
 * OCW e o portal da OBMEP cobrem praticamente toda a grade.
 */
export const FONTES: Record<string, Fonte> = {
  // ─── Notas de aula de Cambridge (DAMTP) ────────────────────────────────
  'tong-teaching': {
    id: 'tong-teaching',
    autor: 'David Tong',
    titulo: 'Cambridge Lecture Notes on Theoretical Physics',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/teaching.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
    nota: 'Índice de todos os cursos. Se você fosse ler uma coisa só em física teórica de graça, seria isto.',
  },
  'tong-dynamics': {
    id: 'tong-dynamics',
    autor: 'David Tong',
    titulo: 'Dynamics and Relativity',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/relativity.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
    nota: 'Mecânica newtoniana feita com rigor, terminando em relatividade restrita.',
  },
  'tong-em': {
    id: 'tong-em',
    autor: 'David Tong',
    titulo: 'Electromagnetism',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/justem.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
  },
  'tong-statphys': {
    id: 'tong-statphys',
    autor: 'David Tong',
    titulo: 'Statistical Physics',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/statphys.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
    nota: 'Deriva a termodinâmica a partir da contagem de microestados, que é a ordem em que ela faz sentido.',
  },
  'tong-qft': {
    id: 'tong-qft',
    autor: 'David Tong',
    titulo: 'Quantum Field Theory',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/qft.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
  },
  'tong-gaugetheory': {
    id: 'tong-gaugetheory',
    autor: 'David Tong',
    ano: '2018',
    titulo: 'Gauge Theory',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/gaugetheory.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
    nota: 'Cerca de 400 páginas sobre teorias de gauge não abelianas, com os capítulos disponíveis em separado. É a continuação natural das notas de TQC.',
  },
  'tong-gr': {
    id: 'tong-gr',
    autor: 'David Tong',
    titulo: 'General Relativity',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/gr.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
  },
  'tong-cosmo': {
    id: 'tong-cosmo',
    autor: 'David Tong',
    titulo: 'Cosmology',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/cosmo.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
    nota: 'Não pressupõe relatividade geral nem mecânica estatística — dá para começar por aqui.',
  },
  'tong-aqm': {
    id: 'tong-aqm',
    autor: 'David Tong',
    titulo: 'Applications of Quantum Mechanics',
    publicacao: 'DAMTP, University of Cambridge',
    url: 'https://www.damtp.cam.ac.uk/user/tong/aqm.html',
    idioma: 'en',
    tipo: 'notas-de-aula',
    acesso: 'livre',
  },

  // ─── Livros abertos ────────────────────────────────────────────────────
  'feynman-i': {
    id: 'feynman-i',
    autor: 'Richard P. Feynman, Robert B. Leighton, Matthew Sands',
    ano: '1963',
    titulo: 'The Feynman Lectures on Physics, Volume I',
    publicacao: 'Caltech',
    url: 'https://www.feynmanlectures.caltech.edu/I_toc.html',
    idioma: 'en',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Edição online autorizada pelo Caltech. Livre para ler no navegador; a autorização não inclui direito de download.',
  },
  'feynman-site': {
    id: 'feynman-site',
    autor: 'Richard P. Feynman, Robert B. Leighton, Matthew Sands',
    ano: '1963',
    titulo: 'The Feynman Lectures on Physics (edição online)',
    publicacao: 'Caltech',
    url: 'https://www.feynmanlectures.caltech.edu/',
    idioma: 'en',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Os três volumes, com equações em LaTeX e figuras vetoriais.',
  },
  'woit-grupos': {
    id: 'woit-grupos',
    autor: 'Peter Woit',
    ano: '2017',
    titulo: 'Quantum Theory, Groups and Representations: An Introduction',
    publicacao: 'Columbia University',
    url: 'https://www.math.columbia.edu/~woit/QM/qmbook.pdf',
    idioma: 'en',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Versão final publicada pelo próprio autor no site do departamento. Trata grupos, álgebras de Lie e representações tendo a quântica como motivação, e não o contrário.',
  },
  'openstax-fisica-1': {
    id: 'openstax-fisica-1',
    autor: 'OpenStax',
    ano: '2021',
    titulo: 'Física universitaria, volumen 1',
    publicacao: 'Rice University',
    url: 'https://openstax.org/details/books/f%C3%ADsica-universitaria-volumen-1',
    idioma: 'es',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Licença CC BY: mecânica, ondas e oscilações. PDF completo para download.',
  },
  'openstax-fisica-2': {
    id: 'openstax-fisica-2',
    autor: 'OpenStax',
    ano: '2021',
    titulo: 'Física universitaria, volumen 2',
    publicacao: 'Rice University',
    url: 'https://openstax.org/details/books/f%C3%ADsica-universitaria-volumen-2',
    idioma: 'es',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Termodinâmica, eletricidade e magnetismo, sob CC BY.',
  },
  'libretexts-fisica-pt': {
    id: 'libretexts-fisica-pt',
    autor: 'OpenStax / LibreTexts',
    titulo: 'Física Universitária (tradução para o português)',
    publicacao: 'LibreTexts',
    url: 'https://query.libretexts.org/Idioma_Portugues/Fisica_Universitaria_(OpenStax)',
    idioma: 'pt',
    tipo: 'livro',
    acesso: 'livre',
    nota: 'Livro-texto universitário completo, em português, sob licença aberta. É a resposta mais direta a quem não pode comprar Halliday ou Moysés.',
  },
  'libretexts-fisica-2-pt': {
    id: 'libretexts-fisica-2-pt',
    autor: 'OpenStax / LibreTexts',
    titulo: 'Física Universitária II — Termodinâmica, Eletricidade e Magnetismo',
    publicacao: 'LibreTexts',
    url: 'https://query.libretexts.org/Idioma_Portugues/F%C3%ADsica_Universit%C3%A1ria_II_-_Termodin%C3%A2mica,_Eletricidade_e_Magnetismo_(OpenStax)',
    idioma: 'pt',
    tipo: 'livro',
    acesso: 'livre',
  },
  'libretexts-fisica-3-pt': {
    id: 'libretexts-fisica-3-pt',
    autor: 'OpenStax / LibreTexts',
    titulo: 'Física Universitária III — Óptica e Física Moderna',
    publicacao: 'LibreTexts',
    url: 'https://query.libretexts.org/Idioma_Portugues/Fisica_Universitaria_III_-_Optica_e_Fisica_Moderna_(OpenStax)',
    idioma: 'pt',
    tipo: 'livro',
    acesso: 'livre',
  },

  // ─── Cursos abertos ────────────────────────────────────────────────────
  'ocw-8-01': {
    id: 'ocw-8-01',
    autor: 'Massachusetts Institute of Technology',
    titulo: '8.01SC — Classical Mechanics',
    publicacao: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
    idioma: 'en',
    tipo: 'curso',
    acesso: 'livre',
    nota: 'Curso completo: vídeos, listas e provas com gabarito.',
  },
  'ocw-18-01': {
    id: 'ocw-18-01',
    autor: 'Massachusetts Institute of Technology',
    titulo: '18.01SC — Single Variable Calculus',
    publicacao: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/',
    idioma: 'en',
    tipo: 'curso',
    acesso: 'livre',
  },
  'obmep-portal': {
    id: 'obmep-portal',
    autor: 'IMPA / OBMEP',
    titulo: 'Portal da Matemática',
    publicacao: 'Instituto de Matemática Pura e Aplicada',
    url: 'https://portaldaobmep.impa.br/',
    idioma: 'pt',
    tipo: 'curso',
    acesso: 'livre',
    nota: 'Em português, do 6º ano ao 3º do ensino médio: mais de 5.400 videoaulas, apostilas e exercícios resolvidos. Parte do acervo pede cadastro gratuito.',
  },
  'obmep-modulos': {
    id: 'obmep-modulos',
    autor: 'IMPA / OBMEP',
    titulo: 'Portal da Matemática — módulos por série',
    publicacao: 'Instituto de Matemática Pura e Aplicada',
    url: 'https://portaldaobmep.impa.br/index.php/modulo/index',
    idioma: 'pt',
    tipo: 'curso',
    acesso: 'livre',
  },
  'ocw-8-323': {
    id: 'ocw-8-323',
    autor: 'Massachusetts Institute of Technology',
    ano: '2023',
    titulo: '8.323 — Relativistic Quantum Field Theory I',
    publicacao: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu/courses/8-323-relativistic-quantum-field-theory-i-spring-2023/',
    idioma: 'en',
    tipo: 'curso',
    acesso: 'livre',
    nota: 'Notas, listas e gabaritos. As aulas sobre simetrias e leis de conservação cobrem exatamente a passagem da teoria de grupos para a teoria de campos.',
  },
  'khan-pt': {
    id: 'khan-pt',
    autor: 'Khan Academy',
    titulo: 'Cursos de matemática e física em português',
    publicacao: 'Khan Academy',
    url: 'https://pt.khanacademy.org/',
    idioma: 'pt',
    tipo: 'curso',
    acesso: 'livre',
    nota: 'Exercícios adaptativos em português. Útil para fechar lacunas de base antes de encarar o formalismo.',
  },

  // ─── Artigos e notas de referência ─────────────────────────────────────
  'rbef-teoria-de-grupos': {
    id: 'rbef-teoria-de-grupos',
    autor: 'J. Furtado',
    ano: '2021',
    titulo: 'Teoria de Grupos e o Papel das Simetrias em Física',
    publicacao: 'Revista Brasileira de Ensino de Física, v. 43',
    url: 'https://www.scielo.br/j/rbef/a/tx6ZpVfzWmbwNgKFLGznmfJ/?lang=pt',
    idioma: 'pt',
    tipo: 'artigo',
    acesso: 'livre',
    nota: 'Em português e de acesso aberto. Parte da invariância de uma grandeza para só então introduzir o grupo de simetria — a mesma ordem adotada aqui.',
  },
  'carroll-gr': {
    id: 'carroll-gr',
    autor: 'Sean M. Carroll',
    ano: '1997',
    titulo: 'Lecture Notes on General Relativity',
    publicacao: 'arXiv:gr-qc/9712019',
    url: 'https://arxiv.org/abs/gr-qc/9712019',
    idioma: 'en',
    tipo: 'artigo',
    acesso: 'livre',
    nota: 'Um semestre de relatividade geral, do zero às equações de Einstein. Virou livro depois, mas as notas seguem no arXiv.',
  },
};

/** Resolve ids de fonte, ignorando em silêncio ids que não existem. */
export function fontesDe(ids: string[] | undefined): Fonte[] {
  if (!ids) return [];
  return ids.map((id) => FONTES[id]).filter((f): f is Fonte => Boolean(f));
}

export const TODAS_AS_FONTES = Object.values(FONTES);
