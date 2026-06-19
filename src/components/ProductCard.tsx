import Image from "next/image";

export default function ProcuctCard({ data }: { data: TypeProducts }) {
  return (
    <div>
      <Image
        src={data.image}
        alt={data.title}
        width={500}
        height={300}
        unoptimized
        className="size-12"
      />
      <div>
        <h1>{data.title}</h1>
        <p>{data.price}</p>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
