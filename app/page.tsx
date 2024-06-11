import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-mj-purple2">
      <Image
        src="/landing-photo.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt="Foto de unos novios saluando hacia atrás mientras se van en un coche."
      />
    </main>
  );
}
