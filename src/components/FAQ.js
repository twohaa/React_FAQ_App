import React, { useState } from "react";
import style from "./faq.module.css";

export default function FAQ({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);

  return (
    <article className={style.faq}>
      <div>
        <h4>
          {id}: {title}
        </h4>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
}
