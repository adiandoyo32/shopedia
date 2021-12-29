import { FC } from "react"
import { Skeleton } from "antd-mobile"

export const ProductListSkeleton: FC = () => {
    return (
        <div className="">
            <Skeleton.Title animated />
            <Skeleton.Paragraph lineCount={5} animated />
        </div>
    )
}