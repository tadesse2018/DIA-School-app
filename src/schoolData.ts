export interface Student {
  id: string; // ID-XXXX
  name: string;
  grade: string;
  section: string; // 'A', 'B', 'C'
  gender: 'Male' | 'Female';
  registeredBy: string;
  timestamp: string;
  parentEmail?: string; // Parent account email
  parentPhone?: string; // Parent/Guardian phone number
  address?: string; // Home address
  digitalId?: string; // Student Digital ID
  age?: number; // Student age
  photo?: string; // Base64 Data URL for student profile photo
  academicYear?: string; // e.g. 2025/2026
  paymentId?: string; // Payment ID / Code
}

export interface Teacher {
  id: string; // TCH-XXXX
  name: string;
  gender?: 'Male' | 'Female'; // Teacher gender
  age?: number; // Teacher age
  educationLevel: string; // e.g. Diploma, Degree, Masters
  phone: string;
  email?: string; // e.g. teacher@school.com
  photo?: string; // Captured camera photo or uploaded base64 data URL
  subjects: string[]; // e.g. ['Math', 'English']
  assignedClass: string; // e.g. 'Grade 8'
  assignedSection: string; // e.g. 'A'
  classAllocations?: { grade: string; section: string; subjects?: string[]; }[]; // Multiple class & section allocations
  isHomeroomTeacher: boolean;
  registeredBy: string;
  timestamp: string;
}

// Standard School Logo and Official Branding
export const DEFAULT_SCHOOL_LOGO = '/school_logo.png';
export const DEFAULT_SCHOOL_NAME_AMH = 'ዲሊጀንት ኢንተሌክቿልስ የትምህርት ተቋም አ.ማ';
export const DEFAULT_SCHOOL_NAME_ENG = "Diligent Intellectuals' Educational Inst. S.C";
export const DEFAULT_SCHOOL_MOTTO_AMH = 'የትጉህ ምሁራን የትምህርት ተቋም';
export const DEFAULT_SCHOOL_MOTTO_ENG = "Diligent Intellectuals' Educational Institution";

// Standard Ethiopian Curriculum Subject Presets & Defaults
export const DEFAULT_SCHOOL_SUBJECTS: string[] = [
  'Afaan Oromo',
  'Moral Education',
  'Mathematics',
  'English',
  'Amharic',
  'General Science',
  'Social Studies',
  'Citizenship',
  'Information Technology',
  'Environmental Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Physical Education (PHE)',
  'Art & Music (PVA)',
  'Career & Technical Education (CTE)',
  'Economics',
  'History',
  'Geography',
  'Tigrigna'
];

export const getSubjectDisplayName = (subject: string): string => {
  if (!subject) return '';
  const s = subject.trim();
  const lower = s.toLowerCase();

  if (lower === 'afaan oromo' || lower === 'afaan oromoo' || lower === 'afanoromo' || lower.includes('orom')) {
    return 'አፋን ኦሮሞ (Afaan Oromoo)';
  }
  if (lower === 'moral' || lower === 'moral education' || lower.includes('moral') || lower.includes('ግብረገብ') || lower.includes('ግብረ-ገብ')) {
    return 'ግብረገብ (Moral Education)';
  }
  if (lower === 'mathematics' || lower === 'maths' || lower === 'math' || lower.includes('ሒሳብ')) {
    return 'ሒሳብ (Mathematics)';
  }
  if (lower === 'english' || lower.includes('እንግሊዝኛ')) {
    return 'እንግሊዝኛ (English)';
  }
  if (lower === 'amharic' || lower.includes('አማርኛ')) {
    return 'አማርኛ (Amharic)';
  }
  if (lower === 'general science' || lower === 'science' || lower.includes('ሳይንስ')) {
    return 'ሳይንስ (General Science)';
  }
  if (lower === 'environmental science' || lower.includes('አካባቢ')) {
    return 'አካባቢ ሳይንስ (Env. Science)';
  }
  if (lower === 'social studies' || lower.includes('ህብረተሰብ')) {
    return 'ህብረተሰብ ጥናት (Social Studies)';
  }
  if (lower === 'citizenship' || lower === 'civics' || lower.includes('ዜግነት') || lower.includes('ስነ-ዜጋ')) {
    return 'ዜግነት / ስነ-ዜጋ (Citizenship)';
  }
  if (lower === 'information technology' || lower === 'it' || lower.includes('ቴክኖሎጂ') || lower.includes('ኢንፎርሜሽን')) {
    return 'መረጃ ቴክኖሎጂ (IT)';
  }
  if (lower === 'physics' || lower.includes('ፊዚክስ')) {
    return 'ፊዚክስ (Physics)';
  }
  if (lower === 'chemistry' || lower.includes('ኬሚስትሪ')) {
    return 'ኬሚስትሪ (Chemistry)';
  }
  if (lower === 'biology' || lower.includes('ባዮሎጂ')) {
    return 'ባዮሎጂ (Biology)';
  }
  if (lower === 'physical education (phe)' || lower === 'hpe' || lower === 'phe' || lower.includes('ማጎልመሻ') || lower.includes('ስፖርት')) {
    return 'የሰውነት ማጎልመሻ (PHE/Sport)';
  }
  if (lower === 'art & music (pva)' || lower === 'art' || lower === 'pva' || lower.includes('ጥበብ')) {
    return 'ስነ-ጥበብ (Art/PVA)';
  }
  if (lower.includes('cte') || lower.includes('career') || lower.includes('ሙያ')) {
    return 'የሙያና ቴክኒክ (CTE)';
  }
  if (lower === 'economics' || lower.includes('ኢኮኖሚክስ')) {
    return 'ኢኮኖሚክስ (Economics)';
  }
  if (lower === 'history' || lower.includes('ታሪክ')) {
    return 'ታሪክ (History)';
  }
  if (lower === 'geography' || lower.includes('ጂኦግራፊ')) {
    return 'ጂኦግራፊ (Geography)';
  }
  if (lower === 'tigrigna' || lower.includes('ትግርኛ')) {
    return 'ትግርኛ (Tigrigna)';
  }

  return s;
};

export type StaffCategory = 
  | 'Principal'          // ር/መ (ርዕሰ መምህር)
  | 'Vice Principal'     // ም/ር/መ (ምክትል ርዕሰ መምህር)
  | 'Secretary'          // ፃፉ / ፀሐፊ
  | 'Finance'            // ፋይናንስ
  | 'Cleaner'            // ፅዳት
  | 'Security Guard'     // ጥበቃ
  | 'Head Teacher'       // ዋና መምህር
  | 'Assistant Teacher'  // ረዳት መምህር
  | 'Administrator'      // አጠቃላይ አስተዳደር
  | 'Main Teacher';

export type AdminDivisionCode = 'principal' | 'vice_principal' | 'secretary' | 'finance' | 'cleaner' | 'security';

export interface AdminDivisionInfo {
  code: AdminDivisionCode;
  shortCode: string; // 'ር/መ' | 'ም/ር/መ' | 'ፃፉ' | 'ፋይናንስ' | 'ፅዳት' | 'ጥበቃ'
  titleAmh: string;
  titleEng: string;
  badgeAmh: string;
  primaryCategory: StaffCategory;
  compatibleCategories: StaffCategory[];
  color: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    cardBg: string;
    ring: string;
  };
  reportsTo: string;
  overview: string;
  coreResponsibilities: string[];
  dailyRoutines: string[];
  qualifications: string;
  suggestedSalaryRange: string;
}

export const ADMIN_DIVISIONS: AdminDivisionInfo[] = [
  {
    code: 'principal',
    shortCode: 'ር/መ',
    titleAmh: 'ርዕሰ መምህር (ስራ አስኪያጅ)',
    titleEng: 'Principal / Head of School',
    badgeAmh: 'ር/መ',
    primaryCategory: 'Principal',
    compatibleCategories: ['Principal', 'Head Teacher', 'Administrator'],
    color: {
      badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
      badgeText: 'text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800',
      border: 'border-purple-200 dark:border-purple-800/80',
      accent: 'from-purple-600 to-indigo-700',
      cardBg: 'bg-purple-50/40 dark:bg-purple-950/15',
      ring: 'focus:ring-purple-500'
    },
    reportsTo: 'የትምህርት ቢሮ እና የትምህርት ቤቱ የበላይ ቦርድ / ባለቤት (Education Bureau & School Board)',
    overview: 'የትምህርት ቤቱ የበላይ መሪ፣ ስትራቴጂካዊ ውሳኔ ሰጪ፣ የመምህራንና ሰራተኞች አስተዳዳሪ እንዲሁም ከትምህርት ቢሮና ከወላጆች ጋር ዋነኛ አገናኝ።',
    coreResponsibilities: [
      'አጠቃላይ የትምህርት ቤቱን የመማር ማስተማር እና አስተዳደራዊ ስራዎች በበላይነት መምራትና ማስተባበር',
      'የትምህርት ቤቱን ዓመታዊ ዕቅድና በጀት ማዘጋጀት፣ ማጽደቅና አፈፃፀሙን መከታተል',
      'የመምህራንና የአስተዳደር ሰራተኞችን ቅጥር፣ ስምሪት፣ ምዘናና የሙያ ማሻሻያ ስልጠናዎች መምራት',
      'የትምህርት ጥራት ቁጥጥር፣ የፈተና እና የተማሪዎች ውጤት ፖሊሲዎችን ማረጋገጥና ማጽደቅ',
      'ከትምህርት ጽ/ቤት፣ ከወላጆች ኮሚቴና ከህብረተሰብ ጋር ስትራቴጂካዊ ግንኙነት መፍጠር',
      'የትምህርት ቤቱን ህጎች፣ ዲስፕሊንና ፖሊሲዎች ማስከበርና በመጨረሻ ጉዳዮች ላይ የመጨረሻ ውሳኔ መስጠት'
    ],
    dailyRoutines: [
      'የጠዋት ግቢ ምልከታ፣ የሰንደቅ ዓላማ ስነ-ስርዓት እና የትምህርት መጀመሪያ ሁኔታን መከታተል',
      'የመማሪያ ክፍሎችን የትምህርት ሁኔታ በዘፈቀደ መጎብኘት (Classroom Walkthrough)',
      'ከምክትል ርዕሰ መምህራንና ከአስተዳደር ሰራተኞች ጋር የዕለት አጭር ስብሰባ ማካሄድ',
      'የወላጆች አቤቱታዎችንና ልዩ የዲስፕሊን ጉዳዮችን ማስተናገድና ውሳኔ መስጠት'
    ],
    qualifications: 'ሁለተኛ ዲግሪ (MA/MSc in Educational Leadership/Management) ወይም የመጀመሪያ ዲግሪ በ5+ ዓመት የት/ቤት አመራር ልምድ',
    suggestedSalaryRange: '18,000 - 25,000 ETB'
  },
  {
    code: 'vice_principal',
    shortCode: 'ም/ር/መ',
    titleAmh: 'ምክትል ርዕሰ መምህር (አካዳሚክና ዲስፕሊን)',
    titleEng: 'Vice Principal / Academic & Discipline Head',
    badgeAmh: 'ም/ር/መ',
    primaryCategory: 'Vice Principal',
    compatibleCategories: ['Vice Principal', 'Head Teacher'],
    color: {
      badgeBg: 'bg-blue-100 dark:bg-blue-950/60',
      badgeText: 'text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800',
      border: 'border-blue-200 dark:border-blue-800/80',
      accent: 'from-blue-600 to-indigo-600',
      cardBg: 'bg-blue-50/40 dark:bg-blue-950/15',
      ring: 'focus:ring-blue-500'
    },
    reportsTo: 'ለርዕሰ መምህር (School Principal)',
    overview: 'የዕለት ተዕለት የመማር ማስተማር ሂደቱን፣ የተማሪዎች ዲስፕሊን፣ የመምህራን የክፍል መርሃ-ግብር እና ተከታታይ ምዘናን በቅርበት የሚመራና የሚያስተባብር።',
    coreResponsibilities: [
      'ሳምንታዊና ወርሃዊ የክፍል ክፍለ-ጊዜ መርሃ-ግብር (Roster / Timetable) ማዘጋጀትና መቆጣጠር',
      'የመምህራን የትምህርት ዕቅድ (Lesson Plan) እና የማስተማሪያ ማስታወሻዎችን መገምገምና መከታተል',
      'የተማሪዎች የሰዓት አከባበር፣ መገኘትና ስነ-ምግባር (Discipline) መከታተልና ማረም',
      'የመካከለኛና የማጠቃለያ ፈተናዎች አወጣጥ፣ ቁጥጥርና የተማሪዎች ማርክ አሰጣጥ ማስተባበር',
      'ርዕሰ መምህሩ በማይኖሩበት ወቅት ተክቶ ትምህርት ቤቱን በውክልና መምራት',
      'የትምህርት አጋዥ ክለቦች፣ የቤተ-ሙከራ እና የቤተ-መጽሐፍት አገልግሎቶችን መከታተል'
    ],
    dailyRoutines: [
      'የመምህራን መገኘትና የክፍል መግቢያ ሰዓት ማረጋገጥ፤ የቀሩ መምህራን ምትክ (Substitute) መመደብ',
      'በመማሪያ ክፍሎች ዙሪያ የዲስፕሊንና የዝምታ ቁጥጥር ማድረግ',
      'የተማሪዎች የዘገዩና የቀሩ መረጃዎችን መገምገም',
      'ከመምህራን ጋር በስራ አፈፃፀም ዙሪያ መወያየትና መደገፍ'
    ],
    qualifications: 'የመጀመሪያ/ሁለተኛ ዲግሪ (BA/BSc/BEd/MA in Education/Subject Specialist) በ3+ ዓመት ልምድ',
    suggestedSalaryRange: '15,000 - 20,000 ETB'
  },
  {
    code: 'secretary',
    shortCode: 'ፃፉ',
    titleAmh: 'ፀሐፊና ሰነድ ያዥ (ሬጅስትራር)',
    titleEng: 'Secretary, Registrar & Records Clerk',
    badgeAmh: 'ፃፉ',
    primaryCategory: 'Secretary',
    compatibleCategories: ['Secretary', 'Administrator'],
    color: {
      badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
      badgeText: 'text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      border: 'border-amber-200 dark:border-amber-800/80',
      accent: 'from-amber-500 to-orange-600',
      cardBg: 'bg-amber-50/40 dark:bg-amber-950/15',
      ring: 'focus:ring-amber-500'
    },
    reportsTo: 'ለርዕሰ መምህር እና ለምክትል ርዕሰ መምህር',
    overview: 'የትምህርት ቤቱ ይፋዊ ሰነዶች፣ የተማሪዎች ቋሚ ማህደር፣ የደብዳቤዎች ልውውጥ፣ የስብሰባ ቃለ-ጉባኤ እና የእንግዶች መቀበያ ኃላፊ።',
    coreResponsibilities: [
      'አዳዲስ ተማሪዎችን መመዝገብ፣ የተማሪዎች የግል ማህደር (Student Files) እና ሰነዶችን ማደራጀት',
      'ይፋዊ ገቢና ወጪ ደብዳቤዎችን በኮድ መመዝገብ፣ መላክና ጥንቃቄ በተሞላበት መልኩ ማስቀመጥ',
      'የተማሪዎች የትራንስክሪፕት፣ የትምህርት ማስረጃና የመልቀቂያ ደብዳቤዎችን ማዘጋጀት',
      'የትምህርት ቤት አስተዳደርና የወላጆች ስብሰባ ቃለ-ጉባኤ (Minutes) መያዝና ማሰራጨት',
      'ወደ ትምህርት ቤቱ የሚመጡ እንግዶችን፣ ወላጆችንና ጥሪ የተደረገላቸውን አካላት ማስተናገድ',
      'የስልክ፣ የኢሜይል እና የደብዳቤ መልዕክቶችን ለሚመለከተው የስራ ክፍል ማስተላለፍ'
    ],
    dailyRoutines: [
      'የቢሮ ገቢ ሰነዶችንና ጥያቄዎችን መመዝገብና መመለስ',
      'የወላጆች ማረጋገጫና የመረጃ ጥያቄዎችን በቅንነት ማስተናገድ',
      'የተማሪዎች የዕለት ማህደሮችና ዝርዝር መረጃዎችን በሲስተም ማዘመን',
      'የጽሕፈት መሣሪያዎችና የቢሮ ዕቃዎች ክምችት መቆጣጠር'
    ],
    qualifications: 'ዲፕሎማ ወይም ዲግሪ በSecretarial Science / Office Management / IT / Management',
    suggestedSalaryRange: '8,500 - 13,000 ETB'
  },
  {
    code: 'finance',
    shortCode: 'ፋይናንስ',
    titleAmh: 'ሂሳብና ፋይናንስ (አካውንታንትና ካሺየር)',
    titleEng: 'Finance Officer / Accountant & Cashier',
    badgeAmh: 'ፋይናንስ',
    primaryCategory: 'Finance',
    compatibleCategories: ['Finance', 'Administrator'],
    color: {
      badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
      badgeText: 'text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
      border: 'border-emerald-200 dark:border-emerald-800/80',
      accent: 'from-emerald-600 to-teal-700',
      cardBg: 'bg-emerald-50/40 dark:bg-emerald-950/15',
      ring: 'focus:ring-emerald-500'
    },
    reportsTo: 'ለርዕሰ መምህር እና ለትምህርት ቤቱ የበላይ ቦርድ / ባለቤት',
    overview: 'የትምህርት ቤቱን ወርሃዊ የትምህርት ክፍያ መሰብሰብ፣ የሰራተኞች ፔይሮልና ደመወዝ ስሌት፣ ወጪና ገቢን በፋይናንስ ህግ መሰረት መምራት።',
    coreResponsibilities: [
      'የተማሪዎች ወርሃዊ የትምህርት ክፍያ (Tuition Fee) በባንክና በደረሰኝ መሰብሰብና ማረጋገጥ',
      'የሰራተኞችና መምህራን ወርሃዊ ደመወዝ፣ የቀሪ/አርፍዶ ቅጣት እና የተጣራ ፔይሮል ማዘጋጀት',
      'የትምህርት ቤቱን የዕለት ተዕለት ወጪዎች በደረሰኝ መመዝገብና የፔቲ ካሽ (Petty Cash) ማስተዳደር',
      'ወርሃዊና ዓመታዊ የገቢና ወጪ ሂሳብ ሪፖርት (Financial Balance Sheet) ለር/መምህር ማቅረብ',
      'የመንግስት ግብር፣ የጡረታ እና ተያያዥ ህጋዊ ክፍያዎችን በወቅቱ መክፈልና ማሳወቅ',
      'ያልተከፈሉ የተማሪዎች የትምህርት ክፍያዎችን (Unpaid Tuitions) መከታተልና ለወላጆች ማሳወቅ'
    ],
    dailyRoutines: [
      'የዕለቱን የክፍያ ደረሰኞችና የባንክ ገቢ ደረሰኞች ማመሳከርና ማረጋገጥ',
      'የክፍያ መዝገብና የኮምፒውተር የፋይናንስ ሲስተም ማዘመን',
      'የፋይናንስ ጥያቄዎችንና የዕለት ወጪዎችን ማጽደቅና መመዝገብ',
      'የገንዘብ ሣጥን (Cash Drawer) እና የባንክ ሂሳብ ማመጣጠን'
    ],
    qualifications: 'የመጀመሪያ ዲግሪ በAccounting & Finance / Banking / Business Administration',
    suggestedSalaryRange: '12,000 - 18,000 ETB'
  },
  {
    code: 'cleaner',
    shortCode: 'ፅዳት',
    titleAmh: 'ፅዳትና ንፅህና (ሳኒቴሽን)',
    titleEng: 'Sanitation & Janitorial Staff',
    badgeAmh: 'ፅዳት',
    primaryCategory: 'Cleaner',
    compatibleCategories: ['Cleaner'],
    color: {
      badgeBg: 'bg-teal-100 dark:bg-teal-950/60',
      badgeText: 'text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-800',
      border: 'border-teal-200 dark:border-teal-800/80',
      accent: 'from-teal-600 to-cyan-600',
      cardBg: 'bg-teal-50/40 dark:bg-teal-950/15',
      ring: 'focus:ring-teal-500'
    },
    reportsTo: 'ለአስተዳደር ኃላፊ እና ለምክትል ርዕሰ መምህር',
    overview: 'የትምህርት ቤቱ መማሪያ ክፍሎች፣ ቢሮዎች፣ ሽንት ቤቶችና አጠቃላይ የግቢው ንፅህና በየቀኑ ደረጃውን ጠብቆ እንዲቆይ ማድረግ።',
    coreResponsibilities: [
      'ሁሉንም የመማሪያ ክፍሎች፣ ኮሪደሮችና ደረጃዎች ጠዋትና ከሰዓት መጥረግና ማጠብ',
      'የተማሪዎችና የመምህራን ሽንት ቤቶችን በቀን ቢያንስ 3 ጊዜ በፀረ-ተባይ ማጽዳትና ማጠብ',
      'የትምህርት ቤቱን ቢሮዎች፣ ቤተ-ሙከራዎችና አዳራሾች ንፅህና መጠበቅና አቧራ ማጽዳት',
      'የደረቅና የፈሳሽ ቆሻሻ ማጠራቀሚያዎችን በየቀኑ ባዶ ማድረግና ወደ ቆሻሻ ገንዳ ማጓጓዝ',
      'የንፁህ መጠጥ ውሃ መስመሮችና የእጅ መታጠቢያዎች ሁልጊዜ ንፁህና የሚሰሩ መሆናቸውን ማረጋገጥ',
      'የጽዳት ሳሙና፣ ክሎሪንና ተያያዥ ኬሚካሎችን በጥንቃቄ መያዝና አጠቃቀምን መቆጣጠር'
    ],
    dailyRoutines: [
      'ተማሪዎች ከመድረሳቸው በፊት (ጠዋት 12:30 - 1:30) የመማሪያ ክፍሎችንና ግቢውን ማዘጋጀት',
      'በእረፍት ሰዓት የሽንት ቤቶችንና ኮሪደሮችን ፈጣን ጽዳት ማድረግ',
      'ትምህርት ሲያልቅ የመጨረሻ ጥልቅ ጽዳትና መስኮቶችን መዝጋት',
      'የቆሻሻ ማጠራቀሚያዎችን ማስወገድና ግቢውን ማስዋብ'
    ],
    qualifications: '10ኛ ወይም 12ኛ ክፍል ያጠናቀቀች/ቀ፣ የተረጋገጠ የታማኝነትና የጤና ማረጋገጫ',
    suggestedSalaryRange: '5,000 - 7,500 ETB'
  },
  {
    code: 'security',
    shortCode: 'ጥበቃ',
    titleAmh: 'የግቢ ደህንነትና ጥበቃ',
    titleEng: 'Campus Security & Gate Control Guard',
    badgeAmh: 'ጥበቃ',
    primaryCategory: 'Security Guard',
    compatibleCategories: ['Security Guard'],
    color: {
      badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
      badgeText: 'text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800',
      border: 'border-rose-200 dark:border-rose-800/80',
      accent: 'from-rose-600 to-red-700',
      cardBg: 'bg-rose-50/40 dark:bg-rose-950/15',
      ring: 'focus:ring-rose-500'
    },
    reportsTo: 'ለአስተዳደር ኃላፊ እና ለርዕሰ መምህር',
    overview: 'የትምህርት ቤቱን ተማሪዎች፣ መምህራን፣ ሰራተኞችና ንብረት 24/7 ከማንኛውም የፀጥታና ደህንነት ስጋት መጠበቅ፣ የመግቢያ በር ቁጥጥር።',
    coreResponsibilities: [
      'የትምህርት ቤቱን ዋና መግቢያና መውጫ በር 24 ሰዓት በፈረቃ መጠበቅና መቆጣጠር',
      'ማንኛውም እንግዳ ወደ ግቢው ሲገባ ማንነቱን ማረጋገጥ፣ መታወቂያ መመዝገብና ባጅ መስጠት',
      'ተማሪዎች ያለ ፈቃድ ወረቀት (Gate Pass) ከትምህርት ሰዓት ውጪ እንዳይወጡ መከላከል',
      'አርፍደው የሚመጡ ተማሪዎችንና እንግዶችን በተዘጋጀው የበር መዝገብ ላይ ማስፈር',
      'የትምህርት ቤቱ መማሪያ ክፍሎች፣ ላብራቶሪዎችና ቢሮዎች በሮችና መስኮቶች መቆለፋቸውን ማረጋገጥ',
      'በግቢው ዙሪያ ያልተፈቀዱ ሰዎች፣ አደገኛ ዕቃዎች ወይም አልኮል እንዳይገቡ ፍተሻ ማድረግ',
      'ድንገተኛ የእሳት፣ የህክምና ወይም የፀጥታ ችግር ሲፈጠር አፋጣኝ እርምጃ መውሰድና ማሳወቅ'
    ],
    dailyRoutines: [
      'የጠዋት የተማሪዎችና ሰራተኞች መግቢያ በር ፍተሻና ሰላማዊ አቀባበል',
      'የቀን ግቢ ዙሪያ ቅኝት (Patrol) በየ 1 ሰዓቱ ማድረግ',
      'የተማሪዎች መውጫ ሰዓት የተረጋጋ የትራፊክና የበር እንቅስቃሴ መምራት',
      'የሌሊት ፈረቃ ርክክብና የብርሃንና መቆለፊያዎች ፍተሻ ማካሄድ'
    ],
    qualifications: 'የወታደራዊ ወይም የጥበቃ ስልጠና ሰርተፍኬት፣ የታደሰ የቀበሌ ማረጋገጫና መልካም ስነ-ምግባር',
    suggestedSalaryRange: '5,500 - 8,500 ETB'
  }
];

export interface StaffMember {
  id: string; // e.g. STF-ADM-101, STF-HT-102
  name: string;
  category: StaffCategory;
  roleTitle: string; // Job Position (e.g. Senior Registrar, Lead Cleaner, Chief Security Officer)
  educationLevel: string; // Diploma, Degree, Masters, 10th/12th Complete, etc.
  phone: string;
  email?: string;
  gender?: 'Male' | 'Female';
  age?: number;
  photo?: string; // Captured photo or uploaded base64 data URL
  subjects?: string[]; // For Head Teacher and Main Teacher
  assignedClass?: string; // e.g. 'Grade 8'
  assignedSection?: string; // e.g. 'A'
  classAllocations?: { grade: string; section: string; subjects?: string[]; }[];
  isHomeroomTeacher?: boolean;
  leadershipTenure?: string; // For Head Teacher: leadership tenure (e.g. "6 Years")
  appointedYear?: string; // For Head Teacher: appointed year / term start
  leadershipPortfolio?: string; // For Head Teacher: administrative portfolio / responsibilities
  shift?: string; // Day Shift, Night Shift, Full-time
  assignedArea?: string; // Station/Office, Block A, Main Gate, etc.
  baseSalary?: number; // Monthly base salary (in ETB, e.g. 12000)
  dailyRate?: number; // Daily salary rate (e.g. baseSalary / 30)
  notes?: string;
  registeredBy: string;
  timestamp: string;
}

export type StaffAttendanceStatus = 'P' | 'A' | 'L' | 'F' | 'H'; // P = Present (ተገኝቷል), A = Absent (ቀርቷል), L = Late (አርፍዷል), F = Leave/Permission (ፍቃድ), H = Half-day (ግማሽ ቀን)

export interface StaffMonthlyAttendance {
  staffId: string;
  yearMonth: string; // e.g. "2017-01" (Meskerem 2017 EC) or "2026-09"
  days: { [day: number]: StaffAttendanceStatus }; // Day 1 to 30
  times?: { [day: number]: string }; // Recorded clock-in / arrival time, e.g. "1:35"
  notes?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  target: 'Parents' | 'Teachers' | 'Both';
  postedBy: string;
  timestamp: string;
}

export interface ClassSchedulePeriod {
  periodNumber: number; // e.g. 1, 2, 3...
  startTime: string; // e.g. "08:30" or "02:30" (local morning)
  endTime: string; // e.g. "09:15" or "03:15"
  subject: string; // e.g. "Mathematics" (from available subjects, or empty)
  teacherId?: string; // TCH-XXXX
  teacherName?: string; // cached name
}

export interface WeeklySchedule {
  [day: string]: ClassSchedulePeriod[]; // 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
}

export interface ClassSetup {
  id: string;
  grade: string; // e.g. Grade 8
  section: string; // e.g. A
  stream: string; // e.g. General, Natural Science, Social Science
  subjects: string[];
  schedule?: WeeklySchedule;
}

export interface Grade {
  id: string;
  studentId: string;
  studentName: string;
  subject: string; // e.g. Mathematics, English, etc.
  quiz: number; // max 10
  cw: number;   // max 10 (Classwork)
  hw: number;   // max 10 (Homework)
  gw?: number;  // max 10 (Group Work)
  pw?: number;  // max 10 (Project Work)
  cp?: number;  // max 10 (Class Participation)
  mid: number;  // max 20 (Mid Exam)
  final: number;// max 20 (Final Exam)
  total: number;// percentage sum of 8 assessments (Max 100)
  teacher: string;
  timestamp: string;
  term?: number; // 1, 2, 3, or 4
  isApproved?: boolean;
}

export interface DefectDetail {
  id: string;
  title: string;
  titleAmh?: string;
  titleEng: string;
  severity: 'Critical' | 'Medium' | 'Low';
  description: string;
  descriptionAmh?: string;
  descriptionEng: string;
  buggyCode: string;
  fixedCode: string;
  explanation: string;
  explanationAmh?: string;
}

export const INITIAL_STUDENTS: Student[] = [
  {
    "id": "A/01/19",
    "name": "Abem Mideyem Degu",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0932205411"
  },
  {
    "id": "A/02/19",
    "name": "Abiraham Zewude Balcha",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0988180950"
  },
  {
    "id": "A/03/19",
    "name": "Amen Anduamlak",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913796762"
  },
  {
    "id": "A/04/19",
    "name": "Anania Getahun Lulseged",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0983848574"
  },
  {
    "id": "A/05/19",
    "name": "Aron Derese Lemma",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921381529"
  },
  {
    "id": "A/06/19",
    "name": "Azaryas Yehuala Kahsay",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0933697065"
  },
  {
    "id": "A/07/19",
    "name": "Barkot Melak Lenberu",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912179133"
  },
  {
    "id": "A/08/19",
    "name": "Barkot Mikias Zewudu",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0985425516"
  },
  {
    "id": "A/09/19",
    "name": "Betelhem Deresse Getachew",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913094326"
  },
  {
    "id": "A/10/19",
    "name": "Bilen Surafel Kifle",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0987880512"
  },
  {
    "id": "A/11/19",
    "name": "Bilisuma Markos Seyfu",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0935011175"
  },
  {
    "id": "A/12/19",
    "name": "Biruk Henok Dechassa",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0934610272"
  },
  {
    "id": "A/13/19",
    "name": "Blen Lijalem Beyene",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920665945"
  },
  {
    "id": "A/14/19",
    "name": "Dagim Samuel Mekasha",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0938073166"
  },
  {
    "id": "A/15/19",
    "name": "Dibora Dereje Tamiru",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910002243"
  },
  {
    "id": "A/16/19",
    "name": "Elsabet Mengistu Fetene",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921323261"
  },
  {
    "id": "A/17/19",
    "name": "Emad Mehammed Abrar",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912288604"
  },
  {
    "id": "A/18/19",
    "name": "Emad Mohammedabrar Yasin",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912288604"
  },
  {
    "id": "A/19/19",
    "name": "Esrael Yohannes Selfu",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913498899"
  },
  {
    "id": "A/20/19",
    "name": "Ethan Tibebu Asefa",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913734563"
  },
  {
    "id": "A/21/19",
    "name": "Eyad Abubeker Hamza",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912025302"
  },
  {
    "id": "A/22/19",
    "name": "Eyob Tamiru Hayilee",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911763237"
  },
  {
    "id": "A/23/19",
    "name": "Faruk Ahmed Seyd",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913094566"
  },
  {
    "id": "A/24/19",
    "name": "Ferehan Musbaha kemal",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910860774"
  },
  {
    "id": "A/25/19",
    "name": "Fiker Yilkal Abebaw",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913553375"
  },
  {
    "id": "A/26/19",
    "name": "Hari Halid Redi",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921732788"
  },
  {
    "id": "A/27/19",
    "name": "Harme Feshaye",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913794361"
  },
  {
    "id": "A/28/19",
    "name": "Haron derese",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911870201"
  },
  {
    "id": "A/29/19",
    "name": "Haron Halid Redi",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921732788"
  },
  {
    "id": "A/30/19",
    "name": "Hawlet Seid Dese",
    "grade": "Grade 1",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0935851020"
  },
  {
    "id": "A/31/19",
    "name": "Haykel Mustefa Mohammed",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0949438091"
  },
  {
    "id": "A/32/19",
    "name": "Hemen Fantahun Aray",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0968670919"
  },
  {
    "id": "A/33/19",
    "name": "Heran dereje",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911919600"
  },
  {
    "id": "A/34/19",
    "name": "Judi Zeki Abdlhadi",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0961134950"
  },
  {
    "id": "A/35/19",
    "name": "Junior Asrat Biru",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911861486"
  },
  {
    "id": "A/36/19",
    "name": "Kaleab Dawit Ayele",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0904186642"
  },
  {
    "id": "A/37/19",
    "name": "Kalkidan Alamneh Meseret",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0900831486"
  },
  {
    "id": "A/38/19",
    "name": "Kerab Moges Gezahegn",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910526407"
  },
  {
    "id": "A/39/19",
    "name": "Lelina Tesfaye Shewangizew",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0926873989"
  },
  {
    "id": "A/40/19",
    "name": "Madot Getu Abraham",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920725394"
  },
  {
    "id": "A/41/19",
    "name": "Maraki Tilahun Gashaw",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913314886"
  },
  {
    "id": "A/42/19",
    "name": "Maramawit Getaneh Addisu",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0947893246"
  },
  {
    "id": "A/43/19",
    "name": "Maramawit Sintayehu Semeneh",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0967600763"
  },
  {
    "id": "A/44/19",
    "name": "Melona Girum Gemechu",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921772073"
  },
  {
    "id": "A/45/19",
    "name": "Menesa Jemil Sultan",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910107981"
  },
  {
    "id": "A/46/19",
    "name": "Mohomred Yusuf sunkamo",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911972002"
  },
  {
    "id": "A/47/19",
    "name": "Nafkot Yilkal Abebaw",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913553315"
  },
  {
    "id": "A/48/19",
    "name": "Nahom Lekenaw Beyazen",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0961224215"
  },
  {
    "id": "A/49/19",
    "name": "Natan Hilemikael Eyasu",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0934540158"
  },
  {
    "id": "A/50/19",
    "name": "Natnael Dereje Mulatu",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0991179169"
  },
  {
    "id": "A/51/19",
    "name": "Reyan Abdu Sani",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910148921"
  },
  {
    "id": "A/52/19",
    "name": "Robel Behailu Eba",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0927168669"
  },
  {
    "id": "A/53/19",
    "name": "Robel Shegaw Muche",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910527807"
  },
  {
    "id": "A/54/19",
    "name": "Robel Yohanis Hosen",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911472377"
  },
  {
    "id": "A/55/19",
    "name": "Ruth zeleke Timotewos",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0929120667"
  },
  {
    "id": "A/56/19",
    "name": "Sunper Eyasu",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920729676"
  },
  {
    "id": "A/57/19",
    "name": "Tensye Agegnew Yirdaw",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913266595"
  },
  {
    "id": "A/58/19",
    "name": "Tina Tewodros Ararsa",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920707552"
  },
  {
    "id": "A/59/19",
    "name": "Yosef Siraj Awoel",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911012368"
  },
  {
    "id": "A/60/19",
    "name": "Tinbit Yonas Yazachew",
    "grade": "Grade 1",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0937397127"
  },
  {
    "id": "B/01/19",
    "name": "Abesalat Habetamu",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910641821"
  },
  {
    "id": "B/02/19",
    "name": "Akilsia Solomon G/selasy",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913166768"
  },
  {
    "id": "B/03/19",
    "name": "Amen Wondyefraw  Tesfaye",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0935023103"
  },
  {
    "id": "B/04/19",
    "name": "Anania Asechalew",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0929022966"
  },
  {
    "id": "B/05/19",
    "name": "Anania Asechalwe Gezahign",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0929022966"
  },
  {
    "id": "B/06/19",
    "name": "Barekot Samson Degu",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920890253"
  },
  {
    "id": "B/07/19",
    "name": "Bereket Kasahun Tebabal",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913906070"
  },
  {
    "id": "B/08/19",
    "name": "Ceristian Eyob",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0973054399"
  },
  {
    "id": "B/09/19",
    "name": "Dagem Moges Gezahgn",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910526407"
  },
  {
    "id": "B/10/19",
    "name": "Daniya Suleman",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910914934"
  },
  {
    "id": "B/11/19",
    "name": "Eldan Addisalem",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912414432"
  },
  {
    "id": "B/12/19",
    "name": "Elham Liyad Aborehaman",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911086041"
  },
  {
    "id": "B/13/19",
    "name": "Eyobe Selamu",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913978333"
  },
  {
    "id": "B/14/19",
    "name": "Eyosias Muluneh",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0979042639"
  },
  {
    "id": "B/15/19",
    "name": "Filiya Medeset Melaku",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911268727"
  },
  {
    "id": "B/16/19",
    "name": "Firdos Nuredin",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0942181001"
  },
  {
    "id": "B/17/19",
    "name": "Frehiwot Zewdu Abe",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920508768"
  },
  {
    "id": "B/18/19",
    "name": "Hafnan Jemal Delile",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913708797"
  },
  {
    "id": "B/19/19",
    "name": "Haset Beruk",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0988180950"
  },
  {
    "id": "B/20/19",
    "name": "kaleab Belachew Beyene",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0932444678"
  },
  {
    "id": "B/21/19",
    "name": "Kalkidan Fikru",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912929367"
  },
  {
    "id": "B/22/19",
    "name": "Kedus Esubalwe Sharwe",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0935364884"
  },
  {
    "id": "B/23/19",
    "name": "Keradiyon kebebew",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0951072324"
  },
  {
    "id": "B/24/19",
    "name": "Mahi Ysain Jibrile",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913690729"
  },
  {
    "id": "B/25/19",
    "name": "Mahinyem Tegaye Kebed",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910589919"
  },
  {
    "id": "B/26/19",
    "name": "Makibel getacew",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0947893246"
  },
  {
    "id": "B/27/19",
    "name": "Maramawit Zeriyehun Seyfe",
    "grade": "Grade 2",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0944726217"
  },
  {
    "id": "B/28/19",
    "name": "Marisel Dejeny",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913626074"
  },
  {
    "id": "B/29/19",
    "name": "Markon Getachew Nedi",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913130678"
  },
  {
    "id": "B/30/19",
    "name": "Mekilit Sefefi",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0991744843"
  },
  {
    "id": "B/31/19",
    "name": "Meskir Teshom",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0929304671"
  },
  {
    "id": "B/32/19",
    "name": "Millen Mulugeta kifle",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0931718145"
  },
  {
    "id": "B/33/19",
    "name": "Nabek H/geberale",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921978963"
  },
  {
    "id": "B/34/19",
    "name": "Nabeki Hailegebrel Garomsa",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921978963"
  },
  {
    "id": "B/35/19",
    "name": "Nahom Asenafi",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912150856"
  },
  {
    "id": "B/36/19",
    "name": "Nahom Ashenafi Tadesse",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912150856"
  },
  {
    "id": "B/37/19",
    "name": "Natnae Solomon Zenabe",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0923253086"
  },
  {
    "id": "B/38/19",
    "name": "Nolawi Tywederose",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911602285"
  },
  {
    "id": "B/39/19",
    "name": "Riyan Emame Aliy",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911710783"
  },
  {
    "id": "B/40/19",
    "name": "Robel Yohan Osi",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911472377"
  },
  {
    "id": "B/41/19",
    "name": "Rute Tefera Kebde",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911513788"
  },
  {
    "id": "B/42/19",
    "name": "Samuel Erimeys Gerema",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911933522"
  },
  {
    "id": "B/43/19",
    "name": "Selam Belete Siyoum",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0951979672"
  },
  {
    "id": "B/44/19",
    "name": "Selendos Tomase",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0923706479"
  },
  {
    "id": "B/45/19",
    "name": "Semper Edeom",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910072738"
  },
  {
    "id": "B/46/19",
    "name": "Sipara Getnet Demlew",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913461004"
  },
  {
    "id": "B/47/19",
    "name": "Tihon Addis Cerey",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0900353529"
  },
  {
    "id": "B/48/19",
    "name": "Twebisita addis",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0922858079"
  },
  {
    "id": "B/49/19",
    "name": "Yordanos Mekuriya",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910459939"
  },
  {
    "id": "B/50/19",
    "name": "Zemen Alembirhan Haile",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0944101301"
  },
  {
    "id": "B/51/19",
    "name": "Zemikael Tesefaye Mekone",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0919721919"
  },
  {
    "id": "B/52/19",
    "name": "Hawlet Addi Shifa",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911013515"
  },
  {
    "id": "B/53/19",
    "name": "Tibebu Solomon H/mariam",
    "grade": "Grade 2",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921804013"
  },
  {
    "id": "C/01/19",
    "name": "Abriham Waletaneguse Werku",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0936501143"
  },
  {
    "id": "C/02/19",
    "name": "Absalate Sentayehu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911196654"
  },
  {
    "id": "C/03/19",
    "name": "Ahemed Musema Keder",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0942180101"
  },
  {
    "id": "C/4/19",
    "name": "Akelesia Solomon",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913160768"
  },
  {
    "id": "C/05/19",
    "name": "Amanuel Anduamelm Bayele",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912210293"
  },
  {
    "id": "C/06/19",
    "name": "Amudin Alemayew Kassa",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911192622"
  },
  {
    "id": "C/7/19",
    "name": "Aresema Alembirhan Hayele",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0944101301"
  },
  {
    "id": "C/08/19",
    "name": "Barekot Ashenafi Gethachew",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911427268"
  },
  {
    "id": "C/09/19",
    "name": "Beteab Markos Seyfe",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0935011175"
  },
  {
    "id": "C/10/19",
    "name": "Betelot Tsegaye Birhanu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0985433577"
  },
  {
    "id": "C/11/19",
    "name": "Danwit Kemal",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0966035768"
  },
  {
    "id": "C/12/19",
    "name": "Eleyana Ashenafi Gethachew",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911427268"
  },
  {
    "id": "C/13/19",
    "name": "Ermiyas Anduamelak Animaw",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913796762"
  },
  {
    "id": "C/14/19",
    "name": "Firdos Nurdine",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0942180101"
  },
  {
    "id": "C/15/19",
    "name": "Fitsum Ashenafi Gethecw",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911427268"
  },
  {
    "id": "C/16/19",
    "name": "Hamudi Almayhu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913695168"
  },
  {
    "id": "C/17/19",
    "name": "Hayat Nuredin Kedere",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0956828243"
  },
  {
    "id": "C/18/19",
    "name": "Hiyabe Tesefaye",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0926873980"
  },
  {
    "id": "C/19/19",
    "name": "Huda Ismail Tafese",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910641343"
  },
  {
    "id": "C/20/19",
    "name": "Kalkidan Anagaw Azanawe",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0990847488"
  },
  {
    "id": "C/21/19",
    "name": "Kidus Behailu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0983318895"
  },
  {
    "id": "C/22/19",
    "name": "Kidus Derje Getacehu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913566256"
  },
  {
    "id": "C/23/19",
    "name": "Libanose Desalegn Getahun",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0938847258"
  },
  {
    "id": "C/24/19",
    "name": "Liwela Habetamu",
    "grade": "Grade 3",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0955340429"
  },
  {
    "id": "C/25/19",
    "name": "Maedot Sintayehu Tekelabe",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0967650566"
  },
  {
    "id": "C/26/19",
    "name": "Makiba Getahun",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0916822368"
  },
  {
    "id": "C/27/19",
    "name": "Monet Fekiru Kejela",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912929367"
  },
  {
    "id": "C/28/19",
    "name": "Naode Solomom",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911373909"
  },
  {
    "id": "C/29/19",
    "name": "Natan Anteneh Getachew",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911478443"
  },
  {
    "id": "C/30/19",
    "name": "Nathan Demelash Kume",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912688490"
  },
  {
    "id": "C/31/19",
    "name": "Natinm Worken Guta",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0939670104"
  },
  {
    "id": "C/32/19",
    "name": "Nebat  Mehammed",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0925989652"
  },
  {
    "id": "C/33/19",
    "name": "Nejat Mehmmed Alemye",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0925989652"
  },
  {
    "id": "C/34/19",
    "name": "Newal Abubeker Suleyman",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0964202931"
  },
  {
    "id": "C/35/19",
    "name": "Nolawi million Lemma",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0924848134"
  },
  {
    "id": "C/36/19",
    "name": "Nuhamin Solomon Dessalegn",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0992552686"
  },
  {
    "id": "C/37/19",
    "name": "Rakib solomon Temame",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911373909"
  },
  {
    "id": "C/38/19",
    "name": "Sebirina Selahadin Temame",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0963201304"
  },
  {
    "id": "C/39/19",
    "name": "Selman Jemil Delil",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913708797"
  },
  {
    "id": "C/40/19",
    "name": "Yabesera Melaku",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0940256301"
  },
  {
    "id": "C/41/19",
    "name": "Yeausera Melaku Desalgn",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0940256301"
  },
  {
    "id": "C/42/19",
    "name": "Yohannes Geta Teshome",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0944364243"
  },
  {
    "id": "C/43/19",
    "name": "Yohannes Sentayehu",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911944734"
  },
  {
    "id": "C/44/19",
    "name": "Zekariase Tadesse Ayele",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0902458781"
  },
  {
    "id": "C/45/19",
    "name": "Robel Gebeyehu Negash",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911000000"
  },
  {
    "id": "C/46/19",
    "name": "Elroe Ashenafi Solomon",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913637740"
  },
  {
    "id": "C/47/19",
    "name": "Abikem Asdesach Habtie",
    "grade": "Grade 3",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913307330"
  },
  {
    "id": "D/01/19",
    "name": "Amen Nebiyat Mekonen",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913092209"
  },
  {
    "id": "D/02/19",
    "name": "Aresema woreku Kemal",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913681874"
  },
  {
    "id": "D/03/19",
    "name": "Biserat  Addisalem Dejene",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912414432"
  },
  {
    "id": "D/04/19",
    "name": "Betslot Takele Lagesse",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911138474"
  },
  {
    "id": "D/05/19",
    "name": "Eeneb Abubeker",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912025302"
  },
  {
    "id": "D/06/19",
    "name": "Eibrahim Ahemd",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913101053"
  },
  {
    "id": "D/07/19",
    "name": "Eibrahim Mehamed",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913101053"
  },
  {
    "id": "D/08/19",
    "name": "Eneb Dawud Kemal",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913201522"
  },
  {
    "id": "D/09/19",
    "name": "Eledan Mekonene Adugna",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920147472"
  },
  {
    "id": "D/10/19",
    "name": "Elidana Wondesen",
    "grade": "Grade 4",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911985310"
  },
  {
    "id": "D/11/19",
    "name": "Elroi  Ashenafi Solomon",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0929193220"
  },
  {
    "id": "D/12/19",
    "name": "Enas Abubeker Hmza",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912025302"
  },
  {
    "id": "D/13/19",
    "name": "Harun Dawud Kemal",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913201522"
  },
  {
    "id": "D/14/19",
    "name": "Kalkidan Adisu Senbet",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0964468034"
  },
  {
    "id": "D/15/19",
    "name": "Makibel Aneteneh Getacew",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911478443"
  },
  {
    "id": "D/16/19",
    "name": "Mintsenot Dereje",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0991179169"
  },
  {
    "id": "D/17/19",
    "name": "Nohel Million",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911643150"
  },
  {
    "id": "D/18/19",
    "name": "Samuel Yoseph Sahelmariame",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0930011709"
  },
  {
    "id": "D/19/19",
    "name": "Yanet Tesefahun Belay",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911128772"
  },
  {
    "id": "D/20/19",
    "name": "Yonatan Negatu W/senbet",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910560557"
  },
  {
    "id": "D/21/19",
    "name": "Yohannes Zewudu Tadesse",
    "grade": "Grade 4",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0943100850"
  },
  {
    "id": "E/01/19",
    "name": "Adil Behailu Ali",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910917471"
  },
  {
    "id": "E/02/19",
    "name": "Amanuel Lemma G/meskel",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911100331"
  },
  {
    "id": "E/03/19",
    "name": "Elora Seyde Hudan",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0975861028"
  },
  {
    "id": "E/04/19",
    "name": "Feven Getu",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0920725394"
  },
  {
    "id": "E/05/19",
    "name": "Kidus Belachew",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0932444672"
  },
  {
    "id": "E/06/19",
    "name": "Leuel Endale Legesse",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913521307"
  },
  {
    "id": "E/07/19",
    "name": "Markon Abel Tesfaye",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921601025"
  },
  {
    "id": "E/08/19",
    "name": "Mericy Eermyas Gerima",
    "grade": "Grade 5",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911933522"
  },
  {
    "id": "E/09/19",
    "name": "Natan Gosaye Abera",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911810965"
  },
  {
    "id": "E/10/19",
    "name": "Raey Yohannes Mihirtu",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911178392"
  },
  {
    "id": "E/11/19",
    "name": "Rakeb Solomon G/selasy",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913160768"
  },
  {
    "id": "E/12/19",
    "name": "Shalom Muluken",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911000000"
  },
  {
    "id": "E/13/19",
    "name": "Tsion Ashenafi Tadesse",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912150856"
  },
  {
    "id": "E/14/19",
    "name": "Yemariyam Dagmawi Alemayehu",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913371054"
  },
  {
    "id": "E/15/19",
    "name": "Yenus  Abdu Sane",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910148921"
  },
  {
    "id": "E/16/19",
    "name": "Yonatan Dawit G/mariyam",
    "grade": "Grade 5",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913552460"
  },
  {
    "id": "F/01/19",
    "name": "Abigiya Tsegaye Kebede",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910589919"
  },
  {
    "id": "F/02/19",
    "name": "Akilesia Getnet Demilew",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913461004"
  },
  {
    "id": "F/03/19",
    "name": "Amar Jemal Awel",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911145298"
  },
  {
    "id": "F/04/19",
    "name": "Amen Deresse Lemma",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921381529"
  },
  {
    "id": "F/05/19",
    "name": "Bereket Assefa Fikadu",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0922822204"
  },
  {
    "id": "F/06/19",
    "name": "Bitania Tefera Kebed",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911513788"
  },
  {
    "id": "F/07/19",
    "name": "Bitania Solomon Dires",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0949246507"
  },
  {
    "id": "F/08/19",
    "name": "Eden Habtamu Manaye",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911042549"
  },
  {
    "id": "F/09/19",
    "name": "Eleni Ermias Tilahun",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911757802"
  },
  {
    "id": "F/10/19",
    "name": "Elued Sintayehue",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911944734"
  },
  {
    "id": "F/11/19",
    "name": "Eyasu Ermias Tilahun",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0905903889"
  },
  {
    "id": "F/12/19",
    "name": "Fatima Abubeker Suleman",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0964202931"
  },
  {
    "id": "F/13/19",
    "name": "Fikir Ashagre Gesesse",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913371522"
  },
  {
    "id": "F/14/19",
    "name": "Kalikidan Zeleke Timotiwos",
    "grade": "Grade 6",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0921412080"
  },
  {
    "id": "F/15/19",
    "name": "Liyona Addis Tekelabe",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911074921"
  },
  {
    "id": "F/16/19",
    "name": "Mohammed Nuredin Kedir",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0942180101"
  },
  {
    "id": "F/17/19",
    "name": "Maramawit Andarige",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912928141"
  },
  {
    "id": "F/18/19",
    "name": "Makbel Isaal Assfaw",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913960156"
  },
  {
    "id": "F/19/19",
    "name": "Marikon Million",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911643150"
  },
  {
    "id": "F/20/19",
    "name": "Naod Solomon",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911410703"
  },
  {
    "id": "F/21/19",
    "name": "Nebile Kalif",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911282484"
  },
  {
    "id": "F/22/19",
    "name": "Reyan Kalif",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911282484"
  },
  {
    "id": "F/23/19",
    "name": "Robel Arega",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911042484"
  },
  {
    "id": "F/24/19",
    "name": "Yusuf Enyew Kesaye",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913084728"
  },
  {
    "id": "F/25/19",
    "name": "Yusuf Musema Kedir",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0942180101"
  },
  {
    "id": "F/26/19",
    "name": "Yohana Farasim Tilawu",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911426507"
  },
  {
    "id": "F/27/19",
    "name": "Yonas Selamu",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913978333"
  },
  {
    "id": "F/28/19",
    "name": "Micjael Leulseged Tamiru",
    "grade": "Grade 6",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910970202"
  },
  {
    "id": "G/01/19",
    "name": "Amanuel Behailu Abebe",
    "grade": "Grade 7",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0983318895"
  },
  {
    "id": "G/02/19",
    "name": "Ayub Fedelu Kuami",
    "grade": "Grade 7",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911855181"
  },
  {
    "id": "G/03/19",
    "name": "Chirstian Abiyot Mulugeta",
    "grade": "Grade 7",
    "section": "A",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0911471462"
  },
  {
    "id": "G/04/19",
    "name": "Eilham Ismail Tafesse",
    "grade": "Grade 7",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0910641343"
  },
  {
    "id": "G/05/19",
    "name": "Emad",
    "grade": "Grade 7",
    "section": "A",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0944366463"
  },
  {
    "id": "G/06/19",
    "name": "Emran Mohammed Hassen",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913906652"
  },
  {
    "id": "G/07/19",
    "name": "Hayat  Kemale",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0966035768"
  },
  {
    "id": "G/08/19",
    "name": "Natnael Yonas Mulugeta",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0913345058"
  },
  {
    "id": "G/09/19",
    "name": "Rut Yared Tilahun",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0965808912"
  },
  {
    "id": "G/10/19",
    "name": "Yonatan Samuel Mekasha",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Male",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0900820060"
  },
  {
    "id": "G/11/19",
    "name": "Yordanos Mengest Abebe",
    "grade": "Grade 7",
    "section": "B",
    "gender": "Female",
    "registeredBy": "principal@school.com",
    "timestamp": "2026-06-28T09:00:00.000Z",
    "parentPhone": "0912711636"
  }
];

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: 'TCH-4040',
    name: 'መ/ር ታደሰ ምስጋናው (Tadesse Misganaw)',
    educationLevel: 'Degree',
    phone: '0911889900',
    email: 'tadesse.teacher@school.com',
    subjects: ['Mathematics', 'Information Technology', 'General Science'],
    assignedClass: 'Grade 7',
    assignedSection: 'A',
    classAllocations: [
      { grade: 'Grade 7', section: 'A', subjects: ['Mathematics', 'Information Technology', 'General Science'] },
      { grade: 'Grade 8', section: 'A', subjects: ['Mathematics', 'Information Technology'] },
      { grade: 'Grade 6', section: 'A', subjects: ['Mathematics'] }
    ],
    isHomeroomTeacher: true,
    registeredBy: 'tadessemisganaw4@gmail.com',
    timestamp: '2026-06-24T08:00:00.000Z'
  }
];

export const INITIAL_STAFF: StaffMember[] = [
  {
    id: 'STF-PRN-101',
    name: 'Dr. Solomon Bekele',
    category: 'Principal',
    roleTitle: 'ርዕሰ መምህርና ስራ አስኪያጅ (School Principal & Director)',
    educationLevel: 'Masters',
    phone: '0911223399',
    email: 'headteacher@school.com',
    gender: 'Male',
    age: 44,
    subjects: ['Mathematics', 'Physics'],
    assignedClass: 'Grade 8',
    assignedSection: 'A',
    classAllocations: [{ grade: 'Grade 8', section: 'A', subjects: ['Mathematics', 'Physics'] }],
    isHomeroomTeacher: false,
    leadershipTenure: '6 Years (6 ዓመታት)',
    appointedYear: '2020 / 2012 ዓ.ም',
    leadershipPortfolio: 'Curriculum development, institutional governance, teacher evaluation & community liaison',
    shift: 'Full-time (የሙሉ ቀን)',
    assignedArea: 'Main Executive Office (የር/መምህር ቢሮ)',
    baseSalary: 18500,
    dailyRate: 616.7,
    registeredBy: 'admin@school.com',
    timestamp: '2026-06-15T08:30:00.000Z'
  },
  {
    id: 'STF-VPR-102',
    name: 'Rahel Hailu',
    category: 'Vice Principal',
    roleTitle: 'ምክትል ርዕሰ መምህርት (Vice Principal - Academic & Discipline)',
    educationLevel: 'Masters',
    phone: '0911554433',
    email: 'viceprincipal@school.com',
    gender: 'Female',
    age: 39,
    subjects: ['Biology', 'Chemistry'],
    assignedClass: 'Grade 7',
    assignedSection: 'A',
    classAllocations: [{ grade: 'Grade 7', section: 'A', subjects: ['Biology'] }],
    isHomeroomTeacher: false,
    leadershipTenure: '4 Years (4 ዓመታት)',
    appointedYear: '2022 / 2014 ዓ.ም',
    leadershipPortfolio: 'Classroom scheduling, student discipline, continuous assessments & teacher mentorship',
    shift: 'Full-time (የሙሉ ቀን)',
    assignedArea: 'Academic & Discipline Office (የም/ር/መምህር ቢሮ)',
    baseSalary: 16000,
    dailyRate: 533.3,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-16T08:30:00.000Z'
  },
  {
    id: 'STF-SEC-103',
    name: 'Hiwot Desta',
    category: 'Secretary',
    roleTitle: 'ዋና ፀሐፊና ሰነድ ያዥ (Head Secretary & Records Registrar)',
    educationLevel: 'Degree',
    phone: '0912778899',
    email: 'secretary@school.com',
    gender: 'Female',
    age: 29,
    shift: 'Day Shift (የቀን ፈረቃ)',
    assignedArea: 'Front Desk & Archives Office (የጽሕፈት ቤትና ሰነድ ክፍል)',
    baseSalary: 10500,
    dailyRate: 350,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-18T09:00:00.000Z'
  },
  {
    id: 'STF-FIN-104',
    name: 'Daniel Getachew',
    category: 'Finance',
    roleTitle: 'የፋይናንስ ኦፊሰርና አካውንታንት (Finance Officer & Accountant)',
    educationLevel: 'Degree',
    phone: '0911882233',
    email: 'finance@school.com',
    gender: 'Male',
    age: 36,
    shift: 'Day Shift (የቀን ፈረቃ)',
    assignedArea: 'Finance & Accounts Office (የፋይናንስና ሂሳብ ቢሮ)',
    baseSalary: 14500,
    dailyRate: 483.3,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-19T09:00:00.000Z'
  },
  {
    id: 'STF-CLN-105',
    name: 'Almaz Tefera',
    category: 'Cleaner',
    roleTitle: 'የጽዳትና ንፅህና ኃላፊ (Lead Sanitation & Hygiene Staff)',
    educationLevel: 'High School Complete (10/12)',
    phone: '0933445566',
    gender: 'Female',
    age: 35,
    shift: 'Morning & Afternoon Shift',
    assignedArea: 'Academic Buildings & Campus Grounds (የግቢና ክፍል ጽዳት)',
    baseSalary: 5500,
    dailyRate: 183.3,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-21T07:30:00.000Z'
  },
  {
    id: 'STF-GRD-106',
    name: 'Tilahun Kebede',
    category: 'Security Guard',
    roleTitle: 'የግቢ ደህንነትና ጥበቃ ኃላፊ (Campus Security Officer)',
    educationLevel: 'Certificate',
    phone: '0944556677',
    gender: 'Male',
    age: 41,
    shift: 'Day Shift (የቀን ጥበቃ)',
    assignedArea: 'Main School Gate & Perimeter Security (ዋና መግቢያ በር)',
    baseSalary: 6200,
    dailyRate: 206.7,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-20T06:00:00.000Z'
  },
  {
    id: 'STF-AST-107',
    name: 'Bethelhem Assefa',
    category: 'Assistant Teacher',
    roleTitle: 'ረዳት መምህርት (Assistant Classroom Teacher)',
    educationLevel: 'Diploma',
    phone: '0922334455',
    email: 'bethelhem.ast@school.com',
    gender: 'Female',
    age: 26,
    shift: 'Day Shift (የቀን ፈረቃ)',
    assignedArea: 'Primary Classrooms Block',
    baseSalary: 7500,
    dailyRate: 250,
    registeredBy: 'principal@school.com',
    timestamp: '2026-06-21T08:00:00.000Z'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Parents Meeting',
    content: 'General parents meeting will be held on Sunday morning. Please arrive on time.',
    target: 'Parents',
    postedBy: 'principal@school.com',
    timestamp: '2026-06-25T11:00:00.000Z'
  },
  {
    id: 'ann-2',
    title: 'Grade Submission Deadline',
    content: 'To all teachers: Q2 final exam grades must be submitted in the system by July 5th.',
    target: 'Teachers',
    postedBy: 'principal@school.com',
    timestamp: '2026-06-26T14:00:00.000Z'
  }
];

export const INITIAL_CLASSES: ClassSetup[] = [
  {
    id: 'cls-1',
    grade: 'Grade 8',
    section: 'A',
    stream: 'General',
    subjects: ['Mathematics', 'English', 'Amharic', 'Science', 'Social Studies']
  },
  {
    id: 'cls-2',
    grade: 'Grade 8',
    section: 'B',
    stream: 'General',
    subjects: ['Mathematics', 'English', 'Amharic', 'Science', 'Social Studies']
  },
  {
    id: 'cls-3',
    grade: 'Grade 7',
    section: 'A',
    stream: 'General',
    subjects: ['Mathematics', 'English', 'Amharic', 'Science']
  },
  {
    id: 'cls-4',
    grade: 'Grade 7',
    section: 'B',
    stream: 'General',
    subjects: ['Mathematics', 'English', 'Amharic', 'Science']
  },
  {
    id: 'cls-5',
    grade: 'Grade 10',
    section: 'A',
    stream: 'Natural Science',
    subjects: ['Mathematics', 'English', 'Amharic', 'Science']
  },
  {
    id: 'cls-6',
    grade: 'Grade 12',
    section: 'B',
    stream: 'Social Science',
    subjects: ['Mathematics', 'English', 'Amharic', 'Social Studies']
  }
];

export const INITIAL_GRADES: Grade[] = [
  {
    id: 'g-1',
    studentId: 'ID-4021',
    studentName: 'Yonas Kassahun',
    subject: 'Mathematics',
    quiz: 8,
    cw: 9,
    hw: 7,
    gw: 8,
    pw: 9,
    cp: 9,
    mid: 16,
    final: 16,
    total: 82,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-01T11:00:00.000Z'
  },
  {
    id: 'g-1-2',
    studentId: 'ID-4021',
    studentName: 'Yonas Kassahun',
    subject: 'English',
    quiz: 9,
    cw: 8,
    hw: 9,
    gw: 8,
    pw: 8,
    cp: 9,
    mid: 15,
    final: 15,
    total: 81,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-01T11:30:00.000Z'
  },
  {
    id: 'g-2',
    studentId: 'ID-1082',
    studentName: 'Hiwot Gebeya',
    subject: 'Mathematics',
    quiz: 9,
    cw: 8,
    hw: 9,
    gw: 9,
    pw: 9,
    cp: 10,
    mid: 18,
    final: 17,
    total: 89,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T09:30:00.000Z'
  },
  {
    id: 'g-2-2',
    studentId: 'ID-1082',
    studentName: 'Hiwot Gebeya',
    subject: 'English',
    quiz: 10,
    cw: 9,
    hw: 8,
    mid: 17,
    final: 44,
    total: 88,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T09:45:00.000Z'
  },
  {
    id: 'g-3',
    studentId: 'ID-8843',
    studentName: 'Abel Tesfaye',
    subject: 'Mathematics',
    quiz: 6,
    cw: 7,
    hw: 8,
    mid: 14,
    final: 38,
    total: 73,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T10:00:00.000Z'
  },
  {
    id: 'g-3-2',
    studentId: 'ID-8843',
    studentName: 'Abel Tesfaye',
    subject: 'English',
    quiz: 7,
    cw: 8,
    hw: 7,
    mid: 13,
    final: 35,
    total: 70,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T10:15:00.000Z'
  },
  {
    id: 'g-4',
    studentId: 'ID-3245',
    studentName: 'Lydia Yohannes',
    subject: 'Mathematics',
    quiz: 10,
    cw: 10,
    hw: 9,
    mid: 19,
    final: 48,
    total: 96,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T11:15:00.000Z'
  },
  {
    id: 'g-4-2',
    studentId: 'ID-3245',
    studentName: 'Lydia Yohannes',
    subject: 'English',
    quiz: 9,
    cw: 10,
    hw: 10,
    mid: 18,
    final: 46,
    total: 93,
    teacher: 'teacher@school.com',
    timestamp: '2026-07-02T11:30:00.000Z'
  },
  {
    id: 'g-5-1',
    studentId: 'ID-9901',
    studentName: 'Yosef Almaz',
    subject: 'Mathematics',
    quiz: 9,
    cw: 8,
    hw: 9,
    mid: 16,
    final: 43,
    total: 85,
    teacher: 'teacher3@school.com',
    timestamp: '2026-07-02T11:40:00.000Z'
  },
  {
    id: 'g-5-2',
    studentId: 'ID-9901',
    studentName: 'Yosef Almaz',
    subject: 'English',
    quiz: 8,
    cw: 9,
    hw: 7,
    mid: 15,
    final: 39,
    total: 78,
    teacher: 'teacher3@school.com',
    timestamp: '2026-07-02T11:45:00.000Z'
  },
  {
    id: 'g-6-1',
    studentId: 'ID-9902',
    studentName: 'Seblewongel Teshome',
    subject: 'Mathematics',
    quiz: 10,
    cw: 9,
    hw: 9,
    mid: 18,
    final: 44,
    total: 90,
    teacher: 'teacher3@school.com',
    timestamp: '2026-07-02T11:50:00.000Z'
  },
  {
    id: 'g-6-2',
    studentId: 'ID-9902',
    studentName: 'Seblewongel Teshome',
    subject: 'English',
    quiz: 9,
    cw: 9,
    hw: 10,
    mid: 17,
    final: 42,
    total: 87,
    teacher: 'teacher3@school.com',
    timestamp: '2026-07-02T11:55:00.000Z'
  },
  {
    id: 'g-7011-m',
    studentId: 'ID-7011',
    studentName: 'ዳዊት ታደሰ (Dawit Tadesse)',
    subject: 'Mathematics',
    quiz: 9,
    cw: 8,
    hw: 9,
    gw: 8,
    pw: 9,
    cp: 8,
    mid: 17,
    final: 18,
    total: 86,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:00:00.000Z'
  },
  {
    id: 'g-7011-it',
    studentId: 'ID-7011',
    studentName: 'ዳዊት ታደሰ (Dawit Tadesse)',
    subject: 'Information Technology',
    quiz: 10,
    cw: 9,
    hw: 10,
    gw: 9,
    pw: 10,
    cp: 9,
    mid: 19,
    final: 19,
    total: 95,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:30:00.000Z'
  },
  {
    id: 'g-7011-sci',
    studentId: 'ID-7011',
    studentName: 'ዳዊት ታደሰ (Dawit Tadesse)',
    subject: 'General Science',
    quiz: 8,
    cw: 8,
    hw: 9,
    gw: 8,
    pw: 8,
    cp: 9,
    mid: 16,
    final: 18,
    total: 84,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:45:00.000Z'
  },
  {
    id: 'g-7012-m',
    studentId: 'ID-7012',
    studentName: 'ማርታ ሰለሞን (Marta Solomon)',
    subject: 'Mathematics',
    quiz: 8,
    cw: 9,
    hw: 8,
    gw: 9,
    pw: 8,
    cp: 9,
    mid: 16,
    final: 17,
    total: 84,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:00:00.000Z'
  },
  {
    id: 'g-7012-it',
    studentId: 'ID-7012',
    studentName: 'ማርታ ሰለሞን (Marta Solomon)',
    subject: 'Information Technology',
    quiz: 9,
    cw: 8,
    hw: 9,
    gw: 9,
    pw: 9,
    cp: 8,
    mid: 18,
    final: 18,
    total: 88,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:30:00.000Z'
  },
  {
    id: 'g-7012-sci',
    studentId: 'ID-7012',
    studentName: 'ማርታ ሰለሞን (Marta Solomon)',
    subject: 'General Science',
    quiz: 9,
    cw: 9,
    hw: 8,
    gw: 9,
    pw: 9,
    cp: 8,
    mid: 17,
    final: 18,
    total: 87,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:45:00.000Z'
  },
  {
    id: 'g-7013-m',
    studentId: 'ID-7013',
    studentName: 'ናትናኤል ግርማ (Natnael Girma)',
    subject: 'Mathematics',
    quiz: 7,
    cw: 8,
    hw: 7,
    gw: 8,
    pw: 7,
    cp: 8,
    mid: 15,
    final: 15,
    total: 75,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:00:00.000Z'
  },
  {
    id: 'g-7013-it',
    studentId: 'ID-7013',
    studentName: 'ናትናኤል ግርማ (Natnael Girma)',
    subject: 'Information Technology',
    quiz: 8,
    cw: 8,
    hw: 9,
    gw: 8,
    pw: 8,
    cp: 8,
    mid: 16,
    final: 17,
    total: 82,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:30:00.000Z'
  },
  {
    id: 'g-7014-m',
    studentId: 'ID-7014',
    studentName: 'ቤተልሔም አለሙ (Bethelhem Alemu)',
    subject: 'Mathematics',
    quiz: 9,
    cw: 9,
    hw: 9,
    gw: 9,
    pw: 9,
    cp: 9,
    mid: 18,
    final: 18,
    total: 90,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:00:00.000Z'
  },
  {
    id: 'g-7014-it',
    studentId: 'ID-7014',
    studentName: 'ቤተልሔም አለሙ (Bethelhem Alemu)',
    subject: 'Information Technology',
    quiz: 10,
    cw: 10,
    hw: 9,
    gw: 9,
    pw: 10,
    cp: 10,
    mid: 19,
    final: 19,
    total: 96,
    teacher: 'tadesse.teacher@school.com',
    timestamp: '2026-07-02T10:30:00.000Z'
  }
];

export const DEFECTS_REPORT: DefectDetail[] = [
  {
    id: 'defect-1',
    title: 'የተማሪ ስም ፍለጋ ስህተት (Data Association Flaw)',
    titleEng: 'Vulnerability in Student Grade Lookup',
    severity: 'Critical',
    description: 'በዋናው ኮድ ውስጥ የተማሪ ውጤት የሚቀመጠውና የሚፈለገው በስም (studentName) አማካኝነት ነው። አስተማሪው በስህተት አንድ ፊደል ቢያሳስት ወይም ተመሳሳይ ስም ያላቸው ተማሪዎች ቢኖሩ ወላጆች የተሳሳተ ውጤት ያያሉ ወይም ውጤቱ በጭራሽ አይገኝም።',
    descriptionEng: 'In the original code, grades are saved and queried using the raw "studentName" string. If a teacher misspells a name or if multiple students share the same name, parent queries will fail or load the wrong student\'s details.',
    buggyCode: `// Saving grade with name
db.ref('Grades').push({
    studentName, // Only name, no unique ID linked
    ...
});

// Querying grade by name in search
db.ref('Grades').orderByChild('studentName').equalTo(student.name).once('value', ...)`,
    fixedCode: `// Linking by unique studentId
db.ref('Grades').push({
    studentId: student.id, // Linked with unique ID
    studentName: student.name,
    ...
});

// Querying using unique ID
db.ref('Grades').orderByChild('studentId').equalTo(student.id).once('value', ...)`,
    explanation: 'መፍትሄ፡ እያንዳንዱን ውጤት ከተማሪው ልዩ መታወቂያ (studentId/ID-XXXX) ጋር ማገናኘት እና ፍለጋውን በስም ፈንታ በልዩ መታወቂያው ማካሄድ።'
  },
  {
    id: 'defect-2',
    title: 'አሉታዊ ቁጥሮች ማረጋገጫ አለመኖር (Negative Score Bypass)',
    titleEng: 'Missing Input Range Validation',
    severity: 'Critical',
    description: 'ውጤት በሚሞላበት ጊዜ ኮዱ ከፍተኛውን ገደብ (max value) ብቻ ያረጋግጣል፤ ነገር ግን ውጤቱ ከዜሮ በታች (ለምሳሌ -15) እንዳይሆን አይከለክልም። ይህም ተማሪው አሉታዊ ድምር ውጤት እንዲኖረው ሊያደርግ ይችላል።',
    descriptionEng: 'The score registration code checks if values exceed their maximum limits, but totally ignores negative values (e.g., entering -20 for a midterm exam), causing corrupted grade totals.',
    buggyCode: `// Buggy limit check: ignores negative values
if (quiz > 10 || cw > 10 || hw > 10 || mid > 20 || final > 50) {
    alert('❌ Scores exceed maximum');
    return;
}`,
    fixedCode: `// Improved strict range validation
const isInvalid = (val, max) => val < 0 || val > max || isNaN(val);

if (isInvalid(quiz, 10) || isInvalid(cw, 10) || isInvalid(hw, 10) || 
    isInvalid(mid, 20) || isInvalid(final, 50)) {
    alert('❌ ስህተት፡ እባክዎን ከ 0 በታች ወይም ከከፍተኛው ገደብ በላይ ውጤት አይሙሉ።');
    return;
}`,
    explanation: 'መፍትሄ፡ እያንዳንዱ ውጤት ከ 0 ያላነሰ እና ከሚፈቀደው ከፍተኛ ነጥብ ያልበለጠ መሆኑን የሚያረጋግጥ የተሟላ የማጣሪያ ተግባር (isValid) መተግበር።'
  },
  {
    id: 'defect-3',
    title: 'የFirebase ውሂብ ጠቋሚ ጠፋት (Missing Database Indexes)',
    titleEng: 'Database Performance & Cost Warning',
    severity: 'Medium',
    description: 'በFirebase Realtime Database ውስጥ orderByChild() ስንጠቀም በባክኤንድ ህጎች (Database Rules) ላይ ኢንዴክስ (.indexOn) ካልተገለጸ Firebase ሙሉ ውሂቡን ወደ ተጠቃሚው ስልክ አውርዶ ይመርምራል። ይህም ውሂቡ ሲበዛ ሲስተሙን በጣም ያዘገየዋል፣ የኢንተርኔት ፍጆታንም ያባክናል።',
    descriptionEng: 'Querying Firebase collections using orderByChild WITHOUT declaring indexes inside Firebase Rules causes massive performance issues and high bandwidth costs, as Firebase is forced to download the entire database and filter on the client-side.',
    buggyCode: `// Queries used in client without indexes configured
db.ref('Grades').orderByChild('teacher').equalTo(...)
db.ref('Students').orderByChild('id').equalTo(...)`,
    fixedCode: `// Add this to your Firebase Realtime Database rules:
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "Students": {
      ".indexOn": ["id"]
    },
    "Grades": {
      ".indexOn": ["studentId", "teacher"]
    }
  }
}`,
    explanation: 'መፍትሄ፡ በFirebase ኮንሶል Database Rules ውስጥ ለ "Students" (በ "id") እና ለ "Grades" (በ "studentId" እና "teacher") ኢንዴክሶችን መግለጽ።'
  },
  {
    id: 'defect-4',
    title: 'የደህንነት ክፍተት እና የደንበኛ-ወገን ቁጥጥር (Client-Side Role Spoofing)',
    titleEng: 'Security Risk of Client-Side Authorization',
    severity: 'Critical',
    description: 'የተጠቃሚው የስራ ድርሻ (Role) የሚመረመረው በብሮውዘር በኩል ብቻ ነው። ማንኛውም ተንኮለኛ ተጠቃሚ የብሮውዘር ኮንሶል በመክፈት currentRole = "principal" ወይም showDashboard() በማለት ብቻ ሁሉንም የተማሪዎችና የውጤት መረጃዎች ማየትና ማጥፋት ይችላል።',
    descriptionEng: 'Authentication checks are done fully on the client-side. An attacker can open the Developer Console, modify the "currentRole" global variable, or directly call "showDashboard()" to bypass the entire login screen.',
    buggyCode: `// Client-side local variables can be easily spoofed in Console
let currentUser = null;
let currentRole = null;

function showDashboard() {
    // Shows dashboards without backend validation...
}`,
    fixedCode: `// Configure secure Firebase Security Rules in backend:
{
  "rules": {
    "Grades": {
      // Only teachers can write grades
      ".write": "root.child('UserRoles/' + auth.uid).child('role').val() === 'teacher'",
      ".read": "auth != null"
    },
    "Students": {
      // Only principal can register students
      ".write": "root.child('UserRoles/' + auth.uid).child('role').val() === 'principal'",
      ".read": "auth != null"
    }
  }
}`,
    explanation: 'መፍትሄ፡ የስራ ድርሻን (Authorization) በብሮውዘር ብቻ ሳይሆን በFirebase Security Rules በኩል በባክኤንድ ማረጋገጥና መገደብ።'
  }
];
