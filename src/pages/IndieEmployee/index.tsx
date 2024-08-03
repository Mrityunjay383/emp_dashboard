import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getEmployee } from "../../service";
import { useEffect, useState } from "react";

const IndieEmployee = () => {
  const { emp_id } = useParams();

  const [employeeData, setEmployeeData] = useState<{
    _id: string;
    name: string;
    address: {
      line1: string;
      city: string;
      country: string;
      zip_code: string;
    };
    contact: { contact_method: string; value: string }[];
  } | null>();

  const fetchEmployeeData = async () => {
    try {
      const res = await getEmployee(emp_id);

      setEmployeeData(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(`#202421618326366 err`, err);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <div className={"flex-1"}>
      <div className={"text-3xl border-b-2 font-semibold px-6 py-4"}>
        {employeeData?.name}
      </div>

      <div className={"mx-6 mt-20 p-4 text-lg rounded-lg bg-sideBar shadow-lg"}>
        <span className={"font-semibold"}>emp_id</span>:{" "}
        <span className={"bg-navHover px-4"}>{employeeData?._id}</span>
      </div>

      <div className={"mx-6 mt-10 p-4 text-lg rounded-lg bg-sideBar shadow-lg"}>
        <span className={"font-semibold"}>Address</span>:{" "}
        <span className={""}>
          {employeeData?.address?.line1}, {employeeData?.address?.city},{" "}
          {employeeData?.address?.country}, {employeeData?.address?.zip_code}
        </span>
      </div>

      <div className={"mx-6 mt-10 p-4 text-lg rounded-lg bg-sideBar shadow-lg"}>
        <span className={"font-semibold"}>Contact</span>: <br />
        {employeeData?.contact.map((contact, i) => {
          return (
            <div key={i}>
              <span>{contact.contact_method}</span>:{" "}
              <span>{contact.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndieEmployee;
