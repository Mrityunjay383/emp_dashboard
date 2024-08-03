import TextField from "../../components/uiPartials/textField";
import { useState } from "react";
import Button from "../../components/uiPartials/button";
import { addNewEmployee } from "../../service";
import { toast } from "react-toastify";

const emptyEmployeeData = {
  name: "",
  address: {
    line1: "",
    city: "",
    country: "",
    zip_code: "",
  },
  email: "",
  phone: "",
};

const AddEmploy = () => {
  const [employeeFormData, setEmployeeFormData] = useState(emptyEmployeeData);

  const submitAddNewEmployee = async () => {
    if (employeeFormData.name === "") {
      return toast.error("Name is required");
    }

    const reqData = {
      contact: [
        { contact_method: "EMAIL", value: employeeFormData.email },
        { contact_method: "PHONE", value: employeeFormData.phone },
      ],
      address: employeeFormData.address,
      name: employeeFormData.name,
    };

    try {
      const res = await addNewEmployee(reqData);

      if (res.status === 201) {
        toast.success("Employee added successfully!!");
        setEmployeeFormData(emptyEmployeeData);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(`#2024216173939957 err`, err);
    }
  };

  return (
    <div className={"flex-1"}>
      <div className={"text-3xl border-b-2 font-semibold px-6 py-4"}>
        Add a new Employee
      </div>

      <div className={"mt-20 w-2/3 mx-auto shadow-lg p-5 rounded-t-lg"}>
        <TextField
          label={"Full Name"}
          value={employeeFormData.name}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, name: val };
            })
          }
        />
        <TextField
          label={"Address Line 1"}
          value={employeeFormData.address.line1}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, address: { ...curr.address, line1: val } };
            })
          }
        />
        <TextField
          label={"City"}
          value={employeeFormData.address.city}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, address: { ...curr.address, city: val } };
            })
          }
        />
        <TextField
          label={"Country"}
          value={employeeFormData.address.country}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, address: { ...curr.address, country: val } };
            })
          }
        />
        <TextField
          label={"ZIP Code"}
          value={employeeFormData.address.zip_code}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, address: { ...curr.address, zip_code: val } };
            })
          }
        />

        <TextField
          label={"Email"}
          value={employeeFormData.email}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, email: val };
            })
          }
        />

        <TextField
          label={"Phone"}
          value={employeeFormData.phone}
          onChange={(val: string) =>
            setEmployeeFormData((curr) => {
              return { ...curr, phone: val };
            })
          }
        />

        <div className={"text-right mt-10"}>
          <Button
            label={"Add Employee"}
            disableCondition={false}
            width={2}
            onClick={submitAddNewEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmploy;
