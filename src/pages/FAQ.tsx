
import { useState } from "react";
import { faqData } from "@/data/mockData";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((itemId) => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mt-1">Find answers to common questions</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for questions..."
            className="h-12 w-full rounded-md border border-input bg-background pl-10 pr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4 animate-scaleIn">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors"
                  onClick={() => toggleItem(faq.id)}
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div
                  className={`bg-muted/30 px-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems.includes(faq.id)
                      ? "max-h-40 py-4"
                      : "max-h-0 py-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg font-medium">No matching questions found.</p>
              <p className="text-muted-foreground mt-1">
                Try adjusting your search terms.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
