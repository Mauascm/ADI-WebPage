import { ActionLink, PageIntro } from "@/components/ui/editorial";
export default function NotFound() {
  return (
    <div className="not-found">
      <PageIntro
        number="404"
        label="PÁGINA NO ENCONTRADA"
        title={
          <>
            Retomemos
            <br />
            <span>el camino.</span>
          </>
        }
        description="La página que buscas no está disponible. Explora el modelo de ADI desde el inicio."
      />
      <div className="wrap">
        <ActionLink href="/">Volver al inicio</ActionLink>
      </div>
    </div>
  );
}
