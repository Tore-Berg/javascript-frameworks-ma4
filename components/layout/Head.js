import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Javascript Frameworks MA4
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
