import { useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";
import ButtonIcon from "./ButtonIcon";

interface BottomSheetProps {
  visible: boolean;
  toggle: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = (props) => {
  if (!props.visible) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={props.toggle} />
      <div className="relative z-50">
        <div
          aria-modal
          role="dialog"
          className="fixed left-0 bottom-0 right-0 max-w-lg mx-auto"
        >
          <div
            role="document"
            className="flex flex-col max-h-[calc(100vh-4rem)] w-full bg-white rounded-t-lg overflow-auto"
          >
            <div className="flex justify-end p-4">
              <ButtonIcon onClick={props.toggle}>
                <IoClose size={24} />
              </ButtonIcon>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default BottomSheet;

export const useBottomSheet = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

  return { visible, toggle };
};
