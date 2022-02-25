interface ListProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode
}

const List = <T, >(props: ListProps<T>) => {
    return <>{props.data.map(props.renderItem)}</>
}

export default List
