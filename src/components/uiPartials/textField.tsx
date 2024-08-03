const TextField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div className="flex items-center mb-6">
      <div className="w-1/3">
        <label
          className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          {label}
        </label>
      </div>
      <div className="w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextField;
