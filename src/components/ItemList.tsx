interface ItemListProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode
}

const ItemList = <T, >(props: ItemListProps<T>) => {
    return <>{props.data.map(props.renderItem)}</>
}

export default ItemList
