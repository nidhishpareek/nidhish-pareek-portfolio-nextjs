import "../styles/globals.css";
import "../styles/App.css";
import "../components/Contact/contact.css";
import "../components/index.css";
import "../components/Button/button.css";
import "../components/Heading/heading.css";
import "../components/Nav/switchcss.css";
import "../components/Portfolio/portfolio.css";
import "../components/Services/ServicesCard/services-card.css";
import "../components/Services/services.css";
import Head from "next/head";
const schemaData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Nidhish Pareek",
  jobTitle: "Full Stack Web Developer",
  url: "https://nidhish-pareek.netlify.app/",
  image:
    "https://nidhish-pareek.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2FNidhishPareek.ca649c93.jpeg?url=%2F_next%2Fstatic%2Fmedia%2FNidhishPareek.ca649c93.jpeg&w=1920&q=75",
  description:
    "Full Stack Web Developer with 3 years of experience. Expertise in React, Next.js, Node.js, and more.",
  skills: [
    "Next.js",
    "React.js",
    "Remix.js",
    "Node.js",
    "Express.js",
    "RESTful API",
    "GraphQL API",
    "Keystone.js CMS",
    "Elasticsearch",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma ORM",
    "NextAuth",
    "FusionAuth",
    "TypeScript",
    "JavaScript",
    "Redis",
    "Kafka",
    "Apache Superset",
    "Grafana",
    "PostHog",
    "Styled-Components",
    "Tailwind CSS",
    "Chakra UI",
    "MUI (Material-UI)",
    "Apache Airflow",
    "Python",
    "SQL",
    "AWS S3",
    "CI/CD",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
  ],
  sameAs: [
    "https://www.linkedin.com/in/nidhishpareek/",
    "https://github.com/nidhishpareek",
    "https://www.instagram.com/nidhishpareek/",
    "https://www.facebook.com/nidhishpareek",
  ],
};
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nidhish Pareek - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Nidhish Pareek is a Full Stack Web Developer with 3 years of experience. Expertise in React, Next.js, Node.js, Postgresql, Graphql and more. View projects and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Nidhish Pareek - Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Nidhish Pareek is a Full Stack Web Developer with 3 years of experience. Expertise in React, Next.js, Node.js, Postgresql, Graphql and more. View projects and skills."
        />
        <meta
          property="og:image"
          content="https://nidhish-pareek.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2FNidhishPareek.ca649c93.jpeg?url=%2F_next%2Fstatic%2Fmedia%2FNidhishPareek.ca649c93.jpeg&w=1920&q=75"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nidhish-pareek.netlify.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
