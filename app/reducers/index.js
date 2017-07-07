'use strict'

import { combineReducers } from 'redux';
import application from './application';
import teacherApp from './teacherApp';
import classList from './classList';
import studentList from './studentList';
import repoList from './repoList';
import assignments from './assignments';
import readme from './readme';
import assignmentAnalysis from './assignmentAnalysis'
const reducers = combineReducers({
application,
teacherApp,
classList,
studentList,
repoList,
assignments,
readme,
assignmentAnalysis,
})

export default reducers
