import Image from "next/image";
import type { Band } from "../types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article>
      <Image
        src={band.image}
        alt={band.name}
        width={300}
        height={200}
      />

      <h2>{band.name}</h2>
      <p>แนวเพลง: {band.genre}</p>
      <p>{band.info}</p>

      <h3>สมาชิก</h3>

      {band.members.map((member) => (
        <div key={member.name}>
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
          />

          <p>
            {member.name} - {member.role}
          </p>
        </div>
      ))}
    </article>
  );
}
