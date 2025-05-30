"use client";

import dayjs from "dayjs";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider,
} from "@mui/material";
import { formatISODate, muiTheme } from "@/utils";
import { crearFactura } from "@/services/facturas";
import { NuevaFactura } from "@/models/Factura";
import CustomButton from "./ui/CustomButton";
import CustomTextField from "./ui/CustomTextField";
import CustomDatePicker from "./ui/CustomDatePicker";

const CrearFacturaButton = () => {
  const defaultDate = dayjs();
  const [openDialog, setOpenDialog] = useState(false);
  const [nombreFactura, setNombreFactura] = useState("");
  const [clienteFactura, setClienteFactura] = useState("");
  const [fechaFactura, setFechaFactura] = useState(defaultDate);
  const [isLoadingFactura, setIsLoadingFactura] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CustomButton
        variant="secondary"
        onClick={handleOpen}
        disabled={isLoadingFactura}
      >
        Crear Factura +
      </CustomButton>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        disableEscapeKeyDown
        slotProps={{
          paper: {
            component: "form",
            onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleClose();
              setIsLoadingFactura(true);
              const nuevaFactura = NuevaFactura.fromJSON({
                numero: nombreFactura,
                cliente: clienteFactura,
                fecha: formatISODate(fechaFactura),
                items: [],
              });
              try {
                const res = await crearFactura(nuevaFactura);
                toast.success(res.message);
              } catch (error: any) {
                toast.error(error?.message || "Error al crear la factura");
              } finally {
                setIsLoadingFactura(false);
              }
            },
          },
        }}
      >
        <DialogTitle>Crear Factura</DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <CustomTextField
              required
              label="Número de Factura"
              value={nombreFactura}
              onChange={(evt) => {
                setNombreFactura(evt.target.value);
              }}
            />
            <CustomTextField
              required
              label="Nombre del Cliente"
              value={clienteFactura}
              onChange={(evt) => {
                setClienteFactura(evt.target.value);
              }}
            />
            <CustomDatePicker
              className="my-3"
              label="Fecha"
              value={fechaFactura}
              onChange={(newValue) => {
                if (newValue) {
                  setFechaFactura(newValue);
                }
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Aceptar</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
export default CrearFacturaButton;
