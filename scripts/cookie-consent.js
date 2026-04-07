(function () {
  var storageKey = 'ppp_cookie_consent';
  var acceptedValue = 'accepted';
  var declinedValue = 'declined';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  function applyConsent(state) {
    var analyticsState = state === acceptedValue ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: analyticsState,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  var existingChoice = null;
  try {
    existingChoice = window.localStorage.getItem(storageKey);
  } catch (error) {
    existingChoice = null;
  }

  if (existingChoice === acceptedValue || existingChoice === declinedValue) {
    applyConsent(existingChoice);
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.hidden = true;
    }
  }

  function updateManageButtonVisibility() {
    var manageButton = document.getElementById('cookie-consent-manage');
    if (!manageButton) {
      return;
    }

    var hasChoice = false;
    try {
      var storedChoice = window.localStorage.getItem(storageKey);
      hasChoice = storedChoice === acceptedValue || storedChoice === declinedValue;
    } catch (error) {
      hasChoice = false;
    }

    manageButton.hidden = !hasChoice;
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (error) {
      // Ignore storage errors and still apply runtime consent.
    }

    applyConsent(choice);
    hideBanner();
    updateManageButtonVisibility();
  }

  function showBanner() {
    var banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.hidden = false;
    }
  }

  function buildBanner() {
    if (document.getElementById('cookie-consent-banner')) {
      updateManageButtonVisibility();
      return;
    }

    var banner = document.createElement('section');
    banner.className = 'cookie-consent-banner';
    banner.id = 'cookie-consent-banner';
    banner.hidden = existingChoice === acceptedValue || existingChoice === declinedValue;
    banner.setAttribute('aria-label', 'Cookie consent');

    banner.innerHTML =
      '<div class="cookie-consent-inner">' +
      '<p class="cookie-consent-kicker">Privacy settings</p>' +
      '<h2 class="cookie-consent-title">Can we use analytics cookies?</h2>' +
      '<p class="cookie-consent-copy">We use Google Analytics to understand which pages and buy buttons are helping people find Pack Planner Pro. You can accept or decline analytics cookies. Read our <a href="/privacy" style="color:#0033A0;text-decoration:underline;text-underline-offset:3px;">privacy policy</a>.</p>' +
      '<div class="cookie-consent-actions">' +
      '<button type="button" class="cookie-consent-button cookie-consent-button--primary" data-cookie-action="accept">Accept analytics</button>' +
      '<button type="button" class="cookie-consent-button cookie-consent-button--secondary" data-cookie-action="decline">Decline</button>' +
      '</div>' +
      '</div>';

    var manageButton = document.createElement('button');
    manageButton.type = 'button';
    manageButton.id = 'cookie-consent-manage';
    manageButton.className = 'cookie-consent-manage';
    manageButton.hidden = !(existingChoice === acceptedValue || existingChoice === declinedValue);
    manageButton.textContent = 'Cookie settings';

    document.body.appendChild(banner);
    document.body.appendChild(manageButton);

    banner.addEventListener('click', function (event) {
      var action = event.target && event.target.getAttribute('data-cookie-action');
      if (action === 'accept') {
        saveChoice(acceptedValue);
      }
      if (action === 'decline') {
        saveChoice(declinedValue);
      }
    });

    manageButton.addEventListener('click', showBanner);
  }

  document.addEventListener('DOMContentLoaded', buildBanner);
})();
