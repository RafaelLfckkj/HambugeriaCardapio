export function Modal({ aberto, fecharModal, preco, setPreco }) {
  function FinalizarPedido() {
    const enderecoInput = document.getElementById("address");
    const avisoEndereco = document.getElementById("address-warn");

    if (!enderecoInput.value.trim()) {
      enderecoInput.classList.add("border-red-500");
      avisoEndereco.classList.remove("hidden");
      return;
    } else {
      enderecoInput.classList.remove("border-red-500");
      avisoEndereco.classList.add("hidden");
    }


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
          placeholder="Digite seu endereço completo..."
          id="address"
          className="w-full border-2 p-1 rounded my-1"
        />
        <p className="text-red-500 hidden" id="address-warn">
          Digite seu Endereço completo
        </p>

        <div className="flex items-center justify-between mt-4 w-full ">
          <button
            id="close-modal-btn"
            onClick={fecharModal}
            className="cursor-pointer"
          >
            Fechar
          </button>
          <button
            id="checkout-btn"
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
