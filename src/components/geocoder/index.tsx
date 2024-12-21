import {
  Autocomplete,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import * as React from "react";
import { FeatureMember } from "../../features/geocoder/service/types";
import useGeocoder from "../../features/geocoder/useGeocoder";
import debounce from "@mui/utils/debounce";

interface IGeocoderSearchProps {
  onSelect: (value: FeatureMember) => void;
}

const GeocoderSearch: React.FunctionComponent<IGeocoderSearchProps> = ({
  onSelect: handleSelect,
}) => {
  const { result, handleSubmit, isLoading } = useGeocoder();

  const handleDebounceSubmit = debounce(
    (_, value: string) => handleSubmit(value),
    3000
  );

  const handleOnChange = (
    _: React.SyntheticEvent,
    value: string | FeatureMember | null
  ) => {
    if (value && typeof value === "object") {
      handleSelect(value);
    }
  };

  return (
    <Autocomplete
      placeholder="Поиск"
      onChange={handleOnChange}
      onInputChange={handleDebounceSubmit}
      freeSolo
      variant="soft"
      sx={{
        width: "250px",
      }}
      autoComplete
      loading={isLoading}
      loadingText="Загрузка..."
      options={result}
      getOptionLabel={(option) =>
        typeof option === "object" ? option.GeoObject.name : option
      }
      renderOption={(props, option) => (
        <ListItem {...props} key={option.GeoObject.Point.pos}>
          <ListItemButton>
            <ListItemContent>
              <Typography noWrap level="title-sm">
                {option.GeoObject.name}
              </Typography>
              <Typography noWrap level="body-sm">
                {option.GeoObject.description}
              </Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      )}
      slotProps={{
        listbox: {
          sx: {
            zIndex: (theme) => theme.zIndex.appBar + 1,
          },
        },
      }}
      noOptionsText="Нет данных"
    />
  );
};

export default GeocoderSearch;
