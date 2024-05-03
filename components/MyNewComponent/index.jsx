"use client";
import React, { useState } from 'react'
import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal';
import { Button } from 'react-bootstrap';

function MyNewComponent() {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
      Launch vertically centered modal
    </Button>

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  )
}

export default MyNewComponent