import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Carrinho } from "./components/Carrinho";
import { Modal } from "./components/Modal";

export function App() {
  const [modalAberto, setModalAberto] = useState(false);

  const [preco, setPreco] = useState([]);

  const carrinho = () => {};
  const quantidadeCarrinho = preco.length;

  const receberProduto = (nome, preco) => {
    setPreco((prev) => [...prev, { nome, preco }]);
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
        setPreco={setPreco}
      />
      <Carrinho
        abrirModal={() => setModalAberto(true)}
        addCarrinho={quantidadeCarrinho}
      />
    </div>
  );
}
