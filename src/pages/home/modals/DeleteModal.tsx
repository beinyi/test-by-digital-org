import * as React from "react";
import { Point } from "../../../app/types/points";
import { Button, List, ListItem, Stack, Typography } from "@mui/joy";
import { useDispatch } from "react-redux";
import useModal from "../../../app/hooks/useModal";
import { removePoint } from "../../../app/store/points/reducer";

export interface IDeleteModalProps {
  point: Point;
}

const DeleteModal: React.FunctionComponent<IDeleteModalProps> = ({ point }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const { title, description } = point;

  const handleDelete = () => {
    dispatch(removePoint(point.id));
    closeModal();
  };

  const handleCancel = () => closeModal();
  return (
    <>
      <Typography>Вы дейстрительно хотите удалить метку?</Typography>
      <List>
        <ListItem>
          <Typography level="title-sm">Название</Typography>
          <Typography level="body-sm">{title}</Typography>
        </ListItem>
        <ListItem>
          <Typography level="title-sm">Описание</Typography>
          <Typography level="body-sm">{description}</Typography>
        </ListItem>
      </List>
      <Stack spacing={2} direction="row">
        <Button onClick={handleCancel} fullWidth>
          Отмена
        </Button>
        <Button color="danger" onClick={handleDelete} fullWidth>
          Удалить
        </Button>
      </Stack>
    </>
  );
};

export default DeleteModal;
