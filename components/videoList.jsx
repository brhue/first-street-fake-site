import Image from 'next/image'

export default function VideoList({ videos }) {
  return (
    <>
      {videos.map((video) => {
        return (
          <div key={video.id} className="mb-10 grid lg:grid-cols-2 lg:gap-4">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl leading-9 text-blackish mb-[22px]">{video.title}</h2>
              {/* Some of the descriptions have HTML in them for formatting. This gets them to display properly. */}
              <p
                className="text-lg md:text-xl lg:text-[22px] leading-7"
                dangerouslySetInnerHTML={{ __html: video.description }}
              />
            </div>
            <div className="mb-[22px] order-first lg:order-last">
              <div className="aspect-video relative object-cover">
                <Image src={video.thumbnail_large} layout="fill" alt={video.title} />
                <a href={video.url}>
                  <div className="bg-playbtn bg-no-repeat bg-center absolute inset-0" />
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
