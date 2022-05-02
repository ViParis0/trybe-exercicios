const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;

    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
};

const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

// despesaMensal(renda, despesas, somaDespesas);

const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);;
const userNationality = ({ firstName, nationality }) => console.log(`${firstName} is ${nationality}`);;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    return callback(user);
    console.log(user);
  }, delay());
};

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

