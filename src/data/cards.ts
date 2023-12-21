import foodIcon from "@/assets/images/foodIcon.png";
import graphIcon from "@/assets/images/graphIcon.png";
import chatIcon from "@/assets/images/chatIcon.png";

type Card = {
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Medidas",
    description: "Realize o monitoramento de suas medidas corporais.",
    image: foodIcon,
  },
  {
    title: "Saúde visual",
    description:
      "É possível monitorar de forma visual a sua glicemia, batimentos cardíacos e também a pressão.",
    image: graphIcon,
  },
  {
    title: "Chat Bot",
    description: "Dúvidas? Fale com o nosso chat bot!",
    image: chatIcon,
  },
];

export default cards;
