<?php

/* @var $this \yii\web\View */
/* @var $content string */
use app\assets\AppAsset;
use app\modules\common\models\ModFunctions;
use app\modules\my\models\Feedback;
use yii\bootstrap\Modal;
use yii\helpers\Html;

AppAsset::register($this);


?>
<?php $this->beginPage() ?>

<?php
// Загрузка параметров;
$pagesOptions = \app\modules\pages\models\PagesOptions::pagesOptions();


?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="rus" lang="rus">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <?php if(!empty(Yii::$app->params['mobile'])):?>
            <!-- meta name="apple-mobile-web-app-capable" content="yes" / -->
        <?php endif;?>
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=yes" />
        <?= Html::csrfMetaTags() ?>
        <?php $this->head() ?>
        <title><?= Html::encode($this->title) ?></title>

    </head>
    <body >
    <?php

    // Модальное окно;
    Modal::begin([
        'header' => '<h4 class="modal-title" id="myModalLabel"></h4>',
        'size' => 'modal-min',
        'id' => 'windows',
    ]);
    //
    Modal::end();
    ?>
    <div id="br-show"></div>
    <div id="loadAjax"><div class="loader"></div></div>
    <div id="br-shadow" title=""></div>
    <div class="br-shadow"></div>
    <div id="to-top">
        <div class="str"></div>
        <div class="text"><?=\Yii::t('app','Наверх');?></div>
    </div>
    <!--Главная container-->
    <div class="container shop-container" data-page="<?= \Yii::$app->controller->uniqueId?>">
        <!--Шапка-->
        <div id="header">
            <!--Десктопная версия-->
            <div class="header-content desktop">
                <div class="fix-content-panel">
                    <div class="total">
                        <?= \app\components\WBasketDeliveryFree::widget()?>
                    </div>
                    <div class="block">
                        <?php if(!Yii::$app->user->isGuest):?>
                            <div class="bonus"><?= ModFunctions::bonus(Yii::$app->user->identity->bonus)?> /</div>
                            <div class="money"><?=ModFunctions::money(Yii::$app->user->identity->money)?></div>
                            <div class="user-container"><a href="#" class="user user-icon white" data-toggle="dropdown"  onclick="return false;"><?=ModFunctions::userName(Yii::$app->user->identity->name)?></a></div> / <a href="/site/logout" class="out white"><?=\Yii::t('app','Выйти')?></a>
                        <?php else: ?>
                            <a href="#" class="user user-icon white" onclick="return window_show('login','<?=\Yii::t('app','Вход')?>',false,false,true);"><?=\Yii::t('app','Вход')?></a> / <a href="#" class="user reg white" onclick="return window_show('signup','<?=\Yii::t('app','Регистрация')?>',false,false,true);"><?=\Yii::t('app','Регистрация')?></a>  <!--/Войти или авторизоваться-->
                        <?php endif; ?>
                        <div class="small-basket-block"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="top">
                    <div class="br-top hidden"></div>
                    <div class="row">
                        <div class="col-md-2 col-xs-2" style="width: 11.667%">
                            <div class="city city-icon"><a href="#" class="white" onclick="return window_show('city');"><?=\Yii::t('app','Новосибирск');?></a></div>
                        </div>
                        <div class="col-md-6 col-xs-6">
                            <?php if(!Yii::$app->params['en']): ?>
                            <div class="item">
                                <a href="/static/page/rules#how-to-order" class="white item-header">Оформление заказа</a>
                                <a href="/static/page/rules#payment" class="white item-header">Оплата</a>
                                <a href="/static/page/rules#shipping" class="white item-header">Доставка</a>
                                <a href="/static/page/rules#return" class="white item-header">Возврат</a>
                                <a href="/static/page/corporative" class="white item-header">Корпоративным клиентам</a>
                            </div>
                            <?php endif;?>
                        </div>
                        <div class="col-md-4 col-xs-4">
                            <div class="user">
                                <?php if(!Yii::$app->user->isGuest):?>
                                    <div class="user-profile">
                                        <div class="money"><span class="bonus" rel="popover" data-placement="bottom" data-content="<?=\Yii::t('app','Бонусный баланс. Потратить бонусные деньги вы можете в магазине Esalad на товары со значком.β');?>"><?= ModFunctions::bonus(Yii::$app->user->identity->bonus)?></span> / <span class="money" rel="popover" data-placement="bottom" data-content="<?=\Yii::t('app','Баланс интернет-магазина Esalad. Совершайте покупки в интернет-магазине Esalad с удовольствием.')?>"><?=ModFunctions::money(Yii::$app->user->identity->money)?></span></div>
                               <span class="user-container"><a href="#" class="user user-icon white" data-toggle="dropdown"  onclick="return false;"><?=ModFunctions::userName(Yii::$app->user->identity->name)?></a>
                                   <div class="box-container">
                                       <!-- Меню ЛК-->
                                       <?= \app\components\WMyMenu::widget()?>
                                       <!-- Меню ЛК-->
                                   </div>
                               </span> / <a href="/site/logout" class="out white"><?=\Yii::t('app','Выйти');?></a>
                                    </div>
                                <?php else: ?>
                                    <a href="#" class="user user-icon white" onclick="return window_show('login','<?=\Yii::t('app',"Вход")?>',false,false,true);"><?=\Yii::t('app','Вход')?></a> / <a href="#" class="user reg white" onclick="return window_show('signup','<?=\Yii::t('app',"Регистрация")?>',false,false,true);"><?=\Yii::t('app','Регистрация')?></a>  <!--/Войти или авторизоваться-->
                                <?php endif; ?>

                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="bottom">
                    <div class="row">
                        <div class="col-md-3 col-xs-3">
                            <?php if(Yii::$app->params['en']): ?>
                                <div class="logo"><a href="/"><img src="/images/logotype.png" alt=""></a></div>
                            <?php else: ?>
                                <div class="logo"><a href="/"><img src="/images/logo.png" alt=""></a></div>
                            <?php endif; ?>
                        </div>
                        <div class="col-md-7 col-xs-7">
                            <!--Поиск-->
                            <div class="search">
                                <form action="/search/index" method="post" >
                                    <div class="input">
                                        <input type="hidden" name="_csrf" value="<?=Yii::$app->request->csrfToken?>">
                                        <input type="text" name="search" value="" maxlength="64" autocomplete="off" placeholder="<?=\Yii::t('app','Введите товар, категорию или бренд')?>" onfocus="$(this).attr('placeholder','')" onblur="$(this).attr('placeholder','<?=\Yii::t('app',"Введите товар, категорию или бренд")?>')" />
                                    </div>
                                    <div class="button" onclick="$(this).parents('form').submit();"></div>
                                </form>
                            </div> <!--/Поиск-->
                            <div class="info-header">
                                <span class="phone">8 383 349-92-09</span>
                                <span class="version"><a href="mailto:info@Esalad.ru">info@Esalad.ru</a></span>
                                <span class="time"><?=$pagesOptions['time']?></span>
                            </div>
                        </div>
                        <div class="col-md-2 col-xs-2 small-basket-block desktop">
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div> <!--/Десктопная версия-->
            <!--Мобильная версия-->
            <div class="header-content mobile">
                <div class="fix-content">
                    <div id="basket-total-info"></div>
                    <div class="top push">
                        <div class="row">
                            <div class="col-xs-2 grid">
                                <!--Пользватель-->
                                <div class="user menu-qml menu-qml-icon js-catalog-menu"><span></span></div>  <!--./Пользватель -->
                            </div>
                            <div class="col-xs-6">
                                <a href="/"><div class="logo"></div></a>
                            </div>
                            <div class="col-xs-4 grid basket small-basket-block">
                                <?php print Yii::$app->basket->displaySmallBasket(); ?>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="bottom push">
                    <!--Поиск-->
                    <div class="search">
                        <form action="/search/" method="post">
                            <div class="input">
                                <input type="text" name="search" value="" maxlength="64" autocomplete="off" placeholder="<?=\Yii::t('app','Найти на Esalad')?>" onfocus="$(this).attr('placeholder','')" onblur="$(this).attr('placeholder','<?=\Yii::t('app',"Найти на Esalad")?>')" />
                                <input type="hidden" name="_csrf" value="<?=Yii::$app->request->csrfToken?>">
                            </div>
                            <div class="button" onclick="$(this).parents('form').submit();"></div>
                        </form>
                    </div> <!--/Поиск-->
                </div>
                <div class="clear"></div>
            </div><!--/Мобильная версия-->
        </div><!--/Шапка-->
        <!--Навигация и авторизация мобильная версия-->
        <div  class="m-navigation pushy-left mobile" id="slidingMenu">
            <div class="br-header">
                <div class="select-menu" rel="1"><div class="home-icon"></div> </div>
                <?php if(!Yii::$app->user->isGuest):?>
                    <div class="select-menu" rel="2"><div class="m-user-icon"></div></div>
                <?php endif;?>
                <div class="select-menu open" rel="3"><div class="m-admin-icon"></div></div>
            </div>
            <?php if(!Yii::$app->user->isGuest):?>
                <div class="user-nav">
                    <div class="balance">
                        <div class="user-name"><?=ModFunctions::userName(Yii::$app->user->identity->name)?></div>
                        <div class="money"><?=\Yii::t('app','Баланс')?>: <span><?=ModFunctions::money(Yii::$app->user->identity->money)?></span> / <span><?= ModFunctions::bonus(Yii::$app->user->identity->bonus)?></span> <?=\Yii::t('app','бонусов')?></div>
                        <div class="clear"></div>
                    </div>
                </div>
                <!--меню ЛК-->
                <div class="container-menu" rel="2">
                    <!--Навигация для ЛК-->
                    <?= \app\components\shopMobile\WMyMenuMobile::widget()?>
                </div><!--/меню ЛК-->
            <?php else: ?>
                <!--Регистрация или вход-->
                <div class="user-account">
                    <div class="login button_oran" onclick="return window_show('login','<?=\Yii::t('app',"Вход")?>',false,false,true);"><div><?=\Yii::t('app','Вход')?></div></div> / <div class="reg button_oran" onclick="return window_show('sign up','<?=\Yii::t('app',"Регистрация")?>',false,false,true);"><div><?=\Yii::t('app','Регистрация')?></div></div>
                </div>
            <?php endif; ?>
            <!--Каталог -->
            <div class="container-menu" rel="1">
                <?= \app\components\shopMobile\WMainMenu::widget()?>
            </div> <!--./Каталог -->
            <!--Админская часть меню -->
            <div class="container-menu open" rel="3">
                <?= \app\components\shopMobile\WMainAdminMenu::widget(['menuAdmin' => Yii::$app->controller->actionsMenu])?>
            </div> <!--Админская часть меню -->
            <div class="menu-footer-content">
                <?php
                // Загрузка Меню;
                $pagesMenus = \app\modules\pages\models\Pages::getPagesMenu();

                foreach($pagesMenus['header'] as $key=>$menu): ?>
                    <a href="/static/page/<?=$menu['url'];?><?php if(isset($menu['anchor'])) print '#'.$menu['anchor'];?>" class="blue i"><?=$menu['name']?></a>
                <?php endforeach; ?>
                <?php  if(!Yii::$app->user->isGuest):?><a href="/site/logout" class="out blue i"><?=\Yii::t('app','Выйти')?></a><?php endif;?>
            </div>
        </div> <!--./Навигация и авторизация-->
        <!--Меню топ дестопкая версия-->
        <div id="menu-top" class="menu-top desktop">
            <div class="bg"></div><?php
            print \app\components\WGeneralCatalogMenu::widget();?>
        </div><!--/Меню топ-->
        <!--Центр-->
        <div id="center">
            <!--Content-->
            <div class="content cms">
                <div class="row">
                    <!--Сайт-бар reports-->
                    <div class="arrow-menu"><?=\Yii::t('admin','Меню')?></div>
                    <div class="sidebar sidebar-js col-md-3 col-xs-3">
                        <div class="br-sidebar"></div>
                        <!--Категория-->
                        <div class="category___sidebar category-list">
                            <div class="close"></div>
                            <h1 class="title"><?=Yii::t('admin','Категория')?></h1>
                            <?php if(Yii::$app->controller->actionsMenu):
                              //  print_arr(Yii::$app->controller->actionsMenu['support']);
                                ?>
                                <?php foreach (Yii::$app->controller->actionsMenu as $group): ?>
                                    <div class="item">
                                        <a href="<?=$group['link']; ?>" class="main white" ><b><?=$group['title']?></b></a>
                                        <?php foreach ($group['items'] as $key=>$item): ?>
                                            <div class="i"><a href="<?=$item['link'] ?>" class="white"><?=$item['title'] ?></a><?=(!empty($item['id']) && $item['id'] == 1001 ? '<span class="badge danger-com">'.Feedback::getCountSupport().'</span>' : '')?><?=(!empty($item['id']) && $item['id'] == 1002) ? '<span class="badge danger-com">'.Feedback::getCountCall().'</span>' : '' ?><?=(!empty($item['id']) && $item['id'] == 1004) ? '<span class="badge danger-com">'.Feedback::getCountFeed().'</span>' : '' ?></div>
                                        <?php  endforeach; ?>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div><!--/Категория-->
                    </div><!--Сайт-бар-->

                    <div id="shop_management" class="col-md-12 col-xs-12">
                        <?= $content ?>
                    </div>
                </div>
                <div class="clear"></div>
            </div><!--/Content-->
        </div><!--/Центр-->
        <!--Подвал-->
        <div id="footer" class="push">
            <?php if(Yii::$app->params['en']): ?>
                <div class="copyright col-xs-3">© GH.Cafe <?= date('Y') ?>. All rights reserved.</div>
                <div class="menu-footer-en col-xs-6">
                    <a href="/site/service" class="grey">Terms of service</a>
                    <a href="/site/policy" class="grey">Privacy policy</a>
                </div>
            <?php else: ?>
                <!--Десктопная версия-->
                <div class="footer-content desktop">
                    <div class="panel-footer-main"></div>
                    <div class="row">
                        <div class="col-md-3 col-xs-3 item">
                            <div class="payments"> <div class="name-main">Принимаем к оплате</div><img src="/images/payments.png" alt="Принемаем к оплате"></div>
                        </div>
                        <div class="col-md-6 col-xs-6 item">
                            <div class="row">
                                <div class="col-md-8 col-xs-8 ">
                                    <div class="menu-footer">
                                        <?php
                                        // Загрузка Меню;
                                        $pagesMenus = \app\modules\pages\models\Pages::getPagesMenu();
                                        foreach($pagesMenus['header'] as $key=>$menu): ?>
                                            <a href="/static/page/<?=$menu['url'];?><?php if(isset($menu['anchor'])) print '#'.$menu['anchor'];?>" class="blue i"><?=$menu['name']?></a>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-3 item">
                            <div class="contacts">
                                <div class="phone">8 383 349-92-09</div>
                                <div class="mail"><a href="mailto:info@Esalad.ru">info@Esalad.ru</a></div>
                                <div class="time">Время работы операторов: <br><b><?=$pagesOptions['time']?> </b><br>Вс выходной</div>

                                <div class="call"><a href="#" onclick="return window_show('call','Заказ звонка');">Заказать звонок</a></div>
                            </div>
                            <div class="social">
                                <a href="https://instagram.com/Esalad.ru" rel="nofollow" target="_blank" class="no-border opacity"><img src="/images/instagram.png" alt=""> </a>
                                <a href="https://vk.com/Esalad_russia" rel="nofollow" target="_blank" class="no-border opacity"><img src="/images/vk.png" alt=""> </a>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>

                    <div class="row">
                        <div class="col-md-4 col-xs-4"><div class="copyright">© Esalad 2015 Все права защищены.</div></div>
                        <div class="col-md-7 col-xs-7"><div class="version"><a class="hidden" href="http://www.esalad.ru/?version=yes">Мобильная версия</a></div></div>
                        <div class="clear"></div>
                    </div>
                </div>  <!--/Десктоп-->
                <!--Мобильная версия-->
                <div class="footer-content mobile">
                    <div class="phone"><div><?=$pagesOptions['phone']?></div></div>
                    <div class="call"><a href="/" class="white" onclick="return window_show('call','Заказ звонка');">Заказать звонок</a> </div>
                    <div class="social">
                        <div class="item"><a href="https://instagram.com/Esalad.ru" rel="nofollow" target="_blank" class="no-border icon-instagram"></a></div>
                        <div class="item"><a href="https://vk.com/Esalad_russia" rel="nofollow" target="_blank" class="no-border icon-vk"></a></div>
                        <div class="clear"></div>
                    </div>
                    <div class="time copyright" style="padding:5px 0px; line-height: 20px;">Время работы операторов:<br><?=$pagesOptions['time']?> (Вс выходной)</div>
                    <div class="copyright">© Esalad 2016 Все права защищены.</div>
                </div><!--/Мобильная версия-->
            <?php endif; ?>
        </div><!--/Подвал-->

    </div><!--/Главная container-->
    <?php $this->endBody() ?>
    </body>
    </html>

    <!-- Отработало за <?=Yii::getLogger()->getElapsedTime();?> с. Скушано памяти: <?=round(memory_get_peak_usage()/(1024*1024),2)."MB"?>  -->

<?php $this->endPage() ?>

