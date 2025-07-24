import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Carrinho } from "./components/Carrinho";
import { Modal } from "./components/Modal";

export function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [addCarrinho, setCarrinho] = useState(0);
  const [preco, setPreco] = useState([]);

  function carrinho() {
    // Somando a quantidade de produtos no carrinho
    setCarrinho(addCarrinho + 1);
  }

  const receberProduto = (nome, preco) => {
    setPreco((prev) => [...prev, preco]);
  };


  return (
    <div>
      <Header />
      <Main
        adicionarAoCarrinho={carrinho}
        onProdutoSelecionado={receberProduto}
      />
      <Modal
        aberto={modalAberto}
        fecharModal={() => setModalAberto(false)}
        preco={preco}
      />
      <Carrinho
        abrirModal={() => setModalAberto(true)}
        addCarrinho={addCarrinho}
      />
    </div>
  );
}
