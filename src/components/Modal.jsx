export function Modal({ aberto, fecharModal, preco }) {
  function calcularTotal() {
    
  }

  return (
    <div
      className={`bg-black/60 w-full h-full fixed top-0 left-0 z-99 items-center justify-center ${
        aberto ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-2xl font-bold text-center mb-2">Meu Carrinho</h2>

        <div id="cart-items" className="flex justify-between mb-2 flex-col"></div>

        <p className="font-bold">
          Total: <span id="cart-total">{calcularTotal()}</span>
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
          <button id="close-modal-btn" onClick={fecharModal} className="cursor-pointer">
            Fechar
          </button>
          <button
            id="checkout-btn"
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
