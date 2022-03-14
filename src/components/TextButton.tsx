interface TextButtonProps {
    className?: string
    onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = (props) => {
    return (
        <button type="button" onClick={props.onClick} className={`w-full text-sm font-medium rounded ${props.className}`}>
            {props.children}
        </button>
    )
}

export default TextButton