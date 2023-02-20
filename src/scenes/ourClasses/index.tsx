import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/6.jpg";
import image6 from "@/assets/8.jpg";
import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit dolores, ratione harum itaque blanditiis ea doloremque alias deserunt at, nesciunt ab! Sapiente, consectetur eum quia similique aliquam nostrum saepe debitis laboriosam ullam perspiciatis nam.",

    image: image1,
  },
  {
    name: " Training Classes",

    image: image2,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit dolores, ratione harum itaque blanditiis ea doloremque alias deserunt at, nesciunt ab! Sapiente, consectetur eum quia similique aliquam nostrum saepe debitis laboriosam ullam perspiciatis nam.",

    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit dolores, ratione harum itaque blanditiis ea doloremque alias deserunt at, nesciunt ab! Sapiente, consectetur eum quia similique aliquam nostrum saepe debitis laboriosam ullam perspiciatis nam.",

    image: image4,
  },
  {
    name: "Ab Core Classes",

    image: image5,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit dolores, ratione harum itaque blanditiis ea doloremque alias deserunt at, nesciunt ab! Sapiente, consectetur eum quia similique aliquam nostrum saepe debitis laboriosam ullam perspiciatis nam.",

    image: image6,
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourClasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div
            className="md:w-3/5
          "
          >
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              omnis sed ratione cumque illum. Fuga neque aliquid similique! Quod
              aliquam dignissimos veritatis ut dolores vel explicabo eaque ad
              suscipit maiores!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
