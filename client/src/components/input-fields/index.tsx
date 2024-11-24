import React from 'react';

interface InputFieldType {
  inputType: 'text' | 'email' | 'password';
  inputID?: string;
  inputLabel?: string;
  labelContents?: string;
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  hasLabel: boolean;
  hasAutoComplete?: 'on' | 'off';
  className?: string;
  placeholder?: string;
}

const InputField = ({
  inputType,
  inputID = '',
  labelContents = '',
  inputValue,
  inputOnChange,
  isRequired,
  hasLabel,
  hasAutoComplete = 'off',
  className,
  placeholder,
}: InputFieldType) => {
  return (
    <>
      {hasLabel && <label htmlFor={inputID}>{labelContents}</label>}
      <input
        id={inputID}
        className={className}
        type={inputType}
        value={inputValue}
        onChange={inputOnChange}
        required={isRequired}
        autoComplete={hasAutoComplete}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
