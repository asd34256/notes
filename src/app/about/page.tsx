import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Dean 커리어 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          만들고 싶으면 개발해요 <br />
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          리콘랩스 (-Now) <br />
          백두테크놀로지스 (-2021) <br />
          Easi6 (-2020) <br />
          상화 (2017-2018)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p><strong>Languages</strong></p>
        <p>JavaScript, TypeScript, C#, C++, Kotlin, Python, Swift</p>
        <p><strong>Web Frontend Toolset</strong></p>
        <p>React.js, Next.js, jQuery</p>
        <p><strong>Backend Frameworks</strong></p>
        <p>Node.js (Express), Spring Framework (Kotlin), WinForms (C#), Unity (C#), MFC (C++)</p>
        <p><strong>Basic Knowledge</strong></p>
        <p>
          Mobile Development: Android (Kotlin), iOS (SwiftUI), Flutter<br />
          Databases: MySQL, PostgreSQL, MongoDB, DynamoDB<br />
          Messaging Queues: SQS, RabbitMQ<br />
          Cloud & DevOps: AWS (SQS, AppConfig, Parameter Store, etc.), GCP, Firebase, Docker, Kubernetes<br />
          Version Control: Git, Bitbucket<br />
          IDEs: Visual Studio Code, IntelliJ
        </p>
      </section>
    </>
  );
}
