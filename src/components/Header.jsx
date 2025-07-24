import logo from "../assets/hamb-1.png";
import bg from "../assets/bg.png";
import { useEffect, useState } from "react";

export function Header() {
  const [lojaAberta, setLojaAberta] = useState(false);

  useEffect(() => {
    const agora = new Date();
    const hora = agora.getHours();

    const aberta = hora >= 9 && hora < 19;

    setLojaAberta(aberta);
  }, []);

  return (
    <header
      className="w-full h-[420px] bg-zinc-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
        />

        <h1 className="text-4xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>

        <span className="text-white font-medium">
          Rua dev 10, Campo Grande - MS
        </span>

        <div
          className={` px-4 py-1 rounded-lg mt-5 ${
            lojaAberta ? "bg-green-600" : "bg-red-600"
          }`}
          id="date-span "
        >
          <span className="text-white font-medium">
            Seg á Dom - 09:00 as 19:00 - {lojaAberta ? "Aberto" : "Fechado"}
          </span>
        </div>
      </div>
    </header>
  );
}
