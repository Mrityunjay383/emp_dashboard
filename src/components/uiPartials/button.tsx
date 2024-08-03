const Button = ({
  onClick,
  disableCondition,
  label,
  width = 1,
  className,
  textColor = "white",
}: {
  onClick: () => void;
  disableCondition: boolean;
  label: string;
  width?: number;
  className?: string;
  textColor?: string;
}) => {
  return (
    <button
      className={`font-lato bg-navHover cursor-pointer text-${textColor} font-semibold uppercase px-4 rounded h-[4vh] w-${width}/6 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 ${className}`}
      type="button"
      onClick={onClick}
      disabled={disableCondition}
    >
      {label}
    </button>
  );
};

export default Button;
