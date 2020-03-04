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
  removeProfile,
  // TASK_TAG
  avatar,
  avatarURL,
  addAvatar,
  editAvatar,
  deleteAvatar
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
function addTask(id, taskData) {
  return db("tasks").insert({
    task: taskData.task,
    description: taskData.description,
    due_date: taskData.due_date,
    timestamp: taskData.timestamp,
    completed: taskData.completed,
    user_id: id
  });
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
function addProfile(id, profileData) {
  return db("profiles").insert({
    user_id: id,
    first_name: profileData.first_name,
    last_name: profileData.last_name,
    age: profileData.age,
    occupation: profileData.occupation
  });
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

// Get All User Info
function getAll() {
  return db("users")
    .join("tasks", "tasks.user_id", "users.id")
    .select("*");
}

// GET AVATAR BY ID
function avatarURL(id) {
  return db("avatar").where(id);
}

// GET AVATAR
function avatar() {
  return db("avatar");
}

// POST AVATAR
function addAvatar(id, url) {
  console.log("id from model", id);
  return db("avatar").insert({ user_id: id, url: url });
}

// EDIT AVATAR
function editAvatar(id, url) {
  return db("avatar")
    .where(id)
    .update(url);
}

function deleteAvatar(id) {
  return db("avatar")
    .where(id)
    .delete();
}

// ** STRETCH = TASK_TAG
// ATTACH TAG AND TASK!
