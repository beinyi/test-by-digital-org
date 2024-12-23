import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FeatureMember } from "../../../features/geocoder/service/types";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
  Textarea,
  Typography,
} from "@mui/joy";
import { useDispatch } from "react-redux";
import { addPoint } from "../../../app/store/points/reducer";
import { convertCoodinates } from "../../../app/utils/pointUtils";
import idCounter from "../../../app/utils/idCounter";
import { Point } from "../../../app/types/points";
import useModal from "../../../app/hooks/useModal";

export interface ICreateModalProps {
  newPoint: FeatureMember;
}

const CreateModal: React.FC<ICreateModalProps> = ({ newPoint }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Point, "id">>({
    defaultValues: {
      title: newPoint.GeoObject.name || "",
      description: newPoint.GeoObject.description || "",
      location: convertCoodinates(newPoint.GeoObject.Point.pos),
    },
  });

  const onSubmit = (data: Omit<Point, "id">) => {
    const point = {
      id: idCounter(),
      ...data,
    };
    dispatch(addPoint(point));
    closeModal();
  };

  const address = newPoint.GeoObject.metaDataProperty.GeocoderMetaData.text;
  const coordinates = newPoint.GeoObject.Point.pos;
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

        <List>
          <ListItem>
            <Typography level="title-sm">Адрес</Typography>
            <Typography level="body-sm">{address}</Typography>
          </ListItem>
          <ListItem>
            <Typography level="title-sm">Координаты</Typography>
            <Typography level="body-sm">{coordinates}</Typography>
          </ListItem>
        </List>

        <Button type="submit" fullWidth>
          Создать
        </Button>
      </form>
    </>
  );
};

export default CreateModal;
