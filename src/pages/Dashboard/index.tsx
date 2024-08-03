import { deleteEmployee, getEmployeeList } from "../../service";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [employeeList, setEmployeeList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchEmployList = async () => {
    setIsLoading(true);

    try {
      const resEmployeeList = await getEmployeeList(10, 0);

      setEmployeeList(resEmployeeList.data.data);
    } catch (e) {
      console.log(`#2024216155150322 err`, e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEmployList();
  }, []);

  const delEmp = async (id) => {
    try {
      const res = await deleteEmployee(id);

      if (res.status === 200) {
        toast.success("Employee deleted successfully!!");
        fetchEmployList();
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(`#2024216162148231 err`, err);
    }
  };

  return (
    <div className={"flex-1"}>
      <div className={"text-3xl border-b-2 font-semibold px-6 py-4"}>
        Employee List
      </div>

      {!isLoading ? (
        <div className="overflow-x-auto shadow-lg sm:rounded-lg mt-20 mx-6">
          {employeeList?.length > 0 ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-main bg-sideBar">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    emp_id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-3">{employee._id}</td>
                      <td className="px-6 py-3">{employee.name}</td>
                      <td className="px-6 py-3">
                        <FaEye
                          onClick={() => navigate(`/${employee._id}`)}
                          className={
                            "text-xl cursor-pointer hover:text-blue-500"
                          }
                        />
                      </td>
                      <td className="px-6 py-3">
                        <MdDelete
                          onClick={() => delEmp(employee._id)}
                          className={
                            "text-xl cursor-pointer hover:text-red-500"
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className={"text-center px-4 py-5 text-lightText"}>
              {" "}
              No Employees in the system!
            </div>
          )}
        </div>
      ) : (
        <Skeleton className={"mt-20 mx-6"} height={"20vh"} width={"80vw"} />
      )}
    </div>
  );
};

export default Dashboard;
