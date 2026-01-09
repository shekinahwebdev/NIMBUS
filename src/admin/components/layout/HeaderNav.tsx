import { BiX } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

interface HeaderNavProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const HeaderNav = ({ open, setOpen }: HeaderNavProps) => {
  return (
    <div>
      <button
        className="lg:hidden absolute p-1 right-6 top-3 bg-mold-yellow rounded"
        onClick={() => setOpen(!open)}
      >
        {!open ? <HiOutlineMenu size={30} /> : <BiX size={30} />}
      </button>
    </div>
  );
};

export default HeaderNav;
