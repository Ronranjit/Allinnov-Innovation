import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="bg-gray-50">
      <div className="p-4">
        <h2 className=" flex justify-center mt-16 mb-24 text-3xl font-bold leading-tight  sm:text-4xl xl:text-5xl  ">
          Programmes
        </h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center">
          <Card
            title="company registration service"
            subtitle="Manage Registration"
            href="#"
            Icon={FiUser}
          />
          <Card
            title="Concept to buisness"
            subtitle="Manage Buisness"
            href="#"
            Icon={FiMail}
          />
          <Card
            title="IP creation and commercialization & research support"
            subtitle="Manage Creation"
            href="#"
            Icon={FiUsers}
          />
          <Card
            title="Produt design & development"
            subtitle="Manage Products"
            href="#"
            Icon={FiCreditCard}
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-[25rem] lg:w-[30rem] lg:h-[9rem] p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 uppercase">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
