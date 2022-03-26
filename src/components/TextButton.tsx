interface TextButtonProps {
    className?: string
    onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = (props) => {
    return (
        <button type="button" onClick={props.onClick} className={`w-full text-sm focus:ring-green-600/20 outline-none focus:outline-none font-medium rounded ${props.className}`}>
            {props.children}
        </button>
    )
}

export default TextButton