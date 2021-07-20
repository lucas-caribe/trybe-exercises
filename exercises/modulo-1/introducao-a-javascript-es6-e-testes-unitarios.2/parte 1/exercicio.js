const orderInfo = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (orderInfo) => {
  const { deliveryPerson } = orderInfo.order.delivery;
  const { name, phoneNumber, address } = orderInfo;

  const addressString = `${address.street}, N° ${address.number}, AP: ${address.apartment}`;

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${addressString}`;
};

console.log(customerInfo(orderInfo));

const orderModifier = (orderInfo) => {
  // Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.
  orderInfo.name = 'Luiz Silva';
  orderInfo.payment.total = 50;

  const { name } = orderInfo;
  const { pizza } = orderInfo.order;
  const { drinks } = orderInfo.order;
  const { total } = orderInfo.payment;

  const drinksArray = Object.keys(drinks).map(key => drinks[key].type);
  
  const pizzaString = Object.keys(pizza).join(', ');
  const drinksString = drinksArray.join(', ');
  const totalString = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);


  return `Olá ${name}, o total do seu pedido de ${pizzaString} e ${drinksString} é ${totalString}.`;
};

console.log(orderModifier(orderInfo));
