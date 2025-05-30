import Link from "next/link";
import CustomButton from "../CustomButton";
import CustomCard from "./CustomCard";
import { Factura } from "@/models/Factura";
import { secondaryColor } from "@/utils";

interface FacturaCardProps {
  factura: Factura;
}

const FacturaCard = ({ factura }: FacturaCardProps) => {
  return (
    <CustomCard borderColor={secondaryColor}>
      <div
        className={`w-full font-[family-name:var(--font-geist-mono)] mb-4 py-2 rounded-xl text-center text-white font-bold`}
        style={{
          background: secondaryColor,
          letterSpacing: "0.1em",
        }}
      >
        {factura.numero}
      </div>
      <Link href={`/facturas/${factura.id}`}>
        <CustomButton dense>Ver Detalle</CustomButton>
      </Link>
    </CustomCard>
  );
};

export default FacturaCard;
