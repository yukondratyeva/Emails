interface IconListItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function IconListItem({
  icon,
  title,
  subtitle,
}: IconListItemProps) {
  return (
    <div className="flex min-h-[40px] items-center gap-4 self-stretch">
      {/* Lead Icon */}
      <div className="flex justify-center items-center w-10">
        <div className="flex justify-center items-center shrink-0 w-10 h-10 rounded-full bg-tui-background-general">
          {icon}
        </div>
      </div>
      {/* Text Content */}
      <div className="flex items-center gap-4 flex-1">
        <div className="flex flex-col justify-center items-start flex-1">
          <div className="flex items-center self-stretch">
            <p className="flex-1 text-[16px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-primary">
              {title}
            </p>
          </div>
          {subtitle && (
            <div className="flex items-center self-stretch">
              <p className="flex-1 text-[14px] font-normal leading-[150%] tracking-[0.2px] text-tui-front-secondary">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
