import Image from "next/image";

interface EmailHeaderProps {
  title: string;
  description: string;
  heroImage?: string;
}

export default function EmailHeader({
  title,
  description,
  heroImage,
}: EmailHeaderProps) {
  return (
    <div className="flex max-w-[480px] flex-col justify-center items-start gap-6 rounded-[20px]">
      <div className="flex flex-col items-center self-stretch">
        {/* Logo */}
        <div className="flex flex-col items-start self-stretch">
          <div className="flex pt-7 pb-2 flex-col items-start gap-2.5 self-stretch">
            <Image
              src="/images/tabby-logo.png"
              alt="Tabby"
              width={76}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Hero Image */}
          {heroImage && (
            <div className="flex pt-2 pb-4 flex-col items-start gap-2.5 self-stretch">
              <div className="self-stretch rounded-[24px] h-[164px] overflow-hidden relative">
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="flex pt-2 flex-col items-start gap-2 self-stretch">
          <p className="self-stretch text-[26px] font-bold leading-[130%] tracking-[0.26px] text-tui-front-primary text-balance">
            {title}
          </p>
          <p className="self-stretch text-[16px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-primary">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
