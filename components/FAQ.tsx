import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Does signing this petition cost any money?",
      answer: "No. Signing this petition is completely free. We are collecting information to demonstrate the scale of the problem to class-action attorneys and regulators."
    },
    {
      question: "Will signing this prevent me from hiring my own lawyer?",
      answer: "No. Signing this petition does not create an attorney-client relationship and does not prevent you from hiring your own private counsel. In fact, if you have a high-value claim, we encourage you to seek private counsel immediately."
    },
    {
      question: "Is my data safe?",
      answer: "We take privacy seriously. Your data is collected solely for the purpose of organizing potential legal action. We will not sell your data to third-party advertisers."
    },
    {
      question: "What happens after I sign?",
      answer: "You will be added to our confidential database. If a law firm agrees to take on this class action case, we will notify you via email with instructions on how to officially join the lawsuit."
    },
    {
      question: "Can I remain anonymous?",
      answer: "You can sign up with your initials if you are concerned about privacy, but attorneys eventually need your real name to verify you are a real client of Marble Law."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center">
              <HelpCircle className="mr-3 h-8 w-8 text-slate-400" />
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-white border-t border-slate-200">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};