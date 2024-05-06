"use client";
import React, { useState } from "react";
import { Libre_Baskerville, Lora } from "next/font/google";
import Image from "next/image";
import studystoriess from "../../public/images/svg/studentstories/studystoriess.svg";
import dots from "../../public/images/svg/studentstories/3dots.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactReadMoreReadLess from "react-read-more-read-less";

const libreBaskerville = Libre_Baskerville({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const lora = Lora({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const StudentStories = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const listItemMotion = (duration) => ({
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 100 },
    transition: { duration: duration },
  });

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className=" pt-10 bg-[#F6FAFA]" id="Accommodation">
      <motion.div
        // {...listItemMotion(0.8)}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div
          className={` inline-block lg:text-[22px] xl:text-[28px] text-[16px]  bg-[#184420] text-white py-3 text-center items-center rounded-[30px] uppercase mb-6 sm:px-20 px-4 ${libreBaskerville.className}`}
        >
          Student Stories
        </div>
      </motion.div>

      <div className="flex lg:flex-row flex-col items-center relative  ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.4 }}
          className="mb-8 absolute left-[179px] bottom-[6px] student-stories-hand-image"
        >
          <Image
            src={studystoriess}
            alt="studystories"
            height={80}
            width={80}
          />
        </motion.div>

        <div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className={`sm:text-[19px] lg:text-[24px] xl:text-[30px] text-lg font-bold text-[#184420] text-center  sm:px-64 px-4 ${libreBaskerville.className}`}
          >
            Some Good Words from Our Students
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.1 }}
            className={`lg:text-lg xl:text-[20px] text-base text-center text-[#184420] pb-5 sm:px-60 px-4${libreBaskerville.className}`}
          >
            We asked our students whether our support and training sessions were
            as smooth as we had promised.
          </motion.div>
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4  sm:px-20 md:px-[150px]   px-4 mb-8`}
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <div>
              <ReactReadMoreReadLess
                charLimit={200}
                // readMoreText={"Read more ▼"}
                readMoreText={
                  <span style={{ color: "BLACK", fontWeight: "600" }}>
                    Read more ▼
                  </span>
                }
                // readLessText={"Read less ▲"}
                readLessText={
                  <span style={{ color: "BLACK", fontWeight: "600" }}>
                    Read less ▲
                  </span>
                }
                // readMoreClassName="read-more-less--more"
                // readLessClassName="read-more-less--less"
                onReadMoreClicked={toggleExpand}
                onReadLessClicked={toggleExpand}
              >
                A big thanks to Valley Journey!! Valley Journey was a huge help
                with my MSc Robotics and Artificial Intelligence application in
                the UK. From the application process to securing the visa and
                every detail in between, they played a crucial role in helping
                me fulfill my dream of studying abroad.I would like to express
                my sincere gratitude to Sonu Mathew Sir who took care of all the
                process of finding me a top rated and suitable university in the
                UK for my masters as well as the whole application process and
                also arranged classes for my credibility interview. He was very
                helpful and knowledgeable about the steps and was through in his
                work. I would also like to thank Nithya Ma&apos;am who took care of
                the visa process. They have consistently responded to all of my
                inquiries. It was certainly a blessing for me to choose them as
                my supporters during my entire journey. Thank you for
                everything.
              </ReactReadMoreReadLess>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            Ayisha Sherin Pilakkal Muhammed
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              Valley journey Overseas Education is the best Consultancy for
              those who have desire to pursue their higher education from
              International Universities. I have known them for last 4 years and
              they have dealt with my application and I successfully completed
              my Masters from UK and currently working in Uk. My Entire
              application process was done by Sonu Mathew and Nithya with 100%
              perfection . And Sonu Sir guided me how to attend Uni interviews
              and he conducted lot of mock interviews before the main , it
              boosted my confidence and later getting offer letter they arranged
              Accomadation too … So from my bottom of heart I recommend these
              firm for everyone who is looking for abroad studies.
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            vishnu kv
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              I would like to thank Valley Journey for helping me with my IELTS
              preparation. Especially Sonu Mathew Sir. His unique way of
              training and personalised study plan really made the difference.
              Just a month of preparation, I smashed my IELTS target score. When
              i attend the class for the first time, i was scared of speaking in
              english. After a month of preparation i felt a profound
              improvement and gave me so much confidence while i&apos;m speaking. I
              strongly recommend Valley journey to all those who wish to go for
              abroad studies.
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            PRIYANKA VK
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              My honest review about Valley Journey Consultancy, I was an
              ex-Ukrainian med student whose study came to an halt due to the
              infamous Ukraine-Russian war. I was at that point were I simply
              did&apos;nt see a chance to finish my studies and with coincidence I
              came across Valley Journey Consultancy and decided to give a go
              with them. My consultant Mr. Sonu Mathew was extremely positive
              about my case with getting an admission to University in UK.
              Nothing to loose I decided to submit an application based on the
              guidance and tips from Mr Sonu. Especially in my case, where I had
              a big gap years due to my incompletion of course in Ukraine. He
              helped me to file the application with attention to details so
              that my application would not get rejected. He was confident that
              I had a 99% chance that I would get In. With luck or I had the
              right person to do the job I got offers from couple of
              Universities and received a great scholarship as well from almost
              all of the Universities. He also helped me to choose the best
              option out of all the offers I received which helped me to narrow
              down my choices. Personally I wanted to express my gratitude to Mr
              Sonu for guiding me to my destiny. So if this review could help
              any other soul to accomplish what they want in their life. I would
              100% will recommend you to take a chance on Valley Journey
              Consultancy.
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            Shaf
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              The most trustable people ,I could say and that&apos;s from the
              experiences I have got from them.Even during my university
              interviews the support I got from Sonu is unexplainable.I was so
              scared at the beginning,but through the support ,I have gained my
              confidence and could done my interviews well.I am so thankful and
              grateful to each one of them .All the best for valley journey
              overseas education .
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            G j
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              It was a good experience to me. I was able to go abroad through
              Valley Journey. They helped me a lot for my abroad study process.
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            JASMIN JOHNSON
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              Currently, I am in UK, believe they have a great service and value
              , Guide every thing properly and we can trust them truly.
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            ABIN P CHERIAN
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border-2 border-[#E8F6BA] rounded-[45px] px-8 pt-4 text-center"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`lg:text-[12px] xl:text-[16px] text-xs bg-[#FBF4BB] pb-4 ${lora.className}`}
          >
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read more ▼
                </span>
              }
              readLessText={
                <span style={{ color: "BLACK", fontWeight: "600" }}>
                  Read less ▲
                </span>
              }
              onReadMoreClicked={toggleExpand}
              onReadLessClicked={toggleExpand}
            >
              I had a pleasant experience with their service and delighted with
              the outcome
            </ReactReadMoreReadLess>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${libreBaskerville.className}`}
          >
            Moossa Hussain
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="flex justify-center">
        <Image alt="dots" src={dots} className="w-[150px] " />
      </div> */}
      <div className="mb-7">
        <div className=" bg-[#E3F5FF] py-5"></div>
      </div>
    </div>
  );
};

export default StudentStories;
