type InputProps = {
  label?: string;
};
const Input = ({ label }: InputProps) => {
  return (
    <div className=" pb-10">
      <form>
        <div>
          <label
            className="text-[16px] font-medium text-[#2A2A2A]"
            htmlFor="first"
          >
            {label} *
          </label>
        </div>
        <div className="pt-4">
          <input
            type="text"
            id="first"
            className="bg-blue-50 w-full border border-[#B8C8CF] outline-0  pl-1 pr-1 rounded h-9 	"
            name="first"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
