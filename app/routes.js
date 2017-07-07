export default {

    Teacher: {
        initialRoute: true,

        title: 'Teacher',
        component: require('./components/teacher/classList').default,

        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/teacher/classStudents').default
            }
        }
    },
    TeacherHomework: {
        title: 'Homework',
        component: require('./components/teacher/teacherHomework').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },
    TeacherExercise: {
        title: 'Exercise',
        component: require('./components/teacher/teacherExercise').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },
    TeacherExam: {
        title: 'Exam',
        component: require('./components/teacher/teacherExam').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },

    Student:{
      title: 'Student',
      component: require('./components/student/repoList').default,
    },
    StudentHomework: {
        title: 'Homework',
        component: require('./components/student/homeworkList').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },
    StudentExercise: {
        title: 'Exercise',
        component: require('./components/student/exerciseList').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },
    StudentExam: {
        title: 'Exam',
        component: require('./components/student/examList').default,
        children: {
            example: {
                // title: 'Child Example', // optional
                component: require('./components/questionList').default
            }
        }
    },

}
