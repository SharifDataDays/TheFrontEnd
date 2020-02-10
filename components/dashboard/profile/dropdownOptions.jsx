import { getUnisAPI } from '~/redux/api/signup';
import _ from 'lodash';

export async function getBmp() {
  const bmp = [
    {
      key: 'BAC',
      text: 'Bachelor',
      value: 'BAC'
    },
    {
      key: 'MAS',
      text: 'Master',
      value: 'MAS',
    },
    {
      key: 'PHD',
      text: 'Ph.D',
      value: 'PHD',
    },
  ];

  return bmp;
}

export async function getUniversities() {
  const res2 = await getUnisAPI();
  const uniNames = res2.data;
  let universities = [];
  _.map(uniNames, (uni) => {
    universities = [{ key: uni.name, text: uni.name, value: uni.name }, ...universities];
  });
  return universities;
}

export async function getFields() {
  const names = [
    'ریاضیات',
    'فیزیک',
    'علوم کامپیوتر',
    'شیمی',
    'زیست\u200cشناسی',
    'زمین\u200cشناسی',
    'مهندسی برق',
    'مهندسی مکانیک',
    'مهندسی کامپیوتر',
    'مهندسی عمران',
    'مهندسی هوافضا',
    'مهندسی صنایع',
    'مهندسی نفت',
    'مهندسی شیمی',
    'مهندسی مواد',
    'مهندسی معدن',
    'مهندسی دریا',
    'مهندسی هسته\u200cای',
    'مهندسی کشاورزی',
    'مدیریت',
    'جامعه\u200cشناسی',
    'جمعیت\u200cشناسی',
    'فلسفه',
    'تاریخ',
    'جغرافی',
    'علوم پزشکی',
    'زبان و ادبیات',
    'هنر',
  ];
  let fields = [];
  _.map(names, (name) => {
    fields = [{ key: name, text: name, value: name }, ...fields];
  });
  return fields;
}
