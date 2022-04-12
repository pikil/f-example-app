import { fasCode, fasHouse, fasListCheck } from '@quasar/extras/fontawesome-v6'

export default [
  {
    label: 'Home',
    caption: 'Main page',
    icon: fasHouse,
    to: '/'
  },
  {
    label: 'Jobs',
    caption: 'The list of your jobs',
    icon: fasListCheck,
    to: '/admin/jobs'
  },
  {
    label: 'Github',
    caption: 'Github page of the project',
    icon: fasCode,
    tag: 'a',
    target: '_blank',
    href: 'https://github.com/pikil/f-example-app'
  }
]
