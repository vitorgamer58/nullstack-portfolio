import Nullstack, { NullstackClientContext } from 'nullstack'

import './Home.css'
import Education from './components/education/Education'
import OpenSourceContribs from './components/openSourceContribs/OpenSourceContribs'
import PersonalProjects from './components/personalProjects/PersonalProjects'
import Summary from './components/summary/Summary'
import WorkExperiences from './components/workExperience/WorkExperience'

interface HomeProps {
  greeting: string
}

class Home extends Nullstack<HomeProps> {

  prepare({ project, page, greeting }: NullstackClientContext<HomeProps>) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name}`
  }

  render() {
    return (
      <>
        <section>
          <article>
            <Summary />
            <WorkExperiences />
            <Education />
            <PersonalProjects />
            <OpenSourceContribs />
          </article>
        </section>
      </>
    )
  }

}

export default Home
