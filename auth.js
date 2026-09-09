// IMPORTANT:
// Ye example tab use karo jab Supabase JS client CDN
// ko login/register pages mein load kar diya ho.
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";
// Client initialization project ke official Supabase JS SDK
// ke according karna hai.
async function registerUser(email, password, name, age) {
 // 1) supabase.auth.signUp(...)
 // 2) signup ke baad profiles table mein profile create
 // 3) email verification settings ke according handle
}
async function loginUser(email, password) {
 // supabase.auth.signInWithPassword(...)
}
async function logoutUser() {
 // supabase.auth.signOut()
}
