import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button {...props} className="bg-black text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}
