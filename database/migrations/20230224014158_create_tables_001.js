
exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments('userId')
        tbl.text('password', 256)
        tbl.text('email', 255).notNullable().unique()
        tbl.text('firstName', 255)
        tbl.text('lastName', 255)
        tbl.text('role', 128).notNullable() 
        tbl.timestamps()
        
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
        tbl.text('videoURL', 2000)
        tbl.text('body', 10000)
        tbl.timestamps();
        
        })

  
 
    .createViewOrReplace('curriculum_courses_view', function (view) {
        const query = "(SELECT c.name as curriculum_name, c.curriculumId as curriculumId, c.description as curriculum_description, co.name as course_name,co.description as course_description   FROM curriculum c, courses co, curriculum_courses as cc where c.curriculumId = cc.curriculumId AND co.courseId = cc.courseId)"
        view.columns(['curriculum_name', 'curriculum_description','course_name','course_description', 'curriculumId' ]);
        view.as(knex.select('*').fromRaw(query));
      })

      .createViewOrReplace('courses_lessons_view', function (view) {
        const query = "(SELECT l.lessonId as lessonId, c.courseId as courseId, c.name as course_name,c.description as course_description, l.name as lesson_name,l.description as lesson_description   FROM courses c, lessons l where c.courseId = l.courseId)"
        view.columns(['course_name', 'course_description','lesson_name', 'lesson_description', 'courseId', 'lessonId']);
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
