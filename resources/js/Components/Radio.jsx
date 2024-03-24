const Radio = ({ name, value, ...props }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="peer hidden"
        {...props}
      />
      <label
        htmlFor={value}
        className="peer-checked:text-white h-10 px-4 py-2 peer-checked:bg-primary border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 rounded w-full inline-flex items-center justify-center text-sm font-medium"
      >
        {value}
      </label>
    </div>
  );
};

export default Radio;
