import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p className="font-semibold text-lg text-red-500 py-2">
      {children}
    </p>
  )
}
