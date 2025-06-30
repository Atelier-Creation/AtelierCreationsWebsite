import OurClient from "../componets/OurClient/OurClient"
import OurDesign from "../componets/OurDesign/OurDesign"
import AboutEquispace from "../componets/PortfolioAbout/AboutEquispace"
import PortfolioFaq from "../componets/PortfolioFaq/PortfolioFaq"
import PortfolioFooter from "../componets/PortfolioFooter/PortfolioFooter"
import PortfolioSection from "../componets/PortfolioSection/PortfolioSection"
import TextSection from "../componets/PortfolioSection/TextSection"

export const Portfolio = () => {
  return (
   <>
   <TextSection/>
   <PortfolioSection/>
   <AboutEquispace/>
   <OurDesign/>
   <OurClient/>
   <PortfolioFaq/>
   <PortfolioFooter/>
   </>
  )
}
