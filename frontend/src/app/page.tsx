import Link from "next/link";
import PageSubtitle from "@/components/ui/PageSubtitle";
import CustomImage from "@/components/ui/CustomImage";
import CustomButton from "@/components/ui/CustomButton";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 items-center flex-col">
        <div className="w-[80%] h-[20vh] md:h-[30vh] relative mb-5">
          <CustomImage
            priority
            objecFit="contain"
            maxHeight="20vh"
            alt="Diagrama ER"
            src="https://firebasestorage.googleapis.com/v0/b/gluzsite.appspot.com/o/External%2FPrueba%20Eikon%20BD.svg?alt=media&token=d6200076-7f2a-4ec2-9a3f-748d3b3eac39"
          />
        </div>
        <PageSubtitle>
          Prueba Técnica
          <br />
          Full-Stack Developer
        </PageSubtitle>
        <Link href={`/facturas`}>
          <CustomButton>Ver Facturas</CustomButton>
        </Link>
      </div>
    </>
  );
}
