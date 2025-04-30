import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Recruo"
        width={48}
        height={48}
        className="mr-2"
      />
      <span className="font-outfit font-bold text-2xl">Recruo</span>
    </div>
  );
}