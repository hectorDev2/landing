import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export const Success = ({ modal, toggle }: any) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>envio de mensaje</ModalHeader>
      <ModalBody>Mensaje enviado!</ModalBody>
      <ModalFooter>
        <Button className='btn btn-danger' onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  )
}
