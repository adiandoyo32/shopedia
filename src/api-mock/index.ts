import { axiosIns } from "../libs/axios";
import MockAdapter from "axios-mock-adapter";

const apiRoutes = [
    {
        status: 200,
        data: [
            {
                id: 1,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 1",
                price: 100000,
            },
            {
                id: 2,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 2",
                price: 100000,
            },
            {
                id: 3,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 3",
                price: 100000,
            },
            {
                id: 4,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 4",
                price: 100000,
            },
            {
                id: 5,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 5",
                price: 100000,
            },
            {
              id: 6,
              image: "/images/200.png",
              desc: "Lorem ipsum dolor sit amet",
              title: "Product 5",
              price: 100000,
            },
            {
              id: 7,
              image: "/images/200.png",
              desc: "Lorem ipsum dolor sit amet",
              title: "Product ZZZ",
              price: 100000,
            }
        ],
    },

    {
        status: 200,
        data: [
            {
                id: 1,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 1",
                price: 100000,
                qty: 2,
            },
            {
                id: 2,
                image: "/images/200.png",
                desc: "Lorem ipsum dolor sit amet",
                title: "Product 2",
                price: 100000,
                qty: 98,
            },
        ],
    },

    {
        status: 200,
        data: [
            {
                id: 1,
                name: "Instant",
                price: 30000,
                description: "1 - 2 Days",
            },
            {
                id: 2,
                name: "Cargo",
                price: 60000,
                description: "3 - 5 Days",
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

mock.onGet("/api/shipping-methods").reply(() => {
    return [200, apiRoutes[2]];
});

export default apiRoutes;
