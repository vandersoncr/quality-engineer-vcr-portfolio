// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

import type { Experience, Project } from "@/types";

export const profile = {
  name: "Vanderson Cardoso Rodrigues",
  role: "Quality Engineer | QA | Test Automation | API | Performance",
  location: "Manaus - AM",
  email: "vandersonqa08@gmail.com",
  linkedin: "https://linkedin.com/in/van-card07",
  github: "https://github.com/vandersoncr",
  headline: "Transformando requisitos em software confiável através de engenharia de qualidade, automação e testes.",
  summary: "Quality Engineer com 5 anos de experiência em estratégias de testes para aplicações Web, APIs e sistemas integrados. Atuo da análise de requisitos à validação em CI/CD, combinando automação, testes não funcionais e investigação de falhas para acelerar feedback e elevar a confiabilidade do software."
};

export const experiences: Experience[] = [
  {
    company: "Instituto CERTI da Amazônia",
    role: "Analista de Testes e Qualidade de Software",
    period: "02/2023 - Atual",
    location: "Manaus - AM",
    context: "Qualidade de software para sistemas Web e ambientes de Indústria 4.0 / MES, com atuação integrada ao ciclo de desenvolvimento.",
    highlights: [
      "Planejamento e execução de testes funcionais, integração, API, E2E, regressão e não funcionais.",
      "Desenvolvimento e manutenção de suítes Cypress para UI, E2E e APIs, reduzindo aproximadamente 40% do tempo de regressão.",
      "Testes de performance, carga e estresse com k6, métricas em InfluxDB e Grafana.",
      "Integração de testes automatizados em Bitbucket Pipelines e GitHub Actions, contribuindo para redução aproximada de 35% no tempo de execução.",
      "Validação de APIs REST, integrações entre serviços, regras de negócio e persistência de dados.",
      "Definição de cenários e critérios de aceite com BDD/Gherkin e práticas de shift-left."
    ],
    stack: ["Cypress", "k6", "InfluxDB", "Grafana", "REST", "GitHub Actions", "Bitbucket Pipelines", "Jira", "Confluence", "BDD/Gherkin"]
  },
  {
    company: "Funcional Health Tech",
    role: "Analista de Qualidade de Software QA",
    period: "07/2021 - 01/2023",
    location: "São Paulo",
    context: "Garantia da qualidade de aplicações do segmento Health Tech, com testes funcionais, regressivos, automação e APIs.",
    highlights: [
      "Planejamento e execução de cenários e casos de testes funcionais, regressivos e automatizados.",
      "Desenvolvimento e manutenção de automação com Robot Framework e práticas BDD.",
      "Validação de APIs REST com Postman, Insomnia e SoapUI, incluindo payloads, status codes e integridade dos dados.",
      "Análise e documentação de defeitos, evidências, critérios de aceite e oportunidades de melhoria.",
      "Participação em cerimônias ágeis, contribuindo para identificação antecipada de riscos."
    ],
    stack: ["Robot Framework", "Postman", "Insomnia", "SoapUI", "REST", "BDD", "Agile", "Scrum"]
  }
];

export const skillGroups = [
  { title: "Core Stack", items: ["Cypress", "Playwright", "Selenium", "Robot Framework", "Postman", "k6", "JavaScript", "TypeScript", "Python", "SQL"] },
  { title: "Engineering & Delivery", items: ["REST", "GraphQL", "JMeter", "Docker", "GitHub Actions", "Bitbucket Pipelines", "SonarQube", "PostgreSQL", "MySQL", "BDD/Gherkin"] },
  { title: "Observability & Collaboration", items: ["InfluxDB", "Grafana", "Jira", "Confluence", "Agile", "Scrum", "Shift Left", "CI/CD"] },
  { title: "Currently Exploring", items: ["LLMs", "Prompt Engineering", "AI-Assisted Testing", "RAG", "AI Agents", "MCP", "LLM Evaluation", "AI Security", "AI-Native Engineering"] }
];

export const projects: Project[] = [
  {
    title: "E2E Quality Architecture",
    eyebrow: "Automação em destaque",
    problem: "Reduzir o custo e o tempo da regressão de fluxos críticos sem perder rastreabilidade e confiança na entrega.",
    strategy: "Aplicar automação por risco, cobrindo UI, E2E e API e integrando a suíte ao ciclo de entrega contínua.",
    implementation: ["Cypress para UI, E2E e APIs", "Arquitetura reutilizável e dados de teste", "Interceptação e validação de integrações", "BDD/Gherkin quando aplicável", "Execução automatizada em CI/CD"],
    result: "A experiência profissional registra redução aproximada de 40% no tempo de regressão e contribuição para redução aproximada de 35% no tempo de execução de pipeline.",
    stack: ["Cypress", "E2E", "API", "BDD", "GitHub Actions", "Bitbucket"], featured: true
  },
  {
    title: "API & Integration Testing",
    eyebrow: "Serviços e integrações",
    problem: "Validar contratos, regras de negócio e integridade de dados em sistemas compostos por APIs e integrações entre serviços.",
    strategy: "Combinar testes positivos, negativos, integração e persistência para detectar falhas antes da camada de UI.",
    implementation: ["REST e GraphQL", "Payload e status code validation", "Authentication / authorization", "Negative testing", "Validação de persistência com SQL"],
    result: "Cobertura de APIs e integrações como parte recorrente da estratégia de qualidade nos ambientes profissionais descritos no currículo.",
    stack: ["Postman", "Insomnia", "SoapUI", "REST", "GraphQL", "SQL"]
  },
  {
    title: "Performance Engineering",
    eyebrow: "Testes não funcionais",
    problem: "Observar comportamento, latência e estabilidade de serviços sob carga para apoiar decisões de qualidade e capacidade.",
    strategy: "Executar cenários de carga e estresse com métricas observáveis e critérios de análise objetivos.",
    implementation: ["Load e stress testing", "Métricas de response time e error rate", "Análise de p95 e thresholds", "Integração de métricas com InfluxDB", "Dashboards no Grafana"],
    result: "Prática aplicada profissionalmente com k6, InfluxDB e Grafana; sem atribuir resultados numéricos não documentados.",
    stack: ["k6", "JMeter", "InfluxDB", "Grafana"]
  }
];

export const education = [
  "Pós-graduação em Segurança e Inteligência Cibernética - Instituto Tecnológico da Amazônia (ITEAM) | 02/2024 - 05/2025",
  "Graduação em Tecnologia da Informação - Faculdade Martha Falcão - FMF Wyden | 02/2019 - 08/2021"
];

export const certifications = [
  "Desenvolvimento Web Full Stack - Universidade Federal do Amazonas (UFAM) | 04/2025 - 11/2025",
  "Pentest: Exploração de Vulnerabilidades em Aplicações Web - Alura",
  "Cypress: Automação de Testes E2E e CI/CD - Alura",
  "Git e GitHub: Colaboração em Projetos - Alura",
  "Quality Assurance: Plano de Testes e Gestão de Bugs - Alura",
  "Programa de Testes e Qualidade de Software - JL Treinamentos",
  "Robot Framework: Automação no Padrão BDD - Alura",
  "Descomplicando Testes de API REST - JL Treinamentos"
];
