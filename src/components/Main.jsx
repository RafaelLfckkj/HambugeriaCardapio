import { Produtos } from "./Produtos";
import { Refri } from "./Refri";
import produto1 from "../assets/hamb-1.png";
import produto2 from "../assets/hamb-2.png";
import produto3 from "../assets/hamb-3.png";
import produto4 from "../assets/hamb-4.png";
import produto5 from "../assets/hamb-5.png";
import produto6 from "../assets/hamb-6.png";
import produto7 from "../assets/hamb-7.png";
import produto8 from "../assets/hamb-8.png";
import bebida1 from "../assets/refri-1.png";
import bebida2 from "../assets/refri-2.png";

export function Main({ adicionarAoCarrinho, onProdutoSelecionado }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto1}
          title={"Hamburger Smash"}
          nome="Hamburger Smash"
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese de casa."
          preco="R$ 18,90"
          onSelecionar={() => onProdutoSelecionado("Hambúrguer Smash", 18.9)}
        />

        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto2}
          title={"Hamburger Duplo"}
          nome="Hamburger Duplo"
          descricao="Dois burgers suculentos com queijo derretido, pão artesanal e molho especial da casa."
          preco="R$ 32,90"
          onSelecionar={() => onProdutoSelecionado("Hambúrguer Duplo", 32.9)}
        />

        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto3}
          title={"Hamburger Salad"}
          nome="Hamburger Salad"
          descricao="Burger artesanal com queijo, alface, tomate e molho especial no pão de fermentação natural."
          preco="R$ 32,90"
          onSelecionar={() => onProdutoSelecionado("Hambúrguer Salad", 32.9)}
        />

        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto4}
          title={"Hamburger da Casa"}
          nome="Hamburger da Casa"
          descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese de casa."
          preco="R$ 30,00"
          onSelecionar={() => onProdutoSelecionado("Hambúrguer da Casa", 30.0)}
        />

        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto5}
          title={"American BBQ"}
          nome="American BBQ"
          descricao="Hambúrguer com burger grelhado, cebola caramelizada, cheddar e molho barbecue defumado."
          preco="R$ 35,90"
          onSelecionar={() => onProdutoSelecionado("American BBQ", 35.9)}
        />

        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto6}
          title={"Crispy Bacon"}
          nome="Crispy Bacon"
          descricao="Pão artesanal, burger 160g, queijo prato, bacon crocante e maionese especial da casa."
          preco="R$ 34,00"
          onSelecionar={() => onProdutoSelecionado("Crispy Bacon", 34.0)}
        />
        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto7}
          title={"Cheddar e Cebola"}
          nome="Cheddar e Cebola"
          descricao="Hambúrguer com queijo cheddar cremoso, cebola caramelizada e pão tostado na manteiga."
          preco="R$ 29,90"
          onSelecionar={() => onProdutoSelecionado("Cheddar e Cebola", 29.9)}
        />
        <Produtos
          carrinho={adicionarAoCarrinho}
          image={produto8}
          title={"Verde Smash"}
          nome="Verde Smash"
          descricao="Burger com alface americana, rúcula, tomate fresco, queijo prato e molho caseiro no pão brioche."
          preco="R$ 31,50"
          onSelecionar={() => onProdutoSelecionado("Verde Smash", 31.5)}
        />
      </main>

      <div className="mx-auto max-w-7xl px-2 my-2">
        <h2 className="font-bold text-3xl">Bebidas</h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16"
        id="menu-bebidas"
      >
        <Refri
          carrinho={adicionarAoCarrinho}
          image={bebida1}
          title={"Coca-Cola Lata"}
          nome="Coca-Cola Lata"
          preco="R$ 6,00"
          onSelecionar={() => onProdutoSelecionado("Coca-Cola Lata", 6.0)}
        />

        <Refri
          carrinho={adicionarAoCarrinho}
          image={bebida2}
          title={"Guaraná Lata"}
          nome="Guaraná Lata"
          preco="R$ 6,00"
          onSelecionar={() => onProdutoSelecionado("Guaraná Lata", 6.0)}
        />
      </div>
    </div>
  );
}
