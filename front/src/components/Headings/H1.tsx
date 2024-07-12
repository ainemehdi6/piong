import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H1Props = PropsWithChildren<{
  className?: string;
}>;

function H1({ className, children }: H1Props) {
  return <h1 className={classNames(className, "text-5xl font-extrabold mb-5 first-letter:text-orange")}>{children}</h1>;
}

export default H1;
