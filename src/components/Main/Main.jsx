import React from 'react'
import { useSelector } from 'react-redux'
import './Main.css'

const Main = () => {
    const {name} = useSelector(state => state)

    return (
        <div className="main-page">
            <nav>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Разработка</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Бизнес</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Финансы и бухгалтерский учет</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">ИТ и ПО</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Офисное программное обеспечение</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Личностный рост</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Дизайн</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Маркетинг</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Здоровье и фитнес</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Музыка</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <section>
                    <div className="billboard">
                        <img src="https://img-a.udemycdn.com/notices/featured_banner/image_udlite/1999ee6d-47cd-42f2-baca-747713a0228b.jpg?Yfo_j6DMJHpQGgnBfFGqcBKClKzMTz4Gbxf2PGwomubOKLhcpR-pZdK6R9GHlLopb8iyQcFymT8BexSTkPmN9QZhPihlJh7joqtWl_OB6xA8ebMOc6_s1Qe1h_VQpxgdgnPMQR2Az9CJFVIEKW-CZ-oP1Yo6mBWuaTg6D2YXCCtrxs4l1Bi4GCvFV3U" alt="billboard" />
                        <div className="billboard-content">
                            <h1 className="billboard-title">
                                Стремитесь к большему
                            </h1>
                            <p className="billboard-text">
                                Знания помогают оставаться на шаг впереди. Получите актуальные навыки и произведите впечатление.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="learn">
                        <div className="learn-upper">
                            <h2 className="learn-header">Начните учиться, {name}</h2>
                            <a className="learn-lectures" href="/#">Мое обучение</a>
                        </div>
                        <div className="learn-lower">
                            <a className="learn-block" href="/#">
                                <div className="block-wrapper">
                                    <img src="https://mp4-a.udemycdn.com/2020-04-08_09-52-21-a0a8ff43bff1d10a27159039ca59f170/thumb-1.jpg?qkGz1IljG9M0bPN0FVm1yZhzFyosyyy5EWSH9hc9BegomEfq8QhpEMmbitCFtyrB5pnvfzeOpha_hV2GncDC2tMOWI166ggakFZZA_fs2RKz6Q9eU0AjXoQFiibW8gg3MQbfZ2FfIWERvnZ0CWViKG5HJnSwq9bNTg8OMt_LRQ" alt="lecture" />
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <div className="block-wrapper block-wrapper-pad">
                                    <div className="block-header">NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</div>
                                    <div className="block-subheader">373. Fetching Lists of Posts</div>
                                    <div className="block-progress">
                                        Лекция • <span className="progress-text">6 мин</span>
                                    </div>
                                </div>
                            </a>
                            <a className="learn-block" href="/#">
                                <div className="block-wrapper">
                                    <img src="https://mp4-a.udemycdn.com/2018-10-11_14-30-34-dc6a1da803b9deafd3f2766195e9b9c8/thumb-1.jpg?_X769x53alMovz2BNtlRbzXxD8LjVQJIPLEk628KDoSjwMnjGlP8vQzJNwd60QuHQCr1ZBEII9hlrtdZKfT1fziGMEKHxkDXOdnnapWD-FHzeOB3MMmFDNmG-hnab8lU6O-fEUl6ojdD0eMBha2jozSMAqQYKqZAkeiityttjA" alt="lecture" />
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <div className="block-wrapper block-wrapper-pad">
                                    <div className="block-header">Полный курс по JavaScript + React - с нуля до результата</div>
                                    <div className="block-subheader">20. Объекты, деструктуризация объектов (ES6)</div>
                                    <div className="block-progress">
                                        Лекция • <span className="progress-text">24 мин</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="recomendation">
                        <h2 className="recomendation-header">Для дальнейшего изучения</h2>
                        <h3 className="recomendation-subheader">Рекомендовано для вас</h3>
                        <div className="card-container">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/995016_ebf4_3.jpg?GBXRZzmgrm-SOLxOb45bXPe-oaqJWuIkVdj4Lpr3sKx1FAEBs9jWmv9cfBAawjOxLH67_hPXR7eoC4DbKFLQNGJLM-iplZJ1gma9HaQW73mY15mE3CoPGGgEUw836pE" alt="" />
                                </div>
                                <div className="card-descr">Vue - The Complete Guide (w/ Router, Vuex, Composition API)</div>
                                <p className="card-author">Maximilian Schwarzmüller</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">46 630</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/2508942_11d3_3.jpg?Z8uP8jBZTfpe8EPfMFNHUk7wL2rmOxFcaoKnMtlpTiXsaqG0KapI3WdurchncwXeR_fX2d5IF6e1KUz9HWnzdr9QnONqbvXl2uavIXMkNmoLCJbX-oF8Wnm3iFhV1qBp" alt="" />
                                </div>
                                <div className="card-descr">JavaScript - The Complete Guide 2021 (Beginner + Advanced)</div>
                                <p className="card-author">Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller</p>
                                <div className="card-course">
                                    <span className="raiting">4,6</span>
                                    <span className="count">14 095</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1436092_2024_4.jpg?7LkHvf-lk-1MAAm0NiRryPOYaw8HgD7q0E6T7lWavoyr69Bg-OnY1c8TfC9NsaWkXDqKjAxMHpul2FXPiHlLpYKxdPFxQ_y2xdYX42GrQ-TC6ImiachEnxeG45DiSa72" alt="" />
                                </div>
                                <div className="card-descr">React Native - The Practical Guide [2021 Edition]</div>
                                <p className="card-author">Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-high"><span>С наивысшим рейтингом</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/705264_caa9_11.jpg?ArE1JyBvUVP0vloIngdm_A2IaCjJJ7ClRENPyuWLWiOruuHrjt764_1BuK3l85RxaDRQRNPsxek7cGSIhv56bjTCjglRoPo2AE1_-pHFfMgiAQt9gEVEGArmLWrddl-p" alt="" />
                                </div>
                                <div className="card-descr">Modern React with Redux [2020 Update]</div>
                                <p className="card-author">Stephen Grider</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>

                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg?kDg_MyIXSuVU6VH8aNFVk7jvzbf85NB19JwHdsa8xkTrDhgum9qqpBhdYUUDUWq7jid-_-H2cZW0ttC2A5245F6nkJW_eGXwJdmDuFjO770nXAT3-N9b891TmwxQhMSj" alt="" />
                                </div>
                                <div className="card-descr">Advanced CSS and Sass: Flexbox, Grid, Animations and More!</div>
                                <p className="card-author">Stephen Grider</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                        </div>
                        <h3 className="recomendation-subheader">Темы, рекомендованные вам</h3>
                        <div className="popular-container">
                            <div className="popular-item"> 
                                <span className="popular-name">Next.js</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">React.js</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">React Native</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">GraphQl</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">MERN Stack</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">Firebase</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">Разработка мобильных приложений</span>
                            </div>
                            <div className="popular-item"> 
                                <span className="popular-name">Redux Framework</span>
                            </div>
                        </div>
                        <h3 className="recomendation-subheader">Студенты просматривают</h3>
                        <div className="card-container">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1352468_3d97_7.jpg?i4ZxmI2_b5qziPtGwDMHHaYg6I5VsGVwEAXwTDRvy6GhainiCHy8xp_0LWJkJD_NGVghau3bAisCVW0WkWhuholqaxJ2HAI1pmrg1Ig6_1P6neUluiCdYr7ez6kL8BLJ" alt="" />
                                </div>
                                <div className="card-descr">Master Microservices with Spring Boot and Spring Cloud</div>
                                <p className="card-author">in28Minutes Official</p>
                                <div className="card-course">
                                    <span className="raiting">4,6</span>
                                    <span className="count">26 630</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-b.udemycdn.com/course/240x135/2365628_0b60_8.jpg?secure=PMeZTRDfVI4tvRXb82Rgvg%3D%3D%2C1620008306" alt="" />
                                </div>
                                <div className="card-descr">Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</div>
                                <p className="card-author">Andrei Neagoie, Yihua Zhang</p>
                                <div className="card-course">
                                    <span className="raiting">4,6</span>
                                    <span className="count">14 095</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1409142_1879_8.jpg?It7WecmTv7jhHxg84Q-Fyl3ubAEv_TN_7X7YNQl4DHpb7Z4eUzpVnLAJLiXpo6AwSqkKZvn2PaE7MfiEwGUJP-ZdYERx0BIIfxrVf2ICZ_qah5hstI63fr4vErnMXkcS" alt="" />
                                </div>
                                <div className="card-descr">The Coding Interview Bootcamp: Algorithms + Data Structures</div>
                                <p className="card-author">Stephen Grider</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">89,99 $</div>
                                <div className="card-high"><span>С наивысшим рейтингом</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1466612_bead_2.jpg?EpV-BvPwOn5g2ivPvUVRk80_cOGf6Z6r5KuF9zFWVEBsxd0L-0-aSzEIcEL9Ay4AjRkykAWblRleEANAe_Q9FgjnKtvfLvMN9AmllZ-x4g_x0AK7obpFL56Gb1kzL5U8" alt="" />
                                </div>
                                <div className="card-descr">Ethereum and Solidity: The Complete Developer's Guide</div>
                                <p className="card-author">Stephen Grider</p>
                                <div className="card-course">
                                    <span className="raiting">4,5</span>

                                    <span className="count">12 908</span>
                                </div>
                                <div className="card-price">94,99 $</div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-b.udemycdn.com/course/240x135/1455016_0b2d_2.jpg?secure=oPBJZFT32pdquqPzo5oK1g%3D%3D%2C1620013764" alt="" />
                                </div>
                                <div className="card-descr">Build an app with ASPNET Core and Angular from scratch</div>
                                <p className="card-author">Neil Cummings</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">19 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                        </div>
                        <h3 className="recomendation-subheader">Лучшие курсы в разделе Веб-разработка</h3>
                        <div className="card-container">
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/2196488_8fc7_7.jpg?TRbABnO4Bv5OKyYGqxIbKLQ5hPnkjWALnTSXXJtQ5Wgjesi8VOaGVb00TcxRU3o4573KKASpVsT33AMC2Pxah_r2hPnr0X86vi-lUn1iVJ2gsrvirbOnLDsx8JFtkfMa" alt="" />
                                </div>
                                <div className="card-descr">Ultimate AWS Certified Solutions Architect Associate 2021</div>
                                <p className="card-author">Stephane Maarek | AWS Certified Solutions Architect & Developer Associate</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">72 630</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg?7HgTR1huz83skea5D6BrxCbSmKbxOVD_xr-jutJakedRh2Vqlw6-F26JVTQJOX64V6mrc2dh28gpcJf95E8LaqGUXvcu1UwU_7zTNajl70IuGZIlX0HaQjjJ_E8FApQb" alt="" />
                                </div>
                                <div className="card-descr">The Data Science Course 2021: Complete Data Science Bootcamp</div>
                                <p className="card-author">365 Careers, 365 Careers Team</p>
                                <div className="card-course">
                                    <span className="raiting">4,6</span>
                                    <span className="count">14 095</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/857010_8239_2.jpg?sbEUH6LNXfCi4ali_FH8KLs5rq3FnxK7tdLN_EBWNo1_3H8OAC7fY1AfeKMz2rIJco4Gnv9LFWfHFWCuH3zr2oILvm3entqqvYHI5Ove-6kXnFlRD4W3LyQkV6hqcnA" alt="" />
                                </div>
                                <div className="card-descr">Learn Ethical Hacking From Scratch</div>
                                <p className="card-author">Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/382002_5d4a.jpg?pNe6oj93U7pCroQopWdzymsBWGMa6Y9YggDd9f8c3MgQFZur06g2FKdJHoguRGss3Qz64txPRhY_a67hxFZtFU4uyWcDo5JUjpcwSDODhxsa--AexLvWlnmYRqqq" alt="" />
                                </div>
                                <div className="card-descr">C# Basics for Beginners: Learn C# Fundamentals by Coding</div>
                                <p className="card-author">Mosh Hamedani</p>
                                <div className="card-course">
                                    <span className="raiting">4,5</span>

                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">159,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                            <div className="card-item">
                                <div className="card-img">
                                    <img src="https://img-a.udemycdn.com/course/240x135/2776760_f176_5.jpg?ZTSlEtY9nyf-SCIZzt5yZCsNjYWDPJhS9iii_w-nUtc29d2YlqvqB1cYMJzWAe9RWnOEP-wW-evrgYfaZ_SGq9oFTZxAVwslelY4BSTXv8tCt9FUZB5pTsC7fWoo1TGH" alt="" />
                                </div>
                                <div className="card-descr">100 Days of Code - The Complete Python Pro Bootcamp for 2021</div>
                                <p className="card-author">Dr. Angela Yu</p>
                                <div className="card-course">
                                    <span className="raiting">4,7</span>
                                    <span className="count">67 908</span>
                                </div>
                                <div className="card-price">129,99 $</div>
                                <div className="card-best"><span>Лидер продаж</span></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
             {/* <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 70 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="u399-star-rating-mask--34" data-purpose="star-rating-mask">
                                            <rect x="0" y="0" width="90%" height="100%" fill="white"></rect>
                                        </mask>
                                        <g class="star-rating--star-filled--3D4Ee" mask="url(#u399-star-rating-mask--34)" data-purpose="star-filled">
                                            <use xlinkHref="#icon-rating-star" width="14" height="14" x="0"></use>
                                            <use xlinkHref="#icon-rating-star" width="14" height="14" x="14"></use>
                                            <use xlinkHref="#icon-rating-star" width="14" height="14" x="28"></use>
                                            <use xlinkHref="#icon-rating-star" width="14" height="14" x="42"></use>
                                            <use xlinkHref="#icon-rating-star" width="14" height="14" x="56"></use>
                                        </g>
                                        <g fill="transparent" class="star-rating--star-bordered--2QFon" stroke-width="2" data-purpose="star-bordered">
                                            <use xlinkHref="#icon-rating-star" width="12" height="12" x="1" y="1"></use>
                                            <use xlinkHref="#icon-rating-star" width="12" height="12" x="15" y="1"></use>
                                            <use xlinkHref="#icon-rating-star" width="12" height="12" x="29" y="1"></use>
                                            <use xlinkHref="#icon-rating-star" width="12" height="12" x="43" y="1"></use>
                                            <use xlinkHref="#icon-rating-star" width="12" height="12" x="57" y="1"></use>
                                        </g>
                                    </svg> */}
        </div>
    )
}


                                   

export { Main }