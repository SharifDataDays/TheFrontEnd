import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export const monthOptions = [
  {key: 'january', text: 'January', value: 'january'},
  {key: 'february', text: 'February', value: 'february'},
  {key: 'march', text: 'March', value: 'march'},
  {key: 'april', text: 'April', value: 'april'},
  {key: 'may', text: 'May', value: 'may'},
  {key: 'june', text: 'June', value: 'june'},
  {key: 'july', text: 'July', value: 'july'},
  {key: 'august', text: 'August', value: 'august'},
  {key: 'september', text: 'September', value: 'september'},
  {key: 'october', text: 'October', value: 'october'},
  {key: 'november', text: 'November', value: 'november'},
  {key: 'december', text: 'December', value: 'december'}
]

export const persianMonthOptions = [
  {key: '1', text: 'فروردین', value: 'فروردین'},
  {key: '2', text: 'اردیبهشت', value: 'اردیبهشت'},
  {key: '3', text: 'خرداد', value: 'خرداد'},
  {key: '4', text: 'تیر', value: 'تیر'},
  {key: '5', text: 'مرداد', value: ' مرداد'},
  {key: '6', text: 'شهریور', value: 'شهریور'},
  {key: '7', text: 'مهر', value: 'مهر'},
  {key: '8', text: 'آبان', value: 'آبان'},
  {key: '9', text: 'آذر', value: 'آذر'},
  {key: '10', text: 'دی', value: 'دی'},
  {key: '11', text: 'بهمن', value: 'بهمن'},
  {key: '12', text: 'اسفند', value: 'اسفند'}
]

function handleChange(e, {value}) {
  e.persist();
  console.log("*******: ", e.target.textContent);
  
}

const SelectingDropDown = (props) => (
  
  <Dropdown
    placeholder={props.text} fluid selection options={props.options}
  />
)

export default SelectingDropDown