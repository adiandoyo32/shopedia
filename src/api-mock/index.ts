import { axiosIns } from "../libs/axios";
import MockAdapter from "axios-mock-adapter";

const apiRoutes = [
    {
        status: 200,
        data: [
            {
                id: "product-1",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 1",
                price: "100.000",
            },
            {
                id: "product-2",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 2",
                price: "100.000",
            },
            {
                id: "product-3",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 3",
                price: "100.000",
            },
            {
                id: "product-4",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 4",
                price: "100.000",
            },
            {
                id: "product-5",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 5",
                price: "100.000",
            },
        ],
    },

    {
        status: 200,
        data: [
            {
                id: "product-1",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 1",
                price: "Rp.100.000",
            },
            {
                id: "product-1",
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 1",
                price: "Rp.100.000",
            },
        ],
    },
];

const mock = new MockAdapter(axiosIns);

mock.onGet("/api/products").reply(() => {
    return [200, apiRoutes[0]];
});

mock.onGet("/api/cart").reply(() => {
    return [200, apiRoutes[1]];
});

export default apiRoutes;
