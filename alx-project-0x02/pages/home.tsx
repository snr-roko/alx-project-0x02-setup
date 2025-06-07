import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";

const Home : React.FC<CardProps[]>  = () => {
  return (
    <div className="p-5 flex flex-col flex-grow">
      <h1 className="text-4xl font-bold text-center text-gray-600">Welcome, Genius</h1>
      <div className="flex flex-col gap-5 md:flex-row mt-4">
        <Card title="Indian Poker" content="A game of cards and psychology" />
        <Card title="Picture Hunt" content="A game of memory and stamina" />
        <Card title="Scamming Horse" content="A game of instinct and deductions" />
        <Card title="Kong's Dilenma" content="A game that lives up to its name" />
      </div>
    </div>
  )
}

export default Home;