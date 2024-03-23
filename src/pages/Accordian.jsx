import React, { useState } from "react";

const Accordian = () => {
  const [faq, setFaq] = useState([
    {
      question: "company registration service",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-[#5D3FD3] transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "how do i get started with Allinnov",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-[#5D3FD3] transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "IP creation and commercialization & research support",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-[#5D3FD3] transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
    {
      question: "Produt design & development",
      answer:
        'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-[#5D3FD3] transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <div className="flex justify-center w-full bg-gray-50">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 ">
        <div className=" mx-auto  sm:px-6 lg:px-4   items-center ">
          <div className="w-full  text-start">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl  mt-4 text-base leading-relaxed text-gray-600"></p>
          </div>

          <div className="px-3  bg-black mt-8 space-y-4 md:mt-16 rounded-lg w-[20rem] mx-auto md:w-[40rem]  lg:w-[70rem]">
            {faq.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-200  border-b-2 border-gray-600 cursor-pointer ">
                <button
                  type="button"
                  className="flex  items-start justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFaq(index)}>
                  <span className="flex text-lg font-semibold capitalize text-white">
                    {" "}
                    {item.question}{" "}
                  </span>
                  <div className=" bg-[#5D3FD3] rounded-full ">
                    <svg
                      className={`w-4 h-4  text-white    ${
                        item.open ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        className="w-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`${
                    item.open ? "block" : "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6 text-white `}>
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            Contact our support
          </a>
        </p>
      </section>
    </div>
  );
};

export default Accordian;
