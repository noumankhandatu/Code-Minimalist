import GreatPortfolio from "../scr/components/organism/greatPortfolio";
import { ProjectInMindBanner } from "../scr/components/organism/banners";
import Wrapper from "../scr/components/organism/wrapper";
const Porfolio = () => {
  return (
    <>
      <Wrapper contained className="mt-20">
        <GreatPortfolio />
      </Wrapper>
      <Wrapper full>
        <ProjectInMindBanner />
      </Wrapper>
    </>
  );
};

export default Porfolio;
