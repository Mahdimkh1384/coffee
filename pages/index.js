import Slider from "@/Components/template/Index/Slider";
import About from "@/Components/template/Index/About";
import Services from "@/Components/template/Index/Services";
import Offer from "@/Components/template/Index/Offer";
import Menu from "@/Components/template/Index/Menu";
import Reservation from "@/Components/template/Index/reservation";
import Testimonials from "@/Components/template/Index/Testimonials";

export default function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials comments = {data.comments}/>
    </>
  );
}

export async function getStaticProps() {

  const servicesResponse = await fetch("http://localhost:4000/services")
  const servicesData = await servicesResponse.json()

  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  const commentsResponse = await fetch("http://localhost:4000/comments")
  const commentsData = await commentsResponse.json()

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments : commentsData,
      },
    },
    revalidate: 60 * 60 * 12,
  }
}