import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Rocket, Users, School, CalendarDays, Clock3, MapPin, CheckCircle2,
  Sparkles, Trophy, Star, ArrowRight, BookOpenText, ShieldCheck,
  Lightbulb, Coins, Presentation, MessageSquare, Code2,
} from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm shadow-sm bg-white/70 backdrop-blur-sm">
    {children}
  </span>
);

const Feature = ({ icon: Icon, title, children }) => (
  <div className="flex gap-3">
    <div className="mt-1"><Icon className="h-5 w-5" aria-hidden /></div>
    <div>
      <h4 className="font-semibold text-base md:text-lg">{title}</h4>
      <p className="text-sm md:text-base text-muted-foreground">{children}</p>
    </div>
  </div>
);

function scrollToEnroll() {
  document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
}

export function GoogleFormEnroll() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  // Listen for iframe load event to show thank you message
  useEffect(() => {
    const iframe = document.getElementById("hidden_iframe");
    if (!iframe) return;
    const handler = () => setSubmitted(true);
    iframe.addEventListener("load", handler);
    return () => iframe.removeEventListener("load", handler);
  }, []);

  if (submitted) {
    return (
      <div className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
        Thanks! We’ve received your interest. We’ll get back to you shortly.
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action="https://docs.google.com/forms/d/e/1FAIpQLSfs6CvLDhmJyn-ufBvtmvpokTwklsvyh9uoewoQS934bqo9wQ/formResponse"
      method="POST"
      target="hidden_iframe"
      className="grid gap-3"
    >
      <input name="entry.996326909" placeholder="Parent name" required className="h-10 rounded-md border px-3" />
      <input name="entry.1924727914" type="email" placeholder="Email" required className="h-10 rounded-md border px-3" />
      <input name="entry.456613422" placeholder="Phone / WhatsApp" className="h-10 rounded-md border px-3" />
      <input name="entry.2045828393" placeholder="Student name & age" required className="h-10 rounded-md border px-3" />
      <textarea name="entry.2112294450" placeholder="Any questions or notes?" className="min-h-[96px] rounded-md border p-3" />
      <button type="submit" className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:opacity-90">
        Submit Interest
      </button>
    </form>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900">
      {/* Add this line at the very top inside your main div */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{display: "none"}} title="hidden_iframe" />
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-xl bg-indigo-600 text-white"><Rocket className="h-4 w-4"/></div>
            <span className="font-semibold">AI Entrepreneurs Program</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#overview" className="hover:text-indigo-600">Overview</a>
            <a href="#curriculum" className="hover:text-indigo-600">Curriculum</a>
            <a href="#outcomes" className="hover:text-indigo-600">Outcomes</a>
            <a href="#instructor" className="hover:text-indigo-600">Instructor</a>
            <a href="#schedule" className="hover:text-indigo-600">Schedule & Pricing</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden md:inline-flex" onClick={scrollToEnroll}>
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" className="pt-10 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
            <Pill>
              <Sparkles className="h-4 w-4 mr-2 text-indigo-600"/> 10-week in‑person • Lisbon • Ages 12–16
            </Pill>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Turn Curiosity into Creations — with AI
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose">
              A hands-on after‑school program where teens learn to build with Generative AI, practice Stanford‑style Design Thinking,
              and launch real mini‑ventures—culminating in a public showcase.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="bg-emerald-600">Max 25 seats</Badge>
              <Badge variant="secondary">$390 total • 10% sibling discount</Badge>
              <Badge variant="outline">Wednesdays 18:00 or Saturdays 10:00 (Lisbon)</Badge>
            </div>
            <div className="mt-6 flex gap-3">
              <Button size="lg" onClick={scrollToEnroll}>
                Apply Now <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
              {/* <Button size="lg" variant="outline">Download Flyer</Button> */}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              No prior coding required • 100% project-based • English-friendly international cohort
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale: 0.98}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} viewport={{once:true}}>
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Code2 className="h-5 w-5"/> What students build</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl p-4 border bg-white">
                  <h4 className="font-semibold">AI‑assisted Apps</h4>
                  <p className="text-sm text-muted-foreground">From idea to prototype with Lovable/Bolt, shipped online.</p>
                </div>
                <div className="rounded-xl p-4 border bg-white">
                  <h4 className="font-semibold">Mini‑Ventures</h4>
                  <p className="text-sm text-muted-foreground">Real users, real feedback, and simple business models.</p>
                </div>
                <div className="rounded-xl p-4 border bg-white">
                  <h4 className="font-semibold">Brand & Pitch</h4>
                  <p className="text-sm text-muted-foreground">Logos, landing pages, 2‑minute pitch videos.</p>
                </div>
                <div className="rounded-xl p-4 border bg-white">
                  <h4 className="font-semibold">Showcase Portfolio</h4>
                  <p className="text-sm text-muted-foreground">A shareable page of all demos, assets, and learnings.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Audience Tabs */}
      <Section id="overview" className="pt-16">
        <Tabs defaultValue="parents" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="parents" className="text-sm md:text-base">For Parents</TabsTrigger>
            <TabsTrigger value="students" className="text-sm md:text-base">For Students</TabsTrigger>
            <TabsTrigger value="schools" className="text-sm md:text-base">For Schools</TabsTrigger>
          </TabsList>
          <TabsContent value="parents" className="mt-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6 grid md:grid-cols-3 gap-6">
                <Feature icon={ShieldCheck} title="Safe & Structured">Clear weekly goals, code of conduct, and ethical AI usage.</Feature>
                <Feature icon={CheckCircle2} title="Visible Progress">Weekly demos and a living portfolio you can follow at home.</Feature>
                <Feature icon={Coins} title="Practical Value">Early exposure to AI skills, problem‑solving, and entrepreneurship.</Feature>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="students" className="mt-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6 grid md:grid-cols-3 gap-6">
                <Feature icon={Sparkles} title="Build Cool Stuff">Apps, games, logos, and videos—ship from day one.</Feature>
                <Feature icon={Users} title="Team Up">Form teams, get feedback, and learn fast through iteration.</Feature>
                <Feature icon={Trophy} title="Showtime">Present at a public showcase and earn your certificate.</Feature>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schools" className="mt-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6 grid md:grid-cols-3 gap-6">
                <Feature icon={BookOpenText} title="Designed for Terms">10 concise weeks, 2‑hour sessions, clear outcomes per week.</Feature>
                <Feature icon={Presentation} title="Portfolio Evidence">Shareable artifacts and rubric scores for each learner.</Feature>
                <Feature icon={School} title="No IT Hassle">Cloud tools; bring laptops. Zero heavy installs.</Feature>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" className="pt-20">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">10‑Week Curriculum</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {w:1,t:"Build your first AI app",d:"Mentimeter kick‑off, Shark Tank inspo, Lovable/Bolt prototype, team feedback."},
            {w:2,t:"Design Thinking field sprint",d:"Observe/interview local businesses, synthesize needs, paper prototype."},
            {w:3,t:"Learn from success & failure",d:"Marshmallow challenge; analyze real startups; snapshot business models."},
            {w:4,t:"Team formation + research",d:"Narrow to 2 ideas; AI‑assisted user & competitor research; differentiation."},
            {w:5,t:"Define → Ideate → Prototype",d:"Create interview script, collect 10 responses, feature cutline, v0 prototype."},
            {w:6,t:"MVP & simple business model",d:"Ship MVP link (Replit/GitHub Pages), pricing hypothesis, unit economics."},
            {w:7,t:"Branding & go‑to‑market",d:"Logo in Canva, 20‑sec intro video, positioning one‑liner, landing teaser."},
            {w:8,t:"Sales experiments (ethical)",d:"Run small tests; track sign‑ups/objections; iterate product & pricing."},
            {w:9,t:"Pitchcraft + polish",d:"Refine MVP and assets; two rounds of pitches with rubric‑based feedback."},
            {w:10,t:"Showcase & celebration",d:"Parent audience, live demos, certificates, awards, next‑steps plan."},
          ].map((item)=> (
            <Card key={item.w} className="rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">Week {item.w}</Badge>
                  <span>{item.t}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">{item.d}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section id="outcomes" className="pt-20">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle2 className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">What You’ll Gain</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">Creator Mindset</h4><p className="text-sm text-muted-foreground">Shift from consumer to builder through weekly shipping and feedback.</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">AI Fluency</h4><p className="text-sm text-muted-foreground">Prompting, prototyping, and practical tools for real‑world use.</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">Business Basics</h4><p className="text-sm text-muted-foreground">User research, MVPs, positioning, pricing, and simple unit economics.</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">Team Skills</h4><p className="text-sm text-muted-foreground">Collaboration, communication, and iterative problem‑solving.</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">Portfolio</h4><p className="text-sm text-muted-foreground">A shareable page of demos, assets, and pitch recording.</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6"><h4 className="font-semibold mb-2">Confidence</h4><p className="text-sm text-muted-foreground">Public showcase with parents and guests; certificate ceremony.</p></CardContent></Card>
        </div>
      </Section>

      {/* Instructor */}
      <Section id="instructor" className="pt-20">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">Your Instructor</h2>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-20 w-20"><AvatarFallback>AN</AvatarFallback></Avatar>
            <div className="grid gap-2">
              <h3 className="text-xl font-semibold">Arjun Nair</h3>
              <div className="text-sm text-muted-foreground max-w-prose">
                Co‑founder of Great Learning — delivering AI & tech programs for 12+ years in 170+ countries to 10M+ learners.
                Passionate about helping teens become creators and leaders.
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Pill><ShieldCheck className="h-4 w-4 mr-1"/> Safe, ethical AI</Pill>
                <Pill><Star className="h-4 w-4 mr-1"/> Project‑based</Pill>
                <Pill><CalendarDays className="h-4 w-4 mr-1"/> 10 weeks</Pill>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Schedule & Pricing (Enroll) */}
      <Section id="schedule" className="pt-20">
        <div className="flex items-center gap-2 mb-6">
          <CalendarDays className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">Schedule & Pricing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl"><CardContent className="p-6 grid gap-2">
            <h4 className="font-semibold flex items-center gap-2"><Clock3 className="h-4 w-4"/> Sessions</h4>
            <p className="text-sm text-muted-foreground">2 hours once a week • Choose: Wed 18:00 or Sat 10:00 (Lisbon)</p>
            <h4 className="font-semibold flex items-center gap-2 mt-4"><MapPin className="h-4 w-4"/> Location</h4>
            <p className="text-sm text-muted-foreground">Lisbon (central). Details shared upon enrollment.</p>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-6 grid gap-2">
            <h4 className="font-semibold">Tuition</h4>
            <div className="text-3xl font-bold">$390</div>
            <p className="text-sm text-muted-foreground">Covers all 10 weeks • 10% sibling discount • Max 25 seats</p>
            <div className="mt-2"><Badge variant="secondary">Scholarships by request</Badge></div>
          </CardContent></Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6 grid gap-3">
              <h4 className="font-semibold">Enroll</h4>
              {/* Hidden iframe keeps the page from navigating away on submit */}
              <GoogleFormEnroll />
            </CardContent>
          </Card>
          
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="social-proof" className="pt-20">
        <div className="flex items-center gap-2 mb-6">
          <Star className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">What Families Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {["My child came home excited every week.", "The final showcase was outstanding.", "They actually built and shipped something!"]
            .map((quote, i) => (
              <Card key={i} className="rounded-2xl"><CardContent className="p-6 text-sm text-muted-foreground">“{quote}”</CardContent></Card>
            ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="pt-20 pb-24">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5"/>
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do students need prior coding experience?</AccordionTrigger>
            <AccordionContent>No. We start with visual tools and AI‑assisted builders. Curious beginners do great here.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What do students need to bring?</AccordionTrigger>
            <AccordionContent>A laptop, charger, and willing mindset. We provide the rest.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you ensure safety and ethics?</AccordionTrigger>
            <AccordionContent>We teach a short responsible‑AI module and follow a clear code of conduct, including privacy‑first research and parent consent for public posts.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What if my child misses a class?</AccordionTrigger>
            <AccordionContent>We share weekly recaps and project checklists so they can catch up quickly.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Footer */}
      <footer className="border-t py-12 mt-12">
        <Section id="cta">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to reserve a seat?</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-2">Seats are limited to 25. Apply now to choose your preferred time: Wednesday 18:00 or Saturday 10:00.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Button size="lg" onClick={scrollToEnroll}>Apply Now</Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = "mailto:hello@yourdomain.com"}>Ask a Question</Button>
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} AI Entrepreneurs Program — Lisbon</div>
        </Section>
      </footer>
    </div>
  );
}