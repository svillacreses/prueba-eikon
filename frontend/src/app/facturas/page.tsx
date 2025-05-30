import Link from "next/link";
import { obtenerFacturas } from "@/services/facturas";
import { FacturaCard } from "@/components/ui/Cards";
import { Transition, TransitionChild } from "@headlessui/react";
import PageSubtitle from "@/components/ui/PageSubtitle";
import TextLink from "@/components/ui/TextLink";
import CrearFacturaButton from "@/components/CrearFacturaButton";

export default async function Page() {
  const facturas = await obtenerFacturas();

  return (
    <>
      <Transition appear show={true}>
        <div className="flex gap-4 items-center flex-col">
          <PageSubtitle>Listado de Facturas</PageSubtitle>
          <CrearFacturaButton />
          <div className="w-full grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {facturas.map((factura: any, i: number) => (
              <TransitionChild key={i}>
                <FacturaCard factura={factura} />
              </TransitionChild>
            ))}
          </div>
          <Link href="/">
            <TextLink backward>Volver a la página principal</TextLink>
          </Link>
        </div>
      </Transition>
    </>
  );
}
