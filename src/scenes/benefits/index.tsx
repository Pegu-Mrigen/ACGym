import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/15.png";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique voluptatibus velit atque enim quis doloribus provident voluptas dolorem nemo neque.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique voluptatibus velit atque enim quis doloribus provident voluptas dolorem nemo neque.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique voluptatibus velit atque enim quis doloribus provident voluptas dolorem nemo neque.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            explicabo voluptates inventore tempore, excepturi voluptatum
            voluptatibus molestias debitis unde a eligendi exercitationem illum
            totam placeat quae possimus modi tempora ab.
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="BenefitsPageGraphic"
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before z-[1] before:content-abstractwaves"></div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{""}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                eius ex doloribus consequuntur, repellat nisi excepturi officia,
                harum magni doloremque quae in similique adipisci perspiciatis
                porro obcaecati optio velit magnam sapiente rerum? Iusto
                cupiditate illo quidem! Ad minima officiis voluptate!
              </p>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, repellat. Commodi nulla accusamus consequatur eum!
                Maxime, aut. Suscipit impedit non, mollitia tenetur blanditiis
                maiores voluptas autem, eaque quis dolorem accusantium.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div
                className="before:absolute before:-bottom-20 before:right-40 before-z-[-1]"
                before:content-sparkles
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
