import ExpectMoreBanner from "../scr/components/organism/expectMoreBanner";
import Wrapper from "../scr/components/organism/wrapper";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Form from "../scr/components/organism/form";
import { AiOutlineRight } from "react-icons/ai";
import ItemCarousel from "../scr/components/organism/carousel";
import DeploymentSevicesBanner from "../scr/components/organism/deploymentSevicesBanner";
import Button from "../scr/components/molecule/button";
import AppFont from "../scr/components/atom/AppFont";
import TechnologyCard from "../scr/components/molecule/TechnologyCard";
import GreatPortfolio from "../scr/components/organism/greatPortfolio";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Services = ({ services }: any) => {
  let mapper: any = services?.results;
  const title = mapper?.map((set: any) => {
    return <span>{set?.data.title}</span>;
  });
  const description = mapper?.map((set: any) => {
    return <span>{set?.data.description}</span>;
  });

  const cssProps = "text-[16px] font-medium text-App-orange  cursor-pointer";
  const serviceTitleOne = mapper?.map((set: any) => {
    return <span>{set?.data.serviceTitleOne}</span>;
  });
  const serviceTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.serviceTitleTwo}</span>;
  });
  const serviceTitleThree = mapper?.map((set: any) => {
    return <span>{set?.data.serviceTitleThree}</span>;
  });
  const ourservices = mapper?.map((set: any) => {
    return <span>{set?.data.ourservices}</span>;
  });
  const webdevelopment = mapper?.map((set: any) => {
    return <span>{set?.data.webdevelopment}</span>;
  });
  const IOS = mapper?.map((set: any) => {
    return <span>{set?.data.IOS}</span>;
  });
  const Andriod = mapper?.map((set: any) => {
    return <span>{set?.data.Andriod}</span>;
  });
  const crossPlateform = mapper?.map((set: any) => {
    return <span>{set?.data.crossPlateform}</span>;
  });
  const frontend = mapper?.map((set: any) => {
    return <span>{set?.data.frontend}</span>;
  });
  const backend = mapper?.map((set: any) => {
    return <span>{set?.data.backend}</span>;
  });
  const webDescription = mapper?.map((set: any) => {
    return <span>{set?.data.webDescription}</span>;
  });
  const image = mapper?.map((set: any) => {
    return set?.data.image.url;
  });
  const sectionTitleTwo = mapper?.map((set: any) => {
    return <span>{set?.data.sectionTitleTwo}</span>;
  });
  const Product_Strategy = mapper?.map((set: any) => {
    return <span>{set?.data.Product_Strategy}</span>;
  });
  const Digital_Transformati = mapper?.map((set: any) => {
    return <span>{set?.data.Digital_Transformati}</span>;
  });
  const Legacy_App_Modernisation = mapper?.map((set: any) => {
    return <span>{set?.data.Legacy_App_Modernisation}</span>;
  });
  const Research_and_Development = mapper?.map((set: any) => {
    return <span>{set?.data.Research_and_Development}</span>;
  });
  const sectionTwoDescription = mapper?.map((set: any) => {
    return <span>{set?.data.sectionTwoDescription}</span>;
  });
  const imageTwo = mapper?.map((set: any) => {
    return set?.data.imageTwo.url;
  });
  const ProductDesign = mapper?.map((set: any) => {
    return <span>{set?.data.ProductDesign}</span>;
  });
  const UXdesign = mapper?.map((set: any) => {
    return <span>{set?.data.UXdesign}</span>;
  });
  const UIdesign = mapper?.map((set: any) => {
    return <span>{set?.data.UIdesign}</span>;
  });
  const ProductStrategy = mapper?.map((set: any) => {
    return <span>{set?.data.ProductStrategy}</span>;
  });

  const Workshops = mapper?.map((set: any) => {
    return <span>{set?.data.Workshops}</span>;
  });
  const sectionthreedescription = mapper?.map((set: any) => {
    return <span>{set?.data.sectionthreedescription}</span>;
  });
  const imagethree = mapper?.map((set: any) => {
    return set?.data.imagethree.url;
  });

  const AndriodText = mapper?.map((set: any) => {
    return <span>{set?.data.AndriodText}</span>;
  });
  const AndriodDes = mapper?.map((set: any) => {
    return set?.data.AndriodDes;
  });
  const AndriodImage = mapper?.map((set: any) => {
    return set?.data.AndriodImage.url;
  });

  const IOStext = mapper?.map((set: any) => {
    return <span>{set?.data.IOStext}</span>;
  });
  const IOSdes = mapper?.map((set: any) => {
    return set?.data.IOSdes;
  });
  const ISOImage = mapper?.map((set: any) => {
    return set?.data.ISOImage.url;
  });
  const CrossText = mapper?.map((set: any) => {
    return <span>{set?.data.CrossText}</span>;
  });
  const CrossDes = mapper?.map((set: any) => {
    return set?.data.CrossDes;
  });
  const CrossImage = mapper?.map((set: any) => {
    return set?.data.CrossImage.url;
  });
  const FrontendText = mapper?.map((set: any) => {
    return <span>{set?.data.FrontendText}</span>;
  });
  const FrontEndDes = mapper?.map((set: any) => {
    return set?.data.FrontEndDes;
  });
  const FrontEndImage = mapper?.map((set: any) => {
    return set?.data.FrontEndImage.url;
  });
  const BackendTex = mapper?.map((set: any) => {
    return <span>{set?.data.BackendTex}</span>;
  });
  const BackendDes = mapper?.map((set: any) => {
    return set?.data.BackendDes;
  });
  const BackendImage = mapper?.map((set: any) => {
    return set?.data.BackendImage.url;
  });

  const AIText = mapper?.map((set: any) => {
    return <span>{set?.data.AIText}</span>;
  });
  const AIDes = mapper?.map((set: any) => {
    return set?.data.AIDes;
  });
  const AIImage = mapper?.map((set: any) => {
    return set?.data.AIImage.url;
  });
  const TechnologyCardData = [
    {
      title: AndriodText ? AndriodText : `pending`,
      description: AndriodDes ? AndriodDes : `pending`,
      img: AndriodImage ? AndriodImage : `pending`,
    },
    {
      title: IOStext ? IOStext : `pending`,
      description: IOSdes ? IOSdes : `pending`,
      img: ISOImage ? ISOImage : `pending`,
    },
    {
      title: CrossText ? CrossText : `pending`,
      description: CrossDes ? CrossDes : `pending`,
      img: CrossImage ? CrossImage : `pending`,
    },
    {
      title: FrontendText ? FrontendText : `pending`,
      description: FrontEndDes ? FrontEndDes : `pending`,
      img: FrontEndImage ? FrontEndImage : `pending`,
    },
    {
      title: BackendTex ? BackendTex : `pending`,
      description: BackendDes ? BackendDes : `pending`,
      img: BackendImage ? BackendImage : `pending`,
    },
    {
      title: AIText ? AIText : `pending`,
      description: AIDes ? AIDes : `pending`,
      img: AIImage ? AIImage : `pending`,
    },
  ];
  const sectioFourTitle = mapper?.map((set: any) => {
    return <span>{set?.data.sectioFourTitle}</span>;
  });
  const Data_Science = mapper?.map((set: any) => {
    return <span>{set?.data.Data_Science}</span>;
  });
  const Machine_Learning = mapper?.map((set: any) => {
    return <span>{set?.data.Machine_Learning}</span>;
  });
  const Computer_Vision = mapper?.map((set: any) => {
    return <span>{set?.data.Computer_Vision}</span>;
  });
  const VoiceAssistantsChatbots = mapper?.map((set: any) => {
    return <span>{set?.data.VoiceAssistantsChatbots}</span>;
  });
  const SectionFourdescription = mapper?.map((set: any) => {
    return <span>{set?.data.SectionFourdescription}</span>;
  });
  const sectionFourImage = mapper?.map((set: any) => {
    return set?.data.sectionFourImage.url;
  });

  const CloudAppDevelopment = mapper?.map((set: any) => {
    return <span>{set?.data.CloudAppDevelopment}</span>;
  });
  const CloudDeployment = mapper?.map((set: any) => {
    return <span>{set?.data.CloudDeployment}</span>;
  });
  const AWSCloudDevelopment = mapper?.map((set: any) => {
    return <span>{set?.data.AWSCloudDevelopment}</span>;
  });
  const GoogleCloudDevelopment = mapper?.map((set: any) => {
    return <span>{set?.data.GoogleCloudDevelopment}</span>;
  });
  const FiveDescription = mapper?.map((set: any) => {
    return <span>{set?.data.FiveDescription}</span>;
  });
  const sectionFiveTitle = mapper?.map((set: any) => {
    return <span>{set?.data.sectionFiveTitle}</span>;
  });
  const imageFive = mapper?.map((set: any) => {
    return set?.data.imageFive.url;
  });

  const stickyTextOne = mapper?.map((set: any) => {
    return <span>{set?.data.stickyTextOne}</span>;
  });
  const stickyTextTwo = mapper?.map((set: any) => {
    return <span>{set?.data.stickyTextTwo}</span>;
  });
  const stickyTextThree = mapper?.map((set: any) => {
    return <span>{set?.data.stickyTextThree}</span>;
  });
  const stickyTextFour = mapper?.map((set: any) => {
    return <span>{set?.data.stickyTextFour}</span>;
  });
  const stickyTextFive = mapper?.map((set: any) => {
    return <span>{set?.data.stickyTextFive}</span>;
  });

  const Tangible = mapper?.map((set: any) => {
    return <span>{set?.data.Tangible}</span>;
  });
  const minTangle = mapper?.map((set: any) => {
    return <span>{set?.data.minTangle}</span>;
  });
  const days = mapper?.map((set: any) => {
    return <span>{set?.data.days}</span>;
  });
  const weeks = mapper?.map((set: any) => {
    return <span>{set?.data.weeks}</span>;
  });
  const month = mapper?.map((set: any) => {
    return <span>{set?.data.month}</span>;
  });
  const estimate = mapper?.map((set: any) => {
    return <span>{set?.data.estimate}</span>;
  });
  const prototype = mapper?.map((set: any) => {
    return <span>{set?.data.prototype}</span>;
  });
  const MVP = mapper?.map((set: any) => {
    return <span>{set?.data.MVP}</span>;
  });
  const verified = mapper?.map((set: any) => {
    return <span>{set?.data.verified}</span>;
  });
  const GetQuote = mapper?.map((set: any) => {
    return <span>{set?.data.GetQuote}</span>;
  });

  const expertise = mapper?.map((set: any) => {
    return <span>{set?.data.expertise}</span>;
  });
  const Healthcare = mapper?.map((set: any) => {
    return <span>{set?.data.Healthcare}</span>;
  });
  const commerce = mapper?.map((set: any) => {
    return <span>{set?.data.commerce}</span>;
  });
  const Entertainment = mapper?.map((set: any) => {
    return <span>{set?.data.Entertainment}</span>;
  });
  const Finetech = mapper?.map((set: any) => {
    return <span>{set?.data.Finetech}</span>;
  });
  const Others = mapper?.map((set: any) => {
    return <span>{set?.data.Others}</span>;
  });
  const programming = mapper?.map((set: any) => {
    return <span>{set?.data.programming}</span>;
  });
  const expImage = mapper?.map((set: any) => {
    return set?.data.expImage.url;
  });

  const technology = mapper?.map((set: any) => {
    return <span>{set?.data.technology}</span>;
  });
  const quoteOne = mapper?.map((set: any) => {
    return <span>{set?.data.quoteOne}</span>;
  });
  const btnQuote = mapper?.map((set: any) => {
    return <span>{set?.data.btnQuote}</span>;
  });
  return (
    <div>
      <ExpectMoreBanner
        titleone={title ? title : `pending`}
        titletwo=""
        description={description ? description : `pending`}
        button={true}
      />
      <Wrapper
        contained={true}
        className="grid lg:grid-cols-[1fr,2fr] grid-cols-1  pb-10 pt-10"
      >
        <div>
          <div className="lg:first-letter:text-[42px] text-[32px]">
            {serviceTitleOne ? serviceTitleOne : `pending`}
          </div>
          <div className="lg:first-letter:text-[42px]  text-[32px] font-bold">
            {serviceTitleTwo ? serviceTitleTwo : `pending`}
          </div>
        </div>
        <div>
          <div className="text-[19px] leading-loose">
            {serviceTitleThree ? serviceTitleThree : `pending`}
          </div>
        </div>
      </Wrapper>
      <Wrapper contained={true} className="mt-20 mb-40">
        <ItemCarousel  />
      </Wrapper>
      {/* carousel ended */}
      <Wrapper contained className="mt-20 mb-20">
        <p className={"text-[42px] font-medium"}>
          {ourservices ? ourservices : `pending`}
        </p>
      </Wrapper>
      {/* banners started */}
      <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-1">
        <div>
          <DeploymentSevicesBanner
            image={`${image}`}
            title={webdevelopment ? webdevelopment : `pending`}
            description={webDescription ? webDescription : `pending`}
            tagone={IOS ? IOS : `pending`}
            tagtwo={Andriod ? Andriod : `pending`}
            tagthree={crossPlateform ? crossPlateform : `pending`}
            tagfour={frontend ? frontend : `pending`}
            tagfive={backend ? backend : `pending`}
          />
          <div className="mt-20 mb-20 lg:pl-44 pl-5">
            <div className="grid lg:grid-cols-[3fr,1fr] grid-cols-1  justify-items-center   items-center">
              <div>
                <div className="text-[36px]">
                  {sectionTitleTwo ? sectionTitleTwo : `pending`}
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[10px]  mt-5 mb-8 ">
                  <div className={`${cssProps}`}>
                    {Product_Strategy ? Product_Strategy : `pending`}
                  </div>
                  <div className={`${cssProps}`}>
                    {Digital_Transformati ? Digital_Transformati : `pending`}
                  </div>
                  <div className={`${cssProps}`}>
                    {Legacy_App_Modernisation
                      ? Legacy_App_Modernisation
                      : `pending`}
                  </div>
                  <div className={`${cssProps}`}>
                    {Research_and_Development
                      ? Research_and_Development
                      : `pending`}
                  </div>
                </div>
                <AppFont>
                  {sectionTwoDescription ? sectionTwoDescription : `pending`}
                </AppFont>
              </div>
              <div>
                <img src={imageTwo ? imageTwo : `pending`} alt="asd" />
              </div>
            </div>
          </div>
          <DeploymentSevicesBanner
            title={ProductDesign ? ProductDesign : `pending`}
            image={imagethree ? imagethree : `pending`}
            description={
              sectionthreedescription ? sectionthreedescription : `pending`
            }
            tagone={UXdesign ? UXdesign : `pending`}
            tagtwo={UIdesign ? UIdesign : `pending`}
            tagthree={ProductStrategy ? ProductStrategy : `pending`}
            tagfour={Workshops ? Workshops : `pending`}
          />
          <div className="mt-20 mb-20 lg:pl-44 pl-5">
            <div className="grid lg:grid-cols-[1fr,2fr] grid-cols-1  justify-items-center items-center">
              <div>
                <p className="text-[36px]">
                  {sectioFourTitle ? sectioFourTitle : `pending`}{" "}
                </p>
                <div className="lg:flex flex-cols  mt-5 mb-8 ">
                  <p className={`${cssProps}`}>
                    {Data_Science ? Data_Science : `pending`}
                  </p>
                  <p className={`${cssProps}`}>
                    {Machine_Learning ? Machine_Learning : `pending`}
                  </p>
                  <p className={`${cssProps}`}>
                    {Computer_Vision ? Computer_Vision : ` pending`}
                  </p>
                  <p className={`${cssProps}`}>
                    {VoiceAssistantsChatbots
                      ? VoiceAssistantsChatbots
                      : `pending`}
                  </p>
                </div>
                <AppFont>
                  {SectionFourdescription ? SectionFourdescription : `pending`}
                </AppFont>
              </div>
              <img
                className=""
                src={sectionFourImage ? sectionFourImage : `pending`}
              />
            </div>
          </div>
          <DeploymentSevicesBanner
            title={sectionFiveTitle ? sectionFiveTitle : `pending`}
            description={FiveDescription ? FiveDescription : `pending`}
            tagone={CloudAppDevelopment ? CloudAppDevelopment : `pending`}
            image={imageFive ? imageFive : `pending`}
            tagtwo={CloudDeployment ? CloudDeployment : `pending`}
            tagthree={AWSCloudDevelopment ? AWSCloudDevelopment : `pending`}
            tagfour={
              GoogleCloudDevelopment ? GoogleCloudDevelopment : `pending`
            }
          />
        </div>
        {/* Sticky Div */}
        {/* continues from here */}
        <div className="border p-5 border-App-orange rounded-xl sticky top-40  w-[325px] h-[200px]">
          <AppFont className="leading-loose text-[#495057]">
            {stickyTextOne ? stickyTextOne : `pending`}
          </AppFont>
          <AppFont className="leading-loose text-[#495057]">
            {stickyTextTwo ? stickyTextTwo : `pending`}
          </AppFont>
          <AppFont className="leading-loose text-[#495057]">
            {stickyTextThree ? stickyTextThree : `pending`}
          </AppFont>
          <AppFont className="leading-loose text-[#495057]">
            {stickyTextFour ? stickyTextFour : `pending`}
          </AppFont>
          <AppFont className="leading-loose text-[#495057]">
            {stickyTextFive ? stickyTextFive : `pending`}
          </AppFont>
        </div>
      </div>
      {/* pink baner ==>*/}
      <Wrapper full>
        <div className="bg-App-extraLight mt-10">
          <div className="gap-10   lg:p-28 p-10  pb-10 lg:flex lg:flex-row flex flex-col  justify-evenly items-center ">
            <p className={"lg:text-[42px] text-[32px] font-bold"}>
              {Tangible ? Tangible : `pending`}
              <br />
              {minTangle ? minTangle : `pending`}
            </p>
            <div>
              <p className={"lg:text-[42px] text-[32px]  font-bold"}>
                {days ? days : `pending`}
              </p>
              <small className={"text-[18px]"}>
                {estimate ? estimate : ` pending`}
              </small>
            </div>
            <div>
              <p className={"lg:text-[42px] text-[32px]  font-bold"}>
                {weeks ? weeks : `pending`}
              </p>
              <small className={"text-[18px]"}>
                {prototype ? prototype : `pending`}
              </small>
            </div>
            <div>
              <p className={"lg:text-[42px]  text-[32px] font-bold"}>
                {month ? month : `pending`}
              </p>
              <small className={"text-[18px]"}>{MVP ? MVP : `pending`}</small>
            </div>
          </div>
          <div>
            <p className="text-[18px] text-center">
              {verified ? verified : `pending`}
            </p>
          </div>
          <div className="flex justify-center pb-20 pt-10">
            <Button
              variant="contained"
              path="/services"
              className="rounded filled"
              endIcon={<AiOutlineRight />}
            >
              {GetQuote ? GetQuote : `pending`}
            </Button>
          </div>
        </div>
      </Wrapper>
      <Wrapper full className={"bg-[#F5F5F5]"}>
        {/* little blue banner */}
        <Wrapper contained className="p-4">
          <div className="mt-20 mb-20 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center  justify-items-center	  items-center">
              <div>
                <p className="text-[36px]">
                  {expertise ? expertise : `pending`}
                </p>
                <div className="lg:flex lg:flex-row flex flex-col   mt-5 mb-8 ">
                  <p className={`${cssProps}  p-2 rounded`}>
                    {Healthcare ? Healthcare : `pending`}
                  </p>
                  <p className={`${cssProps} p-2`}>
                    {commerce ? commerce : `pending`}
                  </p>
                  <p className={`${cssProps} p-2`}>
                    {Entertainment ? Entertainment : `pending`}
                  </p>
                  <p className={`${cssProps} p-2`}>
                    {Finetech ? Finetech : `pending`}
                  </p>
                  <p className={`${cssProps} p-2`}>
                    {Others ? Others : `pending`}
                  </p>
                </div>
                <AppFont>{programming ? programming : `pending`}</AppFont>
              </div>
              <img className="" src={expImage ? expImage : `pending`} />
            </div>
          </div>
        </Wrapper>
      </Wrapper>
      {/* Techonology Cards ==>*/}
      <Wrapper contained className="p-32">
        <div className="grid lg:grid-cols-[1fr,1.4fr] grid-cols-1  gap-10 items-center">
          <div>
            <p className="text-[42px] font-normal">
              {technology ? technology : `pending`}
            </p>
            <AppFont className="mt-8 mb-8 leading-loose">
              {quoteOne ? quoteOne : `pending`}
            </AppFont>
            <Button
              variant="contained"
              path="/branch"
              endIcon={<AiOutlineRight />}
              className="filled mt-12 rounded"
            >
              {btnQuote ? btnQuote : `  pending`}
            </Button>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 rounded ">
            {TechnologyCardData.map((items) => {
              return <TechnologyCard items={items} />;
            })}
          </div>
        </div>
      </Wrapper>
      {/* Great-Portfolio  ==>*/}
      <Wrapper contained>
        <GreatPortfolio />
      </Wrapper>
      <Form />
      <ProjectInMindBanner />
    </div>
  );
};

export default Services;
export async function getServerSideProps() {
  const services = await Client().query(
    Prismic.Predicates.at("document.type", "services")
  );
  return {
    props: {
      services,
    },
  };
}
