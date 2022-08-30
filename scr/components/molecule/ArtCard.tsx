import AppFont from "../atom/AppFont";
type ArtCardProps = {
  items:
    | {
        title: string;
        des: string;
        digit?: string;
        img?: string;
      }[]
    | any;
};
const ArtCard = ({ items }: ArtCardProps) => {
  const { title, des, digit, img } = items;
  return (
    <div className="p-[40px] rounded-[30px] shadow-md bg-white text-white">
      <div>
        <div className="flex items-center ">
          {img && <img src={img} alt="" />}
          {digit && (
            <p className="text-[31px] font-semibold text-center p-3 h-[75px] w-[75px] rounded-full bg-App-extraLight">
              {digit}
            </p>
          )}

          <p className="text-[#303C48] text-[27px] font-bold ml-7">{title}</p>
        </div>
        <AppFont className="leading-[28px] text-[#303C48]	 mt-10 mb-5">
          {des}
        </AppFont>
      </div>
    </div>
  );
};

export default ArtCard;
