/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
const lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa risus, blandit eget odio ac, tristique suscipit nisi. Sed gravida eget ex in euismod. Sed at elit placerat tellus efficitur bibendum. Donec efficitur sem elit, a porttitor orci lobortis sit amet. Nullam at venenatis urna. Proin ac vulputate massa. Nunc placerat rhoncus eros quis consectetur. Donec nibh ex, pharetra venenatis venenatis non, imperdiet eu nibh. Donec eu fringilla felis. Mauris suscipit tincidunt erat a laoreet. Sed id lorem lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Aliquam augue sem, congue vulputate quam sed, vulputate vulputate nisi. Nunc non sollicitudin felis. Nunc ac lacus justo. Nulla dictum turpis eros, ac pulvinar lacus consectetur vitae. Praesent nulla lacus, imperdiet vel elit nec, elementum sagittis tellus.</p> <p>In magna magna, suscipit ac posuere rhoncus, lobortis ut sem. Nunc sed ante massa. Nullam tincidunt diam sapien, sit amet vestibulum velit tincidunt non. Nunc eget quam erat. Duis eu tortor metus. Sed eu lacus posuere, porttitor dolor ut, efficitur sem. Morbi eget odio sed turpis maximus mattis. Nam sagittis, metus quis condimentum efficitur, ligula est consectetur neque, a venenatis enim sapien vel turpis. Morbi pellentesque molestie tincidunt. Aenean at sodales est.</p><p> Quisque porta leo augue, quis ullamcorper nulla ultricies vel. Aliquam erat volutpat. Nam ac maximus nisl, eget sollicitudin nunc. Proin a accumsan lectus. Nulla facilisi. Donec vitae ex tortor.Etiam sagittis, diam eget mollis tempus, lorem est congue velit, tristique consequat dui felis in sapien. Praesent vehicula dui id bibendum aliquet. Mauris id molestie libero. Aenean at tellus nec dolor aliquet dictum vel eget eros. Maecenas nec egestas neque. Integer imperdiet viverra purus, et congue orci pellentesque nec. Quisque non ante luctus, venenatis erat in, varius lectus. Nam quis ex erat.</p><p> Phasellus sed nulla mi. Curabitur sagittis enim at neque posuere ornare. Morbi dictum ex eget maximus hendrerit. Quisque fringilla quam odio, in scelerisque nunc sollicitudin aliquet. Aliquam ut venenatis neque. Vivamus porttitor aliquam aliquet.Sed est lacus, porttitor non sollicitudin eget, placerat ac lacus. Nam sapien tortor, cursus id libero sodales, hendrerit convallis libero. Ut bibendum urna at ornare consectetur. Vivamus justo risus, gravida et luctus congue, pharetra non nibh. Sed consequat turpis sed aliquam volutpat. Praesent nec lectus nec tortor facilisis dapibus sed non elit. Mauris quis pretium odio. Proin vitae varius nisl. Sed non eros lacus. Morbi luctus gravida blandit. Quisque vel bibendum nisi. Aenean congue interdum odio. Vivamus tristique ante enim, vel elementum lorem feugiat sollicitudin. Mauris accumsan bibendum est at accumsan. Aliquam tempor magna ut diam feugiat egestas.</p>";

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
    {name: "Getting started with HTML", description: "Getting started with HTML", videoURL: 'https://youtu.be/qz0aGYrrlhU', courseId:1, body: lorem},

    {name: "Semantic HTML", description: "Getting started semantic HTML", videoURL: 'https://youtu.be/OXGznpKZ_sA', courseId:1, body: lorem},

    {name: "Getting started with CSS", description: "Getting started with CSS", courseId:2, videoURL: 'https://youtu.be/OXGznpKZ_sA', body: lorem},

    {name: "Getting started with JS", description: "Getting started with JS", courseId:3, videoURL: 'https://youtu.be/xc3a_CJhjCc', body: lorem},

    {name: "Javascript Basics", description: "JS Basics", courseId:3, videoURL: 'https://youtu.be/xc3a_CJhjCc', body: lorem},

    {name: "Advanced Javascript", description: "Advanced Javascript", courseId:3, videoURL: 'https://youtu.be/1S8SBDhA7HA', body: lorem},

    {name: "JavaScript under the hood", videoURL: 'https://youtu.be/1S8SBDhA7HA', description: "JavaScript under the hood", courseId:3, body: lorem},
    
    {name: "Beginning React", description: "Beginning React", courseId:4, videoURL:'https://youtu.be/hQAHSlTtcmY', body: lorem},
    {name: "Advanced React", description: "Advanced React", courseId:4, videoURL:'https://youtu.be/hQAHSlTtcmY', body: lorem},
    {name: "Beginning MongoDB", description: "Beginning MongoDB", courseId:5,videoURL: 'https://youtu.be/pWbMrx5rVBE', body: lorem},
    {name: "Advanced MondoDB", description: "Advanced MongoDB", courseId:5, videoURL: 'https://youtu.be/pWbMrx5rVBE', body: lorem},

    {name: "Beginning Node", description: "Beginning Node", courseId:6, videoURL: 'https://youtu.be/zb3Qk8SG5Ms', body: lorem},
    {name: "Advanced Node", description: "Advanced Node", courseId:6, videoURL: 'https://youtu.be/zb3Qk8SG5Ms', body: lorem},
   
  ]);
  
  
};
