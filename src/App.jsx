import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Carrinho } from "./components/Carrinho";
import { Modal } from "./components/Modal";

export function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [addCarrinho, setCarrinho] = useState(0);
  const [preco, setPreco] = useState([]);

  function carrinho(){
    // Somando no carrinho a quantidade de produtos
    setCarrinho(addCarrinho + 1);

  }
  
  // somando o valor total dos produtos no modal - ou tentando
  function ValorTotal(preco) {
  setCarrinho(prev => [...prev, { nome, preco }]);
}

  return (
    <div>
      <Header />
      <Main adicionarAoCarrinho={carrinho} preco={preco} />
      <Modal aberto={modalAberto} fecharModal={() => setModalAberto(false)} />
      <Carrinho abrirModal={() => setModalAberto(true)} addCarrinho={addCarrinho} />
    </div>
  );
}
