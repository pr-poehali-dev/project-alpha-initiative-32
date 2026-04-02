import SeminarHeader from "@/components/seminar/SeminarHeader";
import SeminarHero from "@/components/seminar/SeminarHero";
import SeminarFeatured from "@/components/seminar/SeminarFeatured";
import SeminarPromo from "@/components/seminar/SeminarPromo";
import SeminarFooter from "@/components/seminar/SeminarFooter";

const Seminar = () => {
  return (
    <main className="min-h-screen">
      <SeminarHeader />
      <SeminarHero />
      <SeminarFeatured />
      <SeminarPromo />
      <SeminarFooter />
    </main>
  );
};

export default Seminar;
