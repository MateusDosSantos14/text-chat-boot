
let result = 3;

console.log("Chatbot: Olá! Como posso ajudá-lo hoje?");

console.log("1 => Informações sobre produtos");
console.log("2 => Dúvidas sobre pedidos");
console.log("3 => Suporte técnico");
console.log("4 => Informações de entrega");
console.log("5 => Promoções e descontos");
console.log("6 => Mudança de senha");
console.log("7 => Cadastro de usuário");
console.log("8 => Feedback e sugestões");
console.log("9 => Falar com um atendente");
console.log("10 => Sair");
console.log("Digite uma opção para continuar o atendimento digite " ,result);

switch(result){
    case  1:
    console.log("Opção escolhida '1' ");
    console.log("1 => Informações sobre produtos");
    console.log("Claro! Sobre qual produto você gostaria de saber mais?");
    break;
    case 2:
    console.log("Opção escolhida '2' ");
    console.log("2 => Dúvidas sobre pedidos");
    console.log("Pode me informar o número do seu pedido? Assim, posso ajudar melhor!");
    break;
    case 3:
    console.log("Opção escolhida '3' ");
    console.log("3 => Suporte técnico");
    console.log("Estou aqui para ajudar! Qual é o problema que você está enfrentando?");
    break;
    case 4:
    console.log("Opção escolhida '4' ");
    console.log("4 => Informações de entrega");
    console.log("Por favor, forneça seu código de rastreamento para que eu possa verificar o status da entrega.");
    break;
    case 5:
    console.log("Opção escolhida '5' ");
    console.log("5 => Promoções e descontos");
    console.log("Atualmente, temos algumas promoções! Você gostaria de saber sobre produtos específicos?");
    break;
    case 6:
    console.log("Opção escolhida '6' ");
    console.log("6 => Mudança de senha");
    console.log("Para mudar sua senha, por favor, forneça seu e-mail cadastrado.");
    break;
    case 7:
    console.log("Opção escolhida '7' ");
    console.log("7 => Cadastro de usuário");
    console.log("Para se cadastrar, preciso de algumas informações. Você pode fornecer seu nome e e-mail?");
    break;
    case 8:
    console.log("Opção escolhida '8' ");
    console.log("8 => Feedback e sugestões");
    console.log("Sua opinião é importante para nós! Qual feedback você gostaria de compartilhar?");
    break;
    case 9:
    console.log("Opção escolhida '9' ");
    console.log("9 => Falar com um atendente");
    console.log("Vou transferi-lo para um atendente agora. Um momento, por favor!");
    break;
    case 10:
    console.log("Opção escolhida '10' ");
    console.log("10 => Sair");
    console.log("Obrigado por utilizar nosso serviço! Se precisar de mais alguma coisa, é só chamar. Até logo!");
    break;
    default:
    console.log("Opção invalida!")
    console.log("Por favor digite um opção valida de 1 a 10 ");

}
