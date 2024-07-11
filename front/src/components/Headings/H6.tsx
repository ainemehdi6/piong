import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H6Props = PropsWithChildren<{
  className?: string;
}>;

function H6({ className, children }: H6Props) {
  return <h6 className={classNames(className, "text-lg font-bold mb-4 first-letter:text-orange")}>{children}</h6>;
}

export default H6;
