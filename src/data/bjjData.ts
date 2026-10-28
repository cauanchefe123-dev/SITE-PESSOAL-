import { ProfessorProfile, BJJService, ScheduleItem, AchievementItem, TestimonialItem, FaqItem } from '../types/bjj';
import { IMAGES } from '../assets/images';

export const initialProfile: ProfessorProfile = {
  name: 'CAUAN',
  lastName: 'SANTOS',
  nickname: 'Cauan Santos BJJ',
  topBadge: 'INVICTO NA CATEGORIA DESDE A FAIXA AZUL · +60 TÍTULOS',
  heroLine1: 'FAIXA PRETA.',
  heroLine2: 'CAMPEÃO POR ESSÊNCIA.',
  modalities: 'JIU-JITSU BRASILEIRO · ESPECIALISTA EM ARM-LOCK VOADOR',
  belt: 'Faixa Preta',
  beltRank: 'Black Belt',
  tagline: 'Professor de Jiu-Jitsu Brasileiro & Atleta — Goiânia, GO',
  bio: 'Com mais de 11 anos de trajetória no Jiu-Jitsu, minha história com a modalidade começou em um projeto social comunitário, onde tive meu primeiro contato com o esporte e encontrei no Jiu-Jitsu uma oportunidade de transformação e crescimento. Ao longo desses anos, vivi diferentes fases dentro da modalidade, passando por treinamentos, competições, desafios, conquistas e muito aprendizado. O Jiu-Jitsu contribuiu diretamente para minha disciplina, responsabilidade, resiliência e desenvolvimento pessoal. Hoje, além de continuar minha trajetória como atleta e professor, quero utilizar toda a experiência que adquiri ao longo desses anos como uma alavanca para os próximos. Quero transmitir conhecimento, compartilhar experiências e ajudar outras pessoas a evoluírem, evitando erros que cometi, enxergando novas possibilidades e mostrando que é possível construir sua própria trajetória através do Jiu-Jitsu. Mais do que ensinar técnicas, quero contribuir para formar pessoas, abrir caminhos e deixar um legado que possa continuar sendo construído por aqueles que vierem depois de mim.',
  location: 'CT indicado pelo professor (Goiânia, GO)',
  academyName: 'CT Indicado pelo Professor',
  email: 'cauanchefe123@gmail.com',
  whatsapp: '+55 62 99383-8862',
  instagram: '@cauanbjj',
  youtube: 'youtube.com/@cauanjiujitsu',
  ibjjfRegistered: true,
  cbjjRegistered: true,
  status: 'Vagas Abertas para Personal, Duplas e Aulas em Goiânia',
  yearsTraining: 11,
  activeStudents: 95,
  podiumsCount: 60,
  avatarUrl: IMAGES.heroKimono,
  heroBackgroundUrl: IMAGES.heroKimono,
};

export const bjjServices: BJJService[] = [
  {
    id: 'jiujitsu-individual',
    title: 'Personal Fight VIP (Jiu-Jitsu Particular)',
    subtitle: 'Acompanhamento 100% individualizado, aceleração técnica cirúrgica e privacidade absoluta',
    badge: '100% Exclusivo',
    format: 'Presencial (CT indicado pelo professor, condomínio ou residência)',
    duration: '60 a 80 minutos por sessão',
    targetAudience: 'Executivos, empresários, profissionais liberais e iniciantes que priorizam discrição, segurança articular e aproveitamento de tempo.',
    description: 'Protocolo de treinamento individual conduzido pessoalmente pelo Professor Cauan Santos (Faixa Preta). O programa mapeia a biomecânica e o nível físico de cada aluno para construir um jogo sólido, refinando pegadas, desequilíbrios, passagens de guarda e finalizações com correção em tempo real.',
    scope: 'Escopo Completo: Diagnóstico biomecânico inicial, periodização técnica personalizada, drills de repetição com correção milimétrica, sparring controlado direto com a faixa preta (sem riscos de lesão) e consultoria contínua de evolução técnica.',
    methodology: 'Didática progressiva por blocos: Fundamentos de Defesa e Postura -> Alavancas Mecânicas -> Transições e Controle -> Finalizações de Precisão.',
    highlights: [
      'Atenção individual e ritmo estritamente adaptado ao seu condicionamento',
      'Plano técnico desenhado para o seu biótipo com segurança máxima',
      'Flexibilidade de horários executivos (manhã, almoço, tarde ou noite)',
      'Treino em ambiente controlado no CT indicado ou no seu condomínio'
    ],
    priceHint: 'Planos mensais e pacotes avulsos sob consulta',
    image: IMAGES.coachingMat,
  },
  {
    id: 'jiujitsu-dupla-casal',
    title: 'Personal Fight em Dupla ou Casal',
    subtitle: 'Instrução VIP compartilhada: cumplicidade, motivação mútua e alto rendimento',
    badge: 'Mais Procurado',
    format: 'Presencial (CT indicado pelo professor, condomínio ou residência)',
    duration: '60 a 80 minutos por sessão',
    targetAudience: 'Casais, parceiros de treino, sócios ou familiares que buscam evoluir juntos com custo-benefício inteligente e exclusividade.',
    description: 'A excelência da aula particular aplicada a dois praticantes simultaneamente. O treino combina conceitos técnicos detalhados com dinâmicas de cooperação entre a dupla, proporcionando defesa pessoal eficaz, queima calórica e condicionamento mental em um ambiente privativo e estimulante.',
    scope: 'Escopo Completo: Treinamento compartilhado com atenção dupla do professor, dinâmicas de contra-ataque e defesa guiadas, rola técnico entre parceiros com mediação direta do faixa preta e metas técnicas conjuntas.',
    methodology: 'Treinamento cooperativo: explicação conceitual, simulações entre a dupla sob supervisão ativa do professor e rodízio de ajustes pontuais.',
    highlights: [
      'Treino dinâmico em dupla com dinâmicas de cooperação técnica mútua',
      'Defesa pessoal e condicionamento físico integrado para o casal ou parceiros',
      'Excelente relação custo-benefício no formato de atendimento VIP',
      'Ambiente focado, acolhedor e sem a exposição de turmas cheias'
    ],
    priceHint: 'Pacotes especiais para duplas e casais sob consulta',
    image: IMAGES.privateLesson,
  },
  {
    id: 'jiujitsu-kids',
    title: 'Jiu-Jitsu Kids & Juvenil (Valores & Disciplina)',
    subtitle: 'Formação pedagógica marcial: disciplina, hierarquia, foco escolar e postura anti-bullying',
    badge: 'Valores para a Vida',
    format: 'Presencial no Tatame Especializado (CT indicado pelo professor)',
    duration: '60 a 80 minutos por aula',
    targetAudience: 'Crianças e adolescentes de 4 a 15 anos que necessitam canalizar energia, desenvolver autoconfiança e melhorar foco e postura motora.',
    description: 'Metodologia pedagógica que utiliza o Jiu-Jitsu como ferramenta de desenvolvimento comportamental e físico. A instrução prioriza o respeito aos colegas e aos pais, a postura defensiva inteligente e o equilíbrio emocional, preparando os jovens para qualquer desafio da infância e adolescência.',
    scope: 'Escopo Pedagógico: Psicomotricidade infantil, regras de conduta marcial, técnicas de autodefesa sem agressividade física, práticas anti-bullying e estímulo contínuo à liderança e cooperação.',
    methodology: 'Ensino lúdico-disciplinar: jogos de aquecimento funcional, repetição técnica guiada e fixação dos valores de respeito e autocontrole.',
    highlights: [
      'Metodologia lúdica e segura segmentada por faixas etárias',
      'Desenvolvimento de coordenação motora fina, agilidade e equilíbrio',
      'Postura preventiva anti-bullying com inteligência corporal',
      'Ambiente estritamente familiar voltado ao respeito e foco escolar'
    ],
    priceHint: 'Planos mensais e turmas por faixa etária',
    image: IMAGES.groupAcademy,
  },
  {
    id: 'jiujitsu-competicao',
    title: 'Camp Técnico de Competição & Alto Rendimento',
    subtitle: 'Mentoria tática, gestão de placar, regras IBJJF/CBJJ e estratégia de pódio',
    badge: 'Alta Performance',
    format: 'Intensivo no Centro de Treinamento indicado pelo professor',
    duration: '60 a 80 minutos por sessão',
    targetAudience: 'Atletas e praticantes graduados que disputam circuitos oficiais estaduais, nacionais e internacionais em busca de medalhas.',
    description: 'Camp avançado conduzido por quem possui mais de 60 títulos oficiais e trajetória vitoriosa nos tatames. Aborda estratégia pura de luta: controle de vantagem, transições em alta velocidade, passagens de guarda modernas, ataques de braço de alto impacto e preparação mental para os momentos decisivos sob o cronômetro.',
    scope: 'Escopo Tático: Análise de regras oficiais da IBJJF/CBJJ, simulações de luta com árbitro e placar eletrônico, táticas para minutos finais de round, gestão de corte de peso, periodização física e mentoria de córner.',
    methodology: 'Treinamento situacional de estresse: rounds fracionados, cenários de desvantagem no placar, sparring com ritmo de campeonato e lapidação de finalizações de precisão.',
    highlights: [
      'Simulações reais de combate com cronômetro oficial e critérios de arbitragem',
      'Estratégias de pontuação e administração tática de vantagens',
      'Mentoria de preparação física específica e recuperação muscular',
      'Acompanhamento de córner experiente nos campeonatos oficiais'
    ],
    priceHint: 'Exclusivo para competidores e atletas federados',
    image: IMAGES.competitionAction,
  },
];

export const weeklySchedule: ScheduleItem[] = [
  { id: '1', days: 'Segunda a Sexta', time: '06:00 - 08:00', classType: 'Personal Fight & Treino Matinal', level: 'Todos os Níveis', coach: 'Prof. Cauan', mat: 'Tatame Principal' },
  { id: '2', days: 'Segunda a Sexta', time: '18:00 - 19:30', classType: 'Jiu-Jitsu Kids, Juvenil & Personal', level: 'Iniciantes e Crianças', coach: 'Prof. Cauan', mat: 'Tatame Principal' },
  { id: '3', days: 'Segunda a Sexta', time: '19:30 - 21:00', classType: 'Jiu-Jitsu Gi (Adulto) & No-Gi Grappling', level: 'Fundamentos & Avançado', coach: 'Prof. Cauan', mat: 'Tatame Principal' },
  { id: '4', days: 'Segunda a Sexta', time: '21:00 - 22:00', classType: 'Personal Fight VIP (Horário Noturno)', level: '100% Individualizado', coach: 'Prof. Cauan', mat: 'Dojo Privado' },
  { id: '5', days: 'Sábado', time: '07:30 - 09:00', classType: 'Personal Fight Matinal Especial', level: 'VIP Individual', coach: 'Prof. Cauan', mat: 'Dojo Privado' },
  { id: '6', days: 'Sábado', time: '11:00 - 13:00', classType: 'Open Mat Geral & Sparring Técnico', level: 'Treino Aberto & Sparring', coach: 'Prof. Cauan', mat: 'Área Completa' },
];

export const achievementsList: AchievementItem[] = [
  {
    id: 'invicto-estadual',
    title: 'Mais de 30 Títulos Estaduais & Invicto na Categoria',
    organization: 'Federação Goiana de Jiu-Jitsu (FJJGO / CBJJ)',
    category: 'Faixa Azul à Faixa Preta',
    division: 'Categoria de Peso Oficial',
    year: 'Invicto desde a Faixa Azul',
    location: 'Goiânia, GO & Centro-Oeste',
    medal: 'gold',
    description: 'Cartel impecável e histórico: invicto em sua categoria de peso desde a faixa azul, acumulando mais de 30 títulos de campeão estadual ao longo de sua trajetória esportiva.'
  },
  {
    id: 'especialista-armlock',
    title: 'Especialista em Arm-Lock Voador',
    organization: 'Assinatura Técnica Oficial',
    category: 'Finalização Marcante',
    division: 'Transição Aérea & Alavanca Perfeita',
    year: 'Marca Registrada',
    location: 'Circuito Nacional & Internacional',
    medal: 'gold',
    description: 'Reconhecido no cenário nacional pela execução cirúrgica e explosiva do arm-lock voador, finalizando lutas em segundos no circuito competitivo.'
  },
  {
    id: '1',
    title: 'Campeão Sul-Americano IBJJF',
    organization: 'IBJJF (International BJJ Federation)',
    category: 'Faixa Preta',
    division: 'Adulto / Peso Médio',
    year: '2024',
    location: 'Barueri, SP',
    medal: 'gold',
    description: '5 lutas duríssimas, 4 finalizações com destaque para botes rápidos no braço e estrangulamentos pelas costas no topo do pódio internacional.'
  },
  {
    id: '2',
    title: 'Medalha de Ouro - Campeonato Brasileiro CBJJ',
    organization: 'CBJJ',
    category: 'Faixa Preta',
    division: 'Adulto / Peso Médio',
    year: '2023',
    location: 'São Paulo, SP',
    medal: 'gold',
    description: 'Maior campeonato de Jiu-Jitsu do país, vencendo os principais nomes da divisão nacional com controle tático impecável.'
  },
  {
    id: '3',
    title: 'Vice-Campeão Pan-Americano No-Gi',
    organization: 'IBJJF',
    category: 'Faixa Preta',
    division: 'Adulto / Peso Médio',
    year: '2023',
    location: 'Kissimmee, Flórida (EUA)',
    medal: 'silver',
    description: 'Camp internacional nos EUA resultando na prata pan-americana em chave com mais de 30 atletas mundiais.'
  },
  {
    id: '4',
    title: 'Tricampeão Curitiba International Open',
    organization: 'IBJJF',
    category: 'Faixa Preta',
    division: 'Peso e Absoluto',
    year: '2022 - 2024',
    location: 'Curitiba, PR',
    medal: 'gold',
    description: 'Conquistas consecutivas na categoria de peso e medalha de bronze no cobiçado peso absoluto sem limite de quilos.'
  },
  {
    id: '5',
    title: 'Campeão São Paulo BJJ Pro',
    organization: 'CBJJ Pro League',
    category: 'Faixa Preta',
    division: 'Adulto',
    year: '2022',
    location: 'São Paulo, SP',
    medal: 'gold',
    description: 'Disputa profissional com premiação em dinheiro e transmissão ao vivo para todo o mundo.'
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rodrigo Mendonça',
    role: 'CEO & Empreendedor',
    beltLevel: 'Faixa Azul',
    experienceType: 'Personal Fight',
    rating: 5,
    text: 'Comecei a treinar com o Cauan no Personal porque minha rotina de trabalho é imprevisível e tinha medo de me lesionar aos 38 anos. Hoje estou no melhor condicionamento da minha vida, perdi 11kg e o Jiu-Jitsu se tornou minha melhor válvula de escape mental.'
  },
  {
    id: '2',
    name: 'Beatriz Vasconcelos',
    role: 'Advogada Corporativa',
    beltLevel: 'Faixa Branca (1 ano de treino)',
    experienceType: 'Personal Fight',
    rating: 5,
    text: 'A didática do Professor Cauan é impecável. Ele explica a mecânica do golpe como uma aula de física: onde colocar a mão, como usar o peso do quadril. Sinto uma segurança e autoconfiança nas ruas que nunca tive antes.'
  },
  {
    id: '3',
    name: 'Lucas Antunes',
    role: 'Atleta Competidor CBJJ',
    beltLevel: 'Faixa Roxa',
    experienceType: 'Competição',
    rating: 5,
    text: 'O Camp de competição com o Cauan mudou completamente a minha mentalidade de luta. Antes eu me afobava quando saía atrás no placar; hoje tenho plano A, B e C para cada minuto do round. Subi no pódio 4 vezes consecutivas.'
  },
  {
    id: '4',
    name: 'Marcelo e Juliana Costa',
    role: 'Pais do Davi (8 anos)',
    beltLevel: 'Turma Kids',
    experienceType: 'Kids',
    rating: 5,
    text: 'O Davi era muito agitado e tímido na escola. Desde que entrou nas aulas do Professor Cauan, o foco dele melhorou muito e aprendeu o valor do respeito e da disciplina. O carinho do professor com as crianças é exemplar.'
  }
];

export const faqList: FaqItem[] = [
  {
    id: '1',
    category: 'Iniciantes',
    question: 'Nunca pratiquei nenhuma arte marcial. Consigo acompanhar as aulas?',
    answer: 'Com certeza absoluta! Mais de 70% dos nossos alunos começaram do zero absoluto, muitos depois dos 30, 40 ou 50 anos. Nosso programa de Fundamentos e as aulas de Personal Fight ensinam passo a passo desde como cair sem se machucar até as primeiras defesas, sem violência e sem pressão desnecessária.'
  },
  {
    id: '2',
    category: 'Personal Fight',
    question: 'Como funciona a aula particular (Personal Fight)? Onde é realizado?',
    answer: 'A aula de Personal Fight é 100% individualizada (ou em duplas caso deseje treinar com cônjuge/amigo). Pode ser realizada no nosso dojo privativo com tatame de alta densidade, ou no tatame do seu condomínio/residência. O treino é adaptado ao seu ritmo, com aquecimento mobilizatório, técnica minuciosa e rola técnico com o próprio professor.'
  },
  {
    id: '3',
    category: 'Equipamentos',
    question: 'Preciso ter kimono logo no primeiro dia de aula experimental?',
    answer: 'Não! Para a sua primeira aula experimental gratuita, você pode vir com uma roupa de treino confortável (calça de compressão/bermuda sem zíper e camiseta justa). Caso queira continuar, orientamos onde adquirir seu primeiro kimono oficial com desconto de aluno.'
  },
  {
    id: '4',
    category: 'Metodologia',
    question: 'Existe perigo de me machucar ou quebrar algo?',
    answer: 'Nossa prioridade número um é a integridade física e o retorno seguro ao trabalho no dia seguinte. O Jiu-Jitsu tem o código do tapout (bater): assim que um golpe encaixa, o parceiro bate 3 vezes no tatame e a finalização é solta imediatamente. Praticamos com respeito mútuo e disciplina estrita.'
  },
  {
    id: '5',
    category: 'Personal Fight',
    question: 'Qual é a diferença entre fazer Personal e treinar na turma?',
    answer: 'No Personal, o professor está focado exclusivamente nos seus vícios e potenciais. Uma hora de Personal equivale frequentemente a semanas de aula coletiva em volume de repetições corretas e correções em tempo real. Muitos alunos mesclam as duas modalidades para máxima evolução.'
  },
  {
    id: '6',
    category: 'Horários & Agenda',
    question: 'Como escolher o melhor horário para agendar meu treino?',
    answer: 'Você pode escolher a data diretamente no calendário do site para ver em tempo real quais horários estão disponíveis para agendamento. Os horários já preenchidos aparecem sinalizados como indisponíveis, facilitando a escolha daquele que melhor se encaixa na sua rotina.'
  }
];
