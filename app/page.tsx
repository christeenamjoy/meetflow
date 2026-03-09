import Image from "next/image";
import Link from "next/link";

const features: {icon: string; title: string; description: string}[] = [
  {
    icon: "/images/calendar.png",
    title: "Easy Scheduling",
    description:
      "Share your availability and let people book meetings instantly.",
  },
  {
    icon: "/images/event.png",
    title: "Custom Event Types",
    description:
      "Share your availability and let people book meetings instantly.",
  },
  {
    icon: "/images/schedule.png",
    title: "Booking Dashboard",
    description: "Manage upcoming meetings and cancellations in one place.",
  },
];

const howItWorks: {step: string; description: string}[] = [
  {step: "Sign Up", description: "Create your free Schedulrr account"},
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Scheduling made
            <span className="text-blue-600"> effortless</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            MeetFlow helps you share your availability, book meetings, and
            manage your schedule without the back-and-forth emails.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Get Started
            </Link>

            {/* <Link
              href="#features"
              className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              Learn More
            </Link> */}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/dashboard.png"
            width={600}
            height={400}
            alt="MeetFlow dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage meetings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How MeetFlow works</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {howItWorks.map((step, i) => (
            <Step
              key={i}
              number={i + 1}
              title={step.step}
              text={step.description}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">Start scheduling smarter today</h2>

        <p className="mt-4 text-lg opacity-90">
          Join thousands of professionals using MeetFlow
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          Get Started Free
        </Link>
      </section>
    </main>
  );
}

function FeatureCard({title, description, icon}: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
      <Image
        src={icon}
        width={80}
        height={80}
        alt={title}
        className="mx-auto mb-4"
      />

      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function Step({number, title, text}: any) {
  return (
    <div className="p-6">
      <div className="w-12 h-12 mx-auto bg-blue-100 text-white flex items-center justify-center rounded-full font-bold">
        <span className="text-blue-600 font-bold text-xl">{number}</span>
      </div>

      <h3 className="mt-4 font-semibold text-lg">{title}</h3>

      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
}
