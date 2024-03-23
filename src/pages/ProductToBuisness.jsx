import React from "react";
import CustomMotion from "../components/CustomMotion";
import charles from "../assets/images/product/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg";
import web from "../assets/images/product/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import webapp from "../assets/images/product/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg";
import CardFramer from "../components/CardFramer";

const howImportant = [
  "A website or web application can be an essential tool for the success of a business. It can help a business to:",

  "Increase brand awareness by making the business more visible to potential customers.",

  " Generate leads by providing information about the business's products or services and allowing users to contact the business.",

  " Drive sales by making it easy for users to buy products or services online.",
  " Provide customer support by providing a way for users to get answers to their questions.",

  "Improve customer satisfaction by providing a positive and user-friendly experience.",

  " In today's digital age, a website or web application is an essential part of any business. If you don't have one, you are missing out on a great opportunity to reach new customers and grow your business.",
];

const ProductToBuisness = () => {
  return (
    <div>
      <div className="product-hero mb-9">
        <div>
          <div>
            <CustomMotion>
              <h1 className="text-8xl text-center capitalize  md:text-[7rem] text-white ">
                product to buisness
              </h1>
            </CustomMotion>
          </div>
        </div>
      </div>
      <div>
        <div className="col-1 lg:flex lg:justify-evenly items-center mb-24">
          <div>
            <img
              width={300}
              src={charles}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-7xl capitalize mb-8">product to buisness</h1>
            <div className=" flex justify-center">
              <hr className=" mb-10 border-purple-500 lg:w-28 border-9" />
            </div>
            <p className="max-w-[40rem] leading-loose ">
              Now that we assume you’re ready with your product or service or
              trading business plans. Based on your personal and business goals
              your business model and method are to be chosen right at the
              beginning stages. Not all types of business registrations will
              suit all types of businesses; and not all tools that you see or
              feel will suit both your personal and business goals. It is most
              important to choose the right registration and the right set of
              tools to make you and your business both achieve success together.
            </p>
          </div>
        </div>
        <div className="col-2">
          <h1 className="text-7xl flex justify-center capitalize mb-16">
            buisness registration service
          </h1>
          <div className=" flex justify-center">
            <hr className=" mb-10 border-purple-500 lg:w-28 border-9" />
          </div>
          <div className="lg:flex lg:justify-around lg:items-center ">
            <div className="max-w-[35rem] ">
              <p className="mb-5 leading-loose">
                1.Thinking of starting a business? If so, you need to register
                your company with the relevant authorities. This process can be
                complex and time-consuming, but it is essential to ensure that
                your business is legally compliant.
              </p>
              <p className="leading-loose">
                2.We offer a range of company registration services to help you
                get your business up and running quickly and easily. Our team of
                experts will guide you through the entire process, from choosing
                the right entity structure to filing the necessary paperwork. We
                can also help you obtain the necessary licenses and permits.
              </p>
            </div>
            <div className="max-w-[30rem]">
              <h3 className="text-2xl ">
                Here are some of the benefits of using our company registration
                services
              </h3>
              <ul className="list-disc leading-loose">
                <li>
                  We have a team of experienced experts who can help you with
                  every step of the process.
                </li>
                <li>
                  We are familiar with the latest regulations and can ensure
                  that your business is compliant.
                </li>
                <li>
                  We can help you save time and money by taking care of the
                  paperwork for you.
                </li>
                <li>
                  We offer a variety of packages to fit your needs and budget.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="">
            <h4 className="">
              If you are interested in learning more about our company
              registration services, please contact us today,We would be happy
              to answer any questions you have and help you get started on your
              business journey.
            </h4>
          </div> */}
        </div>
      </div>
      <CardFramer />
      <section className="website">
        <h1 className="text-7xl flex justify-center capitalize mb-16">
          Website and Web Application
        </h1>
        <div className=" flex justify-center">
          <hr className=" mb-10 border-purple-500 lg:w-28 border-9" />
        </div>
        <div className="col-1 lg:flex lg:justify-evenly items-center mb-24">
          <div>
            <h1 className="text-3xl text-indigo-700 mb-6">what is website ?</h1>
            <p className="max-w-[30rem] leading-loose mb-6">
              A website is a collection of web pages that are hosted on a server
              and can be accessed by anyone with an internet connection.
              Websites can be used for a variety of purposes, such as:
            </p>
            <ul className="list-disc leading-loose">
              <li>Providing information about a business or organization.</li>
              <li>Selling products or services.</li>
              <li>Communicating with customers or clients.</li>
              <li>Gathering feedback from customers or clients.</li>
              <li>Promoting a brand or product.</li>
            </ul>
          </div>
          <div>
            <img
              width={300}
              src={web}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="webapp">
        <div className="col-1 lg:flex lg:justify-evenly items-center mb-24">
          <div>
            <img
              width={300}
              src={webapp}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-indigo-700 mb-6">
              what is a web application ?
            </h1>
            <p className="max-w-[30rem] leading-loose mb-6">
              A web application is a software application that is hosted on a
              server and can be accessed by users through a web browser. Web
              applications are typically interactive, meaning that users can
              interact with them by entering data, clicking on buttons, and so
              on.
            </p>
            <ul className="list-disc leading-loose">
              <li>
                E-commerce websites that allow users to buy and sell products
                online.
              </li>
              <li>
                Social media platforms that allow users to connect with friends
                and family, share photos and videos, and so on.
              </li>
              <li>Communicating with customers or clients.</li>
              <li>
                Online banking platforms that allow users to manage their
                finances online.
              </li>
              <li>
                Customer relationship management (CRM) systems that help
                businesses manage their customer interactions.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" relative imp border p-9 w-11/12 mx-auto rounded-xl shadow-xl">
        <h1 className="text-5xl flex justify-center capitalize mb-16">
          How important is a website or web application for the success of a
          business?
        </h1>
        <ul className="leading-loose">
          {howImportant.map((item, index) => (
            <li>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductToBuisness;
