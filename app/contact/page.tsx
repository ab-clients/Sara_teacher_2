import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Sara Abdelmeguid",
  description: "Get in touch with Sara for lessons, workshops and resources.",
};

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="paper p-8">
          <h1 className="text-3xl font-extrabold">Contact Me</h1>
          <p className="text-(--muted) mt-2">
            Have a question, want to book lessons, or request resources? Send a
            message below.
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
