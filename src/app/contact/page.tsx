import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contact Salt & Serendipity." };

export default function ContactPage() {
  return <section className="page-hero"><div className="shell">
    <p className="eyebrow">Contact</p><h1>Say <span className="serif">hello.</span></h1>
    <div className="contact-grid">
      <div><p>Questions, collaborations, wholesale, event ideas, and interesting introductions are all welcome.</p><p className="mt-8"><a className="button button-ghost" href="mailto:hello@saltandserendipity.com">hello@saltandserendipity.com</a></p></div>
      <form className="contact-form"><input required placeholder="Name" /><input required type="email" placeholder="Email" /><textarea required placeholder="What are you thinking?" /><button type="button" className="button">Send note</button></form>
    </div>
  </div></section>;
}
