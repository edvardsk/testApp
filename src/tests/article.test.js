import React from 'react';
import { shallow } from 'enzyme';
import { defaultTextValue } from '../constants/initialValues';
import Article from '../../pages/article';

const titleValue = 'Title';
const articleValue = 'Article text';
const email = 'test@test.com';

test('clear title field after submitting the form', () => {
  const activityMenuItem = shallow(<Article />);
  activityMenuItem.find('#article-title').simulate('change', { target: { value: titleValue } });
  activityMenuItem.find('#article-text').simulate('change', { target: { value: articleValue } });
  activityMenuItem.find('#article-author-email').simulate('change', { target: { value: email } });

  let title = activityMenuItem.find('#article-title');

  expect(title.props().value).toEqual(titleValue);
  activityMenuItem.find('form').simulate('submit', { preventDefault: () => {} });

  title = activityMenuItem.find('#article-title');
  expect(title.props().value).toEqual(defaultTextValue);
});
