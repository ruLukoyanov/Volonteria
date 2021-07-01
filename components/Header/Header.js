import React from "react";
import Link from "next/link";

import classes from "./Header.module.css";

export default function Header() {
  const PAGES = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "News",
      url: "/news",
    },
  ];

  return (
    <header>
      {PAGES.map((item, index) => (
        <span key={index} className={classes.item}>
          <Link href={item.url}>{item.name}</Link>
        </span>
      ))}
    </header>
  );
}
