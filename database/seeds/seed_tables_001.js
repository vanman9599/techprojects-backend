/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('curriculum').del()
  await knex('curriculum').insert([
    {name: 'Frontend Web Development', description: "Learn to be a frontend developer. Learn HTML, CSS, Javascript, React, and more..."},
    {name: 'FullStack Web Development', description: "Learn to be a full stack web developer. Learn MongoDB, Express, React, Node, and much more..."}]);

   
  await knex('courses').del()
  await knex('courses').insert([
    {name: 'HTML', description: 'Learn HTML'},
    {name: 'CSS', description: 'Learn CSS'},
    {name: 'Javascript', description: 'Learn Javascript'},
    {name: 'React', description: 'Learn React'},
    {name: 'MongoDB', description: 'Learn MongoDB'},
    {name: 'Node', description: 'Learn Node'},
    
  ]);

  await knex('curriculum_courses').del()
  await knex('curriculum_courses').insert([
    {curriculumId: 1, courseId: 1},
    {curriculumId: 1, courseId: 2},
    {curriculumId: 1, courseId: 3},
    {curriculumId: 1, courseId: 4},
    {curriculumId: 2, courseId: 1},
    {curriculumId: 2, courseId: 2},
    {curriculumId: 2, courseId: 3},
    {curriculumId: 2, courseId: 4},
    {curriculumId: 2, courseId: 5},
    {curriculumId: 2, courseId: 6},
  ]);

  await knex('lessons').del()
  await knex('lessons').insert([
    {name: "Getting started with HTML", description: "Getting started with HTML", courseId:1},

    {name: "Semantic HTML", description: "Getting started semantic HTML", courseId:1},

    {name: "Getting started with CSS", description: "Getting started with CSS", courseId:2},

    {name: "Getting started with JS", description: "Getting started with JS", courseId:3},

    {name: "Javascript Basics", description: "JS Basics", courseId:3},

    {name: "Advanced Javascript", description: "Advanced Javascript", courseId:3},

    {name: "JavaScript under the hood", description: "JavaScript under the hood", courseId:3},
    
    {name: "Beginning React", description: "Beginning React", courseId:4},
    {name: "Advanced React", description: "Advanced React", courseId:4},
    {name: "Beginning MongoDB", description: "Beginning MongoDB", courseId:5},
    {name: "Advanced MondoDB", description: "Advanced MongoDB", courseId:5},

    {name: "Beginning Node", description: "Beginning Node", courseId:6},
    {name: "Advanced Node", description: "Advanced Node", courseId:6},
   
  ]);
  await knex('videos').del()
  await knex('videos').insert([
    {name: 'HTML', description: "HMTL", URL: 'https://youtu.be/qz0aGYrrlhU'},
    {name: 'CSS', description: "CSS", URL: 'https://youtu.be/OXGznpKZ_sA'},
    {name: 'JS', description: "JS", URL: 'https://youtu.be/xc3a_CJhjCc',},
    {name: 'JS Advanced', description: "JS Advanced", URL: 'https://youtu.be/1S8SBDhA7HA'},
    {name: 'React', description: "React", URL:'https://youtu.be/hQAHSlTtcmY'},
    {name: 'Node', description: "Node", URL: 'https://youtu.be/zb3Qk8SG5Ms'},
    {name: 'Advanced Node', description: "Advanced Node", URL: 'https://youtu.be/zb3Qk8SG5Ms'},
    ])
    await knex('texts').del()
    await knex('texts').insert([
      {name: 'Frontend Web Development', body: "Learn to be a frontend developer. Learn HTML, CSS, Javascript, React, and more..."},
      {name: 'FullStack Web Development', body: "Learn to be a full stack web developer. Learn MongoDB, Express, React, Node, and much more..."}])

      await knex('lesson_media').del()
      await knex('lesson_media').insert([
        {lessonId: 1, mediaId: 1, type: 'video'},
        {lessonId: 2, mediaId: 2, type: 'video'},
        {lessonId: 3, mediaId: 3, type: 'video'},
        {lessonId: 4, mediaId: 4, type: 'video'},
        {lessonId: 4, mediaId: 5, type: 'video'},
        {lessonId: 5, mediaId: 6, type: 'video'},
        {lessonId: 6, mediaId: 7, type: 'video'},
        {lessonId: 1, mediaId: 1, type: 'texts'},
        {lessonId: 2, mediaId: 2, type: 'texts'},
        
      ]);
};
