import { Layout } from '@/components/layout'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <Layout>
            <main>
                <section class="pb-0 d-md-none">
                    <div class="container-fluid">
                        <div class="search">
                            <form action="">
                                <div class="input-group search__group">
                                    <input type="text" class="form-control search__input" placeholder="Android TV" />
                                    <div class="input-group-append search__append">
                                        <button class="search__btn" type="button"></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="jumbotron">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-10 mx-auto">
                                    <div class="jumbotron__inner">
                                        <div class="jumbotron__info">
                                            <p class="jumbotron__title">Bolbolda bol satış</p>
                                            <p class="mb-30">Ayda əlavə 3000 satış realdır, sadəcə bizə qoşulmaq kifayətdir!</p>
                                            <Link href="/store/register" class="btn btn--white">Mağaza qeydiyyatı</Link>
                                        </div>
                                        <div class="jumbotron__img">
                                            <img src="/img/store.png" alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-10 mx-auto">
                                <div class="advantage">
                                    <div class="advantage__item">
                                        <img src="/img/advantage1.svg" alt="" />
                                        <p class="advantage__title">İlk həftə pulsuz! Sonra hər ay cəmi 10 AZN</p>
                                        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                                    </div>
                                    <div class="advantage__item">
                                        <img src="/img/advantage2.svg" alt="" />
                                        <p class="advantage__title">90 gün aktiv olan mağaza elanları</p>
                                        <p>Aecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet.</p>
                                    </div>
                                    <div class="advantage__item">
                                        <img src="/img/advantage3.svg" alt="" />
                                        <p class="advantage__title">Bütün elanların incə idarəetməsi</p>
                                        <p>Zucenas tempus, tellus eget condimentum, sem quam semper libero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-10 mx-auto">
                                <h1>Bizimlə işləyirlər</h1>
                                <div class="clients">
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client1.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client2.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client3.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client4.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client5.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client1.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client2.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client3.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client4.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="clients__item">
                                        <a href="">
                                            <img src="/img/example/clients/client5.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="jumbotron jumbotron--secondary">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-10 mx-auto">
                                    <div class="jumbotron__inner">
                                        <div class="jumbotron__info jumbotron__info--secondary">
                                            <p class="jumbotron__title">Pulsuz qeydiyyat</p>
                                            <p class="mb-30">Ayda əlavə 3000 satış realdır, sadəcə bizə qoşulmaq kifayətdir!</p>
                                            <Link href="/store/register" class="btn">Mağaza qeydiyyatı</Link>
                                        </div>
                                        <div class="jumbotron__img">
                                            <img src="/img/store2.png" alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default page