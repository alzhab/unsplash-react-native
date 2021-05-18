export interface InputProps {
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  onChange?: (val: string) => void;
  onSubmit?: () => void;
  secureTextEntry?: boolean;
  mask?: string;
  value?: string;
  caretHidden?: boolean;
  textArea?: boolean;
}
