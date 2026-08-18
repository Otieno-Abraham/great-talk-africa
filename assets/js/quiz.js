document.addEventListener('DOMContentLoaded', function () {
  var card = document.getElementById('quizCard');
  var progressEl = document.getElementById('quizProgress');
  if (!card || !progressEl) return;

  var questions = [
    {
      module: "MODULE 01 — SCOPE",
      q: "You've been treated as “basically the Chief of Staff” by your team for months, but the title hasn't changed. A new hire asks who owns cross-team prioritization. Module 1's own logic is that scope moves first and the title moves after — so what's the on-brand answer here?",
      options: [
        { text: "Say the title hasn't caught up yet, so technically no one owns it formally.", correct: false,
          feedback: "This treats the title as the thing that grants scope. The workbook argues the opposite: the work moves first." },
        { text: "Say that's you, then quietly start building the evidence for the title conversation later.", correct: true,
          feedback: "Exactly the flip side from Module 1: you don't need the title to change first, you need to prove the scope already has." },
        { text: "Defer to whoever officially holds a 'Chief of Staff' title, even if that's no one.", correct: false,
          feedback: "This hands the question to a title that doesn't exist yet instead of the person actually doing the work." },
        { text: "Loop in your principal to decide who owns it before answering.", correct: false,
          feedback: "This is a call you're equipped to make. Escalating it is the old instinct, not the new one." }
      ]
    },
    {
      module: "MODULE 02 — STRATEGY",
      q: "Following Njeri's approach from Module 2, you've been tracking the numbers that make the leadership room go quiet. This month two metrics spike at once: late client deliveries, and a small rise in a discretionary software subscription. Where does your attention actually go first?",
      options: [
        { text: "The software subscription, since it's the easier one to fix quickly.", correct: false,
          feedback: "Easy to fix isn't the same as important to fix. This isn't the number that moves the business." },
        { text: "The late deliveries, since that's tied to revenue and client trust, the thing that actually moves the numbers.", correct: true,
          feedback: "This is the whole point of Module 2: know what makes the room go quiet, and prioritize accordingly." },
        { text: "Whichever one your principal happens to mention first in the next meeting.", correct: false,
          feedback: "This is reactive, not strategic. You're meant to already know before the meeting starts." },
        { text: "Both, equally, so nothing falls through the cracks.", correct: false,
          feedback: "Module 2 is explicit that not every issue is equally important. Splitting focus evenly defeats the point of tracking at all." }
      ]
    },
    {
      module: "MODULE 03 — JUDGMENT",
      q: "Two team leads disagree over how to handle a client complaint and both cc you, asking “what do we do?” Per the judgment shift in Module 3, what's the actual move?",
      options: [
        { text: "Reply-all with a neutral list of both perspectives so they can decide together.", correct: false,
          feedback: "This documents the disagreement but doesn't resolve it. Module 3 is about making the call, not just reporting it." },
        { text: "Pick a side privately and only tell the lead you agree with.", correct: false,
          feedback: "This looks decisive but is actually political, and it erodes trust with whoever finds out later." },
        { text: "Reply to both with a specific recommendation and your reasoning.", correct: true,
          feedback: "That's judgment: a defensible recommendation, made visibly, the way Njeri handled the vendor clause in Module 3." },
        { text: "Forward the whole thread to your principal, since it involves two department heads.", correct: false,
          feedback: "This is exactly the kind of decision Module 3 says you should be routing to yourself, not escalating." }
      ]
    },
    {
      module: "MODULE 04 — VISIBILITY",
      q: "It's been three quiet weeks. Nothing dramatic happened, and you haven't sent a Friday note since. Per the visibility system in Module 4, should you still send one?",
      options: [
        { text: "No, the format is really only for when there's something notable to report.", correct: false,
          feedback: "This misses the actual point: quiet weeks are exactly what disappear from memory first without a written trail." },
        { text: "Yes, even a quiet week is worth five lines, because the discipline is what keeps the record from evaporating.", correct: true,
          feedback: "Module 4's whole argument: visibility is a system you keep running, not a highlight reel you send when something happens." },
        { text: "Skip it and combine the quiet weeks into one longer note later.", correct: false,
          feedback: "Batching defeats the purpose. The value is in it existing weekly, not in the eventual page count." },
        { text: "Switch to only sending it during busier, more eventful stretches.", correct: false,
          feedback: "This turns visibility into an exception report, which is the opposite of what Module 4 is building toward." }
      ]
    },
    {
      module: "MODULE 05 — THE TITLE",
      q: "You've delivered the case and made a specific ask: title, reporting line, one comp number. Your principal starts thinking out loud about logistics. Per the case, the ask, the pause, what should you be doing right now?",
      options: [
        { text: "Nodding along and adding more supporting evidence as they think, to help move things along.", correct: false,
          feedback: "This fills the pause with justification you've already made. The workbook is specific: resist that urge." },
        { text: "Staying quiet and letting them work through it, even though it's uncomfortable.", correct: true,
          feedback: "This is the pause, exactly as Module 5 defines it. Silence after a clear ask is their thinking time, not a gap to fill." },
        { text: "Politely restating your ask in case it got lost in the small talk.", correct: false,
          feedback: "Restating breaks the pause just as much as over-explaining does. You already made your case once." },
        { text: "Offering to lower your ask slightly to make the decision easier for them.", correct: false,
          feedback: "This undercuts the case before they've even responded to it. Nothing in Module 5 calls for negotiating against yourself." }
      ]
    },
    {
      module: "MODULE 05 — THE TITLE",
      q: "Your principal agrees to the Chief of Staff title on the spot, but doesn't mention pay. Per the workbook's honest note on money, what's the right next move?",
      options: [
        { text: "Assume a raise will follow naturally once the new title is official.", correct: false,
          feedback: "This is precisely what the workbook warns against: the title carrying the compensation conversation on its own." },
        { text: "Raise the compensation number explicitly, as its own separate ask.", correct: true,
          feedback: "Module 5 is direct about this: benchmark your number, and treat it as its own ask, not a side effect of the title." },
        { text: "Wait for the next scheduled review to bring up pay, so it doesn't seem greedy.", correct: false,
          feedback: "The workbook ties the ask to delivered work, not to the calendar. Waiting for a review disconnects the two." },
        { text: "Let it go this round, since getting the title at all already feels like a win.", correct: false,
          feedback: "This leaves half the actual ask unmade. The case was for the title and the number." }
      ]
    },
    {
      module: "MODULE 06 — DAY ONE",
      q: "It's day 40 of the new title. You still haven't set up the visibility or tracking systems from Module 4, but you have started redirecting old admin requests. Per the ninety-day plan, are you on track?",
      options: [
        { text: "Yes, day 40 is still early, and systems can wait until closer to day 90.", correct: false,
          feedback: "The plan puts systems in the 30-to-60-day window, not day 90. This pushes it a full stage too late." },
        { text: "No, day 40 sits inside the 30-to-60-day window, where those systems are supposed to be getting built.", correct: true,
          feedback: "Exactly the plan from Module 6: days 1–30 drop old habits, days 30–60 build the systems, days 60–90 renegotiate patterns out loud." },
        { text: "Yes, redirecting admin requests is the harder habit, so systems can reasonably come second.", correct: false,
          feedback: "Both tracks run in parallel in the plan. Deprioritizing one isn't part of the design." },
        { text: "It doesn't matter, the ninety-day plan is just a rough suggestion, not a real timeline.", correct: false,
          feedback: "The plan is built in specific thirty-day windows for a reason. Treating it as optional defeats its purpose." }
      ]
    },
    {
      module: "MODULE 06 — DAY ONE",
      q: "By day 75, a colleague still routes basic scheduling requests to you like old times, and you've been quietly absorbing it. Per the day 60–90 guidance, what's actually overdue?",
      options: [
        { text: "Nothing, quietly absorbing it doesn't really hurt anyone.", correct: false,
          feedback: "It costs you the same slow slide back into old scope that Module 6 explicitly warns about." },
        { text: "A direct, spoken conversation about the pattern, not just quietly handling it differently.", correct: true,
          feedback: "This is the day 60–90 stage specifically: renegotiating old patterns out loud, said directly, not just assumed or absorbed." },
        { text: "An email to your principal complaining about the colleague.", correct: false,
          feedback: "Wrong audience and wrong method. The conversation belongs with the colleague, not a complaint upstream." },
        { text: "Continuing to redirect it silently, without ever naming the pattern out loud.", correct: false,
          feedback: "This was the right move on day one. By day 75, the workbook is explicit that it needs to be said directly." }
      ]
    },
    {
      module: "BONUS — FOR LEADERS",
      q: "A founder tells you: “Our meetings all end in agreement, but nothing happens afterward, and I'm the only one who can unblock two teams when they're stuck.” Per the bonus section, what is this actually an example of?",
      options: [
        { text: "Two personal signals, both about the founder's own calendar.", correct: false,
          feedback: "Only the second half is personal. The first is about the organization, not any one person's time." },
        { text: "One organizational signal (follow-through failure) and one personal signal (single point of failure).", correct: true,
          feedback: "That's exactly how the bonus section splits it: organizational signals about the company, personal signals about the founder's own week." },
        { text: "Two organizational signals, unrelated to the founder personally.", correct: false,
          feedback: "The bottleneck described is specifically about the founder being the single point of failure, which the bonus section calls a personal signal." },
        { text: "Neither counts, these are just normal growing pains at any size of company.", correct: false,
          feedback: "Both are named directly as signals in the bonus section, not dismissed as background noise." }
      ]
    },
    {
      module: "BONUS — FOR LEADERS",
      q: "A 40-person company is heading into a six-month market-entry push. There's no heavy board cadence, and the coordination load doesn't come close to filling 40 hours a week. Per the workbook's own guidance, what should they hire?",
      options: [
        { text: "A full-time Chief of Staff, since any real growth push justifies a permanent hire.", correct: false,
          feedback: "The workbook ties full-time specifically to a 40-hour coordination surface, which this company doesn't have yet." },
        { text: "A fractional Chief of Staff, scoped to the market-entry push.", correct: true,
          feedback: "This matches the bonus section's guidance exactly: fractional fits a defined push under roughly 25 hours a week, in the 15-to-100 person range." },
        { text: "No one. Wait until the company crosses 100 people.", correct: false,
          feedback: "This ignores the workbook's own carve-out for a defined push, which doesn't require crossing the 100-person mark first." },
        { text: "Two part-time hires to split the coordination work between them.", correct: false,
          feedback: "This isn't a model the workbook describes. It specifically frames the choice as fractional versus full time, not split part-time roles." }
      ]
    }
  ];

  var current = 0;
  var score = 0;
  var answered = false;

  function renderProgress() {
    progressEl.innerHTML = '';
    for (var i = 0; i < questions.length; i++) {
      var d = document.createElement('div');
      d.className = 'dot' + (i === current ? ' active' : '') + (i < current ? ' done' : '');
      progressEl.appendChild(d);
    }
  }

  function renderQuestion() {
    answered = false;
    var item = questions[current];
    renderProgress();

    var optsHtml = '';
    item.options.forEach(function (opt, idx) {
      optsHtml += '<button class="opt" type="button" data-idx="' + idx + '">' + opt.text + '</button>';
    });

    card.innerHTML =
      '<div class="mod-label">' + item.module + '</div>' +
      '<div class="question">' + item.q + '</div>' +
      '<div class="options">' + optsHtml + '</div>' +
      '<div class="dial-wrap">' +
        '<div class="dial-labels"><span>EA instinct</span><span>CoS instinct</span></div>' +
        '<div class="dial-track">' +
          '<div class="dial-fill" id="quizDialFill"></div>' +
          '<div class="dial-marker" id="quizDialMarker"></div>' +
        '</div>' +
      '</div>' +
      '<div class="feedback" id="quizFeedback" aria-live="polite">' +
        '<span class="feedback-tag" id="quizFeedbackTag"></span>' +
        '<p id="quizFeedbackNote"></p>' +
      '</div>' +
      '<button class="next-btn" type="button" id="quizNextBtn">' + (current === questions.length - 1 ? 'See your results' : 'Next question') + '</button>';

    card.querySelectorAll('.opt').forEach(function (btn) {
      btn.addEventListener('click', function () { selectOption(parseInt(btn.dataset.idx, 10)); });
    });
    document.getElementById('quizNextBtn').addEventListener('click', nextQuestion);
  }

  function selectOption(idx) {
    if (answered) return;
    answered = true;
    var item = questions[current];
    var chosen = item.options[idx];
    if (chosen.correct) score++;

    card.querySelectorAll('.opt').forEach(function (btn, i) {
      btn.disabled = true;
      if (i === idx) {
        btn.classList.add(chosen.correct ? 'correct' : 'incorrect');
        var tag = document.createElement('div');
        tag.className = 'opt-tag ' + (chosen.correct ? 'correct-tag' : 'incorrect-tag');
        tag.textContent = chosen.correct ? '✓ Correct — that’s the shift' : '— Not quite yet';
        btn.appendChild(tag);
      } else if (item.options[i].correct) {
        btn.classList.add('correct');
      }
    });

    var marker = document.getElementById('quizDialMarker');
    var fill = document.getElementById('quizDialFill');
    if (chosen.correct) {
      marker.style.left = '100%';
      fill.style.left = '50%';
      fill.style.width = '50%';
      fill.classList.add('right');
    } else {
      marker.style.left = '0%';
      fill.style.left = '0%';
      fill.style.width = '50%';
      fill.classList.remove('right');
    }

    var fb = document.getElementById('quizFeedback');
    var fbTag = document.getElementById('quizFeedbackTag');
    var fbNote = document.getElementById('quizFeedbackNote');
    fbTag.textContent = chosen.correct ? 'Correct' : 'Not quite';
    fbTag.className = 'feedback-tag ' + (chosen.correct ? 'correct' : 'incorrect');
    fbNote.textContent = chosen.feedback;
    fb.classList.add('show');

    document.getElementById('quizNextBtn').classList.add('show');
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      current++;
      renderQuestion();
    } else {
      renderSummary();
    }
  }

  function renderSummary() {
    current = questions.length;
    renderProgress();
    document.querySelectorAll('.dot').forEach(function (d) { d.classList.add('done'); });

    var message;
    if (score === questions.length) {
      message = "Ten for ten, across every module and the bonus section. That's not luck at this point, that's a working operating system. Module five is worth reading closely: it's time to build the case.";
    } else if (score >= questions.length * 0.7) {
      message = "Strong instincts across most of the workbook, with a few spots worth a second look. Reread the modules behind the ones you missed — the framework is in there, just not fully load-bearing yet.";
    } else if (score >= questions.length / 2) {
      message = "About half your instincts already point toward Chief of Staff work. The rest is habit, not ability. Go back through the specific modules where you landed on the old instinct.";
    } else {
      message = "Most of your instincts are still solidly EA, and that's completely fine, it's genuinely skilled work. If a real pull toward CoS work is there, start with Module 1 and rebuild the habit one decision at a time.";
    }

    var shareUrl = 'https://greattalk.africa/quiz.html';
    var shareText = 'I scored ' + score + '/' + questions.length + ' on the Great Talk Africa Quick Gut Check — EA or Chief of Staff instincts. Take it yourself:';

    card.innerHTML =
      '<div class="summary">' +
        '<div class="mod-label" style="text-align:center;">YOUR RESULTS</div>' +
        '<div class="big-num">' + score + '<span>/' + questions.length + '</span></div>' +
        '<div style="font-family:\'Poppins\',sans-serif; font-weight:700; font-size:14px; letter-spacing:0.5px; text-transform:uppercase; color:#EFE7D8;">CoS instincts</div>' +
        '<p>' + message + '</p>' +
        '<button class="restart-btn" type="button" id="quizRestartBtn">Take it again</button>' +
        '<p class="share-label">Share your score</p>' +
        '<div class="share-row">' +
          '<a class="share-btn" href="https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + shareUrl) + '" target="_blank" rel="noopener" aria-label="Share on WhatsApp">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.12-2.9-6.99A9.82 9.82 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11a15.6 15.6 0 0 1-1.65-.6c-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.2-.15.32-.3.5-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.16.29.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.25 1.38.29.15.46.13.63-.07.17-.2.72-.83.91-1.12.19-.28.38-.24.63-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.13.07.71-.17 1.39Z"/></svg>' +
            '<span>WhatsApp</span>' +
          '</a>' +
          '<a class="share-btn" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener" aria-label="Share on X">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z"/></svg>' +
            '<span>X</span>' +
          '</a>' +
          '<a class="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener" aria-label="Share on LinkedIn">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z"/></svg>' +
            '<span>LinkedIn</span>' +
          '</a>' +
          '<button class="share-btn" type="button" id="quizCopyBtn" aria-label="Copy quiz link">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H6a2 2 0 0 0-2 2v14h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16h-9V7h9v14Z"/></svg>' +
            '<span id="quizCopyLabel">Copy Link</span>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.getElementById('quizRestartBtn').addEventListener('click', function () {
      current = 0; score = 0;
      renderQuestion();
    });
    var copyBtn = document.getElementById('quizCopyBtn');
    copyBtn.addEventListener('click', function () {
      var label = document.getElementById('quizCopyLabel');
      var reset = function () { label.textContent = 'Copy Link'; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () {
          label.textContent = 'Copied!';
          setTimeout(reset, 2000);
        }).catch(function () {
          window.prompt('Copy this link:', shareUrl);
        });
      } else {
        window.prompt('Copy this link:', shareUrl);
      }
    });
  }

  renderQuestion();
});
