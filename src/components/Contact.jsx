import { motion } from "motion/react";

import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import TextReveal from "./TextReveal";
import RollOver from "./RollOver";
import { RiClipboardLine, RiPhoneLine } from "react-icons/ri";
import { socials } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-700 py-14 md:py-24 space-y-6"
    >
      <div className="space-y-6">
        <FadeUp>
          <SectionHeading title="Contact me" />
        </FadeUp>

        <TextReveal
          text={`Looking to start a new project?`}
          className="text-xl md:text-[24px] lg:text-[32px] font-medium"
        />
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-neutral-300">
            Projects Enquiry
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Input fields */}
          <div className="w-full flex-1 space-y-4">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full border-2 border-neutral-500 rounded-full py-3 px-4 bg-neutral-800 text-neutral-0 placeholder-neutral-500 outline-none"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full border-2 border-neutral-500 rounded-full py-3 px-4 bg-neutral-800 text-neutral-0 placeholder-neutral-500 outline-none"
              />

              <textarea
                name="details"
                id="details"
                placeholder="Project details"
                className="w-full border-2 border-neutral-500 h-45 rounded-xl py-3 px-4 bg-neutral-800 text-neutral-0 placeholder-neutral-500 outline-none resize-none"
              />

              <input
                type="text"
                name="timeline"
                id="timeline"
                placeholder="Project timeline"
                className="w-full border-2 border-neutral-500 rounded-full py-3 px-4 bg-neutral-800 text-neutral-0 placeholder-neutral-500 outline-none"
              />

              <button className="bg-neutral-0 text-neutral-1000 w-full rounded-full py-3 cursor-pointer hover:bg-neutral-100 transition-colors duration-300 font-medium">
                Send Inquiry
              </button>
            </div>
          </div>

          <div className="w-full flex-1 space-y-8">
            <div className="bg-neutral-800 border-neutral-1000 p-6 md:p-8 rounded-2xl space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-neutral-300">
                  Let's Connect
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  initial="initial"
                  whileHover="hover"
                  className="rounded-full h-11 flex gap-2 items-center justify-center cursor-pointer bg-neutral-0 px-6 py-2 text-sm font-medium text-neutral-1000"
                >
                  <span>Book a Call</span>
                  <RollOver className="w-4 h-4 flex items-center justify-center">
                    <RiPhoneLine className="text-base" />
                  </RollOver>
                </motion.button>

                <motion.button
                  initial="initial"
                  whileHover="hover"
                  className="rounded-full h-11 flex gap-2 items-center justify-center cursor-pointer border-2 border-neutral-500 px-6 py-2 text-sm font-medium text-neutral-0"
                >
                  <span>Copy Email</span>
                  <RollOver className="w-4 h-4 flex items-center justify-center">
                    <RiClipboardLine className="text-base" />
                  </RollOver>
                </motion.button>
              </div>
            </div>

            <div className="bg-neutral-800 border-neutral-1000 p-6 md:p-8 rounded-2xl space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-medium text-neutral-300">
                  Follow Me
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <div key={index}>
                      <motion.button
                        initial="initial"
                        whileHover="hover"
                        className="rounded-full h-12 w-12 flex items-center justify-center cursor-pointer bg-neutral-700 border-2 border-neutral-500 text-neutral-300 p-0"
                      >
                        <RollOver className="w-6 h-6 flex items-center justify-center">
                          <SocialIcon className="text-2xl text-current" />
                        </RollOver>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
