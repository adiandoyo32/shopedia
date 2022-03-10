interface BackdropProps {
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed flex items-center top-0 left-0 z-40 w-full h-full bg-black/30"
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
