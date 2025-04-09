
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I register my school on EdConnect?",
    answer: "School registration is simple. Click on the 'Register Your School' button, fill in your school details, and upload the curriculum topics you need assistance with. Our team will verify your information and activate your account within 24 hours."
  },
  {
    question: "What qualifications do volunteers need?",
    answer: "Volunteers should have subject expertise in the areas they wish to teach. While formal teaching experience is beneficial, it's not mandatory. We value subject knowledge, communication skills, and commitment to helping students. All volunteers undergo a basic screening process."
  },
  {
    question: "How are the teaching sessions conducted?",
    answer: "Sessions can be conducted either as live interactive classes (via our integrated video platform) or as pre-recorded lessons that students can access at any time. Schools can choose the format that works best for their needs and infrastructure."
  },
  {
    question: "Is there any cost for schools to use the platform?",
    answer: "EdConnect is completely free for government and Zilla Parishad schools. For private institutions, we have a nominal subscription fee that helps us maintain the platform and provide better services."
  },
  {
    question: "How is the quality of teaching ensured?",
    answer: "We maintain quality through our comprehensive feedback system. After each session, schools and students can rate and provide comments. Volunteers with consistently poor ratings undergo remedial training or may be removed from the platform if necessary."
  },
  {
    question: "Can volunteers teach in regional languages?",
    answer: "Yes! We encourage volunteers who can teach in regional languages. During registration, volunteers can indicate the languages they're comfortable teaching in, and schools can filter volunteers based on language preferences."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions about how EdConnect works? Find answers to commonly asked questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Still have questions? <a href="/contact" className="text-primary hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
