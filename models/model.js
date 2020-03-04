const db = require("../db/db-config");

module.exports = {
  // USERS
  register,
  login,
  getUsers,
  getAll,
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
  taskTag,
  getTasksTags,
  // AVATAR
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
function getTasks(id) {
  return db("tasks")
    .orderBy("id")
    .where({ user_id: id });
}
// GET TASK BY ID
function getTaskId(id) {
  return db("tasks").where(id);
}
// ADD TASK
function addTask(id, taskData) {
  return db("tasks").insert({
    user_id: id,
    task: taskData.task,
    description: taskData.description,
    due_date: taskData.due_date,
    timestamp: taskData.timestamp,
    completed: taskData.completed
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
function getProfile(id) {
  return db("profiles").where({ user_id: id });
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
  return db("users", "profiles", "tasks", "avatar").select("*");
}

// GET AVATAR BY ID
function avatarURL(id) {
  return db("avatar").where(id);
}

// GET AVATAR
function avatar(id) {
  return db("avatar").where({ user_id: id });
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
function taskTag(taskId, tagId) {
  return db("tasks_tags").insert({ task_id: taskId, tag_id: tagId });
}

function getTasksTags(id) {
  return db("tasks")
    .select("*")
    .join("tasks_tags", { "tasks.id": "tasks_tags.task_id" })
    .join("tags", { "tags.id": "tasks_tags.tag_id" })
    .where({ user_id: id });
}
