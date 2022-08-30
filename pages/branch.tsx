import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import GreatPortfolio from "../scr/components/organism/greatPortfolio";
// import BranchCard from "../src/components/molecules/brancdCard.tsx";
import BrandCard from "../scr/components/molecule/brandCard";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Branch = ({ branchpage }: any) => {
  let mapper: any = branchpage?.results;
  const image = mapper?.map((set: any) => {
    return set?.data.image.url;
  });
  const titleOne = mapper?.map((set: any) => {
    return <span>{set?.data.titleOne}</span>;
  });
  const titleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.titleTwo}</span>;
  });
  const description = mapper?.map((set: any) => {
    return <span>{set?.data.description}</span>;
  });
  const imageTwo = mapper?.map((set: any) => {
    return set?.data.imageTwo.url;
  });
  const Creative = mapper?.map((set: any) => {
    return <span>{set?.data.Creative}</span>;
  });
  const CreativeDes = mapper?.map((set: any) => {
    return <span>{set?.data.CreativeDes}</span>;
  });
  const Brands = mapper?.map((set: any) => {
    return set?.data.Brands;
  });
  const BrandsDes = mapper?.map((set: any) => {
    return <span>{set?.data.BrandsDes}</span>;
  });
  const Software = mapper?.map((set: any) => {
    return set?.data.Software;
  });
  const SoftwareDes = mapper?.map((set: any) => {
    return <span>{set?.data.SoftwareDes}</span>;
  });
  const Web = mapper?.map((set: any) => {
    return set?.data.Web;
  });
  const WebDes = mapper?.map((set: any) => {
    return <span>{set?.data.WebDes}</span>;
  });

  const Mobile = mapper?.map((set: any) => {
    return set?.data.Mobile;
  });
  const MobileDes = mapper?.map((set: any) => {
    return <span>{set?.data.MobileDes}</span>;
  });

  const UIUX = mapper?.map((set: any) => {
    return set?.data.UIUX;
  });
  const UIUXDes = mapper?.map((set: any) => {
    return <span>{set?.data.UIUXDes}</span>;
  });
  const UIImage = mapper?.map((set: any) => {
    return set?.data.UIImage.url;
  });
  return (
    <div>
      <div className="bg-App-extraLight pt-20 pb-40">
        <Wrapper contained>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
            <div>
              <div>
                <p className="lg:text-[60px] text-[42px] font-light text-[#2A2A2A]">
                  {titleOne ? titleOne : `pending`}
                </p>
                <p className="lg:text-[60px] text-[42px]  font-light	 text-[#2A2A2A]">
                  {titleTwo ? titleTwo : `pending`}
                </p>
              </div>
              <p className="mt-7 text-[18px]  text-[#2A2A2A] leading-8	">
                {description ? description : `pending`}
              </p>
            </div>
            <div>
              <img
                className="w-[339px] h-[418px]"
                src={image ? image : `pending`}
              />
            </div>
          </div>
        </Wrapper>
      </div>
      {/* creator div =>*/}
      <div className="pt-20 lg:pb-40 pb-20">
        <Wrapper contained>
          <div className="grid lg:grid-cols-2 grid-cols-1  gap-20 items-center">
            <div>
              <img
                className="lg:w-[685px] w-auto h-auto lg:h-[500px]"
                src={imageTwo ? imageTwo : `pending`}
              />
            </div>
            <div>
              <div>
                <div className="lg:text-[42px] text-[32px] font-light text-[#2A2A2A]">
                  {Creative ? Creative : `pending`}
                </div>
              </div>
              <div className="mt-2 lg:text-[18px] leading-loose text-[16px]  text-[#2A2A2A] leading-8	">
                {CreativeDes ? CreativeDes : `pending`}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      {/* Branch => */}
      <div className="bg-[#F5F5F5] pt-20 pb-40">
        <Wrapper contained>
          <p className="font-light  lg:text-[42px] text-[32px]  text-center">
            {Brands ? Brands : `pending`}
          </p>
          <p className="lg:text-[18px] text-[16px] text-center mt-4">
            {BrandsDes ? BrandsDes : `pending`}
          </p>
          {/* Cards Rendered */}
          <div className="grid lg:grid-cols-[1.6fr,1fr] grid-cols-1  gap-10">
            <BrandCard
              btnVariant="primary"
              title={Software ? Software : `pending`}
              description={SoftwareDes ? SoftwareDes : `pending`}
              className={"bg-white"}
            />
            <BrandCard
              btnVariant="primary"
              flexer={true}
              btnClass="border border-black"
              title={Web ? Web : `pending`}
              description={WebDes ? WebDes : `pending`}
              className={"bg-App-orange text-center text-white"}
            />
          </div>
          {/* second grid of cards */}
          <div className="grid lg:grid-cols-[1fr,1fr]  grid-cols-1  gap-10">
            <BrandCard
              btnVariant="contained"
              flexer={true}
              btnClass=" filled"
              title={Mobile ? Mobile : `pending`}
              description={MobileDes ? MobileDes : `pending`}
              className={"bg-[#091037] text-center text-white"}
            />
            <BrandCard
              btnVariant="contained"
              flexer={true}
              btnClass=" filled"
              title={UIUX ? UIUX : `pending`}
              description={UIUXDes ? UIUXDes : `pending`}
              className={"text-center text-white"}
              bgImg={UIImage ? UIImage : `pending`}
            />
          </div>
        </Wrapper>
      </div>
      {/* portfolio =>*/}
      <Wrapper contained>
        <GreatPortfolio />
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Branch;
export async function getServerSideProps() {
  const branchpage = await Client().query(
    Prismic.Predicates.at("document.type", "branchpage")
  );
  return {
    props: {
      branchpage,
    },
  };
}
