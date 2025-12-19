# InovaVia Backend 

## Geo-Intelligence & Risk Engine

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-DDD-orange?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-RBAC_/_API_Key-red?style=for-the-badge)

## Visão Estratégica
O **InovaVia** é o motor de processamento backend especializado em geolocalização, planejamento de rotas e análise de riscos dinâmicos. Projetado para escalabilidade vertical e horizontal, o sistema utiliza princípios de **Clean Architecture** para garantir que regras de negócio complexas (como cálculo de zonas de perigo e otimização logística) permaneçam isoladas de detalhes de infraestrutura.

---

## Arquitetura do Sistema

### 1. Pipeline de Requisição (Middleware Chain)
Seguindo o fluxo definido na documentação técnica, cada request atravessa camadas rigorosas de segurança antes do processamento:

* **Router:** Gateway de entrada para as rotas da API.
* **API Key Validation:** Filtro de infraestrutura para controle de consumo e prevenção de abuso (Rate Limiting).
* **Authenticated (JWT):** Validação de identidade do portador do token.
* **Authorized (RBAC):** Verificação de privilégios baseada em papéis (Roles) para acesso a recursos protegidos.

### 2. Fluxo de Domínio e Persistência (DDD)
A implementação segue o padrão de camadas para evitar o acoplamento de lógica de negócio com o banco de dados:

1.  **Controller:** Recebe o input, valida o contrato de entrada e delega ao caso de uso.
2.  **Domain Services / Use Cases:** Onde reside a inteligência de geolocalização e as regras de análise de risco.
3.  **Domain Entities:** Modelagem pura dos objetos de negócio.
4.  **Repository Pattern:** Interface de comunicação com a persistência de dados.
5.  **ORM & Events:** Persistência via ORM com emissão de **Domain Events** para propagação em filas de mensagens (Messaging Queues) como RabbitMQ ou Kafka.

---

## Stack Tecnológica Core
* **Runtime:** Node.js 20+ (LTS)
* **Linguagem:** TypeScript (Strict Typing)
* **Database:** PostgreSQL + PostGIS (Geographic objects support)
* **Caching/Stream:** Redis
* **Mensageria:** RabbitMQ / AWS SQS (Asynchronous Domain Events)
* **Documentação:** Swagger/OpenAPI

---

## Guia de Instalação

### Pré-requisitos
* Docker e Docker Compose instalados.
* Node.js v20.x ou superior.

### Configuração
1.  **Clone o projeto:**
    ```bash
    git clone [https://github.com/org/inovavia-backend.git](https://github.com/environbit/inovavia-backend.git)
    cd inovavia-backend
    ```
2.  **Variáveis de Ambiente:**
    ```bash
    cp .env.example .env
    # Configure as credenciais do PostGIS e chaves de API de mapas
    ```
3.  **Ambiente Docker:**
    ```bash
    docker-compose up -d
    ```
4.  **Dependências e Migrations:**
    ```bash
    npm install
    npm run db:migrate
    ```

---

## Especialização: Análise de Risco e Geolocalização
Diferente de backends genéricos, o InovaVia implementa:
* **Cálculos Geoespaciais:** Utilização de PostGIS para consultas de proximidade e intersecção de polígonos de risco.
* **Circuits Breakers:** Proteção contra falhas em provedores externos de mapas (Google Maps/Mapbox).
* **Audit Trail:** Log imutável de decisões de rota para análise forense e seguradoras.

---

## Roadmap Técnico
- [ ] Implementação de algoritmo de Dijkstra customizado para custos de risco.
- [ ] Integração nativa com WebSockets para telemetria em tempo real.
- [ ] Implementação de Testes de Carga (K6) para validação de latência em rotas críticas.

---

## Licença
Copyright © 2025 InovaVia. Todos os direitos reservados. O código fonte é propriedade privada e protegida por leis de propriedade intelectual.
