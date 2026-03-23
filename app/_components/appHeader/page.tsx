
import { User } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="w-full border-b border-b-gray-300 bg-neutral-100">
      <div className="flex justify-between items-center px-16 py-4">
        <div className="flex items-center gap-48">
          <div className="text-xl font-bold text-gray-800">Dashboard</div>
        </div>
        <div className="border rounded-2xl p-2">
          <User />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
