
## 🚀 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSyringe](https://github.com/microsoft/tsyringe)
- [Postgres](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/)
- [JsonWebToken](https://jwt.io/)
- [BcryptJs](https://www.npmjs.com/package/bcryptjs)
- [Multer](https://www.npmjs.com/package/multer)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Docker](https://www.docker.com/)

## 🎲 Rodando o Back End

```bash
# Clone este repositório

#Instalar as dependencias com yarn
$ yarn install

#No docker, utilizar o comando
$ docker-compose up -d

#O banco de dados postgres inicializara na porta 5432.
# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

## Requisitos do sistema

### Cadastro de carro

```bash
**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado como disponivel por padrão.
O usuário responsavel pelo cadastro deve ser um usuário administrador.
```

### Listagem de carros

```bash
**RF**
Deve ser possivel listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.
```

### Cadastro de especificação no carro

```bash
**RF**
RF01. Deve ser possível cadastrar uma especificação para um carro.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsavel pelo cadastro deve ser um usuário administrador.
```

### Cadastro de imagens do carro

```bash
**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário pode cadastrar mais de uma imagem para o mesmo carro.
O usuário responsavel pelo cadastro deve ser um usuário administrador.
```

### Aluguel de carro

```bash
**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuario deve estar logado na aplicação
Ao realizar um aluguel, o status do carro devera ser alterado para indisponivel

```

### Devolução de um carro

```bash
**RF**
Deve ser possivel realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deve ser cobrado diaria completa
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
Ao realizar a devolução, o usuario devera ser liberado para outro aluguel
Ao realizar a devolução, deverá ser calculado o total do aluguel
Caso o horario de devolução seja superior ao horário previsto de entrega, deverá ser cobrado
multa proporcional aos dias de atraso
Caso haja multa, deverá ser somado ao total do aluguel
O usuario deve estar logado na aplicação
```

### Listagem de alugueis para usuario

```bash
**RF**
Deve ser possivel realizar a busca de todos os alugueis para o usuario

**RN**
O usuario deve estar logado na aplicação
```
### Recuperar senha

**RF**
- Deve ser recuperar a senha para o usuário informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha.

**RN**
- O usuario precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas.