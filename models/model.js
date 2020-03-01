const db = require("../db/db-config");

module.exports = {
  // USERS
  register,
  login,
  getUsers,
  // TASKS
  getTasks,
  addTask,
  updateTask,
  removeTask,
  // TAGS
  getTags,
  addTag,
  updateTag,
  removeTag,
  // PROFILE
  getProfile,
  addProfile,
  updateProfile,
  removeProfile
  // TASK_TAG
};

// Users
// Register
function register(userData) {
  return db("users").insert(userData);
}
// Login

function login(id) {
  return db("users")
    .select("id", "email")
    .where({ id })
    .first();
}
// GetUsers
function getUsers() {
  return db("users").select("id", "email");
}
// ** Edit Password
// ** Retrieve Password

// TASKS
// GET TASK
function getTasks() {
  return db("tasks");
}
// ADD TASK
function addTask(taskData) {
  return db("tasks").insert(taskData);
}
// UPDATE TASK
function updateTask(id, taskData) {
  return db("tasks")
    .where(id)
    .insert(taskData);
}
// DELETE TASK
function removeTask(id) {
  return db("tasks")
    .where(id)
    .delete();
}

// TAGS
// GET TAGS
function getTags() {
  return db("tags");
}
// ADD TAGS
function addTag(tagData) {
  return db("tags").insert(tagData);
}
// UPDATE TASK
function updateTag(id, tagData) {
  return db("tags")
    .where(id)
    .insert(tagData);
}
// DELETE TASK
function removeTag(id) {
  return db("tags")
    .where(id)
    .delete();
}

// PROFILE
// GET PROFILE
function getProfile() {
  return db("profile");
}
// ADD PROFILE
function addProfile(profileData) {
  return db("profile").insert(profileData);
}
// UPDATE PROFILE
function updateProfile(id, profileData) {
  return db("profile")
    .where(id)
    .insert(profileData);
}

// DELETE PROFILE
function removeProfile(id) {
  return db("profile")
    .where(id)
    .delete();
}

// ** STRETCH = TASK_TAG
// ATTACH TAG AND TASK!
