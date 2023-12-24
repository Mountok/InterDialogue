import React from 'react'
import './HomeStyle.css'
const Home = () => {
  return (
    <main className='main'>
      <section className='presentation'>
        <div className="title">
          <p>InterDialogue</p>
          <p>Профессиональное консалтинговое агентство, основанное бизнесменами с реальным практическим опытом.</p>
        </div>
      </section>
      <section className='services'>
        <div className="services_blocks">
          <div className="service">
            <img src="/svgs/consulting.svg" alt="" />
            <p className='service_title'>Консалтинг</p>
            <p className='service_text'>Проектный менеджмент и управление процессами. Инвестиционный, правовой, налоговый и кадровый консалтинг.
            </p>
          </div>
          <div className="service">
            <img src="/svgs/audit.svg" alt="" />
            <p className='service_title'>Аудит</p>
            <p className='service_text'>
            Анализ вашего бизнеса и выявление ключевых проблем: аудит системы управления, продаж и финансов.
            </p>
          </div>
          <div className="service">
            <img src="/svgs/business.svg" alt=""/>
            <p className='service_title'>Бизнес</p>
            <p className='service_text'>Помощь в регистрации или приобретении бизнеса. Комплексное сопровождение деятельности на территории страны.</p>
          </div>
          <div className="service">
            <img src="/svgs/investment.svg" alt="" />
            <p className='service_title'>Инвестиции
</p>
            <p className='service_text'>Изучение возможностей для выгодных и стабильных вариантов вложения средств, позволяющих сохранить и приумножить капитал.</p>
          </div>
        </div>
      </section>
      <section className='about'>

        <div className="about_block">

          

          <div className="about_content">

            <video className='about_video' id='videoTag' controls>
              <source src="/video/442832334.mp4" type='video/mp4'/>
            </video>

          </div>

          <div className="about_content">
            <p>Бизнес-услуги в Европе</p>
            <p>Открыть фирму или купить готовый бизнес в Европе в первую 
              очередь означает вести дела в стране со стабильной законодательной 
              базой и низкими рисками. Вам гарантированы безопасность, качественный сервис и легальный доход.</p>
            <p>Мы, являясь действующими бизнесменами, обладаем большим опытом открытия и сопровождения бизнеса. И мы готовы поделиться этим опытом. С нами старт и ведение вашего бизнеса в Европе будет успешным и динамичными.</p>
          </div>

          <div className="about_content_2">
            <div className="about_content_2_block">
              <div className="about_content_2_block_header">
                <p>Зачем бизнес в Европе?</p>
              </div>
              <div className="about_content_2_block_text">
                <p>
                Преимуществами ведения бизнеса в Европе являются постоянство законодательной базы, гибкое налогообложение и низкий уровень коррупции. 
                Зарегистрировать фирму в Европе можно и нерезиденту (гражданину РФ), однако в большинстве случаев требуется резидент-управляющий. 
                Регистрация компании в Европе является возможностью получения вида на жительства в ЕС для Вас и Вашей семьи. 
                Европейские компании во всем мире имеют положительную репутацию, соответственно, возрастает уровень доверия со стороны потребителей и поставщиков.
                </p>
                <img src="/images/business.jpg" alt="" />
              </div>
            </div>
            
            <div className="about_content_2_block">
              <div className="about_content_2_block_header">
                <p>Почему именно мы?</p>
              </div>
              <div className="about_content_2_block_text">
              <img src="/images/flag-avstrii.jpg" alt="" />
                <p>
                Основой философии нашей компании являются ее ценности. 
                Мы обозначаем конкретные приоритеты, в первую очередь это: 
                интересы клиентов, акционеров, сотрудников и руководства. 
                Профессионализм, прозрачность и компромисс в интересах всех 
                сторон являются основой долгосрочного процветания компании и ее клиентов. Так-же 
                все наши проекты финансируются и поддерживаються Австрией.
                </p>
                
              </div>
            </div>

          </div>

        </div>

      </section>
    </main>
  )
}
export default Home