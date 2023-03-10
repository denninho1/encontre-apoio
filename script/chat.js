import { mobileContent } from './script.js';

const ballLoad = `<div class="ball_loading"></div>`

const showQueue = () => {
    mobileContent.innerHTML = ballLoad
    const queueChat = `
        <div class="queue_chat">
            <div class="logo">
                Encontre<span class="destaque">Apoio</span>
            </div>

            <div class="center">
                <h3>Você está na fila de espera, a qualquer momento você será 
                    redirecionado para a conversa.
                </h3>
                <span class="time_count">01:30</span>

                <button class="cancel_queue">cancelar</button>

                <span class="warning">
                    <span style="color: #D00000;">ATENÇÃO!</span> 
                    sair do app cancela automaticamente a fila ou o chat
                </span>
            </div>
        </div>
        `
    setTimeout(function() {
        mobileContent.innerHTML = queueChat;
    }, 3000);
}

