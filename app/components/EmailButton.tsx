interface EmailButtonProps {
  text: string;
  href?: string;
  style?: "dark" | "light" | "tertiary";
}

export default function EmailButton({
  text,
  href = "#",
  style = "dark",
}: EmailButtonProps) {
  const baseClasses =
    "inline-flex py-4 px-6 justify-center items-center rounded-[12px] text-center text-[14px] font-bold leading-[150%] tracking-[0.2px] no-underline";

  const styleClasses = {
    dark: "bg-tui-background-control-primary text-tui-invert-front-primary",
    light: "bg-tui-background-control-secondary text-tui-front-primary",
    tertiary:
      "border-[1.5px] border-tui-line-primary text-tui-front-accent bg-transparent",
  };

  return (
    <a href={href} className={`${baseClasses} ${styleClasses[style]}`}>
      {text}
    </a>
  );
}
