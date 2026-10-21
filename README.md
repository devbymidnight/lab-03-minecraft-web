# Minecraft Tech Lab: το δικό σου server website

Θα προσαρμόσεις ένα έτοιμο website για έναν Minecraft server. Θα αλλάξεις περιεχόμενο με HTML, εμφάνιση με CSS και μια αλληλεπίδραση με JavaScript. Το website παρουσιάζει τον server. **Δεν δημιουργεί ούτε φιλοξενεί τον Minecraft game server.**

## Πριν από το lab: εγκατάσταση στα Windows

1. Εγκατάστησε το **VS Code** από https://code.visualstudio.com/download. Άνοιξε το User Installer και ακολούθησε τα βήματα. Η επιλογή «Add to PATH» βοηθά να λειτουργεί το `code .`.
2. Εγκατάστησε **Node.js 24 LTS** από https://nodejs.org/en/download. Διάλεξε Windows Installer (.msi) για την αρχιτεκτονική σου και κράτησε το npm επιλεγμένο. Δεν χρειάζονται πρόσθετα native build tools για αυτό το lab.
3. Προαιρετικά για `git clone`, εγκατάστησε **Git for Windows** από https://git-scm.com/download/win. Οι προεπιλογές αρκούν. Με Download ZIP δεν χρειάζεσαι Git.
4. Κλείσε και ξανάνοιξε το VS Code. Από **Terminal > New Terminal**, εκτέλεσε:

```powershell
node --version
npm --version
git --version
```

Περίμενε Node `v24.x.x`, έναν αριθμό έκδοσης npm και, αν εγκατέστησες Git, `git version ...`. Το project χρησιμοποιεί Vite **8.3.5**, συμβατό με Node.js 24 LTS. Χρειάζεται internet για την πρώτη εγκατάσταση dependencies. Χρησιμοποίησε ενημερωμένο Chrome, Edge ή Firefox.

## 1. Απόκτησε και άνοιξε το project

**Με το πακέτο του μαθήματος:** κάνε Extract All στο ZIP. Στο VS Code επίλεξε **File > Open Folder** και άνοιξε τον φάκελο `minecraft-web-lab`, εκεί όπου βρίσκεται το `package.json`.

**Από το GitHub:** άνοιξε https://github.com/devbymidnight/lab-03-minecraft-web, πάτησε **Code > Download ZIP**, κάνε Extract All και άνοιξε τον φάκελο `lab-03-minecraft-web-main` που περιέχει το `package.json`. Μην εργάζεσαι μέσα στο συμπιεσμένο ZIP.

**Εναλλακτικά, με Git:**

```powershell
mkdir lab-03-minecraft-web
git clone https://github.com/devbymidnight/lab-03-minecraft-web.git
cd lab-03-minecraft-web
code .
```

Αν το `code .` δεν αναγνωρίζεται, άνοιξε με **File > Open Folder** τον φάκελο `lab-03-minecraft-web`. Το repository περιέχει τα αρχεία του website στο root. Το πακέτο του μαθήματος τα περιέχει μέσα στο `minecraft-web-lab`. Και στις δύο περιπτώσεις δουλεύεις στον φάκελο με το `package.json`.

## 2. Εκκίνηση

Στο terminal του φακέλου που περιέχει το `package.json`:

```powershell
npm ci
npm run dev
```

- `npm ci`: εγκαθιστά τις ακριβείς dependency versions του `package-lock.json`. Δεν διαγράφουμε το lockfile.
- `npm run dev`: ξεκινά τον development server του Vite.
- Άνοιξε **ακριβώς το localhost URL που εμφανίζει το terminal**, συνήθως `http://localhost:5173`. Αν το port χρησιμοποιείται, το Vite μπορεί να επιλέξει άλλο.
- `localhost`: ο δικός σου υπολογιστής. Το link δεν δημοσιεύει το website στο internet. Το terminal μένει ανοιχτό όσο δουλεύεις.
- Για διακοπή πάτησε **Ctrl+C** στο terminal. Αν τα Windows ζητήσουν επιβεβαίωση, πάτησε Y και Enter.

Αν το PowerShell εμφανίσει «npm.ps1 cannot be loaded», χρησιμοποίησε `npm.cmd ci` και `npm.cmd run dev`, ή επίλεξε **Command Prompt** ως terminal. Δεν χρειάζεται να αλλάξεις την πολιτική ασφαλείας των Windows.

## 3. Τα τρία αρχεία σου

| Αρχείο | Τι αλλάζεις |
|---|---|
| `index.html` | Τίτλο καρτέλας, όνομα στο header/hero/footer, welcome message, περιγραφή και features |
| `style.css` | `--primary`, `--button-text`, `--hero-image` και την εμφάνιση του `.button` |
| `script.js` | `serverIp`, `successMessage` και τον κώδικα του Copy IP button |

Βρες τα σχόλια `ΑΣΚΗΣΗ` με **Ctrl+F**. Πάτησε **Ctrl+S** μετά από κάθε αλλαγή. Το Vite ενημερώνει τον browser αυτόματα.

Η IP βρίσκεται σε **ένα μόνο σημείο**, στο `script.js`. Έτσι η διεύθυνση που βλέπεις συμφωνεί πάντα με αυτήν που αντιγράφει το κουμπί:

```js
const serverIp = 'play.emerald.example';
const successMessage = 'Η IP αντιγράφηκε! Κάνε Paste στο Server Address.';
```

Το `.example` δηλώνει διεύθυνση παραδείγματος. Δεν περιμένουμε να συνδεθούμε σε πραγματικό game server. Χρησιμοποίησε άλλο `.example` για εξάσκηση ή διεύθυνση δικού σου server. Αν αλλάξεις τη διεύθυνση, ενημέρωσε και την επεξηγηματική σημείωση στο τέλος της ενότητας Σύνδεση.

Για διαφορετικό background άλλαξε στο `style.css`:

```css
--hero-image: url('./assets/hero-night.svg');
```

## 4. Οι έξι ασκήσεις

1. Εκκίνησε το website και εντόπισε το όνομα και την IP.
2. Άλλαξε όνομα, welcome message, περιγραφή και ένα feature στο HTML. Άλλαξε την IP στο `script.js`, όπου βρίσκεται η κοινή τιμή.
3. Δοκίμασε άλλο `--primary`, διατήρησε ευανάγνωστα τα γράμματα του button και διάλεξε το νυχτερινό background.
4. Άλλαξε το `successMessage`. Πάτησε και τα δύο Copy IP buttons και κάνε Paste σε ένα πρόχειρο κείμενο για έλεγχο.
5. Δοκίμασε όλα τα navigation links. Άνοιξε DevTools με F12 και το device toolbar με Ctrl+Shift+M σε Chrome/Edge. Δοκίμασε πλάτος 390 px και 1280 px.
6. Παρουσίασε μία αλλαγή HTML, μία CSS και μία αλληλεπίδραση JavaScript. Προαιρετικά δημιούργησε production build.

Ο εικονογραφημένος οδηγός βρίσκεται στο `guides/student-guide.pdf`. Τα βασικά βήματα είναι υποχρεωτικά. Τα optional challenges μπορούν να γίνουν αργότερα.

## 5. Production build και επανεκκίνηση

```powershell
npm run build
npm run preview
```

Το build δημιουργεί τον φάκελο `dist/`. Το preview ελέγχει το build τοπικά, στο URL του terminal. **Το build δεν κάνει deployment.** Αργότερα θα μπορούσες να ανεβάσεις το περιεχόμενο του `dist/` σε static hosting. Δεν χρειάζεσαι cloud account για το lab.

Για να συνεχίσεις άλλη μέρα: άνοιξε ξανά τον ίδιο φάκελο, άνοιξε terminal και τρέξε `npm run dev`. Χρειάζεσαι πάλι `npm ci` μόνο αν λείπει το `node_modules` ή έχει αλλάξει το lockfile.

## Συχνά προβλήματα

| Πρόβλημα | Τι ελέγχεις |
|---|---|
| `node` / `npm` is not recognized | Εγκατάσταση Node.js και νέο terminal ή επανεκκίνηση VS Code |
| `ENOENT ... package.json` | Άνοιξε τον σωστό φάκελο. Το `dir` πρέπει να δείχνει `package.json` |
| Δεν ανοίγει το localhost | Ο dev server πρέπει να τρέχει. Αντέγραψε το τρέχον URL, μαζί με το port |
| Δεν βλέπω την αλλαγή | Ctrl+S, σωστό αρχείο και σωστό tab στον browser |
| Το Copy IP δεν λειτουργεί | Άνοιξε μέσω localhost, όχι με διπλό click στο HTML. Αν το clipboard μπλοκάρεται, ακολούθησε το μήνυμα για χειροκίνητο Copy |
| Δεν συνδέεται το Minecraft | Το `.example` είναι placeholder. Το website δεν ξεκινά game server |
| Η εγκατάσταση dependencies αποτυγχάνει | Έλεγξε internet/proxy με τον εκπαιδευτή. Μην απενεργοποιείς antivirus ή ασφάλεια |
| Δεν εμφανίζεται εικόνα | Έλεγξε το ακριβές όνομα και το `./assets/` στο CSS |

## Ασφάλεια και υλικό

Μην βάζεις passwords, private API keys ή προσωπικά στοιχεία σε HTML/CSS/JavaScript. Ο browser μπορεί να διαβάσει τα frontend αρχεία. Τα Discord/social στοιχεία είναι σαφώς σημειωμένα placeholders χωρίς ψεύτικα links. Το project δεν περιέχει login, database ή backend API.

Τα πρωτότυπα vector γραφικά διατίθενται με CC0. Δες `assets/LICENSE.txt`. Το εκπαιδευτικό παράδειγμα δεν συνδέεται με τη Mojang ή τη Microsoft.

Επίσημη τεκμηρίωση: https://vite.dev/guide/ · https://nodejs.org/en/about/previous-releases · https://developer.mozilla.org/en-US/docs/Learn_web_development
