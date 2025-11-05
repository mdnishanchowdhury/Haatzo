import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import DiscountOffers from '../DiscountCard/DiscountOffers'
import PopularCompanies from '../PopularCompanies/PopularCompanies'
import Products from '../Products/Products'
import WeeklyOffer from '../WeeklyOffer/WeeklyOffer'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <aside className="max-w-[1360px] mx-auto px-2 md:px-0 items-center">
        <Category></Category>
        <WeeklyOffer></WeeklyOffer>
        <Products></Products>
        <DiscountOffers></DiscountOffers>
        <PopularCompanies></PopularCompanies>
      </aside>
    </div>
  )
}

export default Home