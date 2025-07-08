import { Layout } from '@/components/layout'
import React from 'react'
import './style.css'

const page = () => {
    return (
        <Layout>
            <main className='store-page'>
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
                    <div class="profile profile--secondary">
                        <div class="profile__cover" style={{ backgroundImage: "url('/img/store-bg.png')" }}>
                            <div class="profile__menu">
                                <div class="dropdown settings">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                    <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">
                                            Şəkli dəyiş
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            Sil
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile__inner">
                            <a class="btn profile__edit">
                                <img src="/img/edit-icon.svg" alt="" />
                                Məlumatları dəyiş
                            </a>
                            <div class="profile__info">
                                <div class="store">
                                    <div class="store__logo">
                                        <img src="/img/example/store-logo.png" alt="" />
                                    </div>
                                    <div>
                                        <p class="store__name store__name--large">World Telecom</p>
                                        <div class="store__categories">
                                            <span>Elektronika</span>
                                            <span>Mobil telefonlar</span>
                                            <span>Məişət texnikası</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="mb-15">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
                                <p class="profile__contact">
                                    <img src="/img/place-icon.svg" alt="place-icon" />
                                    Nizami ray., Aşıq Mollacümə küç. 19/21
                                </p>
                                <p class="profile__contact">
                                    <img src="/img/time-icon.svg" alt="time-icon" />
                                    Hər gün, 10:00–22:00
                                </p>
                                <div class="d-md-flex align-items-end justify-content-between">
                                    <p class="profile__contact">
                                        <img src="/img/tel-icon.svg" alt="tel-icon" />
                                        <a href="tel:">051 123 45 67</a> &semi;&nbsp;
                                        <a href="tel:">012 345 67 89</a>
                                    </p>
                                    <a href="" class="profile__video">
                                        Təlimat videosu
                                        <img src="/img/video-icon.svg" alt="video-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <nav>
                        <div class="container-fluid">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-link active" id="nav-post-tab" data-toggle="tab" href="#nav-post" role="tab" aria-controls="nav-post" aria-selected="true">Elanlar • 12</a>
                                <a class="nav-link" id="nav-payments-tab" data-toggle="tab" href="#nav-payments" role="tab" aria-controls="nav-payments" aria-selected="false">Ödənişlər</a>
                            </div>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-post" role="tabpanel" aria-labelledby="nav-post-tab">
                            <div class="container-fluid">
                                <div class="post">
                                    <form action="">
                                        <div class="post__options">
                                            <div class="group">
                                                <div class="group__inner">
                                                    <button type="button" class="btn group__btn">
                                                        Dərc olunmuş
                                                        <span class="badge">8</span>
                                                    </button>
                                                    <button type="button" class="btn group__btn">
                                                        Müddəti başa çatmış
                                                        <span class="badge">5</span>
                                                    </button>
                                                    <button type="button" class="btn group__btn group__btn--active">
                                                        Yoxlanılır
                                                        <span class="badge">3</span>
                                                    </button>
                                                    <button type="button" class="btn group__btn">
                                                        Dərc olunmamış
                                                        <span class="badge">1</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="d-md-flex justify-content-end mb-10">
                                                <a href="" class="btn btn--action btn--delete ml-md-10">
                                                    Elanı sil
                                                </a>
                                            </div>
                                        </div>
                                        <div class="post__list">
                                            <div class="post__item">
                                                <div class="post__img">
                                                    <img src="/img/example/post6.png" alt="" />
                                                    <div class="post__attributes">
                                                        <div class="custom-control custom-checkbox custom-checkbox--simple">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1" checked />
                                                            <label class="custom-control-label" for="customCheck1"></label>
                                                        </div>
                                                        <span class="post__vip" data-toggle="tooltip" data-placement="top" title="VIP elan"></span>
                                                        <span class="post__premium" data-toggle="tooltip" data-placement="top" title="Premium elan"></span>
                                                        <div class="dropdown settings">
                                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                                            <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">
                                                                    Menu1
                                                                </a>
                                                                <a class="dropdown-item" href="#">
                                                                    Menu2
                                                                </a>
                                                                <a class="dropdown-item" href="#">
                                                                    Menu3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post__info">
                                                    <a href="" class="post__store">
                                                        <img src="/img/example/seller.svg" alt="" />
                                                        <span>Kontakt Home</span>
                                                    </a>
                                                    <div class="px-5">
                                                        <a href="" class="post__title">Samsung Galaxy S12 16/256GB, Space Gray...</a>
                                                        <p>Bakı, 28.01.2021, 16:34</p>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="post__price">
                                                            2180 ₼
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <span class="post__feature" data-toggle="tooltip" data-placement="top" title="Barter mümkündür">
                                                                <img src="/img/barter.svg" alt="" />
                                                            </span>
                                                            <span class="post__feature" data-toggle="tooltip" data-placement="top" title="Kredit mümkündür">
                                                                <img src="/img/percent.svg" alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="post__item">
                                                <div class="post__img">
                                                    <img src="/img/example/post6.png" alt="" />
                                                    <div class="post__attributes">
                                                        <div class="custom-control custom-checkbox custom-checkbox--simple">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                            <label class="custom-control-label" for="customCheck2"></label>
                                                        </div>
                                                        <span class="post__vip" data-toggle="tooltip" data-placement="top" title="VIP elan"></span>
                                                        <div class="dropdown settings">
                                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                                            <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">
                                                                    Menu1
                                                                </a>
                                                                <a class="dropdown-item" href="#">
                                                                    Menu2
                                                                </a>
                                                                <a class="dropdown-item" href="#">
                                                                    Menu3
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post__info">
                                                    <div class="px-5">
                                                        <a href="" class="post__title">Samsung Galaxy S12 16/256GB, Space Gray...</a>
                                                        <p>Bakı, 28.01.2021, 16:34</p>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="post__price">
                                                            2180 ₼
                                                        </div>
                                                        <div class="d-flex align-items-center">
                                                            <span class="post__feature" data-toggle="tooltip" data-placement="top" title="Barter mümkündür">
                                                                <img src="/img/barter.svg" alt="" />
                                                            </span>
                                                            <span class="post__feature" data-toggle="tooltip" data-placement="top" title="Kredit mümkündür">
                                                                <img src="/img/percent.svg" alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-payments" role="tabpanel" aria-labelledby="nav-payments-tab">
                            <div class="container">
                                <div class="table-responsive mb-20">
                                    <table class="table table-striped table-payments sortable">
                                        <thead>
                                            <tr>
                                                <th><span>ELANIN ADI</span></th>
                                                <th><span>TƏYİNAT</span></th>
                                                <th><span>TARİX</span></th>
                                                <th><span>MƏBLƏĞ (₼)</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="modal-btn" data-toggle="modal" data-target="#payment-info">
                                                <td>Avtomobil üçün elektrik nasos Baseus inAuto Dynamic Eye Inflator Pump...</td>
                                                <td>İrəli çəkmə</td>
                                                <td>23.03.2021</td>
                                                <td>1.00</td>
                                            </tr>
                                            <tr class="modal-btn" data-toggle="modal" data-target="#payment-info">
                                                <td>Avtomobil üçün elektrik nasos Baseus inAuto Dynamic Eye Inflator Pump...</td>
                                                <td>VIP</td>
                                                <td>21.03.2021</td>
                                                <td>1.00</td>
                                            </tr>
                                            <tr class="modal-btn" data-toggle="modal" data-target="#payment-info">
                                                <td>Balans artırma</td>
                                                <td></td>
                                                <td>23.03.2021</td>
                                                <td class="topup">+60.00</td>
                                            </tr>
                                            <tr class="modal-btn" data-toggle="modal" data-target="#payment-info">
                                                <td>Avtomobil üçün elektrik nasos Baseus inAuto Dynamic Eye Inflator Pump...</td>
                                                <td>VIP</td>
                                                <td>23.03.2021</td>
                                                <td>1.00</td>
                                            </tr>
                                            <tr class="modal-btn" data-toggle="modal" data-target="#payment-info">
                                                <td>Balans artırma</td>
                                                <td></td>
                                                <td>23.03.2021</td>
                                                <td class="topup">+60.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="3">Cəmi 18 ödəniş</td>
                                                <td>37.00 ₼</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div class="more">
                                <button class="btn btn--more mx-auto">Daha çox göstər</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default page