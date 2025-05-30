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
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { currencyFormat, formatISODate, muiTheme } from "@/utils";
import { crearFactura } from "@/services/facturas";
import { ItemFactura, NuevaFactura } from "@/models/Factura";
import CustomButton from "./ui/CustomButton";
import CustomTextField from "./ui/CustomTextField";
import CustomDatePicker from "./ui/CustomDatePicker";
import { useRouter } from "next/navigation";

const columns: GridColDef[] = [
  {
    field: "descripcion",
    headerName: "Descripción",
    flex: 2,
  },
  {
    field: "precio",
    headerName: "Precio",
    type: "number",
    flex: 1,
    valueFormatter: (value: number) => currencyFormat(value),
  },
];

const CrearFacturaButton = () => {
  const router = useRouter();
  const defaultDate = dayjs();
  const [openDialog, setOpenDialog] = useState(false);
  const [nombreFactura, setNombreFactura] = useState("");
  const [clienteFactura, setClienteFactura] = useState("");
  const [fechaFactura, setFechaFactura] = useState(defaultDate);
  const [items, setItems] = useState<ItemFactura[]>([]);
  const [isLoadingFactura, setIsLoadingFactura] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const processRowUpdate = (newRow: any, oldRow: any): any => {
    const updatedRow = { ...oldRow, ...newRow };
    setItems((prevItems: any[]) =>
      prevItems.map((item) =>
        item.descripcion === oldRow.descripcion ? updatedRow : item
      )
    );
    return updatedRow;
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CustomButton
        variant="secondary"
        onClick={handleOpen}
        loading={isLoadingFactura}
      >
        Crear Factura +
      </CustomButton>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        disableEscapeKeyDown
        slotProps={{
          paper: {
            style: {
              width: "500px",
              maxWidth: "90%",
            },
            component: "form",
            onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleClose();
              setIsLoadingFactura(true);
              const nuevaFactura = NuevaFactura.fromJSON({
                numero: nombreFactura,
                cliente: clienteFactura,
                fecha: formatISODate(fechaFactura),
                items: items,
              });
              try {
                const res = await crearFactura(nuevaFactura);
                toast.success(res.message);
                router.refresh();
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
            <DataGrid
              showToolbar
              editMode="row"
              density="compact"
              rows={items}
              sx={{ border: 0 }}
              rowSelection={false}
              processRowUpdate={processRowUpdate}
              pageSizeOptions={[5, 10, 100]}
              getRowId={(row: ItemFactura) => row.id}
              columns={columns.map((col) => ({
                ...col,
                headerClassName: "table-header",
                headerAlign: "center",
                align: "center",
                editable: true,
              }))}
              initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 5 } },
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <CustomButton
                variant="secondary"
                onClick={() => {
                  setItems((prevItems: any[]) => [
                    ...prevItems,
                    {
                      id: prevItems.length,
                      descripcion: `Producto ${prevItems.length + 1}`,
                      precio: 1,
                    },
                  ]);
                }}
              >
                Agregar Item +
              </CustomButton>
              <span>(Doble click para editar las filas)</span>
            </div>
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
