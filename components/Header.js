import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          {/* avatar */}
          <div className="relative h-40 w-40 lg:mx-auto border-pink-500 border-8 rounded-full ">
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Messsage */}
          <h1 className="text-3xl">Welcome to CASDM Mataverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Change username */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
