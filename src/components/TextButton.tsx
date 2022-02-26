interface TextButtonProps {
    color?: string
    onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = (props) => {
    const color = props.color ?? 'green'
    return (
        <button type="button" onClick={props.onClick} className="border border-gray-400 rounded">
            {props.children}
        </button>
    )
}

export default TextButton