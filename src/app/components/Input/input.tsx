"use client";

interface InputProps {
  onChangeValue: (value: string) => void;
  value: string;
  showLabel?: boolean;
  label?: string;
  placeholder: string;
  onKeyEnter?: () => void;
  name: string;
}

export default function Input({
  onChangeValue,
  value,
  showLabel = false,
  label = "",
  placeholder,
  onKeyEnter = () => {},
  name,
}: InputProps) {
  const handleChangeMessage = (event: React.FormEvent<HTMLInputElement>) => {
    onChangeValue(event.currentTarget.value);
  };

  const handleEnterKeyEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.key === "Enter" && onKeyEnter();
  };

  return (
    <div className="flex flex-col ">
      {showLabel ? <label htmlFor={name}>{label}</label> : null}
      <input
        id={name}
        className="appearance-none rounded-md flex-1 px-4"
        onChange={handleChangeMessage}
        value={value}
        placeholder={placeholder}
        onKeyUp={handleEnterKeyEvent}
      />
    </div>
  );
}
