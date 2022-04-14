const cervejas = [
    {
      codigo: 123,
      fabricante: 'Urquell',
      descricao: 'Pilsner Urquell 500ML',
      valor: 20,
      estoque: 200,
    },
    {
      codigo: 176,
      fabricante: 'Schornstein',
      descricao: 'Schornstein Imperial 500ML',
      valor: 35.99,
      estoque: 150,
    },
    {
      codigo: 122,
      fabricante: 'Schornstein',
      descricao: 'Schornstein IPA 500ML',
      valor: 18.99,
      estoque: 300,
    },
    {
      codigo: 323,
      fabricante: 'Maniacs',
      descricao: 'Maniacs Craft Lager 355ML',
      valor: 19.99,
      estoque: 500,
    },
    {
      codigo: 183,
      fabricante: 'Leuven',
      descricao: 'Leuven Red ALE Knight 600ML',
      valor: 25.99,
      estoque: 100,
    },
    {
      codigo: 129,
      fabricante: 'Leuven',
      descricao: 'Leuven Witbier The Witch 500ML',
      valor: 19.99,
      estoque: 200,
    },
    {
      codigo: 451,
      fabricante: 'Lupulus',
      descricao: 'Lupulus Blanche 330ML',
      valor: 29.99,
      estoque: 0,
    },
    {
      codigo: 111,
      fabricante: 'Eggenberg',
      descricao: 'Samichlaus Berrique 330ML',
      valor: 55.9,
      estoque: 25,
    },
    {
      codigo: 1,
      fabricante: 'Fuller',
      descricao: "Fuller's Vintage Ale 2015 500ML",
      valor: 264.9,
      estoque: 5,
    },
  ];
  
  /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
  O método toLocaleString() retorna uma string com uma representação sensível a linguagem/idioma deste número. */
  
  /* ------------------------------------------------------- Exemplo 5 ----------------------------------------------------------------
  Retornar array com objetos contendo o código, descrição e o valor total em estoque para cada cerveja:
  valorEmEstoqueDeCervejas: [{codigo:176, descricao:Pilsner Urquell 500ML, valor_em_estoque: R$ 4.000,00}, {...}] */
  
  const valorEmEstoqueDeCervejas = cervejas.reduce((acc, valor) => {
    acc.push({
      codigo: valor.codigo,
      descricao: valor.descricao,
      valor_em_estoque: (valor.valor * valor.estoque).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    });
    return acc;
  }, []);
  
  console.log(valorEmEstoqueDeCervejas);
