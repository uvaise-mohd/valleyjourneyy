"use client";
import React, { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { toast } from "sonner";

function NextModal() {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const form = useRef();

  return (
    <>
        <Button
            type="button"
            onPress={onOpen}
            className="sm:text-lg text-base talktous-below365 text-[#2A36AC] border-2 border-solid divide-black rounded-xl px-1 sm:px-2 py-1 font-bold bg-white"
          >
            Talk To Us
            {console.log("Talk To Us - clicked")}
          </Button>

          <Modal
          isOpen={isOpen}
          // size={size}
          // onOpenChange={onOpenChange}
          onClose={onClose}
          placement="top-center"
          className="modal-above-pages"
        >
          {console.log("modal opened")}
          <ModalContent>
            {(onClose) => (
              <>
                <form
                  ref={form}
                //   onSubmit={(e) => {
                //     sendEmail(e, onClose);
                //   }}
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
    </>
  );
}

export default NextModal;
