import { useField } from "formik";
import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  showError?: boolean;
  containerClassName?: string;
  rightElement?: React.ReactNode;
}

const InputField = ({
  label,
  name,
  showError = true,
  containerClassName,
  className,
  rightElement,
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <div className={cn("grid gap-2", containerClassName)}>
      {label && (
        <label htmlFor={name} className={"text-sm font-medium"}>
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          {...field}
          {...props}
          className={cn(
            "border border-gray-300 rounded-md p-3 w-full",
            hasError
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:border-gray-400",
            props.disabled && "bg-gray-100 cursor-not-allowed opacity-60",
            className
          )}
        />
        {rightElement ? rightElement : null}
      </div>

      {showError && hasError && (
        <div className={"text-red-500 text-sm"}>{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
