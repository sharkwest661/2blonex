"use client";
import { Layout } from "@/components/layout";
import Select from "@/components/ui/forms/Select";
import { useStoreStore } from "@/store/useStoreStore";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const page = () => {
  const setStore = useStoreStore((state) => state.setStore);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      branch: [],
      fullName: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    setStore(data);
    router.replace("/store");
  };

  return (
    <Layout>
      <main>
        <section className="pb-0 d-md-none">
          <div className="container-fluid">
            <div className="search">
              <form>
                <div className="input-group search__group">
                  <input
                    type="text"
                    className="form-control search__input"
                    placeholder="Android TV"
                  />
                  <div className="input-group-append search__append">
                    <button className="search__btn" type="button"></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-7 mx-auto">
                <h1 className="mb-2">Mağaza qeydiyyatı</h1>
                <p className="description mb-40">
                  Mağazanızı qeydiyyatdan keçirmək üçün aşağıdakı forma
                  üzərindən bizə müraciət edin.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pb-15">
                    <div className="form-group">
                      <label htmlFor="store-name">Mağazanın adı</label>
                      <input
                        type="text"
                        id="store-name"
                        className="form-control"
                        {...register("name", {
                          required: "Mağaza adı boş ola bilməz",
                        })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Fəaliyyət istiqaməti</label>
                      <Controller
                        name="branch"
                        control={control}
                        rules={{
                          required: "Fəaliyyət istiqaməti seçilməlidir",
                        }}
                        render={({ field }) => (
                          <Select
                            isMulti
                            className="store-select"
                            options={[
                              { label: "Nəqliyyat", value: "Nəqliyyat" },
                              { label: "Elektronika", value: "Elektronika" },
                              { label: "Ərzaq", value: "Ərzaq" },
                              { label: "Xidmət", value: "Xidmət" },
                            ]}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                      {errors.branch && (
                        <span className="text-danger">
                          {errors.branch.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Müraciət edənin Ad və Soyadı</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        {...register("fullName", {
                          required: "Ad və Soyad boş ola bilməz",
                        })}
                      />
                      {errors.fullName && (
                        <span className="text-danger">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="mob">Mobil telefon</label>
                      <input
                        type="text"
                        id="mob"
                        className="form-control"
                        {...register("phone", {
                          required: "Telefon nömrəsi boş ola bilməz",
                        })}
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="btn btn--full" type="submit">
                    <img src="/img/submit-icon.svg" alt="" className="mr-10" />
                    Davam et
                  </button>
                  <p className="description text-center mt-4">
                    3 iş günü ərzində sizə SMS vasitəsilə bildiriş göndəriləcək
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default page;
