import { deleteEmployee, getEmployeeList } from "../../service";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const fetchEmployList = async () => {
    try {
      const resEmployeeList = await getEmployeeList(10, 0);

      setEmployeeList(resEmployeeList.data.data);
    } catch (e) {
      console.log(`#2024216155150322 err`, e);
    }
  };

  useEffect(() => {
    fetchEmployList();
  }, []);

  const delEmp = async (id) => {
    try {
      const res = await deleteEmployee(id);

      if (res.status === 200) {
        fetchEmployList();
      }
    } catch (e) {
      console.log(`#2024216162148231 err`, e);
    }
  };

  return (
    <div className={"flex-1"}>
      <div className={"text-3xl border-b-2 font-semibold px-6 py-4"}>
        Employee List
      </div>

      <div className="overflow-x-auto shadow-lg sm:rounded-lg mt-20 mx-6">
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
                      className={"text-xl cursor-pointer hover:text-blue-500"}
                    />
                  </td>
                  <td className="px-6 py-3">
                    <MdDelete
                      onClick={() => delEmp(employee._id)}
                      className={"text-xl cursor-pointer hover:text-red-500"}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
