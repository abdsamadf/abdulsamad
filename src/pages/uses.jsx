import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Abdul Samad</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I often get asked about the things I use to build software and stay productive (or at least, appear productive). Here’s a list of all my favorite stuff - maybe you’ll find something useful too!"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Intel Core i3-10100, 16GB RAM, Nvidia GTX 650">
              This is my main laptop. The new M1 chips are amazing, and I’ve been extremely impressed with the performance of this little machine.
            </Tool>
            <Tool title="Intel Core i5-2400, 8GB RAM, Nvidia GT 610">
              This is my desktop PC. It’s nothing fancy, but it gets the job done.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              This is my go-to code editor. It’s fast, has great plugin support, and is constantly being improved. I loved using Sublime Text in the past, but VS Code has won me over.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I started using Figma just for design work, but it’s quickly become my go-to tool for everything. The collaboration features are amazing - I can’t recommend it enough!
            </Tool>
            <Tool title="Canva">
              I use Canva for all of my design work. It’s simple, easy to use, and has a ton of templates and assets to help you get started.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Google Calendar">
              I try to stay as organized as possible, and Google Calendar is my tool of choice. I use it to track my work schedule, appointments, and deadlines.
            </Tool>
            <Tool title="Notion">
              Notion is my second brain. I use it for everything from project management to taking notes. It’s an extremely powerful tool, and I can’t recommend it enough.
            </Tool>
            <Tool title="ChatABC">
              I recently started using ChatABC, and it’s quickly become one of my favorite tools. It helps me to get simple coding tasks done quickly, and focus on the more important stuff.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
