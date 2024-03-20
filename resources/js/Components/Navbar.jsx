import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

const custom = {
    root: {
        base: "bg-white px-2 py-2.5 sm:px-4 border-b",
        rounded: {
            on: "rounded",
            off: "",
        },
        bordered: {
            on: "border",
            off: "",
        },
        inner: {
            base: "mx-auto flex flex-wrap items-center justify-between",
            fluid: {
                on: "",
                off: "container",
            },
        },
    },
    brand: {
        base: "flex items-center",
    },
    collapse: {
        base: "w-full md:block md:w-auto",
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        hidden: {
            on: "hidden",
            off: "",
        },
    },
    link: {
        base: "block text-base py-2 pr-4 pl-3 md:p-0",
        active: {
            on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-primary",
            off: "border-b border-gray-100 text-primary/50 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
        disabled: {
            on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
            off: "",
        },
    },
    toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
        icon: "h-6 w-6 shrink-0",
    },
};

export default function Component() {
    return (
        <Navbar fluid theme={custom}>
            <NavbarBrand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    KASIR
                </span>
            </NavbarBrand>

            <div className="flex md:order-2 items-center">
                <ul className="md:mr-10 hidden md:flex mt-4 flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-bold">
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </ul>

                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>

                <NavbarToggle />
            </div>
            <NavbarCollapse className="md:mr-5 md:hidden">
                    <NavbarLink href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
        </Navbar>
    );
}
