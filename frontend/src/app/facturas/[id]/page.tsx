import Link from "next/link";
import { Transition, TransitionChild } from "@headlessui/react";
import PageSubtitle from "@/components/ui/PageSubtitle";
import TextLink from "@/components/ui/TextLink";
import { obtenerFactura } from "@/services/facturas";
import { currencyFormat, formatDate, primaryColor } from "@/utils";
import ItemCard from "@/components/ui/Cards/ItemCard";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const factura = await obtenerFactura(id);

  return (
    <>
      <Transition appear show={true}>
        <div className="flex gap-4 items-center flex-col">
          <div className="w-full flex flex-col gap-2 items-start">
            <PageSubtitle># {factura.numero}</PageSubtitle>
            <PageSubtitle>Cliente: {factura.cliente}</PageSubtitle>
            <PageSubtitle>Fecha: {formatDate(factura.fecha)}</PageSubtitle>
            <PageSubtitle>TOTAL: {currencyFormat(factura.total)}</PageSubtitle>
          </div>
          <div
            className="w-full px-6 grid gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1"
            style={{
              borderLeft: `7px solid ${primaryColor}`,
              borderRight: `7px solid ${primaryColor}`,
            }}
          >
            {(factura.items || []).map((item: any, i: number) => (
              <TransitionChild key={i}>
                <ItemCard item={item} />
              </TransitionChild>
            ))}
          </div>
          <Link href="/facturas">
            <TextLink backward>Volver a la lista de facturas</TextLink>
          </Link>
        </div>
      </Transition>
    </>
  );
}
