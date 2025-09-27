"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setPending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send");

      toast({ title: "Message sent!", description: "Thanks for reaching out." });
      form.reset();
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="section section-padding">
      <div className="max-w-2xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-balance">Contact</h2>
        <p className="mt-3 text-center text-muted-foreground">Have a project in mind? Send me a message!</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
            <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
            <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
          </div>
          <div className="flex justify-center">
            <Button type="submit" disabled={pending} className="min-w-32 transition-transform hover:translate-y-[-1px]">
              {pending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
