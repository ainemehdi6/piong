import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H2Props = PropsWithChildren<{
  className?: string;
}>;

function H2({ className, children }: H2Props) {
  return <h2 className={classNames(className, "text-4xl font-bold mb-4 first-letter:text-orange")}>{children}</h2>;
}

export default H2;
