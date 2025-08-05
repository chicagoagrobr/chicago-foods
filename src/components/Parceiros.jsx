import parceiro1 from "../assets/parceiro1.png";
import parceiro2 from "../assets/parceiro2.png";
import parceiro3 from "../assets/parceiro3.png";
import parceiro4 from "../assets/parceiro4.png";
import parceiro5 from "../assets/parceiro5.png";
import parceiro6 from "../assets/parceiro6.png";
import parceiro7 from "../assets/parceiro7.png";
import parceiro8 from "../assets/parceiro8.png";
import parceiro9 from "../assets/parceiro9.png";
import parceiro10 from "../assets/parceiro10.png";

const parceiros = [parceiro1, parceiro2, parceiro3, parceiro4, parceiro5, parceiro6, parceiro7, parceiro8, parceiro9, parceiro10];

const Parceiros = () => {
  return (
    <section className="py-3 bg-white" style={{ boxShadow: `inset 0px -4px 8px rgba(0,0,0,0.25)` }}>
      <div className="flex justify-center items-center gap-10">
        <h2 className="text-xl font-semibold text-gray-800">
          Nossos <br/> Parceiros
        </h2>
        <div className="flex gap-8">
          {parceiros.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Parceiro ${index + 1}`}
              className="h-[84px] w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
