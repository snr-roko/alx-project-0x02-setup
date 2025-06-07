import { type CardProps } from "@/interfaces"

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 border-amber-200 border-2">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-gray-300">{content}</p>
    </div>
  )
}

export default Card;