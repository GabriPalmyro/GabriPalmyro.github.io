import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from './TimelineElement';
import './timeline.css';

function ExperienceTimeline() {
  return (
    <section id='job-experience'>
      <h5>Trabalhos</h5>
      <h2>Minha Experiência</h2>
      <VerticalTimeline
          lineColor={'#4DB5FF'}
      >
        <TimelineItem
          date={"OCT, 2021 - MAR, 2023"}
          description={
          `Fui responsável pela criação de diversos módulos no aplicativo Clube.on, como: módulo de eventos, módulo de pagamento com PIX, módulo de reservas.
          Desenvolvi um sistema web utilizando Flutter para acesso dos associados utilizando apenas o navegador.`
          }
          icon={null}
          subtitle={'Desenvolvedor Júnior Flutter'}
          title={'WBC Sistemas'}
        />
        <TimelineItem
          date={"MAR, 2023 - AGO, 2023"}
          description={
            `No período desenvolvi um sistema de ecommerce para importação utilizando Next.js para otimização de SEO e indexação nos motores de busca.
          Fui responsável pela estruturação do aplicativo SESI Vida utilizando Flutter e Getx para gerenciamento de rotas e de estados.`
          }
          icon={null}
          subtitle={'Desenvolvedor Frontend Pleno'}
          title={'WBC Sistemas'}
        />
        <TimelineItem
          date={"AGO, 2023 - NOV, 2023"}
          description={
            `Fui responsável pela criação do aplicativo 'Omni Saúde App' até a sua versão estável utilizando Flutter para o desenvolvimento mobile.

            O aplicativo foi integrado com sistemas de pagamento com PIX, leitor de código de barras, leitor de QRCode, leituras em tempo real utilizando o Supabase.

            Gerenciamento de rotas e de estados utilizando Getx, foi utilizado o Sentry para analytics e autenticação com o Supabase`
          }
          icon={null}
          subtitle={'Desenvolvedor Flutter Pleno'}
          title={'Omni Saúde App'}
        />
        <TimelineItem
          date={"NOV, 2023 - PRESENTE"}
          description={
            `Faço o parte do time de Gestão de Carteira e sou responsável por algumas features na nova home de investimento do App.`
          }
          icon={null}
          subtitle={'Software Engineering II'}
          title={'XP Inc.'}
        />
      </VerticalTimeline>
    </section>
  );
}

export default ExperienceTimeline;