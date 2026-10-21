// ΑΣΚΗΣΗ JAVASCRIPT: άλλαξε τη διεύθυνση ή το μήνυμα επιβεβαίωσης.
// Η IP έχει μία πηγή: ενημερώνει όλα τα σημεία του HTML και τα Copy IP buttons.
const serverIp = 'play.emerald.example';
const successMessage = 'Η IP αντιγράφηκε! Κάνε Paste στο Server Address.';

document.querySelectorAll('.server-ip').forEach((element) => {
  element.textContent = serverIp;
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Κάθε click καλεί αυτή τη function. Το await περιμένει το clipboard.
async function copyServerIp() {
  let message;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(serverIp);
    message = successMessage;
  } catch {
    // Αν ο browser αρνηθεί την πρόσβαση, ο χρήστης έχει εναλλακτική.
    message = `Δεν έγινε αυτόματη αντιγραφή. Επίλεξε την IP ${serverIp} και πάτησε Ctrl+C (ή Copy στο κινητό).`;
  }
  document.querySelectorAll('.copy-status').forEach((element) => {
    element.textContent = message;
  });
}
document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', copyServerIp);
});
