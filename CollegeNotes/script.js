/* ============================================
   CollegeNotes - Main JavaScript (Firebase)
   ============================================ */

// ========================
// CURRICULUM DATA
// ========================
const CURRICULUM = {
  physics: {
    name: "Physics",
    icon: "fa-atom",
    color: "#6C63FF",
    gradient: "linear-gradient(135deg, #6C63FF 0%, #8B83FF 100%)",
    units: [
      {
        name: "Unit 1: Electrostatics",
        chapters: ["Electric Charges and Fields", "Electrostatic Potential and Capacitance"]
      },
      {
        name: "Unit 2: Current Electricity",
        chapters: ["Current Electricity"]
      },
      {
        name: "Unit 3: Magnetic Effects of Current",
        chapters: ["Moving Charges and Magnetism", "Magnetism and Matter"]
      },
      {
        name: "Unit 4: Electromagnetic Induction",
        chapters: ["Electromagnetic Induction", "Alternating Current"]
      },
      {
        name: "Unit 5: Optics",
        chapters: ["Ray Optics and Optical Instruments", "Wave Optics"]
      }
    ]
  },
  chemistry: {
    name: "Chemistry",
    icon: "fa-flask",
    color: "#00C9A7",
    gradient: "linear-gradient(135deg, #00C9A7 0%, #00E5BE 100%)",
    units: [
      {
        name: "Unit 1: Solid State & Solutions",
        chapters: ["The Solid State", "Solutions"]
      },
      {
        name: "Unit 2: Electrochemistry & Kinetics",
        chapters: ["Electrochemistry", "Chemical Kinetics"]
      },
      {
        name: "Unit 3: Surface Chemistry",
        chapters: ["Surface Chemistry", "General Principles of Isolation"]
      },
      {
        name: "Unit 4: Organic Chemistry I",
        chapters: ["Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers"]
      },
      {
        name: "Unit 5: Biomolecules & Polymers",
        chapters: ["Biomolecules", "Polymers"]
      }
    ]
  },
  mathematics: {
    name: "Mathematics",
    icon: "fa-square-root-variable",
    color: "#4FC3F7",
    gradient: "linear-gradient(135deg, #4FC3F7 0%, #81D4FA 100%)",
    units: [
      {
        name: "Unit 1: Relations and Functions",
        chapters: ["Relations and Functions", "Inverse Trigonometric Functions"]
      },
      {
        name: "Unit 2: Algebra",
        chapters: ["Matrices", "Determinants"]
      },
      {
        name: "Unit 3: Calculus",
        chapters: ["Continuity and Differentiability", "Application of Derivatives", "Integrals"]
      },
      {
        name: "Unit 4: Vectors & 3D Geometry",
        chapters: ["Vector Algebra", "Three Dimensional Geometry"]
      },
      {
        name: "Unit 5: Probability & Linear Programming",
        chapters: ["Probability", "Linear Programming"]
      }
    ]
  },
  cs: {
    name: "Computer Science",
    icon: "fa-code",
    color: "#FFB347",
    gradient: "linear-gradient(135deg, #FFB347 0%, #FFCC80 100%)",
    units: [
      {
        name: "Unit 1: Python Programming",
        chapters: ["Python Revision Tour", "Functions and Modules"]
      },
      {
        name: "Unit 2: Data Structures",
        chapters: ["Stacks", "Queues"]
      },
      {
        name: "Unit 3: Database Management",
        chapters: ["SQL Basics", "Advanced SQL Queries"]
      },
      {
        name: "Unit 4: Networking & Security",
        chapters: ["Computer Networks", "Cyber Security"]
      }
    ]
  }
};

// ========================
// SAMPLE NOTES DATA
// ========================
const SAMPLE_NOTES = {
  "physics_0_0": [
    {
      id: "sample_1",
      title: "Coulomb's Law - Complete Notes",
      content: `<h2>Electric Charges and Fields</h2>
<h3>1. Electric Charge</h3>
<p>Electric charge is a fundamental property of matter. There are two types of charges: <strong>positive</strong> and <strong>negative</strong>. Like charges repel and unlike charges attract each other.</p>

<h3>2. Coulomb's Law</h3>
<p>The force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.</p>
<p><strong>F = k × q₁ × q₂ / r²</strong></p>
<p>Where k = 9 × 10⁹ N·m²/C² (Coulomb's constant)</p>

<h3>3. Electric Field</h3>
<p>The electric field at a point is defined as the force experienced by a unit positive test charge placed at that point.</p>
<p><strong>E = F/q = kQ/r²</strong></p>

<h3>4. Electric Field Lines</h3>
<p>• Field lines start from positive charges and end at negative charges.</p>
<p>• Field lines never cross each other.</p>
<p>• The tangent at any point gives the direction of the electric field.</p>
<p>• The density of field lines indicates the strength of the field.</p>

<h3>5. Electric Dipole</h3>
<p>An electric dipole consists of two equal and opposite charges separated by a small distance. The dipole moment is given by:</p>
<p><strong>p = q × 2a</strong> (directed from negative to positive charge)</p>`,
      author: "CollegeNotes Team",
      date: new Date().toISOString(),
      likes: 12,
      likedBy: [],
      bookmarkedBy: []
    }
  ],
  "physics_4_0": [
    {
      id: "sample_2",
      title: "Ray Optics - Reflection & Refraction",
      content: `<h2>Ray Optics and Optical Instruments</h2>
<h3>1. Reflection of Light</h3>
<p>The bouncing back of light when it strikes a smooth surface is called reflection. Laws of reflection:</p>
<p>• The angle of incidence equals the angle of reflection (∠i = ∠r)</p>
<p>• The incident ray, reflected ray, and normal all lie in the same plane.</p>

<h3>2. Mirror Formula</h3>
<p><strong>1/v + 1/u = 1/f</strong></p>
<p>Where v = image distance, u = object distance, f = focal length</p>

<h3>3. Refraction of Light</h3>
<p>The bending of light when it passes from one medium to another is called refraction.</p>
<p><strong>Snell's Law: n₁ sin θ₁ = n₂ sin θ₂</strong></p>

<h3>4. Total Internal Reflection</h3>
<p>When light travels from a denser to a rarer medium and the angle of incidence exceeds the critical angle, total internal reflection occurs.</p>
<p><strong>sin C = n₂/n₁</strong> (where n₁ > n₂)</p>`,
      author: "CollegeNotes Team",
      date: new Date().toISOString(),
      likes: 8,
      likedBy: [],
      bookmarkedBy: []
    }
  ],
  "mathematics_2_0": [
    {
      id: "sample_3",
      title: "Continuity & Differentiability Basics",
      content: `<h2>Continuity and Differentiability</h2>
<h3>1. Continuity</h3>
<p>A function f(x) is said to be continuous at a point x = a if:</p>
<p>• f(a) is defined</p>
<p>• lim(x→a) f(x) exists</p>
<p>• lim(x→a) f(x) = f(a)</p>

<h3>2. Differentiability</h3>
<p>A function is differentiable at a point if the derivative exists at that point. If a function is differentiable at a point, it is necessarily continuous there. But the converse is not true.</p>

<h3>3. Derivatives of Standard Functions</h3>
<p>• d/dx(xⁿ) = nxⁿ⁻¹</p>
<p>• d/dx(sin x) = cos x</p>
<p>• d/dx(cos x) = −sin x</p>
<p>• d/dx(eˣ) = eˣ</p>
<p>• d/dx(ln x) = 1/x</p>

<h3>4. Chain Rule</h3>
<p>If y = f(g(x)), then dy/dx = f'(g(x)) × g'(x)</p>`,
      author: "CollegeNotes Team",
      date: new Date().toISOString(),
      likes: 15,
      likedBy: [],
      bookmarkedBy: []
    }
  ],
  "cs_0_0": [
    {
      id: "sample_4",
      title: "Python Revision - Key Concepts",
      content: `<h2>Python Revision Tour</h2>
<h3>1. Data Types in Python</h3>
<p>Python has several built-in data types:</p>
<p>• <strong>Numbers:</strong> int, float, complex</p>
<p>• <strong>Sequences:</strong> str, list, tuple</p>
<p>• <strong>Sets:</strong> set, frozenset</p>
<p>• <strong>Mapping:</strong> dict</p>
<p>• <strong>Boolean:</strong> bool</p>

<h3>2. Control Structures</h3>
<p>• <strong>if-elif-else:</strong> Conditional branching</p>
<p>• <strong>for loop:</strong> Iterate over sequences</p>
<p>• <strong>while loop:</strong> Repeat while condition is true</p>

<h3>3. Functions</h3>
<p>Functions are defined using the <strong>def</strong> keyword. They can have default arguments, keyword arguments, and variable-length arguments (*args, **kwargs).</p>

<h3>4. File Handling</h3>
<p>Python uses open() to handle files. Modes: 'r' (read), 'w' (write), 'a' (append), 'rb' (read binary).</p>`,
      author: "CollegeNotes Team",
      date: new Date().toISOString(),
      likes: 20,
      likedBy: [],
      bookmarkedBy: []
    }
  ]
};

// ========================
// FIREBASE INITIALIZATION
// ========================
const firebaseConfig = {
  apiKey: "AIzaSyDoAgQef2feuwISOmtOPcW7O51Nej-co9I",
  authDomain: "collegen0tes.firebaseapp.com",
  projectId: "collegen0tes",
  storageBucket: "collegen0tes.firebasestorage.app",
  messagingSenderId: "521057475415",
  appId: "1:521057475415:web:867b1e92b5ea75acc5fc12"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ========================
// ADMIN CONFIGURATION
// ========================
const ADMIN_EMAIL = 'santosh.chaudhary.200555@gmail.com';

function isAdmin() {
  return auth.currentUser && auth.currentUser.email === ADMIN_EMAIL;
}

// ========================
// USER TRACKING & BLOCKING
// ========================
async function trackUser(user) {
  if (!user || !user.email) return;
  try {
    await db.collection('users').doc(user.email).set({
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      lastLogin: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.error('Error tracking user:', err);
  }
}

async function isUserBlocked(email) {
  if (!email) return false;
  try {
    const doc = await db.collection('blocked_users').doc(email).get();
    return doc.exists;
  } catch (err) {
    return false;
  }
}

// ========================
// FIRESTORE OPERATIONS
// ========================
async function seedSampleNotes() {
  if (localStorage.getItem('cn_seeded')) return;
  try {
    const check = await db.collection('notes').limit(1).get();
    if (!check.empty) {
      localStorage.setItem('cn_seeded', 'true');
      return;
    }
    const batch = db.batch();
    Object.entries(SAMPLE_NOTES).forEach(([key, notes]) => {
      const [subject, unitIdx, chapIdx] = key.split('_');
      notes.forEach(note => {
        const docRef = db.collection('notes').doc(note.id);
        batch.set(docRef, {
          key: key,
          subject: subject,
          unitIndex: parseInt(unitIdx),
          chapterIndex: parseInt(chapIdx),
          title: note.title,
          content: note.content,
          author: note.author,
          authorEmail: '',
          date: note.date || new Date().toISOString(),
          likes: note.likes || 0,
          likedBy: [],
          bookmarkedBy: []
        });
      });
    });
    await batch.commit();
    localStorage.setItem('cn_seeded', 'true');
    console.log('Sample notes seeded to Firestore.');
  } catch (err) {
    console.error('Error seeding sample notes:', err);
  }
}

async function getNotesForChapter(subject, unitIndex, chapterIndex) {
  const key = `${subject}_${unitIndex}_${chapterIndex}`;
  try {
    const snapshot = await db.collection('notes').where('key', '==', key).get();
    const notes = [];
    snapshot.forEach(doc => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    notes.sort((a, b) => new Date(b.date) - new Date(a.date));
    return notes;
  } catch (err) {
    console.error('Error fetching notes:', err);
    return [];
  }
}

async function saveNoteToFirestore(subject, unitIndex, chapterIndex, noteData) {
  const key = `${subject}_${unitIndex}_${chapterIndex}`;
  try {
    const docRef = await db.collection('notes').add({
      key: key,
      subject: subject,
      unitIndex: unitIndex,
      chapterIndex: chapterIndex,
      title: noteData.title,
      content: noteData.content,
      author: noteData.author,
      authorEmail: noteData.authorEmail || '',
      date: noteData.date || new Date().toISOString(),
      likes: 0,
      likedBy: [],
      bookmarkedBy: [],
      confidence: noteData.confidence || 0,
      wordCount: noteData.wordCount || 0
    });
    return docRef.id;
  } catch (err) {
    console.error('Error saving note:', err);
    throw err;
  }
}

async function updateNoteInFirestore(noteId, updates) {
  try {
    await db.collection('notes').doc(noteId).update(updates);
  } catch (err) {
    console.error('Error updating note:', err);
  }
}

async function getNoteCount(subject) {
  try {
    const snapshot = await db.collection('notes').where('subject', '==', subject).get();
    return snapshot.size;
  } catch (err) {
    console.error('Error counting notes:', err);
    return 0;
  }
}

async function searchNotesInFirestore(query) {
  const results = [];
  const q = query.toLowerCase();
  try {
    const snapshot = await db.collection('notes').get();
    snapshot.forEach(doc => {
      const note = { id: doc.id, ...doc.data() };
      if (
        (note.title && note.title.toLowerCase().includes(q)) ||
        (note.content && note.content.toLowerCase().includes(q))
      ) {
        results.push(note);
      }
    });
  } catch (err) {
    console.error('Error searching notes:', err);
  }
  return results;
}

// ========================
// DARK MODE
// ========================
function initTheme() {
  const savedTheme = localStorage.getItem('collegenotes_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('collegenotes_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

// ========================
// TOAST NOTIFICATIONS
// ========================
function showToast(type, title, message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: 'fa-check',
    error: 'fa-xmark',
    info: 'fa-info'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="fas ${icons[type] || icons.info}"></i></div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.classList.add('removing'); setTimeout(() => this.parentElement.remove(), 400);">
      <i class="fas fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 400);
    }
  }, 4000);
}

// ========================
// LOADING OVERLAY
// ========================
function showLoading(text = 'Processing...') {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.querySelector('.loading-text').textContent = text;
    overlay.classList.add('active');
  }
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

function updateLoadingProgress(percent) {
  const bar = document.querySelector('.loading-progress-bar');
  if (bar) bar.style.width = percent + '%';
}

// ========================
// URL PARAMETERS
// ========================
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ========================
// SEARCH FUNCTIONALITY
// ========================
function initSearch() {
  const searchBtn = document.querySelector('.search-icon');
  const searchWrap = document.querySelector('.nav-search');
  const searchInput = document.querySelector('.nav-search input');

  if (!searchBtn || !searchWrap || !searchInput) return;

  searchBtn.addEventListener('click', () => {
    searchWrap.classList.toggle('active');
    if (searchWrap.classList.contains('active')) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      performSearch(searchInput.value.trim());
    }
    if (e.key === 'Escape') {
      searchWrap.classList.remove('active');
      searchInput.value = '';
    }
  });
}

async function performSearch(query) {
  const results = await searchNotesInFirestore(query);
  if (results.length === 0) {
    showToast('info', 'No Results', `No notes found for "${query}"`);
    return;
  }

  // Navigate to study page with search results
  const firstResult = results[0];
  window.location.href = `study.html?subject=${firstResult.subject}&unit=${firstResult.unitIndex}&chapter=${firstResult.chapterIndex}&noteId=${firstResult.id}`;
}

// ========================
// NAVBAR SCROLL EFFECT
// ========================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========================
// AUTH UI UPDATE (Firebase)
// ========================
function updateAuthUI() {
  const user = auth.currentUser;
  const authBtn = document.getElementById('authBtn');
  const userProfile = document.getElementById('userProfile');

  if (!authBtn || !userProfile) return;

  if (user) {
    authBtn.classList.add('hidden');
    userProfile.classList.remove('hidden');
    const displayName = user.displayName || user.email.split('@')[0];
    const avatarEl = userProfile.querySelector('.user-avatar');
    const nameEl = userProfile.querySelector('.user-name');
    if (avatarEl) avatarEl.textContent = displayName.charAt(0).toUpperCase();
    if (nameEl) nameEl.textContent = displayName;
  } else {
    authBtn.classList.remove('hidden');
    userProfile.classList.add('hidden');
  }
}

// ========================
// AUTH MODAL
// ========================
function initAuthModal() {
  const authBtn = document.getElementById('authBtn');
  const modal = document.getElementById('authModal');
  const closeBtn = modal?.querySelector('.modal-close');

  if (authBtn && modal) {
    authBtn.addEventListener('click', () => {
      modal.classList.add('active');
      showLoginForm();
    });

    closeBtn?.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // User profile click -> logout
  const userProfile = document.getElementById('userProfile');
  if (userProfile) {
    userProfile.addEventListener('click', () => {
      if (confirm('Do you want to log out?')) {
        auth.signOut().then(() => {
          showToast('success', 'Logged Out', 'You have been logged out successfully.');
        }).catch((err) => {
          showToast('error', 'Error', 'Failed to log out. Please try again.');
        });
      }
    });
  }
}

function showLoginForm() {
  const modalBody = document.getElementById('authModalBody');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <h3>Welcome Back</h3>
    <p class="modal-subtitle">Log in to your CollegeNotes account</p>
    <div class="form-group">
      <label>Email</label>
      <input type="email" id="loginEmail" placeholder="Enter your email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" id="loginPassword" placeholder="Enter your password">
    </div>
    <button class="btn-submit" id="loginSubmitBtn" onclick="handleLogin()">
      <i class="fas fa-sign-in-alt"></i> Log In
    </button>
    <div class="modal-switch">
      Don't have an account? <a onclick="showSignupForm()">Sign Up</a>
    </div>
  `;
}

function showSignupForm() {
  const modalBody = document.getElementById('authModalBody');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <h3>Create Account</h3>
    <p class="modal-subtitle">Join CollegeNotes and start learning</p>
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" id="signupName" placeholder="Enter your full name">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" id="signupEmail" placeholder="Enter your email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" id="signupPassword" placeholder="Create a password (min 6 chars)">
    </div>
    <button class="btn-submit" id="signupSubmitBtn" onclick="handleSignup()">
      <i class="fas fa-user-plus"></i> Sign Up
    </button>
    <div class="modal-switch">
      Already have an account? <a onclick="showLoginForm()">Log In</a>
    </div>
  `;
}

async function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    showToast('error', 'Error', 'Please fill in all fields.');
    return;
  }

  const submitBtn = document.getElementById('loginSubmitBtn');
  try {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    }

    await auth.signInWithEmailAndPassword(email, password);

    const user = auth.currentUser;

    // Check if user is blocked
    const blocked = await isUserBlocked(user.email);
    if (blocked) {
      await auth.signOut();
      showToast('error', 'Account Blocked', 'Your account has been blocked by an administrator. Contact admin for help.');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Log In';
      }
      return;
    }

    // Track user login
    await trackUser(user);

    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');

    showToast('success', 'Welcome!', `Logged in as ${user.displayName || email}`);
  } catch (err) {
    let message = 'Login failed. Please try again.';
    if (err.code === 'auth/user-not-found') message = 'No account found with this email.';
    else if (err.code === 'auth/wrong-password') message = 'Incorrect password.';
    else if (err.code === 'auth/invalid-email') message = 'Invalid email address.';
    else if (err.code === 'auth/invalid-credential') message = 'Invalid email or password.';
    else if (err.code === 'auth/too-many-requests') message = 'Too many attempts. Please try again later.';

    showToast('error', 'Login Failed', message);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Log In';
    }
  }
}

async function handleSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  if (!name || !email || !password) {
    showToast('error', 'Error', 'Please fill in all fields.');
    return;
  }

  if (password.length < 6) {
    showToast('error', 'Error', 'Password must be at least 6 characters.');
    return;
  }

  const submitBtn = document.getElementById('signupSubmitBtn');
  try {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
    }

    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName: name });

    // Force refresh to get updated displayName
    await auth.currentUser.reload();

    // Save user to Firestore
    try {
      await db.collection('users').doc(email).set({
        name: name,
        email: email,
        joinedAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      });
    } catch (e) {
      console.error('Error saving user:', e);
    }

    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');

    showToast('success', 'Account Created!', `Welcome to CollegeNotes, ${name}!`);
  } catch (err) {
    let message = 'Registration failed. Please try again.';
    if (err.code === 'auth/email-already-in-use') message = 'An account with this email already exists.';
    else if (err.code === 'auth/weak-password') message = 'Password should be at least 6 characters.';
    else if (err.code === 'auth/invalid-email') message = 'Invalid email address.';

    showToast('error', 'Sign Up Failed', message);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Sign Up';
    }
  }
}

// ========================
// IMAGE VALIDATION
// ========================
function validateImage(file) {
  return new Promise((resolve, reject) => {
    // Check file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      reject('Please upload only JPG or PNG images.');
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      reject('Image size must be less than 10MB.');
      return;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.onload = () => {
        // Check minimum dimensions
        if (img.width < 200 || img.height < 200) {
          reject('Image is too small. Minimum 200x200 pixels required.');
          return;
        }

        // Analyze image quality using canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const sampleSize = Math.min(img.width, img.height, 300);
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
        const pixels = imageData.data;

        // Calculate brightness variance (blur detection)
        let sum = 0;
        let sumSq = 0;
        let count = 0;
        let darkPixels = 0;
        let lightPixels = 0;

        for (let i = 0; i < pixels.length; i += 4) {
          const gray = 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];
          sum += gray;
          sumSq += gray * gray;
          count++;
          if (gray < 80) darkPixels++;
          if (gray > 200) lightPixels++;
        }

        const mean = sum / count;
        const variance = (sumSq / count) - (mean * mean);

        // Low variance = very uniform image (likely blank or very blurred)
        if (variance < 100) {
          reject('Image appears too blurry or blank. Please upload a clear image of study notes.');
          return;
        }

        // Check if image has text-like contrast (mix of dark and light pixels)
        const darkRatio = darkPixels / count;
        const lightRatio = lightPixels / count;

        // Study notes typically have dark text on light background or vice versa
        if (darkRatio < 0.02 && lightRatio > 0.95) {
          reject('Image appears to be mostly blank. Please upload an image containing study notes.');
          return;
        }

        if (darkRatio > 0.95) {
          reject('Image appears too dark. Please upload a clear, well-lit image of study notes.');
          return;
        }

        resolve(e.target.result);
      };

      img.onerror = () => reject('Failed to load image. Please try another file.');
      img.src = e.target.result;
    };

    reader.onerror = () => reject('Failed to read file.');
    reader.readAsDataURL(file);
  });
}

// ========================
// OCR PROCESSING
// ========================
async function processOCR(imageDataUrl) {
  showLoading('Initializing OCR engine...');
  updateLoadingProgress(10);

  try {
    const worker = await Tesseract.createWorker('eng', 1, {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          const progress = Math.round(10 + m.progress * 80);
          updateLoadingProgress(progress);
          const loadingText = document.querySelector('.loading-text');
          if (loadingText) loadingText.textContent = `Recognizing text... ${Math.round(m.progress * 100)}%`;
        }
      }
    });

    updateLoadingProgress(30);
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) loadingText.textContent = 'Recognizing text...';

    const { data: { text, confidence } } = await worker.recognize(imageDataUrl);
    await worker.terminate();

    updateLoadingProgress(95);

    // Validate OCR results
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 1).length;

    if (wordCount < 5) {
      hideLoading();
      return {
        success: false,
        error: 'Invalid image. Please upload clear study notes. Could not extract enough text from the image.'
      };
    }

    if (confidence < 20) {
      hideLoading();
      return {
        success: false,
        error: 'Image quality is too low. Please upload a clearer image of study notes.'
      };
    }

    updateLoadingProgress(100);

    // Format extracted text into HTML
    const formattedContent = formatExtractedText(text);

    hideLoading();
    return {
      success: true,
      text: text,
      html: formattedContent,
      confidence: confidence,
      wordCount: wordCount
    };
  } catch (err) {
    hideLoading();
    console.error('OCR Error:', err);
    return {
      success: false,
      error: 'OCR processing failed. Please try again.'
    };
  }
}

function formatExtractedText(rawText) {
  // Split into paragraphs
  const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let html = '';
  let currentParagraph = [];

  lines.forEach((line, index) => {
    // Detect potential headings (short lines, possibly capitalized or numbered)
    const isHeading =
      (line.length < 80 && line.length > 2 &&
        (line === line.toUpperCase() ||
          /^(\d+[\.]\s|Chapter|Unit|Topic|Section|Introduction|Conclusion|Summary)/i.test(line)));

    if (isHeading) {
      // Flush current paragraph
      if (currentParagraph.length > 0) {
        html += `<p>${currentParagraph.join(' ')}</p>\n`;
        currentParagraph = [];
      }
      html += `<h3>${line}</h3>\n`;
    } else if (line.match(/^[\•\-\*\→\►]\s/) || line.match(/^\d+[\.]\s/)) {
      // Bullet point or numbered list
      if (currentParagraph.length > 0) {
        html += `<p>${currentParagraph.join(' ')}</p>\n`;
        currentParagraph = [];
      }
      html += `<p>• ${line.replace(/^[\•\-\*\→\►\d\.]+\s*/, '')}</p>\n`;
    } else {
      currentParagraph.push(line);

      // Break paragraph if it gets long
      if (currentParagraph.join(' ').length > 300) {
        html += `<p>${currentParagraph.join(' ')}</p>\n`;
        currentParagraph = [];
      }
    }
  });

  // Flush remaining paragraph
  if (currentParagraph.length > 0) {
    html += `<p>${currentParagraph.join(' ')}</p>\n`;
  }

  return html || '<p>No readable text could be extracted.</p>';
}

// ========================
// PAGE: HOME (index.html)
// ========================
async function initHomePage() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;

  const entries = Object.entries(CURRICULUM);

  // Render cards immediately with "Loading..." count
  entries.forEach(([key, subject]) => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.setAttribute('data-subject', key);
    card.innerHTML = `
      <div class="card-icon"><i class="fas ${subject.icon}"></i></div>
      <h3 class="card-title">${subject.name}</h3>
      <p class="card-count">Loading...</p>
      <div class="card-arrow"><i class="fas fa-arrow-right"></i></div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `subject.html?subject=${key}`;
    });
    grid.appendChild(card);
  });

  // Fetch counts from Firestore and update cards
  try {
    const counts = await Promise.all(entries.map(([key]) => getNoteCount(key)));
    const cards = grid.querySelectorAll('.subject-card');
    cards.forEach((card, index) => {
      const countEl = card.querySelector('.card-count');
      const count = counts[index];
      if (countEl) countEl.textContent = `${count} note${count !== 1 ? 's' : ''} available`;
    });
  } catch (err) {
    console.error('Error loading note counts:', err);
  }
}

// ========================
// PAGE: SUBJECT (subject.html)
// ========================
function initSubjectPage() {
  const subject = getParam('subject');
  if (!subject || !CURRICULUM[subject]) {
    window.location.href = 'index.html';
    return;
  }

  const data = CURRICULUM[subject];

  // Update header
  const iconEl = document.getElementById('subjectIcon');
  const titleEl = document.getElementById('subjectTitle');
  const descEl = document.getElementById('subjectDesc');

  if (iconEl) {
    iconEl.style.background = data.gradient;
    iconEl.innerHTML = `<i class="fas ${data.icon}"></i>`;
  }
  if (titleEl) titleEl.textContent = data.name;
  if (descEl) descEl.textContent = `Class 12 ${data.name} - ${data.units.length} units, ${data.units.reduce((a, u) => a + u.chapters.length, 0)} chapters`;

  // Option cards
  const studyCard = document.getElementById('studyOption');
  const uploadCard = document.getElementById('uploadOption');
  const backCard = document.getElementById('backOption');

  if (studyCard) {
    studyCard.addEventListener('click', () => {
      window.location.href = `study.html?subject=${subject}`;
    });
  }
  if (uploadCard) {
    uploadCard.addEventListener('click', () => {
      window.location.href = `upload.html?subject=${subject}`;
    });
  }
  if (backCard) {
    backCard.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}

// ========================
// PAGE: STUDY (study.html)
// ========================
function initStudyPage() {
  const subject = getParam('subject');
  if (!subject || !CURRICULUM[subject]) {
    window.location.href = 'index.html';
    return;
  }

  const data = CURRICULUM[subject];

  // Update breadcrumb
  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="sep"><i class="fas fa-chevron-right"></i></span>
      <a href="subject.html?subject=${subject}">${data.name}</a>
      <span class="sep"><i class="fas fa-chevron-right"></i></span>
      <span>Study Notes</span>
    `;
  }

  // Populate unit selector
  const unitSelect = document.getElementById('unitSelect');
  const chapterSelect = document.getElementById('chapterSelect');

  if (unitSelect) {
    data.units.forEach((unit, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = unit.name;
      unitSelect.appendChild(option);
    });

    unitSelect.addEventListener('change', () => {
      populateChapters(data, unitSelect.value);
    });
  }

  if (chapterSelect) {
    chapterSelect.addEventListener('change', () => {
      const unitIdx = unitSelect.value;
      const chapIdx = chapterSelect.value;
      if (unitIdx !== '' && chapIdx !== '') {
        loadNotes(subject, parseInt(unitIdx), parseInt(chapIdx));
      }
    });
  }

  // Check if coming from URL parameters
  const unitParam = getParam('unit');
  const chapterParam = getParam('chapter');
  const noteIdParam = getParam('noteId');

  if (unitParam !== null && unitSelect) {
    unitSelect.value = unitParam;
    populateChapters(data, unitParam);

    if (chapterParam !== null && chapterSelect) {
      setTimeout(() => {
        chapterSelect.value = chapterParam;
        loadNotes(subject, parseInt(unitParam), parseInt(chapterParam), noteIdParam);
      }, 100);
    }
  }
}

function populateChapters(data, unitIndex) {
  const chapterSelect = document.getElementById('chapterSelect');
  if (!chapterSelect || unitIndex === '') return;

  chapterSelect.innerHTML = '<option value="">Choose a chapter...</option>';
  const unit = data.units[parseInt(unitIndex)];

  if (unit) {
    unit.chapters.forEach((chapter, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = chapter;
      chapterSelect.appendChild(option);
    });
    chapterSelect.disabled = false;
  }
}

async function loadNotes(subject, unitIndex, chapterIndex, openNoteId = null) {
  const container = document.getElementById('notesContainer');
  if (!container) return;

  // Show loading state
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon" style="animation: pulse 1.5s infinite;">⏳</div>
      <h3>Loading notes...</h3>
      <p>Fetching notes from the cloud...</p>
    </div>
  `;

  const notes = await getNotesForChapter(subject, unitIndex, chapterIndex);
  const chapterName = CURRICULUM[subject].units[unitIndex]?.chapters[chapterIndex] || 'Unknown Chapter';

  if (notes.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <h3>No notes available for this chapter</h3>
        <p>Be the first to upload notes for "${chapterName}"!</p>
        <a href="upload.html?subject=${subject}" class="btn-submit" style="display:inline-flex; width:auto; margin-top: 1.5rem; padding: 12px 24px;">
          <i class="fas fa-upload"></i> Upload Notes
        </a>
      </div>
    `;
    return;
  }

  if (openNoteId) {
    const note = notes.find(n => n.id === openNoteId);
    if (note) {
      showFullNote(note, subject, unitIndex, chapterIndex);
      return;
    }
  }

  // Show notes list
  const user = auth.currentUser;

  container.innerHTML = `
    <div class="notes-list-header" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
      <h3 style="font-family:var(--font-display); font-weight:700;">${chapterName}</h3>
      <span style="color:var(--text-muted); font-size:0.9rem;">${notes.length} note${notes.length !== 1 ? 's' : ''}</span>
    </div>
    <div class="notes-list" id="notesList"></div>
  `;

  const notesList = document.getElementById('notesList');

  notes.forEach(note => {
    const isLiked = user && note.likedBy?.includes(user.email);
    const isBookmarked = user && note.bookmarkedBy?.includes(user.email);

    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div class="note-header">
        <h4 class="note-title">${note.title}</h4>
      </div>
      <div class="note-meta">
        <span><i class="fas fa-user"></i> ${note.author}</span>
        <span><i class="fas fa-calendar"></i> ${new Date(note.date).toLocaleDateString()}</span>
        <span><i class="fas fa-heart"></i> ${note.likes || 0}</span>
      </div>
      <div class="note-preview">${note.content.replace(/<[^>]*>/g, ' ').substring(0, 200)}...</div>
      <div class="note-actions">
        <button class="note-action-btn ${isLiked ? 'liked' : ''}" data-action="like" data-id="${note.id}">
          <i class="fas fa-heart"></i> ${note.likes || 0}
        </button>
        <button class="note-action-btn ${isBookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${note.id}">
          <i class="fas fa-bookmark"></i> ${isBookmarked ? 'Saved' : 'Save'}
        </button>
        <button class="note-action-btn" data-action="read" data-id="${note.id}" style="margin-left:auto;">
          <i class="fas fa-book-open"></i> Read
        </button>
      </div>
    `;

    // Event listeners
    card.querySelector('[data-action="read"]').addEventListener('click', (e) => {
      e.stopPropagation();
      showFullNote(note, subject, unitIndex, chapterIndex);
    });

    card.querySelector('[data-action="like"]').addEventListener('click', (e) => {
      e.stopPropagation();
      handleLike(note, subject, unitIndex, chapterIndex, e.currentTarget);
    });

    card.querySelector('[data-action="bookmark"]').addEventListener('click', (e) => {
      e.stopPropagation();
      handleBookmark(note, subject, unitIndex, chapterIndex, e.currentTarget);
    });

    card.addEventListener('click', () => {
      showFullNote(note, subject, unitIndex, chapterIndex);
    });

    notesList.appendChild(card);
  });
}

function showFullNote(note, subject, unitIndex, chapterIndex) {
  const container = document.getElementById('notesContainer');
  if (!container) return;

  const user = auth.currentUser;
  const isLiked = user && note.likedBy?.includes(user.email);
  const isBookmarked = user && note.bookmarkedBy?.includes(user.email);

  container.innerHTML = `
    <button class="btn-back" id="backToListBtn">
      <i class="fas fa-arrow-left"></i> Back to list
    </button>
    <div class="note-full-view" style="margin-top:1rem;">
      <div class="note-full-header">
        <div>
          <h2 class="note-full-title">${note.title}</h2>
          <div class="note-full-info">
            <span><i class="fas fa-user"></i> ${note.author}</span>
            <span><i class="fas fa-calendar"></i> ${new Date(note.date).toLocaleDateString()}</span>
            <span><i class="fas fa-heart"></i> ${note.likes || 0} likes</span>
          </div>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="note-action-btn ${isLiked ? 'liked' : ''}" id="fullNoteLike">
            <i class="fas fa-heart"></i>
          </button>
          <button class="note-action-btn ${isBookmarked ? 'bookmarked' : ''}" id="fullNoteBookmark">
            <i class="fas fa-bookmark"></i>
          </button>
        </div>
      </div>
      <div class="note-body">${note.content}</div>
    </div>
  `;

  document.getElementById('backToListBtn').addEventListener('click', () => {
    loadNotes(subject, unitIndex, chapterIndex);
  });

  document.getElementById('fullNoteLike')?.addEventListener('click', (e) => {
    handleLike(note, subject, unitIndex, chapterIndex, e.currentTarget);
  });

  document.getElementById('fullNoteBookmark')?.addEventListener('click', (e) => {
    handleBookmark(note, subject, unitIndex, chapterIndex, e.currentTarget);
  });
}

async function handleLike(note, subject, unitIndex, chapterIndex, btn) {
  const user = auth.currentUser;
  if (!user) {
    showToast('info', 'Login Required', 'Please log in to like notes.');
    return;
  }

  if (!note.likedBy) note.likedBy = [];

  const index = note.likedBy.indexOf(user.email);
  if (index === -1) {
    note.likedBy.push(user.email);
    note.likes = (note.likes || 0) + 1;
    btn.classList.add('liked');
    showToast('success', 'Liked!', 'Note added to your likes.');
  } else {
    note.likedBy.splice(index, 1);
    note.likes = Math.max(0, (note.likes || 1) - 1);
    btn.classList.remove('liked');
  }

  btn.innerHTML = `<i class="fas fa-heart"></i> ${note.likes}`;

  // Update in Firestore
  await updateNoteInFirestore(note.id, { likes: note.likes, likedBy: note.likedBy });
}

async function handleBookmark(note, subject, unitIndex, chapterIndex, btn) {
  const user = auth.currentUser;
  if (!user) {
    showToast('info', 'Login Required', 'Please log in to bookmark notes.');
    return;
  }

  if (!note.bookmarkedBy) note.bookmarkedBy = [];

  const index = note.bookmarkedBy.indexOf(user.email);
  if (index === -1) {
    note.bookmarkedBy.push(user.email);
    btn.classList.add('bookmarked');
    btn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    showToast('success', 'Bookmarked!', 'Note saved to your bookmarks.');
  } else {
    note.bookmarkedBy.splice(index, 1);
    btn.classList.remove('bookmarked');
    btn.innerHTML = '<i class="fas fa-bookmark"></i> Save';
  }

  // Update in Firestore
  await updateNoteInFirestore(note.id, { bookmarkedBy: note.bookmarkedBy });
}

// ========================
// PAGE: UPLOAD (upload.html)
// ========================
function initUploadPage() {
  const subject = getParam('subject');

  // Populate subject selector
  const subjectSelect = document.getElementById('uploadSubject');
  if (subjectSelect) {
    Object.entries(CURRICULUM).forEach(([key, sub]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = sub.name;
      subjectSelect.appendChild(option);
    });

    // Pre-select if coming from subject page
    if (subject) {
      subjectSelect.value = subject;
      populateUploadUnits(subject);
    }

    subjectSelect.addEventListener('change', () => {
      populateUploadUnits(subjectSelect.value);
    });
  }

  // Unit selector
  const unitSelect = document.getElementById('uploadUnit');
  if (unitSelect) {
    unitSelect.addEventListener('change', () => {
      const selectedSubject = subjectSelect?.value;
      if (selectedSubject) {
        populateUploadChapters(selectedSubject, unitSelect.value);
      }
    });
  }

  // File upload - Drop zone
  initDropZone();

  // Form submission
  const form = document.getElementById('uploadForm');
  if (form) {
    form.addEventListener('submit', handleUploadSubmit);
  }

  // Auth gate — listen for auth state changes
  auth.onAuthStateChanged((user) => {
    updateUploadAuthState(user);
  });
}

function updateUploadAuthState(user) {
  const form = document.getElementById('uploadForm');
  let gate = document.getElementById('uploadAuthGate');

  if (!user) {
    // Hide form and show auth gate
    if (form) form.style.display = 'none';
    if (!gate) {
      createUploadAuthGate();
    }
  } else {
    // Show form and remove auth gate
    if (form) form.style.display = '';
    gate = document.getElementById('uploadAuthGate');
    if (gate) gate.remove();
  }
}

function createUploadAuthGate() {
  const container = document.querySelector('.upload-container');
  if (!container) return;

  const gate = document.createElement('div');
  gate.id = 'uploadAuthGate';
  gate.className = 'auth-gate';
  gate.innerHTML = `
    <div class="auth-gate-icon"><i class="fas fa-lock"></i></div>
    <h3>Sign In Required</h3>
    <p>Please sign in or create an account to upload and share your study notes with fellow students.</p>
    <div class="auth-gate-buttons">
      <button class="btn-submit" style="width:auto; padding:12px 32px;" id="authGateLoginBtn">
        <i class="fas fa-sign-in-alt"></i> Sign In
      </button>
      <button class="btn-back" id="authGateSignupBtn">
        <i class="fas fa-user-plus"></i> Create Account
      </button>
    </div>
  `;

  // Insert after the upload header
  const header = container.querySelector('.upload-header');
  if (header) {
    header.after(gate);
  } else {
    container.appendChild(gate);
  }

  document.getElementById('authGateLoginBtn')?.addEventListener('click', () => {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.add('active');
      showLoginForm();
    }
  });

  document.getElementById('authGateSignupBtn')?.addEventListener('click', () => {
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.add('active');
      showSignupForm();
    }
  });
}

function populateUploadUnits(subject) {
  const unitSelect = document.getElementById('uploadUnit');
  const chapterSelect = document.getElementById('uploadChapter');
  if (!unitSelect || !subject) return;

  unitSelect.innerHTML = '<option value="">Select a unit...</option>';
  if (chapterSelect) chapterSelect.innerHTML = '<option value="">Select a chapter...</option>';

  const data = CURRICULUM[subject];
  if (!data) return;

  data.units.forEach((unit, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = unit.name;
    unitSelect.appendChild(option);
  });

  unitSelect.disabled = false;
}

function populateUploadChapters(subject, unitIndex) {
  const chapterSelect = document.getElementById('uploadChapter');
  if (!chapterSelect || unitIndex === '') return;

  chapterSelect.innerHTML = '<option value="">Select a chapter...</option>';
  const data = CURRICULUM[subject];
  const unit = data?.units[parseInt(unitIndex)];

  if (unit) {
    unit.chapters.forEach((chapter, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = chapter;
      chapterSelect.appendChild(option);
    });
    chapterSelect.disabled = false;
  }
}

let selectedFile = null;

function initDropZone() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImg');
  const removeBtn = document.getElementById('removeImage');

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFileSelect(files[0]);
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleFileSelect(e.target.files[0]);
  });

  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearFileSelection();
    });
  }
}

async function handleFileSelect(file) {
  try {
    const dataUrl = await validateImage(file);
    selectedFile = file;

    const preview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const dropZone = document.getElementById('dropZone');

    if (previewImg) previewImg.src = dataUrl;
    if (preview) preview.classList.add('active');
    if (dropZone) {
      dropZone.querySelector('.drop-text').textContent = file.name;
      dropZone.querySelector('.drop-hint').textContent = `${(file.size / 1024).toFixed(1)} KB`;
    }
  } catch (error) {
    showToast('error', 'Invalid Image', error);
    clearFileSelection();
  }
}

function clearFileSelection() {
  selectedFile = null;
  const preview = document.getElementById('imagePreview');
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');

  if (preview) preview.classList.remove('active');
  if (fileInput) fileInput.value = '';
  if (dropZone) {
    dropZone.querySelector('.drop-text').textContent = 'Drop image here or click to browse';
    dropZone.querySelector('.drop-hint').textContent = 'Supports JPG, PNG (Max 10MB)';
  }
}

async function handleUploadSubmit(e) {
  e.preventDefault();

  // Double-check authentication
  const user = auth.currentUser;
  if (!user) {
    showToast('info', 'Sign In Required', 'Please sign in or create an account to upload notes.');
    const modal = document.getElementById('authModal');
    if (modal) {
      modal.classList.add('active');
      showSignupForm();
    }
    return;
  }

  const subject = document.getElementById('uploadSubject').value;
  const unitIndex = document.getElementById('uploadUnit').value;
  const chapterIndex = document.getElementById('uploadChapter').value;
  const title = document.getElementById('uploadTitle').value.trim();

  // Validation
  if (!subject) {
    showToast('error', 'Required', 'Please select a subject.');
    return;
  }
  if (unitIndex === '') {
    showToast('error', 'Required', 'Please select a unit.');
    return;
  }
  if (chapterIndex === '') {
    showToast('error', 'Required', 'Please select a chapter.');
    return;
  }
  if (!title) {
    showToast('error', 'Required', 'Please enter a title for your notes.');
    return;
  }
  if (!selectedFile) {
    showToast('error', 'Required', 'Please select an image to upload.');
    return;
  }

  // Disable submit button
  const submitBtn = document.querySelector('.upload-form .btn-submit');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  }

  // Read file as data URL for OCR
  const reader = new FileReader();
  reader.onload = async (evt) => {
    const result = await processOCR(evt.target.result);

    if (!result.success) {
      showToast('error', 'Upload Failed', result.error);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Upload & Convert to Text';
      }
      return;
    }

    // Create note data
    const noteData = {
      title: title,
      content: result.html,
      author: user.displayName || user.email.split('@')[0],
      authorEmail: user.email,
      date: new Date().toISOString(),
      confidence: result.confidence,
      wordCount: result.wordCount
    };

    try {
      // Save to Firestore
      const noteId = await saveNoteToFirestore(subject, parseInt(unitIndex), parseInt(chapterIndex), noteData);
      noteData.id = noteId;

      showToast('success', 'Upload Successful!', `"${title}" has been uploaded and converted to text.`);

      // Show success state
      showUploadSuccess(noteData, subject, unitIndex, chapterIndex);
    } catch (err) {
      showToast('error', 'Save Failed', 'Could not save to database. Please try again.');
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Upload & Convert to Text';
    }
  };

  reader.readAsDataURL(selectedFile);
}

function showUploadSuccess(note, subject, unitIndex, chapterIndex) {
  const form = document.getElementById('uploadForm');
  if (!form) return;

  const chapterName = CURRICULUM[subject]?.units[parseInt(unitIndex)]?.chapters[parseInt(chapterIndex)] || '';

  form.innerHTML = `
    <div style="text-align:center; padding: 2rem 0;">
      <div style="width:80px; height:80px; border-radius:50%; background:rgba(0,201,167,0.15); display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; font-size:2rem; color:var(--accent-teal);">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3 style="font-family:var(--font-display); font-size:1.5rem; margin-bottom:0.5rem;">Notes Uploaded Successfully!</h3>
      <p style="color:var(--text-muted); margin-bottom:0.5rem;">"${note.title}" — ${chapterName}</p>
      <p style="color:var(--text-muted); font-size:0.85rem;">Confidence: ${Math.round(note.confidence)}% | Words extracted: ${note.wordCount}</p>
      
      <div class="note-full-view" style="margin-top:2rem; text-align:left;">
        <h4 style="font-family:var(--font-display); margin-bottom:1rem;">Extracted Content Preview:</h4>
        <div class="note-body" style="max-height:300px;">${note.content}</div>
      </div>
      
      <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem; flex-wrap:wrap;">
        <a href="study.html?subject=${subject}&unit=${unitIndex}&chapter=${chapterIndex}&noteId=${note.id}" class="btn-submit" style="width:auto; padding:12px 24px;">
          <i class="fas fa-book-open"></i> View Notes
        </a>
        <button class="btn-back" onclick="window.location.reload()">
          <i class="fas fa-plus"></i> Upload Another
        </button>
      </div>
    </div>
  `;
}

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();

  // Initialize navbar scroll effect
  initNavbarScroll();

  // Initialize search
  initSearch();

  // Initialize auth modal
  initAuthModal();

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Firebase Auth state listener — updates nav UI on all pages + blocked check
  auth.onAuthStateChanged(async (user) => {
    updateAuthUI();
    if (user && user.email !== ADMIN_EMAIL) {
      const blocked = await isUserBlocked(user.email);
      if (blocked) {
        await auth.signOut();
        showToast('error', 'Account Blocked', 'Your account has been blocked by an administrator.');
      }
    }
  });

  // Seed sample notes to Firestore on first load
  seedSampleNotes();

  // Detect current page and initialize
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  if (page === 'index.html' || page === '' || page === 'test' || page === 'test/') {
    initHomePage();
  } else if (page === 'subject.html') {
    initSubjectPage();
  } else if (page === 'study.html') {
    initStudyPage();
  } else if (page === 'upload.html') {
    initUploadPage();
  } else if (page === 'admin.html') {
    initAdminPage();
  }
});

// ========================
// ADMIN PORTAL
// ========================
function initAdminPage() {
  const authContainer = document.getElementById('adminAuthContainer');
  const deniedContainer = document.getElementById('adminDenied');
  const adminPanel = document.getElementById('adminPanel');

  // Handle admin login form
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('adminEmail').value.trim();
      const password = document.getElementById('adminPassword').value.trim();

      if (!email || !password) {
        showToast('error', 'Error', 'Please fill in all fields.');
        return;
      }

      const submitBtn = document.getElementById('adminLoginBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
      }

      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (err) {
        let msg = 'Login failed. Please try again.';
        if (err.code === 'auth/user-not-found') msg = 'No account found with this email.';
        else if (err.code === 'auth/wrong-password') msg = 'Incorrect password.';
        else if (err.code === 'auth/invalid-credential') msg = 'Invalid email or password.';
        showToast('error', 'Login Failed', msg);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In as Admin';
        }
      }
    });
  }

  // Auth state listener for admin page
  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      if (authContainer) authContainer.style.display = 'flex';
      if (deniedContainer) deniedContainer.style.display = 'none';
      if (adminPanel) adminPanel.style.display = 'none';
      return;
    }

    if (user.email !== ADMIN_EMAIL) {
      if (authContainer) authContainer.style.display = 'none';
      if (deniedContainer) deniedContainer.style.display = 'flex';
      if (adminPanel) adminPanel.style.display = 'none';
      return;
    }

    // Admin authenticated
    if (authContainer) authContainer.style.display = 'none';
    if (deniedContainer) deniedContainer.style.display = 'none';
    if (adminPanel) adminPanel.style.display = 'flex';

    // Set admin name
    const nameEl = document.getElementById('adminUserName');
    if (nameEl) nameEl.textContent = user.displayName || 'Admin';

    initAdminTabs();
    await loadAdminDashboard();
  });
}

function initAdminTabs() {
  const navItems = document.querySelectorAll('.admin-nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      const tabId = item.getAttribute('data-tab');
      document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.classList.add('active');

      const title = document.getElementById('adminPageTitle');
      if (title) {
        const titles = { dashboard: 'Dashboard', notes: 'Notes Management', users: 'User Management' };
        title.textContent = titles[tabId] || tabId;
      }
    });
  });
}

async function loadAdminDashboard() {
  await Promise.all([
    loadAdminStats(),
    loadAdminNotes(),
    loadAdminUsers()
  ]);
}

async function loadAdminStats() {
  const statsGrid = document.getElementById('adminStats');
  if (!statsGrid) return;

  try {
    const [notesSnap, usersSnap, blockedSnap] = await Promise.all([
      db.collection('notes').get(),
      db.collection('users').get(),
      db.collection('blocked_users').get()
    ]);

    const totalNotes = notesSnap.size;
    const totalUsers = usersSnap.size;
    const totalBlocked = blockedSnap.size;

    let totalLikes = 0;
    notesSnap.forEach(doc => {
      totalLikes += doc.data().likes || 0;
    });

    statsGrid.innerHTML = `
      <div class="admin-stat-card stat-notes">
        <div class="stat-icon"><i class="fas fa-file-lines"></i></div>
        <div class="stat-info">
          <div class="stat-value">${totalNotes}</div>
          <div class="stat-label">Total Notes</div>
        </div>
      </div>
      <div class="admin-stat-card stat-users">
        <div class="stat-icon"><i class="fas fa-users"></i></div>
        <div class="stat-info">
          <div class="stat-value">${totalUsers}</div>
          <div class="stat-label">Registered Users</div>
        </div>
      </div>
      <div class="admin-stat-card stat-likes">
        <div class="stat-icon"><i class="fas fa-heart"></i></div>
        <div class="stat-info">
          <div class="stat-value">${totalLikes}</div>
          <div class="stat-label">Total Likes</div>
        </div>
      </div>
      <div class="admin-stat-card stat-blocked">
        <div class="stat-icon"><i class="fas fa-ban"></i></div>
        <div class="stat-info">
          <div class="stat-value">${totalBlocked}</div>
          <div class="stat-label">Blocked Users</div>
        </div>
      </div>
    `;

    // Load recent notes
    const notes = [];
    notesSnap.forEach(doc => notes.push({ id: doc.id, ...doc.data() }));
    notes.sort((a, b) => new Date(b.date) - new Date(a.date));
    const recent = notes.slice(0, 5);

    const recentEl = document.getElementById('adminRecentNotes');
    if (recentEl) {
      if (recent.length === 0) {
        recentEl.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:2rem;">No notes yet.</p>';
      } else {
        recentEl.innerHTML = recent.map(note => `
          <div class="admin-recent-item">
            <div class="admin-recent-icon" data-subject="${note.subject}">
              <i class="fas ${CURRICULUM[note.subject]?.icon || 'fa-file'}"></i>
            </div>
            <div class="admin-recent-info">
              <strong>${note.title}</strong>
              <span>${CURRICULUM[note.subject]?.name || note.subject} • ${note.author} • ${new Date(note.date).toLocaleDateString()}</span>
            </div>
            <span class="admin-badge-likes"><i class="fas fa-heart"></i> ${note.likes || 0}</span>
          </div>
        `).join('');
      }
    }
  } catch (err) {
    console.error('Error loading admin stats:', err);
    if (statsGrid) statsGrid.innerHTML = '<p style="color:var(--accent-coral);">Failed to load stats.</p>';
  }
}

// ---- Admin Notes Management ----
let allAdminNotes = [];

async function loadAdminNotes() {
  const tbody = document.getElementById('adminNotesBody');
  if (!tbody) return;

  try {
    const snapshot = await db.collection('notes').get();
    allAdminNotes = [];
    snapshot.forEach(doc => allAdminNotes.push({ id: doc.id, ...doc.data() }));
    allAdminNotes.sort((a, b) => new Date(b.date) - new Date(a.date));

    renderAdminNotes(allAdminNotes);

    // Setup search (only bind once)
    const searchInput = document.getElementById('adminNoteSearch');
    if (searchInput && !searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase();
        const filtered = allAdminNotes.filter(n =>
          (n.title || '').toLowerCase().includes(q) ||
          (n.author || '').toLowerCase().includes(q) ||
          (n.subject || '').toLowerCase().includes(q)
        );
        renderAdminNotes(filtered);
      });
    }
  } catch (err) {
    console.error('Error loading admin notes:', err);
    if (tbody) tbody.innerHTML = '<tr><td colspan="6" class="admin-table-loading" style="color:var(--accent-coral);">Failed to load notes.</td></tr>';
  }
}

function renderAdminNotes(notes) {
  const tbody = document.getElementById('adminNotesBody');
  if (!tbody) return;

  if (notes.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="admin-table-loading">No notes found</td></tr>';
    return;
  }

  tbody.innerHTML = notes.map(note => {
    const safeTitle = (note.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    return `
      <tr>
        <td><strong>${note.title || 'Untitled'}</strong></td>
        <td><span class="admin-subject-badge" data-subject="${note.subject}">${CURRICULUM[note.subject]?.name || note.subject}</span></td>
        <td>${note.author || 'Unknown'}</td>
        <td>${note.date ? new Date(note.date).toLocaleDateString() : '—'}</td>
        <td><span class="admin-likes"><i class="fas fa-heart"></i> ${note.likes || 0}</span></td>
        <td>
          <div class="admin-actions">
            <button class="admin-action-btn view" onclick="viewNoteAdmin('${note.id}')" title="View">
              <i class="fas fa-eye"></i>
            </button>
            <button class="admin-action-btn delete" onclick="deleteNoteAdmin('${note.id}', '${safeTitle}')" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function viewNoteAdmin(noteId) {
  const note = allAdminNotes.find(n => n.id === noteId);
  if (!note) return;

  const overlay = document.createElement('div');
  overlay.className = 'admin-modal-overlay';
  overlay.innerHTML = `
    <div class="admin-modal admin-modal-lg">
      <div class="admin-modal-header">
        <h3>${note.title}</h3>
        <button class="admin-modal-close" onclick="this.closest('.admin-modal-overlay').remove()">
          <i class="fas fa-xmark"></i>
        </button>
      </div>
      <div class="admin-modal-body">
        <div class="admin-note-meta-bar">
          <span><i class="fas fa-user"></i> ${note.author}</span>
          <span><i class="fas fa-book"></i> ${CURRICULUM[note.subject]?.name || note.subject}</span>
          <span><i class="fas fa-calendar"></i> ${new Date(note.date).toLocaleDateString()}</span>
          <span><i class="fas fa-heart"></i> ${note.likes || 0} likes</span>
        </div>
        <div class="admin-note-content">${note.content}</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

async function deleteNoteAdmin(noteId, title) {
  if (!confirm(`Are you sure you want to delete "${title}"?\n\nThis action cannot be undone.`)) return;

  try {
    await db.collection('notes').doc(noteId).delete();
    showToast('success', 'Deleted', `Note "${title}" has been deleted.`);
    await loadAdminNotes();
    await loadAdminStats();
  } catch (err) {
    showToast('error', 'Error', 'Failed to delete note.');
    console.error(err);
  }
}

// ---- Add Note Modal ----
function showAddNoteModal() {
  const overlay = document.createElement('div');
  overlay.className = 'admin-modal-overlay';
  overlay.id = 'addNoteOverlay';

  let subjectOptions = Object.entries(CURRICULUM).map(([key, sub]) =>
    `<option value="${key}">${sub.name}</option>`
  ).join('');

  overlay.innerHTML = `
    <div class="admin-modal">
      <div class="admin-modal-header">
        <h3><i class="fas fa-plus-circle"></i> Add New Note</h3>
        <button class="admin-modal-close" onclick="this.closest('.admin-modal-overlay').remove()">
          <i class="fas fa-xmark"></i>
        </button>
      </div>
      <div class="admin-modal-body">
        <div class="form-group">
          <label>Subject</label>
          <select id="addNoteSubject" onchange="updateAddNoteUnits()">
            <option value="">Select subject...</option>
            ${subjectOptions}
          </select>
        </div>
        <div class="form-group">
          <label>Unit</label>
          <select id="addNoteUnit" disabled onchange="updateAddNoteChapters()">
            <option value="">Select unit...</option>
          </select>
        </div>
        <div class="form-group">
          <label>Chapter</label>
          <select id="addNoteChapter" disabled>
            <option value="">Select chapter...</option>
          </select>
        </div>
        <div class="form-group">
          <label>Title</label>
          <input type="text" id="addNoteTitle" placeholder="Enter note title">
        </div>
        <div class="form-group">
          <label>Content (HTML supported)</label>
          <textarea id="addNoteContent" rows="8" placeholder="Enter note content... HTML tags like <h3>, <p>, <strong> are supported." style="width:100%; padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color); background:var(--bg-input); color:var(--text-primary); font-family:var(--font-body); font-size:0.95rem; resize:vertical;"></textarea>
        </div>
      </div>
      <div class="admin-modal-footer">
        <button class="btn-back" onclick="this.closest('.admin-modal-overlay').remove()">Cancel</button>
        <button class="btn-submit" style="width:auto; padding:10px 24px;" onclick="submitAddNote()">
          <i class="fas fa-plus"></i> Add Note
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

function updateAddNoteUnits() {
  const subject = document.getElementById('addNoteSubject').value;
  const unitSelect = document.getElementById('addNoteUnit');
  const chapterSelect = document.getElementById('addNoteChapter');

  unitSelect.innerHTML = '<option value="">Select unit...</option>';
  chapterSelect.innerHTML = '<option value="">Select chapter...</option>';
  chapterSelect.disabled = true;

  if (!subject || !CURRICULUM[subject]) {
    unitSelect.disabled = true;
    return;
  }

  CURRICULUM[subject].units.forEach((unit, i) => {
    unitSelect.innerHTML += `<option value="${i}">${unit.name}</option>`;
  });
  unitSelect.disabled = false;
}

function updateAddNoteChapters() {
  const subject = document.getElementById('addNoteSubject').value;
  const unitIndex = document.getElementById('addNoteUnit').value;
  const chapterSelect = document.getElementById('addNoteChapter');

  chapterSelect.innerHTML = '<option value="">Select chapter...</option>';

  if (!subject || unitIndex === '' || !CURRICULUM[subject]) {
    chapterSelect.disabled = true;
    return;
  }

  const unit = CURRICULUM[subject].units[parseInt(unitIndex)];
  if (unit) {
    unit.chapters.forEach((ch, i) => {
      chapterSelect.innerHTML += `<option value="${i}">${ch}</option>`;
    });
    chapterSelect.disabled = false;
  }
}

async function submitAddNote() {
  const subject = document.getElementById('addNoteSubject').value;
  const unitIndex = document.getElementById('addNoteUnit').value;
  const chapterIndex = document.getElementById('addNoteChapter').value;
  const title = document.getElementById('addNoteTitle').value.trim();
  const content = document.getElementById('addNoteContent').value.trim();

  if (!subject || unitIndex === '' || chapterIndex === '' || !title || !content) {
    showToast('error', 'Error', 'Please fill in all fields.');
    return;
  }

  try {
    await saveNoteToFirestore(subject, parseInt(unitIndex), parseInt(chapterIndex), {
      title: title,
      content: content,
      author: 'Admin',
      authorEmail: ADMIN_EMAIL,
      date: new Date().toISOString()
    });

    showToast('success', 'Added', `Note "${title}" has been added successfully.`);
    document.getElementById('addNoteOverlay')?.remove();
    await loadAdminNotes();
    await loadAdminStats();
  } catch (err) {
    showToast('error', 'Error', 'Failed to add note.');
    console.error(err);
  }
}

// ---- Admin Users Management ----
let allAdminUsers = [];

async function loadAdminUsers() {
  const tbody = document.getElementById('adminUsersBody');
  if (!tbody) return;

  try {
    const [usersSnap, blockedSnap, notesSnap] = await Promise.all([
      db.collection('users').get(),
      db.collection('blocked_users').get(),
      db.collection('notes').get()
    ]);

    const blockedEmails = new Set();
    blockedSnap.forEach(doc => blockedEmails.add(doc.id));

    // Count notes per author
    const notesCounts = {};
    notesSnap.forEach(doc => {
      const email = doc.data().authorEmail;
      if (email) notesCounts[email] = (notesCounts[email] || 0) + 1;
    });

    allAdminUsers = [];
    usersSnap.forEach(doc => {
      const data = doc.data();
      allAdminUsers.push({
        ...data,
        notesCount: notesCounts[data.email] || 0,
        blocked: blockedEmails.has(doc.id)
      });
    });

    // Also find authors from notes who don't have user docs
    const existingEmails = new Set(allAdminUsers.map(u => u.email));
    notesSnap.forEach(doc => {
      const data = doc.data();
      if (data.authorEmail && !existingEmails.has(data.authorEmail)) {
        existingEmails.add(data.authorEmail);
        allAdminUsers.push({
          name: data.author,
          email: data.authorEmail,
          notesCount: notesCounts[data.authorEmail] || 0,
          blocked: blockedEmails.has(data.authorEmail)
        });
      }
    });

    renderAdminUsers(allAdminUsers);

    // Setup search (only bind once)
    const searchInput = document.getElementById('adminUserSearch');
    if (searchInput && !searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase();
        const filtered = allAdminUsers.filter(u =>
          (u.name || '').toLowerCase().includes(q) ||
          (u.email || '').toLowerCase().includes(q)
        );
        renderAdminUsers(filtered);
      });
    }
  } catch (err) {
    console.error('Error loading admin users:', err);
    if (tbody) tbody.innerHTML = '<tr><td colspan="6" class="admin-table-loading" style="color:var(--accent-coral);">Failed to load users.</td></tr>';
  }
}

function renderAdminUsers(users) {
  const tbody = document.getElementById('adminUsersBody');
  if (!tbody) return;

  // Filter out admin from the list
  const filtered = users.filter(u => u.email !== ADMIN_EMAIL);

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="admin-table-loading">No users found</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(user => {
    const safeName = (user.name || 'Unknown').replace(/'/g, "\\'");
    return `
      <tr class="${user.blocked ? 'blocked-row' : ''}">
        <td><strong>${user.name || 'Unknown'}</strong></td>
        <td>${user.email}</td>
        <td>${user.notesCount || 0}</td>
        <td>${user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : '—'}</td>
        <td>
          <span class="admin-status-badge ${user.blocked ? 'status-blocked' : 'status-active'}">
            ${user.blocked ? '<i class="fas fa-ban"></i> Blocked' : '<i class="fas fa-check-circle"></i> Active'}
          </span>
        </td>
        <td>
          <div class="admin-actions">
            ${user.blocked
              ? `<button class="admin-action-btn unblock" onclick="unblockUserAdmin('${user.email}')" title="Unblock User">
                  <i class="fas fa-lock-open"></i>
                </button>`
              : `<button class="admin-action-btn block" onclick="blockUserAdmin('${user.email}', '${safeName}')" title="Block User">
                  <i class="fas fa-ban"></i>
                </button>`
            }
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

async function blockUserAdmin(email, name) {
  if (!confirm(`Are you sure you want to block ${name || email}?\n\nThey will be signed out and unable to use the platform.`)) return;

  try {
    await db.collection('blocked_users').doc(email).set({
      email: email,
      blockedAt: new Date().toISOString(),
      blockedBy: ADMIN_EMAIL
    });
    showToast('success', 'User Blocked', `${name || email} has been blocked.`);
    await loadAdminUsers();
    await loadAdminStats();
  } catch (err) {
    showToast('error', 'Error', 'Failed to block user.');
    console.error(err);
  }
}

async function unblockUserAdmin(email) {
  if (!confirm(`Unblock ${email}?`)) return;

  try {
    await db.collection('blocked_users').doc(email).delete();
    showToast('success', 'User Unblocked', `${email} has been unblocked.`);
    await loadAdminUsers();
    await loadAdminStats();
  } catch (err) {
    showToast('error', 'Error', 'Failed to unblock user.');
    console.error(err);
  }
}
