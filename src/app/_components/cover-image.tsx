import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="relative w-full aspect-[1300/630]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm object-cover", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        fill
        sizes="(min-width: 1280px) 1200px, (min-width: 780px) 80vw, 100vw"
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
