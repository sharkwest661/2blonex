import { Layout } from '@/components/layout'
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
                                    <input type="text" class="form-control search__input" placeholder="Android TV"/>
                                        <div class="input-group-append search__append">
                                            <button class="search__btn" type="button"></button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-7 mx-auto">
                                <h1>Məlumatların redaktəsi</h1>
                                <form action="">
                                    <div class="pb-15">
                                        <h2>Mağaza məlumatları</h2>
                                        <div class="form-group">
                                            <label for="">Loqo şəkli</label>
                                            <div class="file">
                                                <div class="file__rapper">
                                                    <div class="file__icon">
                                                        <img src="/img/file-icon.svg" alt=""/>
                                                            <input class="file__input" type="file" multiple=""/>
                                                            </div> 
                                                            <div class="d-md-flex">
                                                                <div class="file__list file__list--secondary">
                                                                    <div class="file__item ui-state-default">
                                                                        <img src="/img/example/file1.png" alt=""/>
                                                                            <a href="" class="file__delete"></a>
                                                                    </div>
                                                                    <div class="file__add ui-state-default ui-state-disabled">
                                                                        <input class="file__input" type="file" multiple=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="pt-10 pl-md-4 mb-20 mb-lg-0">
                                                                    <a href="" class="btn btn--action btn--small btn--edit mb-10">
                                                                        Dəyiş
                                                                    </a>
                                                                    <a href="" class="btn btn--action btn--small btn--delete mb-10">
                                                                        Elanı sil
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <span class="file__info text-left">Yalnız 1 şəkil, ağ fon üzərində. Optimal ölçü: 500×500px.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="store-name">Mağazanın adı</label>
                                                <input type="text" name="" id="store-name" class="form-control" value="World Telecom"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="category">Fəaliyyət istiqaməti</label>
                                                <select name="" id="category" class="selectpicker" multiple>
                                                    <option value="1">Nəqliyyat</option>
                                                    <option value="2" selected>Elektronika</option>
                                                    <option value="3" selected>Ərzaq</option>
                                                    <option value="4">Xidmətlər</option>
                                                    <option value="5">Kosmetika</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="bio">Bio</label>
                                                <div class="textarea-group">
                                                    <textarea name="" id="bio" class="form-control form-textarea" rows="5" maxlength="3000">Çox babat telefondu. arada bir dinamiki xarab olur dişimlə sıxıram telefonu düzəlir.</textarea>
                                                    <small class="textarea-counter"><span>0</span> hərf</small>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="city">Şəhər</label>
                                                <select name="" id="city" class="selectpicker">
                                                    <option value="1" selected>Bakı</option>
                                                    <option value="2">Bakı2</option>
                                                    <option value="3">Bakı3</option>
                                                    <option value="4">Bakı4</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="address">Ünvan</label>
                                                <input type="text" name="" id="address" class="form-control" value="Nizami ray., Aşıq Mollacümə küç. 19/21"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="map-link">Xəritə linki</label>
                                                <input type="url" name="" id="map-link" class="form-control" value="https://www.google.com/maps/place/WorldTelecom/@40.3741508,49.8416086,17z/data=!3m1!4b1!4m5!3m4!1s0x40307da5c0713051:0x70a5ea1f211fdb5a!8m2!3d40.3741464!4d49.8437964"/>
                                            </div>
                                            <div class="form-group phoneNum">
                                                <label for="">Telefon nömrələri</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" value="051 123 45 67"/>
                                                        <div class="input-group-append">
                                                            <button class="input-group-btn"><img src="/img/delete_gray-icon.svg" alt=""/></button>
                                                        </div>
                                                </div>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" data-inputmask="'mask': '099 999 99 99'"/>
                                                        <div class="input-group-append">
                                                            <button class="input-group-btn"><img src="/img/delete_gray-icon.svg" alt=""/></button>
                                                        </div>
                                                </div>
                                                <a href="" class="btn btn--icon phoneNum__btn">
                                                    <img src="/img/add-icon.svg" alt=""/>
                                                        Telefon əlavə et
                                                </a>
                                            </div>
                                            <div class="form-group schedule">
                                                <label>İş vaxtı</label>
                                                <div class="schedule__item">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                            <label class="custom-control-label" for="customCheck1">Hər gün eyni vaxt</label>
                                                    </div>
                                                    <div class="input-group schedule__time">
                                                        <input type="text" class="form-control datetimepicker-input time" value="09:00" />
                                                        <span class="schedule__separator"></span>
                                                        <input type="text" class="form-control datetimepicker-input time" />
                                                    </div>
                                                </div>
                                                <div class="schedule__item">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" checked/>
                                                            <label class="custom-control-label" for="customCheck2">Bazar ertəsi</label>
                                                    </div>
                                                    <div class="input-group schedule__time">
                                                        <input type="text" class="form-control datetimepicker-input time" />
                                                        <span class="schedule__separator"></span>
                                                        <input type="text" class="form-control datetimepicker-input time" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pb-15">
                                            <h2>Profil məlumatları</h2>
                                            <div class="form-group">
                                                <label for="name">Ad</label>
                                                <input type="text" name="" id="name" class="form-control" value="Rüstəm"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Elektron poçt</label>
                                                <input type="email" name="" id="email" class="form-control" value="elmir.latifov@gmail.com"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="mob">Mobil telefon</label>
                                                <input type="text" name="" id="mob" class="form-control" value="051-123-45-67"/>
                                            </div>
                                        </div>
                                        <button class="btn btn--full">
                                            <img src="/img/submit-icon.svg" alt="" class="mr-10"/>
                                                Yadda saxla
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default page