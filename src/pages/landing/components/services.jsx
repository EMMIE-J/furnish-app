import {Handshake, HeadsetIcon, HeartIcon, PenIcon, SofaIcon } from "lucide-react"
import K from "../../../constants"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      {K.SERVICES.map((service, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col p-4`}
            style={{ backgroundColor: service.bgColor }}
          >

            <span className="w-fit p-2 rounded-full text-white" style={{backgroundColor: service.iconBg}}>
              {service.icon}
            </span>


            <h3 className="font-bold">{service.title}</h3>
            <p className="text-black/80">{service.description}</p>

          </div>
        )

      }
      )
     }
        {/* {K.ABOUT.map((service, index) => (
        <div>
          img src={service.img} alt="About image" className="object-fill"
        </div>
      )
      )} */}
      
    </div>
  )
}

export default Services