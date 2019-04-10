import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Forms Practice',
    icon: 'nb-compose',
    children: [
      {
        title: '01.Simple Registration',
        link: '/pages/practice/simple-registration',
      },
      {
        title: '02.Radio Button Form',
        link: '/pages/practice/radio-button-form',
      },
      {
        title: '03.CheckBox Form',
        link: '/pages/practice/checkbox-form',
      },
      {
        title: '04.Dropdown Menu Form',
        link: '/pages/practice/dropdown-form',
      },
      {
        title: '05.DatePicker Form',
        link: '/pages/practice/datepicker-form',
      },
      {
        title: '05.File Upload Form',
        link: '/pages/practice/file-form',
      },
      {
        title: '06.IFrame Form',
        link: '/pages/practice/iframe-form',
      },
    ],
  },
  // {
  //   title: 'Modal Practice',
  //   icon: 'nb-layout-default',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  {
    title: 'Tables Practice',
    icon: 'nb-tables',
    children: [
      {
        title: '01.Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
];
