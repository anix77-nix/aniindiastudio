const form = document.getElementById("applyForm");
const msg = document.getElementById("applyMessage");
form?.addEventListener("submit", (e) => {
 e.preventDefault();
 const application = {
 role: document.getElementById("role").value,
 fullName: document.getElementById("fullName").value,
 age: document.getElementById("age").value,
 skills: document.getElementById("skills").value,
 experience: document.getElementById("experience").value,
 sampleUrl: document.getElementById("sampleUrl").value,
 whatsapp: document.getElementById("whatsapp").value,
 intro: document.getElementById("intro").value,
 status: "pending",
 createdAt: new Date().toISOString()
 };
 // Demo only: browser mein save.
 localStorage.setItem(
 "demo_application",
 JSON.stringify(application)
 );
 msg.textContent =
 "Demo application save ho gayi. Production version mein yahi data Supabase database mein jayega.";
 form.reset();
});
