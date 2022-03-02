import { useState } from "react"
import ReactDOM from "react-dom"
import { IoClose } from "react-icons/io5"
import Backdrop from "./Backdrop"
import ButtonIcon from "./ButtonIcon"

interface ModalDialogProps {
  visible: boolean
  toggle: () => void
}

const ModalDialog: React.FC<ModalDialogProps> = (props) => {
  // useEffect(() => {
  //   document.addEventListener("keydown", onKeyDown);
  // })

  // const onKeyDown = (e: KeyboardEvent) => {
  //   props.toggle()
  // };

  if (!props.visible) return null

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={props.toggle} />
      <div aria-modal role="dialog" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div role="document" className="flex flex-col w-full bg-white rounded-lg m-auto p-6 overflow-y-auto">
          <div className="flex justify-end">
            <ButtonIcon onClick={props.toggle}>
              <IoClose size={24} />
            </ButtonIcon>
          </div>
          {props.children}
        </div>
      </div>
    </>
    , document.body
  )
}

export default ModalDialog

export const useModalDialog = () => {
  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible(!visible)

  return { visible, toggle }
}