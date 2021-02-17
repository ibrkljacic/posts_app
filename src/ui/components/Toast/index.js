import 'react-toastify/dist/ReactToastify.css';
import '~/styles/react-toastify-overrides.css';

import React from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';

import Toast from './Toast';

function ToastMessageContainer() {
  return (
    <ToastContainer
      autoClose={2500}
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

function showToast(text) {
  toast(<Toast text={text} />);
}

Toast.show = showToast;
Toast.Container = ToastMessageContainer;

export default Toast;
