import React from 'react'

const StorePostCart = () => {
    return (
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
    )
}

export default StorePostCart