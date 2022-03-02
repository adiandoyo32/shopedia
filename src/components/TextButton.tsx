interface TextButtonProps {
    color?: string
    onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = (props) => {
    const color = props.color ?? 'green'
    return (
        <button type="button" onClick={props.onClick} className="w-full font-medium rounded">
            {props.children}
        </button>
    )
}

export default TextButton