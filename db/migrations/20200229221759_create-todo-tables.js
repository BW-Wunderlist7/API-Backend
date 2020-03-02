exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();
      users
        .string("email")
        .notNullable()
        .unique();
      users
        .string("password")
        .notNullable()
        .unique();
    })

    .createTable("profiles", profiles => {
      profiles.increments();
      profiles.string("first_name");
      profiles.string("last_name");
      profiles.integer("age");
      profiles.string("occupation");
      profiles
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    .createTable("tasks", tasks => {
      tasks.increments();
      tasks.string("task").notNullable();
      tasks.string("description");
      tasks.date("date").notNullable();
      tasks.boolean("completed").defaultTo("false");
      tasks
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    .createTable("tags", tags => {
      tags.increments();
      tags
        .string("color")
        .notNullable()
        .unique();
      tags
        .string("tag")
        .notNullable()
        .unique();
    })

    .createTable("tasks_tags", bridge => {
      bridge.primary(["task_id", "tag_id"]);
      bridge
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      bridge
        .integer("tag_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tags")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks_tags")
    .dropTableIfExists("tags")
    .dropTableIfExists("tasks")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users");
};
