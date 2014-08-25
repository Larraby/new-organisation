({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],

    content: [
        {
            block: 'container',
            mods: {'user-header':true},
            content: [
                {
                block: 'user-header',
                content:[
                    {
                        block : 'simple-menu',
                        content : [
                            {
                                elem   : 'my',
                                content : 'Мои организации:'
                            },
                            {
                                block : 'menu-item',

                                content : [{
                                    block : 'link',
                                    url : '#',
                                    title : 'title',
                                    content : 'Acception'
                                }]
                            },
                            {
                                block : 'menu-item',

                                content : [{
                                    block : 'link',
                                    url : '#',
                                    title : 'title',
                                    content : 'Green Hill Corp'
                                }]
                            },
                            {
                                block : 'menu-item',

                                content : [{
                                    block : 'link',
                                    url : '#',
                                    title : 'title',
                                    content : 'Acception'
                                }]
                            },
                            {
                                block : 'menu-item',

                                content : [{
                                    block : 'link',
                                    url : '#',
                                    title : 'title',
                                    content : 'Green Hill Corp'
                                }]
                            },
                            {
                                elem: 'add',
                                tag : 'span',
                                content : 'Добавить организацию'
                            },
                            {
                                elem: 'all',
                                tag : 'span',
                                content : 'Все'
                            }
                        ]
                    }
                ]
                }
            ]
        },
        {
            block: 'container',
            mods: {'header':true},
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            elem: 'logo',
                            tag: 'img',
                            attrs:{ src : 'i/header-logo.png'}
                        },
                        {
                            block : 'simple-menu',
                            mods: { 'main': true},
                            content : [
                                {
                                    block : 'menu-item',

                                    content : [{
                                        block : 'link',
                                        url : '#',
                                        title : 'Возможности',
                                        content : 'Возможности'
                                    }]
                                },
                                {
                                    block : 'menu-item',

                                    content : [{
                                        block : 'link',
                                        url : '#',
                                        title : 'Цены',
                                        content : 'Цены'
                                    }]
                                },
                                {
                                    block : 'menu-item',

                                    content : [{
                                        block : 'link',
                                        url : '#',
                                        title : 'Задать вопрос',
                                        content : 'Задать вопрос'
                                    }]
                                },
                                {
                                    block : 'menu-item',

                                    content : [{
                                        block : 'link',
                                        mods: {'back':'label'},
                                        url : '#',
                                        title : 'События',
                                        content : 'События'
                                    }]
                                }
                            ]
                        },
                        {
                            elem:'user-menu',
                            tag: 'p',
                            content: 'Евгений Петреченко'
                        }
                    ]
                }
            ]
        },
        {
          block: 'container',
          content: [
              {
                block : 'alert',
                content: [
                    {
                        block: 'msg-big',
                        tag: 'h2',
                        content: [

                            'Евгений, у вас уже зарегистрировано ',
                            {
                                elem:'msg-link',
                                content:'4 организации'
                            }


                        ]
                    },
                    {
                        tag: 'p',
                        content: 'Если вы хотите создать новое событие выберите одну из ваших существующих организаций'
                    },
                    {
                        tag: 'p',
                        content: 'Если вы действительно хотите зарегистрировать нового пользователя — воспользуйтесь форомй ниже.'
                    }
                ]
          },
          {
              block: 'register-form',
              tag: 'form',
              content:[
                  {
                      tag: 'h1',
                      content: 'Регистрация еще одной организации'
                  },
                  {
                      block: 'input-holder',
                      content:[
                          {
                              elem: 'label',
                              tag: 'label',
                              content: 'Название организатора',
                              attrs:{for: 'company-name'}

                          },
                          {
                              block: 'input',
                              mods : { theme : 'normal', size : 'b', 'has-clear' : true },
                              name: 'company-name',
                              id: 'company-name'
                          },
                          {
                              elem: 'help',
                              tag:'p',
                              content: 'Это название увидят участники ваших событий'
                          }
                      ]
                  },
                  {
                      block: 'input-holder',
                      content:[
                          {
                              elem: 'label',
                              tag: 'label',
                              content: 'Сайт организации',
                              attrs:{for: 'company-site'}

                          },
                          {
                              block: 'input',
                              mods : { theme : 'normal', size : 'b', 'has-clear' : true },
                              name: 'company-site',
                              id: 'company-site'
                          },
                          {
                              elem: 'help',
                              tag:'p',
                              content: 'У вашей организации будет собственый сайт с адресом вида http://orgname.timepad.ru Вы можете изменить его, если хотите'
                          }
                      ]
                  },
                  {
                      block: 'input-holder',
                      content:[
                          {
                              elem: 'label',
                              tag: 'label',
                              content: 'Контактный телефон',
                              attrs:{for: 'company-phone    '}

                          },
                          {
                              block: 'input',
                              mods : { theme : 'normal', size : 'b', 'has-clear' : true },
                              name: 'company-phone',
                              id: 'company-phone'
                          }
                      ]
                  },

                  {

                  },


                  {
                      block: 'checkbox',
                      text : [
                          'Я прочитал ' ,
                          { block: 'link', url: '#', content: 'соглашение об оказании услуг'},
                          ' и согласен с ним'
                      ],
                      name : 'company-agree'
                  },
                  {
                      block: 'button',
                      id: 'company-send',
                      text: 'Начать работу'
                  }

              ]
          }
        ]
        },
        {
            block: 'container',
            content:[
                {
                    block: 'footer',
                    content: [
                        {
                            elem: 'footer-left',
                            content: [
                                {
                                    elem: 'logo',
                                    tag: 'img',
                                    attrs:{ src : 'i/footer-logo.png' }
                                },
                                {
                                    tag: 'p',
                                    content:[
                                        '© ООО «ТаймПэд Лтд» 2008 — 2014 Используя данный вебсайт, вы подтверждаете согласие ',
                                        {
                                            tag: 'br'
                                        },
                                        {
                                            block:'link',
                                            url:'#',
                                            content: 'с правилами использования'
                                        },
                                        '.'
                                    ]

                                },
                            ]
                        },
                        {
                            elem:'footer-center',
                            content:[
                                {
                                    block : 'simple-menu',
                                    mods: {'footer': true},
                                    content: [
                                        {
                                            elem: 'sub-title',
                                            tag : 'p',
                                            content : 'Timepad'
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'title',
                                                content : 'Возможности'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Цены',
                                                content : 'Green Hill Corp'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Каталог событий',
                                                content : 'Каталог событий'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Связаться с нами',
                                                content : 'Связаться с нами'
                                            }]
                                        }

                                    ]

                                },
                                {
                                    block : 'simple-menu',
                                    mods: {'footer': true},
                                    content: [
                                        {
                                            elem: 'sub-title',
                                            tag : 'p',
                                            content : 'О компании'
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'О проекте',
                                                content : 'О проекте'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Пресса',
                                                content : 'Пресса'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Вакансии',
                                                content : 'Вакансии'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Блог',
                                                content : 'Блог'
                                            }]
                                        }

                                    ]

                                },
                                {
                                    block : 'simple-menu',
                                    mods: {'footer': true},
                                    content: [
                                        {
                                            elem: 'sub-title',
                                            tag : 'p',
                                            content : 'Помощь'
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Правила',
                                                content : 'Правила'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Справка',
                                                content : 'Справка'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Разработчикам',
                                                content : 'Разработчикам'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Задать вопрос',
                                                content : 'Задать вопрос'
                                            }]
                                        }

                                    ]

                                },
                                {
                                    block : 'simple-menu',
                                    mods: {'footer': true},
                                    content: [
                                        {
                                            elem: 'sub-title',
                                            tag : 'p',
                                            content : 'Мы в социальных сетях'
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Facebook',
                                                content : 'Facebook'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Vkontakte',
                                                content : 'Vkontakte'
                                            }]
                                        },
                                        {
                                            block : 'menu-item',

                                            content : [{
                                                block : 'link',
                                                url : '#',
                                                title : 'Twitter',
                                                content : 'Twitter'
                                            }]
                                        }
                                    ]
                                }




                            ]
                        },

                        {
                            elem:'pay',
                            content:[
                                'Мы принимаем к оплате:   ',
                                {
                                    tag: 'img',
                                    attrs:{ src : 'i/pay.png'}
                                }

                            ]
                        }
                    ]
                }
            ]
        }

    ]
})
