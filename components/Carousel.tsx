import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-background-100">
        <div className="carousel w-5/6">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              src="/last_year (1).jpg"
              alt="Slide 2"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" className="btn btn-circle"></a>
              <a href="#slide2" className="btn btn-circle"></a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              src="/last_year (2).jpg"
              alt="Slide 3"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              src="/last_year (9).jpg"
              alt="Slide 4"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image
              src="/last_year (4).jpg"
              alt="Slide 5"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <Image
              src="/last_year (5).jpg"
              alt="Slide 6"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <Image
              src="/last_year (6).jpg"
              alt="Slide 7"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide7" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <Image
              src="/last_year (7).jpg"
              alt="Slide 8"
              className="rounded"
              width={6000}
              height={4000}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
