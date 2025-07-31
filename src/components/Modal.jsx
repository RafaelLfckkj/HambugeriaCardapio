export function Modal({ aberto, fecharModal, preco, setPreco, lojaAberta }) {
  function FinalizarPedido() {
    const enderecoInput = document.getElementById("address");
    const numeroInput = document.getElementById("numero-casa");
    const complementoInput = document.getElementById("complemento");
    const pagamentoSelecionado = document.querySelector(
      'input[name="pagamento"]:checked'
    );

    const avisoEndereco = document.getElementById("address-warn");
    const numeroWarn = document.getElementById("numero-warn");
    const complementoWarn = document.getElementById("complemento-warn");
    const pagamentoWarn = document.getElementById("pagamento-warn");

    if (!lojaAberta) {
      alert("A loja está fechada! Não é possível finalizar o pedido.");
      return;
    }

    let camposValidos = true;

    if (!enderecoInput.value.trim()) {
      enderecoInput.classList.add("border-red-500");
      avisoEndereco.classList.remove("hidden");
      camposValidos = false;
    } else {
      enderecoInput.classList.remove("border-red-500");
      avisoEndereco.classList.add("hidden");
    }

    if (!numeroInput.value.trim()) {
      numeroInput.classList.add("border-red-500");
      numeroWarn.classList.remove("hidden");
      camposValidos = false;
    } else {
      numeroInput.classList.remove("border-red-500");
      numeroWarn.classList.add("hidden");
    }

    if (!complementoInput.value.trim()) {
      complementoInput.classList.add("border-red-500");
      complementoWarn.classList.remove("hidden");
      camposValidos = false;
    } else {
      complementoInput.classList.remove("border-red-500");
      complementoWarn.classList.add("hidden");
    }

    if (!pagamentoSelecionado) {
      pagamentoWarn.classList.remove("hidden");
      camposValidos = false;
    } else {
      pagamentoWarn.classList.add("hidden");
    }

    if (!camposValidos) return;

    const endereco = `${
      enderecoInput.value
    }, Nº ${numeroInput.value.trim()}, ${complementoInput.value.trim()}`;
    const pagamento = pagamentoSelecionado
      ? pagamentoSelecionado.value
      : "Não informado";
    const horario = new Date().toLocaleString("pt-BR");
    const produtos = agruparProdutos()
      .map((item) => `- ${item.nome} (x${item.qtd})`)
      .join("\n");

    const valorTotal = preco
      .reduce((acc, item) => acc + item.preco, 0)
      .toFixed(2);
    const numeroLoja = "5511999999999"; // Substitua pelo número da loja :)

    const mensagem = `🛎️ Novo pedido!\n\n🕘 Horário: ${horario}\n📍 Endereço: ${endereco}\n💳 Pagamento: ${pagamento}\n\n📦 Produtos:\n${produtos}\n\n💰 Total: R$ ${valorTotal}`;

    const linkWhatsApp = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(linkWhatsApp);

    alert("Pedido finalizado com sucesso!");
    window.location.reload();
  }

  function ValorTotal() {
    return preco.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
  }

  function agruparProdutos() {
    const agrupado = {};
    preco.forEach((item) => {
      if (agrupado[item.nome]) {
        agrupado[item.nome].qtd += 1;
        agrupado[item.nome].total += item.preco;
      } else {
        agrupado[item.nome] = {
          nome: item.nome,
          qtd: 1,
          total: item.preco,
        };
      }
    });
    return Object.values(agrupado);
  }

  function removerProduto(nome) {
    const index = preco.findIndex((item) => item.nome === nome);
    if (index !== -1) {
      const novoArray = [...preco];
      novoArray.splice(index, 1);
      setPreco(novoArray);
    }
  }

  return (
    <div
      className={`bg-black/60 w-full h-full fixed top-0 left-0 z-99 items-center justify-center ${
        aberto ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-2xl font-bold text-center mb-2">Meu Carrinho</h2>

        <div id="cart-items" className="flex justify-between mb-2 flex-col">
          {agruparProdutos().map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>
                {item.nome} - Qtd: {item.qtd}
              </span>
              <div className="flex items-center gap-2">
                <span>R$ {item.total.toFixed(2)}</span>
                <button
                  onClick={() => removerProduto(item.nome)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm cursor-pointer hover:bg-red-600 duration-200"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="font-bold">
          Total: <span id="cart-total">{ValorTotal()}</span>
        </p>

        <p className="font-bold mt-4">Endereço de entrega:</p>
        <input
          type="text"
          id="address"
          placeholder="Digite seu endereço completo..."
          className="w-full border-2 p-1 rounded my-1"
        />
        <p className="text-red-500 hidden" id="address-warn">
          Digite seu Endereço completo
        </p>

        <p className="font-bold mt-2">Número da casa:</p>
        <input
          type="text"
          id="numero-casa"
          placeholder="Ex: 123, 456, etc."
          className="w-full border-2 p-1 rounded my-1"
        />
        <p className="text-red-500 hidden" id="numero-warn">
          Digite o número da casa
        </p>

        <p className="font-bold mt-2">Complemento:</p>
        <input
          type="text"
          id="complemento"
          placeholder="Ex: Apartamento, Bloco, etc."
          className="w-full border-2 p-1 rounded my-1"
        />
        <p className="text-red-500 hidden" id="complemento-warn">
          Digite o complemento
        </p>

        <p className="font-bold mt-2">Forma de pagamento:</p>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="pagamento" value="Pix" /> Pix
          </label>
          <label>
            <input type="radio" name="pagamento" value="Cartão" /> Cartão
          </label>
          <label>
            <input type="radio" name="pagamento" value="Dinheiro" /> Dinheiro
          </label>
        </div>
        <p className="text-red-500 hidden" id="pagamento-warn">
          Selecione uma forma de pagamento
        </p>

        <div className="flex items-center justify-between mt-4 w-full ">
          <button onClick={fecharModal} className="cursor-pointer">
            Fechar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
            onClick={FinalizarPedido}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
