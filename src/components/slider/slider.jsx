// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styles from './slider.module.css'

// import 'swiper/css';

// function Sliders(){

//     const imgs = [
//         {id : '1', image: 'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg'},
//         {id : '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMNfDVTVaxgBbRjt2ytnUn-okXDLD5hwkimVXK0b-Fg&s'},
//         {id: '3', image: 'https://images.pexels.com/photos/1101726/pexels-photo-1101726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
//         {id: '4', image: 'https://images.pexels.com/photos/10959264/pexels-photo-10959264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     ]
//   return (
//     <>
//     <div className={styles.container}>
//         <h1 className={styles.title}> Slider com react</h1>
//         <Swiper
//         slidesPerView={2}
//         pagination={{ clickable: true}}
//         navigation
//         >

        
//            {imgs.map( (item)=>(
//             <SwiperSlide key={item.id}>
//                 <img
//                 src={item.image}
//                 alt='Slider'
//                 className={styles.slideItem}
//                 />
//             </SwiperSlide>
//            ))}
//         </Swiper>
//         </div>
//     </>
//   );
// };

// export default Sliders