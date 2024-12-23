import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@mui/joy";
import { useDispatch } from "react-redux";
import { updatePoint } from "../../../app/store/points/reducer";
import { Point } from "../../../app/types/points";
import useModal from "../../../app/hooks/useModal";

export interface IEditModalProps {
  point: Point;
}

const EditModal: React.FC<IEditModalProps> = ({ point }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Point>({
    defaultValues: point,
  });

  const onSubmit = (data: Point) => {
    dispatch(updatePoint(data));
    closeModal();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl error={!!errors.title}>
          <FormLabel>Название</FormLabel>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Название обязательно" }}
            render={({ field }) => <Input {...field} />}
          />
          <FormHelperText>{errors.title?.message}</FormHelperText>
        </FormControl>

        <FormControl error={!!errors.description}>
          <FormLabel>Описание</FormLabel>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Описание обязательно" }}
            render={({ field }) => (
              <Textarea {...field} minRows={2} maxRows={5} />
            )}
          />
          <FormHelperText>{errors.description?.message}</FormHelperText>
        </FormControl>

        <Button type="submit" fullWidth>
          Изменить
        </Button>
      </form>
    </>
  );
};

export default EditModal;
