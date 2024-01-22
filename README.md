# README

Essa aplicação está sendo desenvolvida como desafio técnico para uma vaga de desenvolvedor Ruby on Rails Pleno.
Desafio:
Desenvolver a aplicação de um mini-blog, que deve ter três modelos principais: Post, Category e User. Cada novo post deve estar associado a uma categoria e um usuário. Além disso, é fundamental implementar uma funcionalidade de notificação broadcast utilizando o Action Cable. Sempre que um novo post for criado, o usuário correspondente deve receber uma notificação em tempo real. Este teste avaliará suas habilidades em modelagem de dados, programação em Ruby on Rails, e na utilização do Action Cable para comunicação em tempo real.

- Inception Issue:

  - Milestone 1: Fundação

    - issue 1: Configurar ambiente de testes local

      - [x] gems para testes
      - [x] config rspec
      - [x] config shoulda-matcher
      - [x] config guard-rspec
      - [x] config factory-bot
      - [x] config faker

    - issue 2: Criar modelos base com TDD

      - criar modelo Post

        - [x] gerar scafold para Post
        - [x] campos title:string, description:string
        - [x] rodar migration

        - validacoes
          - [x] unicidade pelo titulo
          - [x] presenca titulo e descricao
          - [x] presenca das colunas do db
          - [x] validade da factory
          - [x] validar testes crud do controller post

      - criar modelo Category

        - [x] gerar scafold para Category
        - [x] campos title:string, description:string
        - [ ] rodar migration

        - validacoes
          - [ ] unicidade pelo titulo
          - [ ] presenca titulo e descricao
          - [ ] presenca das colunas do db
          - [ ] validade da factory
          - [ ] validar testes crud do controller category

      - criar modelo User

        - [ ] gerar scafold para User devise
        - [ ] campos name:string, email:string
        - [ ] rodar migration

  - Milestone 2: Telas

    - User/session/registration
      - Login, registration
    - Post
      - new, edit, show, index
    - Category
      - new, edit, show, index

  - Milestone 3: Setup Action Cable
