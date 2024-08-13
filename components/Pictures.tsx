
import { DISHES } from "../app/constants/index"
import PictureCard from "./PictureCard"


const Pictures = () => {
  return (
    <section className="container mx-auto py-16" id="pictures">
          <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
            Pictures
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {DISHES.map((project, index) => (
                 <PictureCard key={index} project={project} />
            ))}
          </div>
    </section>
  )
}

export default Pictures