import { createTheme } from "@mui/material";
import { esES } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";

export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const formatISODate = (date: dayjs.Dayjs) =>
  date.format("YYYY-MM-DDTHH:mm:ss");

export const formatDate = (date: string) =>
  dayjs(date).format("DD/MM/YYYY HH:mm");

export const primaryColor = "#0d9488";
export const secondaryColor = "#f97316";

export const muiTheme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
    shape: {
      borderRadius: 15,
    },
  },
  esES
);
