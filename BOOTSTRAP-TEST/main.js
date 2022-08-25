import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

var myModal = new Modal(document.querySelector('#exampleModal'), {
    backdrop: 'static' // 배경을 눌렀을 때 modal이 꺼지지 않도록 option
})