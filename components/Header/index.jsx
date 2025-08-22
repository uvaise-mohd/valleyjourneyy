"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../public/images/svg/headerlogo.svg";
import { Libre_Baskerville } from "next/font/google";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Font configuration
const libreBaskerville = Libre_Baskerville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// Animation variants
const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: 0 },
};

// Navigation links data
const NAV_LINKS = [
  { href: "#Countries", label: "Countries" },
  { href: "#Courses", label: "Courses" },
  { href: "#IELTS", label: "IELTS" },
  { href: "/about-us", label: "About Us" },
  { href: "#News", label: "News" },
  { href: "#Accommodation", label: "Accommodation" },
];

const Header = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();

  // Email handling
  const sendEmail = (e, onClose) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const { userName, contactNumber, userEmail, message } = Object.fromEntries(formData);

    // Validation
    if (!userName || !contactNumber || !userEmail || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Send email
    emailjs
      .sendForm("service_i7zauzi", "template_l96d0tg", form.current, {
        publicKey: "KMSW1yNMG1n07GWTL",
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

  // Menu toggle handler
  const toggleMenu = () => {
    setCloseIcon(prev => !prev);
    setIsMenuOpen(prev => !prev);

    const navLinks = document.querySelector(".navlinks");
    if (navLinks) {
      navLinks.classList.toggle("top-[75px]");
    }
  };

  return (
    <>
      <nav
        className={`flex justify-between sm:pt-2 pt-6 items-center sticky z-20 top-0 sm:px-32 px-4 bg-white for-mobile-for-modal ${libreBaskerville.className}`}
      >
        <div className="flex items-center lg:gap-2 xl:gap-3 2xl:gap-4">
          {/* Logo */}
          <div>
            <Image
              src={logo}
              alt="Edumate logo"
              className="w-[165px] h-[54px] main-logo-below365"
              priority
            />
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="navlinks navsetup duration-500 flex flex-col absolute top-[-800%] left-0 bg-white w-full widthsetup gap-6 items-start py-10 text-[12px] xl:text-sm px-4 xl:gap-6 2xl:gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="header-color hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 items-center">
          <Button
            type="button"
            onPress={onOpen}
            className="sm:text-lg text-base talktous-below365 text-[#2A36AC] border-2 border-solid border-[#2A36AC] rounded-xl px-1 sm:px-2 py-1 font-bold bg-white hover:bg-[#2A36AC] hover:text-white transition-colors"
          >
            Talk To Us
          </Button>

          {/* Mobile Menu Toggle */}
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="menubar flex items-center cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {closeIcon ? (
              <IoClose className="text-3xl" />
            ) : (
              <MdOutlineMenu className="text-3xl" />
            )}
          </motion.div>
        </div>

        {/* Toast Notifications */}
        <Toaster position="top-right" richColors />

        {/* Contact Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          placement="top-center"
          className="modal-above-pages"
          size="lg"
        >
          <ModalContent>
            {(onClose) => (
              <form ref={form} onSubmit={(e) => sendEmail(e, onClose)}>
                <ModalBody className="py-6">
                  <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Full Name</label>
                      <Input
                        type="text"
                        name="userName"
                        placeholder="Enter your full name"
                        variant="bordered"
                        isRequired
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Contact Number</label>
                      <Input
                        type="tel"
                        name="contactNumber"
                        placeholder="Enter your contact number"
                        variant="bordered"
                        isRequired
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Email</label>
                      <Input
                        type="email"
                        name="userEmail"
                        placeholder="Enter your email"
                        variant="bordered"
                        isRequired
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Description</label>
                      <Input
                        type="text"
                        name="message"
                        placeholder="What do you wish to tell us"
                        variant="bordered"
                        isRequired
                      />
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter className="flex justify-between">
                  <Button
                    color="default"
                    variant="flat"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    className="bg-[#0B4715] text-white"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </Modal>
      </nav>
    </>
  );
};

export default Header;