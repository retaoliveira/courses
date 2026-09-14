/**
 * Compatibilidade das apresentações incorporadas.
 *
 * Objetivo: permitir que apresentações Xaringan/remark hospedadas em outro
 * domínio recebam o foco do teclado no Safari. Sem esse foco, as setas não
 * chegam ao documento dentro do iframe e os slides não avançam.
 *
 * Escopo: somente iframes marcados como externos e hospedados em GitHub Pages.
 * Os arquivos originais das apresentações não são modificados.
 */
(function () {
  'use strict';

  var selector = 'iframe[data-external="1"][src*="github.io"]';
  var userAgent = window.navigator.userAgent;
  var isSafari = /Safari/.test(userAgent) &&
    !/(Chrome|Chromium|CriOS|Edg|OPR|Android)/.test(userAgent);

  function activatePresentation(event) {
    event.preventDefault();

    var button = event.currentTarget;
    var wrapper = button.parentNode.parentNode;
    var frame = wrapper.querySelector('iframe');
    var status = wrapper.querySelector('.presentation-frame-status');

    frame.focus();

    try {
      frame.contentWindow.focus();
      status.textContent = 'Navegação ativada — use as setas ← e → ou deslize na apresentação.';
      wrapper.classList.add('presentation-frame-active');
    } catch (error) {
      status.textContent = 'Abra a apresentação em nova aba para navegar pelos slides.';
    }
  }

  function preparePresentation(frame, index) {
    if (frame.getAttribute('data-presentation-ready') === 'true') {
      return;
    }

    frame.setAttribute('data-presentation-ready', 'true');
    frame.setAttribute('tabindex', '0');

    if (!frame.getAttribute('title')) {
      frame.setAttribute('title', 'Apresentação de slides');
    }

    if (!isSafari) {
      return;
    }

    var wrapper = document.createElement('div');
    wrapper.className = 'presentation-frame-wrapper presentation-frame-safari';
    frame.parentNode.insertBefore(wrapper, frame);
    wrapper.appendChild(frame);

    var controls = document.createElement('div');
    controls.className = 'presentation-frame-controls';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'presentation-frame-activate';
    button.textContent = 'Ativar navegação dos slides';
    button.setAttribute('aria-describedby', 'presentation-frame-status-' + index);
    button.addEventListener('click', activatePresentation);

    var link = document.createElement('a');
    link.className = 'presentation-frame-open';
    link.href = frame.src;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Abrir em nova aba';

    var actions = document.createElement('div');
    actions.className = 'presentation-frame-actions';
    actions.appendChild(button);
    actions.appendChild(link);

    var status = document.createElement('span');
    status.id = 'presentation-frame-status-' + index;
    status.className = 'presentation-frame-status';
    status.setAttribute('aria-live', 'polite');
    status.textContent = 'No Safari, ative a navegação antes de usar as setas.';

    controls.appendChild(actions);
    controls.appendChild(status);
    wrapper.appendChild(controls);
  }

  function initializePresentations() {
    var frames = document.querySelectorAll(selector);

    for (var index = 0; index < frames.length; index += 1) {
      preparePresentation(frames[index], index + 1);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePresentations);
  } else {
    initializePresentations();
  }
}());
