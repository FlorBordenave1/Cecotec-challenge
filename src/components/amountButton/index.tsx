import { ChevronDownIcon } from "@/icons/chevronDownIcon";
import { ChevronUpIcon } from "@/icons/chevronUpIcon";
import { Typography } from "../ui/typography";

type AmountButtonProps = {
  quantity: number;
  increase: () => void;
  decrease: () => void;
};
export const AmountButton = ({
  quantity,
  increase,
  decrease,
}: AmountButtonProps) => {
  return (
    <div className="rounded-lg border-[1px] border-neutral30 w-[95px] h-[40px] md:h-[57px] flex flex-row">
      <div className="w-1/2 flex items-center justify-center">
        <Typography label={quantity.toString()} variant="body" />
      </div>
      <div className=" w-1/2 flex flex-col items-center justify-center ">
        <button
          onClick={increase}
          className="w-full h-full bg-neutral30 hover:bg-neutral40 rounded-tr-lg flex justify-center items-center"
        >
          <ChevronUpIcon />
        </button>
        <button
          onClick={decrease}
          className="w-full h-full bg-neutral30 hover:bg-neutral40 rounded-br-lg  flex justify-center items-center"
        >
          <ChevronDownIcon />
        </button>
      </div>
    </div>
  );
};
