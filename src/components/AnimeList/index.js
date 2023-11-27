import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <Image
              src={anime.images.webp.image_url}
              alt=""
              width={350}
              height={350}
              className="max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl p-4 text-md">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
