import React, { Component} from 'react';
import{ View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

import TeacherExam from './teacher/teacherExam';
routes = require('../routes').default;
export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

  /**
	* Deep get an object without passing in the 'children' key
	* @param path
	* @returns object
	* @private
	*/
	_getRouteObject = (path) => {
		let obj = routes;
		const properties = path.replace(/\./g, '.children.').split('.');
		if (properties.length === 1) return obj[path];
		properties.forEach(function (key) {
			if (!obj || !hasOwnProperty.call(obj, key)) {
				obj = undefined;
				return;
			}
			obj = obj[key];
		});
		return obj;
	};

    changeScene = (path, name) => {
        const obj = this._getRouteObject(path);
        const { drawer, nav } = this.props;
        this.setState({
          route:path
        });
        nav.replace({
          name:path,
					component: obj.component,
        })
        drawer.closeDrawer();
    };

    render() {
        const { application,nav } =this.props;
        const { route } = this.state;
        const { type } = application;
        let items=[];
        let sectionTitle='我的发布';
        if(type==='teacher')
        {
          items=[
            {
                icon: 'group',
                value: '学生',
                label: '6',
                active: route === 'Teacher',
                onPress: () => this.changeScene('Teacher'),
                onLongPress: () => this.changeScene('Teacher')
            },
            {
              icon: 'work',
              value: '作业',
              label: '3',
              active: route === 'TeacherHomework',
              onPress: () => this.changeScene('TeacherHomework'),
              onLongPress: () => this.changeScene('TeacherHomework')
          }, {
              icon: 'create',
              value: '练习',
              active: route === 'TeacherExercise',
              label: '1',
              onPress: () => this.changeScene('TeacherExercise'),
              onLongPress: () => this.changeScene('TeacherExercise')
          }, {
              icon: 'spellcheck',
              value: '考试',
              label: '27',
              active: route === 'TeacherExam',
              onPress: () => this.changeScene('TeacherExam'),
              onLongPress: () => this.changeScene('TeacherExam')
          }
        ];
        }
        else
        {
          items=[{
              icon: 'work',
              value: '作业',
              label: '3',
              active: route === 'StudentHomework',
              onPress: () => this.changeScene('StudentHomework'),
              onLongPress: () => this.changeScene('StudentHomework')
          }, {
              icon: 'create',
              value: '练习',
              active: route === 'StudentExercise',
              label: '1',
              onPress: () => this.changeScene('StudentExercise'),
              onLongPress: () => this.changeScene('StudentExercise')
          }, {
              icon: 'spellcheck',
              value: '考试',
              label: '27',
              active: route === 'StudentExam',
              onPress: () => this.changeScene('StudentExam'),
              onLongPress: () => this.changeScene('StudentExam')
          }
        ];
              sectionTitle='我的项目';
        }
        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/gitlab-nav.png')} />}>
                    <View style={styles.header}>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'face',
                        value: application.name,
                        active: true,
                    }]}
                />
                <Drawer.Section
                    title={sectionTitle}
                    items={items}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="设置"
                    items={[{
                        icon: 'settings',
                        value: '个人设置',
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};
