# Documentação do Projeto Pet Services Locator

Este projeto foi desenvolvido para ajudar proprietários de animais de estimação que se mudaram para uma nova cidade a encontrar serviços pet-friendly próximos, 
como veterinários, pet shops e áreas para passeios. Através da integração com a API do Google Maps, o sistema permite aos usuários buscar serviços específicos 
dentro de um raio definido a partir de sua localização atual.

## 2. Descrição Técnica

### 2.1 Tecnologias Usadas

- Node.js
- Express
- Axios para chamadas HTTP
- Google Maps API
- Postman para testes de API

### 2.2 Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Instale o Node.js e o NPM (Node Package Manager) na sua máquina.
2. Clone o repositório do projeto para o seu ambiente local.
3. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente necessárias, incluindo chaves de API para o Google Maps.
5. Utilize o Postman ou outra ferramenta similar para testar a API localmente.

 ![Configuração da pagina index](/src/doc/config_da_pag_index.jpeg)

## 3. Uso da API

### 3.1 Endpoint da API

**GET /api/services**

Parâmetros de Query:
- `locality`: (Obrigatório) A localidade onde o usuário está procurando serviços.
- `type`: (Obrigatório) O tipo de serviço que o usuário deseja encontrar (por exemplo, 'veterinary_care', 'pet_store',).

  ![Exemplo de como colocar os parâmetros na query](/src/doc/get_postman_com_parametros.jpeg)

Resposta Esperada:
- Retorna uma lista de serviços disponíveis na localidade especificada, incluindo nome, endereço e avaliação.

### 3.2 Exemplos de Chamadas e Respostas

Exemplo de requisição com a resposta:

![Exemplo da requisição e a sua resposta](/src/doc/ex_de_uso_com_resp_da_requisicao.jpeg)

