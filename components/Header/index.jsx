"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/svg/headerlogo.svg";
import modallogo from "../../public/images/svg/footerlogo.svg";
import { Libre_Baskerville } from "next/font/google";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { MailIcon } from "../Header/MailIcon";
import { LockIcon } from "../Header/LockIcon";

import emailjs from "@emailjs/browser";
import ModalBackdropBlur from "./ModalBackdropBlur";

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const variants = {
  open: { opacity: 1, x: 0 },
  // closed: { opacity: 0, x: "100%" },
  closed: { opacity: 1, x: 0 },
};

const Header = (args) => {
  const form = useRef();

  const sendEmail = (e, onClose) => {
    e.preventDefault();
    const userName = form.current.elements.userName.value;
    const contactNumber = form.current.elements.contactNumber.value;
    const userEmail = form.current.elements.userEmail.value;
    const message = form.current.elements.message.value;

    // Check if any field is empty
    if (!userName || !contactNumber || !userEmail || !message) {
      // If any field is empty, display an error message or perform necessary action
      // For example, you can show a toast message
      toast.error("Please fill in all fields.");
      return; // Stop further execution
    }

    emailjs
      .sendForm("service_r318w79", "template_zrudkvm", form.current, {
        publicKey: "6nGxNurHMueol0bl-",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Mail sent successfully");
          onClose();
        },
        (error) => {
          toast.error("Mail sent error");
          onClose();
        }
      );
  };

  const [isOpenn, setIsOpenn] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // const toggle = () => setModal(!modal);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   });
  // }, []);

  // const navLinks = document.querySelector('.navlinks')
  // console.log(navLinks);

  const menuIcon = () => {
    setCloseIcon((prevCloseIcon) => !prevCloseIcon);
    setIsOpenn((prevCloseIcon) => !prevCloseIcon);
    // navLinks.classList.toggle('top-[75px]')

    const navLinks = document.querySelector(".navlinks"); // Replace with your actual ID
    if (navLinks) {
      navLinks.classList.toggle("top-[75px]");
    }
  };
  return (
    <>
      <nav
        className={`flex justify-between sm:pt-2 pt-6 items-center sticky z-20  top-0 sm:px-32 px-4 bg-white for-mobile-for-modal ${libreBaskerville.className}`}
        
      >
        <div className="flex items-center lg:gap-2 xl:gap-3 2xl:gap-4">
          <div>
            <Image
              src={logo}
              alt="logo"
              className=" w-[165px] h-[54px] main-logo-below365 "
            />
          </div>
          <div>
            <ul className=" navlinks navsetup duration-500 flex flex-col absolute  top-[-800%] left-0 bg-white w-full widthsetup  gap-6 items-start py-10  text-[12px] xl:text-sm px-4 xl:gap-6 2xl:gap-7">
              <Link className="header-color" href="#Countries">
                Countries
              </Link>
              <Link className="header-color" href="#Courses">
                Courses
              </Link>
              <Link className="header-color" href="#IELTS">
                IELTS
              </Link>
              <Link className="header-color" href="#AboutUs">
                About Us
              </Link>
              <Link className="header-color" href="#News">
                News
              </Link>
              <Link className="header-color" href="#Accommodation">
                Accommodation
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            type="button"
            onPress={onOpen}
            className="sm:text-lg text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1 font-bold bg-white"
          >
            Talk To Us
            {console.log("Talk To Us - clicked")}
          </Button>

          <motion.div
            animate={isOpenn ? "open" : "closed"}
            variants={variants}
            className="menubar flex items-center"
            onClick={menuIcon}
          >
            {closeIcon ? (
              <IoClose className=" text-3xl cursor-pointer" />
            ) : (
              <MdOutlineMenu className=" text-3xl cursor-pointer" />
            )}
          </motion.div>
        </div>

        <Toaster position="top-right" richColors />

        <Modal
          isOpen={isOpen}
          // size={size}
          // onOpenChange={onOpenChange}
          onClose={onClose}
          placement="top-center"
          className="modal-above-pages"
        >
          <ModalContent
          className="haiiiiiiiiii">
            {(onClose) => (
              <>
                <form
                  ref={form}
                  onSubmit={(e) => {
                    sendEmail(e, onClose);
                  }}
                >
                  <ModalBody>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "30px",
                      }}
                    >
                      <label style={{ marginBottom: "5px", marginTop: "20px" }}>
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="userName"
                        autoFocus
                        placeholder="Enter your full name"
                        // required
                        style={{
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label style={{ marginBottom: "5px" }}>
                        Contact Number
                      </label>
                      <Input
                        type="number"
                        name="contactNumber"
                        // autoFocus
                        // endContent={
                        //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        // }
                        // label="Full Name"
                        placeholder="Enter your contact"
                        // variant="bordered"
                        // labelPosition="top"
                        // required
                        style={{
                          // border: "1px solid black",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label style={{ marginBottom: "5px" }}>Email</label>
                      <Input
                        type="email"
                        name="userEmail"
                        // autoFocus
                        // endContent={
                        //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        // }
                        // label="Full Name"
                        placeholder="Enter your email"
                        // variant="bordered"
                        // labelPosition="top"
                        // required
                        style={{
                          // border: "1px solid black",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label style={{ marginBottom: "5px" }}>Description</label>
                      <Input
                        type="text"
                        name="message"
                        // autoFocus
                        // endContent={
                        //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        // }
                        // label="Full Name"
                        placeholder="What do you wish to tell us "
                        // variant="bordered"
                        // labelPosition="top"
                        // required
                        style={{
                          // border: "1px solid black",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="bg-[#77b591] text-[white]"
                      variant="flat"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      // color="primary"
                      type="submit"
                      value="Send"
                      onClick={() => toast("Loading....")}
                      className="bg-[#0B4715] text-white"
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </nav>
    </>
  );
};

export default Header;

{
  /* <button className="sm:text-lg  text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1    ">
          Talk To Us
         </button> */
}
{
  /* <a
          href="https://valleyjourney.com/notify.html"
          target="_blank"
          rel="noopener noreferrer"
        > */
}
