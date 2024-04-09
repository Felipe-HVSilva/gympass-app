# App

GymPass style app.


## RFs (Requisitios funcionais)
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academais pelo nome;
- [ ] Deve ser possível o usuário realizar check-in de um usuário;
- [ ] Deve ser possível cadastrar uma acadmeia;


## Rns (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-ins se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por adminastradores;
- [ ] A academia só pode ser cadastrada por administradores;


## RNFs (Requisitios não-funcionais)

- [ ] A senha do usuário precisa estar criptografado
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);