import React, { InputHTMLAttributes } from 'react';
import CustomInputContainer from './CustomInput.style';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  defaultValue?: string;
};

const CustomInput = ({
  label,
  defaultValue,
  name,
  ...props
}: CustomInputProps) => (
  <CustomInputContainer>
    {label && <label htmlFor={name}>{label}</label>}
    <div className="input-wrapper">
      <input id={name} name={name} {...props} />
    </div>
  </CustomInputContainer>
);
export default CustomInput;
