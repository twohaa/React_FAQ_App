import React, { useState } from "react";
import style from "./faqs.module.css";
import { faqsData } from "./Data";
import FAQ from "./FAQ";

export default function FAQS() {
  const [faqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}
