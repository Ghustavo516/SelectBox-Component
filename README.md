# Componente de Formulário de Seleção de Estado e Município

O objetivo deste componente é fornecer uma solução reutilizável para formulários, com a funcionalidade de permitir a seleção de um estado brasileiro por meio de um `selectBox`. Além disso, o componente é capaz de populares automaticamente os municípios que pertencem a esse estado selecionado. Para alcançar essa funcionalidade, este projeto utiliza a API disponibilizada pelo IBGE, acessível por meio do site oficial: [https://servicodados.ibge.gov.br/api/docs/localidades](https://servicodados.ibge.gov.br/api/docs/localidades).

## Funcionalidades

1. **Seleção de Estado:** O componente apresenta um `selectBox` que permite aos usuários selecionar um estado brasileiro a partir de uma lista pré-definida.

2. **População Automática de Municípios:** Após a seleção de um estado, o componente se integra automaticamente à API do IBGE e obtém os municípios que fazem parte desse estado. Esses municípios são então exibidos no mesmo formulário, oferecendo aos usuários uma lista atualizada e precisa de opções de municípios.

## Utilização

1. **Integração do Componente:** Para utilizar este componente em seus projetos, basta importar o módulo do DevExtreme e configurar o `selectBox` com as opções fornecidas pelo componente.

```html
<app-cidade-estado> </app-cidade-estado>
```
## População Automática

Após a seleção do estado, os municípios serão populados automaticamente no mesmo formulário, permitindo que os usuários escolham o município desejado a partir de uma lista atualizada.

## Fonte de Dados

Este componente utiliza a API oficial do IBGE para obter informações precisas sobre os estados brasileiros e seus respectivos municípios. A API do IBGE oferece uma documentação detalhada que pode ser acessada [aqui](https://servicodados.ibge.gov.br/api/docs/localidades), permitindo uma integração confiável e eficaz para manter as informações atualizadas.

## Contribuições

Contribuições são bem-vindas para melhorar e expandir este componente. Sinta-se à vontade para abrir problemas, fornecer feedback ou enviar solicitações de pull requests para ajudar a aprimorar essa solução reutilizável para formulários de seleção de estado e município.
