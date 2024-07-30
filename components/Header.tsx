import { LuUserCircle2 } from "react-icons/lu";
import { FaFilePen } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full h-[10%] flex justify-center items-center">
      <div className="w-full h-full flex justify-start items-center">
        <FaFilePen size={25} className="text-slate-100 relative left-[5%]" />
      </div>
      <div className="w-full h-full flex justify-end items-center">
        <LuUserCircle2
          size={30}
          className="text-slate-100 relative right-[5%]"
        />
      </div>
    </div>
  );
};

export default Header;
