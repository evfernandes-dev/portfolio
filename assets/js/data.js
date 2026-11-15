const SITE = {
  github: "https://github.com/evfernandes-dev",
  linkedin: "https://www.linkedin.com/in/emanuel-vitor-fernandes-6a3796421/",
  email: "emanuelvitorfn7@gmail.com",
  avatar: "https://github.com/evfernandes-dev.png?size=480"
};

const AI_ANSWERS = {
  pt: {
    greeting: "Olá! Sou o EV-AI, a versão digital do Emanuel. Posso falar sobre trajetória, stack, projetos com IA e disponibilidade para estágio. O que você quer saber?",
    answers: {
      about: "Sou o Emanuel Vitor, estudante de ADS com foco em back-end em Recife. Estudo Análise e Desenvolvimento de Sistemas e construo APIs REST com Java e Spring Boot, ferramentas em Python e automações com n8n. Este portfólio reúne meus principais projetos.",
      skills: "Minha stack principal: Java, Spring Boot, Spring Data JPA, MySQL, Python, Docker, n8n e Git. Também uso FastAPI, SQLite, LLMs locais via Ollama e Oracle Cloud para hospedar a automação.",
      projects: "Destaco o Estoque IA (agente com LLM local e tool calling), o Xadrez Java (jogo de terminal com modo contra o Ollama), Digital Banking API e Help Desk Pro (Java/Spring + MySQL), IDEON (projeto de equipe em hackathon) e automações n8n como Shopee Afiliados e Alerta Dólar. Todos estão na seção de projetos.",
      ai: "Meus projetos com IA: Estoque IA (FastAPI + Ollama + SQLite + Docker), Xadrez Java (jogo de terminal com Ollama), F1 Neural Predictor (Pandas + rede neural), IDEON (projeto de equipe em hackathon) e PyMind (aprendizagem ativa com IA). Uso modelos locais via Ollama.",
      internship: "Sim! Estou em busca de estágio em desenvolvimento de software. Se tiver uma oportunidade, me chama em emanuelvitorfn7@gmail.com ou pelo LinkedIn.",
      contact: "Você pode falar comigo por e-mail (emanuelvitorfn7@gmail.com), LinkedIn ou GitHub. Os links estão na seção de contato, logo abaixo.",
      fallback: "Ainda não sei responder isso. Tente perguntar sobre experiência, stack, projetos com IA ou disponibilidade para estágio."
    },
    chips: [
      { key: "about", label: "Quem é você?" },
      { key: "skills", label: "Qual sua stack?" },
      { key: "ai", label: "Projetos com IA" },
      { key: "internship", label: "Aberto a estágio?" }
    ]
  },
  en: {
    greeting: "Hi! I am EV-AI, Emanuel's digital twin. I can talk about his background, stack, AI projects and internship availability. What do you want to know?",
    answers: {
      about: "I am Emanuel Vitor, a Systems Analysis and Development student focused on back-end, based in Recife. I build REST APIs with Java and Spring Boot, Python tools and n8n automations. This portfolio gathers my main projects.",
      skills: "My core stack: Java, Spring Boot, Spring Data JPA, MySQL, Python, Docker, n8n and Git. I also use FastAPI, SQLite, local LLMs via Ollama and Oracle Cloud to host the automation.",
      projects: "Highlights include Estoque IA (agent with local LLM and tool calling), Xadrez Java (terminal chess game with an Ollama opponent), Digital Banking API and Help Desk Pro (Java/Spring + MySQL), IDEON (hackathon team project) and n8n automations like Shopee Affiliates and USD Alert. They are all in the projects section.",
      ai: "My AI projects: Estoque IA (FastAPI + Ollama + SQLite + Docker), Xadrez Java (terminal chess game with Ollama), F1 Neural Predictor (Pandas + neural network), IDEON (hackathon team project) and PyMind (active learning with AI). I use local models via Ollama.",
      internship: "Yes! I am looking for a software development internship. If you have an opening, reach me at emanuelvitorfn7@gmail.com or on LinkedIn.",
      contact: "You can reach me by email (emanuelvitorfn7@gmail.com), LinkedIn or GitHub. The links are in the contact section right below.",
      fallback: "I do not know how to answer that yet. Try asking about background, stack, AI projects or internship availability."
    },
    chips: [
      { key: "about", label: "Who are you?" },
      { key: "skills", label: "What is your stack?" },
      { key: "ai", label: "AI projects" },
      { key: "internship", label: "Open to internships?" }
    ]
  }
};

// TODO: preencher `demo` e `docs` apenas quando os links existirem; campos vazios não renderizam botões.
const PROJECTS = [
  {
    name: "Xadrez Java",
    repo: "https://github.com/evfernandes-dev/xadrez-java",
    cat: "ai",
    featured: true,
    featuredRank: 4,
    demo: "",
    docs: "",
    tech: ["Java", "Ollama", "LLM local", "Terminal"],
    desc: {
      pt: "Jogo de xadrez no terminal em Java puro, com regras completas (roque, en passant, promoção e xeque-mate) e modo contra um LLM local via Ollama, com três níveis de dificuldade.",
      en: "Terminal chess game in pure Java with full rules (castling, en passant, promotion and checkmate) and a mode against a local LLM through Ollama, with three difficulty levels."
    }
  },
  {
    name: "Estoque IA",
    repo: "https://github.com/evfernandes-dev/estoque-ia",
    cat: "ai",
    featured: true,
    featuredRank: 1,
    demo: "",
    docs: "",
    tech: ["Python", "FastAPI", "Ollama", "SQLite", "Docker"],
    desc: {
      pt: "Agente de IA que consulta, em linguagem natural, o estoque fictício de uma farmácia. Usa FastAPI, LLM local via Ollama com tool calling, SQLite e Docker, com CI no GitHub Actions.",
      en: "AI agent that answers natural-language questions about a pharmacy's fictional stock. Built with FastAPI, a local LLM via Ollama with tool calling, SQLite and Docker, plus CI on GitHub Actions."
    }
  },
  {
    name: "Digital Banking API",
    repo: "https://github.com/evfernandes-dev/digital-banking-api",
    cat: "backend",
    featured: true,
    featuredRank: 3,
    demo: "",
    docs: "",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
    desc: {
      pt: "API REST para contas bancárias com criação, listagem, saldo, depósito e saque. Inclui validação de entrada, regras de negócio, tratamento centralizado de erros e testes de service e controller.",
      en: "REST API for bank accounts with create, list, balance, deposit and withdraw operations. Includes input validation, business rules, centralized error handling and tests for the service and controller layers."
    }
  },
  {
    name: "Help Desk Pro",
    repo: "https://github.com/evfernandes-dev/helpdesk-pro",
    cat: "backend",
    featured: true,
    featuredRank: 2,
    demo: "",
    docs: "",
    tech: ["Java 21", "Spring Boot", "MySQL", "Docker", "JUnit"],
    desc: {
      pt: "Sistema de gestão de chamados de help desk: API REST em Java 21 com Spring Boot e MySQL, usando Maven, JUnit, Mockito e ambiente Docker.",
      en: "Help desk ticket management system: REST API built with Java 21, Spring Boot and MySQL, using Maven, JUnit, Mockito and a Docker environment."
    }
  },
  {
    name: "IDEON",
    repo: "https://github.com/gabrielalveslopes/IDEON",
    cat: "ai",
    featured: true,
    featuredRank: 5,
    demo: "",
    docs: "",
    tech: ["TypeScript", "Web app", "AI", "Hackathon"],
    desc: {
      pt: "Projeto de equipe em hackathon: plataforma educacional gamificada em que professores transformam materiais em atividades com IA e alunos acompanham a evolução. O MVP inclui check-in privado de saúde mental.",
      en: "Hackathon team project: a gamified education platform where teachers turn learning materials into AI-assisted activities while students track their progress. The MVP includes a private mental health check-in."
    }
  },
  {
    name: "Shopee Afiliados · n8n",
    repo: "https://github.com/evfernandes-dev/shopee-afiliados-n8n",
    cat: "automation",
    featured: false,
    tech: ["n8n", "REST API", "GraphQL", "Telegram", "Docker"],
    desc: {
      pt: "Workflow no n8n que consulta a API de afiliados da Shopee, filtra acessórios de eletrônicos, remove duplicatas e publica ofertas no Telegram a cada 30 minutos.",
      en: "n8n workflow that queries the Shopee Affiliate API, filters electronics accessories, removes duplicates and publishes offers to Telegram every 30 minutes."
    }
  },
  {
    name: "Alerta Dólar · n8n",
    repo: "https://github.com/evfernandes-dev/n8n-alerta-dolar",
    cat: "automation",
    featured: false,
    tech: ["n8n", "Webhook", "Google Sheets", "Gmail"],
    desc: {
      pt: "Workflow n8n acionado por webhook que consulta a cotação USD/BRL, avalia o valor em um nó Switch e registra no Google Sheets ou envia alerta por Gmail.",
      en: "Webhook-triggered n8n workflow that fetches the USD/BRL exchange rate, evaluates it in a Switch node and either logs it to Google Sheets or sends a Gmail alert."
    }
  },
  {
    name: "Email Organizer",
    repo: "https://github.com/evfernandes-dev/n8n-email-organizer",
    cat: "automation",
    featured: false,
    tech: ["Python", "n8n", "JavaScript"],
    desc: {
      pt: "Automação com Python, JavaScript e n8n que classifica e-mails por assunto e conteúdo em Finanças, Suporte, Vendas e Outros, sem depender de APIs pagas.",
      en: "Automation built with Python, JavaScript and n8n that classifies emails by subject and content into Finance, Support, Sales and Other, without paid APIs."
    }
  },
  {
    name: "Calculadora de Valproato",
    repo: "https://github.com/evfernandes-dev/calculadora-valproato",
    cat: "python",
    featured: false,
    tech: ["Python", "CustomTkinter"],
    desc: {
      pt: "Aplicativo desktop em Python/CustomTkinter que planeja a dispensação de valproato em farmácia pública, calculando mês a mês as caixas fechadas e o saldo restante.",
      en: "Python/CustomTkinter desktop app that plans valproate dispensing at a public pharmacy, calculating sealed boxes and the remaining balance month by month."
    }
  },
  {
    name: "F1 Neural Predictor",
    repo: "https://github.com/evfernandes-dev/f1-neural-predictor",
    cat: "ai",
    featured: false,
    tech: ["Python", "Pandas", "Neural Network", "OpenF1"],
    desc: {
      pt: "Painel interativo em Python que estima a probabilidade de vitória de pilotos de Fórmula 1 com dados da API OpenF1, Pandas e uma rede neural.",
      en: "Interactive Python dashboard that estimates Formula 1 drivers' win probability using OpenF1 API data, Pandas and a neural network."
    }
  },
  {
    name: "Tradutor de Documentos",
    repo: "https://github.com/evfernandes-dev/tradutor-documentos",
    cat: "python",
    featured: false,
    tech: ["Python", "PDF", "DOCX"],
    desc: {
      pt: "Aplicativo desktop em Python para traduzir arquivos TXT, PDF, DOCX, ODT e RTF, com escolha de idiomas, salvamento do resultado e histórico local.",
      en: "Python desktop app for translating TXT, PDF, DOCX, ODT and RTF files, with language selection, saving and local translation history."
    }
  },
  {
    name: "Loja Virtual",
    repo: "https://github.com/evfernandes-dev/online_store",
    cat: "python",
    featured: false,
    tech: ["Python", "OOP", "GUI"],
    desc: {
      pt: "Aplicação desktop de loja virtual em Python focada em POO: produtos físicos e digitais, carrinho, frete por estratégia, controle de estoque e recibo em .txt.",
      en: "Python desktop online store focused on OOP: physical and digital products, shopping cart, strategy-based shipping, stock control and a .txt receipt."
    }
  },
  {
    name: "Sistema Bancário",
    repo: "https://github.com/evfernandes-dev/SistemaBancario",
    cat: "backend",
    featured: false,
    tech: ["Java", "OOP", "Console"],
    desc: {
      pt: "Sistema bancário em Java puro para praticar POO: contas, depósitos, saques e transferências via console, sem frameworks.",
      en: "Pure Java banking system to practice OOP: accounts, deposits, withdrawals and transfers via console, with no frameworks."
    }
  },
  {
    name: "PyMind",
    repo: "https://github.com/evfernandes-dev/PyMind-dio",
    cat: "ai",
    featured: false,
    tech: ["Python", "Flask", "AI"],
    desc: {
      pt: "Caderno inteligente de Python back-end: aprendizagem ativa com IA, curadoria de fontes e engenharia de prompts, servido com Flask.",
      en: "Smart Python back-end notebook: active learning with AI, source curation and prompt engineering, served with Flask."
    }
  },
  {
    name: "Analisador de Senhas",
    repo: "https://github.com/evfernandes-dev/automatic-senha",
    cat: "python",
    featured: false,
    tech: ["Python", "Security", "GUI"],
    desc: {
      pt: "Analisador e gerador de senhas em Python com interface gráfica escura: avaliação de força em tempo real, requisitos faltantes e sugestões de senhas fortes.",
      en: "Python password analyzer and generator with a dark GUI: real-time strength scoring, missing requirements and strong password suggestions."
    }
  },
  {
    name: "Conversor de Arquivos",
    repo: "https://github.com/evfernandes-dev/conversor-de-arquivo",
    cat: "python",
    featured: false,
    tech: ["Python", "Excel", "CSV", "JSON"],
    desc: {
      pt: "Aplicativo desktop em Python para converter Excel, CSV, JSON e TSV, com interface gráfica, escolha de destino e tratamento de erros.",
      en: "Python desktop app to convert Excel, CSV, JSON and TSV files, with a GUI, output selection and error handling."
    }
  }
];
