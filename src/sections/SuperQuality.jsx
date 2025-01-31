import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwears are designed  to elevate your 
          experience, providing you with unmatched quality, innovation and a touch of elgance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details ensures your satisfaction.
        </p>
       <div>
        <button type="button" className="coral-btn">View Details</button>
       </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Product Details" width={570} height={522} className="object-contain"/> 
      </div>
    </section>
  )
}

export default SuperQuality