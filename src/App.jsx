import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Carrinho } from "./components/Carrinho"
import { Modal } from "./components/Modal"

export function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Modal/>
      <Carrinho/>
    </div>
  )
}
