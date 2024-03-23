import React from "react";
import CustomMotion from "../components/CustomMotion";

const registrations = [
  {
    id: 1,
    title: "Sole proprietorship",
    description:
      "is a business owned and run by one person. The owner is personally liable for all debts and obligations of the business. Sole proprietorships are the simplest and easiest type of business to set up and operate. However, they also offer the least protection for the owner's personal assets.",
    subtitle1: "advantages",
    points1: [
      "Simple and easy to set up and operate.",
      " No need to file annual accounts or pay corporation tax .",
      "The owner keeps all the profits.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "The owner has unlimited liability. This means that the owner's personal assets can be used to pay for the debts and obligations of the business, even if the business is insolvent.",
      " The owner may find it difficult to raise finance.",
      "The owner may have difficulty attracting and retaining employees. Advantage: Simple and easy to set up and operate",
    ],
  },
  {
    id: 2,
    title: "Partnership",
    description:
      "Is a business owned and run by two or more people. The partners are jointly liable for all debts and obligations of the business. Partnerships are more complex to set up and operate than sole proprietorships, but they offer more protection for the partners' personal assets.",
    subtitle1: "advantages",
    points1: [
      "Partners can share skills and resources.",
      "Partners can pool their financial resources .",
      "Partnerships can be more tax-efficient than sole proprietorships.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "The partners have joint liability. This means that each partner is liable for the debts and obligations of the business, even if they were not involved in the decision that led to the debt.",
      " Partners may find it difficult to agree on business decisions.",
      "Partners may have difficulty attracting and retaining employees.",
    ],
  },
  {
    id: 3,
    title: "Limited liability partnership (LLP)",
    description:
      "is a type of partnership where the partners' liability is limited to their investment in the business. LLPs are more complex to set up and operate than partnerships, but they offer the same level of protection for the partners' personal assets as limited companies.",
    subtitle1: "advantages",
    points1: [
      "Partners have limited liability.",
      " LLPs can be more tax-efficient than sole proprietorships and partnerships.",
      "LLPs can be more flexible than limited companies.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "LLPs are more complex to set up and operate than sole proprietorships and partnerships.",
      "LLPs may be subject to more regulation than sole proprietorships and partnerships.",
    ],
  },
  {
    id: 4,
    title: "Private limited company (Ltd)",
    description:
      "is a company that is owned by shareholders. The shareholders are not personally liable for the debts and obligations of the company. Private limited companies are more complex to set up and operate than sole proprietorships and partnerships, but they offer the greatest protection for the shareholders' personal assets.",
    subtitle1: "advantages",
    points1: [
      "Shareholders have limited liability.",
      "Private limited companies can raise finance more easily than sole proprietorships, partnerships, and LLPs .",
      "Private limited companies can be more tax-efficient than sole proprietorships, partnerships, and LLPs.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "Private limited companies are more complex to set up and operate than sole proprietorships, partnerships, and LLPs.",
      "Private limited companies are subject to more regulation than sole proprietorships, partnerships, and LLPs.",
    ],
  },
  {
    id: 5,
    title: "One person company (OPC)",
    description:
      "is a type of private limited company that is owned by one person. The owner of an OPC is not personally liable for the debts and obligations of the company. OPCs are more complex to set up and operate than sole proprietorships, but they offer the same level of protection for the owner's personal assets as other private limited companies.",
    subtitle1: "advantages",
    points1: [
      "The owner has limited liability.",
      "OPCs can raise finance more easily than sole proprietorships and partnerships .",
      "OPCs can be more tax-efficient than sole proprietorships and partnerships.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "OPCs are more complex to set up and operate than sole proprietorships and partnerships.",
      "OPCs are subject to more regulation than sole proprietorships and partnerships.",
    ],
  },
  {
    id: 6,
    title: "Public limited company (PLC)",
    description:
      "is a company that is owned by shareholders and whose shares are traded on a stock exchange. PLCs are the most complex type of business entity to set up and operate, but they offer the greatest level of protection for the shareholders' personal assets.",
    subtitle1: "advantages",
    points1: [
      "Shareholders have limited liability.",
      " PLCs can raise large amounts of finance. ",
      "PLCs can be more tax-efficient than other types of business entities.",
    ],
    subtitle2: "disadvantages",
    points2: [
      "PLCs are the most complex type of business entity to set up and operate.",
      "PLCs are subject to more regulation than other types of business entities.",
      "The best type of business entity for you will depend on the size and complexity of your business, the amount of risk you are willing to take, and your personal financial situation. It is important to consult with an accountant or business lawyer to get professional advice on the best business structure for your needs.",
    ],
  },
];

const CardFramer = () => {
  return (
    <div className="colla p-5">
      {registrations.map((item) => (
        <div className="mb-4">
          <details
            tabIndex={0}
            className=" collapse-open bg-base-300  outline-none hover:outline-none rounded-2xl border-none active:outline-offset-0 cursor-pointer">
            <summary className="collapse-title  text-2xl uppercase  text-indigo-600">
              {item.title}
            </summary>
            <div className="collapse-content font-semibold ">
              <CustomMotion>
                <p className="text-gray-600 mb-9">{item.description}</p>
                <h4 className="capitalize">{item.subtitle1}</h4>
                <div>
                  <ul className="lg:grid lg:grid-cols-1  p-7 list-disc">
                    {item.points1.map((point) => (
                      <li className="mb-2 ">{point}</li>
                    ))}
                  </ul>
                </div>
                <h4 className="capitalize">{item.subtitle2}</h4>
                <div>
                  <ul className="lg:grid lg:grid-cols-1  p-7 list-disc">
                    {item.points2.map((point) => (
                      <li className="mb-2 ">{point}</li>
                    ))}
                  </ul>
                </div>
              </CustomMotion>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default CardFramer;
