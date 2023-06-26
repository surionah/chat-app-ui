import Image from "next/image";

interface UsernameProps {
  label: string;
}

export default function Username({ label }: UsernameProps) {
  return (
    <div className="flex gap-2">
      <Image
        className="rounded-2xl"
        src="https://fakeimg.pl/300/"
        width={30}
        height={30}
        alt="username"
      />
      <p className="text-black dark:text-white">{label}</p>
    </div>
  );
}
