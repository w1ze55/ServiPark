# Sistema de Estacionamento

Um sistema simples para gerenciamento de veículos em um estacionamento, desenvolvido com Java Servlet e JavaScript.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `front/`: Contém os arquivos de frontend
  - `index.html`: Página principal com formulário de cadastro e lista de veículos
  - `style.css`: Estilos CSS para a interface do usuário
  - `script.js`: JavaScript para manipulação de dados e integração com o backend

- `back/`: Contém os arquivos de backend
  - `Estacionamento/`: Projeto Java do servlet
    - `src/main/java/com/estacionamento/`
      - `ServiPark.java`: Servlet principal para processamento das requisições
      - `model/Veiculo.java`: Classe de modelo para representar um veículo
      - `dao/VeiculoDAO.java`: Classe de acesso a dados para gerenciar veículos
      - `filter/`: Filtros Servlet do sistema
        - `EncodingFilter.java`: Filtro para tratamento de codificação e CORS
        - `LogFilter.java`: Filtro para registro de logs das requisições
        - `AuthenticationFilter.java`: Filtro para controle de acesso e autenticação

## Funcionalidades

1. **Cadastro de Veículos**:
   - Placa do veículo
   - Modelo do veículo
   - Ano do veículo
   - Nome do condutor

2. **Listagem de Veículos**: Exibe todos os veículos cadastrados em uma tabela.

3. **Edição de Veículos**: Permite editar os dados de um veículo existente.

4. **Exclusão de Veículos**: Remove um veículo do sistema.

5. **Filtros de Servlet**:
   - Controle de codificação UTF-8
   - Configuração CORS para acesso entre origens diferentes
   - Log de requisições com tempo de processamento
   - Autenticação básica para área administrativa

## Tecnologias Utilizadas

- **Backend**: Java Servlets (javax.servlet), Filtros Servlet
- **Frontend**: HTML, CSS, JavaScript
- **Frameworks**: Bootstrap 4 (interface), jQuery (manipulação DOM)

## Requisitos

- JDK 8 ou superior
- Apache Tomcat 9
- Navegador web moderno

## Como Executar

1. Clone o repositório
2. Importe o projeto `back/Estacionamento` em seu IDE
3. Adicione o projeto ao servidor Tomcat 9
4. Inicie o servidor Tomcat
5. Acesse `http://localhost:8080/Estacionamento/` em seu navegador

## Armazenamento de Dados

Para simplicidade, os dados são armazenados em memória utilizando um padrão Singleton. Em uma aplicação real, seria recomendado utilizar um banco de dados relacional ou NoSQL. 