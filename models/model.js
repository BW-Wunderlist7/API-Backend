const db = require("../db/db-config");

module.exports = {
  // USERS
  register,
  login,
  getUsers,
  // TASKS
  getTasks,
  getTaskId,
  addTask,
  updateTask,
  removeTask,
  // TAGS
  getTags,
  getTagId,
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

function login(email) {
  return db("users").where(email);
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
  return db("tasks").orderBy("id");
}
// GET TASK BY ID
function getTaskId(id) {
  return db("tasks").where(id);
}
// ADD TASK
function addTask(taskData) {
  return db("tasks").insert(taskData);
}
// UPDATE TASK
function updateTask(id, taskData) {
  return db("tasks")
    .where(id)
    .update(taskData);
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

//⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ GET TAG BY ID ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
// GET TAG BY ID
function getTagId(id) {
  return db("tags").where(id);
}
// ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆

// ADD TAGS
function addTag(tagData) {
  return db("tags").insert(tagData);
}
// UPDATE TASK
function updateTag(id, tagData) {
  return db("tags")
    .where(id)
    .update(tagData);
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
  return db("profiles");
}
// ADD PROFILE
function addProfile(profileData) {
  return db("profiles").insert(profileData);
}
// UPDATE PROFILE
function updateProfile(id, profileData) {
  return db("profiles")
    .where(id)
    .update(profileData);
}

// DELETE PROFILE
function removeProfile(id) {
  return db("profiles")
    .where(id)
    .delete();
}

// ** STRETCH = TASK_TAG
// ATTACH TAG AND TASK!
