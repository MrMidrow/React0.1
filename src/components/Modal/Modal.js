import Box from '@mui/material/Box';

import Button from '../Button/Button';
import Modal from '@mui/material/Modal';

import './modalStyle.css'

export default function BasicModal({ icon, innerModal, className, classNameBtn, classNameBox, onClick, text, secondText, handleClose, handleOpen, open}) {
  return (
    <div className={className}>
      <Button className={classNameBtn} onClick={handleOpen}>{ icon }</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`modal-box ${classNameBox}`}>
          {innerModal}
        </Box>
      </Modal>
    </div>
  );
}