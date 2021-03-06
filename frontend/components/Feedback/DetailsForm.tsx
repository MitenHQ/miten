import React, { FC } from 'react';
import { Button, Textarea, theme } from '@chakra-ui/react';
import { BiRocket, BiTrash } from 'react-icons/bi';
import styled from 'styled-components';
import { ButtonCheckbox } from './DetailsForm/ButtonCheckbox';
import { Reactions } from './constants';
import { useForm } from 'react-hook-form';
import { getTitle } from './getTitle';

const Label = styled.div`
  font-size: 16px;
  color: #555;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  padding: 6px;
`;

const Title = styled.h1`
  margin: 20px 0 20px 0;
  font-size: 22px;
  color: ${(theme as any).colors.blue[700]};
  font-weight: 500;
`;

export type FormValuesBase = {
  comment: string;
};

type BooleanItems = { [key in string]: boolean };
export type FormValues = FormValuesBase & BooleanItems; // keys are items
export type FormValuesToSubmit = FormValuesBase & { items: string[] };

export type Props = {
  items: string[];
  reaction: Reactions | null;
  setReaction: (reaction: Reactions | null) => void;
  onSubmit: (formValues: FormValuesToSubmit) => void;
};

const prepareItems = (booleanItems: BooleanItems): string[] => {
  const items = [];

  for (const value in booleanItems) {
    if (booleanItems[value]) {
      items.push(value.toLowerCase());
    }
  }
  return items;
};

export const DetailsForm: FC<Props> = ({ items, reaction, setReaction, onSubmit }) => {
  const { handleSubmit, register, reset } = useForm<FormValues>();
  const submit = (values: FormValues): void => {
    const { comment, ...otherItems } = values;
    const items = prepareItems(otherItems);
    const formValues = { comment, items };
    onSubmit(formValues);
  };
  const handleReset = (): void => {
    setReaction(null);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Title>{getTitle(reaction)}</Title>
      {items.map((label) => (
        <ButtonCheckbox key={label} name={label} label={label} ref={register()} />
      ))}
      <Label>
        <span>Write something for the organizer</span>
        <Textarea variant="filled" name="comment" ref={register()} />
      </Label>
      <Buttons>
        <ButtonContainer>
          <Button
            rightIcon={<BiRocket />}
            disabled={!reaction}
            colorScheme="green"
            variant="solid"
            type="submit"
          >
            Send the feedback
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            rightIcon={<BiTrash />}
            disabled={!reaction}
            colorScheme="pink"
            variant="outline"
            onClick={handleReset}
          >
            Reset
          </Button>
        </ButtonContainer>
      </Buttons>
    </form>
  );
};
