import Image from "next/image";
import Logo from "@/assets/subscribly.png";
import { User } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-16 py-4">
        <div className="flex items-center gap-16">
          <Image src={Logo} alt="logo" width={150} />
          <div>Dashboard</div>
        </div>
        <div className="border rounded-2xl p-2">
          <User />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
