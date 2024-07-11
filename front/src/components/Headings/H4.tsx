import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H4Props = PropsWithChildren<{
  className?: string;
}>;

function H4({ className, children }: H4Props) {
  return <h4 className={classNames(className, "text-2xl font-bold mb-4 first-letter:text-orange")}>{children}</h4>;
}

export default H4;
