import { MarketingHero } from "../../organisms/MarketingHero/MarketingHero";

export const MarketingPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MarketingHero />
      <section id="detail-1">
        <div className="container"></div>
      </section>
    </main>
  );
};
