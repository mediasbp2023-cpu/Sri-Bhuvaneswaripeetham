import { DonateForm, categories } from "@/app/donate/page";
import { notFound } from "next/navigation";

type PageProps = {
  params: { category: string };
};

export default function ContributeCategoryPage({ params }: PageProps) {
  const { category } = params;
  // Allow common spelling variants for Aarjita/Aarjitha
  const aliasMap: Record<string, string> = {
    "arjita": "arjita-seva",
    "aarjita": "arjita-seva",
    "aarjitha": "arjita-seva",
    "arjita-seva": "arjita-seva",
    "aarjita-seva": "arjita-seva",
    "aarjitha-seva": "arjita-seva",
    "aarjitaa": "arjita-seva",
    "aarjitaa-seva": "arjita-seva",
  };
  const normalized = aliasMap[category] ?? category;
  const valid = categories.some((c) => c.id === normalized);
  if (!valid) return notFound();
  return <DonateForm defaultCategoryId={normalized} />;
}