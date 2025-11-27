import logo from "@/assets/b19f003c-7a2f-458d-8a4c-03f9b3343c27_removalai_preview.png";

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo = ({
  className = "w-full max-w-[230px]",
  alt = "HairVante - Premium Hair Transplant Turkey",
}: LogoProps) => (
  <img
    src={logo}
    alt={alt}
    className={`h-auto select-none object-contain ${className}`}
    loading="eager"
  />
);

export default Logo;
