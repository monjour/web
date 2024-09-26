
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-mj-purple">
      <img // eslint-disable-line @next/next/no-img-element
        src="/landing1600x720.jpg"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="Foto de unos novios saludando hacia atrás mientras se van en un coche."
      />
      <div className="hidden md:flex  py-[30px] ">
        <div className="mx-auto w-full p-[75px] text-xl ">
          <img // eslint-disable-line @next/next/no-img-element
            src="/window-one.JPG"
            alt="Cartel de bienvenida a una boda"
            className="rounded-t-full max-w-[500px]"
          />
          <p className="font-gvibes text-mj-white text-3xl py-[20px] text-center">Nuestras bodas</p>
        </div>
        <div className="mx-auto w-full p-[75px]">
          <img // eslint-disable-line @next/next/no-img-element
            src="/window-two.JPG"
            alt="Novios besandose"
            className="rounded-t-full max-w-[500px]"
          />
          <p className="font-gvibes text-mj-white text-3xl py-[20px] text-center">Testimonios de nuestras parejas</p>
        </div>
        <div className="mx-auto w-full p-[75px]">
          <img // eslint-disable-line @next/next/no-img-element
            src="/window-three.JPG"
            alt="Globitos"
            className="rounded-t-full max-w-[500px]"
          />
          <p className="font-gvibes text-mj-white text-3xl py-[20px] text-center">Nuestros eventos</p>
        </div>
      </div>
    </main>
  );
}
