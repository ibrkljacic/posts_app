import 'react-toastify/dist/ReactToastify.css';
import '~/styles/react-toastify-overrides.css';

import React from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';

import Toast from './Toast';

export function ToastMessageContainer() {
  return (
    <ToastContainer
      autoClose={3000}
      className="toast-container"
      closeButton={false}
      closeOnClick
      draggable={false}
      hideProgressBar={true}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      position="bottom-right"
      toastClassName="toast-message"
      transition={Slide}
    />
  );
}

export function showToast(text) {
  toast(<Toast text={text} />);
}
