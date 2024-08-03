import { ReactNode, useEffect, useState } from "react";
import { MdCollectionsBookmark, MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavItem = ({
  text,
  icon,
  active = false,
  onClick,
}: {
  text: string;
  icon: ReactNode;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <span
      className={`flex items-center gap-3 px-5 py-3 cursor-pointer ${
        active ? "text-main bg-navHover" : "text-extraLight"
      } rounded-md hover:text-main hover:bg-navHover`}
      onClick={onClick}
    >
      {icon}
      {text}
    </span>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedNav, setSelectedNav] = useState<string>("dashboard");

  useEffect(() => {
    if (window.location.pathname === "/add") {
      setSelectedNav("addEmp");
    } else {
      setSelectedNav("dashboard");
    }
  }, []);

  return (
    <div className={"w-1/6 h-screen bg-sideBar py-4 sticky top-0 z-50"}>
      <div
        className={"text-main font-bold pb-5 text-2xl text-center border-b-2"}
      >
        Employees
      </div>

      <div className={"mt-10 px-8"}>
        <h2 className={"text-lightText"}>MENU</h2>
        <div className={"mt-5 flex flex-col gap-3"}>
          <NavItem
            text={"Dashboard"}
            icon={<MdSpaceDashboard className={"text-xl"} />}
            active={selectedNav === "dashboard"}
            onClick={() => {
              setSelectedNav("dashboard");
              navigate("/");
            }}
          />
          <NavItem
            text={"Add Employee"}
            icon={<MdCollectionsBookmark className={"text-xl"} />}
            active={selectedNav === "addEmp"}
            onClick={() => {
              setSelectedNav("addEmp");
              navigate("/add");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
