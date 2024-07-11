import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type H5Props = PropsWithChildren<{
  className?: string;
}>;

function H5({ className, children }: H5Props) {
  return <h5 className={classNames(className, "text-xl font-bold mb-4 first-letter:text-orange")}>{children}</h5>;
}

export default H5;
