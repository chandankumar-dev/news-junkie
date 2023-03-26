import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { category: "general" },
  { category: "business" },
  { category: "entertainment" },
  { category: "health" },
  { category: "science" },
  { category: "sports" },
  { category: "technology" },
];

export default function Navbar(props) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-blue-900 text-white">
          {({ open }) => (
            <>
              <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 md:h-20 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                      <div className="text-2xl md:text-3xl text-white mr-2 font-[heading]">
                        News Junkie
                      </div>
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden lg:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <button
                            key={item.category}
                            onClick={() =>
                              props.setSelectedCategory(item.category)
                            }
                            className="text-gray-300 hover:bg-white hover:text-black rounded-md px-3 py-2 text-lg font-normal capitalize"
                          >
                            {item.category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Mobile hamburger menu button */}
                  <div className="-mr-2 flex lg:hidden">
                    <Disclosure.Button className="mr-3 inline-flex items-center justify-center rounded-md text-white hover:text-white focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.category}
                      onClick={() => props.setSelectedCategory(item.category)}
                      as="a"
                      className="text-gray-300 hover:bg-white hover:text-black block rounded-md px-3 py-2 text-base font-medium capitalize"
                    >
                      {item.category}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
