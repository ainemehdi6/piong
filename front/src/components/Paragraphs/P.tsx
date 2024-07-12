import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type PProps = PropsWithChildren<{
  className?: string;
}>;

function P({ className, children }: PProps) {
  return <p className={classNames(className, "mb-3")}>{children}</p>;
}

export default P;
