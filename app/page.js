import './home.css'

export default function Home() {
  return (
    <>
     



 {/* Vídeo */}
<section>
  <div className="flex justify-center items-center min-h-screen bg-black p-6">
    <div className="relative w-full max-w-4xl" style={{ paddingTop: '56.25%' }}>

  <iframe
  src="https://www.youtube.com/embed/D2dsl4DEAWE?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0"
  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg pointer-events-none"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>


    </div>
  </div>
</section>

    </>
  );
}

