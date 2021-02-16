import React, { forwardRef, ForwardRefRenderFunction } from "react";
import styled from "styled-components";

export interface StyledProps {
  disabled?: boolean;
}

export interface Props extends StyledProps {
  /** Identifier that can be used to select this element in e2e tests */
  dataTestId?: string;
  /** Checkbox label */
  label: string;
}

const Input = styled.input`
  position: absolute;
  outline: none;
  opacity: 0;
`;

const Label = styled.div`
  cursor: pointer;
  border: 1px solid #2a4365;
  padding: 6px 18px;
  box-sizing: border-box;
  border-radius: 4px;
`;

const CheckboxRoot = styled.label<StyledProps>`
  -webkit-tap-highlight-color: transparent;
  display: inline-grid;
  padding: 4px;
  box-sizing: border-box;

  :focus-within {
    ${Label} {
      border: 2px solid #2a4365;
      padding: 5px 17px;
    }
  }

  ${Label} {
    background: #ebf8ff;
    color: #2a4365;
  }

  input:checked ~ ${Label} {
    background: #2a4365;
    color: #ebf8ff;
  }
`;

type CheckboxProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "ref" | "type" | "as"
> &
  Props;

const ButtonCheckboxComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ label, dataTestId, className, ...props }, ref) => (
  <CheckboxRoot
    aria-label={label}
    data-testid={dataTestId}
    disabled={props.disabled}
    className={className}
  >
    <Input ref={ref} type="checkbox" {...props} />
    <Label>{label}</Label>
  </CheckboxRoot>
);

export const ButtonCheckbox = forwardRef(ButtonCheckboxComponent);
