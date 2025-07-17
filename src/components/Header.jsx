import logo from "../assets/hamb-1.png";
import bg from "../assets/bg.png";

export function Header() {
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

        <span className="text-white font-medium">Rua dev 10, Campo Grande - MS</span>

        <div className="bg-green-600 px-4 py-1 rounded-lg mt-5" id="date-span">
          <span className="text-white font-medium">Seg á Dom - 10:00 as 22:00</span>
        </div>

      </div>
    </header>
  );
}
