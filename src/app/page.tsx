import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Brain, Lightbulb, Users } from 'lucide-react';

// import apollo13 from '../../public/story-images/apollo13.jpg';
import knight from '../../public/story-images/knight.jpg';
import lila from '../../public/story-images/lila.png';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-b from-primary/10 to-background py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col items-center text-center space-y-6 mt-4'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
              <span className='text-primary'>Plot</span>Pact
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-3xl'>
              Interactive Storytelling with Human-AI Constraint Negotiation
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <Link href='/story/1' className='group'>
                <Button size='lg' className='gap-2'>
                  Try Demo <ArrowRight className='h-4 w-4' />
                </Button>
              </Link>

              <Link href='/#problem' className='group'>
                <Button size='lg' variant='outline' className='gap-2'>
                  Learn More <BookOpen className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-background'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Featured Stories</h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Explore these collaborative human-AI stories created with PlotPact
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* The Knight Story */}
            <Link href='/story/1' className='group'>
              <div className='bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col'>
                <div className='relative h-64 w-full'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                  <Image
                    src={lila}
                    alt='Lila holding a box'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6 flex-grow'>
                  <h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
                    {/* The Last Shield: A Knight&apos;s Stand */}
                    The Box with the Brass Dial
                  </h3>
                  <p className='text-muted-foreground'>
                    Lila discovers a mysterious wooden box on her doorstep,
                    adorned with a brass dial and an ominous note: &quot;Turn
                    the dial to the right number to save him.&quot; With no clue
                    who &quot;him&quot; refers to—her brother, her father, or
                    someone else—panic grips her. As she turns the box over,
                    faint numbers etched along its edges hint at a hidden code.
                    Racing against an unknown clock, she must decipher the
                    message before it&apos;s too late. The story unfolds as a
                    tense puzzle, blending suspense and urgency, where every
                    second counts and the right number holds the key to
                    salvation.
                  </p>
                </div>
                <div className='px-6 pb-6 pt-2'>
                  <div className='inline-flex items-center text-primary font-medium'>
                    Continue story <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                </div>
              </div>
            </Link>

            {/* Dragon story */}
            <Link href='/story/2' className='group'>
              <div className='bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col'>
                <div className='relative h-64 w-full'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                  <Image
                    src={knight}
                    alt='Knight facing a dragon'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6 flex-grow'>
                  <h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
                    A Knight&apos;s Stand
                  </h3>
                  <p className='text-muted-foreground'>
                    When the ancient dragon Malgrath descends upon the peaceful
                    village of Oakendale, retired knight Sir Brannen takes up
                    his rusted armor for one final battle to protect his home.
                    Experience the journey of a broken hero who must rediscover
                    his courage as he confronts impossible odds, devising a
                    desperate plan that will determine the fate of everyone he
                    holds dear.
                  </p>
                </div>
                <div className='px-6 pb-6 pt-2'>
                  <div className='inline-flex items-center text-primary font-medium'>
                    Continue story <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                </div>
              </div>
            </Link>

            {/* Apollo 13 */}
            {/* <Link href='/learn' className='group'>
              <div className='bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col'>
                <div className='relative h-64 w-full'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                  <Image
                    src={apollo13}
                    alt='Apollo 13 spacecraft'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6 flex-grow'>
                  <h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
                    The Apollo 13 Mission
                  </h3>
                  <p className='text-muted-foreground'>
                    Apollo 13 was NASA&apos;s seventh crewed mission in the
                    Apollo space program, launched on April 11, 1970. The
                    spacecraft carried a crew of three astronauts: James Lovell,
                    Jack Swigert, and Fred Haise. It was intended to be the
                    third mission to land humans on the Moon. Fate had different
                    plans.
                  </p>
                </div>
                <div className='px-6 pb-6 pt-2'>
                  <div className='inline-flex items-center text-primary font-medium'>
                    Read story <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-primary/5' id='problem'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>
              The Problem We&apos;re Solving
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              The advent of LLMs has caused many people to stop thinking about
              their answers and has affected their creativity.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card>
              <CardContent className='pt-6'>
                <div className='mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center'>
                  <Brain className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  Diminished Creativity
                </h3>
                <p className='text-muted-foreground'>
                  Overreliance on AI can impede creative brainstorming and
                  original thinking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6'>
                <div className='mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  Disconnected Narratives
                </h3>
                <p className='text-muted-foreground'>
                  Current AI-assisted storytelling systems often lack meaningful
                  collaborative interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='pt-6'>
                <div className='mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center'>
                  <Lightbulb className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>
                  Passive Consumption
                </h3>
                <p className='text-muted-foreground'>
                  Users often passively consume AI-generated content rather than
                  actively participating in creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-background'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Approach</h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              PlotPact creates a unique collaborative environment where humans
              and AI co-author stories by enforcing constraints on each other.
            </p>
          </div>

          <div className='bg-card rounded-lg shadow-lg overflow-hidden'>
            <div className='p-6 md:p-8'>
              <h3 className='text-2xl font-bold mb-4'>How It Works</h3>

              <div className='space-y-6'>
                <div className='flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-background'>
                  <div className='flex-shrink-0 w-full md:w-24 font-semibold text-primary'>
                    Step 1
                  </div>
                  <div className='flex-grow'>
                    <p className='font-medium'>Human writes a sentence</p>
                    <p className='text-muted-foreground mt-1'>
                      &quot;John really wants to go scuba diving.&quot;
                    </p>
                    <div className='mt-2 text-sm text-green-600'>Accepted</div>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-background'>
                  <div className='flex-shrink-0 w-full md:w-24 font-semibold text-primary'>
                    Step 2
                  </div>
                  <div className='flex-grow'>
                    <p className='font-medium'>
                      AI writes the next sentence with a constraint
                    </p>
                    <p className='text-muted-foreground mt-1'>
                      &quot;But he is afraid of deep water.&quot;
                    </p>
                    <div className='mt-2 text-sm text-green-600'>
                      Accepted with constraint enforced
                    </div>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-background'>
                  <div className='flex-shrink-0 w-full md:w-24 font-semibold text-primary'>
                    Step 3
                  </div>
                  <div className='flex-grow'>
                    <p className='font-medium'>
                      Human attempts to continue the story
                    </p>
                    <p className='text-muted-foreground mt-1'>
                      &quot;One day he was swimming in Lake Ontario.&quot;
                    </p>
                    <div className='mt-2 text-sm text-red-600'>
                      Rejected as John is afraid of deep water
                    </div>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 p-4 border rounded-lg bg-background'>
                  <div className='flex-shrink-0 w-full md:w-24 font-semibold text-primary'>
                    Step 4
                  </div>
                  <div className='flex-grow'>
                    <p className='font-medium'>
                      Human revises with constraint in mind
                    </p>
                    <p className='text-muted-foreground mt-1'>
                      &quot;To overcome his fear of deep water, he first made
                      himself comfortable in shallow water.&quot;
                    </p>
                    <div className='mt-2 text-sm text-green-600'>Accepted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h3 className='text-xl font-bold'>
                <span className='text-primary'>Plot</span>Pact
              </h3>
              <p className='text-muted-foreground'>
                Interactive Storytelling with Human-AI Constraint Negotiation
              </p>
            </div>
            <div className='flex gap-4'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                About
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Features
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='mt-8 text-center text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} PlotPact. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
