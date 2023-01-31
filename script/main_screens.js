export const init = `
<section class="init_screen screen">
<div class="card_reminder">
  <blockquote class="reminder_texts">
    <h2 class="reminder_title">Lembrete do dia</h2>
    <p class="reminder_phrase">
      Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.
    </p>
  </blockquote>
  <div class="reminder_btns">
    <button class="btn_like reminder_btn">
      <svg
        fill="#fff"
        width="2rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
      </svg>
    </button>
    <button class="btn_weak reminder_btn">
      <svg
        fill="#fff"
        width="2rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z"/>
      </svg>
    </button>
  </div>
</div>

<div class="articles_container">
  <header class="articles_head">
    <h1 class="article_title">Pode te ajudar</h1>
    <button class="article_more_button">Ver mais</button>
  </header>

  <div class="articles">
    <div class="article_card">
      <picture class="article_bg"> </picture>

      <h2 class="article_description">
        Dicas para melhorar a ansiedade.
      </h2>
    </div>

    <div class="article_card">
      <picture class="article_bg"> </picture>

      <h2 class="article_description">
        Vale a pena conversar com um psicólogo?
      </h2>
    </div>
  </div>
</div>

<div class="button_helps">
  <button class="button1">
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512"                   
    fill="#fff"
    width="1.5rem">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
    </svg>
    <span class="text">Divulgar local</span>
  </button>

  <button class="button2">
    <svg width="1.5rem" 
    viewBox="0 0 39 39" 
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1484 0.106642C13.7566 0.472265 11.1363 1.35586 9.27773 2.45273C7.41914 3.53437 6.85547 4.3875 6.85547 6.10898C6.85547 7.12969 7.29727 8.13516 8.2875 9.33867C9.27773 10.5422 9.97852 10.8773 11.4258 10.8926C12.4465 10.8926 12.7055 10.8316 13.9395 10.2527C15.8742 9.35391 16.9102 9.07969 18.4336 9.07969C19.8809 9.07969 20.7797 9.38437 21.5109 10.1309C23.0648 11.7 21.7395 14.9449 18.9363 16.4074C17.809 17.0016 16.834 17.3215 15.2344 17.5957C14.5336 17.7176 13.909 17.9004 13.8328 18.007C13.5586 18.4336 14.3051 23.9027 14.7621 24.8016C15.7676 26.782 17.5957 27.5285 19.8047 26.8734C21.2672 26.4469 21.6328 26.0203 21.8613 24.5121L21.968 23.8113L23.0496 23.4609C25.3195 22.7449 27.1781 21.5719 28.8082 19.8504C31.0781 17.4434 32.1445 14.625 32.1445 11.0754C32.1445 9.06445 31.8398 7.69336 31.0781 6.13945C29.5395 3.00117 26.523 0.975 22.3184 0.213282C21.2063 0.015234 17.1844 -0.0609379 16.1484 0.106642Z"/>
      <path d="M15.2953 30.225C14.366 30.5145 13.6195 31.1543 13.1777 32.0379C12.8426 32.7387 12.7969 32.9824 12.7969 34.5668C12.7969 36.5625 13.0102 37.2023 13.8785 38.0402C14.7773 38.8934 15.2496 39 18.007 39C20.8863 39 21.3586 38.8629 22.2879 37.7812C23.0191 36.9281 23.1562 36.3797 23.1562 34.4297C23.1562 33.1957 23.0801 32.693 22.8668 32.2055C22.4555 31.3066 21.5566 30.4992 20.673 30.2402C19.698 29.9508 16.1941 29.9508 15.2953 30.225Z"/>
      </svg>
    <span class="text">Central de ajuda</span>
  </button>

  <button class="button3">
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    width="1.5rem"
    fill="#fff">
    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
    <span class="text">Como conversar</span>
  </button>

  <button class="button4">
    <svg width="1.5rem" 
    viewBox="0 0 36 36" 
    fill="#fff" 
    xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_65_141)">
      <path d="M9.144 21.888C8.38414 22.6308 7.4214 23.132 6.37713 23.3285C5.33286 23.525 4.25378 23.408 3.27591 22.9922C2.29804 22.5764 1.46513 21.8805 0.882152 20.9921C0.299178 20.1037 -0.00776788 19.0626 -1.13001e-06 18C0.000652016 16.9411 0.312594 15.9058 0.897022 15.0229C1.48145 14.1399 2.31257 13.4482 3.28701 13.0339C4.26145 12.6196 5.33619 12.5009 6.37756 12.6926C7.41893 12.8842 8.38096 13.3779 9.144 14.112L25.236 6.066C25.0767 4.80245 25.3691 3.52326 26.0615 2.45442C26.754 1.38557 27.8019 0.595858 29.0202 0.224795C30.2385 -0.146268 31.5488 -0.0748002 32.7195 0.426572C33.8902 0.927945 34.846 1.82695 35.4181 2.96478C35.9902 4.1026 36.1417 5.406 35.8459 6.64472C35.5501 7.88344 34.826 8.97776 33.8016 9.73433C32.7771 10.4909 31.5182 10.8611 30.2473 10.7794C28.9764 10.6977 27.7752 10.1695 26.856 9.288L10.764 17.334C10.8184 17.7763 10.8184 18.2237 10.764 18.666L26.856 26.712C27.6159 25.9692 28.5786 25.468 29.6229 25.2715C30.6671 25.075 31.7462 25.192 32.7241 25.6078C33.702 26.0236 34.5349 26.7195 35.1178 27.6079C35.7008 28.4963 36.0078 29.5374 36 30.6C35.9939 31.3334 35.8384 32.0579 35.5431 32.7292C35.2478 33.4005 34.8188 34.0047 34.2823 34.5048C33.7458 35.0049 33.1131 35.3905 32.4227 35.638C31.7323 35.8856 30.9987 35.9899 30.2667 35.9446C29.5347 35.8993 28.8196 35.7053 28.1649 35.3746C27.5103 35.0438 26.93 34.5832 26.4592 34.0208C25.9885 33.4583 25.6373 32.8059 25.4269 32.1033C25.2166 31.4007 25.1517 30.6626 25.236 29.934L9.144 21.888Z"/></g>
      <defs>
      <clipPath id="clip0_65_141">
      <rect width="36" height="36" fill="white"/>
      </clipPath>
      </defs>
    </svg>
    <span class="text">Compartilhar o APP</span>
  </button>
</div>
</section>
`
export const meet = `
<section class="meet_screen screen">
    <div class="map_container"></div>

    <div class="cards_found">
        <div class="bar"></div>
        <div class="cards">
            <div class="card_found">
                <div class="card_img"></div>
                <div class="card_details">
                    <h2 class="card_name">Faculdade Lorem Ipsum</h2>
                    <p class="card_address">Rua Lorem Ipsum, 2220, Boa Viagem, Recife, PE</p>
                </div>
                <div class="arrow_right">
                    <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <div class="card_found">
                <div class="card_img"></div>
                <div class="card_details">
                    <h2 class="card_name">Clínica saúde</h2>
                    <p class="card_address">Rua Lorem Ipsum, 2220, Boa Viagem, Recife, PE</p>
                </div>
                <div class="arrow_right">
                    <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <div class="card_found">
                <div class="card_img"></div>
                <div class="card_details">
                    <h2 class="card_name">Igreja do Santo</h2>
                    <p class="card_address">Rua Lorem Ipsum, 2220, Boa Viagem, Recife, PE</p>
                </div>
                <div class="arrow_right">
                    <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
        </div>
    </div>
</section>
`
export const talk = `
<section class="toTalk_screen screen" id="toTalk_screen">
    <div class="ball_1"></div>
    <div class="ball_2"></div>
    <div class="center">
        <h1>Converse conosco</h1>  
        <p>Aqui, você é atendido por um voluntário, com respeito, anonimato, que guardará sigilo sobre tudo que for dito.</p>
        <button onclick="showQueue();" class="talk_btn">Conversar</button>

        <span class="tel">Converse por ligação
            <a href="#">81 97777-9999</a>
        </span>

        <a href="#" class="help">não sei como funciona</a>
    </div>
</section>
`