"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/images/svg/headerlogo.svg";
import modallogo from "../../public/images/svg/footerlogo.svg"
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
import { motion, useScroll, useTransform } from "framer-motion";

import { MailIcon } from "../Header/MailIcon";
import { LockIcon } from "../Header/LockIcon";

import emailjs from "@emailjs/browser";
import ModalBackdropBlur from "./ModalBackdropBlur";

const libreBaskerville = Libre_Baskerville({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

const Header = (args) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r318w79", "template_zrudkvm", form.current, {
        publicKey: "6nGxNurHMueol0bl-",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Mail sent successfully");
        },
        (error) => {
          toast.error("Mail sent error");
        }
      );
  };

  const [isSticky, setIsSticky] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggle = () => setModal(!modal);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  // const navLinks = document.querySelector('.navlinks')
  // console.log(navLinks);

  const menuIcon = () => {
    setCloseIcon((prevCloseIcon) => !prevCloseIcon);
    // navLinks.classList.toggle('top-[75px]')

    const navLinks = document.querySelector(".navlinks"); // Replace with your actual ID
    if (navLinks) {
      navLinks.classList.toggle("top-[75px]");
    }
  };

  return (
    <>
      <nav
        className={`flex justify-between sm:pt-2 pt-6  items-center sticky top-0 z-20 sm:px-32 px-4 bg-white ${libreBaskerville.className}`}
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
            <ul className=" navlinks navsetup duration-500 flex  flex-col absolute  top-[-800%] left-0 bg-white w-full widthsetup  gap-6 items-start py-10  text-[12px] xl:text-sm px-4 xl:gap-6 2xl:gap-7 ">
              <Link href={"#"}>Countries</Link>
              <Link href={"#"}>Courses</Link>
              <Link href={"#"}>IELTS</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>News</Link>
              <Link href={"#"}>Accommodation</Link>
            </ul>
          </div>
        </div>

        <div className="flex gap-2 items-center   ">
          {/* <button className="sm:text-lg  text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1    ">
          Talk To Us
         </button> */}
          {/* <a
          href="https://valleyjourney.com/notify.html"
          target="_blank"
          rel="noopener noreferrer"
        > */}

          <Button
            type="button"
            // onPress={onOpen}
            // onPress={() => handleOpen()}
            className="sm:text-lg text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1"
          >
            Talk To Us
          </Button>

          <div className="menubar flex items-center" onClick={menuIcon}>
            {closeIcon ? (
              <IoClose className=" text-3xl cursor-pointer" />
            ) : (
              <MdOutlineMenu className=" text-3xl cursor-pointer" />
            )}
          </div>
        </div>
        <Toaster position="top-right" richColors />
        <ModalBackdropBlur isOpen={isOpen} />

        <motion.div
          initial={{ opacity: 0, y: -100 }} // Initial animation state (hidden above)
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          exit={{ opacity: 0, y: -100 }} // Animate when modal is closed
          transition={{ duration: 0.2 }} // Animation duration
          className="modal-wrapper" // Add your modal wrapper class
        >
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            // placement="top-center"
            placement="top"
            className="modal-above-page"
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  {/* <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader> */}
                  <form ref={form} onSubmit={sendEmail}>
                    <ModalBody>
                      {/* <div>
                        <Image
                          src={modallogo}
                          alt="logo"
                          className=" w-[165px] h-[54px] main-logo-below365 modal-logo "
                        />
                      </div> */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "30px"
                        }}
                      >
                        <label
                          style={{ marginBottom: "5px", marginTop: "20px" }}
                        >
                          Full Name
                        </label>
                        <Input
                          type="text"
                          name="userName"
                          autoFocus
                          // endContent={
                          //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          // }
                          // label="Full Name"
                          placeholder="Enter your full name"
                          // variant="bordered"
                          // labelPosition="top"
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
                        <label style={{ marginBottom: "5px" }}>
                          Description
                        </label>
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
                          style={{
                            // border: "1px solid black",
                            borderRadius: "4px",
                            padding: "8px",
                          }}
                        />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        value="Send"
                        onClick={() => toast("Loading....")}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </form>
                </>
              )}
            </ModalContent>
          </Modal>
        </motion.div>
      </nav>
    </>
  );
};

export default Header;
