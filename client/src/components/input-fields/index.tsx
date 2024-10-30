import React from 'react';

interface InputFieldType {
  inputType: 'text' | 'email' | 'password';
  inputID?: string;
  inputLabel?: string;
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
  inputID,
  inputLabel,
  inputValue,
  inputOnChange,
  isRequired,
  hasLabel,
  hasAutoComplete,
  className,
  placeholder,
}: InputFieldType) => {
  return (
    <>
      {hasLabel ? (
        <label htmlFor={inputID ? inputID : undefined}>
          {inputLabel ? inputLabel : undefined}
        </label>
      ) : (
        ''
      )}
      <input
        id={inputLabel ? inputLabel : undefined}
        className={className ? className : undefined}
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
