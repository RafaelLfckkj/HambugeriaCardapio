import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export function Carrinho({ abrirModal }) {
  return (
    <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center cursor-pointer hover:bg-red-400 duration-300">
      <button
        onClick={abrirModal}
        className="flex items-center gap-2 text-white font-bold cursor-pointer"
        id="cart-btn"
      >
        (<span id="cart-count">0</span>) Veja meu carrinho
        <FontAwesomeIcon icon={faCartPlus} className="text-white text-lg" />
      </button>
    </footer>
  );
}
