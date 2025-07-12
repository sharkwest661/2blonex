'use client'
import React, { useState } from 'react'
import StorePostCart from './store-post-cart'

const StoreTab = () => {

    const [activeTab, setActiveTab] = useState('post')
    const [secondTab, setSecondTab] = useState(1)

    return (
        <section>
            <nav>
                <div class="container-fluid">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class={`nav-link ${activeTab === 'post' ? 'active' : ''}`} id="nav-post-tab" data-toggle="tab" onClick={() => setActiveTab('post')} role="tab" aria-controls="nav-post" aria-selected={activeTab === 'post' ? "true" : "false"}>Elanlar • 12</a>
                        <a class={`nav-link ${activeTab === 'payments' ? 'active' : ''}`} id="nav-payments-tab" data-toggle="tab" onClick={() => setActiveTab('payments')} role="tab" aria-controls="nav-payments" aria-selected={activeTab === 'payments' ? "true" : "false"}>Ödənişlər</a>
                    </div>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class={`tab-pane fade ${activeTab === 'post' ? 'show active' : ''}`} id="nav-post" role="tabpanel" aria-labelledby="nav-post-tab">
                    <div class="container-fluid">
                        <div class="post">
                            <form action="">
                                <div class="post__options">
                                    <div class="group">
                                        <div class="group__inner">
                                            <button type="button" class={`btn group__btn ${secondTab == 1 && "group__btn--active"}`} onClick={() => setSecondTab(1)}>
                                                Dərc olunmuş
                                                <span class="badge">8</span>
                                            </button>
                                            <button type="button" class={`btn group__btn ${secondTab == 2 && "group__btn--active"}`} onClick={() => setSecondTab(2)}>
                                                Müddəti başa çatmış
                                                <span class="badge">5</span>
                                            </button>
                                            <button type="button" class={`btn group__btn ${secondTab == 3 && "group__btn--active"}`} onClick={() => setSecondTab(3)}>
                                                Yoxlanılır
                                                <span class="badge">3</span>
                                            </button>
                                            <button type="button" class={`btn group__btn ${secondTab == 4 && "group__btn--active"}`} onClick={() => setSecondTab(4)}>
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
                                {
                                    secondTab == 1 && <div class="post__list">
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />

                                    </div>
                                }
                                {
                                    secondTab == 2 && <div class="post__list">
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                    </div>
                                }
                                {
                                    secondTab == 3 && <div class="post__list">
                                        <StorePostCart />
                                        <StorePostCart />
                                        <StorePostCart />
                                    </div>
                                }
                                {
                                    secondTab == 4 && <div class="post__list">
                                        <StorePostCart />
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
                <div class={`tab-pane fade ${activeTab === 'payments' ? 'show active' : ''}`} id="nav-payments" role="tabpanel" aria-labelledby="nav-payments-tab">
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
    )
}

export default StoreTab