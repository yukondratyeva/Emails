import Image from "next/image";

export default function EmailFooter() {
  return (
    <div className="flex max-w-[480px] flex-col items-start gap-6 self-stretch">
      {/* Help Block */}
      <div className="flex flex-col items-start self-stretch">
        <div className="flex py-[30px] px-6 items-start gap-[25px] self-stretch rounded-[20px] bg-tui-background-general">
          <div className="flex flex-col justify-center items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <p className="self-stretch text-[18px] font-bold leading-[120%] tracking-[0.2px] text-tui-front-primary">
                {"Got questions?"}
              </p>
              <p className="self-stretch text-[16px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-accent">
                Get support and answers to frequently asked questions at
                helpcenter.tabby.ai
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col items-start gap-4 self-stretch px-4">
        <div className="flex items-center gap-4 self-stretch">
          <Image
            src="/images/tabby-logo.png"
            alt="Tabby"
            width={60}
            height={24}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <p className="self-stretch text-[12px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary">
            This email was sent to you as a registered user of Tabby. If you
            have questions, visit our Help Center.
          </p>
          <p className="self-stretch text-[12px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary">
            Tabby FZ-LLC, In5 Tech, Dubai Internet City, Dubai, UAE
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[12px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[12px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-[12px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary underline"
          >
            Unsubscribe
          </a>
        </div>
      </div>
    </div>
  );
}
