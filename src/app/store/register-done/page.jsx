import { Layout } from "@/components/layout";
import React from "react";

const Page = () => {
  return (
    <Layout>
      <main>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-7 mx-auto">
                <div class="info">
                  <img src="/img/flag.svg" alt="" class="mb-20" />
                  <h1 class="my-20">Qeydiyyatınız nəzərə alındı :)</h1>
                  <p class="mb-40">
                    3 iş günü ərzində sizə SMS vasitəsilə geri dönəcəyik.
                  </p>
                  <a href="" class="btn btn--full">
                    Ana səhifəyə qayıt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Page;
