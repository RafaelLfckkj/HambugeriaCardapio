import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export function Produtos({ nome, descricao, preco, image, title }) {
  return (
    <div className="flex gap-2">
      <img
        src={image}
        alt={title}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />

      <div>
        <p className="font-bold">{nome}</p>
        <p className="text-sm">{descricao}</p>

        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-lg">{preco}</p>
          <button
            className="bg-gray-900 px-5 rounded cursor-pointer"
            id="add-to-cart-btn"
            data-name={nome}
            data-price={preco}
          >
            <FontAwesomeIcon icon={faCartPlus} className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
