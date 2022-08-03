import Button from "./button";
type BrandProps = {
  title: string;
  description: string;
  className: string;
  titleClass?: string;
  descriptionClass?: string;
  flexer?: boolean;
  btnClass?: string;
  btnVariant?: string;
  bgImg?: string;
};
const BrandCard = ({
  title,
  description,
  className,
  descriptionClass,
  titleClass,
  btnClass,
  btnVariant,
  bgImg,
  flexer,
}: BrandProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`${className} p-10 border-2 mt-10  rounded-2xl bg-cover  overflow-hidden`}
    >
      <p className={`${titleClass} text-[36px] font-bold `}>{title}</p>
      <p className={`${descriptionClass} text-[14px] mt-5 mb-5`}>
        {description}
      </p>
      <div>
        {flexer ? (
          <div className="flex justify-center">
            <Button  path="/services"
              variant={`${btnVariant}`}
              className={`${btnClass}  rounded-[10px]`}
            >
              Read More
            </Button>
          </div>
        ) : (
          <>
            <Button  path="/services" variant={`${btnVariant}`} className={`rounded-[10px]`}>
              Read More
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default BrandCard;
