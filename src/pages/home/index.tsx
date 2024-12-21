import * as React from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Header from "../../components/header";
import ModalManager from "../../components/modal";
import { homeModalRegistry, HomeModalType } from "./modals";
import useModal from "../../app/hooks/useModal";
import GeocoderSearch from "../../components/geocoder";
import { ICreateModalProps } from "./modals/CreateModal";
import { FeatureMember } from "../../features/geocoder/service/types";
import Drawer from "../../components/drawer";
import { useState } from "react";
import { convertCoodinates } from "../../app/utils/pointUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Point } from "../../app/types/points";
import { IDeleteModalProps } from "./modals/DeleteModal";
import { List, ListItemButton, Stack, Typography } from "@mui/joy";
import { IEditModalProps } from "./modals/EditModal";

interface IHomePageProps {}

const VITE_YANDEX_API_KEY = import.meta.env.VITE_YANDEX_API_KEY;

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { openModal } = useModal<HomeModalType>();
  const [ymaps, setYmaps] = useState<ymaps.Map>();

  const points = useSelector((state: RootState) => state.points.points);

  const handleSelect = (value: FeatureMember) => {
    const coordinates = convertCoodinates(value.GeoObject.Point.pos);
    ymaps?.setCenter(coordinates, 10);
    openModal<ICreateModalProps>("HOME_CREATE", {
      props: { newPoint: value },
      appModalProps: { title: `Добавить ${value.GeoObject.name}` },
    });
  };

  const handleDelete = (point: Point) => {
    openModal<IDeleteModalProps>("HOME_DELETE", {
      props: { point },
      appModalProps: { title: `Удалить ${point.title}` },
    });
  };

  const handleEdit = (point: Point) => {
    ymaps?.setCenter(point.location, 10);
    openModal<IEditModalProps>("HOME_EDIT", {
      props: { point },
      appModalProps: {
        title: `Редактировать ${point.title}`,
        sheetProps: { sx: { minWidth: 300 } },
      },
    });
  };

  const renderListItem = (point: Point) => {
    const { title, location, id, description } = point;

    return (
      <ListItemButton key={id} onClick={() => handleEdit(point)}>
        <Stack direction="column">
          <Typography level="title-sm">{title}</Typography>
          <Typography level="body-sm">{description}</Typography>
          <Typography level="body-sm">{`${location[1]},${location[0]}`}</Typography>
        </Stack>
      </ListItemButton>
    );
  };

  return (
    <>
      <YMaps query={{ apikey: VITE_YANDEX_API_KEY, lang: "ru_RU" }}>
        <Header>
          <GeocoderSearch onSelect={handleSelect} />
        </Header>
        <Map
          width={"100vw"}
          height={"100vh"}
          defaultState={{ center: [60, 100], zoom: 4 }}
          instanceRef={(ref) => {
            if (ref) {
              setYmaps(ref);
              ref.behaviors.disable("dblClickZoom");
            }
          }}
        >
          {points.map((p) => (
            <Placemark
              key={p.id}
              onDblClick={() => handleDelete(p)}
              geometry={p.location}
            />
          ))}
        </Map>
      </YMaps>

      <Drawer>
        <List>{points.map(renderListItem)}</List>
      </Drawer>

      <ModalManager registry={homeModalRegistry} />
    </>
  );
};

export default HomePage;
