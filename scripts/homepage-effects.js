(function () {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desktopMode = window.matchMedia('(min-width: 768px)').matches;

  if (reducedMotion || !desktopMode) {
    return;
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function createObserver(callback, options, fallback) {
    if ('IntersectionObserver' in window) {
      return new IntersectionObserver(callback, options);
    }

    if (typeof fallback === 'function') {
      fallback();
    }

    return null;
  }

  (function initParallaxRevealAndCountups() {
    var wrap1 = document.getElementById('orb-1-wrap');
    var wrap2 = document.getElementById('orb-2-wrap');
    var wrap3 = document.getElementById('orb-3-wrap');
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(function () {
        var sy = window.scrollY;

        if (wrap1) {
          wrap1.style.transform = 'translateY(' + (-sy * 0.30) + 'px)';
        }
        if (wrap2) {
          wrap2.style.transform = 'translateY(' + (-sy * 0.22) + 'px)';
        }
        if (wrap3) {
          wrap3.style.transform = 'translateY(' + (-sy * 0.35) + 'px)';
        }

        ticking = false;
      });
    }, { passive: true });

    var reveals = document.querySelectorAll('.reveal');

    var revealObserver = createObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);

        setTimeout(function () {
          el.classList.add('in');
        }, delay);

        if (revealObserver) {
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }, function () {
      reveals.forEach(function (el) {
        el.classList.add('in');
      });
    });

    if (revealObserver) {
      reveals.forEach(function (el) {
        revealObserver.observe(el);
      });
    }

    var counters = document.querySelectorAll('[data-countup]');

    function runCountUp(el) {
      var target = parseFloat(el.getAttribute('data-value'));
      var duration = 1200;
      var start = null;

      function tick(now) {
        if (!start) {
          start = now;
        }

        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var value = easeOut(progress) * target;

        el.textContent = Math.round(value).toLocaleString('en-GB');

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    }

    if (!counters.length) {
      return;
    }

    var countObserver = createObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        runCountUp(entry.target);

        if (countObserver) {
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 }, function () {
      counters.forEach(function (el) {
        runCountUp(el);
      });
    });

    if (countObserver) {
      counters.forEach(function (el) {
        countObserver.observe(el);
      });
    }
  })();

  (function initTableAnimation() {
    var tableWrap = document.getElementById('cmp-table-wrap');
    var rows = document.querySelectorAll('[data-table-row]');
    var callout = document.getElementById('cmp-callout');

    if (!tableWrap) {
      return;
    }

    function runTableCountUp(el) {
      var target = parseFloat(el.getAttribute('data-value'));
      var duration = 1800;
      var start = null;

      function tick(now) {
        if (!start) {
          start = now;
        }

        var progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOut(progress) * target).toLocaleString('en-GB');

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    }

    var rowCount = rows.length;
    var started = false;

    function revealAllRows() {
      if (started) {
        return;
      }

      started = true;

      rows.forEach(function (row, idx) {
        setTimeout(function () {
          row.classList.add('in');

          var icons = row.querySelectorAll('.tbl-icon');
          setTimeout(function () {
            icons.forEach(function (icon) {
              icon.classList.add('pop');
            });
          }, 280);

          var pppCell = row.querySelector('[data-ppp-cell]');
          if (pppCell) {
            pppCell.classList.remove('pulse');
            void pppCell.offsetWidth;
            pppCell.classList.add('pulse');
          }

          var countEls = row.querySelectorAll('[data-tbl-countup]');
          if (countEls.length) {
            setTimeout(function () {
              countEls.forEach(function (el) {
                runTableCountUp(el);
              });
            }, 150);
          }

          if (idx === rowCount - 1) {
            setTimeout(function () {
              if (!callout) {
                return;
              }

              callout.classList.add('in');
              callout.querySelectorAll('[data-tbl-countup]').forEach(function (el) {
                runTableCountUp(el);
              });
            }, 500);
          }
        }, idx * 130);
      });
    }

    var tableObserver = createObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        revealAllRows();

        if (tableObserver) {
          tableObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }, function () {
      rows.forEach(function (row) {
        row.classList.add('in');
        row.querySelectorAll('.tbl-icon').forEach(function (icon) {
          icon.classList.add('pop');
        });
      });

      if (callout) {
        callout.classList.add('in');
      }
    });

    if (tableObserver) {
      tableObserver.observe(tableWrap);
    }
  })();

  (function initHeroDemo() {
    function sleep(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
    }

    var jobs = [
      { pendingId: 'pending-a', dropId: 'drop-a', time: '08:30', name: 'Archie', sub: 'Group \u00B7 60m', isGreen: false, totalAfter: '\u00A383.50' },
      { pendingId: 'pending-b', dropId: 'drop-b', time: '11:00', name: 'Bella', sub: 'Solo \u00B7 30m', isGreen: false, totalAfter: '\u00A388.50' },
      { pendingId: 'pending-c', dropId: 'drop-c', time: '10:00', name: 'Oscar', sub: 'Consult \u00B7 90m', isGreen: true, totalAfter: '\u00A393.50' }
    ];

    var remaining = 3;
    var loopsDone = 0;

    function chipHTML(job) {
      return '<div class="chip-time">' + job.time + '</div>' +
        '<div class="chip-name">' + job.name + '</div>' +
        '<div class="chip-sub">' + job.sub + '</div>';
    }

    function slotHTML() {
      return '<span class="slot-label">+ Drop here</span>';
    }

    function setCursor(cursor, ripple, x, y, instant) {
      cursor.style.transition = instant ? 'none' : 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.3s';
      cursor.style.transform = 'translate(' + x + 'px,' + y + 'px)';

      if (ripple) {
        ripple.style.transition = 'none';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
      }
    }

    function triggerRipple(ripple) {
      ripple.style.animation = 'none';
      void ripple.offsetWidth;
      ripple.style.animation = 'pppRipple 0.5s ease forwards';
    }

    async function animateJob(job) {
      var pending = document.getElementById(job.pendingId);
      var drop = document.getElementById(job.dropId);
      var fly = document.getElementById('ppp-fly');
      var screen = document.getElementById('ppp-demo-screen');
      var total = document.getElementById('ppp-week-total');
      var count = document.getElementById('ppp-count');
      var cursor = document.getElementById('ppp-cursor');
      var ripple = document.getElementById('ppp-cursor-ripple');

      if (!pending || !drop || !fly || !screen || !total || !count) {
        return;
      }

      var pendingRect = pending.getBoundingClientRect();
      var screenRect = screen.getBoundingClientRect();
      var dropRect = drop.getBoundingClientRect();

      var pendingCenterX = (pendingRect.left - screenRect.left) + pendingRect.width / 2;
      var pendingCenterY = (pendingRect.top - screenRect.top) + pendingRect.height / 2;
      var dropCenterX = (dropRect.left - screenRect.left) + dropRect.width / 2;
      var dropCenterY = (dropRect.top - screenRect.top) + dropRect.height / 2;

      if (cursor) {
        setCursor(cursor, ripple, pendingCenterX - 20, pendingCenterY - 30, true);
        cursor.style.opacity = '1';
        await sleep(150);
        setCursor(cursor, ripple, pendingCenterX, pendingCenterY, false);
        await sleep(460);
        triggerRipple(ripple);
      }

      pending.classList.add('active');
      await sleep(240);

      fly.innerHTML = pending.innerHTML;
      fly.style.cssText = 'position:absolute;left:' + (pendingRect.left - screenRect.left) + 'px;top:' + (pendingRect.top - screenRect.top) + 'px;width:' + pendingRect.width + 'px;height:' + pendingRect.height + 'px;background:#FFFFFF;border:1px solid #E4E6EF;border-radius:8px;padding:8px 10px;display:flex;align-items:center;gap:7px;z-index:50;pointer-events:none;opacity:1;will-change:transform,opacity;transition:transform 0.55s cubic-bezier(0.4,0,0.2,1),opacity 0.55s ease;';
      pending.style.opacity = '0';

      drop.classList.add('ready');
      await sleep(80);

      if (cursor) {
        setCursor(cursor, ripple, dropCenterX, dropCenterY, false);
      }

      var translateX = (dropRect.left - screenRect.left) - (pendingRect.left - screenRect.left);
      var translateY = (dropRect.top - screenRect.top) - (pendingRect.top - screenRect.top);
      fly.style.transform = 'translate(' + translateX + 'px,' + translateY + 'px)';
      fly.style.opacity = '0.85';
      await sleep(600);

      if (cursor) {
        triggerRipple(ripple);
        await sleep(200);
        cursor.style.transition = 'opacity 0.4s';
        cursor.style.opacity = '0';
      }

      drop.classList.remove('ready');
      drop.className = 'ppp-conf-chip' + (job.isGreen ? ' green' : '');
      drop.innerHTML = chipHTML(job);
      fly.style.opacity = '0';
      fly.style.transform = '';
      fly.innerHTML = '';

      await sleep(200);
      total.classList.add('flash');
      total.textContent = job.totalAfter;
      await sleep(700);
      total.classList.remove('flash');

      remaining -= 1;
      count.textContent = String(remaining);

      await sleep(400);
    }

    async function resetAll() {
      document.querySelectorAll('.ppp-conf-chip').forEach(function (chip) {
        chip.style.transition = 'opacity 0.4s';
        chip.style.opacity = '0';
      });

      await sleep(450);

      ['drop-a', 'drop-b', 'drop-c'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) {
          return;
        }

        el.className = 'ppp-slot';
        el.innerHTML = slotHTML();
        el.style.cssText = '';
      });

      ['pending-a', 'pending-b', 'pending-c'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) {
          return;
        }

        el.classList.remove('active');
        el.style.transition = 'opacity 0.4s';
        el.style.opacity = '1';
      });

      var total = document.getElementById('ppp-week-total');
      if (total) {
        total.textContent = '\u00A378.50';
      }

      var count = document.getElementById('ppp-count');
      if (count) {
        count.textContent = '3';
      }

      remaining = 3;
    }

    async function runLoop() {
      await sleep(1800);

      while (true) {
        for (var i = 0; i < jobs.length; i += 1) {
          await animateJob(jobs[i]);
          await sleep(900);
        }

        if (loopsDone === 0) {
          var label = document.getElementById('ppp-demo-label');
          if (label) {
            label.classList.add('show');
          }
        }

        loopsDone += 1;

        await sleep(2000);
        await resetAll();
        await sleep(1800);
      }
    }

    var screen = document.getElementById('ppp-demo-screen');
    if (!screen) {
      return;
    }

    var started = false;
    var demoObserver = createObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;

        if (demoObserver) {
          demoObserver.disconnect();
        }

        runLoop();
      });
    }, { threshold: 0.3 });

    if (demoObserver) {
      demoObserver.observe(screen);
    }
  })();

})();
