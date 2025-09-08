import { Input } from './input';

interface Props extends React.ComponentProps<'input'> {
  id?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

export const CustomInput = ({
  id,
  label,
  error,
  required,
  ...inputProps
}: Props) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="text-card-foreground mb-2 ml-1 block text-sm font-medium"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Input
        {...inputProps}
        id={id}
        className="bg-input border-border my-2 font-medium"
      />

      {error && <p className="ml-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
