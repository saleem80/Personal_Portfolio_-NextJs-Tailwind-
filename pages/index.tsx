import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Saleem's Portfolio</title>
      </Head>
        <Header/>
      <section id="hero" className=' snap-start'>
        <Hero/>
      </section>
      <section id='about' className=' snap-center'>
        <About/>
      </section>
        <section id='experience' className='snap-center'>
            <WorkExperience/>
        </section>
      {/* Skills */}
      <section id='skills' className='snap-center'>
            <Skills/>
      </section>

      <section id='projects' className='snap-center'>
        <Projects/>
      </section>

      {/* Contact Me */}

    </div>
  )
}
