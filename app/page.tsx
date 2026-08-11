import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import CategoryFilter from "@/components/sections/CategoryFilter";
import FeaturedItems from "@/components/sections/FeaturedItems";
import StorySection from "@/components/sections/StorySection";
import Reviews from "@/components/sections/Reviews";
import LocationSection from "@/components/sections/LocationSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <CategoryFilter />
      <FeaturedItems />
      <StorySection />
      <Reviews />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
