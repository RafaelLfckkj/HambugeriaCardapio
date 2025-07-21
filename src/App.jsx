import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Carrinho } from "./components/Carrinho";
import { Modal } from "./components/Modal";

export function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [addCarrinho, setCarrinho] = useState(0);

  function carrinho(){
    setCarrinho(addCarrinho + 1);
  }

  return (
    <div>
      <Header />
      <Main adicionarAoCarrinho={carrinho} />
      <Modal aberto={modalAberto} fecharModal={() => setModalAberto(false)} />
      <Carrinho abrirModal={() => setModalAberto(true)} addCarrinho={addCarrinho} />
    </div>
  );
}
