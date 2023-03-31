import "./style.css";
import { MdDesignServices, MdWebAsset, MdMobileFriendly } from "react-icons/md";
import { BsFillCloudArrowDownFill } from "react-icons/bs";

const INFO_CARDS = [
  {
    type: "UI Designer",
    number: "01",
    icon: <MdDesignServices className="icon-card" />,
    title: "Encante seus usuários",
    text: "Criação de designs visuais atraentes e funcionais que proporcionam uma experiência de usuário excepcional em produtos ou serviços digitais, tornando a usabilidade intuitiva e mantendo a identidade de marca consistente.",
  },
  {
    type: "Mobile Developer",
    number: "02",
    icon: <MdMobileFriendly className="icon-card" />,
    title: "Aplicativo de sucesso",
    text: "Soluções inovadoras e personalizadas em aplicativos móveis, desde a ideia até a publicação na loja de aplicativos, garantindo uma experiência de usuário intuitiva e atraente.",
  },
  {
    type: "Web Developer",
    number: "03",
    icon: <MdWebAsset className="icon-card" />,
    title: "Presença online eficiente",
    text: "Foco no desenvolvimento de alto desempenho e escalabilidade, entregando soluções web personalizadas para sua empresa.",
  },
];

function WhatIDoPage() {
  return (
    <div className="content-WhatIDo">
      <h2>What I Do</h2>
      <div className="card-area">
        {INFO_CARDS.map((info, index) => (
          <div key={index} className="card">
            <div className="intern-card">
              <div>
                <div className="intern-card-number">{info.number}</div>
                <div className="intern-card-type">{info.type}</div>
              </div>
              {info.icon}
            </div>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
            <BsFillCloudArrowDownFill className="icon-rol" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDoPage;
