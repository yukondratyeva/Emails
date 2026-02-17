import EmailHeader from "./components/EmailHeader";
import EmailTextBlock from "./components/EmailTextBlock";
import EmailDivider from "./components/EmailDivider";
import EmailButton from "./components/EmailButton";
import IconListItem from "./components/IconListItem";
import EmailFooter from "./components/EmailFooter";

function PaintbrushIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1919"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1919"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1919"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1919"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A1919"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

export default function NewDesignEmail() {
  return (
    <main className="flex justify-center py-8 px-4">
      <div className="flex flex-col items-start max-w-[480px] w-full bg-tui-background-card rounded-[20px] p-6 gap-0">
        {/* Header */}
        <EmailHeader
          title="We've launched a brand new design"
          description="Your Tabby app just got a major upgrade. We've redesigned the entire experience from the ground up to make shopping, payments, and managing your money easier than ever."
          heroImage="/images/new-design-hero.jpg"
        />

        <EmailDivider />

        {/* What's New Section */}
        <EmailTextBlock
          header="What's new"
          subhead="Here are the highlights of our refreshed design that make your experience smoother and more intuitive:"
        />

        {/* Icon List - Features */}
        <div className="flex pb-6 flex-col items-start gap-2 self-stretch">
          <IconListItem
            icon={<PaintbrushIcon />}
            title="A cleaner, modern look"
            subtitle="Fresh visuals and a refined interface that's easy on the eyes"
          />
          <IconListItem
            icon={<SmartphoneIcon />}
            title="Simplified navigation"
            subtitle="Find what you need faster with a streamlined layout"
          />
          <IconListItem
            icon={<ZapIcon />}
            title="Faster performance"
            subtitle="Snappier transitions and quicker load times throughout the app"
          />
          <IconListItem
            icon={<ShieldIcon />}
            title="Enhanced security"
            subtitle="New security features to keep your account and data safe"
          />
          <IconListItem
            icon={<SparklesIcon />}
            title="Personalized experience"
            subtitle="Tailored recommendations and a home screen that adapts to you"
          />
        </div>

        <EmailDivider />

        {/* CTA Section */}
        <EmailTextBlock
          header="Experience it yourself"
          subhead="Open the app to explore the new design. Make sure you're running the latest version to enjoy all the improvements."
        />

        <div className="flex flex-col items-start gap-3 self-stretch pb-6">
          <EmailButton text="Open the app" href="#" style="dark" />
          <EmailButton text="See what's changed" href="#" style="tertiary" />
        </div>

        <EmailDivider />

        {/* Footer */}
        <EmailFooter />
      </div>
    </main>
  );
}
