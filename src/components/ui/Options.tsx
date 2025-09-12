import { cn } from '@/lib/utils';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  defaultOption?: string;
  children?: React.ReactNode;
}

export const Options = ({
  id,
  label,
  error,
  defaultOption,
  required,
  children,
  className,
  ...inputProps
}: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 ml-1 block text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        {...inputProps}
        id={id}
        className={cn(
          'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 text-base font-medium shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
      >
        {defaultOption && <option value="">{defaultOption}</option>}
        {children}
      </select>

      {error && (
        <span className="mt-2 ml-2 inline-block text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
