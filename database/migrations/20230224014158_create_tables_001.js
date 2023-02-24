
//TODO Migrate:latest to add Unique constraint to username, added
//Cascade constraint to child_detail table

exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments('userId')
        tbl.text('username', 128).notNullable().unique()
        tbl.text('password', 256)
        tbl.text('email', 128)
        tbl.text('role', 128).notNullable() // parent | staff
        
    })

    .createTable('curriculum', tbl => {
        tbl.increments('curriculumId') 
        tbl.text('name', 255).notNullable()
        tbl.text('description', 5000)
        tbl.timestamps();
        
    })

    .createTable('courses', tbl => {
        tbl.increments('courseId')
        tbl.text('name', 255).notNullable()
         tbl.text('description', 5000)
         tbl.timestamps();
        
    })

    .createTable('curriculum_courses', tbl => {
        tbl.increments('ccId')
        tbl.bigInteger('courseId').unsigned()
        tbl.bigInteger('curriculumId').unsigned()
        
        
  })

    .createTable('lessons', tbl => {
        tbl.increments('lessonId')
        tbl.text('name', 128).notNullable()
        tbl.text('description', 5000).notNullable()
        tbl.bigInteger('courseId').unsigned()
        tbl.timestamps();
        })

    .createTable('videos', tbl => {
        tbl.increments('id')
        tbl.text('URL', 1000).notNullable()
        tbl.text('name', 255)
        tbl.text('description', 128)
        tbl.timestamps();
        
    })

  
    .createTable('texts', tbl => {
        tbl.increments('id');
        tbl.text('name', 128);
        tbl.text('title', 255);
        tbl.text('body', 10000);
        tbl.timestamps();
        
    })
    .createTable('lesson_media', tbl => {
        tbl.increments('id');
        tbl.bigInteger('lessonId');
        tbl.bigInteger('mediaId')
        tbl.text('type', 128); //only possible values are 'text' and 'video'
        tbl.timestamps();
        
    })
    .createViewOrReplace('curriculum_courses_view', function (view) {
        const query = "(SELECT c.name as curriculum_name,                        c.description as curriculum_description, co.name as course_name,co.description as course_description   FROM curriculum c, courses co, curriculum_courses as cc where c.curriculumId = cc.curriculumId AND co.courseId = cc.courseId)"
        view.columns(['curriculum_name', 'curriculum_description','course_name','course_description'  ]);
        view.as(knex.select('*').fromRaw(query));
      })

      .createViewOrReplace('courses_lessons_view', function (view) {
        const query = "(SELECT c.name as course_name,c.description as course_description, l.name as lesson_name,l.description as lesson_description   FROM courses c, lessons l where c.courseId = l.courseId)"
        view.columns(['course_name', 'course_description','lesson_name', 'lesson_description']);
        view.as(knex.select('*').fromRaw(query));
      })
};


exports.down = function(knex) {
    return knex.schema 
    
    .dropTableIfExists('users')
    .dropTableIfExists('curriculum')
    .dropTableIfExists('courses')
    .dropTableIfExists('lessons')
    .dropTableIfExists('videos')
    .dropTableIfExists('texts')
    .dropTableIfExists('curriculum_courses')
    .dropTableIfExists('lesson_media')
    .dropViewIfExists('curriculum_courses_view')
    .dropViewIfExists('courses_lessons_view')
};
