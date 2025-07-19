import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Carrinho } from "./components/Carrinho";
import { Modal } from "./components/Modal";

export function App() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div>
      <Header />
      <Main />
      <Modal aberto={modalAberto} fecharModal={() => setModalAberto(false)} />
      <Carrinho abrirModal={() => setModalAberto(true)} />
    </div>
  );
}
