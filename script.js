'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
let toastTimer;
document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const command = button.dataset.copy;
    const toast = document.getElementById('toast');
    try {
      await navigator.clipboard.writeText(command);
      toast.textContent = `Αντιγράφηκε το ${command}. Επικόλλησέ το στο Discord.`;
    } catch {
      toast.textContent = `Η αντιγραφή δεν είναι διαθέσιμη. Γράψε ${command} στο Discord.`;
    }
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4500);
  });
});
