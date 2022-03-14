import { useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";
import ButtonIcon from "./ButtonIcon";

interface ModalDialogProps {
  visible: boolean;
  toggle: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = (props) => {
  if (!props.visible) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={props.toggle}>
        <div
          aria-modal
          role="dialog"
          className="min-w-fit max-w-2xl"
        >
          <div
            role="document"
            className="flex flex-col w-full bg-white rounded-lg m-auto p-6 overflow-y-auto"
          >
            <div className="flex justify-end">
              <ButtonIcon onClick={props.toggle}>
                <IoClose size={24} />
              </ButtonIcon>
            </div>
            {props.children}
          </div>
        </div>
      </Backdrop>
    </>,
    document.body
  );
};

export default ModalDialog;

export const useModalDialog = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

  return { visible, toggle };
};
