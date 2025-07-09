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
                <h1 class="mb-2">Mağaza qeydiyyatı</h1>
                <p class="description mb-40">Mağazanızı qeydiyyatdan keçirmək üçün aşağıdakı forma üzərindən bizə müraciət edin.</p>
                <form action="">
                  <div class="pb-15">
                    <div class="form-group">
                      <label for="store-name">Mağazanın adı</label>
                      <input type="text" name="" id="store-name" class="form-control" value="World Telecom"/>
                    </div>
                    <div class="form-group">
                      <label for="category">Fəaliyyət istiqaməti</label>
                      <select name="" id="category" class="selectpicker" multiple>
                        <option value="1">Nəqliyyat</option>
                        <option value="2" selected>Elektronika</option>
                        <option value="3">Ərzaq</option>
                        <option value="4">Xidmətlər</option>
                        <option value="5" selected>Kosmetika</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="name">Müraciət edənin Ad və Soyadı</label>
                      <input type="text" name="" id="name" class="form-control" value="Məmməd Məmmədov"/>
                    </div>
                    <div class="form-group">
                      <label for="mob">Mobil telefon</label>
                      <input type="text" name="" id="mob" class="form-control" value="051-123-45-67"/>
                    </div>
                  </div>
                  <button class="btn btn--full">
                    <img src="/img/submit-icon.svg" alt="" class="mr-10"/>
                      Davam et
                  </button>
                  <p class="description text-center mt-4">3 iş günü ərzində sizə SMS vasitəsilə bildiriş göndəriləcək</p>
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