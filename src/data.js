export const profile = {
  name: "Jonathan Christian",
  first: "Jonathan",
  last: "Christian",
  role: "Tech Lead e Full Stack Developer",
  location: "Betim, Minas Gerais",
  email: "jjonathanccc@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonathan-christian-407475232",
  website: "",
  cv: "/jonathan-christian-curriculo.pdf",
  availability: "Aberto a novos desafios",
};

export const marquee = [
  "Laravel",
  "React",
  "Node.js",
  "React Native",
  "Vue.js",
  "PHP",
  "MySQL",
  "Oracle",
  "Firebase",
  "Supabase",
  "Python",
  "Docker",
  "Git",
  "CI/CD",
  "APIs REST",
  "Scrum",
  "UX",
  "Liderança técnica",
];

export const services = [
  {
    index: "01",
    title: "APIs REST",
    text: "Desenho e consumo de APIs que ligam o sistema web, o aplicativo e os serviços de fora. O contrato fica explícito para o time e para quem integra.",
    points: [
      "Recursos, verbos, status HTTP e versionamento",
      "Autenticação, autorização e perfil de acesso",
      "Paginação, filtros, erros e integração entre web e app",
      "APIs de LLMs, com controle de tokens e de contexto",
    ],
  },
  {
    index: "02",
    title: "Docker, Git e CI/CD",
    text: "O ambiente de quem desenvolve e o caminho até a publicação não dependem da máquina de uma pessoa só.",
    points: [
      "Docker para ambiente reproduzível",
      "Git no fluxo de branch, histórico e revisão",
      "Pipelines de CI/CD para build, teste e publicação",
      "Entrega alinhada ao padrão do time",
    ],
  },
  {
    index: "03",
    title: "Arquitetura",
    text: "Desenho soluções de arquitetura de dados seguras, confiáveis, disponíveis e escaláveis, e separo em microsserviços quando o produto pede.",
    points: [
      "Modelagem de dados e limite entre serviços",
      "Segurança, disponibilidade e escala",
      "Microsserviços e integrações",
      "Trade-off entre visão de produto e profundidade técnica",
    ],
  },
  {
    index: "04",
    title: "Codificação",
    text: "Saio do levantamento de requisitos para o código, na linguagem do produto, até a aplicação atender quem usa.",
    points: [
      "PHP, Laravel, Node.js, Python, React, Vue e React Native",
      "Padrões de projeto e técnicas de codificação",
      "Microsserviços quando a entrega pede serviço separado",
      "Código que a operação consegue manter",
    ],
  },
  {
    index: "05",
    title: "IA e agentes",
    text: "Desenvolvimento moderno com IA. Orquestro agentes com um método próprio, sem soltar o controle do que o modelo vê e do que o código executa.",
    points: [
      "Integração com APIs de LLMs",
      "Controle de tokens e de contexto",
      "Orquestração de agentes",
      "Execução de código dinâmico com isolamento",
    ],
  },
  {
    index: "06",
    title: "Liderança e Agile",
    text: "Mantenho o time concentrado na meta, com prioridade clara para a entrega ficar o mais perto possível do prazo.",
    points: [
      "Priorização das atividades do ciclo",
      "Padrões técnicos, revisão de código e direcionamento",
      "Apoio à evolução do time de desenvolvimento",
      "Scrum no dia a dia, com gestão de projetos, Design Thinking e UX",
    ],
  },
];

export const skills = [
  {
    index: "01",
    title: "Frontend",
    items: ["React", "Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    index: "02",
    title: "Backend",
    items: ["PHP", "Laravel", "Node.js", "TypeScript", "Python", "Microsserviços"],
  },
  {
    index: "03",
    title: "Database",
    items: ["SQL relacional", "MySQL", "Oracle", "MongoDB", "Firebase", "Supabase"],
  },
  {
    index: "04",
    title: "APIs",
    items: ["REST", "Auth e perfis", "Web e app", "LLMs", "Tokens e contexto"],
  },
  {
    index: "05",
    title: "Entrega",
    items: ["Docker", "Git", "CI/CD", "Revisão de código"],
  },
  {
    index: "06",
    title: "IA",
    items: ["APIs de LLM", "Orquestração de agentes", "Redução de custo", "Padrões de projeto", "Isolamento de código"],
  },
  {
    index: "07",
    title: "Mobile",
    items: ["React Native", "Publicação de aplicativos Google e Apple"],
  },
  {
    index: "08",
    title: "Liderança",
    items: ["Agile", "Priorização", "Recrutamento e seleção", "Padrões técnicos", "Trade-offs", "Evolução do time"],
  },
];

export const filters = [
  { id: "todos", label: "Todos" },
  { id: "React", label: "React" },
  { id: "Node.js", label: "Node" },
  { id: "Laravel", label: "Laravel" },
  { id: "React Native", label: "React Native" },
];

export const projects = [
  {
    id: "solosys",
    name: "SoloSys",
    url: "https://solosys.com.br/",
    store: null,
    role: "Desenvolvimento Full Stack",
    kind: "Sistema web + aplicativo",
    stack: ["PHP", "Laravel", "React", "React Native", "MySQL"],
    summary:
      "Gestão de sondagens geotécnicas que liga campo, laboratório, equipes e equipamentos numa plataforma só.",
    description:
      "O SoloSys digitaliza a investigação geotécnica. A operação acompanha sondagens, laboratório, equipes e patrimônio com rastreabilidade, menos papel e dados organizados para a decisão técnica. A plataforma web foi construída em PHP Laravel com React, e o aplicativo de campo em React Native.",
    participation: [
      "Fiz o desenvolvimento completo, de ponta a ponta. Comecei pelo esboço e pela estrutura do projeto, montamos o protótipo no Figma e, depois da validação com o cliente, entrei no código.",
      "O backend é PHP com Laravel. O sistema se integra a outros serviços, usa ChatGPT e Gemini como LLM para processamento inteligente e automações, e o ClickSign para assinatura digital. O trabalho de campo roda em um aplicativo próprio. Escolhi MySQL como banco e storage interno para os arquivos.",
      "O maior desafio foram as regras de negócio do setor de sondagem, que eu não conhecia. Superei com estudo do segmento.",
    ],
    scope: [
      "Sondagens a trado, SPT, mista e rotativa",
      "Laboratório, equipes e equipamentos",
      "Operação mobile ligada à gestão",
      "API aberta para conectar com ERP",
    ],
    tone: 1,
    cover: "/covers/solosys.jpg",
  },
  {
    id: "mast-turismo",
    name: "Mast Turismo",
    url: "https://mastturismo.com.br/",
    store: null,
    role: "Coordenação do projeto",
    kind: "Web + aplicativo",
    stack: ["React", "Node.js", "React Native"],
    summary:
      "Site institucional com painel de pacotes e aplicativo do clube de benefícios, os dois integrados ao ERP.",
    description:
      "A MAST Turismo apresenta viagens, unidades e o Clube MAST, com planos, poupança viagem e benefícios para quem viaja. O site institucional tem painel administrativo para controle de pacotes, e o site e o aplicativo do clube se integram ao ERP. A interface usa React, a API Node.js e o aplicativo React Native.",
    participation: [
      "Coordenei o projeto. Começamos mapeando o ERP e criando o brand book do site institucional, com os requisitos de design e a identidade de marca.",
      "Depois dessa entrega, o desenvolvimento começou. A prototipação do aplicativo foi tela a tela no Figma, com aprovação do cliente, e em seguida dividi as tarefas no time com Scrum. Usei orquestração de agentes para automatizar os testes.",
      "Com a validação do cliente, o aplicativo está em publicação nas lojas, aguardando aprovação. A entrega correu sem grandes obstáculos. O feito foi o site e o aplicativo completos em 45 dias, no ágil.",
    ],
    scope: [
      "Site institucional da agência",
      "Painel administrativo de pacotes",
      "Aplicativo do clube de benefícios",
      "Integração com o ERP",
    ],
    tone: 2,
    cover: "/covers/mast-turismo.jpg",
  },
  {
    id: "medneeds",
    name: "MedNeeds",
    url: "https://medneeds.com.br/",
    store: "https://play.google.com/store/apps/details?id=com.medneeds.meds",
    role: "Desenvolvimento Full Stack",
    kind: "Sistema web + aplicativo",
    stack: ["PHP", "Laravel", "React", "React Native", "MongoDB"],
    summary:
      "Plataforma para médicos organizarem plantões, agenda e finanças, no navegador e no aplicativo.",
    description:
      "O MedNeeds tira a rotina médica de grupos e blocos de nota. O profissional publica e encontra plantões, monta a agenda e acompanha o que já entrou e o que ainda vai receber. O aplicativo é React Native, a versão web é React, o painel administrativo é PHP com Laravel e o banco é MongoDB. As aplicações consomem o mesmo backend.",
    participation: [
      "Entrei no projeto já em andamento. No começo, atuamos em correções e atualizações, com o aplicativo disponível só no ambiente da Apple.",
      "Na sequência, adaptamos o sistema para Android. Dependências do React Native impediam a execução nesse ambiente. Publicamos na Google Play e desenvolvemos a versão web com as funcionalidades do mobile.",
      "O ecossistema reúne o aplicativo em React Native, o MongoDB, o painel administrativo em PHP com Laravel e a versão web em React, todos no mesmo backend. Configuramos o servidor, e o sistema está no ar.",
    ],
    scope: [
      "Feed de ofertas de plantão",
      "Agenda médica e notificações",
      "Painel financeiro de recebimentos",
      "Aplicativo na Apple e na Google Play",
    ],
    tone: 3,
    cover: "/covers/medneeds.png",
  },
  {
    id: "vendas-mais",
    name: "Vendas Mais",
    url: "https://iavendasmais.com/",
    store: "https://play.google.com/store/apps/details?id=com.borderless10.aiassistantmobile",
    role: "Desenvolvimento Full Stack",
    kind: "Sistema web + aplicativo",
    stack: ["React", "Node.js", "React Native"],
    summary:
      "Plataforma de inteligência comercial com IA, em sistema web e aplicativo, para a operação de vendas.",
    description:
      "A Vendas Mais leva inteligência comercial para dentro da rotina de vendas. O produto existe como sistema web e como aplicativo, com a interface em React, a API em Node.js e o app em React Native.",
    scope: [
      "Plataforma web de inteligência comercial",
      "Aplicativo em React Native",
      "API em Node.js",
      "Publicação na Play Store",
    ],
    tone: 4,
    cover: "/covers/vendas-mais.png",
  },
  {
    id: "protheus",
    name: "Protheus",
    url: "https://www.protheustur.com.br/",
    store: null,
    role: "Desenvolvimento Full Stack",
    kind: "Sistema web + aplicativo",
    stack: ["React", "Node.js", "React Native"],
    summary:
      "Sistema para agências e operadoras de turismo: CRM, financeiro, vendas e operação no mesmo lugar, com app.",
    description:
      "O Protheus concentra a agência de viagens numa plataforma: CRM, financeiro, clientes, fornecedores, vouchers, passageiros e dashboards. O sistema web usa React e Node.js, com aplicativo em React Native.",
    scope: [
      "CRM e gestão comercial",
      "Financeiro, comissões e fluxo de caixa",
      "Operação de reservas, vouchers e passageiros",
      "Aplicativo em React Native",
    ],
    tone: 5,
  },
  {
    id: "ticketgreen",
    name: "TicketGreen",
    url: "https://www.ticketgreen.com.br/",
    store: null,
    role: "Desenvolvimento Full Stack",
    kind: "Sistema web",
    stack: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"],
    summary:
      "Plataforma web de eventos e ingressos, com vitrine de datas, locais e valores.",
    description:
      "A TicketGreen publica eventos e a venda de ingressos. A vitrine mostra a programação, com local, horário e preço. O backend é PHP Laravel e a interface é JavaScript, HTML e CSS.",
    scope: [
      "Vitrine de próximos eventos",
      "Local, horário e valor do ingresso",
      "Backend em Laravel",
      "Interface em JavaScript, HTML e CSS",
    ],
    tone: 6,
    cover: "/covers/ticketgreen.png",
  },
  {
    id: "heaven-sender",
    name: "Heaven Sender",
    url: "https://heavensender.com.br/",
    store: null,
    role: "Diretor de Tecnologia",
    kind: "SaaS",
    stack: ["React", "Node.js"],
    summary:
      "SaaS de atendimento comercial para diversos segmentos, com CRM Kanban, WhatsApp, Instagram e assinaturas.",
    description:
      "A Heaven Sender é um SaaS de atendimento comercial para diversos segmentos, em evolução há dois anos. O CRM cobre pipeline em Kanban, dashboard, ranqueamento de equipe e chatbot, com WhatsApp, Instagram, assinaturas e agenda no mesmo fluxo. A plataforma é React e Node.js.",
    participation: [
      "Entrei como sócio. O produto segue em evolução frequente há dois anos.",
      "Desenvolvi a base em React e Node.js, com Asaas para gestão de assinaturas, ChatGPT e Gemini, IziSign para assinatura digital, a API oficial da Meta no WhatsApp e no Instagram, e o Google para agenda e Drive.",
      "Depois de um tempo, passei a coordenar a equipe de desenvolvimento responsável pelo projeto.",
    ],
    scope: [
      "CRM Kanban e pipeline comercial",
      "Dashboard e ranqueamento de equipe",
      "Assinaturas, assinatura digital e agenda",
      "WhatsApp, Instagram e LLMs",
    ],
    tone: 7,
    cover: "/covers/heaven-sender.png",
  },
  {
    id: "unites",
    name: "Unites",
    url: "https://unites.com.br/",
    store: null,
    role: "Desenvolvimento e coordenação",
    kind: "Sistema web + aplicativo",
    stack: ["PHP", "Laravel", "JavaScript", "HTML", "CSS"],
    summary:
      "Gestão empresarial construída do zero, com RH, ponto, estoque, operação de campo e integração com ERPs.",
    description:
      "A Unites junta numa plataforma o que costuma ficar espalhado em planilha e mensagem. Cobre tarefas, admissões, departamento pessoal, ponto, documentos, estoque e a operação de campo, com assinatura digital, gestão de assinaturas, arquivos de remessa e integração com ERPs. O sistema é PHP com Laravel e a interface em JavaScript, HTML e CSS.",
    participation: [
      "O sistema foi construído do zero pela minha equipe. Ajudei na idealização e este é um dos maiores projetos de que já participei.",
      "Iniciei o desenvolvimento da base e, depois, passei a coordenar o projeto, com participação no design. O desenvolvimento passa de um ano e o sistema está em fase de conclusão.",
      "Os módulos trazem integrações complexas: assinatura digital com diversos provedores, gestão de assinaturas com Asaas, arquivos de remessa para pagamento de funcionários, regulamentação da gestão de ponto, aplicativo para execução em campo, estoque completo, integração com ERPs e Gemini para automações.",
    ],
    scope: [
      "Departamento pessoal, ponto e arquivos de remessa",
      "Assinatura digital e gestão de assinaturas",
      "Estoque e aplicativo de execução em campo",
      "Integração com ERPs e automações com Gemini",
    ],
    tone: 8,
    cover: "/covers/unites.png",
  },
];

export const featuredIds = ["solosys", "medneeds", "heaven-sender", "unites"];

export const experience = [
  {
    company: "Índice Digital",
    place: "Betim, Minas Gerais",
    period: "set 2025 — atual",
    title: "CTO",
    text: "Direção da operação e dos produtos digitais, da decisão de negócio à construção do que chega no ar.",
  },
  {
    company: "Heaven Sender",
    place: "Minas Gerais",
    period: "set 2024 — set 2026",
    title: "Diretor de Tecnologia",
    text: "Condução técnica da plataforma de vendas: arquitetura, evolução do produto em React e Node.js e a ponte entre tecnologia e operação comercial.",
  },
  {
    company: "Distribuidora GAMA",
    place: "Belo Horizonte, MG",
    period: "jun 2022 — set 2025",
    title: "De trainee a Tech Lead",
    text: "A empresa na qual mais evoluí tecnicamente. Quatro ciclos na mesma operação: entrei como trainee, assumi o desenvolvimento pleno e passei a liderar a frente técnica.",
    cv: "A empresa na qual mais evoluí tecnicamente. No trainee, automação e gestão em PHP, com ênfase em logística e no contábil. No júnior, automações para recursos humanos. No pleno, o sistema de gestão virou SaaS, do zero, com migração de módulos. Como Tech Lead, equipe de cerca de seis programadores, com metodologia ágil, padrões de projeto e IA.",
    roles: [
      {
        title: "Tech Lead",
        period: "ago 2024 — set 2025",
        note: "Passei a gerenciar uma equipe de cerca de seis programadores. Metodologia ágil, padrões de projeto e uso de IA, com qualidade de código e foco no resultado do produto.",
      },
      {
        title: "Full Stack Pleno",
        period: "jan 2024 — jul 2024",
        note: "Transformação do sistema de gestão em um SaaS: projeto do zero, configuração e migração de módulos.",
      },
      {
        title: "Full Stack Júnior",
        period: "fev 2023 — jan 2024",
        note: "Novas responsabilidades, principalmente em automações para a gestão de recursos humanos.",
      },
      {
        title: "Full Stack Trainee",
        period: "jun 2022 — fev 2023",
        note: "Projetos em PHP de automação e gestão, com ênfase em logística e no contábil.",
      },
    ],
  },
  {
    company: "AmaPet Distribuidora",
    place: "Belo Horizonte, MG",
    period: "jun 2022 — ago 2022",
    title: "Programador de sistemas",
    text: "Minha primeira experiência 100% focada em desenvolvimento. Entreguei um sistema interno em PHP com Laravel e banco Oracle: os primeiros projetos, correções e funcionalidades novas.",
  },
  {
    company: "BRASS do Brasil",
    place: "Belo Horizonte, MG",
    period: "jul 2021 — jun 2022",
    title: "Menor aprendiz em T.I.",
    text: "Minha primeira experiência na área de TI, depois do curso técnico. Atuei no suporte ao usuário, na manutenção de computadores, no controle de licenças, na configuração e atualização de servidores, no firewall e nos serviços da Microsoft, e também no desenvolvimento de sistemas em PHP.",
  },
];

export const education = [
  {
    school: "Estácio",
    course: "Bacharelado em Ciência da Computação",
    period: "fev 2022 — fev 2025",
  },
  {
    school: "PRONATEC",
    course: "Técnico em Desenvolvimento de Sistemas",
    period: "mar 2018 — dez 2019",
  },
];

export const certifications = [
  {
    title: "Tech Lead: Competências Chave e Estratégias para o Sucesso",
    issuer: "Udemy",
    date: "jul. 2024",
    url: "https://www.udemy.com/certificate/UC-5cd80f94-2ff2-4251-b187-4f325f31d365/",
  },
  {
    title: "Desenvolvimento Web",
    issuer: "Estácio",
    date: "out. 2023",
    url: "https://certificado.estacio.br/424721623b1b9a4e554b968",
  },
  {
    title: "Formação em Liderança",
    issuer: "Conquer",
    date: "set. 2023",
    url: "https://conquerplus.com.br/certificates/57e009ed-326f-4b60-9bd5-723650b5f9f2",
  },
  {
    title: "Soluções Tecnológicas Emergentes",
    issuer: "FIAP",
    date: "set. 2023",
    url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/93595/028d4ff4ec5eda9bf37bda79bde718f2/certificado.png",
  },
  {
    title: "Leadership Communication",
    issuer: "FIAP",
    date: "ago. 2023",
    url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/93287/3acfd961e3abc047b95435ea6cdf5d50/certificado.png",
  },
  {
    title: "Linux Fundamentos",
    issuer: "FIAP",
    date: "ago. 2023",
    url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/93258/5ba6e5441c73af3ea1068dea87b2790a/certificado.png",
  },
  {
    title: "User Experience",
    issuer: "FIAP",
    date: "ago. 2023",
    url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/92052/9317fc3a17d58a934c8eec761b91fe74/certificado.png",
  },
  {
    title: "Administrador de banco de dados",
    issuer: "Fundação Bradesco",
    date: "ago. 2023",
    url: "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDialog.aspx?HJG4S9QLRMgDk2qBL37AAW3PHC2a3ig6",
  },
  {
    title: "Gestão de projetos de software",
    issuer: "Fundação Bradesco",
    date: "ago. 2023",
    url: "https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDialog.aspx?HJG4S9QLRMhQtPemrgJW8JjYhcIAHQ1%2f",
  },
  {
    title: "Desenvolvimento Web Avançado com PHP, Laravel e Vue.js",
    issuer: "Udemy",
    date: "fev. 2023",
    url: "https://www.udemy.com/certificate/UC-ec0a6528-32cc-4073-82b4-75fb67282d76/",
  },
  {
    title: "Introdução a Padrões de Projeto",
    issuer: "Workover",
    date: "ago. 2022",
    url: "https://workover.com.br/certificados/cursos/a7dca995ba0a746b405ce05df87c11ef/validador",
  },
  {
    title: "Fundamentos do Git e Azure DevOps",
    issuer: "balta",
    date: "ago. 2022",
    url: "https://balta.io/certificados/0ead6b9d-62d0-4a0c-8e3a-09291ba3f65d",
  },
  {
    title: "Oracle SQL: do básico ao avançado",
    issuer: "Udemy",
    date: "jun. 2022",
    url: "https://www.udemy.com/certificate/UC-d58a2d18-9a61-453c-8bb9-6f7bfd6ea2de/",
  },
  {
    title: "Explorando a Atenção Plena",
    issuer: "IBM",
    date: "jan. 2022",
    url: "https://students.yourlearning.ibm.com/certificate/ILB-EKVNRYJVYQQV8Y3X",
  },
  {
    title: "Design Thinking",
    issuer: "IBM",
    date: "jan. 2022",
    url: "https://students.yourlearning.ibm.com/certificate/ILB-KXWWNXQXKXMG2M87",
  },
  {
    title: "Resolvendo problemas com pensamento crítico e criativo",
    issuer: "IBM",
    date: "jan. 2022",
    url: "https://students.yourlearning.ibm.com/certificate/ILB-RKEZZJJQXPVV1D4N",
  },
];
