import Image from "next/image";
import logo from "@/public/assets/bell 1.svg"
import profileIcon from "@/public/assets/profile 1.svg"

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 shadow-gray-500 bg-gray-300">
      <div className="flex gap-4 items-center">
        <Image src={logo} alt="Logo" width={20} height={20}/>
        <h1 className="text-gray-600">
          Genius Game
        </h1>
      </div>
      <Image src={profileIcon} alt="Profile Icon" width={20} height={20} />
    </header>
  )
}

export default Header;