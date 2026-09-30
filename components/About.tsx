import Section from "@/components/ui/Section";
import ExternalLink from "@/components/ui/ExternalLink";

export function About() {
  return (
    <Section id="about" heading="About" width="prose">
      <div className="space-y-5 text-lg text-ink-muted">
        <p>
          I&rsquo;m a Master&rsquo;s student in Computer Science at North Carolina State
          University, where I hold a 4.0 GPA, and a Research Associate at the iEXCEL Lab. I work
          at the point where machine learning research turns into software people can actually use.
        </p>
        <p>
          At iEXCEL, I train graph neural networks to check the quality of crowdsourced scientific
          data, and I bring pretrained computer vision models into the lab&rsquo;s web platform. I
          also designed a topic modeling pipeline that compares five embedding models across thousands of publications to map how research connects across a university. Half the work
          is asking the right question. The other half is making the answer run reliably.
        </p>
        <p>
          Before this, I spent two years across research labs and startups. I built Python
          pipelines that reconcile messy records from CSV, XML and JSON sources, LLM tools that
          generate quizzes automatically, object detection models, and complete web products with
          ReactJS, FastAPI and Postgres. I also coauthored two published papers, one on NFT
          copyright law and one on data security in marketing.
        </p>
      </div>
    </Section>
  );
}

export default About;
