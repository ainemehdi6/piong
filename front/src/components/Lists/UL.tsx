import { PropsWithChildren } from "react";
import classNames from "../../utils/classNames";

type ULProps = PropsWithChildren<{
  className?: string;
}>;

function UL({ className, children }: ULProps) {
  return <ul className={classNames(className, "list-disc list-inside mb-3")}>{children}</ul>;
}

export default UL;
