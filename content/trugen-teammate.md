---
title: "TruGen AI Teammate"
unlisted: true
---

<div class="trugen-container" style="position: relative; width: 100%; min-height: 600px; max-height: 85vh; border-radius: 8px; overflow: hidden; background: var(--highlight); display: flex; align-items: center; justify-content: center; margin-top: 1.5rem; border: 1px solid var(--lightgray);">
  <span id="trugen-loading" style="position: absolute; font-family: var(--font-body); color: var(--gray); font-size: 0.9rem;">Loading Research Teammate...</span>
  <iframe src="https://app.trugen.ai/embed/13a34647-a3ce-431f-8792-ea649e6e53cc" title="TruGen AI Research Teammate" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 1;" allow="microphone; camera" onload="document.getElementById('trugen-loading').style.display = 'none';"></iframe>
  <div id="trugen-overlay" onclick="if(document.getElementById('trugen-auth-box').style.display==='none'){document.getElementById('trugen-auth-box').style.display='block';this.style.background='rgba(0,0,0,0.65)';this.style.backdropFilter='blur(4px)';this.style.cursor='default';document.getElementById('trugen-code-input').focus();}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; background: transparent; transition: background 0.3s ease, backdrop-filter 0.3s ease; cursor: pointer;">
    <div id="trugen-auth-box" onclick="event.stopPropagation();" style="display: none; background: var(--light); padding: 2.5rem 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.25); text-align: center; max-width: 400px; width: 100%; cursor: default;">
      <h3 style="margin-top: 0; color: var(--dark); font-family: var(--font-header);">Access Required</h3>
      <p style="color: var(--gray); margin-bottom: 1.5rem; font-size: 0.95rem;">Please insert your invitation code to start the chat.</p>
      <div style="display: flex; gap: 0.5rem; width: 100%;">
        <input type="password" id="trugen-code-input" onkeypress="if(event.key==='Enter'){document.getElementById('trugen-unlock-btn').click();}" placeholder="Enter code..." style="flex: 1; padding: 0.6rem; border: 1px solid var(--lightgray); border-radius: 4px; background: #fff; color: #1a1a1a; font-family: var(--font-body);" />
        <button id="trugen-unlock-btn" onclick="const code=document.getElementById('trugen-code-input').value.trim().toUpperCase(); if(['PYRAGOGY','TRUGEN2026','INVITE'].includes(code)){document.getElementById('trugen-overlay').style.display='none';}else{document.getElementById('trugen-error').style.display='block';}" style="padding: 0.6rem 1.2rem; border: none; border-radius: 4px; background: var(--tertiary); color: var(--light); cursor: pointer; font-weight: bold; font-family: var(--font-header);">Unlock</button>
      </div>
      <p id="trugen-error" style="color: #e53935; display: none; margin-top: 1rem; font-size: 0.9rem; margin-bottom: 0;">Invalid invite code.</p>
    </div>
  </div>
</div>
