import { filters } from "@/app/_utils/enum";

const Filters = () => {
  return (
    <div className="flex items-center gap-4">
      {Object.values(filters).map((value) => {
        return (
          <div key={value} className="rounded-full border py-2 px-4">
            {value.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
