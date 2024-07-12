import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H3Props = PropsWithChildren<{
  className?: string;
}>;

function H3({ className, children }: H3Props) {
  return <h3 className={classNames(className, "text-3xl font-bold mb-4 first-letter:text-orange")}>{children}</h3>;
}

export default H3;
