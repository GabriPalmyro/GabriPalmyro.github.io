import React from 'react'
import './testimonials.css'
import AVTR1 from '../../../assets/avatar_1.jpg'
import AVTR2 from '../../../assets/avatar_2.jpg'

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const data = [
  {
    avatar: AVTR1,
    name: 'Isadora Lopes',
    date: '24 de junho de 2022',
    review: 'Ótimo trabalho em equipe. Muito profissional e sempre ensinando e aprendendo junto com o time !'
  },
  {
    avatar: AVTR2,
    name: 'João Vitor Ribeiro',
    date: '16 de agosto de 2022',
    review: 'Estudei com o Gabriel e ele é um excelente aluno, muito dedicado e sempre realizou tarefas excpcionais. Qualquer empresa ganharia muito com ele.'
  },
]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Avaliações de clientes e colegas</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, date, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={'avatar_' + index} />
                </div>
                <h5 className='client__name'>{name}</h5>
                {/* <h4 className='client__date'>{date}</h4> */}
                <small className='cliente__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials