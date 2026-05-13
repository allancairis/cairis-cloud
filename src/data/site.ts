import {
  Bot,
  BrainCircuit,
  CloudCog,
  Code2,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ShieldCheck,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Expertise", href: "#expertise" },
  { label: "Iniciativas", href: "#iniciativas" },
  { label: "Contato", href: "#contato" }
];

export const stats = [
  { value: "20+", label: "dominios tecnicos conectados" },
  { value: "24/7", label: "mentalidade de ambientes criticos" },
  { value: "AI", label: "automacao, RAG e agentes aplicados" }
];

export const expertise = [
  {
    title: "DevSecOps",
    description: "Seguranca, qualidade e confiabilidade incorporadas ao fluxo de entrega.",
    icon: ShieldCheck
  },
  {
    title: "Arquitetura de Software",
    description: "Diretrizes tecnicas, desenho de sistemas resilientes e simplificacao de ambientes complexos.",
    icon: Layers3
  },
  {
    title: "IA e Automacao",
    description: "RAG, agentes, N8N e automacoes inteligentes para ampliar produtividade e decisao operacional.",
    icon: BrainCircuit
  },
  {
    title: "Cloud & Kubernetes",
    description: "Plataformas modernas, operacao em escala, seguranca de workloads e evolucao de infraestrutura.",
    icon: CloudCog
  },
  {
    title: "Engenharia de Plataforma",
    description: "Experiencias internas para acelerar times, reduzir atrito e padronizar o caminho para producao.",
    icon: GitBranch
  },
  {
    title: "Observabilidade",
    description: "Sinais, telemetria e visibilidade executiva para confiabilidade, performance e decisao.",
    icon: Radar
  },
  {
    title: "Governanca Tecnica",
    description: "Qualidade, seguranca, fornecedores e diretrizes que escalam sem engessar.",
    icon: LockKeyhole
  },
  {
    title: "Estrategia Tecnologica",
    description: "Conexao entre arquitetura, roadmap, risco, eficiencia operacional e impacto no negocio.",
    icon: Network
  }
];

export const initiatives = [
  {
    title: "Ambientes seguros para fornecedores",
    description: "Segregacao, acesso controlado, auditoria e esteiras que permitem velocidade com seguranca.",
    signal: "Zero trust operacional"
  },
  {
    title: "Plataformas de automacao com IA",
    description: "Fluxos com agentes, APIs, N8N e bases de conhecimento para transformar trabalho repetitivo em sistemas assistidos.",
    signal: "Produtividade aumentada"
  },
  {
    title: "Observabilidade em larga escala",
    description: "Telemetria integrada, dashboards executivos e indicadores tecnicos para reduzir incerteza.",
    signal: "Decisao por evidencias"
  },
  {
    title: "Arquiteturas resilientes",
    description: "Padroes para disponibilidade, rollback, isolamento de falhas, pipelines confiaveis e evolucao continua.",
    signal: "Operacao sem improviso"
  },
  {
    title: "Modernizacao tecnologica",
    description: "Evolucao pragmatica de stacks, cloud, Kubernetes e processos de engenharia sem rupturas desnecessarias.",
    signal: "Mudanca com controle"
  },
  {
    title: "Integracao de agentes inteligentes",
    description: "Agentes conectados a sistemas, documentos e workflows corporativos para acelerar analise e execucao.",
    signal: "IA aplicada ao fluxo real"
  }
];

export const philosophy = [
  {
    title: "Seguranca como fundacao",
    text: "Seguranca nao e etapa final. E principio de arquitetura, cultura de entrega e criterio de decisao."
  },
  {
    title: "Automacao como multiplicador",
    text: "Tudo que se repete deve virar sistema. Tudo que gera risco deve ganhar controle, rastreabilidade e feedback."
  },
  {
    title: "Simplicidade escalavel",
    text: "A melhor arquitetura reduz superficie cognitiva, remove fragilidade e deixa o essencial facil de operar."
  },
  {
    title: "Tecnologia orientada ao negocio",
    text: "Decisoes tecnicas importam quando reduzem risco, aumentam velocidade e liberam novas possibilidades."
  },
  {
    title: "IA como amplificador humano",
    text: "IA forte nao substitui discernimento. Ela amplia contexto, acelera execucao e transforma conhecimento em acao."
  }
];

export const timeline = [
  {
    period: "Hoje",
    title: "Liderança técnica em ambientes corporativos críticos",
    text: "Atuo em arquitetura, qualidade, seguranca, boas praticas, fornecedores e iniciativas de engenharia com impacto direto no negocio."
  },
  {
    period: "Evolucao continua",
    title: "DevSecOps, cloud e plataforma",
    text: "Construo diretrizes, padroes e capacidades para times entregarem com mais seguranca, rastreabilidade e velocidade."
  },
  {
    period: "Fronteira aplicada",
    title: "IA, automacao e agentes",
    text: "Pesquiso e aplico RAG, agentes, N8N, APIs e automacoes para resolver gargalos reais de operacao e negocio."
  },
  {
    period: "Base humana",
    title: "Estrada, comportamento e sistemas",
    text: "Carrego para a tecnologia a mesma disciplina que encontro na estrada: leitura de contexto, preparo, ritmo e evolucao constante."
  }
];

export const terminalLines = [
  "$ strategy --align business architecture security",
  "risk.model: mapped",
  "delivery.flow: automated",
  "ai.agents: connected",
  "platform.signal: observable"
];

export const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allancairis/" },
  { label: "GitHub", href: "https://github.com/allancairis" },
  { label: "Email", href: "mailto:allan@cairis.cloud" },
  { label: "WhatsApp", href: "https://wa.me/5500000000000" }
];

export const systemSignals = [
  { label: "Arquitetura", icon: Code2 },
  { label: "Automacao", icon: Workflow },
  { label: "Agentes", icon: Bot },
  { label: "Performance", icon: Gauge }
];
