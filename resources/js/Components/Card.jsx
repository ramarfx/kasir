"use client";

import { Card } from "flowbite-react";

const custom = {
    root: {
        base: "flex rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",
        children: "flex h-full flex-col justify-center gap-0 p-5",
        horizontal: {
            off: "flex-col",
            on: "flex-col md:max-w-xl md:flex-row",
        },
        href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
        base: "w-full h-[200px] object-cover",
        horizontal: {
            off: "rounded-sm",
            on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        },
    },
};

export default function Component({ image }) {
    return (
        <Card
            className="max-w-[250px]"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={image}
            theme={custom}
        >
            <h5 className="text-xl font-semibold text-primary">
                Ikan goreng
            </h5>

            <div className="flex flex-col justify-between">
                <div className="text-md mb-5 font-bold text-primary/80">
                    Rp. 599.000
                </div>
                <button
                    href="#"
                    className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90"
                >
                    Add
                </button>
            </div>
        </Card>
    );
}
