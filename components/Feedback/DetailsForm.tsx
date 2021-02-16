import { Button, Textarea } from "@chakra-ui/react";
import { BiRocket, BiTrash } from "react-icons/bi";
import { FC } from "react";
import styled from "styled-components";
import { ButtonCheckbox } from "./DetailsForm/ButtonCheckbox";
import { Reactions } from "./constants";
import { useForm } from "react-hook-form";

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

type FormValues = {
  comment: string;
} & { [key in string]: boolean }; // keys are items

type Props = {
  items: string[];
  reaction: Reactions | null;
  setReaction: (reaction: Reactions | null) => void;
  onSubmit: () => void;
};

export const DetailsForm: FC<Props> = ({
  items,
  reaction,
  setReaction,
  onSubmit
}) => {
  const { handleSubmit, register, reset } = useForm<FormValues>();
  const submit = (values: FormValues) => {
    const formValues = { ...values, reaction };
    console.log(formValues);

    onSubmit();
    // alert(JSON.stringify(formValues));
  };
  const handleReset = () => {
    setReaction(null);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {items.map((label) => (
        <ButtonCheckbox
          key={label}
          name={label}
          label={label}
          ref={register()}
        />
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
