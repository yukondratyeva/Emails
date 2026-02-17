interface EmailTextBlockProps {
  header?: string;
  subhead?: string;
  children?: React.ReactNode;
}

export default function EmailTextBlock({
  header,
  subhead,
  children,
}: EmailTextBlockProps) {
  return (
    <div className="flex pb-6 flex-col items-start gap-6 self-stretch">
      <div className="flex flex-col items-start gap-2 self-stretch">
        {header && (
          <p className="self-stretch text-[18px] font-bold leading-[120%] tracking-[0.2px] text-tui-front-primary">
            {header}
          </p>
        )}
        {subhead && (
          <p className="self-stretch text-[16px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-primary">
            {subhead}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
