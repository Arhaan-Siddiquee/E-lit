import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-5">
        <h1 className="font-bold text-3xl flex justify-center p-4">Questions? We'll Shed Some Light On Them</h1>
      <div className="px-5 py-4"><Accordion
        title="Do I need to replace the batteries?"
        answer="No need to worry about replacing the batteries, the E-Lit has a built-in USB Type C port so It can be easily rechargeable."
      />
      <Accordion
        title="Can electric lighters be used in windy conditions?"
        answer="Yes, electric lighters are generally more effective in windy conditions compared to traditional flame lighters. Since they use an electric arc or plasma beam rather than an open flame, they are less susceptible to being extinguished by wind. However, extremely strong winds might still affect performance, so it's always good to use them in sheltered conditions when possible."
      />
      <Accordion title="How do I charge an electric lighter?" answer="Most electric lighters are rechargeable via a USB port. Simply connect the lighter to a USB charger or a computer using the provided cable. Charging times vary depending on the model, but it typically takes a couple of hours for a full charge. The lighter often has an indicator light to show when it is fully charged." />
      <Accordion title=" Are electric lighters safe to use?" answer="Yes, electric lighters are generally safe when used according to the manufacturer’s instructions. They are designed with safety features such as child locks and automatic shut-offs to prevent accidental activation. However, it's important to handle them with care, avoid exposing them to extreme conditions, and keep them away from flammable materials when not in use." />
      <Accordion title="How long does the charge last on an electric lighter?" answer="The battery life of an electric lighter varies depending on the model and how frequently it is used. On average, a fully charged electric lighter can last for several days of regular use or several hundred ignitions. Many models have a battery indicator to let you know when it’s time to recharge." />
      </div>
    </div>
  );
};

export default FAQ;