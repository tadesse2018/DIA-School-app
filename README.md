# Diligent School Management System (ደሊጀንት ትምህርት ቤት አስተዳደር ሲስተም)

ይህ መተግበሪያ የትምህርት ቤቶችን አስተዳደር፣ የተማሪዎች ምዝገባ፣ ውጤት፣ አቴንዳንስ፣ ሰራተኞች እና የክፍል መርሃ-ግብር በዘመናዊ መልኩ ለመቆጣጠር እና ሪፖርቶችን ለማውጣት የተዘጋጀ ሙሉ ሲስተም ነው።

---

## 🚀 ለ GitHub እና ለኮምፒውተርዎ ዝግጅት (GitHub & Offline Setup Guide)

ይህ ሲስተም **Cloud Database (Firebase)** ብቻ ሳይወሰን **በኮምፒውተርዎ ላይ ያለ ኢንተርኔት (Offline / LocalStorage)** ሙሉ በሙሉ መስራት እንዲችል ተደርጎ የተሰራ ነው። 

### 1. በ GitHub ላይ ሎድ ለማድረግ / ለመጫን (Deploying to GitHub)
1. ይህንን ፕሮጀክት ፎልደር ወደ **GitHub** ሪፖዚተሪ (Repository) ፕሽ (Push) ያድርጉ።
2. በ **Vercel**፣ **Netlify** ወይም **GitHub Pages** ላይ ሪፖዚተሪውን በማገናኘት በአንድ ክሊክ በነጻ የኢንተርኔት ሊንክ ማግኘት ይችላሉ።
   - Build Command: `npm run build`
   - Output Directory: `dist`

### 2. በኮምፒውተርዎ ላይ ያለ ኢንተርኔት (Offline Desktop Setup)
1. ኮምፒውተርዎ ላይ **Node.js** መጫኑን ያረጋግጡ ([nodejs.org](https://nodejs.org/)).
2. ቴርሚናል (Terminal / CMD) ይክፈቱ እና ወደ ፕሮጀክቱ ፎልደር ይግቡ።
3. ፋይሎቹን ለማስተካከል ለአንድ ጊዜ ብቻ ይህንን ትዕዛዝ ያሂዱ፡
   ```bash
   npm install
   ```
4. ሲስተሙን ለማስጀመር፡
   ```bash
   npm run dev
   ```
5. ብሮውዘርዎ ላይ `http://localhost:3000` ብለው በመክፈት መጠቀም ይችላሉ!

---

## 🛠️ ዋና ዋና አገልግሎቶች (Core Features)
- **የተማሪዎች ምዝገባና መደብ (Student Roster & Sorting)**: በCSV የተጫኑ ከ236 በላይ ተማሪዎች በክፍል፣ በስም እና በID መደብ።
- **የሰራተኞችና መምህራን አቴንዳንስ (Staff Attendance)**: የጧት እና የከሰዓት ሰንጠረዦች (Morning & Afternoon Attendance) ከአውቶማቲክ ሙላ (Auto-fill) ጋር።
- **ውጤቶች እና ሪፖርት ካርዶች (Grades & PDF Reports)**: ተማሪዎች ውጤታቸውን በPDF ማውረድ ይችላሉ።

Developed with ❤️ for Ethiopian Schools.

